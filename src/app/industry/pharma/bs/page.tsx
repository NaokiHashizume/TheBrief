import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryBSContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "医薬品・医療介護 BS（貸借対照表） — Industry",
  description: "医薬品・医療介護の貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
  alternates: { canonical: "https://thebrief.info/industry/pharma/bs" },
  openGraph: {
    title: "医薬品・医療介護 BS（貸借対照表） — Industry",
    description: "医薬品・医療介護の貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
    url: "https://thebrief.info/industry/pharma/bs",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "医薬品・医療介護 BS（貸借対照表） — Industry",
    description: "医薬品・医療介護の貸借対照表（BS）の業界構造を解説。資産構成・負債構造・自己資本比率の特徴と主要企業。",
  },
};

export default function Page() {
  const data = getIndustryFinancial("pharma");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "医薬品・医療介護", href: "/industry/pharma" }, { name: "BS", href: "/industry/pharma/bs" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/pharma" className="hover:text-foreground transition-colors"><T ja="医薬品・医療介護" en="Pharma & Healthcare" /></Link>
        <span>/</span>
        <span>BS</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="医薬品・医療介護 — 貸借対照表（BS）" en="Pharma & Healthcare — Balance Sheet" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界の資産・負債構造を把握する" en="Understanding the industry's asset and liability structure" /></p>
      </div>
      <IndustryBSContent data={data} />
      <div className="mt-8"><Link href="/industry/pharma" className="text-xs text-brief-red hover:underline"><T ja="← 医薬品・医療介護トップに戻る" en="← Back to Pharma & Healthcare" /></Link></div>
    </div>
  );
}
