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
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${labelJa}`}>
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
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
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium"><T ja={labelJa} en={labelEn} /></div>
      {subJa && (
        <div className="text-[9px] text-foreground/25 mt-0.5"><T ja={subJa} en={subEn ?? subJa} /></div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   IOWN Overview — 3つの柱
   ───────────────────────────────────────────── */
export function IownOverviewDiagram() {
  const pillars = [
    {
      name: "APN",
      nameJa: "オールフォトニクス・ネットワーク",
      nameEn: "All-Photonics Network",
      desc: "端末〜ネットワーク全体を光で接続",
      descEn: "Optical connectivity from device to end-to-end network",
      metric: "伝送容量 125倍",
      metricEn: "125× transmission capacity",
    },
    {
      name: "CF",
      nameJa: "コグニティブ・ファウンデーション",
      nameEn: "Cognitive Foundation",
      desc: "ICTリソースの統合管理・最適化",
      descEn: "Unified orchestration and optimization of ICT resources",
      metric: "運用の自律化",
      metricEn: "Autonomous operations",
    },
    {
      name: "DTC",
      nameJa: "デジタルツインコンピューティング",
      nameEn: "Digital Twin Computing",
      desc: "現実世界の高精度デジタル再現",
      descEn: "High-fidelity digital reproduction of the real world",
      metric: "未来予測・試行",
      metricEn: "Future prediction & simulation",
    },
  ];

  return (
    <DiagramCard labelJa="IOWN構想 — 3つの技術要素" labelEn="The IOWN initiative — three technology pillars">
      <div className="flex flex-col items-center mt-3">
        {/* Top label */}
        <div className="px-6 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center mb-2">
          <div className="text-sm font-bold text-foreground/60">IOWN</div>
          <div className="text-[9px] text-foreground/30 mt-0.5">Innovative Optical and Wireless Network</div>
        </div>
        <div className="h-4 border-l border-dashed border-foreground/10" />
        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          {pillars.map((p, i) => (
            <div key={i} className="p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05] text-center">
              <div className="text-lg font-bold text-foreground/65 tabular-nums">{p.name}</div>
              <div className="text-[10px] text-foreground/45 font-semibold mt-1"><T ja={p.nameJa} en={p.nameEn} /></div>
              <div className="text-[10px] text-foreground/35 mt-1.5"><T ja={p.desc} en={p.descEn} /></div>
              <div className="mt-2 px-2 py-1 rounded-md bg-[#3b82f6]/[0.06] text-[9px] text-[#3b82f6]/60 font-semibold inline-block">
                <T ja={p.metric} en={p.metricEn} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <StatCard value="1/100" labelJa="電力消費" labelEn="Power consumption" subJa="2030年目標" subEn="2030 target" />
        <StatCard value="125倍" labelJa="伝送容量" labelEn="Transmission capacity" subJa="2030年目標" subEn="2030 target" />
        <StatCard value="1/200" labelJa="遅延" labelEn="Latency" subJa="2030年目標" subEn="2030 target" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   APN Architecture
   ───────────────────────────────────────────── */
export function ApnArchitectureDiagram() {
  const layers = [
    { name: "端末・デバイス", nameJaShort: "端末層", nameEn: "Devices & terminals", nameEnShort: "Device layer", desc: "光電融合チップ搭載端末・サーバー", descEn: "Servers and devices with photonics-electronics fusion chips" },
    { name: "アクセスネットワーク", nameJaShort: "アクセス網", nameEn: "Access network", nameEnShort: "Access", desc: "FTTH・基地局からの光接続", descEn: "Optical links from FTTH and base stations" },
    { name: "メトロネットワーク", nameJaShort: "都市網", nameEn: "Metro network", nameEnShort: "Metro", desc: "都市内光波長パス", descEn: "Intra-city optical wavelength paths" },
    { name: "コアネットワーク", nameJaShort: "基幹網", nameEn: "Core network", nameEnShort: "Core", desc: "長距離光波長パス（エンド・ツー・エンド）", descEn: "Long-haul end-to-end optical wavelength paths" },
    { name: "データセンター", nameJaShort: "DC層", nameEn: "Data center", nameEnShort: "DC layer", desc: "光電融合スイッチ・GPUクラスタ", descEn: "Photonics-electronics fusion switches and GPU clusters" },
  ];

  return (
    <DiagramCard labelJa="APN アーキテクチャ — エンド・ツー・エンド光通信" labelEn="APN architecture — end-to-end optical networking">
      <div className="space-y-1.5 mt-3">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="relative flex items-center gap-4 p-4 rounded-xl border border-foreground/[0.04] bg-foreground/[0.01]"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-foreground/50 bg-foreground/[0.04] flex-shrink-0 tabular-nums">
              {i + 1}
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-foreground/75"><T ja={layer.name} en={layer.nameEn} /></div>
              <div className="text-[10px] text-foreground/25 font-medium tracking-wide"><T ja={layer.nameJaShort} en={layer.nameEnShort} /></div>
              <div className="mt-0.5 text-[11px] text-foreground/40"><T ja={layer.desc} en={layer.descEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3.5 rounded-xl bg-[#3b82f6]/[0.04] border border-[#3b82f6]/[0.08]">
        <div className="text-[10px] text-[#3b82f6]/50 font-semibold"><T ja="従来との違い" en="What's different" /></div>
        <div className="text-[10px] text-foreground/40 mt-1">
          <T ja="従来：光→電気→光→電気…と変換を繰り返す（OEO変換）。APN：端末〜データセンターまで一貫して光信号のまま伝送。" en="Conventional: repeated optical-electrical-optical (OEO) conversions. APN: signals stay in the optical domain all the way from device to data center." />
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   光電融合デバイス
   ───────────────────────────────────────────── */
export function PhotonicConvergenceDiagram() {
  const generations = [
    { name: "PEC-1", target: "データセンター間", targetEn: "Between data centers", desc: "光トランシーバーの進化", descEn: "Advanced optical transceivers", period: "IOWN 1.0（2023〜）", periodEn: "IOWN 1.0 (2023–)" },
    { name: "PEC-2", target: "ボード間接続", targetEn: "Board-to-board", desc: "光電融合スイッチ・CPO", descEn: "Photonics-electronics fusion switches / CPO", period: "IOWN 2.0（2026〜）", periodEn: "IOWN 2.0 (2026–)" },
    { name: "PEC-3", target: "パッケージ間接続", targetEn: "Package-to-package", desc: "光チップレット", descEn: "Optical chiplets", period: "IOWN 3.0（2028〜）", periodEn: "IOWN 3.0 (2028–)" },
    { name: "PEC-4", target: "ダイ間接続", targetEn: "Die-to-die", desc: "光電融合プロセッサ", descEn: "Photonics-electronics fusion processors", period: "IOWN 4.0（2030〜）", periodEn: "IOWN 4.0 (2030–)" },
  ];

  return (
    <DiagramCard labelJa="光電融合デバイスの進化ロードマップ" labelEn="Roadmap for photonics-electronics fusion devices">
      {/* Desktop */}
      <div className="hidden sm:flex items-start gap-0 mt-3 overflow-x-auto pb-2">
        {generations.map((gen, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[130px]">
              <div className="w-12 h-12 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center text-[12px] font-bold tabular-nums text-foreground/50">
                {gen.name}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-foreground/60 text-center leading-tight">
                <T ja={gen.target} en={gen.targetEn} />
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/30 text-center leading-tight">
                <T ja={gen.desc} en={gen.descEn} />
              </div>
              <div className="mt-1 text-[8px] text-[#3b82f6]/50 font-medium text-center">
                <T ja={gen.period} en={gen.periodEn} />
              </div>
            </div>
            {i < generations.length - 1 && (
              <div className="mt-5 mx-1 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="sm:hidden space-y-0 mt-3">
        {generations.map((gen, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2">
              <div className="w-10 h-10 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/50 flex-shrink-0">
                {gen.name}
              </div>
              <div>
                <div className="text-[11px] font-semibold text-foreground/60"><T ja={gen.target} en={gen.targetEn} /></div>
                <div className="text-[10px] text-foreground/30"><T ja={gen.desc} en={gen.descEn} /></div>
                <div className="text-[8px] text-[#3b82f6]/50 font-medium mt-0.5"><T ja={gen.period} en={gen.periodEn} /></div>
              </div>
            </div>
            {i < generations.length - 1 && (
              <div className="ml-4.5 h-3 border-l border-foreground/[0.06]" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard value="102.4" labelJa="Tbps 容量" labelEn="Tbps capacity" subJa="IOWN 2.0 スイッチ" subEn="IOWN 2.0 switch" />
        <StatCard value="50%" labelJa="消費電力削減" labelEn="Power reduction" subJa="スイッチ単体" subEn="Switch alone" />
        <StatCard value="1/8" labelJa="消費電力" labelEn="Power consumption" subJa="プロトタイプ実証" subEn="Prototype demonstration" />
        <StatCard value="180+" labelJa="参画組織" labelEn="Participating orgs" subJa="IOWN GF 加盟" subEn="IOWN GF members" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   DTC Concept
   ───────────────────────────────────────────── */
export function DtcConceptDiagram() {
  const realItems: { ja: string; en: string }[] = [
    { ja: "人間", en: "People" },
    { ja: "モノ（IoT）", en: "Things (IoT)" },
    { ja: "都市インフラ", en: "Urban infrastructure" },
    { ja: "自然環境", en: "Natural environment" },
  ];
  const twins = [
    { label: "モノのツイン", labelEn: "Thing twins", desc: "機器・設備の精密デジタル複製", descEn: "Precise digital replicas of equipment and facilities" },
    { label: "ヒトのツイン", labelEn: "Human twins", desc: "もう一人の自分 — 自律的デジタル分身", descEn: "Another self — an autonomous digital alter ego" },
    { label: "社会のツイン", labelEn: "Society twins", desc: "都市・経済・交通のシミュレーション", descEn: "Simulations of cities, economies and transportation" },
  ];
  const compItems: { ja: string; en: string }[] = [
    { ja: "未来予測", en: "Future prediction" },
    { ja: "もしも分析", en: "What-if analysis" },
    { ja: "多世界シミュレーション", en: "Multi-world simulation" },
    { ja: "フィードバック", en: "Feedback" },
  ];

  return (
    <DiagramCard labelJa="デジタルツインコンピューティング コンセプト" labelEn="Digital Twin Computing concept">
      <div className="flex flex-col items-center mt-3">
        {/* Real world */}
        <div className="w-full p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
          <div className="text-[11px] font-semibold text-foreground/50 mb-2"><T ja="現実世界（フィジカル空間）" en="Real world (physical space)" /></div>
          <div className="flex flex-wrap gap-2">
            {realItems.map((item) => (
              <span key={item.ja} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
                <T ja={item.ja} en={item.en} />
              </span>
            ))}
          </div>
        </div>
        <div className="h-4 flex flex-col items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15 rotate-90"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        {/* Digital twin layer */}
        <div className="w-full p-4 rounded-xl bg-[#3b82f6]/[0.03] border border-[#3b82f6]/[0.08]">
          <div className="text-[11px] font-semibold text-[#3b82f6]/50 mb-2"><T ja="デジタルツイン層" en="Digital twin layer" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {twins.map((twin) => (
              <div key={twin.label} className="p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
                <div className="text-[10px] font-semibold text-foreground/55"><T ja={twin.label} en={twin.labelEn} /></div>
                <div className="text-[9px] text-foreground/30 mt-0.5"><T ja={twin.desc} en={twin.descEn} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-4 flex flex-col items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15 rotate-90"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        {/* Computation */}
        <div className="w-full p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
          <div className="text-[11px] font-semibold text-foreground/50 mb-2"><T ja="計算・予測・最適化" en="Computation, prediction, optimization" /></div>
          <div className="flex flex-wrap gap-2">
            {compItems.map((item) => (
              <span key={item.ja} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
                <T ja={item.ja} en={item.en} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center font-medium">
        <T ja="現実世界のデジタルツインを構築し、掛け合わせることで高度な未来予測を実現" en="Building and combining digital twins of the real world enables advanced future prediction" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   IOWN Roadmap
   ───────────────────────────────────────────── */
export function IownRoadmapDiagram() {
  const milestones = [
    { year: "2019", event: "IOWN構想発表", eventEn: "IOWN initiative announced", detail: "NTTが基本構想を公表", detailEn: "NTT unveils the core concept" },
    { year: "2020", event: "IOWN GF設立", eventEn: "IOWN GF founded", detail: "Intel・ソニーと共同設立", detailEn: "Co-founded with Intel and Sony" },
    { year: "2023", event: "APN IOWN 1.0", eventEn: "APN IOWN 1.0", detail: "NTT東西が商用サービス開始", detailEn: "NTT East and West launch commercial service" },
    { year: "2025", event: "大阪・関西万博", eventEn: "Osaka-Kansai Expo", detail: "IOWN 2.0プロトタイプ実証", detailEn: "IOWN 2.0 prototype demonstrated" },
    { year: "2026", event: "IOWN 2.0商用化", eventEn: "IOWN 2.0 commercialization", detail: "光電融合スイッチ製品化", detailEn: "Photonics-electronics fusion switches go to market" },
    { year: "2028", event: "IOWN 3.0", eventEn: "IOWN 3.0", detail: "光チップレット実用化", detailEn: "Optical chiplets enter practical use" },
    { year: "2030", event: "IOWN 4.0", eventEn: "IOWN 4.0", detail: "光電融合プロセッサ・目標達成", detailEn: "Photonics-electronics fusion processors; targets achieved" },
  ];

  return (
    <DiagramCard labelJa="IOWN 実用化ロードマップ" labelEn="IOWN deployment roadmap">
      <div className="space-y-0 mt-3">
        {milestones.map((m, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2.5">
              <div className="w-14 text-right flex-shrink-0">
                <span className="text-[13px] font-bold tabular-nums text-foreground/55">{m.year}</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/[0.08] border-2 border-foreground/[0.15] flex-shrink-0" />
              <div>
                <div className="text-[12px] font-semibold text-foreground/65"><T ja={m.event} en={m.eventEn} /></div>
                <div className="text-[10px] text-foreground/35"><T ja={m.detail} en={m.detailEn} /></div>
              </div>
            </div>
            {i < milestones.length - 1 && (
              <div className="ml-[68px] h-3 border-l border-dashed border-foreground/[0.08]" />
            )}
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   IOWN vs 従来ネットワーク比較
   ───────────────────────────────────────────── */
export function IownComparisonDiagram() {
  const specs = [
    { item: "電力消費", itemEn: "Power consumption", current: "1（基準）", currentEn: "1 (baseline)", iown: "1/100", iownEn: "1/100", note: "光電融合による大幅削減", noteEn: "Major cut via photonics-electronics fusion" },
    { item: "伝送容量", itemEn: "Transmission capacity", current: "1（基準）", currentEn: "1 (baseline)", iown: "125倍", iownEn: "125×", note: "光波長多重の活用", noteEn: "Leveraging optical wavelength multiplexing" },
    { item: "エンドツーエンド遅延", itemEn: "End-to-end latency", current: "1（基準）", currentEn: "1 (baseline)", iown: "1/200", iownEn: "1/200", note: "OEO変換の排除", noteEn: "Eliminates OEO conversion" },
    { item: "信号変換", itemEn: "Signal conversion", current: "光→電気→光（複数回）", currentEn: "Optical↔electrical repeated", iown: "光のみ（End-to-End）", iownEn: "Optical only (end-to-end)", note: "APN技術", noteEn: "APN technology" },
    { item: "ネットワーク制御", itemEn: "Network control", current: "固定的・手動設定", currentEn: "Static, manually configured", iown: "AI自律最適化", iownEn: "AI-driven autonomous optimization", note: "CF技術", noteEn: "CF technology" },
  ];

  return (
    <DiagramCard labelJa="従来ネットワーク vs IOWN" labelEn="Legacy networks vs IOWN">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 first:pl-0 tracking-wide"><T ja="項目" en="Item" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="従来" en="Legacy" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="IOWN" en="IOWN" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="備考" en="Notes" /></th>
            </tr>
          </thead>
          <tbody>
            {specs.map((s, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pr-3 first:pl-0">
                  <span className="text-[12px] font-semibold text-foreground/60"><T ja={s.item} en={s.itemEn} /></span>
                </td>
                <td className="py-3 px-3 text-[11px] text-foreground/40"><T ja={s.current} en={s.currentEn} /></td>
                <td className="py-3 px-3 text-[11px] text-foreground/55 font-semibold"><T ja={s.iown} en={s.iownEn} /></td>
                <td className="py-3 pl-3 text-[10px] text-foreground/30"><T ja={s.note} en={s.noteEn} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/25">
        <T ja="* 目標値は2030年の達成を想定（NTT IOWN構想）" en="* Targets assumed for 2030 (NTT IOWN initiative)" />
      </div>
    </DiagramCard>
  );
}
