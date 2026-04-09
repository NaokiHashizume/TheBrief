import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryCFContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "素材 CF（キャッシュフロー計算書） — Industry",
  description: "素材のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  alternates: { canonical: "https://thebrief.info/industry/materials/cf" },
  openGraph: {
    title: "素材 CF（キャッシュフロー計算書） — Industry",
    description: "素材のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
    url: "https://thebrief.info/industry/materials/cf",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "素材 CF（キャッシュフロー計算書） — Industry",
    description: "素材のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  },
};

export default function Page() {
  const data = getIndustryFinancial("materials");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "素材", href: "/industry/materials" }, { name: "CF", href: "/industry/materials/cf" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/materials" className="hover:text-foreground transition-colors"><T ja="素材" en="Materials" /></Link>
        <span>/</span>
        <span>CF</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="素材 — キャッシュフロー計算書（CF）" en="Materials — Cash Flow Statement" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界のキャッシュフロー構造を把握する" en="Understanding the industry's cash flow structure" /></p>
      </div>
      <IndustryCFContent data={data} />
      <div className="mt-8"><Link href="/industry/materials" className="text-xs text-brief-red hover:underline"><T ja="← 素材トップに戻る" en="← Back to Materials" /></Link></div>
    </div>
  );
}
