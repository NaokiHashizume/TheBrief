import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryBSContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "エンタメ BS（貸借対照表） — Industry",
  description: "エンタメの貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
  alternates: { canonical: "https://thebrief.info/industry/entertainment/bs" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "エンタメ BS（貸借対照表） — Industry",
    description: "エンタメの貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
    url: "https://thebrief.info/industry/entertainment/bs",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "エンタメ BS（貸借対照表） — Industry",
    description: "エンタメの貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
  },
};

export default function Page() {
  const data = getIndustryFinancial("entertainment");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "エンタメ", href: "/industry/entertainment" }, { name: "BS", href: "/industry/entertainment/bs" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/entertainment" className="hover:text-foreground transition-colors"><T ja="エンタメ" en="Entertainment" /></Link>
        <span>/</span>
        <span>BS</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="エンタメ — 貸借対照表（BS）" en="Entertainment — Balance Sheet" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界の資産・負債構造を把握する" en="Understanding the industry's asset and liability structure" /></p>
      </div>
      <IndustryBSContent data={data} />
      <div className="mt-8"><Link href="/industry/entertainment" className="text-xs text-brief-red hover:underline"><T ja="← エンタメトップに戻る" en="← Back to Entertainment" /></Link></div>
    </div>
  );
}
