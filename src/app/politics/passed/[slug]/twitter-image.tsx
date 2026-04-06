import { ImageResponse } from "next/og";
import { passedItems } from "@/lib/passed";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "The Brief — Passed Law";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return passedItems.map((p) => ({ slug: p.slug }));
}

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const fontData = await getJapaneseFont();
  const { slug } = await params;
  const item = passedItems.find((p) => p.slug === slug);
  const title = item?.title ?? "The Brief";
  const summary = item?.summary?.slice(0, 140) ?? "";
  const category = item?.category ?? "";
  const effectiveDate = item?.effectiveDate ?? "";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)", fontFamily: "Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "#a78bfa" }}>POLITICS</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "#a78bfa" }}>PASSED</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{category}</div>
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
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>{effectiveDate}</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "NotoSansJP", data: fontData, style: "normal" }] }
  );
}
