import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — Politics · Economy · Industry · Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Load font from Google Fonts
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
          background: "#fafaf8",
          fontFamily: "Playfair Display",
        }}
      >
        {/* "THE" label */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "8px",
            color: "rgba(26,26,26,0.35)",
            textTransform: "uppercase" as const,
            marginBottom: 8,
          }}
        >
          THE
        </div>

        {/* "Brief" with red dot */}
        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#1a1a1a",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            Brief
          </div>
          {/* Red dot over the "i" */}
          <div
            style={{
              position: "absolute",
              top: -2,
              left: 164,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#c0392b",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 36,
            fontSize: 16,
            letterSpacing: "6px",
            color: "rgba(26,26,26,0.3)",
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
            color: "rgba(26,26,26,0.2)",
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
