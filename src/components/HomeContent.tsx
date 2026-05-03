"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { LatestArticlesTimeline } from "./LatestArticlesTimeline";
import { BroadsheetHero } from "./BroadsheetHero";
import { MarketsIntelligence } from "./MarketsIntelligence";
import { ResumeReadingPill } from "./ResumeReadingPill";

const snapshotStats = [
  {
    value: "4",
    labelJa: "主要セクション",
    labelEn: "Core sections",
    noteJa: "Politics / Economy / Industry / University",
    noteEn: "Politics / Economy / Industry / University",
  },
  {
    value: "18",
    labelJa: "業界ページ",
    labelEn: "Industry pages",
    noteJa: "AI・情報通信・自動車・金融・エネルギー・素材など",
    noteEn: "AI, ICT, automotive, finance, energy, materials, and more",
  },
  {
    value: "42",
    labelJa: "大学レクチャー",
    labelEn: "University lectures",
    noteJa: "形式・自然・人文・社会・応用・学際の全分野",
    noteEn: "Formal, natural, humanities, social, applied, interdisciplinary",
  },
  {
    value: "10",
    labelJa: "政治サブページ",
    labelEn: "Politics sub-pages",
    noteJa: "国会・内閣・法案・議員・課題・官公庁",
    noteEn: "Diet, Cabinet, bills, legislators, challenges, and more",
  },
];

const mainSections = [
  {
    href: "/politics",
    color: "#e53e3e",
    titleJa: "Politics",
    titleEn: "Politics",
    descJa: "国会、内閣、議員、法案、日本が抱える課題までを一画面で。",
    descEn: "Track the Diet, Cabinet, legislators, bills, and Japan's structural challenges.",
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
        ja: "日本が抱える7つの構造的課題",
        en: "Japan's seven structural challenges",
        href: "/politics/challenges",
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
    descJa: "18業界の構造、企業、収益モデル、テーマ別記事。",
    descEn: "Eighteen sectors, business models, and theme-based articles.",
    items: [
      {
        ja: "18業界の一覧と主要テーマ",
        en: "All 18 sectors and their key themes",
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
    descJa: "6カテゴリ・42分野のレクチャーで学問体系を体験する。",
    descEn: "Six domains and 42 fields of structured lectures across academia.",
    items: [
      {
        ja: "6カテゴリ・42分野の全体マップ",
        en: "Six domains, 42 fields — academic map",
        href: "/university",
      },
      {
        ja: "数学レクチャー（形式科学）",
        en: "Mathematics lecture (formal sciences)",
        href: "/university/formal/math",
      },
      {
        ja: "データサイエンスレクチャー（学際領域）",
        en: "Data science lecture (interdisciplinary)",
        href: "/university/interdisciplinary/data-science",
      },
    ],
  },
];

const featuredDestinations = [
  {
    href: "/politics/challenges",
    accent: "#e53e3e",
    eyebrowJa: "Politics Now",
    eyebrowEn: "Politics Now",
    titleJa: "日本が抱える7つの課題を俯瞰する",
    titleEn: "Survey Japan's seven challenges",
    bodyJa: "少子高齢化、財政、エネルギー、安全保障など、日本が直面する構造的課題をまとめています。",
    bodyEn: "Demographics, fiscal pressure, energy, and security — the structural issues facing Japan.",
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
    eyebrowJa: "Lecture Library",
    eyebrowEn: "Lecture Library",
    titleJa: "42の講義で学問を体験する",
    titleEn: "Experience scholarship through 42 lectures",
    bodyJa: "形式・自然・人文・社会・応用・学際の6カテゴリ・42分野を、章立て形式の統一されたレクチャーで読み進められます。",
    bodyEn: "Read 42 unified, chapter-based lectures spanning all six academic domains.",
  },
];

const columnHighlights = [
  {
    href: "/column/payslip-taxes-2026",
    label: "Lifestyle",
    accent: "#0d9488",
    titleJa: "給与明細の税金と社会保険料 — 天引きされる6項目の正体",
    titleEn: "Payslip Taxes & Social Insurance — The 6 Deductions Explained",
    bodyJa: "毎月の給与明細に並ぶ所得税・住民税・健康保険・厚生年金・雇用保険・介護保険を2026年度最新料率で解説。手取りを増やすヒントも。",
    bodyEn: "The six payslip deductions explained with 2026 rates — income tax, residence tax, health insurance, pension, unemployment insurance, and nursing care.",
    metaJa: "2026-04-10",
    metaEn: "2026-04-10",
  },
  {
    href: "/column/childcare-support-fund-2026",
    label: "Lifestyle",
    accent: "#0d9488",
    titleJa: "子ども・子育て支援金の実額 — 年収別『月いくら』と2028年の1兆円",
    titleEn: "The Child-Support Levy in Plain Numbers",
    bodyJa: "2026年4月から医療保険に上乗せされた支援金。年収600万円で月575円、800万円で月767円。2028年の1兆円規模まで段階的に引き上げられる計画を実額で解説。",
    bodyEn: "The child-rearing levy added to health insurance from April 2026 — monthly costs by income bracket and the phase-in to 1 trillion yen by 2028.",
    metaJa: "2026-04-09",
    metaEn: "2026-04-09",
  },
  {
    href: "/column/museums-special-2026",
    label: "Special / Museums",
    accent: "#be185d",
    titleJa: "美術館特集 2026 — 一度は訪れたい日本の美術館8選",
    titleEn: "Japan Museums 2026 — Eight You Should Visit",
    bodyJa: "建築・コレクション・地域性から選ぶ、2026年に訪れたい日本の美術館8選。上野・京橋・六本木から京都・箱根まで。",
    bodyEn: "Eight Japanese museums chosen by architecture, collection, and experience design — from Ueno and Roppongi to Kyoto and Hakone.",
    metaJa: "8 museums",
    metaEn: "8 museums",
  },
  {
    href: "/column/reading-special",
    label: "Special / Reading",
    accent: "#d97706",
    titleJa: "読書特集 — 政治・経済・社会を考えるための10冊",
    titleEn: "Ten Books for Politics, Economy and Society",
    bodyJa: "経済学、行動科学、政治哲学、ジャーナリズム。ニュースの背景にある思想と歴史を学ぶ10冊。",
    bodyEn: "Economics, behavioral science, political philosophy and journalism — ten essentials.",
    metaJa: "10 books",
    metaEn: "10 books",
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
    slug: "materials",
    title: "素材",
    titleEn: "Materials",
    color: "#0ea5e9",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
];

export function HomeContent() {
  const { locale } = useLanguage();

  return (
    <div>
      <BroadsheetHero />

      <MarketsIntelligence />

      <section className="max-w-6xl mx-auto px-4 pb-8 md:pb-14">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 xl:grid-cols-4">
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

      <LatestArticlesTimeline />

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-16">
        <div className="mb-6 md:mb-8 border-b border-foreground/20 pb-4">
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold block mb-1">
            {locale === "ja" ? "Explore" : "Explore"}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-bold">
            {locale === "ja" ? "4つのセクション" : "Four Sections"}
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

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-16">
        <div className="mb-5 md:mb-6">
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold">
            {locale === "ja" ? "Pick Up" : "Pick Up"}
          </span>
          <h2 className="mt-2 font-serif text-xl md:text-3xl font-bold">
            {locale === "ja" ? "注目コンテンツ" : "Featured Content"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {featuredDestinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[18px] md:rounded-[24px] border border-brief-border bg-brief-card p-4 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[2.8px]"
                style={{ color: item.accent }}
              >
                {locale === "ja" ? item.eyebrowJa : item.eyebrowEn}
              </div>
              <h3 className="mt-2 md:mt-3 font-serif text-xl md:text-2xl font-bold leading-tight">
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

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-14">
        <div className="mb-5 md:mb-6 flex items-end justify-between gap-3 border-b border-foreground/20 pb-4">
          <div>
            <span className="text-[10px] tracking-[3px] uppercase text-[#1e8449] font-bold block mb-1">
              {locale === "ja" ? "Industry Radar" : "Industry Radar"}
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold">
              {locale === "ja" ? "注目業界へすぐ入る" : "Jump into the most active sectors"}
            </h2>
          </div>
          <Link
            href="/industry"
            className="text-sm flex items-center gap-1 hover:text-[#1e8449] transition-colors group whitespace-nowrap"
          >
            <span>{locale === "ja" ? "全18業界" : "All 18 sectors"}</span>
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
              className="group rounded-xl border border-brief-border bg-brief-card p-5 hover:border-foreground/20 hover:shadow-sm transition-all flex flex-col justify-between h-28"
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
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-16">
        <div className="mb-5 md:mb-6 flex items-end justify-between gap-3 border-b border-foreground/20 pb-4">
          <div>
            <span className="text-[10px] tracking-[3px] uppercase text-[#0d9488] font-bold block mb-1">
              {locale === "ja" ? "Lifestyle" : "Lifestyle"}
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold">
              {locale === "ja" ? "暮らしとお金、本と映画の小話" : "Notes on life, money, books and films"}
            </h2>
          </div>
          <Link
            href="/column"
            className="text-sm flex items-center gap-1 hover:text-[#0d9488] transition-colors group whitespace-nowrap"
          >
            <span>{locale === "ja" ? "Lifestyle一覧" : "All columns"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {columnHighlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[16px] md:rounded-[20px] border border-brief-border bg-brief-card p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[2.4px]"
                style={{ color: item.accent }}
              >
                {item.label}
              </div>
              <h3 className="mt-2 font-serif text-[16px] md:text-xl font-bold leading-snug">
                {locale === "ja" ? item.titleJa : item.titleEn}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/58 line-clamp-3">
                {locale === "ja" ? item.bodyJa : item.bodyEn}
              </p>
              <div className="mt-3 text-[10px] uppercase tracking-[1.6px] text-foreground/40 tabular-nums">
                {locale === "ja" ? item.metaJa : item.metaEn}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10 md:py-16 text-center">
        <h2 className="font-serif text-xl md:text-3xl font-bold">
          {locale === "ja" ? "日本の今と、知の全体像を構造で読む。" : "Read Japan and the world of knowledge — structurally."}
        </h2>
        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-xl mx-auto font-light">
          {locale === "ja"
            ? "制度を知るなら Politics、景気を読むなら Economy、業界を比べるなら Industry、学問を体験するなら University、暮らしを考えるなら Lifestyle。"
            : "Politics for institutions, Economy for indicators, Industry for sectors, University for scholarship, Lifestyle for everyday life."}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/university"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-sm hover:bg-brief-red/90 transition-all"
          >
            {locale === "ja" ? "University を開く" : "Open University"}
          </Link>
          <Link
            href="/industry"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-sm hover:bg-foreground/5 transition-all"
          >
            {locale === "ja" ? "Industry を開く" : "Open Industry"}
          </Link>
        </div>
      </section>

      <ResumeReadingPill />
    </div>
  );
}
