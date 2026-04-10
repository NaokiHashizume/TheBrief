"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  labelJa,
  labelEn,
  children,
}: {
  labelJa: string;
  labelEn: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden"
      role="img"
      aria-label={`図表: ${labelJa}`}
    >
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#92400e]/50 font-semibold">
          <T ja={labelJa} en={labelEn} />
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

/* ─── Small stat card ─── */
function StatCard({
  value,
  labelJa,
  labelEn,
  subJa,
  subEn,
}: {
  value: string;
  labelJa: string;
  labelEn: string;
  subJa?: string;
  subEn?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-[#92400e]/60 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">
        <T ja={labelJa} en={labelEn} />
      </div>
      {subJa && (
        <div className="text-[9px] text-foreground/25 mt-0.5">
          <T ja={subJa} en={subEn ?? subJa} />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   construction-workforce — 建設業就業者・高齢化の実態
   ───────────────────────────────────────────── */
export function ConstructionWorkforceDiagram() {
  const yearData = [
    { year: "1997年", value: 685, pct: 100 },
    { year: "2005年", value: 600, pct: 88 },
    { year: "2010年", value: 540, pct: 79 },
    { year: "2015年", value: 498, pct: 73 },
    { year: "2020年", value: 492, pct: 72 },
    { year: "2024年", value: 477, pct: 70 },
  ];

  return (
    <DiagramCard
      labelJa="建設業就業者数の推移（万人）"
      labelEn="Construction industry workforce trend (10k persons)"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 mb-5">
        <StatCard
          value="477万人"
          labelJa="2024年就業者数"
          labelEn="2024 workforce"
          subJa="ピーク比▲30%"
          subEn="▲30% vs peak"
        />
        <StatCard
          value="37%"
          labelJa="55歳以上の比率"
          labelEn="Aged 55+ share"
          subJa="全産業平均を大幅超過"
          subEn="Far above all-industry avg"
        />
        <StatCard
          value="12%"
          labelJa="29歳以下の比率"
          labelEn="Aged 29 and under share"
          subJa="若手不足が深刻"
          subEn="Critical shortage of youth"
        />
        <StatCard
          value="99件"
          labelJa="人手不足倒産（2024年）"
          labelEn="Labor shortage bankruptcies (2024)"
          subJa="2022年比 約3倍"
          subEn="~3x vs 2022"
        />
      </div>

      <div className="space-y-2">
        {yearData.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-foreground/50 w-14">
                {d.year}
              </span>
              <span className="text-[10px] tabular-nums text-foreground/40 ml-2">
                <T ja={`${d.value}万人`} en={`${d.value}万`} />
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${d.pct}%`,
                  background:
                    i === yearData.length - 1
                      ? "rgb(146 64 14 / 0.35)"
                      : "rgb(146 64 14 / 0.18)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[9px] text-foreground/25 text-center">
        <T
          ja="※ 国土交通省・総務省統計局データをもとに作成"
          en="* Based on MLIT and Statistics Bureau data"
        />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   construction-bim — BIM/CIM・ICT施工の普及状況
   ───────────────────────────────────────────── */
export function ConstructionBimDiagram() {
  const items = [
    {
      titleJa: "BIM/CIM 原則適用",
      titleEn: "BIM/CIM mandatory application",
      detailJa: "2023年度から小規模を除く全公共事業に原則適用。2026年度には積算連携も試行開始",
      detailEn: "Mandatory for all public works (exc. small scale) from FY2023. Procurement integration trials from FY2026",
      statusJa: "適用中",
      statusEn: "Active",
      color: "#92400e",
    },
    {
      titleJa: "ICT施工 原則化",
      titleEn: "ICT construction standardized",
      detailJa: "2025年度からICT施工を原則化。2015年度比で生産性約21%向上を達成済み",
      detailEn: "Standardized from FY2025. ~21% productivity gain vs FY2015 already achieved",
      statusJa: "実施中",
      statusEn: "Ongoing",
      color: "#92400e",
    },
    {
      titleJa: "i-Construction 2.0",
      titleEn: "i-Construction 2.0",
      detailJa: "2040年度までに省人化率3割・生産性1.5倍。施工・データ連携・施工管理の3オートメーション化",
      detailEn: "Targets: 30% labor reduction, 1.5x productivity by FY2040. Three automation pillars",
      statusJa: "目標設定済",
      statusEn: "Targets set",
      color: "#b45309",
    },
    {
      titleJa: "中小企業への普及",
      titleEn: "SME penetration",
      detailJa: "ツール導入コスト・人材不足・効果の不可視性が壁。大手と中小の「DX格差」が拡大",
      detailEn: "Barriers: tool costs, talent shortage, opaque ROI. DX gap between majors and SMEs is widening",
      statusJa: "普及に遅れ",
      statusEn: "Lagging",
      color: "#ef4444",
    },
  ];

  return (
    <DiagramCard
      labelJa="BIM/CIM・ICT施工の普及状況"
      labelEn="BIM/CIM and ICT construction adoption status"
    >
      <div className="space-y-2 mt-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]"
          >
            <div
              className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full"
              style={{ background: item.color, marginTop: "6px" }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12px] font-semibold text-foreground/65">
                  <T ja={item.titleJa} en={item.titleEn} />
                </span>
                <span
                  className="text-[9px] px-2 py-0.5 rounded-md font-semibold flex-shrink-0"
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                  }}
                >
                  <T ja={item.statusJa} en={item.statusEn} />
                </span>
              </div>
              <p className="text-[10px] text-foreground/40 mt-1 leading-relaxed">
                <T ja={item.detailJa} en={item.detailEn} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   construction-robots — 建設ロボット・ドローン・AI事例
   ───────────────────────────────────────────── */
export function ConstructionRobotsDiagram() {
  const cases = [
    {
      categoryJa: "ドローン測量",
      categoryEn: "Drone surveying",
      nameJa: "空撮AI解析 → 3D点群データ",
      nameEn: "Aerial AI analysis → 3D point cloud",
      effectJa: "測量時間を最大1/10に短縮、cm精度維持",
      effectEn: "Up to 10x faster, cm-level accuracy maintained",
      actorJa: "大成建設・竹中工務店ほか",
      actorEn: "Taisei, Takenaka and others",
    },
    {
      categoryJa: "溶接ロボット",
      categoryEn: "Welding robots",
      nameJa: "AIロボット上向溶接",
      nameEn: "AI robot overhead welding",
      effectJa: "人間困難な上向溶接を自動化、品質向上",
      effectEn: "Automates difficult overhead welding, higher quality",
      actorJa: "鹿島建設",
      actorEn: "Kajima Corporation",
    },
    {
      categoryJa: "外壁点検",
      categoryEn: "Facade inspection",
      nameJa: "ドローン＋AIタイル浮き検知",
      nameEn: "Drone + AI tile delamination detection",
      effectJa: "目視点検の大幅省力化、見落とし低減",
      effectEn: "Dramatically fewer inspectors needed, fewer misses",
      actorJa: "竹中工務店",
      actorEn: "Takenaka Corporation",
    },
    {
      categoryJa: "AI設計支援",
      categoryEn: "AI-assisted design",
      nameJa: "AI自動設計・積算連携",
      nameEn: "AI auto-design linked to cost estimation",
      effectJa: "設計工数削減と見積精度向上を両立",
      effectEn: "Cuts design man-hours while improving estimate accuracy",
      actorJa: "各社・スタートアップ",
      actorEn: "Various companies & startups",
    },
    {
      categoryJa: "施工管理",
      categoryEn: "Site management",
      nameJa: "IoTセンサー＋AI進捗管理",
      nameEn: "IoT sensors + AI progress management",
      effectJa: "リアルタイム進捗把握で工期短縮・安全管理強化",
      effectEn: "Real-time progress tracking reduces delays and improves safety",
      actorJa: "i-Construction推進全体",
      actorEn: "i-Construction initiative overall",
    },
  ];

  return (
    <DiagramCard
      labelJa="建設ロボット・ドローン・AI — 主な先進事例"
      labelEn="Construction robots, drones and AI — key advanced cases"
    >
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[520px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-0 pr-3 tracking-wide">
                <T ja="分野" en="Field" />
              </th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">
                <T ja="技術・取り組み" en="Technology / approach" />
              </th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">
                <T ja="効果" en="Effect" />
              </th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-3 tracking-wide">
                <T ja="主体" en="Actor" />
              </th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pl-0 pr-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#92400e]/[0.08] text-[#92400e]/70 font-semibold">
                    <T ja={c.categoryJa} en={c.categoryEn} />
                  </span>
                </td>
                <td className="py-3 px-3 text-[11px] font-semibold text-foreground/65">
                  <T ja={c.nameJa} en={c.nameEn} />
                </td>
                <td className="py-3 px-3 text-[10px] text-foreground/45">
                  <T ja={c.effectJa} en={c.effectEn} />
                </td>
                <td className="py-3 pl-3 text-[10px] text-foreground/35">
                  <T ja={c.actorJa} en={c.actorEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center">
        <T ja="※ 大手ゼネコン中心の事例。中小建設会社への波及は限定的" en="* Cases centered on major contractors. Penetration to SMEs remains limited" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   construction-cost — 建設コスト上昇と受注単価の乖離
   ───────────────────────────────────────────── */
export function ConstructionCostDiagram() {
  const costItems = [
    { labelJa: "建設資材物価（土木）", labelEn: "Civil works materials price index", rise: "+41%", barWidth: "100%", note: "2021年1月→2025年11月" },
    { labelJa: "建設資材物価（建築）", labelEn: "Building materials price index", rise: "+37%", barWidth: "90%", note: "2021年1月→2025年11月" },
    { labelJa: "全建設コスト平均", labelEn: "Overall construction cost avg", rise: "+38%", barWidth: "93%", note: "2021年1月→2025年11月" },
    { labelJa: "労務単価（目標賃上げ）", labelEn: "Labor unit cost (target wage increase)", rise: "+7%/年", barWidth: "50%", note: "日建連 長期ビジョン2.0" },
    { labelJa: "受注単価の追随度", labelEn: "How far contract prices keep up", rise: "遅行", barWidth: "30%", note: "中小企業では特に乖離大" },
  ];

  return (
    <DiagramCard
      labelJa="建設コスト上昇と受注単価の乖離（2021年=基準）"
      labelEn="Rising construction costs vs. contract prices (2021 = base)"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 mb-5">
        <StatCard
          value="+41%"
          labelJa="土木資材上昇率"
          labelEn="Civil materials cost rise"
          subJa="2021→2025年11月"
          subEn="2021 → Nov 2025"
        />
        <StatCard
          value="+21%〜24%"
          labelJa="全建設コスト上昇"
          labelEn="Total construction cost rise"
          subJa="47ヶ月間の累積"
          subEn="Cumulative over 47 months"
        />
        <StatCard
          value="赤字リスク"
          labelJa="現状維持の場合"
          labelEn="If contract prices unchanged"
          subJa="中小企業を直撃"
          subEn="Hits SMEs hardest"
        />
      </div>
      <div className="space-y-3">
        {costItems.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-foreground/60">
                <T ja={d.labelJa} en={d.labelEn} />
              </span>
              <span className="text-[11px] tabular-nums font-bold text-[#92400e]/60 ml-2">
                {d.rise}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: d.barWidth,
                  background:
                    i === costItems.length - 1
                      ? "rgb(239 68 68 / 0.30)"
                      : "rgb(146 64 14 / 0.25)",
                }}
              />
            </div>
            <div className="text-[9px] text-foreground/25 mt-0.5">
              <T ja={d.note} en={d.note} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3.5 rounded-xl bg-[#92400e]/[0.04] border border-[#92400e]/[0.08]">
        <p className="text-[11px] text-[#92400e]/70 leading-relaxed">
          <T
            ja="改正建設業法（2025年12月全面施行）により、資材高騰リスクを見積時に発注者へ通知し、変更協議を申し入れる仕組みが整備された。"
            en="The revised Construction Business Act (fully enacted Dec 2025) introduced a mechanism to notify clients of material cost risks at the time of estimate and request contract renegotiation."
          />
        </p>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   construction-sme-gap — 大手と中小のDX格差
   ───────────────────────────────────────────── */
export function ConstructionSmeGapDiagram() {
  const barriers = [
    { labelJa: "予算の確保困難", labelEn: "Difficulty securing budget", pct: 26.4 },
    { labelJa: "効果・成果が見えない", labelEn: "Unclear ROI / outcomes", pct: 24.3 },
    { labelJa: "DX人材が不足", labelEn: "Shortage of DX talent", pct: 23.5 },
    { labelJa: "ノウハウ不足", labelEn: "Lack of know-how", pct: 19.8 },
    { labelJa: "業務変革への抵抗感", labelEn: "Resistance to workflow change", pct: 15.2 },
  ];

  const comparison = [
    {
      itemJa: "BIM/CIM導入率",
      itemEn: "BIM/CIM adoption",
      majorJa: "ほぼ100%（公共工事）",
      majorEn: "Near 100% (public works)",
      smeJa: "数%〜十数%",
      smeEn: "Low single to mid-teens %",
    },
    {
      itemJa: "ICT施工機器保有",
      itemEn: "ICT equipment ownership",
      majorJa: "自社保有・先行投資",
      majorEn: "In-house ownership",
      smeJa: "レンタル中心・未保有多数",
      smeEn: "Mostly rentals / many without",
    },
    {
      itemJa: "専任DX担当者",
      itemEn: "Dedicated DX staff",
      majorJa: "部門・推進室を設置",
      majorEn: "Dedicated DX department",
      smeJa: "兼務か不在",
      smeEn: "Part-time or absent",
    },
    {
      itemJa: "AI・ロボット活用",
      itemEn: "AI / robot utilization",
      majorJa: "先進事例を積極開発",
      majorEn: "Actively developing",
      smeJa: "認知はあるが導入ゼロ多数",
      smeEn: "Aware but rarely adopted",
    },
  ];

  return (
    <DiagramCard
      labelJa="大手ゼネコンと中小建設会社のDX格差"
      labelEn="DX gap between major contractors and small-to-medium builders"
    >
      {/* Barrier chart */}
      <div className="mt-3 mb-5">
        <div className="text-[10px] text-foreground/35 font-semibold mb-3 tracking-wide uppercase">
          <T ja="中小建設（従業員20人以下）DX導入の壁" en="Barriers to DX adoption for small builders (under 20 employees)" />
        </div>
        <div className="space-y-2">
          {barriers.map((b, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] text-foreground/55">
                  <T ja={b.labelJa} en={b.labelEn} />
                </span>
                <span className="text-[11px] tabular-nums font-bold text-[#92400e]/60">
                  {b.pct}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-foreground/[0.04] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#92400e]/20"
                  style={{ width: `${(b.pct / 30) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[420px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2 pl-0 pr-3 tracking-wide">
                <T ja="項目" en="Item" />
              </th>
              <th className="text-[10px] text-[#92400e]/50 font-semibold py-2 px-3 tracking-wide">
                <T ja="大手ゼネコン" en="Major contractors" />
              </th>
              <th className="text-[10px] text-[#ef4444]/50 font-semibold py-2 pl-3 tracking-wide">
                <T ja="中小建設会社" en="Small-mid builders" />
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-2.5 pl-0 pr-3 text-[10px] font-semibold text-foreground/50">
                  <T ja={row.itemJa} en={row.itemEn} />
                </td>
                <td className="py-2.5 px-3 text-[10px] text-[#92400e]/60">
                  <T ja={row.majorJa} en={row.majorEn} />
                </td>
                <td className="py-2.5 pl-3 text-[10px] text-[#ef4444]/60">
                  <T ja={row.smeJa} en={row.smeEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   construction-roadmap — 建設DXのロードマップ
   ───────────────────────────────────────────── */
export function ConstructionRoadmapDiagram() {
  const steps = [
    {
      year: "2023",
      titleJa: "BIM/CIM原則適用スタート",
      titleEn: "BIM/CIM mandatory application begins",
      bodyJa: "小規模を除く全公共工事にBIM/CIM適用義務化。大手は対応完了、中小は対応途上",
      bodyEn: "BIM/CIM required for all public works (exc. small). Majors compliant; SMEs still catching up",
      phase: "実施中",
      phaseEn: "Active",
    },
    {
      year: "2025",
      titleJa: "ICT施工の原則化・i-Con 2.0始動",
      titleEn: "ICT construction standardized, i-Con 2.0 launches",
      bodyJa: "ICT施工を国交省直轄工事で原則化。改正建設業法全面施行で資材高騰リスクの開示義務も",
      bodyEn: "ICT construction standardized for MLIT directly contracted works. Revised Construction Act requires disclosure of material-cost risk",
      phase: "進行中",
      phaseEn: "Underway",
    },
    {
      year: "2026",
      titleJa: "積算システム改良・3Dモデル連携",
      titleEn: "Cost-estimation system reform and 3D model integration",
      bodyJa: "3Dモデルから数量を直接積算へ活用する試行開始。中小向け補助金活用も本格化が期待される",
      bodyEn: "Pilot use of 3D model quantities directly in cost estimation. SME subsidy utilization expected to accelerate",
      phase: "試行",
      phaseEn: "Pilot",
    },
    {
      year: "2030",
      titleJa: "中小建設DX定着の正念場",
      titleEn: "Critical juncture for SME DX adoption",
      bodyJa: "人口減少により建設需要構造が変化。DXを実装できた中小が生き残り、できない企業は淘汰圧が増す",
      bodyEn: "Population decline reshapes construction demand. SMEs that implement DX survive; those that don't face increasing pressure",
      phase: "目標",
      phaseEn: "Target",
    },
    {
      year: "2040",
      titleJa: "省人化率3割・生産性1.5倍（国交省目標）",
      titleEn: "30% labor reduction, 1.5x productivity (MLIT target)",
      bodyJa: "i-Construction 2.0の最終目標。施工・データ連携・施工管理の3オートメーション化が完成形",
      bodyEn: "Final i-Construction 2.0 goal. Full realization of three automation pillars: construction, data linkage, and site management",
      phase: "目標",
      phaseEn: "Target",
    },
  ];

  return (
    <DiagramCard
      labelJa="建設DXのロードマップ — 国交省政策と現場の現実"
      labelEn="Construction DX roadmap — MLIT policy vs. on-site reality"
    >
      <div className="mt-3">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center mr-4 flex-shrink-0">
              <div className="w-14 h-8 rounded-lg bg-[#92400e]/[0.06] border border-[#92400e]/[0.12] flex items-center justify-center text-[11px] font-bold tabular-nums text-[#92400e]/60">
                {s.year}
              </div>
              {i < steps.length - 1 && (
                <div className="h-6 border-l border-dashed border-[#92400e]/10" />
              )}
            </div>
            <div className="pt-1 pb-5 min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[12px] font-bold text-foreground/65">
                  <T ja={s.titleJa} en={s.titleEn} />
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#92400e]/[0.08] text-[#92400e]/60 font-semibold flex-shrink-0">
                  <T ja={s.phase} en={s.phaseEn} />
                </span>
              </div>
              <p className="text-[10px] text-foreground/40 leading-relaxed">
                <T ja={s.bodyJa} en={s.bodyEn} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
