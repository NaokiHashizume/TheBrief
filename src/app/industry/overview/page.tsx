import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { IndustryBubbleChart, IndustryFinancialProfiles } from "@/components/IndustryBubbleChart";

export const metadata: Metadata = {
  title: "業界概況 — Industry Overview",
  description:
    "日本の主要業界を売上高・利益率・時価総額で比較するビジュアルダッシュボード。財務プロファイル（PL/BS/CF）も掲載。",
  alternates: { canonical: "https://thebrief.info/industry/overview" },
};

export default function IndustryOverviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "Overview", href: "/industry/overview" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>Overview</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="業界概況" en="Industry Overview" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T
          ja="日本の主要業界を売上高・利益率・時価総額で比較するビジュアルダッシュボードです。各企業の財務プロファイル（PL/BS/CF）も掲載しています。"
          en="A visual dashboard comparing Japan's major industries by revenue, profitability, and market cap. Includes financial profiles (PL/BS/CF) for key companies."
        />
      </p>

      {/* Back to industry link */}
      <div className="mt-4">
        <Link href="/industry" className="text-xs text-brief-red hover:underline">
          <T ja="← 業界一覧に戻る" en="← Back to Industry List" />
        </Link>
      </div>

      {/* Bar chart */}
      <IndustryBubbleChart />

      {/* Financial Profiles (PL / BS / CF) */}
      <IndustryFinancialProfiles />
    </div>
  );
}
