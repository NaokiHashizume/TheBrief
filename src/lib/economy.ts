export type TrendDirection = "up" | "down" | "flat";
export type IndicatorStatus = "good" | "bad" | "neutral";

export interface EconomicIndicator {
  name: string;
  nameEn: string;
  value: string;
  unit: string;
  trend: TrendDirection;
  status: IndicatorStatus;
  description: string;
  category: "growth" | "prices" | "labor" | "financial" | "trade" | "monetary";
  lastUpdated: string;
}

export const economicIndicators: EconomicIndicator[] = [
  {
    name: "GDP成長率",
    nameEn: "GDP Growth Rate",
    value: "0.7",
    unit: "%",
    trend: "down",
    status: "neutral",
    description: "実質GDP成長率（前年比）。外需の弱さにより成長が鈍化。",
    category: "growth",
    lastUpdated: "2026-03-31",
  },
  {
    name: "消費者物価指数 (CPI)",
    nameEn: "CPI (YoY)",
    value: "2.3",
    unit: "%",
    trend: "down",
    status: "neutral",
    description: "生鮮食品を除く総合指数の前年同月比。日銀目標の2%付近で推移。",
    category: "prices",
    lastUpdated: "2026-03-28",
  },
  {
    name: "完全失業率",
    nameEn: "Unemployment Rate",
    value: "2.5",
    unit: "%",
    trend: "flat",
    status: "good",
    description: "季節調整値。歴史的な低水準を維持。労働市場は依然として堅調。",
    category: "labor",
    lastUpdated: "2026-03-28",
  },
  {
    name: "日経平均株価",
    nameEn: "Nikkei 225",
    value: "53,172",
    unit: "円",
    trend: "up",
    status: "good",
    description: "東京証券取引所プライム市場の代表的な株価指数。前年比+57%超の上昇。",
    category: "financial",
    lastUpdated: "2026-04-03",
  },
  {
    name: "円ドル為替レート",
    nameEn: "USD/JPY",
    value: "159.4",
    unit: "円/ドル",
    trend: "up",
    status: "bad",
    description: "円安基調が継続。過去12ヶ月で約8.5%の円安進行。",
    category: "financial",
    lastUpdated: "2026-04-03",
  },
  {
    name: "経常収支",
    nameEn: "Current Account",
    value: "+9,426",
    unit: "億円",
    trend: "up",
    status: "good",
    description: "2026年1月の経常収支黒字。前年同月比で大幅改善。",
    category: "trade",
    lastUpdated: "2026-03-10",
  },
  {
    name: "貿易収支",
    nameEn: "Trade Balance",
    value: "+573",
    unit: "億円",
    trend: "down",
    status: "neutral",
    description: "2026年2月の貿易収支。黒字は維持するも前年同月比で大幅減。",
    category: "trade",
    lastUpdated: "2026-03-19",
  },
  {
    name: "日銀政策金利",
    nameEn: "BOJ Policy Rate",
    value: "0.75",
    unit: "%",
    trend: "up",
    status: "neutral",
    description: "1995年9月以来の高水準。4月の追加利上げの可能性も示唆。",
    category: "monetary",
    lastUpdated: "2026-03-19",
  },
  {
    name: "10年国債利回り",
    nameEn: "10Y JGB Yield",
    value: "2.39",
    unit: "%",
    trend: "up",
    status: "neutral",
    description: "長期金利は上昇基調。投資家がインフレと利上げを織り込み中。",
    category: "monetary",
    lastUpdated: "2026-04-03",
  },
  {
    name: "マネーストック M2",
    nameEn: "Money Supply M2",
    value: "1,274.9",
    unit: "兆円",
    trend: "down",
    status: "neutral",
    description: "2026年2月のM2残高。前月比でやや減少。",
    category: "monetary",
    lastUpdated: "2026-03-12",
  },
  {
    name: "鉱工業生産指数",
    nameEn: "Industrial Production",
    value: "横ばい",
    unit: "",
    trend: "flat",
    status: "neutral",
    description: "米国関税引き上げの前倒し需要と反動減が交錯。全体としてはほぼ横ばい。",
    category: "growth",
    lastUpdated: "2026-03-28",
  },
  {
    name: "消費支出",
    nameEn: "Consumer Spending",
    value: "+0.8",
    unit: "% (前年比)",
    trend: "up",
    status: "neutral",
    description: "実質消費支出は緩やかに回復。賃金上昇が消費を下支え。",
    category: "growth",
    lastUpdated: "2026-03-07",
  },
  {
    name: "有効求人倍率",
    nameEn: "Job-to-Applicant Ratio",
    value: "1.18",
    unit: "倍",
    trend: "down",
    status: "neutral",
    description: "2026年1月の有効求人倍率。前月の1.20から低下も依然1倍超。",
    category: "labor",
    lastUpdated: "2026-02-28",
  },
];

export const categoryLabels: Record<string, { ja: string; en: string }> = {
  growth: { ja: "成長・生産", en: "Growth & Production" },
  prices: { ja: "物価", en: "Prices" },
  labor: { ja: "雇用", en: "Labor" },
  financial: { ja: "金融市場", en: "Financial Markets" },
  trade: { ja: "貿易・国際収支", en: "Trade & Balance of Payments" },
  monetary: { ja: "金融政策", en: "Monetary Policy" },
};
