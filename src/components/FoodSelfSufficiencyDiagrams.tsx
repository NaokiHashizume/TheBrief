"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Food Self-Sufficiency 38% — Diagrams
   ──────────────────────────────────────────────────────────── */

const FOOD = "#84cc16";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";

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
          style={{ color: `${FOOD}aa` }}
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

/* ── 1. Formula ── */
export function FoodSsrFormulaDiagram() {
  return (
    <Card
      title={<T ja="食料自給率の2つの計算方式" en="Two Methods for Calculating Food Self-Sufficiency" />}
      subtitle={<T ja="カロリーベース vs 生産額ベース" en="Calorie basis vs. production value basis" />}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="カロリーベース" en="Calorie basis" /></div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            38%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="2024年度" en="FY2024" /></div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="生産額ベース" en="Production value basis" /></div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            61%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="2024年度" en="FY2024" /></div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${FOOD}0d` }}
      >
        <T
          ja={<><strong>計算式</strong>：国内生産の供給熱量 ÷ 1人1日当たり総供給熱量<br />例：870 kcal ÷ 2,300 kcal ≒ 38%</>}
          en={<><strong>Formula</strong>: Calories supplied from domestic production ÷ Total daily calories supplied per person<br />Example: 870 kcal ÷ 2,300 kcal ≈ 38%</>}
        />
      </div>
      <div className="mt-3 text-[10px] text-foreground/45">
        <T ja="※ FAOおよび他の先進国はカロリーベース方式を採用していない" en="* The FAO and most developed countries do not use the calorie-basis method" />
      </div>
    </Card>
  );
}

/* ── 2. By item ── */
export function FoodSsrByItemDiagram() {
  const items = [
    { name: "米", nameEn: "Rice", pct: 97, color: GREEN },
    { name: "鶏卵", nameEn: "Eggs", pct: 97, color: GREEN },
    { name: "野菜", nameEn: "Vegetables", pct: 80, color: GREEN },
    { name: "牛乳・乳製品", nameEn: "Milk & dairy", pct: 63, color: ECON },
    { name: "魚介類", nameEn: "Seafood", pct: 54, color: ECON },
    { name: "肉類", nameEn: "Meat", pct: 53, color: ECON },
    { name: "果実", nameEn: "Fruit", pct: 39, color: RED },
    { name: "砂糖類", nameEn: "Sugar", pct: 33, color: RED },
    { name: "小麦", nameEn: "Wheat", pct: 17, color: RED },
    { name: "大豆", nameEn: "Soybeans", pct: 6, color: RED },
    { name: "油脂類", nameEn: "Edible oils", pct: 3, color: RED },
    { name: "とうもろこし", nameEn: "Corn", pct: 0, color: RED },
  ];
  return (
    <Card
      title={<T ja="品目別の自給率" en="Self-Sufficiency Rate by Food Category" />}
      subtitle={<T ja="重量ベース（最新概算）" en="Weight basis (latest estimates)" />}
    >
      <div className="space-y-1.5">
        {items.map((i) => (
          <div key={i.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70"><T ja={i.name} en={i.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: i.color }}
              >
                {i.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${i.pct}%`, backgroundColor: i.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<><strong>飼料換算</strong>：豚肉49% → 飼料を加味すると<strong>7%</strong></>}
          en={<><strong>Feed-adjusted</strong>: Pork 49% → drops to <strong>7%</strong> when feed imports are included</>}
        />
      </div>
    </Card>
  );
}

/* ── 3. International ── */
export function FoodSsrInternationalDiagram() {
  const countries = [
    { name: "カナダ", nameEn: "Canada", pct: 233, color: GREEN },
    { name: "オーストラリア", nameEn: "Australia", pct: 169, color: GREEN },
    { name: "フランス", nameEn: "France", pct: 117, color: GREEN },
    { name: "米国", nameEn: "United States", pct: 115, color: GREEN },
    { name: "ドイツ", nameEn: "Germany", pct: 84, color: ECON },
    { name: "イタリア", nameEn: "Italy", pct: 58, color: ECON },
    { name: "英国", nameEn: "United Kingdom", pct: 54, color: ECON },
    { name: "スイス", nameEn: "Switzerland", pct: 49, color: ECON },
    { name: "韓国", nameEn: "South Korea", pct: 44, color: RED },
    { name: "日本", nameEn: "Japan", pct: 38, color: RED },
  ];
  const max = 240;
  return (
    <Card
      title={<T ja="主要国のカロリーベース自給率" en="Calorie-Basis Self-Sufficiency Rate by Country" />}
      subtitle={<T ja="農水省試算（FAO統計より計算）" en="MAFF estimates (calculated from FAO data)" />}
    >
      <div className="space-y-1.5">
        {countries.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70"><T ja={c.name} en={c.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: c.color }}
              >
                {c.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(c.pct / max) * 100}%`,
                  backgroundColor: c.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>生産額ベースで見ると日本は <strong>61%</strong> ― 英・スイスと同水準</>}
          en={<>On a production-value basis, Japan reaches <strong>61%</strong> — on par with the UK and Switzerland</>}
        />
      </div>
    </Card>
  );
}

/* ── 4. History ── */
export function FoodSsrHistoryDiagram() {
  const points = [
    { year: "1965", pct: 73 },
    { year: "1980", pct: 53 },
    { year: "1995", pct: 43 },
    { year: "2010", pct: 39 },
    { year: "2024", pct: 38 },
  ];
  return (
    <Card
      title={<T ja="カロリーベース自給率の推移" en="Trend in Calorie-Basis Food Self-Sufficiency" />}
      subtitle={<T ja="1965 → 2024 年度" en="FY1965 → FY2024" />}
    >
      <div className="space-y-2">
        {points.map((p) => (
          <div key={p.year} className="flex items-center gap-3">
            <div className="text-[11px] tabular-nums text-foreground/60 w-12">
              {p.year}
            </div>
            <div className="flex-1 h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${p.pct}%`, backgroundColor: FOOD }}
              />
            </div>
            <div
              className="text-[12px] tabular-nums font-bold w-10 text-right"
              style={{ color: FOOD }}
            >
              {p.pct}%
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<><strong>主因</strong>：①食生活の洋風化 ②飼料・原料の輸入依存 ③農業従事者の高齢化（70%が65歳以上）</>}
          en={<><strong>Key drivers</strong>: ① Westernization of diet ② Heavy reliance on imported feed and raw materials ③ Aging farm workforce (70% aged 65+)</>}
        />
      </div>
    </Card>
  );
}

/* ── 5. 2030 target ── */
export function FoodSsr2030TargetDiagram() {
  return (
    <Card
      title={<T ja="2030年目標 ― 45%への道" en="2030 Target — Path to 45%" />}
      subtitle={<T ja="改正食料・農業・農村基本法（2024年6月）" en="Amended Basic Act on Food, Agriculture and Rural Areas (June 2024)" />}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="現状" en="Current" /></div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            38%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="2024年度" en="FY2024" /></div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="目標" en="Target" /></div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            45%
          </div>
          <div className="text-[10px] text-foreground/60"><T ja="2030年度" en="FY2030" /></div>
        </div>
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="達成への3本柱" en="3 pillars to reach the target" />
      </div>
      <ul className="space-y-1 text-[11px] text-foreground/70">
        <li><T ja="① 小麦・大豆の国内生産拡大" en="① Expanding domestic production of wheat and soybeans" /></li>
        <li><T ja="② 米粉・飼料用米による輸入代替" en="② Substituting imports with rice flour and feed rice" /></li>
        <li><T ja="③ 水田の畑作転換（水活交付金）" en="③ Converting paddy fields to upland farming (Water-Activation Grants)" /></li>
      </ul>
      <div
        className="mt-4 p-3 rounded-lg text-[11px]"
        style={{ backgroundColor: `${ECON}0d`, color: ECON }}
      >
        <T
          ja={<><strong>ボトルネック</strong>：国産小麦は輸入の<strong>2-3倍</strong>の価格／担い手の70%が65歳以上</>}
          en={<><strong>Bottlenecks</strong>: Domestic wheat costs <strong>2–3×</strong> more than imports / 70% of farmers are aged 65+</>}
        />
      </div>
    </Card>
  );
}
