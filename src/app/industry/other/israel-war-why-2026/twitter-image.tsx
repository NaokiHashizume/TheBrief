import { ImageResponse } from "next/og";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "イスラエルはなぜ戦争を続けるのか — The Brief";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const fontData = await getJapaneseFont();
  const title = "イスラエルはなぜ戦争を続けるのか";
  const subtitle = "5つの構造的理由と出口なき泥沼";
  const date = "2026-04-09";
  const readTime = "12 min";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #18181b 100%)",
          fontFamily: "NotoSansJP, Georgia, serif",
          padding: 60,
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 13, fontWeight: 700, letterSpacing: 3, color: "#f87171" }}>
            MIDDLE EAST · GEOPOLITICS
          </div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ display: "flex", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{date}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ display: "flex", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{readTime}</div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          {/* Accent bar */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
            <div style={{ width: 4, height: 40, background: "#ef4444", borderRadius: 2, marginRight: 16 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 12, color: "#f87171", letterSpacing: 2, fontWeight: 700 }}>特集</div>
              <div style={{ display: "flex", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>FEATURE ANALYSIS</div>
            </div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", fontSize: 52, fontWeight: 900, color: "#ffffff", lineHeight: 1.2, letterSpacing: -1 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#f87171", marginTop: 12, lineHeight: 1.3 }}>
            {`— ${subtitle}`}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", marginTop: 28 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 4, marginRight: 8, letterSpacing: 0.5, display: "flex" }}>ネタニヤフ</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 4, marginRight: 8, letterSpacing: 0.5, display: "flex" }}>連立の罠</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 4, marginRight: 8, letterSpacing: 0.5, display: "flex" }}>人道危機</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 4, marginRight: 8, letterSpacing: 0.5, display: "flex" }}>地政学</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: 4, letterSpacing: 0.5, display: "flex" }}>日本への影響</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "rgba(255,255,255,0.25)" }}>THE</div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 900, color: "#ffffff", letterSpacing: -1, marginLeft: 8 }}>Brief</div>
          </div>
          <div style={{ display: "flex", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>thebrief.info</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" }] }
  );
}
