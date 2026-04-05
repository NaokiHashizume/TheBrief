"use client";

import { useState } from "react";
import type { Automaker } from "@/lib/automotive";

function AutomakerCard({ maker }: { maker: Automaker }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl border border-brief-border bg-brief-card overflow-hidden transition-all"
      style={{ borderLeftWidth: "4px", borderLeftColor: maker.color }}
    >
      {/* Header - always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 sm:p-5 flex items-start gap-4 hover:bg-foreground/[0.02] transition-colors"
      >
        {/* Logo badge */}
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
          style={{ backgroundColor: maker.color }}
        >
          {maker.logo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-serif text-lg font-bold">{maker.name}</h2>
            <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/35">
              {maker.nameEn}
            </span>
            {maker.stockCode && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/[0.05] text-foreground/40 tabular-nums">
                {maker.stockCode}
              </span>
            )}
          </div>

          {/* Key metrics row */}
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <div>
              <span className="text-[10px] text-foreground/40">売上高</span>
              <span className="ml-1 text-xs font-semibold tabular-nums">{maker.financials.revenue}</span>
              <span className="ml-1 text-[10px] text-foreground/40">({maker.financials.revenueYoy})</span>
            </div>
            <div>
              <span className="text-[10px] text-foreground/40">営業利益率</span>
              <span className="ml-1 text-xs font-semibold tabular-nums">{maker.financials.opMargin}</span>
            </div>
            <div>
              <span className="text-[10px] text-foreground/40">世界販売</span>
              <span className="ml-1 text-xs font-semibold tabular-nums">{maker.financials.globalSales}</span>
            </div>
          </div>
        </div>

        {/* Toggle arrow */}
        <div className="text-foreground/30 flex-shrink-0 mt-1 transition-transform" style={{ transform: open ? "rotate(180deg)" : "" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-brief-border">
          {/* Overview */}
          <div className="px-4 sm:px-5 py-4">
            <p className="text-[14px] text-foreground/65 leading-[1.8]">{maker.overview}</p>
          </div>

          {/* Financials */}
          <div className="px-4 sm:px-5 pb-4">
            <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
              業績 ({maker.financials.fiscalYear})
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Stat label="売上高" value={maker.financials.revenue} sub={maker.financials.revenueYoy} color={maker.color} />
              <Stat label="営業利益" value={maker.financials.operatingProfit} sub={`利益率 ${maker.financials.opMargin}`} color={maker.color} />
              <Stat label="世界販売台数" value={maker.financials.globalSales} sub={maker.financials.salesYoy} color={maker.color} />
            </div>
          </div>

          {/* EV Strategy */}
          <div className="px-4 sm:px-5 pb-4">
            <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
              EV戦略
            </div>
            <div className="p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
              <p className="text-[13px] text-foreground/60 leading-[1.75]">{maker.evStrategy.summary}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {maker.evStrategy.keyModels.map((m) => (
                  <span
                    key={m}
                    className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${maker.color}12`, color: maker.color }}
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-[10px] text-foreground/45 font-medium">{maker.evStrategy.target}</div>
            </div>
          </div>

          {/* Strengths & Challenges */}
          <div className="px-4 sm:px-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">強み</div>
              <div className="space-y-1">
                {maker.strengths.map((s) => (
                  <div key={s} className="flex items-start gap-1.5">
                    <span className="text-[#10b981] text-[10px] mt-0.5">{"\u25B2"}</span>
                    <span className="text-[12px] text-foreground/60">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">課題</div>
              <div className="space-y-1">
                {maker.challenges.map((c) => (
                  <div key={c} className="flex items-start gap-1.5">
                    <span className="text-[#ef4444] text-[10px] mt-0.5">{"\u25BC"}</span>
                    <span className="text-[12px] text-foreground/60">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="px-4 sm:px-5 pb-5">
            <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">最新ニュース</div>
            <div className="space-y-1">
              {maker.latestNews.map((n, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] text-foreground/35 tabular-nums flex-shrink-0 w-16">{n.date}</span>
                  <span className="text-[12px] text-foreground/60">{n.headline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="p-2.5 rounded-lg bg-foreground/[0.02]">
      <div className="text-[10px] text-foreground/45">{label}</div>
      <div className="text-sm font-bold tabular-nums" style={{ color }}>{value}</div>
      <div className="text-[9px] text-foreground/40">{sub}</div>
    </div>
  );
}

export function AutomakerCards({ automakers }: { automakers: Automaker[] }) {
  return (
    <div>
      <h2 className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-4">
        日本の主要自動車メーカー — クリックで詳細を展開
      </h2>
      <div className="space-y-3">
        {automakers.map((maker) => (
          <AutomakerCard key={maker.slug} maker={maker} />
        ))}
      </div>
    </div>
  );
}
