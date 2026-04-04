import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — Politics · Economy · Industry · Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f0f0f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "8px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase" as const,
              marginBottom: -4,
            }}
          >
            The
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
            <div style={{ fontSize: 120, fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-2px" }}>
              Br
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: -8 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#e53e3e", marginBottom: 4 }} />
              <div style={{ fontSize: 120, fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>i</div>
            </div>
            <div style={{ fontSize: 120, fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-2px" }}>
              ef
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 16,
            letterSpacing: "6px",
            color: "rgba(255,255,255,0.2)",
            textTransform: "uppercase" as const,
          }}
        >
          Politics · Economy · Industry · Trends
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          thebrief.info
        </div>
      </div>
    ),
    { ...size }
  );
}
