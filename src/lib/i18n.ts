export type Locale = "ja" | "en";

export const translations = {
  // Header / Nav
  "nav.politics": { ja: "Politics", en: "Politics" },
  "nav.economy": { ja: "Economy", en: "Economy" },
  "nav.industry": { ja: "Industry", en: "Industry" },

  // Categories
  "cat.politics.desc": { ja: "国会・内閣・議員の構成と政策の動向", en: "Diet, Cabinet, legislators, and policy trends" },
  "cat.economy.desc": { ja: "金融政策・市場動向・マクロ経済の分析", en: "Monetary policy, market trends, and macroeconomic analysis" },
  "cat.industry.desc": { ja: "AI・半導体・自動車・エネルギーなど各業界の最新情報", en: "Latest updates across AI, semiconductors, automotive, energy, and more" },
  "cat.university.desc": { ja: "学問体系の俯瞰と研究領域の整理", en: "Academic taxonomy and research domain overview" },

  // Footer
  "footer.sections": { ja: "Sections", en: "Sections" },
  "footer.more": { ja: "More", en: "More" },
  "footer.skip": { ja: "メインコンテンツへスキップ", en: "Skip to main content" },

  // Common
  "coming_soon": { ja: "Coming Soon", en: "Coming Soon" },
  "articles.more": { ja: "記事は順次追加されます。", en: "More articles coming soon." },
  "articles.back": { ja: "記事一覧に戻る", en: "Back to article list" },
  "read_articles": { ja: "記事を読む →", en: "Read articles →" },

  // Section pages
  "politics.title": { ja: "政治", en: "Politics" },
  "politics.desc": {
    ja: "国会審議、法案、閣僚人事から選挙情勢まで。日本の政治の今を追いかけます。",
    en: "From Diet deliberations and legislation to cabinet appointments and elections — tracking Japan's political landscape.",
  },
  "economy.title": { ja: "経済", en: "Economy" },
  "economy.desc": {
    ja: "日銀の金融政策、円相場、GDP、物価動向、雇用統計。日本経済のマクロ指標と分析。",
    en: "BOJ monetary policy, yen exchange rates, GDP, inflation, employment. Japan's macro indicators and analysis.",
  },
  "industry.title": { ja: "Industry", en: "Industry" },
  "industry.desc": {
    ja: "日本の主要業界の最新動向を業界別にまとめています。気になる業界を選んでください。",
    en: "Latest trends across Japan's major industries. Select an industry to explore.",
  },
  "industry.note": {
    ja: "各業界ページは順次コンテンツを追加予定です。",
    en: "Content for each industry is being added progressively.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  return entry?.[locale] ?? entry?.ja ?? key;
}
