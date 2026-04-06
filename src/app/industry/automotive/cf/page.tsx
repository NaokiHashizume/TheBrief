import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { automakers } from "@/lib/automotive";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "自動車 CF（キャッシュフロー計算書） — Industry",
  description:
    "日本の主要自動車メーカー10社のキャッシュフロー計算書（CF）を比較。営業CF・投資CF・財務CF・フリーCFを一覧。",
  alternates: { canonical: "https://thebrief.info/industry/automotive/cf" },
};

export default function AutomotiveCFPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "自動車", href: "/industry/automotive" },
          { name: "CF", href: "/industry/automotive/cf" },
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
        <span>CF</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#10b98115", color: "#10b981" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              <T ja="自動車 — キャッシュフロー計算書（CF）" en="Automotive — Cash Flow Statement" />
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Cash Flow Statement
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-3xl">
          <T
            ja="日本の主要自動車メーカー10社のキャッシュフロー計算書を比較。営業活動・投資活動・財務活動のCFバランスからキャッシュ創出力を把握できます。"
            en="Compare cash flow statements across Japan's 10 major automakers. Understand cash generation through operating, investing, and financing activities."
          />
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 mb-8">
        <Link href="/industry/automotive/pl" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">PL</Link>
        <Link href="/industry/automotive/bs" className="px-4 py-2 text-sm font-medium rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors">BS</Link>
        <span className="px-4 py-2 text-sm font-bold rounded-lg bg-[#10b981] text-white">CF</span>
      </div>

      {/* CF Cards */}
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
                    {maker.nameEn} {maker.stockCode && `(${maker.stockCode})`} — {maker.cf.fiscalYear}
                  </span>
                </div>
              </div>

              {/* CF Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                <CFStat label="営業CF" labelEn="Operating" value={maker.cf.operatingCF} positive />
                <CFStat label="投資CF" labelEn="Investing" value={maker.cf.investingCF} />
                <CFStat label="財務CF" labelEn="Financing" value={maker.cf.financingCF} />
                <CFStat label="フリーCF" labelEn="Free CF" value={maker.cf.freeCF} highlight color={maker.color} />
                <CFStat label="設備投資" labelEn="CapEx" value={maker.cf.capex} />
                <CFStat label="配当金" labelEn="Dividends" value={maker.cf.dividends} />
              </div>

              {/* Visual CF bar */}
              <div className="mt-4">
                <CFBar maker={maker} />
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

function CFStat({ label, labelEn, value, positive, highlight, color }: {
  label: string; labelEn: string; value: string; positive?: boolean; highlight?: boolean; color?: string;
}) {
  const isNeg = value.startsWith("-") || value.startsWith("−");
  const displayColor = highlight ? color : isNeg ? "#ef4444" : positive ? "#10b981" : undefined;

  return (
    <div className={`p-2.5 rounded-lg ${highlight ? "bg-foreground/[0.04] border border-brief-border" : "bg-foreground/[0.02]"}`}>
      <div className="text-[10px] text-foreground/45">{label}</div>
      <div className="text-[9px] text-foreground/30">{labelEn}</div>
      <div className="text-sm font-bold tabular-nums mt-1" style={displayColor ? { color: displayColor } : undefined}>
        {value}
      </div>
    </div>
  );
}

function CFBar({ maker }: { maker: typeof automakers[number] }) {
  // Parse CF values (handle Japanese number format)
  const parseCF = (s: string): number => {
    const neg = s.startsWith("-") || s.startsWith("−");
    const num = parseFloat(s.replace(/[^0-9.]/g, "")) || 0;
    return neg ? -num : num;
  };

  const op = parseCF(maker.cf.operatingCF);
  const inv = parseCF(maker.cf.investingCF);
  const fin = parseCF(maker.cf.financingCF);
  const maxAbs = Math.max(Math.abs(op), Math.abs(inv), Math.abs(fin), 1);

  const bars = [
    { label: "営業CF", value: op, color: "#10b981" },
    { label: "投資CF", value: inv, color: "#3b82f6" },
    { label: "財務CF", value: fin, color: "#f59e0b" },
  ];

  return (
    <div className="space-y-1.5">
      {bars.map((b) => {
        const pct = Math.abs(b.value) / maxAbs * 100;
        const isNeg = b.value < 0;
        return (
          <div key={b.label} className="flex items-center gap-2">
            <span className="text-[9px] text-foreground/40 w-12 text-right flex-shrink-0">{b.label}</span>
            <div className="flex-1 flex items-center h-4">
              {isNeg ? (
                <div className="w-full flex justify-end">
                  <div
                    className="h-full rounded-l opacity-60"
                    style={{ width: `${pct}%`, backgroundColor: b.color }}
                  />
                </div>
              ) : (
                <div
                  className="h-full rounded-r"
                  style={{ width: `${pct}%`, backgroundColor: b.color }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
