import { PageProps } from "@/_lib/types/props";
import { setRequestLocale } from "next-intl/server";
import { TermsContent } from "@/app/[locale]/terms/_components/content";

export default async function TermsPage({ params }: PageProps) {
  const locale = (await params).locale;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="bg-white px-6 pt-48 lg:px-8">
      <TermsContent />
    </div>
  );
}
