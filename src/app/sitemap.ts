import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { debates } from "@/lib/debates";
import { enactedItems } from "@/lib/enacted";
import { passedItems } from "@/lib/passed";
import { ictArticles } from "@/lib/ict";
import { economyArticles } from "@/lib/economyArticles";
import { aiArticles } from "@/lib/ai";
import { retailArticles } from "@/lib/retail";
import { constructionArticles } from "@/lib/construction";
import { diningArticles } from "@/lib/dining";
import { energyArticles } from "@/lib/energy";
import { entertainmentArticles } from "@/lib/entertainment";
import { financeArticles } from "@/lib/finance";
import { foodArticles } from "@/lib/food";
import { logisticsArticles } from "@/lib/logistics";
import { materialsArticles } from "@/lib/materials";
import { pharmaArticles } from "@/lib/pharma";
import { servicesArticles } from "@/lib/services";
import { specialtyArticles } from "@/lib/specialty";
import { tradingArticles } from "@/lib/trading";
import { dailyArticles } from "@/lib/daily";
import { otherArticles } from "@/lib/other";

const SITE_URL = "https://thebrief.info";

/** slug → articles mapping for all industry sections with dynamic articles */
const industryArticleSets: { slug: string; articles: { slug: string; date: string }[] }[] = [
  { slug: "ict", articles: ictArticles },
  { slug: "ai", articles: aiArticles },
  { slug: "retail", articles: retailArticles },
  { slug: "construction", articles: constructionArticles },
  { slug: "dining", articles: diningArticles },
  { slug: "energy", articles: energyArticles },
  { slug: "entertainment", articles: entertainmentArticles },
  { slug: "finance", articles: financeArticles },
  { slug: "food", articles: foodArticles },
  { slug: "logistics", articles: logisticsArticles },
  { slug: "materials", articles: materialsArticles },
  { slug: "pharma", articles: pharmaArticles },
  { slug: "services", articles: servicesArticles },
  { slug: "specialty", articles: specialtyArticles },
  { slug: "trading", articles: tradingArticles },
  { slug: "daily", articles: dailyArticles },
  { slug: "other", articles: otherArticles },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/feed.xml`, lastModified: now, changeFrequency: "daily", priority: 0.3 },
    { url: `${SITE_URL}/politics/government`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // ── Politics ──
  const politicsPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/politics`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/politics/diet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/cabinet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/cabinet/policy`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/politics/legislators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/politics/debates`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/politics/passed`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/politics/enacted`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/politics/news`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/politics/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const debatePages: MetadataRoute.Sitemap = debates.map((d) => ({
    url: `${SITE_URL}/politics/debates/${d.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const passedPages: MetadataRoute.Sitemap = passedItems.map((p) => ({
    url: `${SITE_URL}/politics/passed/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const enactedPages: MetadataRoute.Sitemap = enactedItems.map((e) => ({
    url: `${SITE_URL}/politics/enacted/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Economy ──
  const economyPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/economy`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/economy/news`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/economy/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const universityPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/university`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const economyArticlePages: MetadataRoute.Sitemap = economyArticles.map((a) => ({
    url: `${SITE_URL}/economy/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Industry — category pages ──
  const industryCategorySlugs = [
    "ict", "ai", "retail", "automotive", "construction", "dining", "energy",
    "entertainment", "finance", "food", "logistics", "materials", "pharma",
    "services", "specialty", "trading", "daily", "other",
  ];

  const industryPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/industry`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/industry/overview`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...industryCategorySlugs.map((slug) => ({
      url: `${SITE_URL}/industry/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    // PL/BS/CF financial statement pages for all industries
    ...["retail", "trading", "automotive", "construction", "finance", "ict", "pharma", "services", "food", "energy", "materials", "logistics", "dining", "specialty", "daily", "entertainment"].flatMap((s) => [
      { url: `${SITE_URL}/industry/${s}/pl`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${SITE_URL}/industry/${s}/bs`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${SITE_URL}/industry/${s}/cf`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ]),
  ];

  // ── Industry — article detail pages ──
  const industryArticlePages: MetadataRoute.Sitemap = industryArticleSets.flatMap(({ slug, articles }) =>
    articles.map((a) => ({
      url: `${SITE_URL}/industry/${slug}/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [
    ...staticPages,
    ...politicsPages,
    ...debatePages,
    ...passedPages,
    ...enactedPages,
    ...economyPages,
    ...economyArticlePages,
    ...universityPages,
    ...industryPages,
    ...industryArticlePages,
  ];
}
