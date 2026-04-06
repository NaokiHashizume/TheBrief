"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

const snapshotStats = [
  {
    value: "4",
    labelJa: "主要セクション",
    labelEn: "Core sections",
    noteJa: "Politics / Economy / Industry / University",
    noteEn: "Politics / Economy / Industry / University",
  },
  {
    value: "17",
    labelJa: "業界ページ",
    labelEn: "Industry pages",
    noteJa: "AI、情報通信、自動車、金融などを横断",
    noteEn: "Across AI, ICT, automotive, finance, and more",
  },
  {
    value: "6",
    labelJa: "学問大分類",
    labelEn: "Academic domains",
    noteJa: "University セクションで俯瞰",
    noteEn: "Mapped in the University section",
  },
  {
    value: "3",
    labelJa: "法案ステータス",
    labelEn: "Legislative states",
    noteJa: "審議中・成立済・施行済を整理",
    noteEn: "Debating, passed, and enacted",
  },
];

const mainSections = [
  {
    href: "/politics",
    color: "#e53e3e",
    titleJa: "Politics",
    titleEn: "Politics",
    descJa: "国会、内閣、議員、法案の現在地を一画面で。",
    descEn: "Track the Diet, Cabinet, legislators, and bills in one place.",
    items: [
      {
        ja: "衆議院・参議院の議席数と勢力図",
        en: "Seat distribution and party balance",
        href: "/politics/diet",
      },
      {
        ja: "審議中・成立済・施行済の法案導線",
        en: "Bills under debate, passed, and enacted",
        href: "/politics/debates",
      },
      {
        ja: "第2次高市内閣と主要閣僚",
        en: "2nd Takaichi Cabinet and ministers",
        href: "/politics/cabinet",
      },
    ],
  },
  {
    href: "/economy",
    color: "#b9770e",
    titleJa: "Economy",
    titleEn: "Economy",
    descJa: "経済指標、ニュース、深掘り記事を一続きで確認。",
    descEn: "Move from indicators to news and in-depth analysis.",
    items: [
      {
        ja: "GDP・CPI・為替をまとめた指標ダッシュボード",
        en: "Dashboard for GDP, CPI, FX, and rates",
        href: "/economy",
      },
      {
        ja: "経済ニュースのタイムライン",
        en: "Economy news timeline",
        href: "/economy/news",
      },
      {
        ja: "税制・財政・金融政策の深掘り記事",
        en: "Deep dives on tax, fiscal, and monetary policy",
        href: "/economy/articles",
      },
    ],
  },
  {
    href: "/industry",
    color: "#1e8449",
    titleJa: "Industry",
    titleEn: "Industry",
    descJa: "17業界の構造、企業、収益モデル、テーマ別記事。",
    descEn: "Seventeen sectors, business models, and theme-based articles.",
    items: [
      {
        ja: "17業界の一覧と主要テーマ",
        en: "All 17 sectors and their key themes",
        href: "/industry",
      },
      {
        ja: "業界概況ダッシュボード",
        en: "Industry overview dashboard",
        href: "/industry/overview",
      },
      {
        ja: "AI、情報通信、自動車、金融などの注目分野",
        en: "AI, ICT, automotive, finance, and more",
        href: "/industry/ai",
      },
    ],
  },
  {
    href: "/university",
    color: "#6366f1",
    titleJa: "University",
    titleEn: "University",
    descJa: "学問体系を俯瞰し、研究領域への入口をつくる。",
    descEn: "A structured entry point into academic disciplines and research.",
    items: [
      {
        ja: "学問の全体マップ",
        en: "High-level academic map",
        href: "/university",
      },
      {
        ja: "形式科学・自然科学の詳細",
        en: "Formal and natural sciences detail",
        href: "/university/formal",
      },
      {
        ja: "社会科学・学際領域の詳細",
        en: "Social sciences and interdisciplinary detail",
        href: "/university/social",
      },
    ],
  },
];

const featuredDestinations = [
  {
    href: "/politics/debates",
    accent: "#e53e3e",
    eyebrowJa: "Politics Now",
    eyebrowEn: "Politics Now",
    titleJa: "法案の進行状況を追う",
    titleEn: "Track bills in motion",
    bodyJa: "審議中、成立済、施行済の3段階で国会の現在地を素早く把握できます。",
    bodyEn: "Follow legislative movement across debating, passed, and enacted stages.",
  },
  {
    href: "/economy",
    accent: "#b9770e",
    eyebrowJa: "Economic Pulse",
    eyebrowEn: "Economic Pulse",
    titleJa: "主要指標をまとめて確認",
    titleEn: "Read the macro dashboard fast",
    bodyJa: "GDP、CPI、失業率、日経平均、為替、金利まで一覧で確認できます。",
    bodyEn: "Scan GDP, CPI, unemployment, Nikkei, FX, and rates in one dashboard.",
  },
  {
    href: "/industry/overview",
    accent: "#1e8449",
    eyebrowJa: "Sector Radar",
    eyebrowEn: "Sector Radar",
    titleJa: "業界別の違いを横断する",
    titleEn: "Compare sectors side by side",
    bodyJa: "業界ごとの構造や収益源を比較しながら、個別ページへ深掘りできます。",
    bodyEn: "Compare sector structures and revenue models, then drill into detail pages.",
  },
  {
    href: "/university",
    accent: "#6366f1",
    eyebrowJa: "New Section",
    eyebrowEn: "New Section",
    titleJa: "University を入口に使う",
    titleEn: "Use University as a knowledge map",
    bodyJa: "形式科学から学際領域まで、大分類から中分類へたどれる構造です。",
    bodyEn: "Move from high-level domains to subfields across the academic map.",
  },
];

const industryHighlights = [
  {
    slug: "ict",
    title: "情報通信",
    titleEn: "ICT",
    color: "#3b82f6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    slug: "ai",
    title: "AI",
    titleEn: "AI",
    color: "#8b5cf6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4z" />
        <path d="M9 8v1a3 3 0 0 0 6 0V8" />
        <path d="M12 12v3" />
        <path d="M8 22h8" />
        <path d="M7 15h10" />
        <path d="M9 15v7" />
        <path d="M15 15v7" />
      </svg>
    ),
  },
  {
    slug: "automotive",
    title: "自動車",
    titleEn: "Automotive",
    color: "#ef4444",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-3.5-5H7L3.5 10l-2 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 17h10" />
      </svg>
    ),
  },
  {
    slug: "finance",
    title: "金融機関",
    titleEn: "Finance",
    color: "#f59e0b",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M5 6l7-3 7 3" />
        <path d="M4 10v11" />
        <path d="M20 10v11" />
        <path d="M8 14v3" />
        <path d="M12 14v3" />
        <path d="M16 14v3" />
      </svg>
    ),
  },
  {
    slug: "pharma",
    title: "医薬品",
    titleEn: "Pharma",
    color: "#10b981",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6v4H9z" />
        <path d="M7 6h10v4H7z" />
        <path d="M5 10h14v12H5z" />
        <path d="M12 14v4" />
        <path d="M10 16h4" />
      </svg>
    ),
  },
  {
    slug: "energy",
    title: "エネルギー",
    titleEn: "Energy",
    color: "#f97316",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    slug: "logistics",
    title: "物流・運輸",
    titleEn: "Logistics",
    color: "#6366f1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 9H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    slug: "entertainment",
    title: "エンタメ",
    titleEn: "Entertainment",
    color: "#d946ef",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 2 10 5-10 5V2z" />
        <path d="M2 17h20v4H2z" />
        <path d="M12 12v5" />
      </svg>
    ),
  },
];

export function HomeContent() {
  const { locale } = useLanguage();

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-14">
        <div className="rounded-[28px] border border-brief-rule bg-[linear-gradient(135deg,rgba(229,62,62,0.05),rgba(255,255,255,0.92),rgba(99,102,241,0.08))] p-8 md:p-10 dark:bg-[linear-gradient(135deg,rgba(229,62,62,0.08),rgba(17,17,17,0.96),rgba(99,102,241,0.14))]">
          <div className="flex justify-center md:justify-start">
            <Logo className="items-center scale-[1.55] origin-left" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brief-red/20 bg-brief-red/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[2.6px] text-brief-red">
              {locale === "ja" ? "Landing Updated" : "Landing Updated"}
            </span>
            <span className="text-[11px] text-foreground/45">
              {locale === "ja"
                ? "現行の4セクション構成に合わせて再整理"
                : "Reframed around the current four-section site structure"}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-[32px] font-bold leading-[1.15] tracking-tight md:text-[56px]">
            {locale === "ja" ? (
              <>
                Politics、Economy、Industry、University。
                <br className="hidden md:block" />
                <span className="text-brief-red">今の The Brief</span> を一画面でつかむ。
              </>
            ) : (
              <>
                Politics, Economy, Industry, and University.
                <br className="hidden md:block" />
                See <span className="text-brief-red">The Brief now</span> in one screen.
              </>
            )}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/62 md:text-[15px]">
            {locale === "ja"
              ? "政治の制度、経済指標、17業界の分析、そしてUniversityの学問マップまで。サイト全体の構造が変わった今、まずどこから読むべきかをホームで迷わず選べるように整理しました。"
              : "From political institutions and macro indicators to seventeen sector pages and the new University map, the landing page now reflects the site's current structure and makes the next click obvious."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/politics"
              className="px-5 py-2.5 rounded-sm bg-brief-red text-white text-sm font-medium hover:bg-brief-red/90 transition-colors"
            >
              {locale === "ja" ? "Politics から入る" : "Start with Politics"}
            </Link>
            <Link
              href="/university"
              className="px-5 py-2.5 rounded-sm border border-brief-border bg-brief-card text-sm font-medium hover:bg-foreground/[0.04] transition-colors"
            >
              {locale === "ja" ? "University を見る" : "Open University"}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {snapshotStats.map((stat) => (
            <div key={stat.labelJa} className="rounded-[22px] border border-brief-border bg-brief-card px-5 py-5">
              <div className="text-[28px] font-bold tabular-nums">{stat.value}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-foreground/55">
                {locale === "ja" ? stat.labelJa : stat.labelEn}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground/50">
                {locale === "ja" ? stat.noteJa : stat.noteEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="border-t-2 border-b border-foreground pt-2 pb-1 mb-8">
          <h2 className="font-serif text-2xl font-bold">
            {locale === "ja" ? "4つの入口" : "Four Gateways"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
          {mainSections.map((section, index) => (
            <div
              key={section.href}
              className={`py-2 ${
                index < mainSections.length - 1 ? "md:col-rule-right md:pr-8" : ""
              } ${index > 0 ? "md:pl-8" : ""} ${
                index > 0 ? "border-t md:border-t-0 border-brief-rule pt-6 md:pt-2 mt-4 md:mt-0" : ""
              }`}
            >
              <div className="border-t-4 pt-3 mb-5" style={{ borderTopColor: section.color }}>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href={section.href}
                    className="text-lg font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
                    style={{ color: section.color }}
                  >
                    {locale === "ja" ? section.titleJa : section.titleEn}
                  </Link>
                  <Link
                    href={section.href}
                    className="text-[10px] border border-brief-border px-3 py-1 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all tracking-wider uppercase font-medium"
                  >
                    {locale === "ja" ? "見る" : "Open"}
                  </Link>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground/45">
                  {locale === "ja" ? section.descJa : section.descEn}
                </p>
              </div>

              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={item.href} className={`${itemIndex > 0 ? "border-t border-brief-rule pt-4" : ""}`}>
                    <Link href={item.href} className="block group">
                      <h3 className="font-serif text-base font-semibold leading-snug headline-hover">
                        {locale === "ja" ? item.ja : item.en}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="mb-6">
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold">
            {locale === "ja" ? "Start Here" : "Start Here"}
          </span>
          <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold">
            {locale === "ja" ? "いま使うべき主要導線" : "Best entry points right now"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredDestinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[24px] border border-brief-border bg-brief-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[2.8px]"
                style={{ color: item.accent }}
              >
                {locale === "ja" ? item.eyebrowJa : item.eyebrowEn}
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold leading-tight">
                {locale === "ja" ? item.titleJa : item.titleEn}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/58">
                {locale === "ja" ? item.bodyJa : item.bodyEn}
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[2px] text-foreground/38 group-hover:text-foreground/60 transition-colors">
                {locale === "ja" ? "Open Page" : "Open Page"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="bg-brief-gray dark:bg-white/[0.03] border border-brief-rule p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-foreground/20 pb-4 gap-3">
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#1e8449] font-bold block mb-1">
                {locale === "ja" ? "Industry Radar" : "Industry Radar"}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">
                {locale === "ja" ? "注目業界へすぐ入る" : "Jump into the most active sectors"}
              </h3>
            </div>
            <Link
              href="/industry"
              className="text-sm flex items-center gap-1 hover:text-[#1e8449] transition-colors group"
            >
              <span>{locale === "ja" ? "全17業界を見る" : "View all 17 sectors"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {industryHighlights.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industry/${industry.slug}`}
                className="group bg-brief-card dark:bg-white/[0.03] border border-brief-border p-5 hover:border-[#1e8449] transition-all flex flex-col justify-between h-28"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm tracking-wide" style={{ color: industry.color }}>
                    {industry.title}
                  </h4>
                  <span className="text-foreground/30 group-hover:text-[#1e8449] transition-colors">
                    {industry.icon}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[9px] text-foreground/40 tracking-wider uppercase">
                    {industry.titleEn}
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

      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          {locale === "ja" ? "どこから読むかを、ホームで迷わせない。" : "Make the first click obvious."}
        </h2>
        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-xl mx-auto font-light">
          {locale === "ja"
            ? "制度を見るなら Politics、景気を見るなら Economy、業界比較なら Industry、知の全体像なら University。いまの構成に合わせて最短で入れるホームに更新しました。"
            : "Politics for institutions, Economy for macro, Industry for sector comparison, and University for the knowledge map."}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/economy"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-sm hover:bg-brief-red/90 transition-all"
          >
            {locale === "ja" ? "Economy を開く" : "Open Economy"}
          </Link>
          <Link
            href="/industry"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-sm hover:bg-foreground/5 transition-all"
          >
            {locale === "ja" ? "Industry を開く" : "Open Industry"}
          </Link>
        </div>
      </section>
    </div>
  );
}
