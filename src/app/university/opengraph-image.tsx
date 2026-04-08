import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — University 教養・学問";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 4, color: "#a5b4fc" }}>UNIVERSITY</div>
          <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>thebrief.info/university</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#ffffff", lineHeight: 1.15, letterSpacing: -2, fontFamily: "Georgia, serif" }}>教養・学問</div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginTop: 16, letterSpacing: 1 }}>Liberal Arts & Academic Knowledge</div>
          <div style={{ display: "flex", marginTop: 24 }}>
            {["数学", "統計", "哲学", "論理学", "経済学"].map((tag, i) => (
              <div key={i} style={{ fontSize: 12, color: "#a5b4fc", background: "rgba(165,180,252,0.1)", border: "1px solid rgba(165,180,252,0.25)", borderRadius: 6, padding: "4px 12px", marginRight: 8 }}>{tag}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, color: "rgba(255,255,255,0.25)" }}>THE</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", letterSpacing: -1, marginLeft: 8 }}>Brief</div>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>thebrief.info</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
