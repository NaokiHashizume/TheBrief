import { ImageResponse } from "next/og";
import { getAllStories, getStoryBySlug } from "@/lib/getStories";
import { getJapaneseFont } from "@/lib/ogFont";

export const dynamic = "force-static";
export const alt = "The Brief — Story";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const stories = await getAllStories();
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const fontData = await getJapaneseFont();
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  const title = story?.title ?? "The Brief";
  const description = story?.description?.slice(0, 140) ?? "";
  const category = story?.categoryLabel ?? "Story";
  const episodes = story?.episodes?.length ?? 0;
  const lastUpdated = story?.lastUpdated ?? "";

  const bgColors: Record<string, string> = {
    Economy: "linear-gradient(135deg, #451a03 0%, #78350f 100%)",
    Politics: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    Industry: "linear-gradient(135deg, #0c4a6e 0%, #075985 100%)",
  };
  const accentColors: Record<string, string> = { Economy: "#f59e0b", Politics: "#818cf8", Industry: "#38bdf8" };
  const bg = bgColors[category] ?? "linear-gradient(135deg, #1a1a1a 0%, #374151 100%)";
  const accent = accentColors[category] ?? "#c0392b";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: bg, fontFamily: "Georgia, serif", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: accent }}>{category.toUpperCase()}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{`${episodes} episodes`}</div>
          <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{lastUpdated}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "rgba(255,255,255,0.3)" }}>STORYLINE</div>
          <div style={{ fontSize: title.length > 25 ? 42 : 52, fontWeight: 900, color: "#ffffff", lineHeight: 1.3, letterSpacing: -1, marginTop: 8 }}>{title}</div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 16 }}>{description}</div>
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
