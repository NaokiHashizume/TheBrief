import { ImageResponse } from "next/og";
import { aiArticles } from "@/lib/ai";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "AIと著作権の最前線 — 学習データ・生成物の権利問題、日本法はどこまで来たか";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const fontData = await getJapaneseFont();
  const article = aiArticles.find((a) => a.slug === "ai-copyright-2026");
  const title = article?.title ?? "AIと著作権の最前線";
  const summary = article?.summary?.slice(0, 100) ?? "";
  const date = article?.date ?? "2026-04-10";
  const readTime = article?.readTime ?? "12 min";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #5b21b6 100%)",
          fontFamily: "NotoSansJP, Georgia, serif",
          padding: 56,
        }}
      >
        {/* Top */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#a78bfa",
              textTransform: "uppercase",
            }}
          >
            AI
          </div>
          <div
            style={{
              width: 1,
              height: 12,
              background: "rgba(255,255,255,0.15)",
              marginLeft: 12,
              marginRight: 12,
            }}
          />
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{date}</div>
          <div
            style={{
              width: 1,
              height: 12,
              background: "rgba(255,255,255,0.15)",
              marginLeft: 12,
              marginRight: 12,
            }}
          />
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{readTime}</div>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 35 ? 36 : 44,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.3,
              letterSpacing: -0.5,
              marginBottom: 18,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.7,
              maxWidth: 860,
            }}
          >
            {summary}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 4,
                color: "rgba(255,255,255,0.2)",
              }}
            >
              THE
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: -1,
                marginLeft: 7,
              }}
            >
              Brief
            </div>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            thebrief.info
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" }],
    }
  );
}
