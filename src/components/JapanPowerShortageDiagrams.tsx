"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Japan Power Shortage Summer 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
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
      aria-label="電力不足関連データ図"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${AMBER}aa` }}
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

/* ── 1. 供給予備率の比較（power-reserve-rate） ── */
export function PowerReserveRateDiagram() {
  const years = [
    { label: "2011年夏（震災後）", labelEn: "2011 Summer (post-quake)", value: 4.7, color: AMBER },
    { label: "2022年夏（逼迫警報）", labelEn: "2022 Summer (alert issued)", value: 3.1, color: AMBER },
    { label: "2026年8月（見通し）", labelEn: "Aug 2026 (forecast)", value: 0.9, color: RED },
    { label: "安定供給の目安", labelEn: "Stable supply threshold", value: 3.0, color: GREEN },
  ];

  return (
    <Card
      title={<T ja="東京エリアの電力予備率の比較" en="Tokyo Area Power Reserve Rate Comparison" />}
      subtitle={<T ja="2026年8月は0.9%と過去最低水準。安定供給目安3%を大幅に下回る" en="Aug 2026 forecast of 0.9% is an all-time low, far below the 3% stability threshold" />}
    >
      <div className="space-y-3">
        {years.map((y) => (
          <div key={y.label} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/60 w-36 shrink-0">
              <T ja={y.label} en={y.labelEn} />
            </div>
            <div className="flex-1 h-6 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${Math.max((y.value / 6) * 100, 4)}%`,
                  backgroundColor: y.color,
                }}
              >
                <span className="text-[10px] font-bold text-white/90">
                  {y.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="予備率0.9%：突発的な電源脱落（トラブル・酷暑）が起きれば瞬時に需給が崩壊するリスク水準。柏崎刈羽6号機が再稼働すれば約2%の改善見込み"
          en="0.9%: Any sudden plant outage (fault or extreme heat) could instantly collapse supply-demand balance. KK Unit 6 restart would add ~2pp"
        />
      </div>
    </Card>
  );
}

/* ── 2. 供給減少と需要増加のギャップ（power-supply-demand-gap） ── */
export function PowerSupplyDemandGapDiagram() {
  const items = [
    {
      label: "老朽火力の休廃止",
      labelEn: "Aging thermal plant retirements",
      change: -256,
      unit: "万kW",
      unitEn: "10k kW",
      type: "supply",
      color: RED,
    },
    {
      label: "AI・DC需要の増加",
      labelEn: "AI & data center demand growth",
      change: +129,
      unit: "万kW",
      unitEn: "10k kW",
      type: "demand",
      color: AMBER,
    },
    {
      label: "再エネ（変動性）追加",
      labelEn: "Additional renewables (variable)",
      change: +85,
      unit: "万kW",
      unitEn: "10k kW",
      type: "supply",
      color: GREEN,
    },
    {
      label: "節電効果（要請）",
      labelEn: "Power-saving from requests",
      change: -60,
      unit: "万kW",
      unitEn: "10k kW",
      type: "demand",
      color: SLATE,
    },
  ];

  return (
    <Card
      title={<T ja="2026年夏：供給減少と需要増加の要因分解" en="Summer 2026: Supply Decline and Demand Increase Factor Analysis" />}
      subtitle={<T ja="供給▲256万kWと需要+129万kWが重なり、予備率が急低下" en="Supply ▲2.56 GW and demand +1.29 GW combine to crash the reserve rate" />}
    >
      <div className="space-y-3">
        {items.map((item) => {
          const isNeg = item.change < 0;
          const absVal = Math.abs(item.change);
          const maxAbs = 256;
          return (
            <div key={item.label} className="flex items-center gap-3">
              <div className="text-[11px] text-foreground/60 w-32 shrink-0">
                <T ja={item.label} en={item.labelEn} />
              </div>
              <div className="flex-1 flex items-center">
                <div
                  className="h-5 rounded-full flex items-center px-2"
                  style={{
                    width: `${(absVal / maxAbs) * 60}%`,
                    minWidth: "2.5rem",
                    backgroundColor: item.color,
                    opacity: 0.85,
                  }}
                >
                  <span className="text-[10px] font-bold text-white/90 whitespace-nowrap">
                    {isNeg ? "▲" : "+"}{absVal}<T ja={item.unit} en={item.unitEn} />
                  </span>
                </div>
                <span
                  className="ml-2 text-[10px] px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <T ja={item.type === "supply" ? "供給側" : "需要側"} en={item.type === "supply" ? "Supply" : "Demand"} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="出典：資源エネルギー庁「電力需給見通し（2026年度夏期）」IEA「Electricity 2024」BCG試算を基に作成"
          en="Sources: METI power supply-demand outlook (FY2026 Summer), IEA Electricity 2024, BCG estimates"
        />
      </div>
    </Card>
  );
}

/* ── 3. データセンター需要の急増（power-datacenter-demand） ── */
export function PowerDatacenterDemandDiagram() {
  const data = [
    { year: "2022", value: 100, note: "基準年", noteEn: "Base year", color: SLATE },
    { year: "2024", value: 155, note: "クラウド拡大", noteEn: "Cloud expansion", color: BLUE },
    { year: "2026", value: 220, note: "生成AI普及", noteEn: "Generative AI spread", color: AMBER },
    { year: "2030", value: 400, note: "AI産業化（予測）", noteEn: "AI industrialization (forecast)", color: RED },
    { year: "2040", value: 900, note: "9倍（BCG試算）", noteEn: "9× (BCG estimate)", color: RED },
  ];
  const max = 900;

  return (
    <Card
      title={<T ja="国内データセンター電力需要の推移と予測（2022年=100）" en="Japan Data Center Power Demand Trend & Forecast (2022=100)" />}
      subtitle={<T ja="生成AIブームで2040年には2022年比9倍に拡大との試算。日本の電力インフラに根本的な問いを突きつける" en="Generative AI boom could drive 9× demand by 2040 vs. 2022 — a fundamental challenge to Japan's power infrastructure" />}
    >
      <div className="space-y-2.5">
        {data.map((d) => (
          <div key={d.year} className="flex items-center gap-3">
            <div className="text-[11px] font-mono text-foreground/60 w-12 shrink-0">{d.year}</div>
            <div className="flex-1 h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${(d.value / max) * 100}%`,
                  backgroundColor: d.color,
                }}
              >
                <span className="text-[10px] font-bold text-white/90">{d.value}</span>
              </div>
            </div>
            <div className="text-[10px] text-foreground/50 w-24 shrink-0">
              <T ja={d.note} en={d.noteEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${BLUE}10` }}>
        <T
          ja="参考：GPT-4のトレーニングには一般家庭1万世帯が1年間使う電力量が必要（米オークリッジ国立研究所推計）"
          en="Ref: Training GPT-4 required the equivalent of 10,000 households' annual electricity use (Oak Ridge National Laboratory estimate)"
        />
      </div>
    </Card>
  );
}

/* ── 4. 再エネの「解決策の限界」（power-renewable-limitations） ── */
export function PowerRenewableLimitationsDiagram() {
  const limitations = [
    {
      icon: "🌤️",
      title: "変動性の問題",
      titleEn: "Variability problem",
      desc: "太陽光は夜間・曇天時にゼロ、風力は無風時にゼロ。ピーク需要の解決策にはなれても、ベースロードの代替にはならない",
      descEn: "Solar = zero at night/overcast; wind = zero in calm. Can address peak demand but cannot replace baseload",
      severity: "high",
    },
    {
      icon: "🔋",
      title: "蓄電インフラの不足",
      titleEn: "Storage infrastructure gap",
      desc: "大規模系統蓄電池は整備途上。2030年目標10GW（BESS）のうち稼働中は約2GW（25%）に過ぎない",
      descEn: "Large-scale grid storage is underdeveloped. Only ~2 GW (25%) of the 10 GW BESS target is operating",
      severity: "high",
    },
    {
      icon: "⚡",
      title: "系統の過負荷",
      titleEn: "Grid overload",
      desc: "送電網は再エネの大量接続を想定していない。2024年度の出力制御は過去最大水準（九州で発電量の6.7%をカット）",
      descEn: "Grids weren't designed for large-scale RE. 2024 curtailment hit record levels (6.7% of output cut in Kyushu)",
      severity: "mid",
    },
    {
      icon: "🏙️",
      title: "地域偏在",
      titleEn: "Geographic mismatch",
      desc: "太陽光・風力の適地は地方に多く、電力消費が多い都市圏（東京・大阪）との地理的ミスマッチが深刻",
      descEn: "Solar/wind sites concentrate in rural areas, while major consumption is in urban centers (Tokyo, Osaka)",
      severity: "mid",
    },
  ];

  return (
    <Card
      title={<T ja="再生可能エネルギーが「即解決策」になれない4つの壁" en="4 Barriers to Renewables Being an Immediate Solution" />}
      subtitle={<T ja="変動性・蓄電・系統・地域偏在という四重の制約が、2026年夏の逼迫解消に再エネが貢献しにくい理由" en="Variability, storage, grid, and geographic mismatch are the four reasons why RE can't quickly solve the 2026 crunch" />}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {limitations.map((l) => (
          <div
            key={l.title}
            className="p-4 rounded-xl border border-brief-border"
            style={{
              backgroundColor: l.severity === "high" ? `${RED}08` : `${AMBER}08`,
              borderLeftColor: l.severity === "high" ? RED : AMBER,
              borderLeftWidth: "3px",
            }}
          >
            <div className="text-xl mb-2">{l.icon}</div>
            <div className="text-[13px] font-bold text-foreground mb-1">
              <T ja={l.title} en={l.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={l.desc} en={l.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. 停電リスクと対応フェーズ（power-blackout-risk） ── */
export function PowerBlackoutRiskDiagram() {
  const phases = [
    {
      phase: "フェーズ1",
      phaseEn: "Phase 1",
      action: "省エネ・節電の要請",
      actionEn: "Energy saving requests",
      trigger: "予備率3%未満",
      triggerEn: "Reserve <3%",
      impact: "家庭・企業への協力依頼",
      impactEn: "Voluntary cooperation requests",
      color: AMBER,
    },
    {
      phase: "フェーズ2",
      phaseEn: "Phase 2",
      action: "電力需給逼迫警報の発令",
      actionEn: "Tight supply alert issued",
      trigger: "予備率1〜2%",
      triggerEn: "Reserve 1–2%",
      impact: "大口需要家への削減要請強化",
      impactEn: "Stronger reduction requests to large users",
      color: AMBER,
    },
    {
      phase: "フェーズ3",
      phaseEn: "Phase 3",
      action: "使用制限命令（電気事業法27条）",
      actionEn: "Mandatory use restriction (Electricity Act §27)",
      trigger: "予備率1%未満",
      triggerEn: "Reserve <1%",
      impact: "大口需要家の強制削減",
      impactEn: "Mandatory reduction for large users",
      color: RED,
    },
    {
      phase: "フェーズ4",
      phaseEn: "Phase 4",
      action: "計画停電",
      actionEn: "Rolling blackouts",
      trigger: "緊急時",
      triggerEn: "Emergency",
      impact: "熱中症リスク・医療・交通機能停止",
      impactEn: "Heat stroke risk, medical and traffic disruption",
      color: RED,
    },
  ];

  return (
    <Card
      title={<T ja="電力逼迫時の対応フェーズ（政府の行動計画）" en="Government Response Phases During Power Crunch" />}
      subtitle={<T ja="予備率0.9%は計画停電（フェーズ4）が現実のリスクとなる水準" en="At 0.9% reserve, Phase 4 rolling blackouts become a real risk" />}
    >
      <div className="space-y-3">
        {phases.map((p, i) => (
          <div
            key={p.phase}
            className="flex gap-3 p-3 rounded-xl border border-brief-border"
            style={{ backgroundColor: `${p.color}05` }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white"
              style={{ backgroundColor: p.color }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[12px] font-bold text-foreground">
                  <T ja={p.action} en={p.actionEn} />
                </span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: `${p.color}20`, color: p.color }}
                >
                  <T ja={p.trigger} en={p.triggerEn} />
                </span>
              </div>
              <div className="text-[11px] text-foreground/60">
                <T ja={p.impact} en={p.impactEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="企業対策：非常用発電設備の点検・燃料確保、UPS容量確認、需要応答（DR）契約の活用が推奨される"
          en="Business actions: Inspect backup generators and secure fuel, verify UPS capacity, activate demand response (DR) contracts"
        />
      </div>
    </Card>
  );
}

/* ── 6. 戦略的視点（power-strategic-view） ── */
export function PowerStrategicViewDiagram() {
  const actions = [
    {
      category: "短期（2026年夏）",
      categoryEn: "Short-term (Summer 2026)",
      items: [
        { ja: "柏崎刈羽6号機の試運転完了・本格稼働", en: "Complete KK Unit 6 test run and begin full operation" },
        { ja: "需給逼迫警報の早期発令・節電要請", en: "Early tight-supply alerts and power-saving requests" },
        { ja: "揚水発電・BESSの最大活用", en: "Maximize pumped hydro and BESS utilization" },
      ],
      color: RED,
    },
    {
      category: "中期（2027〜2030年）",
      categoryEn: "Medium-term (2027–2030)",
      items: [
        { ja: "泊・東海第二原発の再稼働", en: "Restart Tomari and Tokai-2 nuclear plants" },
        { ja: "系統用BESS 10GW達成", en: "Reach 10 GW grid BESS target" },
        { ja: "データセンターの地方分散と再エネ調達義務化", en: "Mandate rural DC siting and renewable procurement" },
      ],
      color: AMBER,
    },
    {
      category: "長期（2030〜2040年）",
      categoryEn: "Long-term (2030–2040)",
      items: [
        { ja: "SMR・革新炉の商業運転", en: "Commercial operation of SMRs and advanced reactors" },
        { ja: "北海道〜本州HVDC増強完了", en: "Complete Hokkaido–Honshu HVDC upgrade" },
        { ja: "ペロブスカイト太陽電池の量産普及", en: "Mass deployment of perovskite solar cells" },
      ],
      color: GREEN,
    },
  ];

  return (
    <Card
      title={<T ja="電力インフラ刷新の3段階ロードマップ" en="Three-Phase Power Infrastructure Renewal Roadmap" />}
      subtitle={<T ja="AI需要急増と老朽インフラの交差点で求められる、短中長期の統合的対応" en="Integrated short, medium, and long-term responses needed at the intersection of AI demand surge and aging infrastructure" />}
    >
      <div className="space-y-4">
        {actions.map((a) => (
          <div
            key={a.category}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: a.color, borderLeftWidth: "4px" }}
          >
            <div
              className="text-[11px] font-bold mb-2"
              style={{ color: a.color }}
            >
              <T ja={a.category} en={a.categoryEn} />
            </div>
            <ul className="space-y-1">
              {a.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-[12px] text-foreground/70">
                  <span style={{ color: a.color }} className="shrink-0">▸</span>
                  <T ja={item.ja} en={item.en} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/65" style={{ backgroundColor: `${SLATE}10`, borderLeft: `3px solid ${SLATE}` }}>
        <T
          ja="結論：AIブームが「先送りされてきたインフラ老朽化と電源多様化の問題」を可視化した。エネルギーと情報通信の統合的な国家戦略の構築が急務"
          en="Conclusion: The AI boom has made visible the long-deferred problems of infrastructure aging and power source diversification. An integrated national energy-ICT strategy is urgently needed"
        />
      </div>
    </Card>
  );
}
