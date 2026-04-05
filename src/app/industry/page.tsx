import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { IndustryBubbleChart } from "@/components/IndustryBubbleChart";

export const metadata: Metadata = {
  title: "Industry — 業界別ニュース",
  description:
    "小売り・自動車・金融・情報通信・医薬品など、日本の主要17業界の最新動向をまとめます。",
  alternates: { canonical: "https://thebrief.info/industry" },
};

const industries = [
  {
    slug: "retail",
    title: "小売り",
    titleEn: "Retail",
    description: "スーパー、コンビニ、百貨店、ドラッグストアなど小売業界全般の動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" /><path d="M10 10h4" />
      </svg>
    ),
    color: "#14b8a6",
  },
  {
    slug: "automotive",
    title: "自動車",
    titleEn: "Automotive",
    description: "EV化、自動運転、トヨタ・ホンダ・日産の戦略、部品サプライチェーン。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17l-1 2h2m12-2 1 2h-2" />
        <circle cx="7.5" cy="14" r="1.5" /><circle cx="16.5" cy="14" r="1.5" />
      </svg>
    ),
    color: "#ef4444",
  },
  {
    slug: "dining",
    title: "外食",
    titleEn: "Food Service",
    description: "ファミレス、ファストフード、居酒屋、カフェチェーンなど外食産業の動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    color: "#e11d48",
  },
  {
    slug: "entertainment",
    title: "エンタメ",
    titleEn: "Entertainment",
    description: "ゲーム・音楽・映画・動画配信・テーマパークなどエンタメ業界の動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    color: "#d946ef",
  },
  {
    slug: "finance",
    title: "金融機関",
    titleEn: "Financial Institutions",
    description: "メガバンク、証券、保険、デジタル決済、暗号資産、新NISA関連。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#f59e0b",
  },
  {
    slug: "services",
    title: "サービス",
    titleEn: "Services",
    description: "人材、警備、教育、コンサルティング、BPOなどサービス業全般。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#a855f7",
  },
  {
    slug: "energy",
    title: "資源エネルギー",
    titleEn: "Resources & Energy",
    description: "石油・ガス、電力、再生可能エネルギー、原子力、脱炭素戦略。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#f97316",
  },
  {
    slug: "trading",
    title: "商社・卸売り",
    titleEn: "Trading & Wholesale",
    description: "総合商社、専門商社、卸売業。資源・食料・素材のグローバル取引。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "#78716c",
  },
  {
    slug: "materials",
    title: "素材",
    titleEn: "Materials",
    description: "化学、鉄鋼、非鉄金属、セメント、繊維など素材メーカーの動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    color: "#0ea5e9",
  },
  {
    slug: "specialty",
    title: "専門店・EC",
    titleEn: "Specialty & EC",
    description: "EC市場、家電量販、アパレル専門店、フリマアプリなど専門小売。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    color: "#ec4899",
  },
  {
    slug: "ict",
    title: "情報通信・ネット",
    titleEn: "ICT & Internet",
    description: "通信キャリア、IT企業、SaaS、AI、クラウド、サイバーセキュリティ。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "#3b82f6",
  },
  {
    slug: "daily",
    title: "生活・日用品",
    titleEn: "Daily & Household",
    description: "トイレタリー、化粧品、生活雑貨、日用品メーカーの動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: "#06b6d4",
  },
  {
    slug: "pharma",
    title: "医薬品・医療介護",
    titleEn: "Pharma & Healthcare",
    description: "新薬開発、医療DX、バイオテクノロジー、介護・ヘルスケア。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4" /><path d="M16 2v4" />
        <rect x="3" y="6" width="18" height="15" rx="2" />
        <path d="M12 10v6" /><path d="M9 13h6" />
      </svg>
    ),
    color: "#10b981",
  },
  {
    slug: "food",
    title: "食品",
    titleEn: "Food & Beverage",
    description: "食品メーカー、飲料、乳業、冷凍食品、調味料など食品業界。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" /><path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
        <path d="M4 8c0-2.2 3.6-4 8-4s8 1.8 8 4" />
      </svg>
    ),
    color: "#84cc16",
  },
  {
    slug: "construction",
    title: "建設・不動産",
    titleEn: "Construction & Real Estate",
    description: "ゼネコン、住宅メーカー、不動産デベロッパー、REIT、都市再開発。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
      </svg>
    ),
    color: "#64748b",
  },
  {
    slug: "corporate",
    title: "企業・業績",
    titleEn: "Corporate & Earnings",
    description: "主要企業の決算、M&A、経営戦略、ガバナンス、ESG。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "#475569",
  },
  {
    slug: "logistics",
    title: "物流・運輸",
    titleEn: "Logistics & Transport",
    description: "宅配、鉄道、航空、海運、倉庫、2024年問題とその後の対応。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    color: "#6366f1",
  },
];

export default function IndustryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <span>Industry</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">Industry</h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        日本の主要業界の最新動向を業界別にまとめています。気になる業界を選んでください。
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        各業界ページは順次コンテンツを追加予定です。
      </p>

      {/* Bar chart */}
      <IndustryBubbleChart />

      {/* Industry grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind) => (
          <div
            key={ind.slug}
            className="group p-5 rounded-xl border border-brief-border hover:border-foreground/15 transition-all"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${ind.color}15`, color: ind.color }}
              >
                {ind.icon}
              </div>
              <div className="min-w-0">
                <h2 className="font-serif font-bold text-base leading-snug">
                  {ind.title}
                </h2>
                <span className="text-[10px] text-foreground/45">
                  {ind.titleEn}
                </span>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-foreground/55 leading-relaxed">
              {ind.description}
            </p>
            <div className="mt-3">
              <span className="text-[9px] tracking-wider uppercase text-foreground/40 border border-foreground/10 px-2 py-0.5 rounded">
                Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
