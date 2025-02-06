import { useLocale, useTranslations } from "next-intl";

export function TermsContent() {
  const t = useTranslations("terms");
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
      <p className="text-base/7 font-semibold text-indigo-600">
        {new Date().toLocaleDateString(locale, { dateStyle: "medium" })}
      </p>
      <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 text-xl/8">{t("introduction")}</p>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.1.title")}
        </h2>
        <p className="mt-6">{t("sections.1.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.2.title")}
        </h2>
        <p className="mt-6">{t("sections.2.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.3.title")}
        </h2>
        <p className="mt-6">{t("sections.3.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.4.title")}
        </h2>
        <p className="mt-6">{t("sections.4.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.5.title")}
        </h2>
        <p className="mt-6">{t("sections.5.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.6.title")}
        </h2>
        <p className="mt-6">{t("sections.6.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.7.title")}
        </h2>
        <p className="mt-6">{t("sections.7.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.8.title")}
        </h2>
        <p className="mt-6">{t("sections.8.content")}</p>
      </div>
    </div>
  );
}
