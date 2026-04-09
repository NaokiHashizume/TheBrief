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

export type ArticleSource = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
};

export type Source = {
  list: ArticleSource[];
  label: string;
  color: string;
  basePath: string;
};

export const articleSources: Source[] = [
  { list: aiArticles,            label: "AI",     color: "#8b5cf6", basePath: "/industry/ai" },
  { list: ictArticles,           label: "情報通信", color: "#3b82f6", basePath: "/industry/ict" },
  { list: automotiveArticles,    label: "自動車",  color: "#ef4444", basePath: "/industry/automotive" },
  { list: financeArticles,       label: "金融",    color: "#f59e0b", basePath: "/industry/finance" },
  { list: energyArticles,        label: "エネルギー", color: "#f97316", basePath: "/industry/energy" },
  { list: materialsArticles,     label: "素材",    color: "#64748b", basePath: "/industry/materials" },
  { list: entertainmentArticles, label: "エンタメ", color: "#d946ef", basePath: "/industry/entertainment" },
  { list: foodArticles,          label: "食品",    color: "#84cc16", basePath: "/industry/food" },
  { list: constructionArticles,  label: "建設",    color: "#a16207", basePath: "/industry/construction" },
  { list: dailyArticles,         label: "日用品",  color: "#0ea5e9", basePath: "/industry/daily" },
  { list: diningArticles,        label: "外食",    color: "#dc2626", basePath: "/industry/dining" },
  { list: retailArticles,        label: "小売",    color: "#10b981", basePath: "/industry/retail" },
  { list: specialtyArticles,     label: "専門",    color: "#7c3aed", basePath: "/industry/specialty" },
  { list: logisticsArticles,     label: "物流",    color: "#6366f1", basePath: "/industry/logistics" },
  { list: servicesArticles,      label: "サービス", color: "#0891b2", basePath: "/industry/services" },
  { list: pharmaArticles,        label: "医薬品",  color: "#059669", basePath: "/industry/pharma" },
  { list: otherArticles,         label: "その他",  color: "#94a3b8", basePath: "/industry/other" },
  { list: tradingArticles,       label: "商社",    color: "#0d9488", basePath: "/industry/trading" },
  { list: economyArticles,       label: "経済",    color: "#b9770e", basePath: "/economy" },
  { list: politicsArticles,      label: "政治",    color: "#e53e3e", basePath: "/politics/articles" },
];

/** すべての記事をフラットに返す（href付き） */
export function getAllArticles() {
  return articleSources.flatMap((s) =>
    s.list.map((a) => ({
      ...a,
      href: `${s.basePath}/${a.slug}`,
      label: s.label,
      color: s.color,
    }))
  );
}

/** すべてのユニークなタグを返す */
export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const s of articleSources) {
    for (const a of s.list) {
      for (const tag of a.tags) set.add(tag);
    }
  }
  return Array.from(set).sort();
}

/** 指定タグを持つ記事を返す（日付降順） */
export function getArticlesByTag(tag: string) {
  return getAllArticles()
    .filter((a) => a.tags.includes(tag))
    .sort((a, b) => b.date.localeCompare(a.date));
}
