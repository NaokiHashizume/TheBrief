import Link from "next/link";
import { aiArticles } from "@/lib/ai";
import { ictArticles } from "@/lib/ict";
import { automotiveArticles } from "@/lib/automotiveArticles";
import { financeArticles } from "@/lib/finance";
import { energyArticles } from "@/lib/energy";
import { materialsArticles } from "@/lib/materials";
import { entertainmentArticles } from "@/lib/entertainment";
import { foodArticles } from "@/lib/food";
import { constructionArticles } from "@/lib/construction";
import { dailyArticles } from "@/lib/daily";
import { diningArticles } from "@/lib/dining";
import { retailArticles } from "@/lib/retail";
import { specialtyArticles } from "@/lib/specialty";
import { logisticsArticles } from "@/lib/logistics";
import { servicesArticles } from "@/lib/services";
import { pharmaArticles } from "@/lib/pharma";
import { otherArticles } from "@/lib/other";
import { tradingArticles } from "@/lib/trading";
import { economyArticles } from "@/lib/economyArticles";
import { politicsArticles } from "@/lib/politicsArticles";

type SourceArticle = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
};

type Source = {
  list: SourceArticle[];
  label: string;
  color: string;
  basePath: string;
};

const sources: Source[] = [
  { list: aiArticles, label: "AI", color: "#8b5cf6", basePath: "/industry/ai" },
  { list: ictArticles, label: "情報通信", color: "#3b82f6", basePath: "/industry/ict" },
  { list: automotiveArticles, label: "自動車", color: "#ef4444", basePath: "/industry/automotive" },
  { list: financeArticles, label: "金融", color: "#f59e0b", basePath: "/industry/finance" },
  { list: energyArticles, label: "エネルギー", color: "#f97316", basePath: "/industry/energy" },
  { list: materialsArticles, label: "素材", color: "#64748b", basePath: "/industry/materials" },
  { list: entertainmentArticles, label: "エンタメ", color: "#d946ef", basePath: "/industry/entertainment" },
  { list: foodArticles, label: "食品", color: "#84cc16", basePath: "/industry/food" },
  { list: constructionArticles, label: "建設", color: "#a16207", basePath: "/industry/construction" },
  { list: dailyArticles, label: "日用品", color: "#0ea5e9", basePath: "/industry/daily" },
  { list: diningArticles, label: "外食", color: "#dc2626", basePath: "/industry/dining" },
  { list: retailArticles, label: "小売", color: "#10b981", basePath: "/industry/retail" },
  { list: specialtyArticles, label: "専門", color: "#7c3aed", basePath: "/industry/specialty" },
  { list: logisticsArticles, label: "物流", color: "#6366f1", basePath: "/industry/logistics" },
  { list: servicesArticles, label: "サービス", color: "#0891b2", basePath: "/industry/services" },
  { list: pharmaArticles, label: "医薬品", color: "#059669", basePath: "/industry/pharma" },
  { list: otherArticles, label: "その他", color: "#94a3b8", basePath: "/industry/other" },
  { list: tradingArticles, label: "商社", color: "#0d9488", basePath: "/industry/trading" },
  { list: economyArticles, label: "経済", color: "#b9770e", basePath: "/economy" },
  { list: politicsArticles, label: "政治", color: "#e53e3e", basePath: "/politics/articles" },
];

type Recommendation = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  href: string;
  label: string;
  color: string;
  score: number;
};

/**
 * Picks up to 2 recommended articles from across all categories.
 * Scoring: tag overlap is primary, recency is the tie-breaker.
 * Always excludes the current article by slug.
 */
export function RecommendedReads({
  currentSlug,
  currentTags = [],
  limit = 2,
}: {
  currentSlug: string;
  currentTags?: string[];
  limit?: number;
}) {
  const tagSet = new Set(currentTags);
  const all: Recommendation[] = [];

  for (const s of sources) {
    for (const a of s.list) {
      if (a.slug === currentSlug) continue;
      const overlap = a.tags.filter((t) => tagSet.has(t)).length;
      all.push({
        slug: a.slug,
        title: a.title,
        date: a.date,
        readTime: a.readTime,
        summary: a.summary,
        tags: a.tags,
        href: `${s.basePath}/${a.slug}`,
        label: s.label,
        color: s.color,
        score: overlap,
      });
    }
  }

  const picks = all
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);

  if (picks.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-brief-border">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 font-bold">
          Recommended
        </span>
        <span className="text-[10px] text-foreground/35">/ おすすめ記事</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {picks.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group p-4 rounded-xl border border-brief-border bg-brief-card hover:border-foreground/25 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: `${p.color}15`,
                  color: p.color,
                }}
              >
                {p.label}
              </span>
              <time className="text-[10px] tabular-nums text-foreground/40">
                {p.date}
              </time>
              <span className="text-[10px] text-foreground/30 tabular-nums">
                {p.readTime}
              </span>
            </div>
            <h4 className="font-serif text-[14px] font-bold leading-snug line-clamp-2 group-hover:text-foreground transition-colors">
              {p.title}
            </h4>
            <p className="mt-1.5 text-[11px] text-foreground/55 leading-relaxed line-clamp-2">
              {p.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
