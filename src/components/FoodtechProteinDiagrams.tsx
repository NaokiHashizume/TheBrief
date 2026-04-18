"use client";

import { T } from "./T";

const ACCENT = "#84cc16";

function Card({
  title,
  titleEn,
  children,
}: {
  title: string;
  titleEn: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">
          Figure
        </div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">
          <T ja={title} en={titleEn} />
        </h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. foodtech-market-forecast ── */
export function FoodtechMarketForecastDiagram() {
  const data = [
    { year: "2020", global: 24, domestic: null, label: "24兆円", labelEn: "¥24T" },
    { year: "2024", global: null, domestic: 124, label: "1,239億円（国内）", labelEn: "¥123.9B (domestic)" },
    { year: "2025", global: 120, domestic: null, label: "12兆円（代替肉）", labelEn: "¥12T (alt-meat)" },
    { year: "2030", global: null, domestic: 147, label: "1,473億円（国内予測）", labelEn: "¥147.3B (domestic est.)" },
    { year: "2050", global: 2790, domestic: null, label: "279兆円（農水省予測）", labelEn: "¥279T (MAFF projection)" },
  ];
  return (
    <Card title="フードテック市場規模——農水省予測 vs 現実の国内市場" titleEn="Foodtech Market Scale — MAFF Projection vs Domestic Reality">
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-foreground/50 w-10 flex-shrink-0 tabular-nums">{d.year}</span>
            <div className="flex-1 h-6 rounded-full bg-foreground/[0.06] overflow-hidden relative">
              <div
                className="h-full rounded-full absolute left-0 top-0"
                style={{
                  width: d.global
                    ? `${Math.min((d.global / 2790) * 100, 100)}%`
                    : `${Math.min((d.domestic! / 2790) * 100 * 20, 30)}%`,
                  backgroundColor: d.domestic ? "#94a3b8" : ACCENT,
                  opacity: 0.7,
                }}
              />
            </div>
            <span className="text-[11px] text-foreground/65 w-36 flex-shrink-0">
              <T ja={d.label} en={d.labelEn} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-[11px] text-foreground/50">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded-sm inline-block" style={{ backgroundColor: ACCENT, opacity: 0.7 }} />
          <T ja="グローバル" en="Global" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded-sm inline-block bg-slate-400 opacity-70" />
          <T ja="国内市場（矢野経済研究所）" en="Domestic (Yano Research)" />
        </span>
      </div>
    </Card>
  );
}

/* ── 2. foodtech-consumer-barrier ── */
export function FoodtechConsumerBarrierDiagram() {
  const stats = [
    { ja: "「環境に配慮した食品を選ぶ」同意", en: "\"I choose eco-friendly food\" (agree)", pct: 63, color: ACCENT },
    { ja: "「代替肉を積極的に試したい」", en: "\"I want to try alt-meat\"", pct: 21, color: "#f59e0b" },
    { ja: "「代替肉の味・食感に満足」（試食者）", en: "\"Satisfied with taste/texture\" (tasters)", pct: 39, color: "#ef4444" },
  ];
  return (
    <Card title="消費者の「知っているけど食べない」の壁" titleEn="The Consumer 'Aware But Won't Eat' Barrier">
      <div className="space-y-4">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-foreground/75">
                <T ja={s.ja} en={s.en} />
              </span>
              <span className="font-bold tabular-nums" style={{ color: s.color }}>{s.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${s.pct}%`, backgroundColor: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T ja="出典: Mintel 2025 / フードテックジャパン調査" en="Source: Mintel 2025 / Foodtech Japan survey" />
      </div>
    </Card>
  );
}

/* ── 3. foodtech-cultured-meat-status ── */
export function FoodtechCulturedMeatStatusDiagram() {
  const items = [
    {
      ja: "国内開発スタートアップ数",
      en: "Domestic development startups",
      value: "70社以上",
      valueEn: "70+ companies",
      icon: "🏭",
    },
    {
      ja: "商業販売許可（日本）",
      en: "Commercial sale approved (Japan)",
      value: "0品目",
      valueEn: "0 products",
      icon: "🚫",
    },
    {
      ja: "商業販売許可（米国）",
      en: "Commercial sale approved (US)",
      value: "2社（2023年〜）",
      valueEn: "2 companies (since 2023)",
      icon: "✅",
    },
    {
      ja: "日本の規制整備",
      en: "Japan regulatory readiness",
      value: "上市前相談窓口を検討中",
      valueEn: "Pre-market consultation window planned",
      icon: "⏳",
    },
  ];
  return (
    <Card title="培養肉の現状——開発70社、しかし「食べられる製品」はまだない" titleEn="Cultured Meat Status — 70+ Developers, No Approved Products Yet">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="p-3 rounded-xl bg-foreground/[0.03] text-center">
            <div className="text-[22px] mb-1">{item.icon}</div>
            <div className="text-[10px] text-foreground/50 mb-1">
              <T ja={item.ja} en={item.en} />
            </div>
            <div className="text-[13px] font-bold" style={{ color: ACCENT }}>
              <T ja={item.value} en={item.valueEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl text-center bg-foreground/[0.02] text-[11px] text-foreground/50">
        <T ja="2025年大阪万博で培養肉試食→消費者認知は向上したが流通には至らず" en="Osaka Expo 2025 tasting raised awareness but not commercial availability" />
      </div>
    </Card>
  );
}

/* ── 4. foodtech-alternative-types ── */
export function FoodtechAlternativeTypesDiagram() {
  const types = [
    {
      ja: "大豆ミート",
      en: "Soy Meat",
      status: "失速",
      statusEn: "Stalling",
      note: "一部製品が終売・縮小",
      noteEn: "Some products discontinued/scaled down",
      color: "#ef4444",
    },
    {
      ja: "昆虫食（コオロギ等）",
      en: "Insect Protein",
      status: "限定普及",
      statusEn: "Limited",
      note: "学校給食・お菓子分野での試験導入",
      noteEn: "Pilot use in school meals & snacks",
      color: "#f59e0b",
    },
    {
      ja: "藻類（スピルリナ等）",
      en: "Algae",
      status: "健康食品",
      statusEn: "Health food",
      note: "主食代替としての定着は限定的",
      noteEn: "Limited adoption as staple substitute",
      color: "#94a3b8",
    },
    {
      ja: "豆腐・豆乳・納豆",
      en: "Tofu/Soy milk/Natto",
      status: "成長中",
      statusEn: "Growing",
      note: "プロテインブームで再定義・市場拡大",
      noteEn: "Reframed via protein boom, expanding market",
      color: ACCENT,
    },
  ];
  return (
    <Card title="代替タンパク質の多様化と市場の棲み分け" titleEn="Alternative Protein Diversification & Market Positioning">
      <div className="space-y-3">
        {types.map((t, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-foreground/[0.03]">
            <div className="flex-1">
              <span className="text-[13px] font-bold text-foreground/80">
                <T ja={t.ja} en={t.en} />
              </span>
              <p className="text-[11px] text-foreground/50 mt-0.5">
                <T ja={t.note} en={t.noteEn} />
              </p>
            </div>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ color: t.color, background: `${t.color}18` }}
            >
              <T ja={t.status} en={t.statusEn} />
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. foodtech-food-security ── */
export function FoodtechFoodSecurityDiagram() {
  const risks = [
    { ja: "食料自給率（カロリーベース）", en: "Food self-sufficiency (calorie basis)", value: "38%", color: "#ef4444" },
    { ja: "円安による食品価格上昇（2022〜）", en: "Food price rise due to yen weakness (2022–)", value: "+20〜30%", color: "#f59e0b" },
    { ja: "農業就業者の平均年齢", en: "Average age of farmers", value: "68.4歳", color: "#f59e0b" },
    { ja: "輸入依存度", en: "Import dependency", value: "62%", color: "#ef4444" },
  ];
  return (
    <Card title="食料安全保障の三重苦——円安・高齢化・気候変動" titleEn="Triple Food Security Threat — Yen, Aging, Climate">
      <div className="grid grid-cols-2 gap-3">
        {risks.map((r, i) => (
          <div key={i} className="p-3 rounded-xl bg-foreground/[0.03] text-center">
            <div className="text-[10px] text-foreground/50 mb-1 leading-tight">
              <T ja={r.ja} en={r.en} />
            </div>
            <div className="text-[20px] font-bold font-serif" style={{ color: r.color }}>
              {r.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.02] text-[11px] text-foreground/50 text-center">
        <T ja="フードテックは「2050年への解決策」だが、喫緊課題への即応規模ではない" en="Foodtech addresses 2050 challenges but cannot respond at scale to urgent near-term crises" />
      </div>
    </Card>
  );
}

/* ── 6. foodtech-strategic-view ── */
export function FoodtechStrategicViewDiagram() {
  const comparison = [
    {
      ja: "農水省の政策目標",
      en: "MAFF policy target",
      value: "279兆円（2050年）",
      valueEn: "¥279T (2050)",
      sub: "グローバル市場",
      subEn: "Global market",
      isHighlight: false,
    },
    {
      ja: "投資・事業判断の現実",
      en: "Business reality",
      value: "1,473億円（2030年予測）",
      valueEn: "¥147.3B (2030 est.)",
      sub: "国内市場・年率2.9%成長",
      subEn: "Domestic / +2.9% pa",
      isHighlight: true,
    },
  ];
  return (
    <Card title="「279兆円」より「1,473億円」を直視せよ" titleEn="Focus on ¥147.3B, Not ¥279T">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {comparison.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-xl text-center"
            style={{
              background: c.isHighlight ? `${ACCENT}10` : "rgba(0,0,0,0.02)",
              border: c.isHighlight ? `1px solid ${ACCENT}30` : "1px solid transparent",
            }}
          >
            <div className="text-[10px] text-foreground/50 mb-1">
              <T ja={c.ja} en={c.en} />
            </div>
            <div className="text-[16px] font-bold" style={{ color: c.isHighlight ? ACCENT : "#94a3b8" }}>
              <T ja={c.value} en={c.valueEn} />
            </div>
            <div className="text-[10px] text-foreground/40 mt-1">
              <T ja={c.sub} en={c.subEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/60">
        <T ja="欧米の先行事例: Beyond Meat株価はIPOピーク比▲95%超。「環境価値だけ」では消費者は動かない。「美味しくて・安くて・便利」が先決。" en="Western precedent: Beyond Meat stock fell 95%+ from IPO peak. 'Green values alone' don't move consumers. Taste, price, and convenience come first." />
      </div>
    </Card>
  );
}
