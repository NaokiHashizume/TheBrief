import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — Politics · Economy · Industry · Trends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          fontFamily: "Georgia, serif",
        }}
      >
        {/* "THE" label */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "8px",
            color: "rgba(26,26,26,0.3)",
            textTransform: "uppercase" as const,
            marginBottom: 8,
          }}
        >
          The
        </div>

        {/* "Brief" as single text with red dot overlay */}
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
          {/* Red dot positioned above the "i" */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: 162,
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#c0392b",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 32,
            fontSize: 16,
            letterSpacing: "6px",
            color: "rgba(26,26,26,0.3)",
            textTransform: "uppercase" as const,
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
    { ...size }
  );
}
