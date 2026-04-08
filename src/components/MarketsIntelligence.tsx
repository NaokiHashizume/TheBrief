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
    <section className="max-w-[1400px] mx-auto px-6 pb-16">
      <div className="border-t-2 border-b border-foreground pt-2 pb-1 mb-6 flex items-end justify-between gap-3">
        <div>
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold block mb-0.5">
            {locale === "ja" ? "Markets & Intelligence" : "Markets & Intelligence"}
          </span>
          <h2 className="font-serif text-2xl font-bold">
            {locale === "ja" ? "マーケット要点" : "Market Snapshot"}
          </h2>
        </div>
        <Link
          href="/economy"
          className="text-[11px] uppercase tracking-[2px] text-foreground/55 hover:text-brief-red transition-colors whitespace-nowrap"
        >
          {locale === "ja" ? "経済ダッシュボードへ →" : "Open dashboard →"}
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-brief-rule">
        {picks.map((ind, idx) => {
          const arrow = ind.trend === "up" ? "▲" : ind.trend === "down" ? "▼" : "■";
          const color =
            ind.trend === "up" ? "#1e8449" : ind.trend === "down" ? "#c0392b" : "var(--muted-color)";
          return (
            <div
              key={ind.name}
              className={`p-5 border-b border-brief-rule ${
                idx < picks.length - 1 ? "lg:border-r border-brief-rule" : ""
              } ${idx % 2 === 0 ? "border-r lg:border-r" : ""}`}
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
