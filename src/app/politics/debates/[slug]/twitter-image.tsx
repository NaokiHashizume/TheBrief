import { ImageResponse } from "next/og";
import { debates } from "@/lib/debates";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "The Brief — Politics Debate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return debates.map((d) => ({ slug: d.slug }));
}

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const fontData = await getJapaneseFont();
  const { slug } = await params;
  const debate = debates.find((d) => d.slug === slug);
  const title = debate?.title ?? "The Brief";
  const summary = debate?.summary?.slice(0, 140) ?? "";
  const status = debate?.status ?? "";
  const committee = debate?.committee ?? "";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", fontFamily: "Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "#818cf8" }}>POLITICS</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "#fbbf24" }}>{status}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{committee}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: title.length > 25 ? 40 : 50, fontWeight: 900, color: "#ffffff", lineHeight: 1.3, letterSpacing: -1 }}>{title}</div>
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
    { ...size, fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" as const }] }
  );
}
