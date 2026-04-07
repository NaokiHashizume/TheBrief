"use client";

/* ────────────────────────────────────────────────────────────
   Defense Special Corporate Tax — Diagrams
   ──────────────────────────────────────────────────────────── */

const ECON = "#b9770e";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";

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
export function DctOverviewDiagram() {
  const items = [
    {
      label: "①",
      title: "5年で43兆円",
      detail: "防衛力強化計画（2023-2027）",
      color: RED,
    },
    {
      label: "②",
      title: "GDP比2%へ",
      detail: "2027年度に到達目標",
      color: ECON,
    },
    {
      label: "③",
      title: "恒久財源が必要",
      detail: "毎年3.7-4兆円の追加財源",
      color: NAVY,
    },
  ];
  return (
    <Card title="なぜ防衛特別法人税が必要か">
      <div className="space-y-3">
        {items.map((r) => (
          <div
            key={r.label}
            className="flex items-start gap-3 p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${r.color}0d` }}
          >
            <div
              className="text-[20px] font-bold tabular-nums shrink-0"
              style={{ color: r.color }}
            >
              {r.label}
            </div>
            <div>
              <div
                className="text-[13px] font-bold"
                style={{ color: r.color }}
              >
                {r.title}
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                {r.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Mechanism ── */
export function DctMechanismDiagram() {
  return (
    <Card
      title="防衛特別法人税の計算式"
      subtitle="2026年4月1日以後に開始する事業年度から"
    >
      <div className="space-y-4">
        <div
          className="p-5 rounded-xl border-2 text-center"
          style={{
            borderColor: ECON,
            backgroundColor: `${ECON}10`,
          }}
        >
          <div className="text-[11px] text-foreground/60 mb-2">課税標準</div>
          <div
            className="font-mono text-[14px] font-bold"
            style={{ color: ECON }}
          >
            （基準法人税額 − 500万円） × 4%
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${GREEN}0d` }}
          >
            <div className="text-[11px] font-bold" style={{ color: GREEN }}>
              500万円控除の効果
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              課税所得 約2,400万円以下の中小企業は実質非課税
            </div>
          </div>
          <div
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${RED}0d` }}
          >
            <div className="text-[11px] font-bold" style={{ color: RED }}>
              対象法人
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              全法人約280万社のうち、課税対象は約6%（推計）
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 3. Three taxes ── */
export function DctThreeTaxesDiagram() {
  const taxes = [
    {
      tax: "法人税",
      detail: "防衛特別法人税 4%付加税",
      start: "2026年4月",
      revenue: "約7,000-8,000億円/年",
      color: ECON,
    },
    {
      tax: "たばこ税",
      detail: "1本3円増税（段階的）",
      start: "2026年4月～",
      revenue: "約2,000億円/年",
      color: NAVY,
    },
    {
      tax: "所得税",
      detail: "防衛特別所得税 1%付加（復興特別税の一部振替）",
      start: "2027年1月",
      revenue: "約2,000億円/年",
      color: RED,
    },
  ];
  return (
    <Card
      title="防衛増税パッケージ ― 3つの税"
      subtitle="合計で年約1.1兆円規模を見込む"
    >
      <div className="space-y-3">
        {taxes.map((t) => (
          <div
            key={t.tax}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${t.color}0d` }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[13px] font-bold" style={{ color: t.color }}>
                {t.tax}
              </div>
              <div
                className="text-[10px] tabular-nums"
                style={{ color: t.color }}
              >
                {t.start}
              </div>
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              {t.detail}
            </div>
            <div className="text-[10px] text-foreground/50 mt-1 tabular-nums">
              税収見込：{t.revenue}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. By firm size ── */
export function DctByFirmSizeDiagram() {
  const firms = [
    { size: "中小企業", income: "課税所得 1,000万円", tax: "0円", note: "500万円控除で非課税", color: GREEN },
    { size: "中堅企業", income: "課税所得 5,000万円", tax: "約26万円", note: "（1,150万 − 500万）× 4%", color: ECON },
    { size: "大企業", income: "課税所得 5億円", tax: "約440万円", note: "（1.16億 − 500万）× 4%", color: NAVY },
    { size: "超大企業", income: "課税所得 1,000億円", tax: "約9.3億円", note: "（232億 − 500万）× 4%", color: RED },
  ];
  return (
    <Card
      title="企業規模別の追加負担シミュレーション"
      subtitle="法人税率23.2%・課税所得を仮置き"
    >
      <div className="space-y-2">
        {firms.map((f) => (
          <div
            key={f.size}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${f.color}0a` }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[12px] font-bold" style={{ color: f.color }}>
                {f.size}
              </div>
              <div
                className="text-[13px] font-bold tabular-nums"
                style={{ color: f.color }}
              >
                {f.tax}
              </div>
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5">
              {f.income} ／ {f.note}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Individual: Reconstruction → Defense ── */
export function DctIndividualDiagram() {
  return (
    <Card
      title="復興特別所得税 → 防衛特別所得税"
      subtitle="個人の所得税付加税のスライド"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: NAVY }}
          >
            〜2026年12月
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            復興特別所得税 2.1%
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            東日本大震災の復興財源（2013-2037の25年間）
          </div>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: ECON,
            backgroundColor: `${ECON}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: ECON }}
          >
            2027年1月〜
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            復興 1.1% ＋ 防衛 1.0%
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            合計2.1%は据え置き。復興期間は延長される
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        個人の手取りは「変わらない」設計。ただし復興期間延長に対する批判も強い。
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function DctFutureDiagram() {
  const items = [
    {
      year: "2027",
      title: "GDP比2%到達",
      detail: "5年計画の目標年。43兆円計画完了",
      color: ECON,
    },
    {
      year: "2028-",
      title: "次期防衛力整備計画",
      detail: "次の5年計画。さらなる増額の議論",
      color: NAVY,
    },
    {
      year: "2030s",
      title: "GDP比3.5%論",
      detail: "米国の対日要求。実現には年8兆円超",
      color: RED,
    },
  ];
  return (
    <Card
      title="防衛費の長期見通し ― 2%の先にあるもの"
      subtitle="米国は同盟国にGDP比3.5%を要求"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.year}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[11px] font-bold tabular-nums w-16 shrink-0"
              style={{ color: i.color }}
            >
              {i.year}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-bold text-foreground">
                {i.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {i.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※ 3.5%実現には消費税換算で4%相当の追加財源
      </div>
    </Card>
  );
}
