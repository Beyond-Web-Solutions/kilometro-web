import { CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function HomePricing() {
  const t = useTranslations("home.pricing");

  const includedFeatures = [
    t("card.features.1"),
    t("card.features.2"),
    t("card.features.3"),
    t("card.features.4"),
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {t("description")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
              {t("card.title")}
            </h3>
            <p className="mt-6 text-base/7 text-gray-600">
              {t("card.description")}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-green-600">
                {t("card.included")}
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-green-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {t("card.pricing.title")}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900">
                    0,00
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600">
                    EUR
                  </span>
                </p>
                <Link
                  href="/download"
                  className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  {t("card.pricing.cta")}
                </Link>
                <p className="mt-6 text-xs/5 text-gray-600">
                  {t(
                    "card.pricing.invoices-and-receipts-available-for-easy-reimbursement",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
