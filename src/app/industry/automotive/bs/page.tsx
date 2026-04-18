import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { automakers } from "@/lib/automotive";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "自動車 BS（貸借対照表） — Industry",
  description:
    "日本の主要自動車メーカー10社の貸借対照表（BS）を比較。総資産・流動資産・固定資産・負債・自己資本比率を一覧。",
  alternates: { canonical: "https://thebrief.info/industry/automotive/bs" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "自動車 BS（貸借対照表） — Industry",
    description: "日本の主要自動車メーカー10社の貸借対照表（BS）を比較。総資産・流動資産・固定資産・負債・自己資本比率を一覧。",
    url: "https://thebrief.info/industry/automotive/bs",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "自動車 BS（貸借対照表） — Industry",
    description: "日本の主要自動車メーカー10社の貸借対照表（BS）を比較。総資産・流動資産・固定資産・負債・自己資本比率を一覧。",
  },
};

export default function AutomotiveBSPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "自動車", href: "/industry/automotive" },
          { name: "BS", href: "/industry/automotive/bs" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <Link href="/industry/automotive" className="hover:text-foreground transition-colors"><T ja="自動車" en="Automotive" /></Link>
        <span>/</span>
        <span>BS</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#3b82f615", color: "#3b82f6" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="18" rx="1" /><rect x="14" y="3" width="7" height="18" rx="1" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              <T ja="自動車 — 貸借対照表（BS）" en="Automotive — Balance Sheet" />
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Balance Sheet
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-3xl">
          <T
            ja="日本の主要自動車メーカー10社の貸借対照表を比較。資産構成・負債構造・自己資本比率から各社の財務健全性を把握できます。"
            en="Compare balance sheets across Japan's 10 major automakers. Understand financial health through asset composition, debt structure, and equity ratios."
          />
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 mb-8">
        <Link href="/industry/automotive/pl" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">PL</Link>
        <span className="px-4 py-2 text-sm font-bold rounded-lg bg-[#3b82f6] text-white">BS</span>
        <Link href="/industry/automotive/cf" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">CF</Link>
      </div>

      {/* BS Cards */}
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
                    {maker.nameEn} {maker.stockCode && `(${maker.stockCode})`} — {maker.bs.fiscalYear}
                  </span>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[10px] text-foreground/40"><T ja="自己資本比率" en="Equity Ratio" /></div>
                  <div className="text-lg font-bold tabular-nums" style={{ color: maker.color }}>{maker.bs.equityRatio}</div>
                </div>
              </div>

              {/* BS Two-column layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Assets */}
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
                    <T ja="資産の部" en="Assets" />
                  </div>
                  <div className="space-y-1.5">
                    <BSStat label="総資産" labelEn="Total Assets" value={maker.bs.totalAssets} bold color={maker.color} />
                    <BSStat label="流動資産" labelEn="Current Assets" value={maker.bs.currentAssets} indent />
                    <BSStat label="　現金同等物" labelEn="Cash & Equiv." value={maker.bs.cash} indent sub />
                    <BSStat label="固定資産" labelEn="Fixed Assets" value={maker.bs.fixedAssets} indent />
                  </div>
                </div>

                {/* Liabilities & Equity */}
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
                    <T ja="負債・純資産の部" en="Liabilities & Equity" />
                  </div>
                  <div className="space-y-1.5">
                    <BSStat label="負債合計" labelEn="Total Liabilities" value={maker.bs.totalLiab} bold />
                    <BSStat label="流動負債" labelEn="Current Liab." value={maker.bs.currentLiab} indent />
                    <BSStat label="固定負債" labelEn="Fixed Liab." value={maker.bs.fixedLiab} indent />
                    <BSStat label="　有利子負債" labelEn="Interest-bearing" value={maker.bs.interestBearingDebt} indent sub />
                    <BSStat label="純資産" labelEn="Equity" value={maker.bs.equity} bold color={maker.color} />
                  </div>
                </div>
              </div>

              {/* Visual BS bar */}
              <div className="mt-4">
                <BSBar maker={maker} />
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

function BSStat({ label, labelEn, value, bold, color, indent, sub }: {
  label: string; labelEn: string; value: string; bold?: boolean; color?: string; indent?: boolean; sub?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between py-1 px-2 rounded ${indent ? "ml-2" : ""} ${sub ? "opacity-70" : ""}`}>
      <div>
        <span className={`text-[11px] ${bold ? "font-semibold text-foreground/70" : "text-foreground/55"}`}>{label}</span>
        <span className="text-[8px] text-foreground/30 ml-1">{labelEn}</span>
      </div>
      <span className={`text-[12px] tabular-nums ${bold ? "font-bold" : "font-medium text-foreground/65"}`} style={color ? { color } : undefined}>
        {value}
      </span>
    </div>
  );
}

function BSBar({ maker }: { maker: typeof automakers[number] }) {
  const eqRatio = parseFloat(maker.bs.equityRatio) || 0;
  const liabRatio = 100 - eqRatio;

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <div className="text-[8px] text-foreground/35 mb-0.5"><T ja="資産" en="Assets" /></div>
        <div className="flex h-4 rounded overflow-hidden">
          <div className="flex items-center justify-center text-[7px] text-white/80 bg-[#60a5fa]" style={{ width: "45%" }}>
            <T ja="流動" en="Current" />
          </div>
          <div className="flex items-center justify-center text-[7px] text-white/80 bg-[#3b82f6]" style={{ width: "55%" }}>
            <T ja="固定" en="Fixed" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-[8px] text-foreground/35 mb-0.5"><T ja="負債・純資産" en="Liabilities & Equity" /></div>
        <div className="flex h-4 rounded overflow-hidden">
          <div className="flex items-center justify-center text-[7px] text-white/80 bg-[#94a3b8]" style={{ width: `${liabRatio}%` }}>
            <T ja="負債" en="Liab." />
          </div>
          <div
            className="flex items-center justify-center text-[7px] text-white/80"
            style={{ width: `${eqRatio}%`, backgroundColor: maker.color }}
          >
            {eqRatio > 15 && <>{eqRatio.toFixed(0)}%</>}
          </div>
        </div>
      </div>
    </div>
  );
}
