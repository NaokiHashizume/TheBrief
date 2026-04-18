"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Japan Power Shortage 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
const ORANGE = "#f97316";

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
      aria-label="Power shortage diagram"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ORANGE}aa` }}
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

/* ── 1. 電力予備率の推移 ── */
export function PowerReserveRateDiagram() {
  const data = [
    { year: "2011年夏（震災後）", value: 4.7, color: AMBER, note: "節電要請あり" },
    { year: "2022年夏", value: 3.1, color: AMBER, note: "逼迫警報発令" },
    { year: "2025年夏（実績）", value: 2.4, color: AMBER, note: "安定供給ギリギリ" },
    { year: "2026年8月（見通し）", value: 0.9, color: RED, note: "危機的水準" },
  ];
  const safeMin = 3;

  return (
    <Card
      title={<T ja="東京エリア電力予備率の推移" en="Tokyo Area Power Reserve Rate Trend" />}
      subtitle={<T ja="安定供給の目安3%を2026年夏は大幅に下回る" en="2026 summer forecast falls far below the 3% stability threshold" />}
    >
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.year}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] text-foreground/70">{item.year}</span>
              <span className="text-[12px] font-bold tabular-nums" style={{ color: item.color }}>
                {item.value}%
              </span>
            </div>
            <div className="relative h-6 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${(item.value / 6) * 100}%`, backgroundColor: item.color }}
              />
              <div
                className="absolute top-0 bottom-0 w-px bg-foreground/30"
                style={{ left: `${(safeMin / 6) * 100}%` }}
              />
            </div>
            <div className="text-[10px] text-foreground/45 mt-0.5">{item.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="縦線＝安定供給の目安3%ライン。0.9%は突発的な電源トラブルで即座に需給崩壊するリスクゾーン"
          en="Vertical line = 3% stability threshold. At 0.9%, any sudden outage triggers immediate supply-demand collapse"
        />
      </div>
    </Card>
  );
}

/* ── 2. 供給・需要ギャップの要因 ── */
export function PowerSupplyDemandGapDiagram() {
  const factors = [
    { label: "火力発電所の老朽廃止", labelEn: "Aging thermal plants retired", change: -256, unit: "万kW", color: RED, dir: "supply" },
    { label: "定期点検・計画外停止", labelEn: "Scheduled & unplanned outages", change: -85, unit: "万kW", color: RED, dir: "supply" },
    { label: "AI・データセンター需要増", labelEn: "AI & data centre demand growth", change: +129, unit: "万kW", color: ORANGE, dir: "demand" },
    { label: "猛暑によるピーク需要増", labelEn: "Record heat peak demand", change: +60, unit: "万kW", color: AMBER, dir: "demand" },
    { label: "柏崎刈羽6号機再稼働（想定）", labelEn: "Kashiwazaki-Kariwa Unit 6 restart", change: +135, unit: "万kW", color: GREEN, dir: "supply" },
  ];

  return (
    <Card
      title={<T ja="2026年夏の電力需給ギャップ要因" en="Factors Behind the 2026 Summer Supply-Demand Gap" />}
      subtitle={<T ja="供給▲256万kWと需要+129万kWの同時発生" en="Simultaneous supply drop of 2.56 GW and demand rise of 1.29 GW" />}
    >
      <div className="space-y-2.5">
        {factors.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <div className="w-44 shrink-0">
              <div className="text-[11px] text-foreground/70 leading-tight">
                <T ja={f.label} en={f.labelEn} />
              </div>
            </div>
            <div
              className="px-3 py-1.5 rounded-lg text-[12px] font-bold tabular-nums text-white"
              style={{ backgroundColor: f.color, minWidth: "80px", textAlign: "center" }}
            >
              {f.change > 0 ? "+" : ""}{f.change}{f.unit}
            </div>
            <div
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ backgroundColor: f.dir === "supply" ? `${BLUE}15` : `${AMBER}15`, color: f.dir === "supply" ? BLUE : AMBER }}
            >
              <T ja={f.dir === "supply" ? "供給側" : "需要側"} en={f.dir === "supply" ? "Supply" : "Demand"} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="柏崎刈羽再稼働で予備率は約2%改善の試算。しかし再稼働時期は未確定"
          en="Kashiwazaki-Kariwa restart could improve reserve rate by ~2%, but restart timing remains uncertain"
        />
      </div>
    </Card>
  );
}

/* ── 3. データセンター電力需要の急増 ── */
export function PowerDatacenterDemandDiagram() {
  const projections = [
    { year: "2022年", value: 100, label: "基準（IEA）", color: SLATE },
    { year: "2026年", value: 220, label: "2.2倍（IEA予測）", color: AMBER },
    { year: "2030年", value: 200, label: "国内2倍（BCG）", color: ORANGE },
    { year: "2040年", value: 900, label: "国内9倍（BCG）", color: RED },
  ];

  const characteristics = [
    { icon: "⏰", label: "24時間365日", detail: "工場と違い稼働時間制限なし" },
    { icon: "❄️", label: "冷却電力が巨大", detail: "大型施設1棟で50〜100MW規模" },
    { icon: "🏙️", label: "大都市集中", detail: "東京・大阪へ集中し系統圧迫" },
  ];

  return (
    <Card
      title={<T ja="AIデータセンターの電力需要急増" en="AI Data Centre Electricity Demand Surge" />}
      subtitle={<T ja="2040年に国内需要9倍という衝撃的試算（BCG）" en="BCG projects Japan's data centre demand to 9× by 2040" />}
    >
      <div className="space-y-2 mb-5">
        {projections.map((p) => (
          <div key={p.year} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/60 w-16 shrink-0">{p.year}</div>
            <div className="flex-1 h-7 bg-foreground/5 rounded-lg overflow-hidden">
              <div
                className="h-full rounded-lg flex items-center px-2"
                style={{ width: `${Math.min((p.value / 900) * 100, 100)}%`, backgroundColor: p.color, minWidth: "3rem" }}
              >
                <span className="text-[10px] font-bold text-white">{p.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {characteristics.map((c) => (
          <div key={c.label} className="p-3 rounded-xl border border-brief-border text-center">
            <div className="text-xl mb-1">{c.icon}</div>
            <div className="text-[11px] font-bold text-foreground mb-0.5">{c.label}</div>
            <div className="text-[10px] text-foreground/55 leading-tight">{c.detail}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. 再生可能エネルギーの限界 ── */
export function PowerRenewableLimitationsDiagram() {
  const limitations = [
    {
      title: "変動性",
      titleEn: "Variability",
      icon: "☁️",
      desc: "太陽光は夜間・曇天でゼロ。夏のベースロードには使えない",
      descEn: "Solar output is zero at night or in cloud. Cannot serve as summer baseload",
      level: "high",
    },
    {
      title: "蓄電インフラ不足",
      titleEn: "Storage gap",
      icon: "🔋",
      desc: "大規模系統蓄電は整備途上。コストは依然高い",
      descEn: "Large-scale grid storage is underdeveloped; costs remain high",
      level: "high",
    },
    {
      title: "系統の過負荷",
      titleEn: "Grid overload",
      icon: "⚡",
      desc: "2024年に出力制御が過去最大。送電網が再エネ増設に追いつかず",
      descEn: "Curtailment hit record highs in 2024; grid cannot absorb more capacity",
      level: "mid",
    },
  ];

  return (
    <Card
      title={<T ja="再エネは2026年夏の「解決策」にならない理由" en="Why Renewables Cannot Solve the 2026 Summer Crisis" />}
      subtitle={<T ja="変動性・蓄電不足・系統限界の三重制約" en="Triple constraints: variability, storage gap, and grid limits" />}
    >
      <div className="space-y-3">
        {limitations.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl border border-brief-border"
            style={{
              borderLeftColor: item.level === "high" ? RED : AMBER,
              borderLeftWidth: "3px",
              backgroundColor: item.level === "high" ? `${RED}06` : `${AMBER}06`,
            }}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">{item.icon}</span>
              <div>
                <div className="text-[13px] font-bold text-foreground mb-1">
                  <T ja={item.title} en={item.titleEn} />
                </div>
                <div className="text-[12px] text-foreground/65 leading-relaxed">
                  <T ja={item.desc} en={item.descEn} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${GREEN}10` }}>
        <T
          ja="再エネは追加的な供給力として貢献するが、老朽火力の代替は不可能。電源構成の10年単位での再設計が必要"
          en="Renewables add incremental supply but cannot replace aging thermal. A decade-long redesign of the power mix is needed"
        />
      </div>
    </Card>
  );
}

/* ── 5. 計画停電リスクと対応フェーズ ── */
export function PowerBlackoutRiskDiagram() {
  const phases = [
    { phase: "フェーズ1", label: "節電要請", desc: "省エネ・節電の呼びかけ（削減目標提示）", color: GREEN },
    { phase: "フェーズ2", label: "逼迫警報", desc: "電力需給逼迫警報の発令（2022年初発令）", color: AMBER },
    { phase: "フェーズ3", label: "使用制限", desc: "大口需要家への使用制限命令（電気事業法27条）", color: ORANGE },
    { phase: "フェーズ4", label: "計画停電", desc: "地区輪番停電。熱中症・医療・交通への影響発生", color: RED },
  ];

  return (
    <Card
      title={<T ja="予備率悪化時の政府対応フェーズ" en="Government Response Phases When Reserve Rates Fall" />}
      subtitle={<T ja="フェーズ4の計画停電は2011年以来の現実的リスク" en="Phase 4 rolling blackouts: a real risk not seen since 2011" />}
    >
      <div className="space-y-2">
        {phases.map((p, i) => (
          <div key={p.phase} className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0 mt-0.5"
              style={{ backgroundColor: p.color }}
            >
              {i + 1}
            </div>
            <div className="flex-1 p-3 rounded-xl border border-brief-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-foreground/40 font-medium">{p.phase}</span>
                <span className="text-[13px] font-bold text-foreground">{p.label}</span>
              </div>
              <div className="text-[11px] text-foreground/65">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="企業対策：非常用発電・UPS確認、需要応答（DR）契約の活用が急務"
          en="Corporate action: verify backup generators and UPS capacity; explore demand-response contracts now"
        />
      </div>
    </Card>
  );
}

/* ── 6. The Brief戦略視点 ── */
export function PowerStrategicViewDiagram() {
  const agenda = [
    { label: "どこにデータセンターを置くか", sub: "地産地消型電源配置の再設計", color: BLUE },
    { label: "洋上風力・原発・揚水の組み合わせ", sub: "各勢力の反対を超えた政策統合", color: GREEN },
    { label: "電力と情報通信の統合戦略", sub: "エネルギー安全保障×AI国家戦略", color: ORANGE },
  ];

  return (
    <Card
      title={<T ja="AIブームが電力インフラの脆弱性を可視化した" en="The AI Boom Has Made Power Infrastructure Vulnerabilities Visible" />}
      subtitle={<T ja="2026〜2030年の最重要インフラ課題" en="The defining infrastructure challenge of 2026–2030" />}
    >
      <div className="space-y-3">
        {agenda.map((a) => (
          <div
            key={a.label}
            className="p-4 rounded-xl border border-brief-border flex items-center gap-4"
            style={{ borderLeftColor: a.color, borderLeftWidth: "3px" }}
          >
            <div>
              <div className="text-[13px] font-bold text-foreground">{a.label}</div>
              <div className="text-[11px] text-foreground/55 mt-0.5">{a.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${SLATE}10` }}>
        <T
          ja="電力問題の本質は「老朽化インフラへの急増需要」。AIブームは問題を新たに作ったのではなく、先送りを可視化した"
          en="The core issue: surging demand on aging infrastructure. The AI boom didn't create the problem — it made decades of deferral visible"
        />
      </div>
    </Card>
  );
}
