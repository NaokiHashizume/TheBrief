"use client";

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
          style={{ color: `${FOOD}aa` }}
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

/* ── 1. Formula ── */
export function FoodSsrFormulaDiagram() {
  return (
    <Card
      title="食料自給率の2つの計算方式"
      subtitle="カロリーベース vs 生産額ベース"
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">カロリーベース</div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            38%
          </div>
          <div className="text-[10px] text-foreground/60">2024年度</div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60">生産額ベース</div>
          <div
            className="text-[28px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            61%
          </div>
          <div className="text-[10px] text-foreground/60">2024年度</div>
        </div>
      </div>
      <div
        className="p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${FOOD}0d` }}
      >
        <strong>計算式</strong>：国内生産の供給熱量 ÷ 1人1日当たり総供給熱量
        <br />
        例：870 kcal ÷ 2,300 kcal ≒ 38%
      </div>
      <div className="mt-3 text-[10px] text-foreground/45">
        ※ FAOおよび他の先進国はカロリーベース方式を採用していない
      </div>
    </Card>
  );
}

/* ── 2. By item ── */
export function FoodSsrByItemDiagram() {
  const items = [
    { name: "米", pct: 97, color: GREEN },
    { name: "鶏卵", pct: 97, color: GREEN },
    { name: "野菜", pct: 80, color: GREEN },
    { name: "牛乳・乳製品", pct: 63, color: ECON },
    { name: "魚介類", pct: 54, color: ECON },
    { name: "肉類", pct: 53, color: ECON },
    { name: "果実", pct: 39, color: RED },
    { name: "砂糖類", pct: 33, color: RED },
    { name: "小麦", pct: 17, color: RED },
    { name: "大豆", pct: 6, color: RED },
    { name: "油脂類", pct: 3, color: RED },
    { name: "とうもろこし", pct: 0, color: RED },
  ];
  return (
    <Card
      title="品目別の自給率"
      subtitle="重量ベース（最新概算）"
    >
      <div className="space-y-1.5">
        {items.map((i) => (
          <div key={i.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70">{i.name}</span>
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
        <strong>飼料換算</strong>：豚肉49% → 飼料を加味すると<strong>7%</strong>
      </div>
    </Card>
  );
}

/* ── 3. International ── */
export function FoodSsrInternationalDiagram() {
  const countries = [
    { name: "カナダ", pct: 233, color: GREEN },
    { name: "オーストラリア", pct: 169, color: GREEN },
    { name: "フランス", pct: 117, color: GREEN },
    { name: "米国", pct: 115, color: GREEN },
    { name: "ドイツ", pct: 84, color: ECON },
    { name: "イタリア", pct: 58, color: ECON },
    { name: "英国", pct: 54, color: ECON },
    { name: "スイス", pct: 49, color: ECON },
    { name: "韓国", pct: 44, color: RED },
    { name: "日本", pct: 38, color: RED },
  ];
  const max = 240;
  return (
    <Card
      title="主要国のカロリーベース自給率"
      subtitle="農水省試算（FAO統計より計算）"
    >
      <div className="space-y-1.5">
        {countries.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70">{c.name}</span>
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
        生産額ベースで見ると日本は <strong>61%</strong> ― 英・スイスと同水準
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
      title="カロリーベース自給率の推移"
      subtitle="1965 → 2024 年度"
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
        <strong>主因</strong>：①食生活の洋風化 ②飼料・原料の輸入依存 ③農業従事者の高齢化（70%が65歳以上）
      </div>
    </Card>
  );
}

/* ── 5. 2030 target ── */
export function FoodSsr2030TargetDiagram() {
  return (
    <Card
      title="2030年目標 ― 45%への道"
      subtitle="改正食料・農業・農村基本法（2024年6月）"
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">現状</div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            38%
          </div>
          <div className="text-[10px] text-foreground/60">2024年度</div>
        </div>
        <div
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60">目標</div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            45%
          </div>
          <div className="text-[10px] text-foreground/60">2030年度</div>
        </div>
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        達成への3本柱
      </div>
      <ul className="space-y-1 text-[11px] text-foreground/70">
        <li>① 小麦・大豆の国内生産拡大</li>
        <li>② 米粉・飼料用米による輸入代替</li>
        <li>③ 水田の畑作転換（水活交付金）</li>
      </ul>
      <div
        className="mt-4 p-3 rounded-lg text-[11px]"
        style={{ backgroundColor: `${ECON}0d`, color: ECON }}
      >
        <strong>ボトルネック</strong>：国産小麦は輸入の<strong>2-3倍</strong>の価格／担い手の70%が65歳以上
      </div>
    </Card>
  );
}
