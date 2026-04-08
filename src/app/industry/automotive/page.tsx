import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { automakers, industryStats } from "@/lib/automotive";
import { automotiveArticles } from "@/lib/automotiveArticles";
import { AutomakerCards } from "@/components/AutomakerCards";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { T } from "@/components/T";

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export const metadata: Metadata = {
  title: "自動車 — Industry",
  description:
    "トヨタ、ホンダ、日産、スズキ、マツダ、SUBARU、三菱、ダイハツ、いすゞ、日野 — 日本の主要自動車メーカー10社の業績・EV戦略・最新動向を一覧比較。",
  alternates: { canonical: "https://thebrief.info/industry/automotive" },
};

export default function AutomotivePage() {
  const sortedArticles = [...automotiveArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "自動車", href: "/industry/automotive" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <span><T ja="自動車" en="Automotive" /></span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#ef444415", color: "#ef4444" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17h2m10 0h2M2 9l2-4h3l2 4m6 0 2-4h3l2 4" /><rect x="2" y="9" width="20" height="8" rx="2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja="自動車" en="Automotive" /></h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Automotive
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-3xl">
          <T ja="日本の主要自動車メーカー10社の業績、EV戦略、強み・課題、最新ニュースをメーカーごとに整理。EV化・自動運転・SDVの潮流のなかで、各社がどのような戦略を描いているかを俯瞰する。" en="Performance, EV strategy, strengths, challenges, and latest news for Japan's 10 major automakers. An overview of how each company is positioning itself amid the EV, autonomous driving, and SDV trends." />
        </p>
      </div>

      {/* Industry Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#ef4444]">{industryStats.domesticSales2025}</div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="国内新車販売（FY2025）" en="Domestic New Car Sales (FY2025)" /></div>
          <div className="text-[9px] text-foreground/35"><T ja={`前年比${industryStats.domesticSalesYoy}・4年ぶり減`} en={`YoY ${industryStats.domesticSalesYoy}, first decline in 4 years`} /></div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#3b82f6]">{industryStats.hvShare}</div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="HV比率（乗用車）" en="HV Share (Passenger)" /></div>
          <div className="text-[9px] text-foreground/35"><T ja="2025年 国内販売" en="2025 Domestic Sales" /></div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#f59e0b]">{industryStats.gdpShare}</div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="GDP構成比" en="Share of GDP" /></div>
          <div className="text-[9px] text-foreground/35"><T ja="自動車製造業" en="Auto Manufacturing" /></div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#8b5cf6]">{industryStats.rdSpending}</div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="R&D投資合計" en="Total R&D Spending" /></div>
          <div className="text-[9px] text-foreground/35"><T ja="2026年度・全メーカー計" en="FY2026, all makers combined" /></div>
        </div>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      <IndustryFinancialNav slug="automotive" />

      {/* Automaker Cards */}
      <AutomakerCards automakers={automakers} />

      <div className="h-px bg-brief-border my-10" />

      {/* Articles */}
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-serif text-xl md:text-2xl font-bold"><T ja="自動車の記事" en="Automotive Articles" /></h2>
        <span className="text-[10px] uppercase tracking-[2px] text-foreground/40">{sortedArticles.length} {sortedArticles.length === 1 ? "article" : "articles"}</span>
      </div>
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/automotive/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#ef4444]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h3 className="font-serif text-lg font-bold leading-snug group-hover:text-[#ef4444] transition-colors">{article.title}</h3>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#ef4444]/8 text-[#ef4444]/70 font-medium">{tag}</span>))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic"><T ja="記事は順次追加されます。" en="More articles coming soon." /></p>
      </div>
    </div>
  );
}
