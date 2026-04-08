"use client";

import { T } from "@/components/T";

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
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ECON}aa` }}
        >
          <T ja="図" en="FIGURE" />
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
      title={<T ja="GX-ETS：自主参加から義務制度への移行" en="GX-ETS: from voluntary to mandatory" />}
      subtitle={<T ja="2023年GX推進法 → 2026年改正で義務化" en="2023 GX Promotion Act → made mandatory by the 2026 amendment" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: "#94a3b820" }}
        >
          <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60">
            <T ja="2025年以前" en="Through 2025" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="GXリーグ（自主参加）" en="GX League (voluntary)" />
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li><T ja="・約700社が任意で参加" en="- About 700 firms joined voluntarily" /></li>
            <li><T ja="・罰則なし" en="- No penalties" /></li>
            <li><T ja="・取引は「練習」" en="- Trading treated as practice" /></li>
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
            <T ja="2026年4月から" en="From April 2026" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="GX-ETS（義務制度）" en="GX-ETS (mandatory)" />
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li><T ja="・約400社が法的義務" en="- About 400 firms legally obligated" /></li>
            <li><T ja="・移行計画の提出義務" en="- Must submit transition plans" /></li>
            <li><T ja="・2027年から本格取引" en="- Full-scale trading from 2027" /></li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

/* ── 2. Target firms by sector ── */
export function GxEtsTargetsDiagram() {
  const sectors = [
    { name: "電力（火力）", nameEn: "Power (thermal)", share: 35, color: ECON },
    { name: "鉄鋼", nameEn: "Steel", share: 22, color: "#7c3aed" },
    { name: "化学", nameEn: "Chemicals", share: 13, color: BLUE },
    { name: "セメント", nameEn: "Cement", share: 6, color: "#0d9488" },
    { name: "石油精製", nameEn: "Oil refining", share: 6, color: "#ea580c" },
    { name: "紙・パルプ・他", nameEn: "Pulp, paper & others", share: 18, color: "#94a3b8" },
  ];
  return (
    <Card
      title={<T ja="GX-ETS 対象セクターの内訳（イメージ）" en="GX-ETS target sectors (illustrative)" />}
      subtitle={<T ja="日本のCO2排出量の約60%をカバー" en="Covers about 60% of Japan's CO2 emissions" />}
    >
      <div className="space-y-2">
        {sectors.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span className="font-bold text-foreground"><T ja={s.name} en={s.nameEn} /></span>
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
        <T ja="対象企業数：約300〜400社（年10万t-CO2以上）" en="Covered firms: ~300–400 (100,000 t-CO2/year or more)" />
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
      titleEn: "GX League (voluntary)",
      detail: "罰則なし・練習段階",
      detailEn: "No penalties; practice phase",
      color: "#94a3b8",
    },
    {
      label: "Phase 2",
      years: "2026-32",
      title: "義務制度（無償配分中心）",
      titleEn: "Mandatory (mostly free allocation)",
      detail: "排出枠配分・取引、価格上限下限導入",
      detailEn: "Allowance allocation & trading, price floor and ceiling",
      color: ECON,
    },
    {
      label: "Phase 3",
      years: "2033-",
      title: "発電部門オークション",
      titleEn: "Power-sector auctions",
      detail: "段階的有償化、本格的炭素価格",
      detailEn: "Phased shift to paid allowances; full carbon price",
      color: GREEN,
    },
  ];
  return (
    <Card title={<T ja="日本のカーボンプライシング ― 3フェーズ ロードマップ" en="Japan's carbon pricing — three-phase roadmap" />}>
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
              <T ja={p.title} en={p.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              <T ja={p.detail} en={p.detailEn} />
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
      title={<T ja="化石燃料賦課金 ― 2028年度導入の「日本版炭素税」" en="Fossil fuel levy — Japan's carbon tax, launching FY2028" />}
      subtitle={<T ja="GX-ETSと組み合わせる二段構え" en="A two-layer design paired with GX-ETS" />}
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
            <T ja="大口排出事業者への規制" en="Regulates large emitters" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            <T ja="約400社（10万t/年以上）に直接課す" en="Directly imposes on ~400 firms (100,000 t/yr or more)" />
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
            <T ja="化石燃料賦課金" en="Fossil fuel levy" />
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            <T ja="上流（輸入・採取）への課金" en="Charged upstream (import / extraction)" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            <T ja="原油・LNG・石炭の輸入時にCO2量に応じた負担" en="Charged on crude, LNG, and coal imports based on CO2 content" />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T ja="想定価格：当面は " en="Expected price: initially around " />
        <strong className="text-foreground"><T ja="2,000〜5,000円/t-CO2" en="¥2,000–5,000 / t-CO2" /></strong>
        <T ja=" 程度（EU-ETS の半分以下からスタート）" en=" — less than half of EU-ETS at the start" />
      </div>
    </Card>
  );
}

/* ── 5. Bond linkage ── */
export function GxEtsBondLinkDiagram() {
  return (
    <Card
      title={<T ja="GX経済移行債20兆円とのブリッジ構造" en="Bridge to the ¥20 trillion GX Transition Bonds" />}
      subtitle={<T ja="先に投資 → 後で炭素価格収入で償還" en="Invest first, then repay from carbon-pricing revenue" />}
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
            <T ja="STEP 1 ｜ 2023-32" en="STEP 1 | 2023-32" />
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            <T ja="GX経済移行債を発行（10年で20兆円）" en="Issue GX Transition Bonds (¥20T over 10 years)" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            <T ja="水素・アンモニア、製鉄・化学プロセス転換、洋上風力、次世代原子力など" en="Hydrogen & ammonia, steel & chemicals process conversion, offshore wind, next-gen nuclear, and more" />
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
            <T ja="STEP 2 ｜ 2028-50" en="STEP 2 | 2028-50" />
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            <T ja="化石燃料賦課金 + GX-ETSオークションで償還" en="Repaid via the fossil fuel levy and GX-ETS auctions" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-1">
            <T ja="2028年〜：化石燃料賦課金スタート / 2033年〜：発電オークション収入加算" en="From 2028: fossil fuel levy begins / From 2033: power auction revenue added" />
          </div>
        </div>
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja="2050年度までに完済予定" en="Scheduled to be fully repaid by FY2050" />
      </div>
    </Card>
  );
}

/* ── 6. Power price impact ── */
export function GxEtsPowerImpactDiagram() {
  const items = [
    { name: "石炭火力", nameEn: "Coal-fired", impact: 2.5, color: "#1f2937" },
    { name: "LNG火力", nameEn: "LNG-fired", impact: 1.2, color: ECON },
    { name: "原子力", nameEn: "Nuclear", impact: 0, color: BLUE },
    { name: "再エネ", nameEn: "Renewables", impact: 0, color: GREEN },
  ];
  const max = 3.0;
  return (
    <Card
      title={<T ja="炭素価格3,000円/tの場合の電源別コスト押し上げ" en="Cost uplift by power source at a ¥3,000/t carbon price" />}
      subtitle={<T ja="単位：円/kWh（試算）" en="Unit: yen/kWh (estimated)" />}
    >
      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-3">
            <div className="w-20 text-[12px] font-bold text-foreground shrink-0">
              <T ja={it.name} en={it.nameEn} />
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
                    <T ja={`+${it.impact}円`} en={`+¥${it.impact}`} />
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
        <T ja="※小売電気料金で5〜10%程度の押し上げ要因" en="* Pushes retail electricity rates up by roughly 5–10%" />
      </div>
    </Card>
  );
}

/* ── 7. International comparison ── */
export function GxEtsInternationalDiagram() {
  const countries = [
    { name: "EU-ETS", nameEn: "EU-ETS", price: "€60-80", since: "2005", level: 95, color: BLUE },
    { name: "英国 ETS", nameEn: "UK ETS", price: "£30-50", since: "2021", level: 70, color: "#1d4ed8" },
    { name: "韓国 ETS", nameEn: "Korea ETS", price: "₩1-2万", priceEn: "₩10–20k", since: "2015", level: 35, color: "#7c3aed" },
    { name: "中国全国 ETS", nameEn: "China national ETS", price: "¥50-100", since: "2021", level: 25, color: RED },
    { name: "日本 GX-ETS", nameEn: "Japan GX-ETS", price: "未定 (¥2-5千?)", priceEn: "TBD (¥2–5k?)", since: "2026", level: 18, color: ECON },
  ];
  return (
    <Card
      title={<T ja="主要国カーボンプライシング水準の国際比較" en="International comparison of carbon pricing levels" />}
      subtitle={<T ja="日本は20年遅れだが、慎重な制度設計" en="Japan is 20 years behind but designing cautiously" />}
    >
      <div className="space-y-3">
        {countries.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span className="font-bold text-foreground">
                <T ja={c.name} en={c.nameEn} /> <span className="text-foreground/50 font-normal"><T ja={`${c.since}年〜`} en={`since ${c.since}`} /></span>
              </span>
              <span className="font-bold tabular-nums" style={{ color: c.color }}>
                <T ja={c.price} en={c.priceEn ?? c.price} />/t
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
      titleEn: "Investors",
      points: ["対象企業のショートポジションが業績直結", "MSCI等が排出量モデル化"],
      pointsEn: ["Short positions on covered firms feed into earnings", "MSCI and others now model emissions"],
      color: BLUE,
    },
    {
      title: "経営者",
      titleEn: "Executives",
      points: ["2026年9月までに移行計画提出", "資金調達条件にも影響"],
      pointsEn: ["Must submit transition plans by September 2026", "Financing terms also affected"],
      color: ECON,
    },
    {
      title: "市民",
      titleEn: "Citizens",
      points: ["電気・ガス・ガソリンに転嫁", "省エネ・EV選択の経済性向上"],
      pointsEn: ["Costs pass through to electricity, gas, and gasoline", "Energy efficiency and EVs become more attractive"],
      color: GREEN,
    },
  ];
  return (
    <Card title={<T ja="GX-ETS が動かす3つのステークホルダー" en="Three stakeholder groups shaped by GX-ETS" />}>
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
              <T ja={g.title} en={g.titleEn} />
            </div>
            <ul className="text-[11px] text-foreground/70 space-y-1">
              {g.points.map((p, idx) => (
                <li key={p}>・<T ja={p} en={g.pointsEn[idx]} /></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
