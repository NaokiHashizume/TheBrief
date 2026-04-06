export type Locale = "ja" | "en";

export const translations = {
  // Header / Nav
  "nav.politics": { ja: "Politics", en: "Politics" },
  "nav.economy": { ja: "Economy", en: "Economy" },
  "nav.industry": { ja: "Industry", en: "Industry" },

  // Homepage Hero
  "hero.tagline": {
    ja: "日本の政治・経済・業界情報・生活を\nもっと分かりやすく、繋がりを持って伝える。",
    en: "Japanese politics, economy, and industry —\nexplained clearly, connected meaningfully.",
  },
  "hero.tagline.bold1": { ja: "分かりやすく", en: "clearly" },
  "hero.tagline.bold2": { ja: "繋がりを持って", en: "connected meaningfully" },
  "hero.sub": {
    ja: "ニュースは「点」ではなく「線」で理解する。\nThe Briefは、出来事の背景・因果・影響を繋いで伝える日本語メディアです。",
    en: "News understood as storylines, not isolated events.\nThe Brief connects context, causes, and consequences in Japanese media.",
  },
  "hero.cta.politics": { ja: "Politics を見る", en: "Explore Politics" },
  "hero.cta.about": { ja: "The Briefとは", en: "About The Brief" },

  // Features
  "features.title": { ja: "他のメディアと何が違うのか", en: "What Makes Us Different" },
  "features.subtitle": { ja: "What Makes Us Different", en: "What Makes Us Different" },
  "feature.1.title": { ja: "ニュースを\u201C線\u201Dで追う", en: "Follow the Storyline" },
  "feature.1.desc": {
    ja: "一つ一つのニュースは「点」でしかありません。The Briefは出来事を時系列の「線」として繋ぎ、文脈と因果関係を明確にします。",
    en: "Individual news items are just dots. The Brief connects events as chronological storylines, making context and causation clear.",
  },
  "feature.2.title": { ja: "わかりやすく、シンプルに", en: "Clear & Simple" },
  "feature.2.desc": {
    ja: "専門用語を避け、誰でも理解できる言葉で伝えます。複雑な政治・経済の構造も、ビジュアルとともに直感的に把握できます。",
    en: "We avoid jargon and explain in plain language. Complex political and economic structures become intuitive through visuals.",
  },
  "feature.3.title": { ja: "繋がりを見せる", en: "Show Connections" },
  "feature.3.desc": {
    ja: "政治の決定が経済に、経済の動きが業界に、業界の変化が私たちの生活にどう影響するか。領域を超えた繋がりを伝えます。",
    en: "How political decisions affect the economy, how economic trends shape industries, and how industry changes impact our daily lives.",
  },

  // Point vs Line visual
  "visual.traditional": { ja: "従来のニュース", en: "Traditional News" },
  "visual.traditional.desc": { ja: "バラバラの「点」として伝えられる情報", en: "Information delivered as disconnected dots" },
  "visual.brief.desc": { ja: "文脈と因果で繋がれた「線」としての情報", en: "Information connected as storylines with context and causation" },

  // Categories
  "categories.title": { ja: "取り扱うテーマ", en: "Topics We Cover" },
  "categories.subtitle": { ja: "Categories", en: "Categories" },
  "cat.politics.desc": { ja: "国会・内閣・議員の構成と政策の動向", en: "Diet, Cabinet, legislators, and policy trends" },
  "cat.economy.desc": { ja: "金融政策・市場動向・マクロ経済の分析", en: "Monetary policy, market trends, and macroeconomic analysis" },
  "cat.industry.desc": { ja: "AI・半導体・自動車・エネルギーなど各業界の最新情報", en: "Latest updates across AI, semiconductors, automotive, energy, and more" },
  "cat.lifestyle.desc": { ja: "政策や経済が私たちの暮らしにどう影響するか", en: "How policy and economy affect our daily lives" },
  "cat.opinion.desc": { ja: "専門家による分析と多角的な視点", en: "Expert analysis and diverse perspectives" },
  "cat.university.desc": { ja: "大学・教育機関の動向と研究トピック", en: "University, education, and research topics" },
  "cat.politics.title": { ja: "政治", en: "Politics" },
  "cat.economy.title": { ja: "経済", en: "Economy" },
  "cat.industry.title": { ja: "業界", en: "Industry" },
  "cat.lifestyle.title": { ja: "生活", en: "Lifestyle" },
  "cat.opinion.title": { ja: "オピニオン", en: "Opinion" },
  "cat.university.title": { ja: "大学", en: "University" },

  // Storylines
  "storylines.title": { ja: "いま追っているストーリー", en: "Stories We're Following" },
  "storylines.subtitle": { ja: "Storylines", en: "Storylines" },
  "storylines.desc": {
    ja: "一つの出来事の始まりから現在までを時系列で追い、全体像を掴めるようにします。",
    en: "We follow events from beginning to present, building a complete picture over time.",
  },

  // CTA
  "cta.title": { ja: "ニュースの「線」を、一緒に追おう。", en: "Follow the storylines with us." },
  "cta.desc": {
    ja: "The Briefは始まったばかりのメディアです。日本の政治・経済・業界のいまを、分かりやすく繋がりを持って伝えていきます。",
    en: "The Brief is a new media outlet. We deliver Japan's politics, economy, and industry news — clearly and connected.",
  },
  "cta.start": { ja: "Politics から始める", en: "Start with Politics" },

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
