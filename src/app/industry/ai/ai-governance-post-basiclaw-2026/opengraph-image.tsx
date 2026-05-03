import { ImageResponse } from "next/og";
import { aiArticles } from "@/lib/ai";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "AI基本法施行後100日——企業に問われるAIガバナンス";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontData = await getJapaneseFont();
  const article = aiArticles.find((a) => a.slug === "ai-governance-post-basiclaw-2026");
  const title = article?.title ?? "AI基本法施行後100日";
  const summary = article?.summary?.slice(0, 110) ?? "";
  const date = article?.date ?? "2026-05-02";
  const readTime = article?.readTime ?? "11 min";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4c1d95 100%)", fontFamily: "NotoSansJP, Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, color: "#a78bfa", textTransform: "uppercase" }}>AI</div>
          <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", marginLeft: 14, marginRight: 14 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{date}</div>
          <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", marginLeft: 14, marginRight: 14 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{readTime}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: title.length > 40 ? 32 : 42, fontWeight: 900, color: "#ffffff", lineHeight: 1.3, letterSpacing: -1 }}>{title}</div>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 16 }}>{summary}</div>
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
