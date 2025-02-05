"use server";

import { z } from "zod";
import { getTranslations } from "next-intl/server";

export async function contact(prevState: unknown, formData: FormData) {
  const t = await getTranslations("contact.form.errors");

  const schema = z.object({
    name: z.string().nonempty(t("invalid-name")),
    email: z.string().email(t("invalid-email")),
    message: z.string().nonempty(t("invalid-message")),
  });

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  return { ok: true, errors: {} };
}
