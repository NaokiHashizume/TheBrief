import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  economicIndicators,
  categoryLabels,
  economyNews,
  newsCategoryLabels,
  type EconomicIndicator,
  type EconomyNewsItem,
  type IndicatorStatus,
  type TrendDirection,
} from "@/lib/economy";

export const metadata: Metadata = {
  title: "Economy — 日本経済指標",
  description:
    "日本の主要経済指標を一覧表示。GDP成長率、消費者物価指数、失業率、日経平均、為替レート、日銀政策金利など、最新の数値と動向をわかりやすくまとめます。",
  alternates: { canonical: "https://thebrief.info/economy" },
};

function trendArrow(trend: TrendDirection): string {
  switch (trend) {
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "flat":
      return "\u2192";
  }
}

function statusColor(status: IndicatorStatus): {
  bg: string;
  text: string;
  border: string;
  dot: string;
} {
  switch (status) {
    case "good":
      return {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/20",
        dot: "bg-green-500",
      };
    case "bad":
      return {
        bg: "bg-red-500/10",
        text: "text-red-400",
        border: "border-red-500/20",
        dot: "bg-red-500",
      };
    case "neutral":
      return {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        dot: "bg-yellow-500",
      };
  }
}

function statusLabel(status: IndicatorStatus): string {
  switch (status) {
    case "good":
      return "良好";
    case "bad":
      return "注意";
    case "neutral":
      return "中立";
  }
}

function IndicatorCard({ indicator }: { indicator: EconomicIndicator }) {
  const colors = statusColor(indicator.status);
  const arrow = trendArrow(indicator.trend);

  return (
    <div
      className={`p-4 rounded-xl bg-brief-card border border-brief-border hover:border-foreground/15 transition-all duration-200`}
    >
      {/* Header row: status dot + name */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
            <h3 className="text-sm font-medium truncate">{indicator.name}</h3>
          </div>
          <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/40 ml-4">
            {indicator.nameEn}
          </span>
        </div>
        <span
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${colors.bg} ${colors.text}`}
        >
          {statusLabel(indicator.status)}
        </span>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-2xl font-bold tabular-nums">{indicator.value}</span>
        {indicator.unit && (
          <span className="text-xs text-foreground/55">{indicator.unit}</span>
        )}
        <span className={`text-lg font-medium ml-1 ${colors.text}`}>{arrow}</span>
      </div>

      {/* Description */}
      <p className="text-[11px] text-foreground/50 leading-relaxed">
        {indicator.description}
      </p>

      {/* Last updated */}
      <div className="mt-2 text-[9px] text-foreground/35 tabular-nums">
        更新: {indicator.lastUpdated}
      </div>
    </div>
  );
}

export default function EconomyPage() {
  // Group indicators by category
  const categories = Object.entries(categoryLabels);
  const grouped = categories
    .map(([key, label]) => ({
      key,
      label,
      indicators: economicIndicators.filter((i) => i.category === key),
    }))
    .filter((g) => g.indicators.length > 0);

  // Summary stats
  const goodCount = economicIndicators.filter((i) => i.status === "good").length;
  const badCount = economicIndicators.filter((i) => i.status === "bad").length;
  const neutralCount = economicIndicators.filter((i) => i.status === "neutral").length;

  // Latest update across all indicators
  const latestUpdate = economicIndicators.reduce((latest, i) =>
    i.lastUpdated > latest ? i.lastUpdated : latest,
    economicIndicators[0].lastUpdated
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <span>Economy</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">Economy</h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        日本の主要経済指標の最新値と動向を一覧で表示しています。色とトレンド矢印で、各指標の健全性を直感的に把握できます。
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        最終更新: {latestUpdate} ※各指標の公表スケジュールに基づき随時更新
      </p>

      {/* Summary Dashboard */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            良好
          </div>
          <div className="text-2xl font-bold tabular-nums text-green-400">
            {goodCount}
            <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1">指標が健全な水準</div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            中立
          </div>
          <div className="text-2xl font-bold tabular-nums text-yellow-400">
            {neutralCount}
            <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1">注視が必要</div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            注意
          </div>
          <div className="text-2xl font-bold tabular-nums text-red-400">
            {badCount}
            <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1">懸念のある指標</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] text-foreground/55">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          良好 (Good)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          中立 (Neutral)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          注意 (Concerning)
        </span>
        <span className="ml-auto flex items-center gap-3">
          <span>{"\u2191"} 上昇</span>
          <span>{"\u2193"} 下降</span>
          <span>{"\u2192"} 横ばい</span>
        </span>
      </div>

      {/* Indicator sections by category */}
      {grouped.map((group) => (
        <div key={group.key} className="mt-10">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h2 className="font-serif text-xl font-bold">{group.label.ja}</h2>
              <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">
                {group.label.en}
              </span>
            </div>
            <div className="flex-1 h-px bg-foreground/5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.indicators.map((indicator) => (
              <IndicatorCard key={indicator.nameEn} indicator={indicator} />
            ))}
          </div>
        </div>
      ))}

      {/* Economy News Timeline */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="font-serif text-xl font-bold">経済ニュース</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">
              Economic News Timeline
            </span>
          </div>
          <div className="flex-1 h-px bg-foreground/5" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/5" />

          <div className="space-y-0">
            {economyNews.map((item, i) => {
              const impactColor =
                item.impact === "positive"
                  ? "bg-green-500"
                  : item.impact === "negative"
                    ? "bg-red-500"
                    : "bg-yellow-500";
              const impactBorder =
                item.impact === "positive"
                  ? "border-green-500/20"
                  : item.impact === "negative"
                    ? "border-red-500/20"
                    : "border-yellow-500/20";

              return (
                <div key={i} className="relative pl-7 pb-6 last:pb-0 group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-background ${impactColor} z-10`}
                  />

                  {/* Date */}
                  <div className="text-[10px] tabular-nums text-foreground/45 mb-1">
                    {item.date}
                    <span
                      className={`ml-2 px-1.5 py-0.5 rounded text-[9px] font-medium ${
                        item.impact === "positive"
                          ? "bg-green-500/10 text-green-400"
                          : item.impact === "negative"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {newsCategoryLabels[item.category]}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`p-3 rounded-lg bg-brief-card border ${impactBorder} group-hover:bg-brief-card transition-colors`}
                  >
                    <h3 className="text-sm font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-foreground/55 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Data sources note */}
      <div className="mt-14 p-5 rounded-xl border border-dashed border-white/10">
        <h3 className="text-sm font-medium mb-2 text-foreground/70">データソースについて</h3>
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          各経済指標は、内閣府、総務省統計局、日本銀行、財務省、厚生労働省等の公式発表に基づいています。
          株価・為替レートは東京証券取引所およびインターバンク市場の終値を参照しています。
          数値は公表時点のものであり、後日改定される場合があります。
        </p>
      </div>
    </div>
  );
}
