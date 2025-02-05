"use server";

import { z } from "zod";
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contact(_: unknown, formData: FormData) {
  const t = await getTranslations("contact.form.errors");

  const schema = z.object({
    name: z.string().nonempty(t("invalid-name")),
    email: z.string().email(t("invalid-email")),
    message: z.string().nonempty(t("invalid-message")),
    captcha: z.string().nonempty(t("invalid-captcha")),
  });

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    captcha: formData.get("captcha"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/kilometro-444310/assessments?key=${process.env.GOOGLE_CLOUD_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        event: {
          token: parsed.data.captcha,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    },
  );

  const data = await response.json();

  if (!response.ok || data.score < 0.5) {
    return {
      ok: false,
      errors: { captcha: [t("invalid-captcha")] },
    };
  }

  const { error } = await resend.emails.send({
    from: "Contact | Kilometro <no-reply@kilometro.nl>",
    to: ["info@beyond-web.nl"],
    replyTo: [`"${parsed.data.name}" <${parsed.data.email}>`],
    subject: "Contactformulier op Kilometro",
    text: parsed.data.message,
  });

  if (error) {
    console.error(error);
    return { ok: true, errors: {} };
  }

  return { ok: true, errors: {} };
}
