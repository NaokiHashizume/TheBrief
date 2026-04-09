import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryCFContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "商社・卸売 CF（キャッシュフロー計算書） — Industry",
  description: "商社・卸売のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  alternates: { canonical: "https://thebrief.info/industry/trading/cf" },
  openGraph: {
    title: "商社・卸売 CF（キャッシュフロー計算書） — Industry",
    description: "商社・卸売のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
    url: "https://thebrief.info/industry/trading/cf",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "商社・卸売 CF（キャッシュフロー計算書） — Industry",
    description: "商社・卸売のキャッシュフロー計算書（CF）の業界構造を解説。営業CF・投資CF・財務CFの特徴と主要企業。",
  },
};

export default function Page() {
  const data = getIndustryFinancial("trading");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "商社・卸売", href: "/industry/trading" }, { name: "CF", href: "/industry/trading/cf" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/trading" className="hover:text-foreground transition-colors"><T ja="商社・卸売" en="Trading & Wholesale" /></Link>
        <span>/</span>
        <span>CF</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="商社・卸売 — キャッシュフロー計算書（CF）" en="Trading & Wholesale — Cash Flow Statement" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界のキャッシュフロー構造を把握する" en="Understanding the industry's cash flow structure" /></p>
      </div>
      <IndustryCFContent data={data} />
      <div className="mt-8"><Link href="/industry/trading" className="text-xs text-brief-red hover:underline"><T ja="← 商社・卸売トップに戻る" en="← Back to Trading & Wholesale" /></Link></div>
    </div>
  );
}
