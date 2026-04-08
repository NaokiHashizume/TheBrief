"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
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
import { economyArticles } from "@/lib/economyArticles";
import { politicsArticles } from "@/lib/politicsArticles";
import { tradingArticles } from "@/lib/trading";

type Source = {
  list: { slug: string; title: string; date: string; readTime: string; summary: string }[];
  category: string;
  labelJa: string;
  labelEn: string;
  color: string;
  basePath: string;
};

const sources: Source[] = [
  { list: aiArticles, category: "ai", labelJa: "AI", labelEn: "AI", color: "#8b5cf6", basePath: "/industry/ai" },
  { list: ictArticles, category: "ict", labelJa: "情報通信", labelEn: "ICT", color: "#3b82f6", basePath: "/industry/ict" },
  { list: automotiveArticles, category: "automotive", labelJa: "自動車", labelEn: "Automotive", color: "#ef4444", basePath: "/industry/automotive" },
  { list: financeArticles, category: "finance", labelJa: "金融", labelEn: "Finance", color: "#f59e0b", basePath: "/industry/finance" },
  { list: energyArticles, category: "energy", labelJa: "エネルギー", labelEn: "Energy", color: "#f97316", basePath: "/industry/energy" },
  { list: materialsArticles, category: "materials", labelJa: "素材", labelEn: "Materials", color: "#64748b", basePath: "/industry/materials" },
  { list: entertainmentArticles, category: "entertainment", labelJa: "エンタメ", labelEn: "Entertainment", color: "#d946ef", basePath: "/industry/entertainment" },
  { list: foodArticles, category: "food", labelJa: "食品", labelEn: "Food", color: "#84cc16", basePath: "/industry/food" },
  { list: constructionArticles, category: "construction", labelJa: "建設", labelEn: "Construction", color: "#a16207", basePath: "/industry/construction" },
  { list: dailyArticles, category: "daily", labelJa: "日用品", labelEn: "Daily", color: "#0ea5e9", basePath: "/industry/daily" },
  { list: diningArticles, category: "dining", labelJa: "外食", labelEn: "Dining", color: "#dc2626", basePath: "/industry/dining" },
  { list: retailArticles, category: "retail", labelJa: "小売", labelEn: "Retail", color: "#10b981", basePath: "/industry/retail" },
  { list: specialtyArticles, category: "specialty", labelJa: "専門", labelEn: "Specialty", color: "#7c3aed", basePath: "/industry/specialty" },
  { list: logisticsArticles, category: "logistics", labelJa: "物流", labelEn: "Logistics", color: "#6366f1", basePath: "/industry/logistics" },
  { list: servicesArticles, category: "services", labelJa: "サービス", labelEn: "Services", color: "#0891b2", basePath: "/industry/services" },
  { list: pharmaArticles, category: "pharma", labelJa: "医薬品", labelEn: "Pharma", color: "#059669", basePath: "/industry/pharma" },
  { list: otherArticles, category: "other", labelJa: "その他", labelEn: "Other", color: "#94a3b8", basePath: "/industry/other" },
  { list: tradingArticles, category: "trading", labelJa: "商社", labelEn: "Trading", color: "#0d9488", basePath: "/industry/trading" },
  { list: economyArticles, category: "economy", labelJa: "経済", labelEn: "Economy", color: "#b9770e", basePath: "/economy" },
  { list: politicsArticles, category: "politics", labelJa: "政治", labelEn: "Politics", color: "#e53e3e", basePath: "/politics/articles" },
];

type TimelineItem = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  href: string;
  labelJa: string;
  labelEn: string;
  color: string;
};

function buildLatest(limit: number): TimelineItem[] {
  const all: TimelineItem[] = [];
  for (const s of sources) {
    for (const a of s.list) {
      all.push({
        slug: a.slug,
        title: a.title,
        date: a.date,
        readTime: a.readTime,
        summary: a.summary,
        href: `${s.basePath}/${a.slug}`,
        labelJa: s.labelJa,
        labelEn: s.labelEn,
        color: s.color,
      });
    }
  }
  return all
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function LatestArticlesTimeline() {
  const { locale } = useLanguage();
  const items = buildLatest(10);

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="mb-6 flex items-end justify-between gap-3 border-b border-foreground/20 pb-4">
        <div>
          <span className="text-[10px] tracking-[3px] uppercase text-foreground/45 font-bold block mb-1">
            {locale === "ja" ? "Latest" : "Latest"}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-bold">
            {locale === "ja" ? "新着記事タイムライン" : "Latest Articles Timeline"}
          </h2>
        </div>
        <span className="text-[11px] text-foreground/40 tabular-nums">
          {locale === "ja" ? `直近 ${items.length} 件` : `Latest ${items.length}`}
        </span>
      </div>

      <div className="rounded-[20px] border border-brief-border bg-brief-card overflow-hidden">
        <div className="max-h-[440px] overflow-y-auto">
          <ol className="relative">
            {items.map((item, i) => (
              <li
                key={`${item.href}-${i}`}
                className={`relative ${i > 0 ? "border-t border-brief-rule" : ""}`}
              >
                <Link
                  href={item.href}
                  className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-foreground/[0.025]"
                >
                  {/* Timeline marker rail */}
                  <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full ring-4 ring-brief-card"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <time className="text-[10px] tabular-nums text-foreground/45 font-medium">
                        {item.date}
                      </time>
                      <span className="text-foreground/20">·</span>
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {locale === "ja" ? item.labelJa : item.labelEn}
                      </span>
                      <span className="text-[10px] text-foreground/35 tabular-nums">
                        {item.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-[15px] sm:text-[16px] font-bold leading-snug group-hover:text-foreground transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] text-foreground/55 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Chevron */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/20 group-hover:text-foreground/50 mt-2 flex-shrink-0 transition-colors"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
