import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  economicIndicators,
  categoryLabels,
  type EconomicIndicator,
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
        bg: "bg-green-500/10 dark:bg-green-500/10",
        text: "text-green-700 dark:text-green-400",
        border: "border-green-500/20",
        dot: "bg-green-600 dark:bg-green-500",
      };
    case "bad":
      return {
        bg: "bg-red-500/10 dark:bg-red-500/10",
        text: "text-red-700 dark:text-red-400",
        border: "border-red-500/20",
        dot: "bg-red-600 dark:bg-red-500",
      };
    case "neutral":
      return {
        bg: "bg-yellow-500/10 dark:bg-yellow-500/10",
        text: "text-yellow-700 dark:text-yellow-400",
        border: "border-yellow-500/20",
        dot: "bg-yellow-600 dark:bg-yellow-500",
      };
  }
}

function statusLabel(status: IndicatorStatus): React.ReactNode {
  switch (status) {
    case "good":
      return <T ja="良好" en="Good" />;
    case "bad":
      return <T ja="注意" en="Caution" />;
    case "neutral":
      return <T ja="中立" en="Neutral" />;
  }
}

/* Mini sparkline SVG */
function Sparkline({ data, status }: { data: number[]; status: IndicatorStatus }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 24;
  const pad = 2;
  const points = data
    .map((v, i) => {
      const x = pad + (i / (data.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const strokeColor =
    status === "good" ? "#16a34a" : status === "bad" ? "#dc2626" : "#ca8a04";

  return (
    <svg width={w} height={h} className="flex-shrink-0 opacity-60">
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndicatorCard({ indicator }: { indicator: EconomicIndicator }) {
  const colors = statusColor(indicator.status);
  const arrow = trendArrow(indicator.trend);

  return (
    <div
      id={`indicator-${indicator.nameEn.replace(/[\s/()]/g, "-")}`}
      className={`p-4 rounded-xl bg-brief-card border border-brief-border hover:border-foreground/15 transition-all duration-200`}
    >
      {/* Header row: status dot + name */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
            <h3 className="text-sm font-medium truncate"><T ja={indicator.name} en={indicator.nameEn} /></h3>
          </div>
          <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/50 ml-4">
            {indicator.nameEn}
          </span>
        </div>
        <span
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${colors.bg} ${colors.text}`}
        >
          {statusLabel(indicator.status)}
        </span>
      </div>

      {/* Value + Sparkline */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold tabular-nums">
            <T ja={indicator.value} en={indicator.valueEn ?? indicator.value} />
          </span>
          {indicator.unit && (
            <span className="text-xs text-foreground/55">
              <T ja={indicator.unit} en={indicator.unitEn ?? indicator.unit} />
            </span>
          )}
          <span className={`text-lg font-medium ml-1 ${colors.text}`}>{arrow}</span>
        </div>
        {indicator.sparkline && (
          <Sparkline data={indicator.sparkline} status={indicator.status} />
        )}
      </div>

      {/* Change from previous period */}
      {indicator.change && (
        <div className="text-[10px] text-foreground/50 mb-2 tabular-nums">
          <T ja={indicator.change} en={indicator.changeEn ?? indicator.change} />
        </div>
      )}

      <div className="mb-2 rounded-lg border border-brief-border bg-foreground/[0.03] px-2.5 py-2">
        <div className="text-[9px] tracking-[1.4px] uppercase text-foreground/40 mb-1">
          <T ja="どう見るか" en="Why It Matters" />
        </div>
        <p className="text-[11px] text-foreground/60 leading-relaxed">
          <T ja={indicator.purpose} en={indicator.purposeEn ?? indicator.purpose} />
        </p>
      </div>

      {/* Description */}
      <p className="text-[11px] text-foreground/50 leading-relaxed">
        <T ja={indicator.description} en={indicator.descriptionEn ?? indicator.description} />
      </p>

      {/* Last updated */}
      <div className="mt-2 text-[9px] text-foreground/45 tabular-nums">
        <T ja="更新" en="Updated" />: {indicator.lastUpdated}
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
  const latestUpdate = economicIndicators.reduce(
    (latest, i) => (i.lastUpdated > latest ? i.lastUpdated : latest),
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
        <T
          ja="日本の主要経済指標の最新値と動向を一覧で表示しています。色とトレンド矢印で、各指標の健全性を直感的に把握できます。"
          en="Displays the latest values and trends of Japan's key economic indicators at a glance. Colors and trend arrows help you intuitively assess the health of each indicator."
        />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="最終更新" en="Last updated" />: {latestUpdate} <T ja="※各指標の公表スケジュールに基づき随時更新" en="* Updated periodically based on each indicator's release schedule" />
      </p>

      {/* Category Navigation Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {grouped.map((group) => (
          <a
            key={group.key}
            href={`#cat-${group.key}`}
            className="px-3 py-1.5 text-[11px] font-medium rounded-full border border-brief-border bg-brief-card hover:border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <T ja={group.label.ja} en={group.label.en} />
          </a>
        ))}
      </div>

      {/* Summary Dashboard */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            <T ja="良好" en="Good" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold tabular-nums text-green-700 dark:text-green-400">
              {goodCount}
              <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
            </div>
            <div className="flex-1 h-2 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-green-600 dark:bg-green-500 transition-all"
                style={{ width: `${(goodCount / economicIndicators.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="指標が健全な水準" en="Indicators at healthy levels" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            <T ja="中立" en="Neutral" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold tabular-nums text-yellow-700 dark:text-yellow-400">
              {neutralCount}
              <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
            </div>
            <div className="flex-1 h-2 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-yellow-600 dark:bg-yellow-500 transition-all"
                style={{ width: `${(neutralCount / economicIndicators.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="注視が必要" en="Needs monitoring" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">
            <T ja="注意" en="Caution" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold tabular-nums text-red-700 dark:text-red-400">
              {badCount}
              <span className="text-sm text-foreground/45">/{economicIndicators.length}</span>
            </div>
            <div className="flex-1 h-2 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-red-600 dark:bg-red-500 transition-all"
                style={{ width: `${(badCount / economicIndicators.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="懸念のある指標" en="Indicators of concern" /></div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] text-foreground/55">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-500" />
          <T ja="良好 (Good)" en="Good" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-600 dark:bg-yellow-500" />
          <T ja="中立 (Neutral)" en="Neutral" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500" />
          <T ja="注意 (Concerning)" en="Concerning" />
        </span>
        <span className="ml-auto flex items-center gap-3">
          <span>{"\u2191"} <T ja="上昇" en="Rising" /></span>
          <span>{"\u2193"} <T ja="下降" en="Falling" /></span>
          <span>{"\u2192"} <T ja="横ばい" en="Flat" /></span>
        </span>
      </div>

      {/* Indicator sections by category */}
      {grouped.map((group) => (
        <div key={group.key} id={`cat-${group.key}`} className="mt-10 scroll-mt-20">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h2 className="font-serif text-xl font-bold"><T ja={group.label.ja} en={group.label.en} /></h2>
              <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">
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

      {/* Navigation to related pages */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/economy/news"
          className="group p-5 rounded-xl border-2 border-dashed border-[#f59e0b]/30 hover:border-[#f59e0b] hover:bg-[#f59e0b]/[0.03] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f59e0b]">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold"><T ja="経済ニュース" en="Economic News" /></h2>
              <p className="text-xs text-foreground/55"><T ja="タイムライン形式の最新ニュース" en="Latest news in timeline format" /></p>
            </div>
          </div>
        </Link>
        <Link
          href="/economy/articles"
          className="group p-5 rounded-xl border-2 border-dashed border-[#f59e0b]/30 hover:border-[#f59e0b] hover:bg-[#f59e0b]/[0.03] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f59e0b]">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold"><T ja="深掘り記事" en="In-Depth Articles" /></h2>
              <p className="text-xs text-foreground/55"><T ja="経済テーマの解説記事" en="Analysis articles on economic themes" /></p>
            </div>
          </div>
        </Link>
        <Link
          href="/economy/us-iran-relations"
          className="group p-5 rounded-xl border-2 border-dashed border-[#f59e0b]/30 hover:border-[#f59e0b] hover:bg-[#f59e0b]/[0.03] transition-all sm:col-span-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f59e0b]">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold"><T ja="米国vsイラン — 70年の対立構造と2026年戦争の全貌" en="US vs Iran — 70 Years of Confrontation and the 2026 War" /></h2>
              <p className="text-xs text-foreground/55"><T ja="経済制裁、核開発、ホルムズ海峡封鎖の影響を多角的に分析" en="Multi-angle analysis of sanctions, nuclear development, and the Hormuz Strait blockade" /></p>
            </div>
          </div>
        </Link>
      </div>

      {/* Data sources note */}
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border">
        <h3 className="text-sm font-medium mb-2 text-foreground/70"><T ja="データソースについて" en="About Data Sources" /></h3>
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          <T
            ja="各経済指標は、内閣府、総務省統計局、日本銀行、財務省、厚生労働省等の公式発表に基づいています。株価・為替レートは東京証券取引所およびインターバンク市場の終値を参照しています。数値は公表時点のものであり、後日改定される場合があります。"
            en="Economic indicators are based on official releases from the Cabinet Office, Statistics Bureau, Bank of Japan, Ministry of Finance, Ministry of Health, Labour and Welfare, and other agencies. Stock prices and exchange rates reference closing values from the Tokyo Stock Exchange and the interbank market. Figures are as of the time of publication and may be revised at a later date."
          />
        </p>
      </div>
    </div>
  );
}
