import { LayoutProps, MetaDataParams } from "@/_lib/types/props";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";
import { AppHeader } from "@/app/[locale]/_components/header";
import { Inter } from "next/font/google";
import { AppFooter } from "@/app/[locale]/_components/footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: MetaDataParams): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale });

  return {
    title: {
      template: `%s | ${t("app-name")}`,
      default: t("app-name"), // a default is required when creating a template
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const locale = (await params).locale;

  // Enable static rendering
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <AppHeader />
          {children}
          <AppFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
