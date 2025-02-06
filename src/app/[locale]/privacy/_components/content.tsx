import { useLocale, useTranslations } from "next-intl";

export function PrivacyContent() {
  const t = useTranslations("privacy");
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
        <p className="mt-6">{t("sections.1.content_1")}</p>
        <ul className="mt-6 list-disc list-inside">
          <li>{t("sections.1.items.1")}</li>
          <li>{t("sections.1.items.2")}</li>
        </ul>
        <p className="mt-8">{t("sections.1.content_2")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.2.title")}
        </h2>
        <ul className="mt-6 list-disc list-inside">
          <li>{t("sections.2.items.1")}</li>
          <li>{t("sections.2.items.2")}</li>
          <li>{t("sections.2.items.3")}</li>
        </ul>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.4.title")}
        </h2>
        <p className="mt-8">{t("sections.3.content")}</p>
        <ul className="mt-6 list-disc list-inside">
          <li>{t("sections.4.items.1")}</li>
          <li>{t("sections.4.items.2")}</li>
          <li>{t("sections.4.items.3")}</li>
        </ul>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.5.title")}
        </h2>
        <p className="mt-8">{t("sections.5.content")}</p>
      </div>
      <div className="mt-8 max-w-2xl">
        <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          {t("sections.6.title")}
        </h2>
        <p className="mt-8">{t("sections.6.content")}</p>
      </div>
    </div>
  );
}
