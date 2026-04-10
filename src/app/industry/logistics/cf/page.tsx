import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryCFContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "物流・運輸 CF（キャッシュフロー計算書） — Industry",
  description: "物流・運輸のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  alternates: { canonical: "https://thebrief.info/industry/logistics/cf" },
  openGraph: {
    title: "物流・運輸 CF（キャッシュフロー計算書） — Industry",
    description: "物流・運輸のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
    url: "https://thebrief.info/industry/logistics/cf",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "物流・運輸 CF（キャッシュフロー計算書） — Industry",
    description: "物流・運輸のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  },
};

export default function Page() {
  const data = getIndustryFinancial("logistics");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "物流・運輸", href: "/industry/logistics" }, { name: "CF", href: "/industry/logistics/cf" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/logistics" className="hover:text-foreground transition-colors"><T ja="物流・運輸" en="Logistics & Transport" /></Link>
        <span>/</span>
        <span>CF</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="物流・運輸 — キャッシュフロー計算書（CF）" en="Logistics & Transport — Cash Flow Statement" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界のキャッシュフロー構造を把握する" en="Understanding the industry's cash flow structure" /></p>
      </div>
      <IndustryCFContent data={data} />
      <div className="mt-8"><Link href="/industry/logistics" className="text-xs text-brief-red hover:underline"><T ja="← 物流・運輸トップに戻る" en="← Back to Logistics & Transport" /></Link></div>
    </div>
  );
}
