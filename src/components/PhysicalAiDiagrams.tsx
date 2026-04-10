import React from "react";

const ACCENT = "#8b5cf6";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const AMBER = "#d97706";
const PINK = "#ec4899";
const GRAY = "#6b7280";

function DiagramCard({
  title,
  children,
  accent = ACCENT,
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div
      role="img"
      aria-label={title}
      className="my-8 rounded-xl border border-brief-border bg-brief-card overflow-hidden"
    >
      <div
        className="px-5 py-2.5 border-b border-brief-border"
        style={{ borderLeftWidth: 3, borderLeftColor: accent }}
      >
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: accent }}>
          {title}
        </p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/* ── 1. Overview: 従来AI vs フィジカルAI ── */
export function PhysicalAiOverviewDiagram() {
  const stages = [
    {
      label: "知覚AI",
      labelEn: "Perception AI",
      year: "〜2018",
      desc: "画像・音声・テキストを識別",
      color: BLUE,
      icon: "👁",
    },
    {
      label: "生成AI",
      labelEn: "Generative AI",
      year: "2022〜",
      desc: "文章・画像・コードを生成",
      color: ACCENT,
      icon: "💬",
    },
    {
      label: "フィジカルAI",
      labelEn: "Physical AI",
      year: "2025〜",
      desc: "物理法則を理解し現実世界で行動",
      color: GREEN,
      icon: "🤖",
    },
  ];

  return (
    <DiagramCard title="AIの3段階進化" accent={ACCENT}>
      <div className="flex flex-col gap-3">
        {stages.map((s, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ backgroundColor: `${s.color}18` }}
            >
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[14px] font-bold text-foreground">{s.label}</span>
                <span className="text-[10px] text-foreground/40 font-mono">{s.labelEn}</span>
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: `${s.color}15`, color: s.color }}
                >
                  {s.year}
                </span>
              </div>
              <p className="text-[12px] text-foreground/65 mt-0.5">{s.desc}</p>
            </div>
            {i < stages.length - 1 && (
              <div className="absolute left-[28px] mt-11 h-3 w-px bg-foreground/10" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05]">
        <p className="text-[11px] text-foreground/55 leading-relaxed">
          <span className="font-semibold" style={{ color: ACCENT }}>Jensen Huang（NVIDIA CEO）</span>：
          「ロボティクスにとってのChatGPTの瞬間がついに来た。フィジカルAIは次の数兆ドル産業だ」
          （CES 2026、2026年1月）
        </p>
      </div>
    </DiagramCard>
  );
}

/* ── 2. Market Size ── */
export function PhysicalAiMarketDiagram() {
  const stats = [
    {
      value: "$1.5B",
      label: "フィジカルAI市場（2026年）",
      sub: "→ 2032年に$15.24B（CAGR 47.2%）",
      color: ACCENT,
    },
    {
      value: "$2.92B",
      label: "ヒューマノイドロボット市場（2025年）",
      sub: "→ 2030年に$15.26B（CAGR 39.2%）",
      color: BLUE,
    },
    {
      value: "300M台",
      label: "ヒューマノイド導入予測（2050年）",
      sub: "UBS予測。2035年時点で200万台",
      color: GREEN,
    },
    {
      value: "47.2%",
      label: "年平均成長率（CAGR）",
      sub: "Physical AI市場 2026〜2032年",
      color: AMBER,
    },
  ];

  return (
    <DiagramCard title="フィジカルAI 市場規模と成長予測" accent={GREEN}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-brief-border"
            style={{ borderLeftWidth: 3, borderLeftColor: s.color }}
          >
            <div className="text-[24px] font-bold font-mono" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-[12px] font-semibold text-foreground/80 mt-0.5">{s.label}</div>
            <div className="text-[10px] text-foreground/45 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-foreground/35 mt-3">
        出典: MarketsandMarkets / Fortune Business Insights / UBS（2025-2026）
      </p>
    </DiagramCard>
  );
}

/* ── 3. NVIDIA Stack ── */
export function PhysicalAiNvidiaDiagram() {
  const layers = [
    {
      layer: "Deploy",
      name: "Jetson T4000（Blackwell）",
      desc: "エッジ推論。前世代比4倍の性能、70W以内",
      color: GREEN,
    },
    {
      layer: "Act",
      name: "GR00T N1.7 / N2",
      desc: "ヒューマノイド向けVLA（視覚言語行動）モデル。実環境での商用展開可能",
      color: ACCENT,
    },
    {
      layer: "Reason",
      name: "Cosmos Reason 2",
      desc: "物理世界を「見て・理解し・行動する」視覚言語モデル",
      color: BLUE,
    },
    {
      layer: "Simulate",
      name: "Isaac Sim / Cosmos Predict",
      desc: "合成データ生成。物理シミュレーションで学習データを無限生成",
      color: AMBER,
    },
  ];

  return (
    <DiagramCard title="NVIDIAのフィジカルAIスタック（CES 2026発表）" accent={ACCENT}>
      <div className="flex flex-col gap-2">
        {layers.map((l, i) => (
          <div key={i} className="flex gap-3 items-stretch">
            <div
              className="w-16 flex-shrink-0 flex items-center justify-center rounded-lg text-[9px] font-bold tracking-widest"
              style={{ backgroundColor: `${l.color}15`, color: l.color }}
            >
              {l.layer}
            </div>
            <div className="flex-1 p-3 rounded-lg bg-foreground/[0.025] border border-foreground/[0.05]">
              <div className="text-[12px] font-bold text-foreground">{l.name}</div>
              <div className="text-[11px] text-foreground/60 mt-0.5">{l.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-foreground/40 mt-3 text-center">
        ↑ ロボット・自動運転・製造ライン向けに統合提供。TechCrunch：「ロボティクスのAndroidを目指す」
      </p>
    </DiagramCard>
  );
}

/* ── 4. Players Comparison ── */
export function PhysicalAiPlayersDiagram() {
  const players = [
    {
      name: "Tesla Optimus",
      org: "Tesla",
      price: "$2〜3万",
      status: "2025年工場内試験（5,000台）",
      strength: "量産コスト・垂直統合",
      color: "#ef4444",
    },
    {
      name: "Figure 02",
      org: "Figure AI",
      price: "未公表",
      status: "BMW工場で試験中",
      strength: "OpenAI連携・汎用動作",
      color: ACCENT,
    },
    {
      name: "Atlas（HD版）",
      org: "Boston Dynamics",
      price: "$14〜15万",
      status: "Hyundai工場でパイロット",
      strength: "動的バランス・実績",
      color: BLUE,
    },
    {
      name: "Unitree H1/G1",
      org: "Unitree（中国）",
      price: "$1.6〜2万",
      status: "市販・研究機関向け",
      strength: "コスト競争力・オープンAPI",
      color: GREEN,
    },
    {
      name: "MOTOMAN NEXT",
      org: "安川電機",
      price: "産業用価格帯",
      status: "NVIDIA連携・量産準備中",
      strength: "製造精度・日本市場",
      color: AMBER,
    },
  ];

  return (
    <DiagramCard title="主要ヒューマノイドロボット比較（2026年）" accent={BLUE}>
      <div className="flex flex-col gap-2">
        {players.map((p, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-brief-border flex items-start gap-3"
          >
            <div
              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: p.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[13px] font-bold text-foreground">{p.name}</span>
                <span className="text-[10px] text-foreground/40">{p.org}</span>
                <span
                  className="text-[10px] font-mono font-semibold px-1.5 rounded"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {p.price}
                </span>
              </div>
              <div className="text-[11px] text-foreground/55 mt-0.5">{p.status}</div>
              <div className="text-[10px] text-foreground/40 mt-0.5">強み: {p.strength}</div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ── 5. Japan Strengths ── */
export function PhysicalAiJapanDiagram() {
  const strengths = [
    { item: "産業用ロボット市場シェア", detail: "ファナック・安川が世界首位争い", icon: "🏭" },
    { item: "センサー・精密制御", detail: "高精度ハードウェアの製造実績", icon: "🔬" },
    { item: "「手指」の精度", detail: "組み立て・溶接・検査の繊細動作", icon: "🖐" },
    { item: "現場データの蓄積", detail: "製造業の高品質センサーデータ", icon: "📊" },
  ];
  const challenges = [
    { item: "AI基盤の依存", detail: "Cosmos/GR00TなどNVIDIAに学習基盤を掌握される", icon: "⚠️" },
    { item: "ソフトウェア人材不足", detail: "VLAモデル開発の専門家が少ない", icon: "👨‍💻" },
    { item: "サービス転換の遅れ", detail: "「ハードを売って終わり」モデルからの脱却", icon: "🔄" },
  ];

  return (
    <DiagramCard title="日本の強みと課題 — フィジカルAI時代" accent={AMBER}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="text-[10px] font-bold tracking-widest text-green-600 dark:text-green-400 mb-2">
            ✅ 強み
          </div>
          <div className="flex flex-col gap-2">
            {strengths.map((s, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-[14px]">{s.icon}</span>
                <div>
                  <div className="text-[12px] font-semibold text-foreground">{s.item}</div>
                  <div className="text-[10px] text-foreground/50">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-widest text-amber-600 dark:text-amber-400 mb-2">
            ⚠️ 課題
          </div>
          <div className="flex flex-col gap-2">
            {challenges.map((c, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-[14px]">{c.icon}</span>
                <div>
                  <div className="text-[12px] font-semibold text-foreground">{c.item}</div>
                  <div className="text-[10px] text-foreground/50">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg border border-brief-border bg-foreground/[0.02]">
        <p className="text-[11px] text-foreground/60 leading-relaxed">
          NRI分析：日本企業の次の一手は「部品サプライヤー」から<span className="font-semibold text-foreground/80">「フィジカルプラットフォーム」</span>への昇華。
          複数のAI基盤に対してシームレスな物理制御を提供し、標準アーキテクチャに組み込まれることが鍵。
        </p>
      </div>
    </DiagramCard>
  );
}

/* ── 6. Applications by Industry ── */
export function PhysicalAiApplicationsDiagram() {
  const industries = [
    {
      name: "製造・工場",
      examples: "自律組み立て / 品質検査 / 協働ロボット",
      status: "実装段階",
      statusColor: GREEN,
      icon: "🏭",
    },
    {
      name: "物流・倉庫",
      examples: "ピッキング / 搬送 / 仕分け",
      status: "大規模展開中",
      statusColor: GREEN,
      icon: "📦",
    },
    {
      name: "自動運転",
      examples: "ロボタクシー / 自律トラック / ラストワンマイル",
      status: "商用化開始",
      statusColor: BLUE,
      icon: "🚗",
    },
    {
      name: "医療・介護",
      examples: "手術支援 / 介護補助 / リハビリ",
      status: "試験・承認段階",
      statusColor: AMBER,
      icon: "🏥",
    },
    {
      name: "建設・インフラ",
      examples: "3Dプリント建築 / 点検ドローン / 危険作業",
      status: "実証実験",
      statusColor: AMBER,
      icon: "🏗",
    },
    {
      name: "家庭・消費",
      examples: "家事ロボット / 見守り / パーソナルアシスト",
      status: "2027〜実用化",
      statusColor: PINK,
      icon: "🏠",
    },
  ];

  return (
    <DiagramCard title="産業別フィジカルAI活用シナリオ（2026年時点）" accent={GREEN}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {industries.map((ind, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-brief-border"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[16px]">{ind.icon}</span>
              <span className="text-[12px] font-bold text-foreground">{ind.name}</span>
              <span
                className="ml-auto text-[9px] font-semibold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: `${ind.statusColor}15`, color: ind.statusColor }}
              >
                {ind.status}
              </span>
            </div>
            <p className="text-[11px] text-foreground/55">{ind.examples}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-foreground/35 mt-3">
        参考: Deloitte Tech Trends 2026 / Amazon（100万台ロボット展開済み）/ Waymo（1,000万件以上のロボタクシー配車）
      </p>
    </DiagramCard>
  );
}
