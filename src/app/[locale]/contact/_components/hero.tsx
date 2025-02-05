import { useTranslations } from "next-intl";
import { ContactForm } from "@/app/[locale]/contact/_components/form";
import { CaptchaProvider } from "@/app/[locale]/contact/_components/captcha-provider";

export function ContactHero() {
  const t = useTranslations("contact");

  return (
    <div className="mx-auto max-w-xl lg:max-w-4xl">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {t("title")}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">{t("description")}</p>
      <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <CaptchaProvider>
          <ContactForm />
        </CaptchaProvider>
      </div>
    </div>
  );
}
