import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { automakers, industryStats } from "@/lib/automotive";
import { AutomakerCards } from "@/components/AutomakerCards";

export const metadata: Metadata = {
  title: "自動車 — Industry",
  description:
    "トヨタ、ホンダ、日産、スズキ、マツダ、SUBARU、三菱、ダイハツ、いすゞ、日野 — 日本の主要自動車メーカー10社の業績・EV戦略・最新動向を一覧比較。",
  alternates: { canonical: "https://thebrief.info/industry/automotive" },
};

export default function AutomotivePage() {
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
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <span>自動車</span>
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
            <h1 className="font-serif text-2xl md:text-3xl font-bold">自動車</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Automotive
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-3xl">
          日本の主要自動車メーカー10社の業績、EV戦略、強み・課題、最新ニュースをメーカーごとに整理。
          EV化・自動運転・SDVの潮流のなかで、各社がどのような戦略を描いているかを俯瞰する。
        </p>
      </div>

      {/* Industry Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#ef4444]">{industryStats.domesticSales2025}</div>
          <div className="text-[10px] text-foreground/50 mt-1">国内新車販売（FY2025）</div>
          <div className="text-[9px] text-foreground/35">前年比{industryStats.domesticSalesYoy}・4年ぶり減</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#3b82f6]">{industryStats.hvShare}</div>
          <div className="text-[10px] text-foreground/50 mt-1">HV比率（乗用車）</div>
          <div className="text-[9px] text-foreground/35">2025年 国内販売</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#f59e0b]">{industryStats.gdpShare}</div>
          <div className="text-[10px] text-foreground/50 mt-1">GDP構成比</div>
          <div className="text-[9px] text-foreground/35">自動車製造業</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#8b5cf6]">{industryStats.rdSpending}</div>
          <div className="text-[10px] text-foreground/50 mt-1">R&D投資合計</div>
          <div className="text-[9px] text-foreground/35">2026年度・全メーカー計</div>
        </div>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Automaker Cards */}
      <AutomakerCards automakers={automakers} />
    </div>
  );
}
