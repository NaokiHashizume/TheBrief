import { ictArticles } from "@/lib/ict";
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
import { economyArticles } from "@/lib/economyArticles";

export const dynamic = "force-static";

const SITE_URL = "https://thebrief.info";

interface FeedArticle {
  title: string;
  slug: string;
  date: string;
  summary: string;
  category: string;
  categorySlug: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const industryArticleSets: { slug: string; label: string; articles: { title: string; slug: string; date: string; summary: string }[] }[] = [
    { slug: "ict", label: "ICT", articles: ictArticles },
    { slug: "ai", label: "AI", articles: aiArticles },
    { slug: "retail", label: "小売", articles: retailArticles },
    { slug: "construction", label: "建設", articles: constructionArticles },
    { slug: "dining", label: "外食", articles: diningArticles },
    { slug: "energy", label: "エネルギー", articles: energyArticles },
    { slug: "entertainment", label: "エンタメ", articles: entertainmentArticles },
    { slug: "finance", label: "金融", articles: financeArticles },
    { slug: "food", label: "食品", articles: foodArticles },
    { slug: "logistics", label: "物流", articles: logisticsArticles },
    { slug: "materials", label: "素材", articles: materialsArticles },
    { slug: "pharma", label: "医薬", articles: pharmaArticles },
    { slug: "services", label: "サービス", articles: servicesArticles },
    { slug: "specialty", label: "専門商社", articles: specialtyArticles },
    { slug: "trading", label: "商社", articles: tradingArticles },
    { slug: "daily", label: "日用品", articles: dailyArticles },
    { slug: "other", label: "その他", articles: otherArticles },
  ];

  const allArticles: FeedArticle[] = [];

  // Industry articles
  for (const set of industryArticleSets) {
    for (const a of set.articles) {
      allArticles.push({
        title: a.title,
        slug: a.slug,
        date: a.date,
        summary: a.summary,
        category: set.label,
        categorySlug: `industry/${set.slug}`,
      });
    }
  }

  // Economy articles
  for (const a of economyArticles) {
    allArticles.push({
      title: a.title,
      slug: a.slug,
      date: a.date,
      summary: a.summary,
      category: "経済",
      categorySlug: "economy",
    });
  }

  // Sort by date descending
  allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Take latest 50
  const latest = allArticles.slice(0, 50);

  const lastBuildDate = latest.length > 0
    ? new Date(latest[0].date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>The Brief</title>
    <link>${SITE_URL}</link>
    <description>日本の政治経済・金融から業界情報、テクノロジー・AI、ライフスタイルまで。シンプルに届けるニュース&amp;オピニオン。</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/icon.svg</url>
      <title>The Brief</title>
      <link>${SITE_URL}</link>
    </image>
${latest.map((a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/${a.categorySlug}/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/${a.categorySlug}/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${escapeXml(a.summary)}</description>
      <dc:creator>The Brief</dc:creator>
      <category>${escapeXml(a.category)}</category>
    </item>`).join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
