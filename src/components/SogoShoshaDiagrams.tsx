"use client";

/* ────────────────────────────────────────────────────────────
   Sogo Shosha Business Model — Diagrams
   ──────────────────────────────────────────────────────────── */

const TRADE = "#78716c";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";
const PURPLE = "#8b5cf6";

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
          style={{ color: `${TRADE}cc` }}
        >
          図表
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

/* ── 1. Overview ── */
export function ShoshaOverviewDiagram() {
  const cos = [
    { name: "三菱商事", profit: 9000, color: NAVY },
    { name: "三井物産", profit: 8800, color: TRADE },
    { name: "伊藤忠商事", profit: 8000, color: GREEN },
    { name: "住友商事", profit: 5500, color: ECON },
    { name: "丸紅", profit: 4700, color: PURPLE },
  ];
  const max = 10000;
  return (
    <Card
      title="5大商社の純利益（2025年3月期 概算）"
      subtitle="単位：億円"
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">{c.name}</span>
              <span
                className="tabular-nums font-bold"
                style={{ color: c.color }}
              >
                {c.profit.toLocaleString()}億円
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(c.profit / max) * 100}%`,
                  backgroundColor: c.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        5社合計純利益 <strong>3兆6,000億円超</strong> ／ 時価総額合計 約40兆円
      </div>
    </Card>
  );
}

/* ── 2. Revenue model ── */
export function ShoshaRevenueModelDiagram() {
  return (
    <Card
      title="トレーディングから事業投資へ"
      subtitle="商社モデルの転換"
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">かつて</div>
          <div className="text-[14px] font-bold mt-1" style={{ color: RED }}>
            トレーディング
          </div>
          <div className="text-[10px] text-foreground/65 mt-1">
            売買仲介・口銭ビジネス
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            利益率 0.5〜1%
          </div>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60">現在</div>
          <div className="text-[14px] font-bold mt-1" style={{ color: GREEN }}>
            事業投資
          </div>
          <div className="text-[10px] text-foreground/65 mt-1">
            権益・出資の持分利益
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            純利益の60-70%
          </div>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${TRADE}0d` }}
      >
        商社は <strong>「世界中の事業会社の親会社」</strong> へ進化。
        連結子会社・関連会社からの取り込み利益が業績を支配する。
      </div>
    </Card>
  );
}

/* ── 3. Five comparison ── */
export function ShoshaFiveComparisonDiagram() {
  const cos = [
    {
      name: "三菱商事",
      strength: "LNG・原料炭・自動車・ローソン",
      dna: "総合力No.1・保守的",
      color: NAVY,
    },
    {
      name: "三井物産",
      strength: "鉄鉱石（VALE）・LNG・ヘルスケア",
      dna: "資源比率最大",
      color: TRADE,
    },
    {
      name: "伊藤忠商事",
      strength: "繊維・ファミマ・CITIC",
      dna: "非資源No.1・独立系",
      color: GREEN,
    },
    {
      name: "住友商事",
      strength: "ニッケル・メディア・SCSK",
      dna: "中位・大型減損経験",
      color: ECON,
    },
    {
      name: "丸紅",
      strength: "穀物（Gavilon）・電力・航空機",
      dna: "食料・電力に強い",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title="5社それぞれの「色」"
      subtitle="強みと DNA"
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div
            key={c.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${c.color}0d` }}
          >
            <div className="text-[13px] font-bold" style={{ color: c.color }}>
              {c.name}
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              {c.strength}
            </div>
            <div className="text-[10px] text-foreground/55 mt-0.5">
              {c.dna}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Buffett ── */
export function ShoshaBuffettDiagram() {
  return (
    <Card
      title="バフェットが買った理由"
      subtitle="2020年買い増し → 2025年保有比率 各9-10%"
    >
      <div className="space-y-2 mb-4">
        {[
          { num: "①", title: "低PER・高配当", color: GREEN },
          { num: "②", title: "多角化と地域分散", color: NAVY },
          { num: "③", title: "厚い株主還元", color: ECON },
        ].map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              {i.title}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60">配当性向</div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            30-35%
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60">総還元性向</div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            50-60%
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60">自社株買い5社計</div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            1兆円超
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Segments ── */
export function ShoshaSegmentsDiagram() {
  const segs = [
    { name: "金属資源", pct: 25, type: "資源", color: ECON },
    { name: "エネルギー", pct: 15, type: "資源", color: RED },
    { name: "機械・インフラ", pct: 18, type: "非資源", color: NAVY },
    { name: "食料・農業", pct: 12, type: "非資源", color: GREEN },
    { name: "生活消費財", pct: 14, type: "非資源", color: PURPLE },
    { name: "化学・金融・他", pct: 16, type: "非資源", color: TRADE },
  ];
  return (
    <Card
      title="セグメント別の利益構成（5社平均イメージ）"
      subtitle="資源 約40% / 非資源 約60%"
    >
      <div className="space-y-1.5">
        {segs.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70">
                {s.name}{" "}
                <span className="text-foreground/40">({s.type})</span>
              </span>
              <span
                className="tabular-nums font-bold"
                style={{ color: s.color }}
              >
                {s.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${s.pct * 3}%`, backgroundColor: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        伊藤忠は非資源比率 <strong>約70%</strong> ― 5社で最も「市況非依存」
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function ShoshaFutureDiagram() {
  const items = [
    { num: "①", title: "脱炭素 ― 水素・洋上風力・CCS", color: GREEN },
    { num: "②", title: "地政学 ― 米中対応とグローバルサウス", color: NAVY },
    { num: "③", title: "DX ― スタートアップ投資・AI", color: PURPLE },
  ];
  return (
    <Card
      title="次の10年 ― 3つの転換"
      subtitle="2026年以降の戦略軸"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              {i.title}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        化石燃料の即時撤退は利益毀損につながるため、各社とも <strong>「移行期間」</strong> を強調
      </div>
    </Card>
  );
}
