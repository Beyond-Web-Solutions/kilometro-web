import { MetaDataParams, PageProps } from "@/_lib/types/props";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/app/[locale]/(home)/_components/hero";
import { HomeClients } from "@/app/[locale]/(home)/_components/clients";
import { HomeFeatures } from "@/app/[locale]/(home)/_components/features";
import { HomePricing } from "@/app/[locale]/(home)/_components/pricing";
import { HomeFaq } from "@/app/[locale]/(home)/_components/faq";
import { HomeCta } from "@/app/[locale]/(home)/_components/cta";

export async function generateMetadata({
  params,
}: MetaDataParams): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "home.meta-data" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params }: PageProps) {
  const locale = (await params).locale;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="isolate">
      <HomeHero />
      <HomeClients />
      <HomeFeatures />
      <HomePricing />
      <HomeFaq />
      <HomeCta />
    </main>
  );
}
