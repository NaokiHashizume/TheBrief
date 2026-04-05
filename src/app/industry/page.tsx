import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industry — 業界別ニュース",
  description:
    "AI・半導体・自動車・医薬品・金融・エネルギーなど、日本の主要業界の最新動向をまとめます。",
  alternates: { canonical: "https://thebrief.info/industry" },
};

const industries = [
  {
    slug: "ai",
    title: "AI / Technology",
    titleJa: "AI・テクノロジー",
    description:
      "生成AI、クラウド、SaaS、サイバーセキュリティなど、テクノロジー業界の最新動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    color: "#8b5cf6",
  },
  {
    slug: "semiconductors",
    title: "Semiconductors",
    titleJa: "半導体",
    description:
      "半導体製造装置、先端プロセス、国内投資、TSMC・Rapidusなどの最新情報。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2" /><path d="M15 20v2" />
        <path d="M2 15h2" /><path d="M20 15h2" />
        <path d="M9 2v2" /><path d="M9 20v2" />
        <path d="M2 9h2" /><path d="M20 9h2" />
      </svg>
    ),
    color: "#06b6d4",
  },
  {
    slug: "automotive",
    title: "Automotive / Mobility",
    titleJa: "自動車・モビリティ",
    description:
      "EV化、自動運転、トヨタ・ホンダ・日産の戦略、部品サプライチェーンの変革。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17l-1 2h2m12-2 1 2h-2" />
        <circle cx="7.5" cy="14" r="1.5" />
        <circle cx="16.5" cy="14" r="1.5" />
      </svg>
    ),
    color: "#ef4444",
  },
  {
    slug: "pharma",
    title: "Pharma / Healthcare",
    titleJa: "医薬品・ヘルスケア",
    description:
      "新薬開発、医療DX、バイオテクノロジー、医療制度改革の動向。",
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
    slug: "finance",
    title: "Finance / Fintech",
    titleJa: "金融・フィンテック",
    description:
      "メガバンク、証券、保険、デジタル決済、暗号資産、新NISA関連の動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#f59e0b",
  },
  {
    slug: "energy",
    title: "Energy",
    titleJa: "エネルギー",
    description:
      "再生可能エネルギー、原子力政策、電力市場改革、脱炭素戦略。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#f97316",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    titleJa: "不動産",
    description:
      "商業・住宅不動産市場、REIT、都市再開発、人口動態による地価変動。",
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
    slug: "media",
    title: "Media / Entertainment",
    titleJa: "メディア・エンタメ",
    description:
      "放送・出版・ゲーム・音楽・動画配信プラットフォームの業界動向。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    color: "#ec4899",
  },
  {
    slug: "retail",
    title: "Retail / E-Commerce",
    titleJa: "小売・EC",
    description:
      "コンビニ、スーパー、百貨店、EC市場、物流・サプライチェーンの変化。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    color: "#14b8a6",
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
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <span>Industry</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">Industry</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        日本の主要業界の最新動向を業界別にまとめています。気になる業界を選んでください。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        各業界ページは順次コンテンツを追加予定です。
      </p>

      {/* Industry grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind) => (
          <div
            key={ind.slug}
            className="group p-5 rounded-xl border border-brief-border dark:border-white/5 hover:border-foreground/15 dark:hover:border-white/15 transition-all"
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
                <span className="text-[10px] text-foreground/30">
                  {ind.titleJa}
                </span>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-foreground/40 leading-relaxed">
              {ind.description}
            </p>
            <div className="mt-3">
              <span className="text-[9px] tracking-wider uppercase text-foreground/25 border border-foreground/10 px-2 py-0.5 rounded">
                Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
