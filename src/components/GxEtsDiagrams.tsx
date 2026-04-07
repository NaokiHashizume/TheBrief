"use client";

/* ────────────────────────────────────────────────────────────
   GX-ETS Launch 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const ECON = "#b9770e";
const GREEN = "#16a34a";
const RED = "#dc2626";
const BLUE = "#2563eb";

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={title}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ECON}aa` }}
        >
          Figure
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          {title}
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. GX-ETS Overview ── */
export function GxEtsOverviewDiagram() {
  return (
    <Card
      title="GX-ETS：自主参加から義務制度への移行"
      subtitle="2023年GX推進法 → 2026年改正で義務化"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: "#94a3b820" }}
        >
          <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60">
            BEFORE 2025
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            GXリーグ（自主参加）
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・約700社が任意で参加</li>
            <li>・罰則なし</li>
            <li>・取引は「練習」</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{
            backgroundColor: `${ECON}10`,
            borderColor: `${ECON}88`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: ECON }}
          >
            FROM 2026-04
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            GX-ETS（義務制度）
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・約400社が法的義務</li>
            <li>・移行計画の提出義務</li>
            <li>・2027年から本格取引</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

/* ── 2. Target firms by sector ── */
export function GxEtsTargetsDiagram() {
  const sectors = [
    { name: "電力（火力）", share: 35, color: ECON },
    { name: "鉄鋼", share: 22, color: "#7c3aed" },
    { name: "化学", share: 13, color: BLUE },
    { name: "セメント", share: 6, color: "#0d9488" },
    { name: "石油精製", share: 6, color: "#ea580c" },
    { name: "紙・パルプ・他", share: 18, color: "#94a3b8" },
  ];
  return (
    <Card
      title="GX-ETS 対象セクターの内訳（イメージ）"
      subtitle="日本のCO2排出量の約60%をカバー"
    >
      <div className="space-y-2">
        {sectors.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span className="font-bold text-foreground">{s.name}</span>
              <span
                className="font-bold tabular-nums"
                style={{ color: s.color }}
              >
                {s.share}%
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${s.share}%`, backgroundColor: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        対象企業数：約300〜400社（年10万t-CO2以上）
      </div>
    </Card>
  );
}

/* ── 3. Three phases ── */
export function GxEtsPhasesDiagram() {
  const phases = [
    {
      label: "Phase 1",
      years: "2023-25",
      title: "GXリーグ（自主参加）",
      detail: "罰則なし・練習段階",
      color: "#94a3b8",
    },
    {
      label: "Phase 2",
      years: "2026-32",
      title: "義務制度（無償配分中心）",
      detail: "排出枠配分・取引、価格上限下限導入",
      color: ECON,
    },
    {
      label: "Phase 3",
      years: "2033-",
      title: "発電部門オークション",
      detail: "段階的有償化、本格的炭素価格",
      color: GREEN,
    },
  ];
  return (
    <Card title="日本のカーボンプライシング ― 3フェーズ ロードマップ">
      <div className="space-y-3">
        {phases.map((p) => (
          <div
            key={p.label}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}0d` }}
          >
            <div className="flex items-baseline gap-3">
              <div
                className="text-[11px] tracking-[1.5px] uppercase font-bold"
                style={{ color: p.color }}
              >
                {p.label}
              </div>
              <div
                className="text-[11px] font-bold tabular-nums"
                style={{ color: p.color }}
              >
                {p.years}
              </div>
            </div>
            <div className="text-[13px] font-bold text-foreground mt-1">
              {p.title}
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              {p.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Fossil fuel levy ── */
export function GxEtsFossilLevyDiagram() {
  return (
    <Card
      title="化石燃料賦課金 ― 2028年度導入の「日本版炭素税」"
      subtitle="GX-ETSと組み合わせる二段構え"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${ECON}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: ECON }}
          >
            GX-ETS
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            大口排出事業者への規制
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            約400社（10万t/年以上）に直接課す
          </div>
        </div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${BLUE}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: BLUE }}
          >
            化石燃料賦課金
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            上流（輸入・採取）への課金
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            原油・LNG・石炭の輸入時にCO2量に応じた負担
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        想定価格：当面は <strong className="text-foreground">2,000〜5,000円/t-CO2</strong> 程度
        （EU-ETS の半分以下からスタート）
      </div>
    </Card>
  );
}

/* ── 5. Bond linkage ── */
export function GxEtsBondLinkDiagram() {
  return (
    <Card
      title="GX経済移行債20兆円とのブリッジ構造"
      subtitle="先に投資 → 後で炭素価格収入で償還"
    >
      <div className="space-y-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${ECON}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: ECON }}
          >
            STEP 1 ｜ 2023-32
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            GX経済移行債を発行（10年で20兆円）
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            水素・アンモニア、製鉄・化学プロセス転換、洋上風力、次世代原子力など
          </div>
        </div>
        <div className="text-center text-[18px] text-foreground/30">↓</div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: GREEN }}
          >
            STEP 2 ｜ 2028-50
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            化石燃料賦課金 + GX-ETSオークションで償還
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            2028年〜：化石燃料賦課金スタート / 2033年〜：発電オークション収入加算
          </div>
        </div>
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        2050年度までに完済予定
      </div>
    </Card>
  );
}

/* ── 6. Power price impact ── */
export function GxEtsPowerImpactDiagram() {
  const items = [
    { name: "石炭火力", impact: 2.5, color: "#1f2937" },
    { name: "LNG火力", impact: 1.2, color: ECON },
    { name: "原子力", impact: 0, color: BLUE },
    { name: "再エネ", impact: 0, color: GREEN },
  ];
  const max = 3.0;
  return (
    <Card
      title="炭素価格3,000円/tの場合の電源別コスト押し上げ"
      subtitle="単位：円/kWh（試算）"
    >
      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-3">
            <div className="w-20 text-[12px] font-bold text-foreground shrink-0">
              {it.name}
            </div>
            <div className="flex-1 h-6 rounded-md bg-foreground/5 overflow-hidden relative">
              <div
                className="h-full rounded-md flex items-center justify-end pr-2"
                style={{
                  width: `${(it.impact / max) * 100}%`,
                  backgroundColor: it.color,
                  minWidth: it.impact > 0 ? "40px" : "0",
                }}
              >
                {it.impact > 0 && (
                  <span className="text-[11px] font-bold text-white tabular-nums">
                    +{it.impact}円
                  </span>
                )}
              </div>
              {it.impact === 0 && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[11px] font-bold tabular-nums text-foreground/50">
                  ±0
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※小売電気料金で5〜10%程度の押し上げ要因
      </div>
    </Card>
  );
}

/* ── 7. International comparison ── */
export function GxEtsInternationalDiagram() {
  const countries = [
    { name: "EU-ETS", price: "€60-80", since: "2005", level: 95, color: BLUE },
    { name: "英国 ETS", price: "£30-50", since: "2021", level: 70, color: "#1d4ed8" },
    { name: "韓国 ETS", price: "₩1-2万", since: "2015", level: 35, color: "#7c3aed" },
    { name: "中国全国 ETS", price: "¥50-100", since: "2021", level: 25, color: RED },
    { name: "日本 GX-ETS", price: "未定 (¥2-5千?)", since: "2026", level: 18, color: ECON },
  ];
  return (
    <Card
      title="主要国カーボンプライシング水準の国際比較"
      subtitle="日本は20年遅れだが、慎重な制度設計"
    >
      <div className="space-y-3">
        {countries.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span className="font-bold text-foreground">
                {c.name} <span className="text-foreground/50 font-normal">since {c.since}</span>
              </span>
              <span className="font-bold tabular-nums" style={{ color: c.color }}>
                {c.price}/t
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${c.level}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 8. Stakeholder map ── */
export function GxEtsStakeholdersDiagram() {
  const groups = [
    {
      title: "投資家",
      points: ["対象企業のショートポジションが業績直結", "MSCI等が排出量モデル化"],
      color: BLUE,
    },
    {
      title: "経営者",
      points: ["2026年9月までに移行計画提出", "資金調達条件にも影響"],
      color: ECON,
    },
    {
      title: "市民",
      points: ["電気・ガス・ガソリンに転嫁", "省エネ・EV選択の経済性向上"],
      color: GREEN,
    },
  ];
  return (
    <Card title="GX-ETS が動かす3つのステークホルダー">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${g.color}0d` }}
          >
            <div
              className="text-[13px] font-bold mb-2"
              style={{ color: g.color }}
            >
              {g.title}
            </div>
            <ul className="text-[11px] text-foreground/70 space-y-1">
              {g.points.map((p) => (
                <li key={p}>・{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
