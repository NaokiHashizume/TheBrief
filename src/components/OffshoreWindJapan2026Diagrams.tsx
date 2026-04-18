"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Offshore Wind Japan 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const TEAL = "#0d9488";
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
      aria-label="洋上風力関連データ図"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${TEAL}aa` }}
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

/* ── 1. 浮体式商用稼働の意義（offshore-wind-floating-launch） ── */
export function OffshoreWindFloatingLaunchDiagram() {
  const comparison = [
    {
      type: "固定式（着床式）",
      typeEn: "Fixed-bottom",
      depth: "〜50m",
      depthEn: "up to 50m",
      jpSites: "限定（約10GW相当）",
      jpSitesEn: "Limited (~10 GW)",
      cost: "低〜中",
      costEn: "Low–Medium",
      maturity: "成熟",
      maturityEn: "Mature",
      color: BLUE,
    },
    {
      type: "浮体式",
      typeEn: "Floating",
      depth: "50m〜（制限なし）",
      depthEn: "50m+ (unlimited)",
      jpSites: "豊富（100GW以上のポテンシャル）",
      jpSitesEn: "Abundant (100+ GW potential)",
      cost: "高（実証段階）",
      costEn: "High (demo stage)",
      maturity: "発展途上",
      maturityEn: "Developing",
      color: TEAL,
    },
  ];

  return (
    <Card
      title={<T ja="五島沖の意義：固定式 vs 浮体式洋上風力" en="Significance of Goto Offshore: Fixed-Bottom vs. Floating Offshore Wind" />}
      subtitle={<T ja="日本の急深海底に対応する浮体式の商用化は、洋上風力ポテンシャルを10倍以上に拡大する" en="Commercial floating technology for Japan's steep seabed expands offshore wind potential more than 10-fold" />}
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {comparison.map((c) => (
          <div
            key={c.type}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: c.color, borderTopWidth: "3px" }}
          >
            <div className="text-[13px] font-bold mb-3" style={{ color: c.color }}>
              <T ja={c.type} en={c.typeEn} />
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-foreground/50"><T ja="適用水深" en="Water depth" /></span>
                <span className="text-foreground/80"><T ja={c.depth} en={c.depthEn} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50"><T ja="日本適地" en="Japan sites" /></span>
                <span className="text-foreground/80"><T ja={c.jpSites} en={c.jpSitesEn} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50"><T ja="コスト" en="Cost" /></span>
                <span className="text-foreground/80"><T ja={c.cost} en={c.costEn} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50"><T ja="技術成熟度" en="Tech maturity" /></span>
                <span className="text-foreground/80"><T ja={c.maturity} en={c.maturityEn} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${TEAL}10` }}>
        <T
          ja="五島沖（長崎）：戸田建設コンソーシアムが建設した8基・16,800kW。国内初の浮体式商用稼働（2026年1月）。国内EEZポテンシャル換算で100GW超の可能性を示す先駆け"
          en="Goto offshore (Nagasaki): 8 turbines, 16,800 kW, built by Toda Construction consortium. Japan's first commercial floating offshore wind (Jan 2026). Pioneer demonstrating 100+ GW domestic EEZ potential"
        />
      </div>
    </Card>
  );
}

/* ── 2. 三菱商事撤退の分析（offshore-wind-mitsubishi-exit） ── */
export function OffshoreWindMitsubishiExitDiagram() {
  const timeline = [
    { year: "2021-22年", event: "Round 1入札：三菱商事が秋田・千葉3海域を独占落札", eventEn: "Round 1: Mitsubishi Corp sweeps all 3 Akita/Chiba sites", color: GREEN },
    { year: "2022年〜", event: "ウクライナ危機後の資材高騰・円安が直撃。工事費が想定の2倍超に膨張", eventEn: "Post-Ukraine materials surge and yen weakness hit: construction costs exceed 2× estimates", color: AMBER },
    { year: "2023-24年", event: "FRB利上げで金利上昇、プロジェクトファイナンスコストが増大", eventEn: "Fed rate hikes increase project finance costs", color: AMBER },
    { year: "2025年8月", event: "三菱商事が3海域からの正式撤退を表明", eventEn: "Mitsubishi Corp officially announces exit from all 3 sites", color: RED },
  ];

  const lessons = [
    { ja: "入札設計の欠陥：価格のみ評価→最安値落札でもコスト超過時の救済なし", en: "Flawed auction design: price-only evaluation → no cost overrun relief for lowest bidder" },
    { ja: "インフレリスクの未織り込み：固定FIP価格がコスト変動を吸収できない", en: "Inflation risk not priced in: fixed FIP price cannot absorb cost volatility" },
    { ja: "集中リスク：3海域を1社が独占→撤退で3海域すべてが頓挫", en: "Concentration risk: one company winning all 3 sites → exit delays all 3" },
  ];

  return (
    <Card
      title={<T ja="三菱商事撤退：「安値入札のツケ」が示す政策設計の失敗" en="Mitsubishi Exit: Policy Design Failure Behind the 'Low-Bid Debt'" />}
      subtitle={<T ja="第1ラウンドの構造的欠陥がどのように事業失敗に帰結したか" en="How Round 1's structural flaws led to project failure" />}
    >
      <div className="space-y-2 mb-5">
        {timeline.map((t) => (
          <div key={t.year} className="flex gap-3 items-start">
            <div
              className="text-[10px] font-bold px-2 py-1 rounded shrink-0"
              style={{ backgroundColor: `${t.color}15`, color: t.color }}
            >
              {t.year}
            </div>
            <div className="text-[12px] text-foreground/70 pt-0.5">
              <T ja={t.event} en={t.eventEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-brief-border pt-4">
        <div className="text-[11px] font-bold text-foreground/50 mb-2">
          <T ja="教訓" en="Lessons learned" />
        </div>
        <ul className="space-y-1.5">
          {lessons.map((l, i) => (
            <li key={i} className="flex gap-2 text-[11px] text-foreground/70">
              <span className="text-red-500 shrink-0">✕</span>
              <T ja={l.ja} en={l.en} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

/* ── 3. 第2ラウンドの制度改革（offshore-wind-round2-reform） ── */
export function OffshoreWindRound2ReformDiagram() {
  const reforms = [
    {
      item: "評価基準の多元化",
      itemEn: "Multi-criteria evaluation",
      before: "価格のみで評価",
      beforeEn: "Price only",
      after: "国内調達比率・事業確実性・財務基盤を総合評価",
      afterEn: "Domestic procurement, viability, and financial strength comprehensively assessed",
      color: GREEN,
    },
    {
      item: "国産化比率要件",
      itemEn: "Domestic content requirement",
      before: "要件なし",
      beforeEn: "No requirement",
      after: "2040年までに国内調達6割を目標として加点評価",
      afterEn: "60% domestic procurement by 2040 target incentivized with scoring bonus",
      color: GREEN,
    },
    {
      item: "ゼロプレミアム救済措置",
      itemEn: "Zero-premium relief measures",
      before: "なし（撤退→頓挫）",
      beforeEn: "None (exit = project collapse)",
      after: "LTDAへの参加権・7つの支援措置（2025年11月発表）",
      afterEn: "LTDA participation rights + 7 support measures (announced Nov 2025)",
      color: AMBER,
    },
    {
      item: "入札参加者の分散",
      itemEn: "Diversified bidder pool",
      before: "三菱商事が3海域独占",
      beforeEn: "Mitsubishi Corp swept all 3 sites",
      after: "複数コンソーシアムが各海域を分散落札",
      afterEn: "Multiple consortia split sites in Round 2",
      color: GREEN,
    },
  ];

  return (
    <Card
      title={<T ja="第1→第2ラウンドの制度改革：何が変わったか" en="Round 1→2 Institutional Reforms: What Changed?" />}
      subtitle={<T ja="三菱商事撤退の教訓を踏まえた入札制度の抜本的見直し" en="Comprehensive bid system overhaul informed by the Mitsubishi exit lesson" />}
    >
      <div className="space-y-3">
        {reforms.map((r) => (
          <div key={r.item} className="p-3 rounded-xl border border-brief-border bg-foreground/[0.01]">
            <div
              className="text-[11px] font-bold mb-2"
              style={{ color: r.color }}
            >
              <T ja={r.item} en={r.itemEn} />
            </div>
            <div className="flex gap-3 text-[11px]">
              <div className="flex-1">
                <span className="text-foreground/40"><T ja="旧：" en="Before: " /></span>
                <span className="text-foreground/60"><T ja={r.before} en={r.beforeEn} /></span>
              </div>
              <div className="text-foreground/30">→</div>
              <div className="flex-1">
                <span className="text-foreground/40"><T ja="新：" en="After: " /></span>
                <span className="text-foreground/80"><T ja={r.after} en={r.afterEn} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="業界横断の変化：14社が浮体式洋上風力技術研究組合を設立。競合他社がコストとリスクの低減に向けて協力する新しい枠組みが生まれた"
          en="Cross-industry change: 14 companies formed a Floating Offshore Wind Technology Research Association — a new framework for rivals to collaborate on cost and risk reduction"
        />
      </div>
    </Card>
  );
}

/* ── 4. 再エネ目標と現実のギャップ（offshore-wind-renewable-target） ── */
export function OffshoreWindRenewableTargetDiagram() {
  const data = [
    { label: "再エネ全体（現状2024年）", labelEn: "All RE (2024 actual)", value: 23.0, target: 40, color: AMBER },
    { label: "風力全体（現状2024年）", labelEn: "All wind (2024 actual)", value: 1.1, target: 8, color: BLUE },
    { label: "洋上風力（現状2026年）", labelEn: "Offshore wind (2026 actual)", value: 0.3, target: 10, targetUnit: "GW", color: TEAL },
  ];

  return (
    <Card
      title={<T ja="日本の再エネ目標と現実のギャップ" en="Japan's Renewable Energy Targets vs. Reality" />}
      subtitle={<T ja="洋上風力の2030年目標10GWに対し現状0.3GW——33倍の拡大が必要" en="0.3 GW today vs. 10 GW 2030 target for offshore wind — a 33× scale-up required" />}
    >
      <div className="space-y-6">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="text-[12px] text-foreground/70">
                <T ja={d.label} en={d.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/45">
                <T ja={`2030〜2040年目標: ${d.target}${d.targetUnit ?? "%"}`} en={`2030–40 target: ${d.target}${d.targetUnit ?? "%"}`} />
              </div>
            </div>
            <div className="relative h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="absolute top-0 bottom-0 w-px bg-foreground/30"
                style={{ left: `${(d.target / (d.target * 1.1)) * 100}%` }}
              />
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${Math.max((d.value / d.target) * 100, 3)}%`,
                  backgroundColor: d.color,
                }}
              >
                <span className="text-[10px] font-bold text-white/90">{d.value}{d.targetUnit ?? "%"}</span>
              </div>
            </div>
            <div className="mt-1 text-[10px] text-foreground/40 text-right">
              <T ja={`目標の${Math.round((d.value / d.target) * 100)}%達成`} en={`${Math.round((d.value / d.target) * 100)}% of target`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="業界関係者の見方：「2030年の洋上風力5.7GW目標は困難、現実的には2〜3GW台」との見方が広がっている。Round 1の頓挫がスケジュールに与えた影響は大きい"
          en="Industry view: '5.7 GW 2030 offshore wind target is difficult; realistically 2–3 GW' is becoming the consensus. Round 1 collapse has materially set back the timeline"
        />
      </div>
    </Card>
  );
}

/* ── 5. サプライチェーンの課題（offshore-wind-supply-chain） ── */
export function OffshoreWindSupplyChainDiagram() {
  const items = [
    {
      component: "風力発電機本体",
      componentEn: "Wind turbine generators",
      status: "欧州勢が世界市場を寡占（Vestas・Siemens Gamesa等）",
      statusEn: "European majors dominate globally (Vestas, Siemens Gamesa, etc.)",
      jpCapability: "低",
      jpCapabilityEn: "Low",
      color: RED,
    },
    {
      component: "海底ケーブル",
      componentEn: "Subsea cables",
      status: "古河電工・住友電工等が参入するが国際競争力は限定的",
      statusEn: "Furukawa, Sumitomo Electric entering but limited global competitiveness",
      jpCapability: "中",
      jpCapabilityEn: "Medium",
      color: AMBER,
    },
    {
      component: "SEP船（据付船）",
      componentEn: "Self-elevating platforms (SEP)",
      status: "国内に数隻のみ。大規模案件には欧州・中国からの調達が必要",
      statusEn: "Only a few vessels in Japan; large projects require European or Chinese sourcing",
      jpCapability: "低",
      jpCapabilityEn: "Low",
      color: RED,
    },
    {
      component: "浮体式係留システム",
      componentEn: "Floating mooring systems",
      status: "三菱重工・IHI・川崎重工が開発中。実績積み上げ段階",
      statusEn: "MHI, IHI, Kawasaki Heavy under development — building track record",
      jpCapability: "中〜高（将来）",
      jpCapabilityEn: "Medium–High (future)",
      color: GREEN,
    },
    {
      component: "洋上変電所・系統接続",
      componentEn: "Offshore substations & grid connection",
      status: "東芝・日立等が技術力を持つ。コスト転嫁と系統接続ルール整備が課題",
      statusEn: "Toshiba, Hitachi etc. have technical capability; cost pass-through and grid rules need clarity",
      jpCapability: "中〜高",
      jpCapabilityEn: "Medium–High",
      color: AMBER,
    },
  ];

  return (
    <Card
      title={<T ja="洋上風力のサプライチェーン：国内能力評価" en="Offshore Wind Supply Chain: Japan's Domestic Capability Assessment" />}
      subtitle={<T ja="「2040年までに国内調達6割」目標の実現には、風車本体・SEP船が最大の弱点" en="Reaching the '60% domestic procurement by 2040' target — wind turbines and SEP vessels are the biggest gaps" />}
    >
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.component} className="flex gap-3 p-3 rounded-lg border border-brief-border bg-foreground/[0.01]">
            <div className="flex-1">
              <div className="text-[12px] font-bold text-foreground mb-0.5">
                <T ja={item.component} en={item.componentEn} />
              </div>
              <div className="text-[11px] text-foreground/60 leading-relaxed">
                <T ja={item.status} en={item.statusEn} />
              </div>
            </div>
            <div
              className="text-[10px] px-2 py-1 rounded font-bold h-fit shrink-0"
              style={{ backgroundColor: `${item.color}15`, color: item.color }}
            >
              <T ja={`国内：${item.jpCapability}`} en={`JP: ${item.jpCapabilityEn}`} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. 戦略的視点（offshore-wind-strategic-view） ── */
export function OffshoreWindStrategicViewDiagram() {
  const recommendations = [
    {
      area: "長期安定的なPPA設計",
      areaEn: "Long-term stable PPA design",
      desc: "CfD（差金決済契約）の導入でプロジェクトファイナンスを安定化。コスト変動リスクを政策として吸収する仕組みが必要",
      descEn: "Introduce CfD to stabilize project finance. A mechanism to absorb cost volatility as policy is needed",
      color: BLUE,
    },
    {
      area: "国内サプライチェーンへの先行投資",
      areaEn: "Advance investment in domestic supply chain",
      desc: "「市場が小さいから投資しない」の悪循環を断ち切るため、SEP船建造・風車国産化への政府補助と国産化義務の段階的強化",
      descEn: "Break the 'market too small to invest' vicious cycle with SEP vessel subsidies, domestic turbine production support, and phased domestic content mandates",
      color: GREEN,
    },
    {
      area: "環境アセスメントの迅速化",
      areaEn: "Streamlined environmental assessment",
      desc: "現行制度では環境アセスが5〜7年かかる。英国の1〜2年を参考に、デジタル化と並行審査で大幅短縮が可能",
      descEn: "Current process takes 5–7 years. Japan can cut this significantly via digitization and parallel review, drawing on the UK's 1–2 year model",
      color: TEAL,
    },
  ];

  return (
    <Card
      title={<T ja="洋上風力「成功物語」への3条件" en="3 Conditions for an Offshore Wind 'Success Story'" />}
      subtitle={<T ja="浮体式の商用化証明は達成された。あとは制度・資金・産業基盤の三位一体の整備が必要" en="Commercial floating proof-of-concept achieved. What remains: institutional, financial, and industrial base development — all three together" />}
    >
      <div className="space-y-3">
        {recommendations.map((r, i) => (
          <div
            key={r.area}
            className="flex gap-3 p-4 rounded-xl border border-brief-border bg-foreground/[0.01]"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold text-white"
              style={{ backgroundColor: r.color }}
            >
              {i + 1}
            </div>
            <div>
              <div className="text-[13px] font-bold text-foreground mb-1">
                <T ja={r.area} en={r.areaEn} />
              </div>
              <div className="text-[11px] text-foreground/65 leading-relaxed">
                <T ja={r.desc} en={r.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/65" style={{ backgroundColor: `${TEAL}10`, borderLeft: `3px solid ${TEAL}` }}>
        <T
          ja="結論：2026年は「基盤が整うかどうかの最後の分岐点」。EEZ拡大法という制度的土台は整った。あとはコスト・産業基盤・漁業調整の三課題への政治的決断が求められる"
          en="Conclusion: 2026 is the last fork in the road for whether a foundation gets built. The EEZ expansion law has laid institutional groundwork. What's needed now is political commitment on cost, industrial base, and fishery coordination"
        />
      </div>
    </Card>
  );
}
