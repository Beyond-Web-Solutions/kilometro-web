import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { CarIcon } from "lucide-react";

export function AppHeader() {
  const t = useTranslations();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{t("app-name")}</span>
            <CarIcon className="size-8 text-green-700" />
          </Link>
        </div>
        <div className="flex lg:hidden"></div>
        <div className="flex gap-x-6 lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            {t("header.home")}
          </Link>
          <Link
            href="/contact"
            className="text-sm/6 font-semibold text-gray-900"
          >
            {t("header.contact")}
          </Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link
            href="/download"
            className="text-sm/6 font-semibold text-gray-900"
          >
            {t("header.download")} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
