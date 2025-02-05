import { useTranslations } from "next-intl";

export function HomeFaq() {
  const t = useTranslations("home.faq");

  const faqs = [
    {
      id: 1,
      question: t("items.1.question"),
      answer: t("items.1.answer"),
    },
    {
      id: 2,
      question: t("items.2.question"),
      answer: t("items.2.answer"),
    },
    {
      id: 3,
      question: t("items.3.question"),
      answer: t("items.3.answer"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {t("title")}
      </h2>
      <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
        {t("description")}
      </p>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base/7 font-semibold text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
