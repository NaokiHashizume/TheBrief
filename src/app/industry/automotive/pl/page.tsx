import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { automakers } from "@/lib/automotive";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "自動車 PL（損益計算書） — Industry",
  description:
    "日本の主要自動車メーカー10社の損益計算書（PL）を比較。売上高・売上原価・粗利・販管費・営業利益・純利益を一覧。",
  alternates: { canonical: "https://thebrief.info/industry/automotive/pl" },
};

export default function AutomotivePLPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "自動車", href: "/industry/automotive" },
          { name: "PL", href: "/industry/automotive/pl" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/automotive" className="hover:text-foreground transition-colors"><T ja="自動車" en="Automotive" /></Link>
        <span>/</span>
        <span>PL</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#ef444415", color: "#ef4444" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              <T ja="自動車 — 損益計算書（PL）" en="Automotive — Profit & Loss" />
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Profit & Loss Statement
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-3xl">
          <T
            ja="日本の主要自動車メーカー10社の損益計算書を比較。売上高から純利益までの収益構造を把握できます。"
            en="Compare profit & loss statements across Japan's 10 major automakers. Understand revenue structures from top line to bottom line."
          />
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 mb-8">
        <span className="px-4 py-2 text-sm font-bold rounded-lg bg-[#ef4444] text-white">PL</span>
        <Link href="/industry/automotive/bs" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">BS</Link>
        <Link href="/industry/automotive/cf" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">CF</Link>
      </div>

      {/* PL Cards */}
      <div className="space-y-4">
        {automakers.map((maker) => (
          <div
            key={maker.slug}
            className="rounded-xl border border-brief-border bg-brief-card overflow-hidden"
            style={{ borderLeftWidth: "4px", borderLeftColor: maker.color }}
          >
            <div className="p-4 sm:p-5">
              {/* Company header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: maker.color }}
                >
                  {maker.logo}
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold">{maker.name}</h2>
                  <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/35">
                    {maker.nameEn} {maker.stockCode && `(${maker.stockCode})`} — {maker.pl.fiscalYear}
                  </span>
                </div>
              </div>

              {/* PL Waterfall */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                <PLStat label="売上高" labelEn="Revenue" value={maker.pl.revenue} color={maker.color} />
                <PLStat label="売上原価" labelEn="COGS" value={maker.pl.cogs} sub={`粗利率 ${maker.pl.grossMargin}`} />
                <PLStat label="販管費" labelEn="SGA" value={maker.pl.sga} sub={`R&D ${maker.pl.rd}`} />
                <PLStat label="営業利益" labelEn="Operating Profit" value={maker.pl.operatingProfit} sub={`利益率 ${maker.pl.opMargin}`} color={maker.color} />
                <PLStat label="純利益" labelEn="Net Income" value={maker.pl.netIncome} sub={`純利益率 ${maker.pl.netMargin}`} color={maker.color} />
              </div>

              {/* Visual PL bar */}
              <div className="mt-4">
                <div className="text-[9px] text-foreground/40 mb-1">
                  <T ja="収益構造（売上高 = 100%）" en="Revenue Structure (Revenue = 100%)" />
                </div>
                <PLBar maker={maker} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link href="/industry/automotive" className="text-xs text-brief-red hover:underline">
          <T ja="← 自動車トップに戻る" en="← Back to Automotive" />
        </Link>
      </div>
    </div>
  );
}

function PLStat({ label, labelEn, value, sub, color }: { label: string; labelEn: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="p-2.5 rounded-lg bg-foreground/[0.02]">
      <div className="text-[10px] text-foreground/45">{label}</div>
      <div className="text-[9px] text-foreground/30">{labelEn}</div>
      <div className="text-sm font-bold tabular-nums mt-1" style={color ? { color } : undefined}>{value}</div>
      {sub && <div className="text-[9px] text-foreground/40 mt-0.5">{sub}</div>}
    </div>
  );
}

function PLBar({ maker }: { maker: typeof automakers[number] }) {
  const margin = parseFloat(maker.pl.opMargin) || 0;
  const grossMargin = parseFloat(maker.pl.grossMargin) || 0;
  const cogsRatio = 100 - grossMargin;
  const sgaRatio = grossMargin - margin;

  return (
    <div className="flex h-5 rounded-md overflow-hidden text-[8px] font-medium">
      <div
        className="flex items-center justify-center text-white/90"
        style={{ width: `${cogsRatio}%`, backgroundColor: "#94a3b8" }}
      >
        {cogsRatio > 15 && `原価 ${cogsRatio.toFixed(0)}%`}
      </div>
      <div
        className="flex items-center justify-center text-white/90"
        style={{ width: `${sgaRatio}%`, backgroundColor: "#64748b" }}
      >
        {sgaRatio > 8 && `販管費 ${sgaRatio.toFixed(0)}%`}
      </div>
      <div
        className="flex items-center justify-center text-white/90"
        style={{ width: `${Math.max(margin, 2)}%`, backgroundColor: maker.color }}
      >
        {margin > 3 && `${margin.toFixed(1)}%`}
      </div>
    </div>
  );
}
