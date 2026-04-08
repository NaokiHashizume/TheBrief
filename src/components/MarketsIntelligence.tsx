"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { economicIndicators } from "@/lib/economy";

const PICKED_NAMES = [
  "日経平均株価",
  "円ドル為替レート",
  "10年国債利回り",
  "日銀政策金利",
];

function Sparkline({ data, trend }: { data: number[]; trend: "up" | "down" | "flat" }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 120;
  const h = 36;
  const step = w / (data.length - 1);
  const pts = data
    .map((v, i) => `${(i * step).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`)
    .join(" ");
  const stroke =
    trend === "up" ? "#1e8449" : trend === "down" ? "#c0392b" : "var(--muted-color)";
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline points={pts} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle
        cx={w}
        cy={h - ((data[data.length - 1] - min) / range) * h}
        r="2.5"
        fill={stroke}
      />
    </svg>
  );
}

export function MarketsIntelligence() {
  const { locale } = useLanguage();
  const picks = PICKED_NAMES.map((n) => economicIndicators.find((i) => i.name === n)).filter(
    (x): x is NonNullable<typeof x> => Boolean(x)
  );

  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      <div className="mb-6 flex items-end justify-between gap-3 border-b border-foreground/20 pb-4">
        <div>
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold block mb-1">
            {locale === "ja" ? "Markets & Intelligence" : "Markets & Intelligence"}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-bold">
            {locale === "ja" ? "マーケット要点" : "Market Snapshot"}
          </h2>
        </div>
        <Link
          href="/economy"
          className="text-sm flex items-center gap-1 hover:text-brief-red transition-colors group whitespace-nowrap"
        >
          <span>{locale === "ja" ? "経済ダッシュボード" : "Open dashboard"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {picks.map((ind) => {
          const arrow = ind.trend === "up" ? "▲" : ind.trend === "down" ? "▼" : "■";
          const color =
            ind.trend === "up" ? "#1e8449" : ind.trend === "down" ? "#c0392b" : "var(--muted-color)";
          return (
            <div
              key={ind.name}
              className="p-5 rounded-xl border border-brief-border bg-brief-card hover:border-foreground/20 transition-all"
            >
              <div className="text-[10px] uppercase tracking-[2px] text-foreground/50 font-semibold">
                {locale === "ja" ? ind.name : ind.nameEn}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold tabular-nums">
                  {locale === "ja" ? ind.value : ind.valueEn ?? ind.value}
                </span>
                <span className="text-xs text-foreground/50 tabular-nums">
                  {locale === "ja" ? ind.unit : ind.unitEn ?? ind.unit}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] tabular-nums" style={{ color }}>
                <span>{arrow}</span>
                <span>{locale === "ja" ? ind.change : ind.changeEn ?? ind.change}</span>
              </div>
              <div className="mt-3">
                {ind.sparkline && <Sparkline data={ind.sparkline} trend={ind.trend} />}
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-foreground/55 line-clamp-3">
                {locale === "ja" ? ind.description : ind.descriptionEn ?? ind.description}
              </p>
              <div className="mt-3 text-[9px] uppercase tracking-[1.6px] text-foreground/35 tabular-nums">
                {ind.lastUpdated}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
