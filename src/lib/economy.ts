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

export interface EconomyNewsItem {
  date: string;
  title: string;
  summary: string;
  category: "policy" | "market" | "trade" | "fiscal" | "labor" | "corporate";
  impact: "positive" | "negative" | "neutral";
}

export const economyNews: EconomyNewsItem[] = [
  {
    date: "2026-04-04",
    title: "トランプ政権、日本に24%の相互関税を発動",
    summary: "米国が日本を含む主要貿易相手国に対し相互関税を発動。自動車・半導体を中心に日本の輸出産業への影響が懸念される。日経平均は一時1,200円超の急落。",
    category: "trade",
    impact: "negative",
  },
  {
    date: "2026-04-03",
    title: "日経平均、終値53,172円　関税懸念で乱高下",
    summary: "米国の関税政策を巡る不透明感から東京市場は乱高下。半導体関連株が売られた一方、内需株に買いが入り下げ幅を縮小。",
    category: "market",
    impact: "negative",
  },
  {
    date: "2026-04-01",
    title: "2026年度予算が成立、一般会計115.2兆円",
    summary: "過去最大の一般会計予算が成立。防衛費は8.7兆円（GDP比1.5%）に拡大。子育て支援・半導体産業振興にも重点配分。",
    category: "fiscal",
    impact: "neutral",
  },
  {
    date: "2026-03-28",
    title: "2月CPI、前年比+2.3%に減速",
    summary: "生鮮食品を除くコアCPIは前年同月比+2.3%と前月の+2.5%から鈍化。エネルギー補助金の再開とベース効果が影響。日銀の4月利上げ観測がやや後退。",
    category: "policy",
    impact: "positive",
  },
  {
    date: "2026-03-25",
    title: "春闘、大手企業の賃上げ率5.28%で最終集計",
    summary: "連合の最終集計で大手企業の賃上げ率は5.28%と33年ぶりの高水準。中小企業は3.8%にとどまり、規模間格差が依然課題。",
    category: "labor",
    impact: "positive",
  },
  {
    date: "2026-03-19",
    title: "日銀、政策金利0.75%で据え置き",
    summary: "日銀は金融政策決定会合で政策金利を0.75%に据え置き。植田総裁は「賃金・物価の好循環を確認しつつ次の判断を行う」と述べ、4月以降の追加利上げに含み。",
    category: "policy",
    impact: "neutral",
  },
  {
    date: "2026-03-14",
    title: "トヨタ、EV新ライン稼働で豊田市に3,000億円投資",
    summary: "トヨタ自動車が次世代EV専用ラインの稼働を開始。2028年までにEV生産能力を年間50万台に引き上げ。部品メーカーへの波及効果も期待。",
    category: "corporate",
    impact: "positive",
  },
  {
    date: "2026-03-10",
    title: "1月経常収支、9,426億円の黒字　前年比+38%",
    summary: "海外投資からの第一次所得収支が拡大し、経常収支は前年同月比38%増の黒字を記録。円安による海外利益の膨張が寄与。",
    category: "trade",
    impact: "positive",
  },
  {
    date: "2026-03-07",
    title: "実質消費支出、前年比+0.8%で3ヶ月連続増",
    summary: "総務省の家計調査で1月の実質消費支出は前年同月比+0.8%と3ヶ月連続の増加。賃上げ効果が徐々に消費に波及。",
    category: "labor",
    impact: "positive",
  },
  {
    date: "2026-02-28",
    title: "有効求人倍率、1.18倍に低下も高水準維持",
    summary: "1月の有効求人倍率は1.18倍と前月から0.02ポイント低下。人手不足は継続も、一部業種で求人の慎重姿勢が見られる。",
    category: "labor",
    impact: "neutral",
  },
  {
    date: "2026-02-18",
    title: "第2次高市内閣発足、経済政策の継続を表明",
    summary: "衆院選大勝を受け第2次高市内閣が発足。高市首相は「賃上げと投資の好循環を加速する」と表明し、戦略的インフラ投資の強化を掲げる。",
    category: "policy",
    impact: "neutral",
  },
  {
    date: "2026-02-10",
    title: "日経平均、史上初の5万円台を突破",
    summary: "衆院選で与党圧勝を受け東京市場に買いが殺到。日経平均は一時50,500円を記録し、史上初の5万円突破。海外投資家の日本株選好が継続。",
    category: "market",
    impact: "positive",
  },
  {
    date: "2026-01-24",
    title: "日銀、政策金利を0.75%に引き上げ",
    summary: "日銀は0.50%から0.75%への追加利上げを決定。1995年9月以来約30年ぶりの高水準。為替市場では一時円高に振れるも、その後円安基調に回帰。",
    category: "policy",
    impact: "neutral",
  },
];

export const newsCategoryLabels: Record<string, string> = {
  policy: "政策",
  market: "市場",
  trade: "貿易",
  fiscal: "財政",
  labor: "雇用",
  corporate: "企業",
};

export const categoryLabels: Record<string, { ja: string; en: string }> = {
  growth: { ja: "成長・生産", en: "Growth & Production" },
  prices: { ja: "物価", en: "Prices" },
  labor: { ja: "雇用", en: "Labor" },
  financial: { ja: "金融市場", en: "Financial Markets" },
  trade: { ja: "貿易・国際収支", en: "Trade & Balance of Payments" },
  monetary: { ja: "金融政策", en: "Monetary Policy" },
};
