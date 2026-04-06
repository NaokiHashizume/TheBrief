"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";

const mainSections = [
  {
    href: "/politics",
    color: "#e53e3e",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" />
      </svg>
    ),
    titleJa: "Politics",
    titleEn: "Politics",
    descJa: "国会・内閣・議員",
    descEn: "Diet, Cabinet & Legislators",
    statsJa: "衆参議席数 / 閣僚一覧 / 審議中法案6本 / 施行済4件",
    statsEn: "Seats / Cabinet / 6 Bills in Debate / 4 Laws Enacted",
    items: [
      { ja: "衆議院・参議院 政党別議席数", en: "House seats by party", href: "/politics/diet" },
      { ja: "第2次高市内閣 閣僚一覧", en: "2nd Takaichi Cabinet members", href: "/politics/cabinet" },
      { ja: "審議中の法案", en: "Bills under deliberation", href: "/politics/debates" },
      { ja: "政治ニュース", en: "Politics news timeline", href: "/politics/news" },
    ],
  },
  {
    href: "/economy",
    color: "#f59e0b",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
      </svg>
    ),
    titleJa: "Economy",
    titleEn: "Economy",
    descJa: "経済指標・ニュース・解説記事",
    descEn: "Indicators, News & Analysis",
    statsJa: "14指標をリアルタイム追跡 / 経済ニュース / 深掘り記事",
    statsEn: "14 indicators tracked / Economic news / In-depth articles",
    items: [
      { ja: "経済指標ダッシュボード", en: "Economic indicators dashboard", href: "/economy" },
      { ja: "経済ニュース タイムライン", en: "Economic news timeline", href: "/economy/news" },
      { ja: "深掘り記事（税制・金融政策等）", en: "In-depth articles (tax, monetary policy)", href: "/economy/articles" },
    ],
  },
  {
    href: "/industry",
    color: "#38a169",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    titleJa: "Industry",
    titleEn: "Industry",
    descJa: "17業界の動向・ビジネスモデル分析",
    descEn: "17 Industries & Business Model Analysis",
    statsJa: "17業界 / PL・BS・CF分析 / 業界別詳細記事",
    statsEn: "17 industries / PL・BS・CF analysis / Detailed articles",
    items: [
      { ja: "業界一覧（17業界）", en: "Industry list (17 sectors)", href: "/industry" },
      { ja: "業界概況ダッシュボード", en: "Industry overview dashboard", href: "/industry/overview" },
      { ja: "AI・半導体・自動車・エネルギー…", en: "AI, semiconductors, automotive, energy...", href: "/industry" },
    ],
  },
  {
    href: "/university",
    color: "#6366f1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8 12 4l9 4-9 4-9-4Z" />
        <path d="M7 10.5V15c0 1 2.2 3 5 3s5-2 5-3v-4.5" />
        <path d="M21 9v6" />
      </svg>
    ),
    titleJa: "University",
    titleEn: "University",
    descJa: "学問体系・研究領域・大学知の入口",
    descEn: "Discipline Map, Research Fields & University Knowledge",
    statsJa: "6大分類 / 39中分類 / 256小分類",
    statsEn: "6 major fields / 39 subfields / 256 topics",
    items: [
      { ja: "学問の体系図", en: "Academic discipline map", href: "/university" },
      { ja: "形式科学から自然科学へ", en: "From formal to natural sciences", href: "/university#formal" },
      { ja: "社会科学・学際領域まで俯瞰", en: "Survey social and interdisciplinary fields", href: "/university#social" },
    ],
  },
];

const industryHighlights = [
  { slug: "ict", title: "情報通信", titleEn: "ICT", color: "#3b82f6" },
  { slug: "ai", title: "AI", titleEn: "AI", color: "#8b5cf6" },
  { slug: "automotive", title: "自動車", titleEn: "Automotive", color: "#ef4444" },
  { slug: "finance", title: "金融機関", titleEn: "Finance", color: "#f59e0b" },
  { slug: "pharma", title: "医薬品", titleEn: "Pharma", color: "#10b981" },
  { slug: "energy", title: "エネルギー", titleEn: "Energy", color: "#f97316" },
  { slug: "logistics", title: "物流・運輸", titleEn: "Logistics", color: "#6366f1" },
  { slug: "entertainment", title: "エンタメ", titleEn: "Entertainment", color: "#d946ef" },
];

export function HomeContent() {
  const { locale } = useLanguage();

  return (
    <div>
      {/* ━━━ Hero ━━━ */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-16 text-center">
        <div className="flex justify-center mb-8">
          <Logo className="items-center scale-150" />
        </div>

        <h1 className="mt-10 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-normal">
          {locale === "ja" ? (
            <>
              日本の政治・経済・業界情報を
              <br className="hidden md:block" />
              もっと<span className="text-foreground font-bold">分かりやすく</span>、
              <span className="text-foreground font-bold">繋がりを持って</span>伝える。
            </>
          ) : (
            <>
              Japanese politics, economy, and industry —
              <br className="hidden md:block" />
              explained <span className="text-foreground font-bold">clearly</span>,{" "}
              connected <span className="text-foreground font-bold">meaningfully</span>.
            </>
          )}
        </h1>

        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-xl mx-auto">
          {locale === "ja"
            ? "ニュースは「点」ではなく「線」で理解する。The Briefは、出来事の背景・因果・影響を繋いで伝えるメディアです。"
            : "News understood as storylines, not isolated events. The Brief connects context, causes, and consequences."}
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ Three Pillars ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">
            {locale === "ja" ? "コンテンツ" : "Content"}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            {locale === "ja" ? "3つの軸で日本を読み解く" : "Three Pillars of Japan"}
          </h2>
        </div>

        <div className="space-y-6">
          {mainSections.map((sec) => (
            <div
              key={sec.href}
              className="rounded-2xl border border-brief-border bg-brief-card p-6 hover:border-foreground/15 transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${sec.color}15`, color: sec.color }}
                >
                  {sec.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <Link href={sec.href} className="font-serif text-xl font-bold hover:underline">
                      {sec.titleJa}
                    </Link>
                    <span className="text-xs text-foreground/45">{locale === "ja" ? sec.descJa : sec.descEn}</span>
                  </div>
                  <p className="text-[11px] text-foreground/45 mt-0.5">
                    {locale === "ja" ? sec.statsJa : sec.statsEn}
                  </p>
                </div>
                <Link
                  href={sec.href}
                  className="hidden sm:flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg border border-brief-border hover:bg-foreground/5 transition-colors flex-shrink-0"
                  style={{ color: sec.color }}
                >
                  {locale === "ja" ? "見る" : "View"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>

              {/* Content links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ml-0 sm:ml-[60px]">
                {sec.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-foreground/[0.03] transition-colors group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: sec.color, opacity: 0.5 }} />
                    <span className="text-xs text-foreground/65 group-hover:text-foreground transition-colors">
                      {locale === "ja" ? item.ja : item.en}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ Industry Quick Links ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">
            {locale === "ja" ? "業界" : "Industries"}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            {locale === "ja" ? "業界別に読む" : "Explore by Industry"}
          </h2>
          <p className="mt-3 text-sm text-foreground/50 max-w-lg mx-auto">
            {locale === "ja"
              ? "17業界それぞれのビジネスモデル・収益構造・競争環境・課題を詳細に解説。PL/BS/CF分析も掲載。"
              : "Detailed analysis of business models, revenue structures, competitive landscapes, and challenges across 17 industries."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {industryHighlights.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industry/${ind.slug}`}
              className="group p-4 rounded-xl border border-brief-border hover:border-foreground/15 bg-brief-card transition-all text-center"
            >
              <div
                className="text-base font-bold group-hover:text-foreground transition-colors"
                style={{ color: ind.color }}
              >
                {ind.title}
              </div>
              <div className="text-[9px] text-foreground/40 tracking-wider uppercase mt-0.5">
                {ind.titleEn}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/industry"
            className="text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            {locale === "ja" ? "全17業界を見る →" : "View all 17 industries →"}
          </Link>
        </div>
      </section>

      {/* ━━━ How we're different ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="p-8 bg-brief-card border border-brief-border rounded-2xl">
          <div className="text-center mb-8">
            <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">
              {locale === "ja" ? "The Briefとは" : "About"}
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold mt-2">
              {locale === "ja" ? "ニュースを「点」ではなく「線」で追う" : "News as Storylines, Not Isolated Events"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-foreground/45">
                {locale === "ja" ? "従来のニュース" : "Traditional News"}
              </span>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
              </div>
              <p className="mt-3 text-sm text-foreground/50">
                {locale === "ja" ? "バラバラの「点」として伝えられる情報" : "Information delivered as disconnected dots"}
              </p>
            </div>
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-brief-red">The Brief</span>
              <div className="mt-3 flex items-center gap-0">
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-brief-red" />
              </div>
              <p className="mt-3 text-sm text-foreground/60">
                {locale === "ja" ? "文脈と因果で繋がれた「線」としての情報" : "Information connected as storylines with context and causation"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-brief-border">
            {[
              {
                ja: "政治の決定が経済に、経済の動きが業界に、業界の変化が私たちの生活にどう影響するか。領域を超えた繋がりを伝えます。",
                en: "How political decisions affect the economy, how economic trends shape industries, and how changes impact our daily lives.",
                labelJa: "繋がりを見せる",
                labelEn: "Show Connections",
              },
              {
                ja: "専門用語を避け、誰でも理解できる言葉で伝えます。複雑な構造もビジュアルとともに直感的に把握できます。",
                en: "We avoid jargon and explain in plain language. Complex structures become intuitive through visuals.",
                labelJa: "わかりやすく",
                labelEn: "Clear & Simple",
              },
              {
                ja: "各業界のPL/BS/CF分析、経済指標ダッシュボード、政策進捗トラッカーなど、データに基づいた情報を提供します。",
                en: "PL/BS/CF analysis by industry, economic indicator dashboards, and policy progress trackers — all data-driven.",
                labelJa: "データで伝える",
                labelEn: "Data-Driven",
              },
            ].map((item) => (
              <div key={item.labelEn} className="text-center">
                <h3 className="text-sm font-bold mb-1">{locale === "ja" ? item.labelJa : item.labelEn}</h3>
                <p className="text-[11px] text-foreground/50 leading-relaxed">
                  {locale === "ja" ? item.ja : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ CTA ━━━ */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          {locale === "ja" ? "ニュースの「線」を、一緒に追おう。" : "Follow the storylines with us."}
        </h2>
        <p className="mt-4 text-sm text-foreground/55 leading-relaxed max-w-lg mx-auto">
          {locale === "ja"
            ? "政治・経済・17業界を横断して、日本のいまを分かりやすく伝えます。"
            : "Across politics, economy, and 17 industries — Japan explained clearly."}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-xl hover:bg-brief-red/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            {locale === "ja" ? "Politics から始める" : "Start with Politics"}
          </Link>
          <Link
            href="/industry"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-xl hover:bg-foreground/5 transition-all"
          >
            {locale === "ja" ? "Industry を見る" : "Explore Industry"}
          </Link>
        </div>
      </section>
    </div>
  );
}
