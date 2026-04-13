"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Nuclear Restart Roadmap 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const ORANGE = "#f97316";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#d97706";
const PURPLE = "#7c3aed";
const SLATE = "#64748b";
const TEAL = "#0d9488";

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
      aria-label={typeof title === "string" ? title : "図表"}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ORANGE}cc` }}
        >
          <T ja="図表" en="FIGURE" />
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

/* ── 1. 稼働中原発マップ（地域別一覧表） ── */
export function NuclearRestartMapDiagram() {
  const regions = [
    {
      region: "九州",
      regionEn: "Kyushu",
      color: RED,
      plants: [
        { name: "川内1号機", company: "九州電力", output: "89万kW", year: "2015年8月" },
        { name: "川内2号機", company: "九州電力", output: "89万kW", year: "2015年11月" },
        { name: "玄海3号機", company: "九州電力", output: "118万kW", year: "2018年5月" },
        { name: "玄海4号機", company: "九州電力", output: "118万kW", year: "2018年7月" },
      ],
    },
    {
      region: "関西",
      regionEn: "Kansai",
      color: BLUE,
      plants: [
        { name: "高浜1号機", company: "関西電力", output: "82.6万kW", year: "2023年8月" },
        { name: "高浜2号機", company: "関西電力", output: "82.6万kW", year: "2023年10月" },
        { name: "高浜3号機", company: "関西電力", output: "87万kW", year: "2016年2月" },
        { name: "高浜4号機", company: "関西電力", output: "87万kW", year: "2017年6月" },
        { name: "大飯3号機", company: "関西電力", output: "117.5万kW", year: "2018年4月" },
        { name: "大飯4号機", company: "関西電力", output: "117.5万kW", year: "2018年6月" },
        { name: "美浜3号機", company: "関西電力", output: "82.6万kW", year: "2021年7月" },
      ],
    },
    {
      region: "四国",
      regionEn: "Shikoku",
      color: GREEN,
      plants: [
        { name: "伊方3号機", company: "四国電力", output: "89万kW", year: "2016年9月" },
      ],
    },
    {
      region: "中国",
      regionEn: "Chugoku",
      color: TEAL,
      plants: [
        { name: "島根2号機", company: "中国電力", output: "82万kW", year: "2024年12月" },
      ],
    },
    {
      region: "東北",
      regionEn: "Tohoku",
      color: PURPLE,
      plants: [
        { name: "女川2号機", company: "東北電力", output: "82.5万kW", year: "2024年12月" },
      ],
    },
    {
      region: "東京",
      regionEn: "Tokyo",
      color: AMBER,
      plants: [
        { name: "柏崎刈羽6号機", company: "東京電力", output: "135.6万kW", year: "2026年2月" },
      ],
    },
  ];

  const totalOutput = "約1,480万kW";

  return (
    <Card
      title={<T ja="再稼働済み原発 全15基一覧（2026年4月現在）" en="All 15 Restarted Nuclear Plants (As of April 2026)" />}
      subtitle={<T ja="地域別・電力会社別の稼働状況" en="Operating status by region and utility company" />}
    >
      <div className="space-y-4">
        {regions.map((r) => (
          <div key={r.region}>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-sm shrink-0"
                style={{ backgroundColor: r.color, opacity: 0.8 }}
              />
              <span className="text-[13px] font-bold">
                <T ja={`${r.region}（${r.plants.length}基）`} en={`${r.regionEn} (${r.plants.length})`} />
              </span>
            </div>
            <div className="space-y-1 ml-5">
              {r.plants.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between p-2 rounded-lg border border-brief-border/50 text-[12px]"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-semibold text-foreground/80">{p.name}</span>
                    <span className="text-foreground/35">{p.company}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="tabular-nums font-semibold" style={{ color: r.color }}>{p.output}</span>
                    <span className="text-foreground/35 text-[10px]">{p.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50 flex items-center justify-between">
        <span className="text-[12px] font-bold text-foreground/60">
          <T ja="合計出力" en="Total Output" />
        </span>
        <span className="text-[16px] font-bold tabular-nums" style={{ color: ORANGE }}>
          {totalOutput}
        </span>
      </div>
    </Card>
  );
}

/* ── 2. 審査状況一覧表 ── */
export function NuclearReviewStatusDiagram() {
  type Status = "operating" | "approved" | "reviewing" | "denied";
  const statuses: { label: string; labelEn: string; color: string; status: Status; count: number; items: string[] }[] = [
    {
      label: "稼働中",
      labelEn: "Operating",
      color: GREEN,
      status: "operating",
      count: 15,
      items: ["川内1・2", "高浜1〜4", "大飯3・4", "玄海3・4", "伊方3", "美浜3", "女川2", "島根2", "柏崎刈羽6"],
    },
    {
      label: "審査合格・未稼働",
      labelEn: "Approved (not yet operating)",
      color: BLUE,
      status: "approved",
      count: 3,
      items: ["柏崎刈羽7（テロ対策2029年）", "東海第二（地元同意未了）", "泊3（防潮堤2027年）"],
    },
    {
      label: "審査中",
      labelEn: "Under Review",
      color: AMBER,
      status: "reviewing",
      count: 6,
      items: ["浜岡3・4", "大間", "島根3", "東通1", "女川3"],
    },
    {
      label: "不許可・困難",
      labelEn: "Denied / Difficult",
      color: RED,
      status: "denied",
      count: 2,
      items: ["敦賀2（活断層）", "志賀2（能登地震影響）"],
    },
  ];

  const total = statuses.reduce((s, x) => s + x.count, 0);

  return (
    <Card
      title={<T ja="原発の審査・稼働状況（2026年4月）" en="Nuclear Plant Regulatory & Operating Status (April 2026)" />}
      subtitle={<T ja="新規制基準適合性審査のステータス別分類" en="Classification by NRA conformity review status" />}
    >
      {/* Bar visualization */}
      <div className="flex h-4 rounded-full overflow-hidden mb-4">
        {statuses.map((s) => (
          <div
            key={s.label}
            className="h-full"
            style={{
              width: `${(s.count / total) * 100}%`,
              backgroundColor: s.color,
              opacity: 0.75,
            }}
          />
        ))}
      </div>
      <div className="space-y-3">
        {statuses.map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border" style={{ borderLeftColor: s.color, borderLeftWidth: 3 }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] font-bold">
                <T ja={s.label} en={s.labelEn} />
              </span>
              <span className="text-[15px] font-bold tabular-nums" style={{ color: s.color }}>
                {s.count}<span className="text-[11px] text-foreground/40 ml-0.5"><T ja="基" en=" units" /></span>
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/[0.04] text-foreground/55">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. 再稼働タイムライン ── */
export function NuclearTimelineDiagram() {
  const events = [
    { year: "2011", label: "福島事故 → 全基停止", labelEn: "Fukushima → All units shut down", color: RED, count: 0 },
    { year: "2013", label: "新規制基準施行", labelEn: "New regulatory standards enacted", color: SLATE, count: 0 },
    { year: "2015", label: "川内1・2号機", labelEn: "Sendai Units 1 & 2", color: GREEN, count: 2 },
    { year: "2016", label: "高浜3、伊方3", labelEn: "Takahama 3, Ikata 3", color: GREEN, count: 4 },
    { year: "2017", label: "高浜4号機", labelEn: "Takahama Unit 4", color: GREEN, count: 5 },
    { year: "2018", label: "大飯3・4、玄海3・4", labelEn: "Ohi 3&4, Genkai 3&4", color: BLUE, count: 9 },
    { year: "2021", label: "美浜3号機（40年超初）", labelEn: "Mihama 3 (first 40yr+)", color: PURPLE, count: 10 },
    { year: "2023", label: "高浜1・2号機", labelEn: "Takahama Units 1 & 2", color: BLUE, count: 12 },
    { year: "2024", label: "女川2、島根2", labelEn: "Onagawa 2, Shimane 2", color: TEAL, count: 14 },
    { year: "2026", label: "柏崎刈羽6号機", labelEn: "Kashiwazaki-Kariwa 6", color: AMBER, count: 15 },
    { year: "2027?", label: "泊3号機（予定）", labelEn: "Tomari 3 (planned)", color: SLATE, count: 16 },
  ];

  return (
    <Card
      title={<T ja="原発再稼働タイムライン（2011〜2027年）" en="Nuclear Restart Timeline (2011–2027)" />}
      subtitle={<T ja="全基停止から15基再稼働までの道のり" en="From total shutdown to 15 restarts" />}
    >
      <div className="space-y-0">
        {events.map((e, i) => (
          <div key={e.year} className="flex gap-3">
            {/* Timeline line */}
            <div className="flex flex-col items-center shrink-0 w-10">
              <div
                className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                style={{ backgroundColor: e.color, opacity: 0.85 }}
              />
              {i < events.length - 1 && (
                <div className="w-px flex-1 bg-foreground/10" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] tabular-nums font-bold text-foreground/40 w-10">{e.year}</span>
                <span className="text-[13px] font-semibold text-foreground/80">
                  <T ja={e.label} en={e.labelEn} />
                </span>
              </div>
              {e.count > 0 && (
                <div className="ml-12 mt-1">
                  <div className="h-2 rounded bg-foreground/5 overflow-hidden" style={{ width: "100%" }}>
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(e.count / 16) * 100}%`,
                        backgroundColor: e.color,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-foreground/35 tabular-nums">{e.count}<T ja="基" en=" units" /></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. 電力料金への影響 ── */
export function NuclearElectricityPriceDiagram() {
  const cases = [
    {
      name: "女川2号機",
      nameEn: "Onagawa Unit 2",
      company: "東北電力",
      savingGross: 811,
      costIncrease: 439,
      netSaving: 327,
      monthlyReduction: 124,
      color: PURPLE,
    },
    {
      name: "柏崎刈羽6号機",
      nameEn: "Kashiwazaki-Kariwa 6",
      company: "東京電力",
      savingGross: 2500,
      costIncrease: 1600,
      netSaving: 900,
      monthlyReduction: 122,
      color: AMBER,
    },
    {
      name: "島根2号機",
      nameEn: "Shimane Unit 2",
      company: "中国電力",
      savingGross: 400,
      costIncrease: 290,
      netSaving: 110,
      monthlyReduction: 100,
      color: TEAL,
    },
  ];

  return (
    <Card
      title={<T ja="原発再稼働の電力料金値下げ効果" en="Electricity Rate Reduction from Nuclear Restarts" />}
      subtitle={<T ja="コスト削減とコスト増加の差し引き。標準世帯の月額値下げ効果は約100〜124円" en="Net savings after subtracting restart costs. Monthly household savings: ~100–124 yen" />}
    >
      <div className="space-y-4">
        {cases.map((c) => (
          <div key={c.name} className="p-4 rounded-xl border border-brief-border">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[13px] font-bold">{c.name}</span>
                <span className="text-[10px] text-foreground/40 ml-2">{c.company}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-foreground/40"><T ja="月額値下げ" en="Monthly saving" /></span>
                <div className="text-[18px] font-bold tabular-nums" style={{ color: c.color }}>
                  -{c.monthlyReduction}<span className="text-[11px] text-foreground/40"><T ja="円" en=" yen" /></span>
                </div>
              </div>
            </div>
            {/* Stacked bar */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/40 w-20 shrink-0"><T ja="コスト削減" en="Cost saving" /></span>
                <div className="flex-1 h-3 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${(c.savingGross / 2500) * 100}%`,
                      backgroundColor: GREEN,
                      opacity: 0.6,
                    }}
                  />
                </div>
                <span className="text-[11px] tabular-nums font-semibold text-foreground/60 w-16 text-right">{c.savingGross}<T ja="億" en="B" /></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/40 w-20 shrink-0"><T ja="コスト増加" en="Cost increase" /></span>
                <div className="flex-1 h-3 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${(c.costIncrease / 2500) * 100}%`,
                      backgroundColor: RED,
                      opacity: 0.6,
                    }}
                  />
                </div>
                <span className="text-[11px] tabular-nums font-semibold text-foreground/60 w-16 text-right">{c.costIncrease}<T ja="億" en="B" /></span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-brief-border/30">
                <span className="text-[10px] font-bold text-foreground/50 w-20 shrink-0"><T ja="差し引き" en="Net" /></span>
                <div className="flex-1 h-3 rounded bg-foreground/5 overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${(c.netSaving / 2500) * 100}%`,
                      backgroundColor: c.color,
                      opacity: 0.7,
                    }}
                  />
                </div>
                <span className="text-[11px] tabular-nums font-bold w-16 text-right" style={{ color: c.color }}>{c.netSaving}<T ja="億" en="B" /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50">
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          <T
            ja="※ 安全対策投資の累計は全国で6.8兆円超。2026年度の再エネ賦課金（4.18円/kWh）が値下げ分を部分的に相殺している"
            en="* Total safety investment nationwide exceeds 6.8 trillion yen. The 2026 renewable surcharge (4.18 yen/kWh) partially offsets rate reductions"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 5. エネルギーミックス変化 ── */
export function NuclearEnergyMixDiagram() {
  const data = [
    {
      year: "2010年度",
      yearEn: "FY2010",
      label: "事故前",
      labelEn: "Pre-accident",
      nuclear: 28.6,
      renewables: 9.5,
      fossil: 61.9,
    },
    {
      year: "2014年度",
      yearEn: "FY2014",
      label: "全基停止",
      labelEn: "All stopped",
      nuclear: 0,
      renewables: 12.2,
      fossil: 87.8,
    },
    {
      year: "2023年度",
      yearEn: "FY2023",
      label: "現状",
      labelEn: "Current",
      nuclear: 8.5,
      renewables: 22.9,
      fossil: 68.6,
    },
    {
      year: "2026年度",
      yearEn: "FY2026",
      label: "見込み",
      labelEn: "Projected",
      nuclear: 11,
      renewables: 26,
      fossil: 63,
    },
    {
      year: "2030年度",
      yearEn: "FY2030",
      label: "目標",
      labelEn: "Target",
      nuclear: 21,
      renewables: 37,
      fossil: 41,
    },
    {
      year: "2040年度",
      yearEn: "FY2040",
      label: "目標",
      labelEn: "Target",
      nuclear: 20,
      renewables: 45,
      fossil: 35,
    },
  ];

  return (
    <Card
      title={<T ja="電源構成の変遷と目標 — 原子力・再エネ・火力の比率" en="Power Mix Transition & Targets — Nuclear, Renewables, Fossil" />}
      subtitle={<T ja="2010年度（事故前）から2040年度目標まで" en="From FY2010 (pre-accident) to FY2040 target" />}
    >
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.year}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] tabular-nums font-bold text-foreground/50 w-16">
                  <T ja={d.year} en={d.yearEn} />
                </span>
                <span className="text-[10px] text-foreground/35">
                  <T ja={d.label} en={d.labelEn} />
                </span>
              </div>
            </div>
            <div className="flex h-5 rounded-lg overflow-hidden">
              {d.nuclear > 0 && (
                <div
                  className="h-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ width: `${d.nuclear}%`, backgroundColor: AMBER, minWidth: d.nuclear > 5 ? "auto" : 0 }}
                >
                  {d.nuclear > 5 && `${d.nuclear}%`}
                </div>
              )}
              <div
                className="h-full flex items-center justify-center text-[9px] font-bold text-white"
                style={{ width: `${d.renewables}%`, backgroundColor: GREEN }}
              >
                {d.renewables > 8 && `${d.renewables}%`}
              </div>
              <div
                className="h-full flex items-center justify-center text-[9px] font-bold text-white"
                style={{ width: `${d.fossil}%`, backgroundColor: SLATE }}
              >
                {d.fossil > 15 && `${d.fossil}%`}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-brief-border/40">
        {[
          { label: "原子力", labelEn: "Nuclear", color: AMBER },
          { label: "再エネ", labelEn: "Renewables", color: GREEN },
          { label: "火力", labelEn: "Fossil", color: SLATE },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: l.color, opacity: 0.75 }} />
            <span className="text-[10px] text-foreground/50">
              <T ja={l.label} en={l.labelEn} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50">
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          <T
            ja="※ 2030年度目標（原子力20〜22%）の達成には25〜27基の安定稼働が必要。2026年4月時点の稼働15基からの倍増が求められる"
            en="* Reaching the FY2030 target (nuclear 20–22%) requires 25–27 units in stable operation — nearly double the current 15"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 6. 使用済み核燃料の状況 ── */
export function NuclearSpentFuelDiagram() {
  const pools = [
    { name: "大飯", nameEn: "Ohi", usage: 90, color: RED },
    { name: "高浜", nameEn: "Takahama", usage: 88, color: RED },
    { name: "美浜", nameEn: "Mihama", usage: 73, color: AMBER },
    { name: "玄海", nameEn: "Genkai", usage: 70, color: AMBER },
    { name: "伊方", nameEn: "Ikata", usage: 65, color: AMBER },
    { name: "川内", nameEn: "Sendai", usage: 60, color: GREEN },
    { name: "島根", nameEn: "Shimane", usage: 55, color: GREEN },
    { name: "柏崎刈羽", nameEn: "K-K", usage: 50, color: GREEN },
  ];

  return (
    <Card
      title={<T ja="使用済み核燃料プールの逼迫度" en="Spent Fuel Pool Capacity Utilization" />}
      subtitle={<T ja="主要原発の貯蔵プール使用率。再稼働を続ければ数年以内に満杯となる発電所も" en="Pool utilization at major plants. Some will reach capacity within years if restarts continue" />}
    >
      <div className="space-y-2.5">
        {pools.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] font-semibold text-foreground/70">
                <T ja={p.name} en={p.nameEn} />
              </span>
              <span className="text-[13px] font-bold tabular-nums" style={{ color: p.color }}>
                {p.usage}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded"
                style={{ width: `${p.usage}%`, backgroundColor: p.color, opacity: 0.65 }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Key stats */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { stat: "約1.9万t", statEn: "~19,000t", label: "使用済み核燃料総量", labelEn: "Total spent fuel", color: RED },
          { stat: "約2.7万本", statEn: "~27,000 units", label: "ガラス固化体相当", labelEn: "Vitrified waste equivalent", color: AMBER },
          { stat: "33年", statEn: "33 years", label: "六ケ所再処理工場 建設期間", labelEn: "Rokkasho construction time", color: SLATE },
        ].map((item) => (
          <div key={item.label} className="p-3 rounded-xl border border-brief-border text-center" style={{ borderTopColor: item.color, borderTopWidth: 2 }}>
            <div className="text-[18px] font-bold tabular-nums" style={{ color: item.color }}>{item.stat}</div>
            <div className="text-[10px] text-foreground/40 mt-1">
              <T ja={item.label} en={item.labelEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50">
        <p className="text-[11px] text-foreground/45 leading-relaxed">
          <T
            ja="※ 最終処分場の選定は北海道2町村と佐賀県玄海町で文献調査が進行中。処分開始は2030年代後半以降の見通し"
            en="* Final disposal site selection: literature surveys underway in 2 Hokkaido towns and Genkai, Saga. Disposal unlikely before late 2030s"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 7. 2030年シナリオ比較 ── */
export function NuclearScenarioDiagram() {
  const scenarios = [
    {
      name: "楽観",
      nameEn: "Optimistic",
      units: "18〜20基",
      ratio: "18〜20%",
      bar: 90,
      color: GREEN,
      desc: "審査合格済み全基＋審査中の一部が速やかに稼働",
      descEn: "All approved units + some under review restart promptly",
    },
    {
      name: "中位",
      nameEn: "Middle",
      units: "17〜18基",
      ratio: "約12%",
      bar: 60,
      color: AMBER,
      desc: "現実的なペースで再稼働が進む。最も蓋然性が高い",
      descEn: "Restarts proceed at a realistic pace. Most probable scenario",
    },
    {
      name: "悲観",
      nameEn: "Pessimistic",
      units: "15〜16基",
      ratio: "10%以下",
      bar: 40,
      color: RED,
      desc: "トラブル・地元反対等で新規の再稼働が停滞",
      descEn: "New restarts stall due to incidents and local opposition",
    },
  ];

  return (
    <Card
      title={<T ja="2030年度の原子力比率 — 3つのシナリオ" en="FY2030 Nuclear Share — Three Scenarios" />}
      subtitle={<T ja="政府目標20〜22%に対し、中位シナリオでは約12%にとどまる見通し" en="Gov target 20–22%, but middle scenario projects only ~12%" />}
    >
      <div className="space-y-4">
        {scenarios.map((s) => (
          <div key={s.name} className="p-4 rounded-xl border border-brief-border" style={{ borderLeftColor: s.color, borderLeftWidth: 3 }}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[14px] font-bold" style={{ color: s.color }}>
                  <T ja={`${s.name}シナリオ`} en={`${s.nameEn} Scenario`} />
                </span>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-foreground/40"><T ja="稼働基数" en="Units" /></div>
                <span className="text-[15px] font-bold tabular-nums" style={{ color: s.color }}>{s.units}</span>
              </div>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden mb-2">
              <div
                className="h-full rounded"
                style={{ width: `${s.bar}%`, backgroundColor: s.color, opacity: 0.6 }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-foreground/50 leading-relaxed">
                <T ja={s.desc} en={s.descEn} />
              </p>
              <span className="text-[12px] font-bold tabular-nums shrink-0 ml-3" style={{ color: s.color }}>
                <T ja={`原子力比率 ${s.ratio}`} en={`Nuclear: ${s.ratio}`} />
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Government target reference */}
      <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border flex items-center justify-between">
        <span className="text-[11px] text-foreground/50">
          <T ja="政府目標（2030年度）" en="Gov target (FY2030)" />
        </span>
        <span className="text-[14px] font-bold" style={{ color: ORANGE }}>20〜22%</span>
      </div>
    </Card>
  );
}
