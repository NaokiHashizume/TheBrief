import { ImageResponse } from "next/og";
import { retailArticles } from "@/lib/retail";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "ミニストップはなぜ沈んだか — 巨額赤字が映すコンビニ4位の構造問題";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontData = await getJapaneseFont();
  const article = retailArticles.find((a) => a.slug === "ministop-deficit-2026");
  const title = article?.title ?? "ミニストップはなぜ沈んだか";
  const summary = article?.summary?.slice(0, 100) ?? "";
  const date = article?.date ?? "2026-04-09";
  const readTime = article?.readTime ?? "10 min";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1c0505 0%, #7f1d1d 50%, #450a0a 100%)",
          fontFamily: "Georgia, serif",
          padding: 60,
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, color: "#f87171" }}>
            RETAIL
          </div>
          <div
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.15)",
              marginLeft: 16,
              marginRight: 16,
            }}
          />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{date}</div>
          <div
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.15)",
              marginLeft: 16,
              marginRight: 16,
            }}
          />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{readTime}</div>
          <div
            style={{
              width: 1,
              height: 16,
              background: "rgba(255,255,255,0.15)",
              marginLeft: 16,
              marginRight: 16,
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#f87171",
              letterSpacing: 1,
              padding: "3px 10px",
              border: "1px solid rgba(248,113,113,0.4)",
              borderRadius: 4,
            }}
          >
            3期連続赤字
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          {/* Deficit badge */}
          <div style={{ display: "flex", marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(248,113,113,0.15)",
                border: "1px solid rgba(248,113,113,0.3)",
                borderRadius: 8,
                padding: "8px 20px",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: "#f87171" }}>▼ 56億円</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginLeft: 12 }}>
                2026年2月期 最終赤字
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: title.length > 30 ? 38 : 46,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.3,
              letterSpacing: -0.5,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.6,
              marginTop: 16,
            }}
          >
            {summary}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 4,
                color: "rgba(255,255,255,0.25)",
              }}
            >
              THE
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: -1,
                marginLeft: 8,
              }}
            >
              Brief
            </div>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>thebrief.info</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" }],
    }
  );
}
