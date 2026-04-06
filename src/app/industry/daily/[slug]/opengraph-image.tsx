import { ImageResponse } from "next/og";
import { dailyArticles } from "@/lib/daily";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "The Brief — 生活・日用品 Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return dailyArticles.map((a) => ({ slug: a.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const fontData = await getJapaneseFont();
  const { slug } = await params;
  const article = dailyArticles.find((a) => a.slug === slug);
  const title = article?.title ?? "The Brief";
  const summary = article?.summary?.slice(0, 120) ?? "";
  const date = article?.date ?? "";
  const readTime = article?.readTime ?? "";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #164e63 0%, #155e75 100%)", fontFamily: "Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "#06b6d4" }}>DAILY</div>
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
