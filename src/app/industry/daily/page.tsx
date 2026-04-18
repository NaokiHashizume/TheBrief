import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { dailyArticles } from "@/lib/daily";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { CompetitorCards } from "@/components/CompetitorCards";
import { dailyCompanies } from "@/lib/dailyCompanies";

export const metadata: Metadata = {
  title: "生活・日用品 — Industry",
  description: "トイレタリー、化粧品、生活雑貨、日用品メーカーの動向。",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://thebrief.info/industry/daily" },
  openGraph: {
    title: "生活・日用品 — Industry",
    description: "トイレタリー、化粧品、生活雑貨、日用品メーカーの動向。",
    url: "https://thebrief.info/industry/daily",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "生活・日用品 — Industry",
    description: "トイレタリー、化粧品、生活雑貨、日用品メーカーの動向。",
  },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function Page() {
  const sortedArticles = [...dailyArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "生活・日用品", href: "/industry/daily" }]} />
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>生活・日用品</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#06b6d415", color: "#06b6d4" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">生活・日用品</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">Daily & Household</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">トイレタリー、化粧品、生活雑貨、日用品メーカーの動向。</p>
      </div>
      <div className="h-px bg-brief-border mb-8" />
      <IndustryFinancialNav slug="daily" />

      <CompetitorCards companies={dailyCompanies} title="日本の主要日用品・化粧品企業" />

      <div className="h-px bg-brief-border my-8" />

      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/daily/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#06b6d4]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#06b6d4] transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#06b6d4]/8 text-[#06b6d4]/70 font-medium">{tag}</span>))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
