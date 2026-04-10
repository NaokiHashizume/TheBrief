import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  economicIndicators,
  economyNews,
  newsCategoryLabels,
  newsCategoryLabelsEn,
  type EconomyNewsItem,
  type IndicatorStatus,
} from "@/lib/economy";

export const metadata: Metadata = {
  title: "経済ニュース — Economic News",
  description:
    "日本経済に関する最新ニュースをタイムライン形式で掲載。政策、市場、貿易、財政、雇用の動向を網羅。",
  alternates: { canonical: "https://thebrief.info/economy/news" },
  openGraph: {
    title: "経済ニュース — Economic News",
    description: "日本経済に関する最新ニュースをタイムライン形式で掲載。政策、市場、貿易、財政、雇用の動向を網羅。",
    url: "https://thebrief.info/economy/news",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "経済ニュース — Economic News",
    description: "日本経済に関する最新ニュースをタイムライン形式で掲載。政策、市場、貿易、財政、雇用の動向を網羅。",
  },
};

function statusColor(status: IndicatorStatus): {
  bg: string;
  text: string;
  dot: string;
} {
  switch (status) {
    case "good":
      return {
        bg: "bg-green-500/10 dark:bg-green-500/10",
        text: "text-green-700 dark:text-green-400",
        dot: "bg-green-600 dark:bg-green-500",
      };
    case "bad":
      return {
        bg: "bg-red-500/10 dark:bg-red-500/10",
        text: "text-red-700 dark:text-red-400",
        dot: "bg-red-600 dark:bg-red-500",
      };
    case "neutral":
      return {
        bg: "bg-yellow-500/10 dark:bg-yellow-500/10",
        text: "text-yellow-700 dark:text-yellow-400",
        dot: "bg-yellow-600 dark:bg-yellow-500",
      };
  }
}

/* Group news items by month */
function groupNewsByMonth(news: EconomyNewsItem[]): { month: string; items: EconomyNewsItem[] }[] {
  const groups: { month: string; items: EconomyNewsItem[] }[] = [];
  for (const item of news) {
    const month = item.date.slice(0, 7);
    const last = groups[groups.length - 1];
    if (last && last.month === month) {
      last.items.push(item);
    } else {
      groups.push({ month, items: [item] });
    }
  }
  return groups;
}

function formatMonth(ym: string): { ja: string; en: string } {
  const [year, month] = ym.split("-");
  const monthNum = parseInt(month);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    ja: `${year}年${monthNum}月`,
    en: `${monthNames[monthNum - 1]} ${year}`,
  };
}

export default function EconomyNewsPage() {
  const newsGroups = groupNewsByMonth(economyNews);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
          { name: "News", href: "/economy/news" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/economy" className="hover:text-foreground transition-colors">Economy</Link>
        <span>/</span>
        <span>News</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="経済ニュース" en="Economic News" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T
          ja="日本経済に関する最新ニュースをタイムライン形式で掲載しています。各ニュースに関連する経済指標へのリンクも表示。"
          en="Latest economic news in timeline format. Each item links to related economic indicators."
        />
      </p>

      {/* Back to dashboard link */}
      <div className="mt-4">
        <Link href="/economy" className="text-xs text-[#f59e0b] hover:underline">
          <T ja="← 経済指標ダッシュボードに戻る" en="← Back to Economic Dashboard" />
        </Link>
      </div>

      {/* News Timeline */}
      <div className="mt-8 relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/5" />

        {newsGroups.map((group) => (
          <div key={group.month}>
            {/* Month header */}
            <div className="relative pl-7 pb-4">
              <div className="absolute left-0 top-0.5 w-[15px] h-[15px] rounded-sm bg-foreground/10 z-10 flex items-center justify-center">
                <span className="text-[7px] font-bold text-foreground/50">
                  {parseInt(group.month.split("-")[1])}
                </span>
              </div>
              <div className="text-xs font-medium text-foreground/60 tracking-wide">
                <T ja={formatMonth(group.month).ja} en={formatMonth(group.month).en} />
              </div>
            </div>

            <div className="space-y-0">
              {group.items.map((item, i) => {
                const impactColor =
                  item.impact === "positive"
                    ? "bg-green-600 dark:bg-green-500"
                    : item.impact === "negative"
                      ? "bg-red-600 dark:bg-red-500"
                      : "bg-yellow-600 dark:bg-yellow-500";
                const impactBorder =
                  item.impact === "positive"
                    ? "border-green-500/20"
                    : item.impact === "negative"
                      ? "border-red-500/20"
                      : "border-yellow-500/20";

                return (
                  <div key={i} className="relative pl-7 pb-6 last:pb-0 group">
                    <div
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-background ${impactColor} z-10`}
                    />

                    <div className="text-[10px] tabular-nums text-foreground/45 mb-1">
                      {item.date}
                      <span
                        className={`ml-2 px-1.5 py-0.5 rounded text-[9px] font-medium ${
                          item.impact === "positive"
                            ? "bg-green-500/10 text-green-700 dark:text-green-400"
                            : item.impact === "negative"
                              ? "bg-red-500/10 text-red-700 dark:text-red-400"
                              : "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                        }`}
                      >
                        <T ja={newsCategoryLabels[item.category]} en={{ policy: "Policy", market: "Market", trade: "Trade", fiscal: "Fiscal", labor: "Labor", corporate: "Corporate" }[item.category] ?? newsCategoryLabels[item.category]} />
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-lg bg-brief-card border ${impactBorder} group-hover:bg-foreground/[0.02] transition-colors`}
                    >
                      <h3 className="text-sm font-medium leading-snug">{item.title}</h3>
                      <p className="mt-1.5 text-[11px] text-foreground/55 leading-relaxed">{item.summary}</p>

                      {item.relatedIndicators && item.relatedIndicators.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.relatedIndicators.map((nameEn) => {
                            const ind = economicIndicators.find((e) => e.nameEn === nameEn);
                            if (!ind) return null;
                            const c = statusColor(ind.status);
                            return (
                              <Link
                                key={nameEn}
                                href={`/economy#indicator-${nameEn.replace(/[\s/()]/g, "-")}`}
                                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] ${c.bg} ${c.text} hover:opacity-80 transition-opacity`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                                <T ja={ind.name} en={ind.nameEn} />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
