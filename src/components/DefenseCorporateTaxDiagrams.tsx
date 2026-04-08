"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Defense Special Corporate Tax — Diagrams
   ──────────────────────────────────────────────────────────── */

const ECON = "#b9770e";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";

function Card({
  title,
  titleEn,
  subtitle,
  subtitleEn,
  children,
}: {
  title: string;
  titleEn: string;
  subtitle?: string;
  subtitleEn?: string;
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
          <T ja="図表" en="Chart" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          <T ja={title} en={titleEn} />
        </div>
        {subtitle && subtitleEn && (
          <div className="text-[11px] text-foreground/50 mt-1"><T ja={subtitle} en={subtitleEn} /></div>
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
      titleEn: "¥43T over 5 years",
      detail: "防衛力強化計画（2023-2027）",
      detailEn: "Defense buildup plan (2023–2027)",
      color: RED,
    },
    {
      label: "②",
      title: "GDP比2%へ",
      titleEn: "Target: 2% of GDP",
      detail: "2027年度に到達目標",
      detailEn: "Goal to be reached in FY2027",
      color: ECON,
    },
    {
      label: "③",
      title: "恒久財源が必要",
      titleEn: "Permanent funding required",
      detail: "毎年3.7-4兆円の追加財源",
      detailEn: "Additional ¥3.7–4T needed every year",
      color: NAVY,
    },
  ];
  return (
    <Card title="なぜ防衛特別法人税が必要か" titleEn="Why a Defense Special Corporate Tax?">
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
                <T ja={r.title} en={r.titleEn} />
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                <T ja={r.detail} en={r.detailEn} />
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
      titleEn="Defense Special Corporate Tax Formula"
      subtitle="2026年4月1日以後に開始する事業年度から"
      subtitleEn="Applies to fiscal years beginning on or after April 1, 2026"
    >
      <div className="space-y-4">
        <div
          className="p-5 rounded-xl border-2 text-center"
          style={{
            borderColor: ECON,
            backgroundColor: `${ECON}10`,
          }}
        >
          <div className="text-[11px] text-foreground/60 mb-2"><T ja="課税標準" en="Tax base" /></div>
          <div
            className="font-mono text-[14px] font-bold"
            style={{ color: ECON }}
          >
            <T
              ja="（基準法人税額 − 500万円） × 4%"
              en="(Base corporate tax amount − ¥5M) × 4%"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${GREEN}0d` }}
          >
            <div className="text-[11px] font-bold" style={{ color: GREEN }}>
              <T ja="500万円控除の効果" en="Effect of ¥5M deduction" />
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              <T
                ja="課税所得 約2,400万円以下の中小企業は実質非課税"
                en="SMEs with taxable income up to ~¥24M are effectively exempt"
              />
            </div>
          </div>
          <div
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${RED}0d` }}
          >
            <div className="text-[11px] font-bold" style={{ color: RED }}>
              <T ja="対象法人" en="Covered entities" />
            </div>
            <div className="text-[10px] text-foreground/70 mt-1">
              <T
                ja="全法人約280万社のうち、課税対象は約6%（推計）"
                en="Of approx. 2.8 million corporations, ~6% are taxable (estimate)"
              />
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
      taxEn: "Corporate tax",
      detail: "防衛特別法人税 4%付加税",
      detailEn: "Defense Special Corporate Tax: 4% surcharge",
      start: "2026年4月",
      startEn: "April 2026",
      revenue: "約7,000-8,000億円/年",
      revenueEn: "approx. ¥700–800B/year",
      color: ECON,
    },
    {
      tax: "たばこ税",
      taxEn: "Tobacco tax",
      detail: "1本3円増税（段階的）",
      detailEn: "¥3/cigarette increase (phased)",
      start: "2026年4月～",
      startEn: "From April 2026",
      revenue: "約2,000億円/年",
      revenueEn: "approx. ¥200B/year",
      color: NAVY,
    },
    {
      tax: "所得税",
      taxEn: "Income tax",
      detail: "防衛特別所得税 1%付加（復興特別税の一部振替）",
      detailEn: "Defense Special Income Tax: 1% surcharge (partial reallocation from reconstruction tax)",
      start: "2027年1月",
      startEn: "January 2027",
      revenue: "約2,000億円/年",
      revenueEn: "approx. ¥200B/year",
      color: RED,
    },
  ];
  return (
    <Card
      title="防衛増税パッケージ ― 3つの税"
      titleEn="Defense Tax Package — 3 Taxes"
      subtitle="合計で年約1.1兆円規模を見込む"
      subtitleEn="Combined annual revenue projected at approx. ¥1.1T"
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
                <T ja={t.tax} en={t.taxEn} />
              </div>
              <div
                className="text-[10px] tabular-nums"
                style={{ color: t.color }}
              >
                <T ja={t.start} en={t.startEn} />
              </div>
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              <T ja={t.detail} en={t.detailEn} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-1 tabular-nums">
              <T ja={`税収見込：${t.revenue}`} en={`Projected revenue: ${t.revenueEn}`} />
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
    { size: "中小企業", sizeEn: "SME", income: "課税所得 1,000万円", incomeEn: "Taxable income ¥10M", tax: "0円", taxEn: "¥0", note: "500万円控除で非課税", noteEn: "Exempt due to ¥5M deduction", color: GREEN },
    { size: "中堅企業", sizeEn: "Mid-size firm", income: "課税所得 5,000万円", incomeEn: "Taxable income ¥50M", tax: "約26万円", taxEn: "~¥260K", note: "（1,150万 − 500万）× 4%", noteEn: "(¥11.5M − ¥5M) × 4%", color: ECON },
    { size: "大企業", sizeEn: "Large firm", income: "課税所得 5億円", incomeEn: "Taxable income ¥500M", tax: "約440万円", taxEn: "~¥4.4M", note: "（1.16億 − 500万）× 4%", noteEn: "(¥116M − ¥5M) × 4%", color: NAVY },
    { size: "超大企業", sizeEn: "Major corporation", income: "課税所得 1,000億円", incomeEn: "Taxable income ¥100B", tax: "約9.3億円", taxEn: "~¥930M", note: "（232億 − 500万）× 4%", noteEn: "(¥23.2B − ¥5M) × 4%", color: RED },
  ];
  return (
    <Card
      title="企業規模別の追加負担シミュレーション"
      titleEn="Additional Tax Burden Simulation by Firm Size"
      subtitle="法人税率23.2%・課税所得を仮置き"
      subtitleEn="Assumes 23.2% corporate tax rate; taxable income is illustrative"
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
                <T ja={f.size} en={f.sizeEn} />
              </div>
              <div
                className="text-[13px] font-bold tabular-nums"
                style={{ color: f.color }}
              >
                <T ja={f.tax} en={f.taxEn} />
              </div>
            </div>
            <div className="text-[10px] text-foreground/60 mt-0.5">
              <T ja={f.income} en={f.incomeEn} /> ／ <T ja={f.note} en={f.noteEn} />
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
      titleEn="Reconstruction Special Income Tax → Defense Special Income Tax"
      subtitle="個人の所得税付加税のスライド"
      subtitleEn="Transition of the individual income tax surcharge"
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
            <T ja="〜2026年12月" en="through December 2026" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="復興特別所得税 2.1%" en="Reconstruction Special Tax 2.1%" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T
              ja="東日本大震災の復興財源（2013-2037の25年間）"
              en="Funds reconstruction from the 2011 Great East Japan Earthquake (25 years: 2013–2037)"
            />
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
            <T ja="2027年1月〜" en="From January 2027" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="復興 1.1% ＋ 防衛 1.0%" en="Reconstruction 1.1% + Defense 1.0%" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T
              ja="合計2.1%は据え置き。復興期間は延長される"
              en="Total remains 2.1%. Reconstruction period is extended."
            />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="個人の手取りは「変わらない」設計。ただし復興期間延長に対する批判も強い。"
          en={`Designed so take-home pay "does not change." However, extending the reconstruction period draws strong criticism.`}
        />
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
      titleEn: "2% of GDP achieved",
      detail: "5年計画の目標年。43兆円計画完了",
      detailEn: "Target year of the 5-year plan; ¥43T program complete",
      color: ECON,
    },
    {
      year: "2028-",
      title: "次期防衛力整備計画",
      titleEn: "Next defense buildup plan",
      detail: "次の5年計画。さらなる増額の議論",
      detailEn: "Next 5-year plan; debate on further increases",
      color: NAVY,
    },
    {
      year: "2030s",
      title: "GDP比3.5%論",
      titleEn: "3.5% of GDP debate",
      detail: "米国の対日要求。実現には年8兆円超",
      detailEn: "U.S. demand; would require over ¥8T/year",
      color: RED,
    },
  ];
  return (
    <Card
      title="防衛費の長期見通し ― 2%の先にあるもの"
      titleEn="Long-term Defense Spending Outlook — Beyond 2%"
      subtitle="米国は同盟国にGDP比3.5%を要求"
      subtitleEn="The U.S. is demanding allies spend 3.5% of GDP on defense"
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
                <T ja={i.title} en={i.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={i.detail} en={i.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T
          ja="※ 3.5%実現には消費税換算で4%相当の追加財源"
          en="* Achieving 3.5% would require additional funding equivalent to a 4-pt consumption tax hike"
        />
      </div>
    </Card>
  );
}
