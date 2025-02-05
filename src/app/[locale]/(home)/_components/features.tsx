import { useTranslations } from "next-intl";
import { CarIcon, ChartBarIcon, RouteIcon, UserIcon } from "lucide-react";

export function HomeFeatures() {
  const t = useTranslations("home.features");

  const features = [
    {
      name: t("items.1.title"),
      description: t("items.1.description"),
      icon: RouteIcon,
    },
    {
      name: t("items.2.title"),
      description: t("items.2.description"),
      icon: CarIcon,
    },
    {
      name: t("items.3.title"),
      description: t("items.3.description"),
      icon: ChartBarIcon,
    },
    {
      name: t("items.4.title"),
      description: t("items.4.description"),
      icon: UserIcon,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-600">
            {t("title")}
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t("subtitle")}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">{t("description")}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
