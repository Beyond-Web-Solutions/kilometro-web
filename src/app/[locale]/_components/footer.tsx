import { useTranslations } from "next-intl";
import Logo from "./logo.png";
import Link from "next/link";
import Image from "next/image";

export function AppFooter() {
  const t = useTranslations("home.footer");

  const navigation = [
    { name: t("contact"), href: "/contact" },
    { name: t("terms"), href: "/terms" },
    { name: t("privacy"), href: "/privacy" },
    { name: t("cookie"), href: "/cookies" },
  ];

  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden border-t px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex items-center justify-center">
          <p className="mr-2 text-center text-sm/6 text-gray-600">
            {t("product_of")}
          </p>
          <Link href="https://beyond-web.nl" target="_blank">
            <Image
              className="h-5 w-auto"
              src={Logo}
              alt="Beyond Web Solutions"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
