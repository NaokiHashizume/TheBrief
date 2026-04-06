import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — Politics · Economy · Industry · Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsukDQ.ttf"
  ).then((res) => res.arrayBuffer());

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
          background: "#1a1a1a",
          fontFamily: "Playfair Display",
        }}
      >
        {/* "THE" label */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "8px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase" as const,
            marginBottom: 8,
          }}
        >
          THE
        </div>

        {/* "Brief" — each letter segment separate so red dot is relative to "i" */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 120,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-2px",
          }}
        >
          <div style={{ display: "flex" }}>Br</div>
          <div style={{ display: "flex", position: "relative" }}>
            <div style={{ display: "flex" }}>&#305;</div>
            {/* Red dot replacing the "i" dot */}
            <div
              style={{
                position: "absolute",
                top: 6,
                left: 5,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#c0392b",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>ef</div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 36,
            fontSize: 16,
            letterSpacing: "6px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Politics · Economy · Industry · Trends
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          thebrief.info
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: fontData,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
