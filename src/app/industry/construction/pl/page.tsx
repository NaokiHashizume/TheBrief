import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { getIndustryFinancial } from "@/lib/industryFinancials";
import { IndustryPLContent } from "@/components/IndustryFinancialPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "建設・不動産 PL（損益計算書） — Industry",
  description: "建設・不動産の損益計算書（PL）の業界構造を解説。売上原価率・販管費率・営業利益率の特徴と主要企業のシェア。",
  alternates: { canonical: "https://thebrief.info/industry/construction/pl" },
};

export default function Page() {
  const data = getIndustryFinancial("construction");
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "建設・不動産", href: "/industry/construction" }, { name: "PL", href: "/industry/construction/pl" }]} />
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/construction" className="hover:text-foreground transition-colors"><T ja="建設・不動産" en="Construction & Real Estate" /></Link>
        <span>/</span>
        <span>PL</span>
      </div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="建設・不動産 — 損益計算書（PL）" en="Construction & Real Estate — Profit & Loss" /></h1>
        <p className="mt-2 text-sm text-foreground/60"><T ja="業界の収益構造を把握する" en="Understanding the industry's revenue structure" /></p>
      </div>
      <IndustryPLContent data={data} />
      <div className="mt-8"><Link href="/industry/construction" className="text-xs text-brief-red hover:underline"><T ja="← 建設・不動産トップに戻る" en="← Back to Construction & Real Estate" /></Link></div>
    </div>
  );
}
