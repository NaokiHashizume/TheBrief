"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Japan Renewable Energy 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const GREEN = "#16a34a";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const RED = "#dc2626";
const SLATE = "#64748b";

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
          style={{ color: `${GREEN}aa` }}
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

/* ── 1. 再エネ電源ミックス ── */
export function RenewEnergyMixDiagram() {
  const data = [
    { label: "LNG（ガス）", labelEn: "LNG (Gas)", value: 31, color: "#94a3b8" },
    { label: "石炭", labelEn: "Coal", value: 27, color: "#78716c" },
    { label: "太陽光", labelEn: "Solar PV", value: 11, color: "#eab308" },
    { label: "原子力", labelEn: "Nuclear", value: 10, color: "#6366f1" },
    { label: "水力", labelEn: "Hydro", value: 8, color: "#0ea5e9" },
    { label: "バイオマス", labelEn: "Biomass", value: 5, color: GREEN },
    { label: "石油等", labelEn: "Oil etc.", value: 5, color: "#f97316" },
    { label: "風力", labelEn: "Wind", value: 1, color: "#22d3ee" },
    { label: "地熱", labelEn: "Geothermal", value: 0.3, color: "#a16207" },
    { label: "その他", labelEn: "Other", value: 1.7, color: "#e2e8f0" },
  ];

  return (
    <Card
      title={<T ja="日本の電源ミックス（2024-25年度実績）" en="Japan Power Mix (FY2024-25 actual)" />}
      subtitle={<T ja="再エネ全体で約26%。太陽光が牽引するも風力は1%止まり" en="Renewables ~26% total; solar leads but wind stagnates at 1%" />}
    >
      <div className="space-y-2.5">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/60 w-20 shrink-0">
              <T ja={item.label} en={item.labelEn} />
            </div>
            <div className="flex-1 h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${(item.value / 31) * 100}%`,
                  backgroundColor: item.color,
                  minWidth: item.value > 0 ? "2rem" : "0",
                }}
              >
                <span className="text-[10px] font-bold text-white/90">
                  {item.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${GREEN}10` }}>
        <T
          ja="2040年目標：再エネ40〜50%、原子力20%、火力30〜40%（第7次エネルギー基本計画）"
          en="2040 target: renewables 40–50%, nuclear 20%, thermal 30–40% (7th Basic Energy Plan)"
        />
      </div>
    </Card>
  );
}

/* ── 2. 太陽光の現状と出力制御問題 ── */
export function RenewSolarStatusDiagram() {
  const issues = [
    {
      icon: "⚡",
      title: "出力制御の急増",
      titleEn: "Soaring curtailment",
      detail: "2023年度の出力制御量は17.6億kWh（前年度比3倍超）。九州では発電量の6.7%がカット",
      detailEn: "Curtailment hit 17.6 bn kWh in FY2023 (3× YoY). In Kyushu, 6.7% of solar output was cut",
      severity: "high",
    },
    {
      icon: "🔌",
      title: "系統接続の壁",
      titleEn: "Grid connection bottleneck",
      detail: "申請容量170.8GWに対し、実際に系統接続された蓄電池はわずか0.62GW",
      detailEn: "170.8 GW in applications vs only 0.62 GW of batteries actually connected to the grid",
      severity: "high",
    },
    {
      icon: "💴",
      title: "賦課金の増大",
      titleEn: "Rising surcharge burden",
      detail: "2026年度の再エネ賦課金は4.18円/kWh。家庭の電気代を押し上げる要因に",
      detailEn: "FY2026 RE surcharge: ¥4.18/kWh — a growing burden on household electricity bills",
      severity: "mid",
    },
    {
      icon: "🏔️",
      title: "適地不足・環境問題",
      titleEn: "Land scarcity & environmental concerns",
      detail: "アクセス良好な適地はほぼ枯渇。山間部への展開で造成コスト・環境影響が増大",
      detailEn: "Prime accessible sites nearly exhausted; mountain expansion raises cost and ecological concerns",
      severity: "mid",
    },
  ];

  return (
    <Card
      title={<T ja="太陽光発電の「過剰投資」問題" en="Solar PV's Over-investment Problem" />}
      subtitle={<T ja="急速な拡大がもたらした構造的ひずみ" en="Structural distortions from rapid expansion" />}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {issues.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl border border-brief-border"
            style={{
              backgroundColor: item.severity === "high" ? `${RED}08` : `${AMBER}08`,
              borderLeftColor: item.severity === "high" ? RED : AMBER,
              borderLeftWidth: "3px",
            }}
          >
            <div className="text-xl mb-2">{item.icon}</div>
            <div className="text-[13px] font-bold text-foreground mb-1">
              <T ja={item.title} en={item.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={item.detail} en={item.detailEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="評価：累積導入量は目標を超過達成したが、系統安定化・適地確保・コスト回収の三つ巴の問題が顕在化"
          en="Assessment: cumulative capacity exceeds targets, but grid stability, site availability, and cost recovery issues are now all surfacing simultaneously"
        />
      </div>
    </Card>
  );
}

/* ── 3. 洋上風力の現状と課題 ── */
export function RenewOffshoreWindDiagram() {
  const timeline = [
    { year: "2024", label: "稼働容量", value: "0.3 GW", note: "ほぼ実証段階のみ", noteEn: "Mostly demonstration scale", color: SLATE },
    { year: "2030", label: "政府目標", value: "10 GW", note: "達成可否に赤信号", noteEn: "Target achievement at risk", color: AMBER },
    { year: "2040", label: "政府目標", value: "30〜45 GW", note: "EEZ拡大法施行（2026/4）が前提", noteEn: "Requires EEZ expansion law (April 2026)", color: GREEN },
  ];

  const barriers = [
    { label: "漁業権調整", labelEn: "Fishery rights", desc: "沿岸・沖合の漁業者との合意形成プロセスが未整備。広域操業漁業との調整が特に困難", descEn: "No established consultation process with coastal and offshore fishers; especially hard with wide-area fishing operations" },
    { label: "コスト急騰", labelEn: "Cost surge", desc: "風車調達費が公募時の想定から2倍以上に増加。円安・供給不足が直撃", descEn: "Turbine procurement costs more than doubled from bid estimates; hit hard by yen weakness and supply shortages" },
    { label: "水深の問題", labelEn: "Water depth", desc: "着床式に適した浅海域が限られ、浮体式への移行が不可避だが技術・コスト課題が残る", descEn: "Shallow waters suitable for fixed-bottom are scarce; floating technology is needed but faces technical and cost hurdles" },
    { label: "送電網整備", labelEn: "Grid buildout", desc: "洋上から陸上への海底ケーブル・変電所の整備が追いつかず、接続コストが事業採算を圧迫", descEn: "Undersea cables and onshore substations lag behind projects; connection costs squeeze project economics" },
  ];

  return (
    <Card
      title={<T ja="洋上風力：規制リスクと「2030年10GW」目標の現実" en="Offshore Wind: Regulatory Risk & the '10 GW by 2030' Reality" />}
      subtitle={<T ja="世界最大級の潜在力を持ちながら、日本固有の壁が立ちはだかる" en="Enormous potential, yet uniquely Japanese barriers stand in the way" />}
    >
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {timeline.map((t) => (
          <div
            key={t.year}
            className="flex-1 min-w-[100px] p-3 rounded-xl text-center border border-brief-border"
            style={{ borderTopColor: t.color, borderTopWidth: "3px" }}
          >
            <div className="text-[10px] text-foreground/50 font-medium">{t.year}</div>
            <div className="text-[18px] font-bold text-foreground mt-0.5" style={{ color: t.color }}>{t.value}</div>
            <div className="text-[10px] text-foreground/60 mt-1">
              <T ja={t.note} en={t.noteEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {barriers.map((b) => (
          <div key={b.label} className="flex gap-3 p-3 rounded-lg border border-brief-border bg-foreground/[0.01]">
            <div
              className="text-[10px] font-bold px-2 py-1 rounded-md shrink-0 h-fit"
              style={{ backgroundColor: `${RED}15`, color: RED }}
            >
              <T ja={b.label} en={b.labelEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={b.desc} en={b.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. 水素戦略の進捗 ── */
export function RenewHydrogenDiagram() {
  const phases = [
    {
      label: "現在（2025）",
      labelEn: "Now (2025)",
      price: "280〜371円/Nm³",
      priceEn: "¥280–371/Nm³",
      note: "トライアル取引の落札価格",
      noteEn: "Trial auction clearing price",
      color: RED,
    },
    {
      label: "2030年目標",
      labelEn: "2030 Target",
      price: "30円/Nm³",
      priceEn: "¥30/Nm³",
      note: "政府コスト目標",
      noteEn: "Government cost target",
      color: AMBER,
    },
    {
      label: "2050年目標",
      labelEn: "2050 Target",
      price: "20円以下/Nm³",
      priceEn: "Below ¥20/Nm³",
      note: "競争力確立の水準",
      noteEn: "Competitive parity level",
      color: GREEN,
    },
  ];

  const pillars = [
    { title: "GI基金（NEDO）", titleEn: "GI Fund (NEDO)", desc: "大規模水素製造・利用の技術開発を支援。水素・アンモニア分野に約510億ドルのGX投資", descEn: "Supports large-scale H₂ production & use R&D; ~$51 bn GX investment for hydrogen/ammonia" },
    { title: "輸入サプライチェーン", titleEn: "Import supply chain", desc: "豪州・中東・米国から低炭素水素を輸入。JERAがLAでの低炭素アンモニア供給で認定取得", descEn: "Importing low-carbon H₂ from Australia, Middle East, US. JERA certified for LA low-carbon ammonia" },
    { title: "火力混焼", titleEn: "Thermal co-firing", desc: "アンモニア混焼・専焼の実用化が本格始動。脱炭素の「繋ぎ」として位置づけ", descEn: "Ammonia co-firing and dedicated burning going commercial — positioned as a decarbonization bridge" },
    { title: "水素社会推進法", titleEn: "H₂ Promotion Law", desc: "2024年5月施行。低炭素水素の供給と利用促進に向けた規制・支援を一体化", descEn: "Enacted May 2024; integrates regulation and incentives for low-carbon H₂ supply and use" },
  ];

  return (
    <Card
      title={<T ja="水素戦略：壮大な目標とコストの現実" en="Hydrogen Strategy: Grand Ambitions vs. Cost Reality" />}
      subtitle={<T ja="現在価格と2030年目標の間には10倍以上のギャップが存在する" en="A 10x+ cost gap remains between today's prices and the 2030 target" />}
    >
      <div className="flex gap-3 mb-5 overflow-x-auto pb-1">
        {phases.map((p) => (
          <div
            key={p.label}
            className="flex-1 min-w-[110px] p-4 rounded-xl border border-brief-border text-center"
            style={{ backgroundColor: `${p.color}10` }}
          >
            <div className="text-[10px] text-foreground/50 font-medium mb-1">
              <T ja={p.label} en={p.labelEn} />
            </div>
            <div className="text-[15px] font-bold" style={{ color: p.color }}>
              <T ja={p.price} en={p.priceEn} />
            </div>
            <div className="text-[10px] text-foreground/55 mt-1">
              <T ja={p.note} en={p.noteEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {pillars.map((p) => (
          <div key={p.title} className="p-3 rounded-lg border border-brief-border bg-foreground/[0.01]">
            <div className="text-[12px] font-bold text-foreground mb-1" style={{ color: GREEN }}>
              <T ja={p.title} en={p.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={p.desc} en={p.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. コスト比較（LCOE） ── */
export function RenewCostComparisonDiagram() {
  const costData = [
    {
      category: "太陽光（日本）",
      categoryEn: "Solar PV (Japan)",
      value: 120,
      unit: "$/MWh",
      color: "#eab308",
      note: "世界平均の約3倍",
      noteEn: "~3× global average",
    },
    {
      category: "陸上風力（日本）",
      categoryEn: "Onshore Wind (Japan)",
      value: 117,
      unit: "$/MWh",
      color: "#22d3ee",
      note: "山間部の輸送コストが重荷",
      noteEn: "Mountain transport cost is a heavy burden",
    },
    {
      category: "太陽光（米・印・豪）",
      categoryEn: "Solar (US/India/Australia)",
      value: 40,
      unit: "$/MWh",
      color: "#4ade80",
      note: "競争力十分",
      noteEn: "Fully competitive",
    },
    {
      category: "陸上風力（米・欧）",
      categoryEn: "Onshore Wind (US/Europe)",
      value: 50,
      unit: "$/MWh",
      color: "#60a5fa",
      note: "化石燃料と互角",
      noteEn: "On par with fossil fuels",
    },
    {
      category: "水素（現在・日本）",
      categoryEn: "Hydrogen (Japan now)",
      value: 95,
      unit: "¥/Nm³",
      color: RED,
      note: "目標(30円)の3倍以上",
      noteEn: "3× above the ¥30 target",
    },
    {
      category: "洋上風力（日本）",
      categoryEn: "Offshore Wind (Japan)",
      value: 180,
      unit: "$/MWh",
      color: "#f97316",
      note: "コスト膨張で採算懸念",
      noteEn: "Cost inflation threatening viability",
    },
  ];

  const maxVal = Math.max(...costData.map((d) => d.value));

  return (
    <Card
      title={<T ja="日本の再エネLCOEと国際比較" en="Japan Renewable LCOE vs. International Comparison" />}
      subtitle={<T ja="日本の再エネコストは世界標準の2〜3倍。地形・制度・サプライチェーンが複合的に寄与" en="Japan's RE costs are 2–3× the global norm due to compounding geographic, regulatory, and supply-chain factors" />}
    >
      <div className="space-y-3">
        {costData.map((d) => (
          <div key={d.category}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="text-[11px] text-foreground/70">
                <T ja={d.category} en={d.categoryEn} />
              </div>
              <div className="text-[10px] text-foreground/50">
                <T ja={d.note} en={d.noteEn} />
              </div>
            </div>
            <div className="h-5 bg-foreground/5 rounded-full overflow-hidden flex items-center">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2 transition-all"
                style={{
                  width: `${(d.value / maxVal) * 100}%`,
                  backgroundColor: d.color,
                }}
              >
                <span className="text-[10px] font-bold text-white/90 whitespace-nowrap">
                  {d.value} {d.unit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${BLUE}10` }}>
        <T
          ja="出典：京都大学再生可能エネルギー経済学講座、IRENA 2024、METI発電コスト検証WG（2024年12月）を基に作成"
          en="Sources: Kyoto Univ. Renewable Energy Economics, IRENA 2024, METI Power Cost Verification WG (Dec 2024)"
        />
      </div>
    </Card>
  );
}

/* ── 6. 選択と集中ロードマップ ── */
export function RenewRoadmapDiagram() {
  const techs = [
    {
      name: "太陽光",
      nameEn: "Solar PV",
      icon: "☀️",
      status: "過剰投資ぎみ",
      statusEn: "Over-invested",
      statusColor: AMBER,
      action: "新規抑制・系統整備に集中投資",
      actionEn: "Curb new capacity; shift investment to grid upgrades",
      priority: "見直し",
      priorityEn: "Reassess",
      priorityColor: AMBER,
    },
    {
      name: "洋上風力",
      nameEn: "Offshore Wind",
      icon: "🌊",
      status: "規制・調整リスク大",
      statusEn: "High regulatory/coordination risk",
      statusColor: RED,
      action: "漁業・地域合意の法制化と浮体式技術開発への重点投資",
      actionEn: "Codify fishery/community consent process; focus on floating tech R&D",
      priority: "要制度整備",
      priorityEn: "Needs reform",
      priorityColor: RED,
    },
    {
      name: "水力",
      nameEn: "Hydro",
      icon: "💧",
      status: "安定・成熟",
      statusEn: "Stable & mature",
      statusColor: BLUE,
      action: "既設の改修・増強と揚水発電の系統安定活用",
      actionEn: "Renovate existing dams; leverage pumped storage for grid stability",
      priority: "着実に活用",
      priorityEn: "Steady utilization",
      priorityColor: BLUE,
    },
    {
      name: "水素・アンモニア",
      nameEn: "Hydrogen/Ammonia",
      icon: "⚗️",
      status: "コスト課題が最大",
      statusEn: "Largest cost barrier",
      statusColor: RED,
      action: "輸入サプライチェーン確立を優先。国内製造は電解槽国産化に集中",
      actionEn: "Prioritize import supply chains; focus domestic efforts on electrolyzer localization",
      priority: "選択的投資",
      priorityEn: "Selective investment",
      priorityColor: AMBER,
    },
    {
      name: "地熱",
      nameEn: "Geothermal",
      icon: "🌋",
      status: "潜在力未活用",
      statusEn: "Underutilized potential",
      statusColor: GREEN,
      action: "温泉業者との調整を法整備で促進し国立公園内の開発解禁を推進",
      actionEn: "Use legislation to ease hot-spring operator coordination; open national parks to development",
      priority: "注力すべき",
      priorityEn: "Priority candidate",
      priorityColor: GREEN,
    },
  ];

  return (
    <Card
      title={<T ja="「選択と集中」の再エネロードマップ" en="'Focus & Prioritize' Renewable Energy Roadmap" />}
      subtitle={<T ja="技術ごとに異なる障壁を踏まえた戦略的資源配分の提言" en="Strategic resource allocation recommendations based on each technology's distinct barriers" />}
    >
      <div className="space-y-3">
        {techs.map((t) => (
          <div
            key={t.name}
            className="p-4 rounded-xl border border-brief-border bg-foreground/[0.01]"
          >
            <div className="flex items-start gap-3">
              <div className="text-xl shrink-0 mt-0.5">{t.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[14px] font-bold text-foreground">
                    <T ja={t.name} en={t.nameEn} />
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `${t.statusColor}15`,
                      color: t.statusColor,
                    }}
                  >
                    <T ja={t.status} en={t.statusEn} />
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-bold ml-auto"
                    style={{
                      backgroundColor: `${t.priorityColor}20`,
                      color: t.priorityColor,
                    }}
                  >
                    <T ja={t.priority} en={t.priorityEn} />
                  </span>
                </div>
                <div className="text-[12px] text-foreground/65 leading-relaxed">
                  <T ja={t.action} en={t.actionEn} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/65" style={{ backgroundColor: `${GREEN}10`, borderLeft: `3px solid ${GREEN}` }}>
        <T
          ja="結論：「全部やろう」から「勝てる分野に集中」へ。ホルムズ危機後の安全保障視点では、エネルギー自給率向上に直結する地熱・水力・洋上風力（浮体式）への重点投資が合理的"
          en="Conclusion: shift from 'do everything' to 'win where Japan can.' Post-Hormuz security logic favors concentrated investment in geothermal, hydro, and floating offshore wind — technologies that directly boost domestic energy self-sufficiency"
        />
      </div>
    </Card>
  );
}
