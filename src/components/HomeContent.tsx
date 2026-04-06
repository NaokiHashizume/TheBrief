"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";
import { sampleStories } from "@/lib/stories";
import { StoryCardCompact } from "./StoryTimeline";

const mainSections = [
  {
    href: "/politics",
    color: "#e53e3e",
    titleJa: "Politics",
    titleEn: "Politics",
    descJa: "国会・内閣・議員",
    descEn: "Diet, Cabinet & Legislators",
    items: [
      { ja: "衆議院・参議院 政党別議席数", en: "House seats by party", href: "/politics/diet" },
      { ja: "第2次高市内閣 閣僚一覧", en: "2nd Takaichi Cabinet members", href: "/politics/cabinet" },
      { ja: "審議中の法案", en: "Bills under deliberation", href: "/politics/debates" },
      { ja: "政治ニュース", en: "Politics news timeline", href: "/politics/news" },
    ],
  },
  {
    href: "/economy",
    color: "#b9770e",
    titleJa: "Economy",
    titleEn: "Economy",
    descJa: "経済指標・ニュース・解説記事",
    descEn: "Indicators, News & Analysis",
    items: [
      { ja: "経済指標ダッシュボード", en: "Economic indicators dashboard", href: "/economy" },
      { ja: "経済ニュース タイムライン", en: "Economic news timeline", href: "/economy/news" },
      { ja: "深掘り記事（税制・金融政策等）", en: "In-depth articles (tax, monetary policy)", href: "/economy/articles" },
    ],
  },
  {
    href: "/industry",
    color: "#1e8449",
    titleJa: "Industry",
    titleEn: "Industry",
    descJa: "17業界の動向・ビジネスモデル分析",
    descEn: "17 Industries & Business Model Analysis",
    items: [
      { ja: "業界一覧（17業界）", en: "Industry list (17 sectors)", href: "/industry" },
      { ja: "業界概況ダッシュボード", en: "Industry overview dashboard", href: "/industry/overview" },
      { ja: "AI・半導体・自動車・エネルギー…", en: "AI, semiconductors, automotive, energy...", href: "/industry" },
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
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-14 text-center">
        <div className="flex justify-center mb-6">
          <Logo className="items-center scale-[1.8]" />
        </div>

        <p className="mt-10 text-xs tracking-[3px] uppercase text-brief-red font-semibold">
          {locale === "ja" ? "日本の政治・経済・産業を読み解く" : "Intelligence for the Pacific Century"}
        </p>

        <h1 className="mt-5 font-serif text-2xl md:text-3xl font-bold leading-relaxed max-w-2xl mx-auto">
          {locale === "ja" ? (
            <>
              ニュースを「点」ではなく
              <br className="hidden md:block" />
              <span className="text-brief-red">「線」</span>で追う。
            </>
          ) : (
            <>
              Connecting dots,
              <br className="hidden md:block" />
              not just reporting <span className="text-brief-red">noise</span>.
            </>
          )}
        </h1>

        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-xl mx-auto font-light">
          {locale === "ja"
            ? "政治の決定が経済に、経済の動きが業界に、業界の変化が私たちの生活にどう影響するか。領域を超えた繋がりを伝えます。"
            : "How political decisions shape the economy, how markets move industries, and how it all connects to daily life."}
        </p>
      </section>

      {/* ━━━ Three Pillars — Newspaper Column Layout ━━━ */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="border-t-2 border-b border-foreground pt-2 pb-1 mb-8">
          <h2 className="font-serif text-2xl font-bold">
            {locale === "ja" ? "3つの軸" : "Pillars of Power"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {mainSections.map((sec, idx) => (
            <div
              key={sec.href}
              className={`py-2 ${
                idx < mainSections.length - 1 ? "md:col-rule-right md:pr-8" : ""
              } ${idx > 0 ? "md:pl-8" : ""} ${
                idx > 0 ? "border-t md:border-t-0 border-brief-rule pt-6 md:pt-2 mt-4 md:mt-0" : ""
              }`}
            >
              {/* Section header with color top border */}
              <div className="border-t-4 pt-3 mb-5" style={{ borderTopColor: sec.color }}>
                <div className="flex items-center justify-between">
                  <Link href={sec.href} className="text-lg font-bold uppercase tracking-wider hover:opacity-80 transition-opacity" style={{ color: sec.color }}>
                    {sec.titleJa}
                  </Link>
                  <Link
                    href={sec.href}
                    className="text-[10px] border border-brief-border px-3 py-1 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all tracking-wider uppercase font-medium"
                  >
                    {locale === "ja" ? "すべて見る" : "View All"}
                  </Link>
                </div>
                <p className="text-xs text-foreground/45 mt-1">
                  {locale === "ja" ? sec.descJa : sec.descEn}
                </p>
              </div>

              {/* Content links */}
              <ul className="space-y-4">
                {sec.items.map((item, i) => (
                  <li key={item.href} className={`group ${i > 0 ? "border-t border-brief-rule pt-4" : ""}`}>
                    <Link href={item.href} className="block">
                      <h4 className="font-serif text-base font-semibold leading-snug headline-hover">
                        {locale === "ja" ? item.ja : item.en}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ Industry Sector Intelligence ━━━ */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="bg-brief-gray dark:bg-white/[0.03] border border-brief-rule p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-foreground/20 pb-4 gap-3">
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#1e8449] font-bold block mb-1">
                {locale === "ja" ? "業界データ" : "Data Terminal"}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">
                {locale === "ja" ? "セクター別インテリジェンス" : "Sector Intelligence"}
              </h3>
            </div>
            <Link
              href="/industry"
              className="text-sm flex items-center gap-1 hover:text-[#1e8449] transition-colors group"
            >
              <span>{locale === "ja" ? "全17業界を見る" : "View All 17 Sectors"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {industryHighlights.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                className="group bg-brief-card dark:bg-white/[0.03] border border-brief-border p-5 hover:border-[#1e8449] transition-all flex flex-col justify-between h-28"
              >
                <h4 className="font-bold text-sm tracking-wide" style={{ color: ind.color }}>
                  {ind.title}
                </h4>
                <div className="flex justify-between items-end">
                  <span className="text-[9px] text-foreground/40 tracking-wider uppercase">
                    {ind.titleEn}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/20 group-hover:text-[#1e8449] transition-colors">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Storylines ━━━ */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16 relative">
        <div className="border-t border-foreground pt-2 mb-8 relative">
          <div className="absolute -top-3 left-0 bg-background pr-4">
            <span className="text-xs font-bold uppercase tracking-[2px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brief-red" />
              {locale === "ja" ? "連載ストーリー" : "Ongoing Storylines"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStories.map((story) => (
            <StoryCardCompact key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* ━━━ Editorial Philosophy ━━━ */}
      <section className="max-w-4xl mx-auto text-center px-4 py-20 border-y border-brief-rule mb-0">
        <span className="font-serif text-3xl text-brief-red leading-none">&ldquo;</span>
        <h2 className="font-serif text-2xl md:text-4xl leading-tight font-bold mb-8">
          {locale === "ja" ? (
            <>
              ニュースを「点」ではなく
              <br />
              「線」で繋ぐ。
            </>
          ) : (
            <>
              Connecting dots,
              <br />
              not just reporting noise.
            </>
          )}
        </h2>
        <p className="text-base text-foreground/50 leading-relaxed font-light max-w-2xl mx-auto">
          {locale === "ja"
            ? "政治・経済・産業を横断する文脈と因果を紐解き、「なぜ今これが起きているのか」を伝えるメディアです。情報の洪水の中で、意味のある繋がりを。"
            : "At The Brief, we bridge the corridors of Kasumigaseki (Politics), the boardrooms of Marunouchi (Economy), and the factory floors of Aichi (Industry) — delivering synthesis over volume for leaders navigating modern Japan."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-brief-rule">
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
              <h3 className="text-sm font-bold mb-2">{locale === "ja" ? item.labelJa : item.labelEn}</h3>
              <p className="text-[11px] text-foreground/50 leading-relaxed">
                {locale === "ja" ? item.ja : item.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          {locale === "ja" ? "ニュースの「線」を、一緒に追おう。" : "Follow the storylines with us."}
        </h2>
        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-lg mx-auto font-light">
          {locale === "ja"
            ? "政治・経済・17業界を横断して、日本のいまを分かりやすく伝えます。"
            : "Across politics, economy, and 17 industries — Japan explained clearly."}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-sm hover:bg-brief-red/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            {locale === "ja" ? "Politics から始める" : "Start with Politics"}
          </Link>
          <Link
            href="/industry"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-sm hover:bg-foreground/5 transition-all"
          >
            {locale === "ja" ? "Industry を見る" : "Explore Industry"}
          </Link>
        </div>
      </section>
    </div>
  );
}
