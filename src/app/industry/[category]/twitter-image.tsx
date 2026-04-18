import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Brief — Industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryNames: Record<string, { ja: string; en: string }> = {
  ai: { ja: "AI・テクノロジー", en: "AI & Technology" },
  automotive: { ja: "自動車", en: "Automotive" },
  construction: { ja: "建設・不動産", en: "Construction" },
  daily: { ja: "日用品・化粧品", en: "Daily Goods" },
  dining: { ja: "外食・フード", en: "Dining" },
  energy: { ja: "エネルギー", en: "Energy" },
  entertainment: { ja: "エンタメ", en: "Entertainment" },
  finance: { ja: "金融", en: "Finance" },
  food: { ja: "食品", en: "Food" },
  ict: { ja: "ICT・通信", en: "ICT & Telecom" },
  logistics: { ja: "物流", en: "Logistics" },
  materials: { ja: "素材・化学", en: "Materials" },
  other: { ja: "その他業界", en: "Other Industries" },
  overview: { ja: "業界横断", en: "Industry Overview" },
  pharma: { ja: "医薬品", en: "Pharma" },
  retail: { ja: "小売", en: "Retail" },
  services: { ja: "サービス", en: "Services" },
  specialty: { ja: "専門小売", en: "Specialty Retail" },
  trading: { ja: "商社・卸売", en: "Trading" },
};

export function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({ category }));
}

export default async function TwitterImage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const info = categoryNames[category] ?? { ja: category, en: category };

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", padding: 60 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 4, color: "#34d399" }}>INDUSTRY</div>
          <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", marginLeft: 16, marginRight: 16 }} />
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>thebrief.info/industry</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#ffffff", lineHeight: 1.15, letterSpacing: -2, fontFamily: "Georgia, serif" }}>{info.ja}</div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginTop: 16, letterSpacing: 1 }}>{info.en}</div>
          <div style={{ display: "flex", marginTop: 24 }}>
            <div style={{ fontSize: 12, color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 6, padding: "4px 12px", marginRight: 8 }}>業界別ニュース</div>
            <div style={{ fontSize: 12, color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 6, padding: "4px 12px" }}>Industry · Business · Markets</div>
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
