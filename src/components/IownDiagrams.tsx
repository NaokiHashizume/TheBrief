"use client";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${label}`}>
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
          {label}
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

/* ─── Small stat card ─── */
function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">{label}</div>
      {sub && (
        <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>
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
      desc: "端末〜ネットワーク全体を光で接続",
      metric: "伝送容量 125倍",
    },
    {
      name: "CF",
      nameJa: "コグニティブ・ファウンデーション",
      desc: "ICTリソースの統合管理・最適化",
      metric: "運用の自律化",
    },
    {
      name: "DTC",
      nameJa: "デジタルツインコンピューティング",
      desc: "現実世界の高精度デジタル再現",
      metric: "未来予測・試行",
    },
  ];

  return (
    <DiagramCard label="IOWN構想 — 3つの技術要素">
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
              <div className="text-[10px] text-foreground/45 font-semibold mt-1">{p.nameJa}</div>
              <div className="text-[10px] text-foreground/35 mt-1.5">{p.desc}</div>
              <div className="mt-2 px-2 py-1 rounded-md bg-[#3b82f6]/[0.06] text-[9px] text-[#3b82f6]/60 font-semibold inline-block">
                {p.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <StatCard value="1/100" label="電力消費" sub="2030年目標" />
        <StatCard value="125倍" label="伝送容量" sub="2030年目標" />
        <StatCard value="1/200" label="遅延" sub="2030年目標" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   APN Architecture
   ───────────────────────────────────────────── */
export function ApnArchitectureDiagram() {
  const layers = [
    { name: "端末・デバイス", nameEn: "Terminals", desc: "光電融合チップ搭載端末・サーバー" },
    { name: "アクセスネットワーク", nameEn: "Access Network", desc: "FTTH・基地局からの光接続" },
    { name: "メトロネットワーク", nameEn: "Metro Network", desc: "都市内光波長パス" },
    { name: "コアネットワーク", nameEn: "Core Network", desc: "長距離光波長パス（End-to-End）" },
    { name: "データセンター", nameEn: "Data Center", desc: "光電融合スイッチ・GPUクラスタ" },
  ];

  return (
    <DiagramCard label="APN アーキテクチャ — エンド・ツー・エンド光通信">
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
              <div className="text-[13px] font-semibold text-foreground/75">{layer.name}</div>
              <div className="text-[10px] text-foreground/25 font-medium tracking-wide">{layer.nameEn}</div>
              <div className="mt-0.5 text-[11px] text-foreground/40">{layer.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3.5 rounded-xl bg-[#3b82f6]/[0.04] border border-[#3b82f6]/[0.08]">
        <div className="text-[10px] text-[#3b82f6]/50 font-semibold">従来との違い</div>
        <div className="text-[10px] text-foreground/40 mt-1">
          従来：光→電気→光→電気…と変換を繰り返す（OEO変換）。APN：端末〜データセンターまで一貫して光信号のまま伝送。
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
    { name: "PEC-1", target: "データセンター間", desc: "光トランシーバーの進化", period: "IOWN 1.0（2023〜）" },
    { name: "PEC-2", target: "ボード間接続", desc: "光電融合スイッチ・CPO", period: "IOWN 2.0（2026〜）" },
    { name: "PEC-3", target: "パッケージ間接続", desc: "光チップレット", period: "IOWN 3.0（2028〜）" },
    { name: "PEC-4", target: "ダイ間接続", desc: "光電融合プロセッサ", period: "IOWN 4.0（2030〜）" },
  ];

  return (
    <DiagramCard label="光電融合デバイスの進化ロードマップ">
      {/* Desktop */}
      <div className="hidden sm:flex items-start gap-0 mt-3 overflow-x-auto pb-2">
        {generations.map((gen, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[130px]">
              <div className="w-12 h-12 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center text-[12px] font-bold tabular-nums text-foreground/50">
                {gen.name}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-foreground/60 text-center leading-tight">
                {gen.target}
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/30 text-center leading-tight">
                {gen.desc}
              </div>
              <div className="mt-1 text-[8px] text-[#3b82f6]/50 font-medium text-center">
                {gen.period}
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
                <div className="text-[11px] font-semibold text-foreground/60">{gen.target}</div>
                <div className="text-[10px] text-foreground/30">{gen.desc}</div>
                <div className="text-[8px] text-[#3b82f6]/50 font-medium mt-0.5">{gen.period}</div>
              </div>
            </div>
            {i < generations.length - 1 && (
              <div className="ml-4.5 h-3 border-l border-foreground/[0.06]" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard value="102.4" label="Tbps 容量" sub="IOWN 2.0 スイッチ" />
        <StatCard value="50%" label="消費電力削減" sub="スイッチ単体" />
        <StatCard value="1/8" label="消費電力" sub="プロトタイプ実証" />
        <StatCard value="180+" label="参画組織" sub="IOWN GF 加盟" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   DTC Concept
   ───────────────────────────────────────────── */
export function DtcConceptDiagram() {
  return (
    <DiagramCard label="Digital Twin Computing コンセプト">
      <div className="flex flex-col items-center mt-3">
        {/* Real world */}
        <div className="w-full p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
          <div className="text-[11px] font-semibold text-foreground/50 mb-2">現実世界（Physical World）</div>
          <div className="flex flex-wrap gap-2">
            {["人間", "モノ（IoT）", "都市インフラ", "自然環境"].map((item) => (
              <span key={item} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="h-4 flex flex-col items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15 rotate-90"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        {/* Digital twin layer */}
        <div className="w-full p-4 rounded-xl bg-[#3b82f6]/[0.03] border border-[#3b82f6]/[0.08]">
          <div className="text-[11px] font-semibold text-[#3b82f6]/50 mb-2">デジタルツイン層</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { label: "モノのツイン", desc: "機器・設備の精密デジタル複製" },
              { label: "ヒトのツイン", desc: "Another Me — 自律的デジタル分身" },
              { label: "社会のツイン", desc: "都市・経済・交通のシミュレーション" },
            ].map((twin) => (
              <div key={twin.label} className="p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
                <div className="text-[10px] font-semibold text-foreground/55">{twin.label}</div>
                <div className="text-[9px] text-foreground/30 mt-0.5">{twin.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-4 flex flex-col items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15 rotate-90"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        {/* Computation */}
        <div className="w-full p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.05]">
          <div className="text-[11px] font-semibold text-foreground/50 mb-2">計算・予測・最適化</div>
          <div className="flex flex-wrap gap-2">
            {["未来予測", "What-If分析", "多世界シミュレーション", "フィードバック"].map((item) => (
              <span key={item} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center font-medium">
        現実世界のデジタルツインを構築し、掛け合わせることで高度な未来予測を実現
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   IOWN Roadmap
   ───────────────────────────────────────────── */
export function IownRoadmapDiagram() {
  const milestones = [
    { year: "2019", event: "IOWN構想発表", detail: "NTTが基本構想を公表" },
    { year: "2020", event: "IOWN GF設立", detail: "Intel・ソニーと共同設立" },
    { year: "2023", event: "APN IOWN 1.0", detail: "NTT東西が商用サービス開始" },
    { year: "2025", event: "大阪・関西万博", detail: "IOWN 2.0プロトタイプ実証" },
    { year: "2026", event: "IOWN 2.0商用化", detail: "光電融合スイッチ製品化" },
    { year: "2028", event: "IOWN 3.0", detail: "光チップレット実用化" },
    { year: "2030", event: "IOWN 4.0", detail: "光電融合プロセッサ・目標達成" },
  ];

  return (
    <DiagramCard label="IOWN 実用化ロードマップ">
      <div className="space-y-0 mt-3">
        {milestones.map((m, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2.5">
              <div className="w-14 text-right flex-shrink-0">
                <span className="text-[13px] font-bold tabular-nums text-foreground/55">{m.year}</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/[0.08] border-2 border-foreground/[0.15] flex-shrink-0" />
              <div>
                <div className="text-[12px] font-semibold text-foreground/65">{m.event}</div>
                <div className="text-[10px] text-foreground/35">{m.detail}</div>
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
    { item: "電力消費", current: "1（基準）", iown: "1/100", note: "光電融合による大幅削減" },
    { item: "伝送容量", current: "1（基準）", iown: "125倍", note: "光波長多重の活用" },
    { item: "エンドツーエンド遅延", current: "1（基準）", iown: "1/200", note: "OEO変換の排除" },
    { item: "信号変換", current: "光→電気→光（複数回）", iown: "光のみ（End-to-End）", note: "APN技術" },
    { item: "ネットワーク制御", current: "固定的・手動設定", iown: "AI自律最適化", note: "CF技術" },
  ];

  return (
    <DiagramCard label="従来ネットワーク vs IOWN">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              {["項目", "従来", "IOWN", "備考"].map((h) => (
                <th key={h} className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 first:pl-0 tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map((s, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pr-3 first:pl-0">
                  <span className="text-[12px] font-semibold text-foreground/60">{s.item}</span>
                </td>
                <td className="py-3 px-3 text-[11px] text-foreground/40">{s.current}</td>
                <td className="py-3 px-3 text-[11px] text-foreground/55 font-semibold">{s.iown}</td>
                <td className="py-3 pl-3 text-[10px] text-foreground/30">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/25">
        * 目標値は2030年の達成を想定（NTT IOWN構想）
      </div>
    </DiagramCard>
  );
}
