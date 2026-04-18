import { ImageResponse } from "next/og";
import { aiArticles } from "@/lib/ai";
import { automotiveArticles } from "@/lib/automotiveArticles";
import { constructionArticles } from "@/lib/construction";
import { dailyArticles } from "@/lib/daily";
import { diningArticles } from "@/lib/dining";
import { energyArticles } from "@/lib/energy";
import { entertainmentArticles } from "@/lib/entertainment";
import { financeArticles } from "@/lib/finance";
import { foodArticles } from "@/lib/food";
import { ictArticles } from "@/lib/ict";
import { logisticsArticles } from "@/lib/logistics";
import { materialsArticles } from "@/lib/materials";
import { otherArticles } from "@/lib/other";
import { pharmaArticles } from "@/lib/pharma";
import { retailArticles } from "@/lib/retail";
import { servicesArticles } from "@/lib/services";
import { specialtyArticles } from "@/lib/specialty";
import { tradingArticles } from "@/lib/trading";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "The Brief — Industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  const map: Record<string, { slug: string }[]> = {
    ai: aiArticles,
    automotive: automotiveArticles,
    construction: constructionArticles,
    daily: dailyArticles,
    dining: diningArticles,
    energy: energyArticles,
    entertainment: entertainmentArticles,
    finance: financeArticles,
    food: foodArticles,
    ict: ictArticles,
    logistics: logisticsArticles,
    materials: materialsArticles,
    other: otherArticles,
    pharma: pharmaArticles,
    retail: retailArticles,
    services: servicesArticles,
    specialty: specialtyArticles,
    trading: tradingArticles,
  };
  return Object.entries(map).flatMap(([category, articles]) =>
    articles.map((a) => ({ category, slug: a.slug }))
  );
}

function findArticle(category: string, slug: string) {
  const map: Record<string, typeof aiArticles> = {
    ai: aiArticles,
    automotive: automotiveArticles,
    construction: constructionArticles,
    daily: dailyArticles,
    dining: diningArticles,
    energy: energyArticles,
    entertainment: entertainmentArticles,
    finance: financeArticles,
    food: foodArticles,
    ict: ictArticles,
    logistics: logisticsArticles,
    materials: materialsArticles,
    other: otherArticles,
    pharma: pharmaArticles,
    retail: retailArticles,
    services: servicesArticles,
    specialty: specialtyArticles,
    trading: tradingArticles,
  };
  return map[category]?.find((a) => a.slug === slug);
}

const categoryNames: Record<string, string> = {
  ai: "AI・テクノロジー",
  automotive: "自動車",
  construction: "建設・不動産",
  daily: "日用品・化粧品",
  dining: "外食・フード",
  energy: "エネルギー",
  entertainment: "エンタメ",
  finance: "金融",
  food: "食品",
  ict: "ICT・通信",
  logistics: "物流",
  materials: "素材・化学",
  other: "その他業界",
  overview: "業界横断",
  pharma: "医薬品",
  retail: "小売",
  services: "サービス",
  specialty: "専門小売",
  trading: "商社・卸売",
};

export default async function OgImage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const fontData = await getJapaneseFont();
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  const title = article?.title ?? "The Brief";
  const summary = article?.summary?.slice(0, 120) ?? "";
  const date = article?.date ?? "";
  const readTime = article?.readTime ?? "";
  const categoryLabel = categoryNames[category] ?? category.toUpperCase();

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #052e16 0%, #064e3b 100%)", fontFamily: "Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "#34d399" }}>{categoryLabel}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{date}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{readTime}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: title.length > 40 ? 36 : 46, fontWeight: 900, color: "#ffffff", lineHeight: 1.3, letterSpacing: -1 }}>{title}</div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 16 }}>{summary}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, color: "rgba(255,255,255,0.25)" }}>THE</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", letterSpacing: -1, marginLeft: 8 }}>Brief</div>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>thebrief.info</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" }] }
  );
}
