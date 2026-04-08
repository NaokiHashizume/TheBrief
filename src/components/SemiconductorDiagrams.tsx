"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Semiconductor Market Scale Stats Banner
   ───────────────────────────────────────────── */
export function SemiMarketScaleDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">$792B</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="世界市場規模" en="Global market size" />
        </div>
        <div className="text-[9px] text-foreground/35">
          <T ja="2025年（SIA）+25.6%" en="2025 (SIA) +25.6%" />
        </div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#8b5cf6]">
          <T ja="1兆個+" en="1T+ units" />
        </div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="年間出荷チップ数" en="Annual chip shipments" />
        </div>
        <div className="text-[9px] text-foreground/35">
          <T ja="2024年推計" en="2024 estimate" />
        </div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">2nm</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="最先端プロセスノード" en="Leading-edge process node" />
        </div>
        <div className="text-[9px] text-foreground/35">
          <T ja="2025年量産開始" en="Volume production begins 2025" />
        </div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#10b981]">
          <T ja="2,080億" en="208B" />
        </div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="最新チップのトランジスタ数" en="Transistors in latest chip" />
        </div>
        <div className="text-[9px] text-foreground/35">
          <T ja="NVIDIA B200（2ダイ構成）" en="NVIDIA B200 (2-die design)" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Conductor / Semiconductor / Insulator Comparison
   ───────────────────────────────────────────── */
export function ConductorComparisonDiagram() {
  const materials = [
    {
      name: "導体",
      nameEn: "Conductor",
      examples: "銅、金、アルミニウム",
      examplesEn: "Copper, gold, aluminum",
      bandGap: "0 eV",
      desc: "電気をよく通す。自由電子が豊富。",
      descEn: "Conducts electricity well. Abundant free electrons.",
      color: "#f59e0b",
      level: 95,
    },
    {
      name: "半導体",
      nameEn: "Semiconductor",
      examples: "シリコン、ゲルマニウム",
      examplesEn: "Silicon, germanium",
      bandGap: "0.1〜4 eV",
      desc: "条件次第で電気を通したり通さなかったりする。",
      descEn: "Conducts or blocks electricity depending on conditions.",
      color: "#3b82f6",
      level: 50,
    },
    {
      name: "絶縁体",
      nameEn: "Insulator",
      examples: "ガラス、ゴム、セラミック",
      examplesEn: "Glass, rubber, ceramics",
      bandGap: "4 eV 以上",
      bandGapEn: "4 eV or more",
      desc: "電気をほとんど通さない。",
      descEn: "Barely conducts electricity.",
      color: "#ef4444",
      level: 5,
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="導体・半導体・絶縁体の比較" en="Conductor, semiconductor, and insulator comparison" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {materials.map((mat, i) => (
          <div
            key={i}
            className="p-4 rounded-lg relative overflow-hidden"
            style={{
              backgroundColor: `${mat.color}08`,
              borderLeft: `3px solid ${mat.color}`,
            }}
          >
            <div className="text-sm font-bold" style={{ color: mat.color }}>
              <T ja={mat.name} en={mat.nameEn} />
            </div>
            <div className="text-[9px] text-foreground/40">
              <T ja={mat.name} en={mat.nameEn} />
            </div>
            <div className="mt-2 text-[11px] text-foreground/60">
              <T ja={mat.desc} en={mat.descEn} />
            </div>
            <div className="mt-2">
              <div className="text-[9px] text-foreground/40 mb-1">
                <T ja="導電性" en="Conductivity" />
              </div>
              <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${mat.level}%`,
                    backgroundColor: mat.color,
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[9px] text-foreground/45">
                <T ja="バンドギャップ:" en="Band gap:" /> <T ja={mat.bandGap} en={mat.bandGapEn ?? mat.bandGap} />
              </span>
            </div>
            <div className="mt-1 text-[9px] text-foreground/35">
              <T ja="例:" en="Examples:" /> <T ja={mat.examples} en={mat.examplesEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="バンドギャップ = 電子が伝導帯へ移動するために必要なエネルギー。半導体はこの値が「ちょうどいい」"
          en="Band gap = the energy needed for electrons to jump into the conduction band. For semiconductors, this value is 'just right.'"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   P-N Junction & Doping Diagram
   ───────────────────────────────────────────── */
export function PnJunctionDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="ドーピングと P-N 接合" en="Doping and the P-N junction" />
      </div>
      {/* Doping explanation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#ef4444]/8 border border-[#ef4444]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-[#ef4444] text-white text-[10px] font-bold flex items-center justify-center">
              P
            </div>
            <div className="text-sm font-bold text-[#ef4444]">
              <T ja="P型半導体" en="P-type semiconductor" />
            </div>
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            <T
              ja="シリコンにホウ素（B）などの3価元素を添加。電子の「穴」（正孔）がキャリアとなり、正の電荷が移動するように振る舞う。"
              en="Silicon is doped with a trivalent element such as boron (B). Electron 'holes' act as carriers, behaving as if positive charges are moving."
            />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-[9px] text-foreground/35">
              <T ja="キャリア:" en="Carriers:" />
            </span>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="w-4 h-4 rounded-full border-2 border-[#ef4444]/40 text-[8px] text-[#ef4444]/60 flex items-center justify-center"
              >
                +
              </span>
            ))}
            <span className="text-[9px] text-foreground/30 ml-1">
              <T ja="（正孔）" en="(holes)" />
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#3b82f6]/8 border border-[#3b82f6]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-[#3b82f6] text-white text-[10px] font-bold flex items-center justify-center">
              N
            </div>
            <div className="text-sm font-bold text-[#3b82f6]">
              <T ja="N型半導体" en="N-type semiconductor" />
            </div>
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            <T
              ja="シリコンにリン（P）などの5価元素を添加。余った電子が自由に動き回り、負の電荷のキャリアとなる。"
              en="Silicon is doped with a pentavalent element such as phosphorus (P). Surplus electrons move freely and act as negative-charge carriers."
            />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-[9px] text-foreground/35">
              <T ja="キャリア:" en="Carriers:" />
            </span>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="w-4 h-4 rounded-full bg-[#3b82f6]/20 text-[8px] text-[#3b82f6]/80 flex items-center justify-center font-bold"
              >
                e⁻
              </span>
            ))}
            <span className="text-[9px] text-foreground/30 ml-1">
              <T ja="（電子）" en="(electrons)" />
            </span>
          </div>
        </div>
      </div>
      {/* P-N Junction */}
      <div className="p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
        <div className="text-[10px] font-medium text-foreground/50 mb-2">
          <T ja="P-N接合（ダイオード）" en="P-N junction (diode)" />
        </div>
        <div className="flex items-stretch rounded-lg overflow-hidden h-16 sm:h-20">
          <div className="flex-1 bg-[#ef4444]/10 flex flex-col items-center justify-center border-r-2 border-dashed border-foreground/15">
            <div className="text-sm font-bold text-[#ef4444]">P</div>
            <div className="text-[8px] text-foreground/40">
              <T ja="正孔 → → →" en="holes → → →" />
            </div>
          </div>
          <div className="w-12 sm:w-16 bg-foreground/[0.06] flex flex-col items-center justify-center flex-shrink-0">
            <div className="text-[8px] font-bold text-foreground/50">
              <T ja="空乏層" en="Depletion layer" />
            </div>
            <div className="text-[7px] text-foreground/30">
              <T ja="電界" en="E-field" />
            </div>
          </div>
          <div className="flex-1 bg-[#3b82f6]/10 flex flex-col items-center justify-center border-l-2 border-dashed border-foreground/15">
            <div className="text-sm font-bold text-[#3b82f6]">N</div>
            <div className="text-[8px] text-foreground/40">
              <T ja="← ← ← 電子" en="← ← ← electrons" />
            </div>
          </div>
        </div>
        <div className="mt-2 text-[9px] text-foreground/40 text-center">
          <T
            ja="順方向バイアス（P→N）で電流が流れ、逆方向では流れない → 整流作用（ダイオード）"
            en="Current flows under forward bias (P→N) but not in reverse → rectifying action (diode)"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOSFET Transistor Diagram
   ───────────────────────────────────────────── */
export function TransistorDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="MOSFET トランジスタの構造と動作" en="MOSFET transistor structure and operation" />
      </div>
      {/* Transistor structure */}
      <div className="relative bg-foreground/[0.02] rounded-lg p-4 mb-4">
        <div className="flex flex-col items-center">
          {/* Gate */}
          <div className="px-8 py-2 bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded text-center mb-1">
            <div className="text-xs font-bold text-[#f59e0b]">
              <T ja="ゲート (G)" en="Gate (G)" />
            </div>
            <div className="text-[8px] text-foreground/40">
              <T ja="電圧で ON/OFF 制御" en="Voltage controls ON/OFF" />
            </div>
          </div>
          {/* Gate oxide */}
          <div className="w-32 h-3 bg-[#94a3b8]/20 border border-[#94a3b8]/30 flex items-center justify-center">
            <span className="text-[7px] text-foreground/40">
              <T ja="酸化膜 (SiO₂)" en="Oxide (SiO₂)" />
            </span>
          </div>
          {/* Channel area */}
          <div className="flex items-stretch w-full max-w-xs">
            <div className="flex-1 py-3 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-bl text-center">
              <div className="text-xs font-bold text-[#3b82f6]">
                <T ja="ソース (S)" en="Source (S)" />
              </div>
              <div className="text-[8px] text-foreground/35">
                <T ja="N型" en="N-type" />
              </div>
            </div>
            <div className="w-20 py-3 bg-[#ef4444]/8 border-y border-brief-border text-center">
              <div className="text-[9px] text-foreground/50">
                <T ja="チャネル" en="Channel" />
              </div>
              <div className="text-[7px] text-foreground/30">
                <T ja="P型基板" en="P-type substrate" />
              </div>
            </div>
            <div className="flex-1 py-3 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-br text-center">
              <div className="text-xs font-bold text-[#3b82f6]">
                <T ja="ドレイン (D)" en="Drain (D)" />
              </div>
              <div className="text-[8px] text-foreground/35">
                <T ja="N型" en="N-type" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ON/OFF states */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-[#10b981]/8 border border-[#10b981]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#10b981] text-white text-[9px] font-bold flex items-center justify-center">
              1
            </div>
            <div className="text-xs font-bold text-[#10b981]">
              <T ja="ON（導通）" en="ON (conducting)" />
            </div>
          </div>
          <div className="text-[10px] text-foreground/55">
            <T
              ja="ゲートに電圧を加えるとチャネルが形成され、ソース→ドレイン間に電流が流れる"
              en="Applying voltage to the gate forms a channel, letting current flow from source to drain"
            />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#ef4444]/8 border border-[#ef4444]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white text-[9px] font-bold flex items-center justify-center">
              0
            </div>
            <div className="text-xs font-bold text-[#ef4444]">
              <T ja="OFF（遮断）" en="OFF (cut off)" />
            </div>
          </div>
          <div className="text-[10px] text-foreground/55">
            <T
              ja="ゲート電圧がないとチャネルが形成されず、電流は流れない"
              en="Without gate voltage, no channel forms and no current flows"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="この ON/OFF が「1」と「0」に対応し、すべてのデジタル演算の基礎となる"
          en="This ON/OFF maps to '1' and '0' and forms the foundation of all digital computation"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Semiconductor Manufacturing Process Flow
   ───────────────────────────────────────────── */
export function ManufacturingProcessDiagram() {
  const steps = [
    {
      icon: "⛏",
      label: "シリコン精製",
      labelEn: "Silicon refining",
      detail: "純度99.999999999%（イレブンナイン）",
      detailEn: "99.999999999% purity (eleven nines)",
      color: "#94a3b8",
    },
    {
      icon: "🪨",
      label: "インゴット成長",
      labelEn: "Ingot growth",
      detail: "単結晶シリコンの円柱を成長",
      detailEn: "Grow a monocrystalline silicon cylinder",
      color: "#64748b",
    },
    {
      icon: "🔪",
      label: "ウェハ切断",
      labelEn: "Wafer slicing",
      detail: "薄い円盤状にスライス・研磨",
      detailEn: "Slice into thin discs and polish",
      color: "#f59e0b",
    },
    {
      icon: "📐",
      label: "回路設計",
      labelEn: "Circuit design",
      detail: "EDAツールで数十億のトランジスタを設計",
      detailEn: "Design billions of transistors with EDA tools",
      color: "#8b5cf6",
    },
    {
      icon: "🎭",
      label: "フォトマスク",
      labelEn: "Photomask",
      detail: "回路パターンをマスクに転写",
      detailEn: "Transfer circuit patterns onto masks",
      color: "#3b82f6",
    },
    {
      icon: "💡",
      label: "露光（リソグラフィ）",
      labelEn: "Lithography (exposure)",
      detail: "EUV光でウェハにパターン形成",
      detailEn: "Pattern wafers with EUV light",
      color: "#ef4444",
    },
    {
      icon: "🧪",
      label: "エッチング・成膜",
      labelEn: "Etching & deposition",
      detail: "不要部分除去、薄膜を堆積",
      detailEn: "Remove unwanted material and deposit thin films",
      color: "#10b981",
    },
    {
      icon: "📦",
      label: "パッケージング",
      labelEn: "Packaging",
      detail: "チップを切り出し封止・接続",
      detailEn: "Dice, encapsulate, and wire up the chips",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="半導体チップの製造工程" en="Semiconductor chip manufacturing process" />
      </div>
      {/* Desktop: grid flow */}
      <div className="hidden sm:grid sm:grid-cols-4 gap-2">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div
              className="p-3 rounded-lg text-center h-full"
              style={{
                backgroundColor: `${step.color}08`,
                borderLeft: `3px solid ${step.color}`,
              }}
            >
              <div className="text-xl mb-1">{step.icon}</div>
              <div
                className="text-[10px] font-bold"
                style={{ color: step.color }}
              >
                {i + 1}. <T ja={step.label} en={step.labelEn} />
              </div>
              <div className="mt-1 text-[9px] text-foreground/45 leading-tight">
                <T ja={step.detail} en={step.detailEn} />
              </div>
            </div>
            {i < steps.length - 1 && i % 4 !== 3 && (
              <div className="absolute top-1/2 -right-2 text-foreground/20 text-xs z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: vertical flow */}
      <div className="sm:hidden space-y-1">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ backgroundColor: `${step.color}15` }}
              >
                {step.icon}
              </div>
              <div>
                <div
                  className="text-xs font-bold"
                  style={{ color: step.color }}
                >
                  {i + 1}. <T ja={step.label} en={step.labelEn} />
                </div>
                <div className="text-[10px] text-foreground/45">
                  <T ja={step.detail} en={step.detailEn} />
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-4 text-foreground/20 text-[10px]">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/10">
        <div className="text-[10px] font-medium text-[#8b5cf6]/80 mb-1">
          <T ja="EUV露光装置 — 半導体製造の最重要機器" en="EUV lithography — the most critical tool in chipmaking" />
        </div>
        <div className="text-[9px] text-foreground/50">
          <T
            ja="ASML社（オランダ）が独占供給。1台約200億円。13.5nmの極端紫外線で2nm以下の微細パターンを形成。年間生産台数は約60台。"
            en="Monopolized by ASML (Netherlands). About ¥20 billion per machine. Uses 13.5 nm extreme ultraviolet light to pattern features below 2 nm. Roughly 60 units produced per year."
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Chip Types & Applications
   ───────────────────────────────────────────── */
export function ChipTypesDiagram() {
  const types = [
    {
      name: "ロジック半導体",
      nameShort: "ロジック",
      nameEn: "Logic chips",
      nameShortEn: "Logic",
      examples: "CPU, GPU, SoC",
      use: "演算・制御処理",
      useEn: "Computation and control",
      color: "#3b82f6",
      share: "35%",
    },
    {
      name: "メモリ半導体",
      nameShort: "メモリ",
      nameEn: "Memory chips",
      nameShortEn: "Memory",
      examples: "DRAM, NAND Flash",
      use: "データの記憶・保存",
      useEn: "Data storage and retention",
      color: "#8b5cf6",
      share: "25%",
    },
    {
      name: "アナログ半導体",
      nameShort: "アナログ",
      nameEn: "Analog chips",
      nameShortEn: "Analog",
      examples: "パワーIC, センサー",
      examplesEn: "Power ICs, sensors",
      use: "アナログ信号処理",
      useEn: "Analog signal processing",
      color: "#f59e0b",
      share: "15%",
    },
    {
      name: "ディスクリート",
      nameShort: "ディスクリート",
      nameEn: "Discrete devices",
      nameShortEn: "Discrete",
      examples: "パワー半導体, IGBT",
      examplesEn: "Power devices, IGBTs",
      use: "電力変換・制御",
      useEn: "Power conversion and control",
      color: "#10b981",
      share: "10%",
    },
    {
      name: "光半導体",
      nameShort: "光半導体",
      nameEn: "Optoelectronics",
      nameShortEn: "Opto",
      examples: "LED, イメージセンサー",
      examplesEn: "LEDs, image sensors",
      use: "光電変換",
      useEn: "Opto-electronic conversion",
      color: "#ef4444",
      share: "8%",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="半導体の主な種類と市場シェア" en="Main semiconductor categories and market share" />
      </div>
      <div className="space-y-2">
        {types.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${t.color}06`,
              borderLeft: `3px solid ${t.color}`,
            }}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold"
                  style={{ color: t.color }}
                >
                  <T ja={t.name} en={t.nameEn} />
                </span>
                <span className="text-[9px] text-foreground/35">
                  <T ja={t.nameShort} en={t.nameShortEn} />
                </span>
              </div>
              <div className="mt-0.5 text-[10px] text-foreground/50">
                <T ja={t.use} en={t.useEn} /> — <T ja={t.examples} en={t.examplesEn ?? t.examples} />
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold" style={{ color: t.color }}>
                {t.share}
              </div>
              <div className="text-[8px] text-foreground/30">
                <T ja="市場比率" en="Market share" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Global Supply Chain Map
   ───────────────────────────────────────────── */
export function SupplyChainDiagram() {
  const chain = [
    {
      step: "設計",
      stepEn: "Design",
      leaders: [
        {
          country: "米国",
          countryEn: "United States",
          companies: "Apple, NVIDIA, AMD, Qualcomm",
          companiesEn: "Apple, NVIDIA, AMD, Qualcomm",
          share: "~65%",
          flag: "🇺🇸",
        },
      ],
      color: "#3b82f6",
    },
    {
      step: "製造装置",
      stepEn: "Fab equipment",
      leaders: [
        {
          country: "オランダ",
          countryEn: "Netherlands",
          companies: "ASML（露光装置独占）",
          companiesEn: "ASML (lithography monopoly)",
          share: "~30%",
          flag: "🇳🇱",
        },
        {
          country: "日本",
          countryEn: "Japan",
          companies: "東京エレクトロン、SCREEN",
          companiesEn: "Tokyo Electron, SCREEN",
          share: "~27%",
          flag: "🇯🇵",
        },
        {
          country: "米国",
          countryEn: "United States",
          companies: "Applied Materials, Lam Research",
          companiesEn: "Applied Materials, Lam Research",
          share: "~30%",
          flag: "🇺🇸",
        },
      ],
      color: "#8b5cf6",
    },
    {
      step: "素材・材料",
      stepEn: "Materials",
      leaders: [
        {
          country: "日本",
          countryEn: "Japan",
          companies: "信越化学、SUMCO、JSR、東京応化",
          companiesEn: "Shin-Etsu Chemical, SUMCO, JSR, Tokyo Ohka",
          share: "~50%",
          flag: "🇯🇵",
        },
      ],
      color: "#f59e0b",
    },
    {
      step: "前工程（製造）",
      stepEn: "Front-end fabrication",
      leaders: [
        {
          country: "台湾",
          countryEn: "Taiwan",
          companies: "TSMC（世界シェア60%超）",
          companiesEn: "TSMC (over 60% global share)",
          share: "~65%",
          flag: "🇹🇼",
        },
        {
          country: "韓国",
          countryEn: "South Korea",
          companies: "Samsung",
          companiesEn: "Samsung",
          share: "~13%",
          flag: "🇰🇷",
        },
      ],
      color: "#ef4444",
    },
    {
      step: "後工程（封止・検査）",
      stepEn: "Back-end (packaging & test)",
      leaders: [
        { country: "台湾", countryEn: "Taiwan", companies: "ASE", companiesEn: "ASE", share: "~30%", flag: "🇹🇼" },
        { country: "中国", countryEn: "China", companies: "JCET", companiesEn: "JCET", share: "~15%", flag: "🇨🇳" },
      ],
      color: "#10b981",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T
          ja="半導体サプライチェーン — 各工程の主要プレイヤー"
          en="Semiconductor supply chain — key players by stage"
        />
      </div>
      <div className="space-y-3">
        {chain.map((c, i) => (
          <div key={i}>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs font-bold text-white"
              style={{ backgroundColor: c.color }}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                {i + 1}
              </span>
              <T ja={c.step} en={c.stepEn} />
            </div>
            <div className="border border-t-0 border-brief-border rounded-b-lg divide-y divide-brief-border/50">
              {c.leaders.map((l, j) => (
                <div key={j} className="flex items-center gap-3 px-3 py-2">
                  <span className="text-base flex-shrink-0">{l.flag}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium">
                      <T ja={l.country} en={l.countryEn} />
                    </div>
                    <div className="text-[9px] text-foreground/45 truncate">
                      <T ja={l.companies} en={l.companiesEn} />
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{ color: c.color }}
                  >
                    {l.share}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="1つのチップが完成するまでに国境を70回以上越えることもある（SIA調べ）"
          en="A single chip can cross national borders over 70 times before completion (SIA)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Japan Semiconductor History Timeline
   ───────────────────────────────────────────── */
export function JapanSemiHistoryDiagram() {
  const eras = [
    {
      year: "1980年代",
      yearEn: "1980s",
      label: "黄金期",
      labelEn: "Golden age",
      share: "世界シェア50%超",
      shareEn: "Over 50% global share",
      desc: "DRAM市場を席巻。NEC、東芝、日立がトップ3",
      descEn: "Dominated the DRAM market. NEC, Toshiba, and Hitachi were the top three",
      color: "#f59e0b",
      icon: "👑",
    },
    {
      year: "1986年",
      yearEn: "1986",
      label: "日米半導体協定",
      labelEn: "US-Japan Semiconductor Agreement",
      share: "輸出自主規制",
      shareEn: "Voluntary export restraints",
      desc: "米国の圧力で市場開放を余儀なくされる",
      descEn: "Forced to open its market under US pressure",
      color: "#ef4444",
      icon: "📜",
    },
    {
      year: "1990〜2000年代",
      yearEn: "1990s–2000s",
      label: "衰退期",
      labelEn: "Decline",
      share: "シェア急落",
      shareEn: "Share collapses",
      desc: "韓国・台湾勢の台頭。投資判断の遅れ",
      descEn: "Korean and Taiwanese rivals rise; Japan's investment decisions lag",
      color: "#94a3b8",
      icon: "📉",
    },
    {
      year: "2019年",
      yearEn: "2019",
      label: "キオクシア独立",
      labelEn: "Kioxia spin-off",
      share: "NAND Flash世界3位",
      shareEn: "No. 3 globally in NAND flash",
      desc: "東芝メモリから社名変更。フラッシュメモリで健闘",
      descEn: "Renamed from Toshiba Memory; holds its own in flash memory",
      color: "#8b5cf6",
      icon: "💾",
    },
    {
      year: "2022年",
      yearEn: "2022",
      label: "国家戦略始動",
      labelEn: "National strategy launched",
      share: "政府投資4兆円超",
      shareEn: "Over ¥4 trillion in government investment",
      desc: "経済安保推進法のもと半導体産業復活に着手",
      descEn: "Begins reviving the chip industry under the Economic Security Promotion Act",
      color: "#3b82f6",
      icon: "🏛",
    },
    {
      year: "2024〜25年",
      yearEn: "2024–25",
      label: "TSMC熊本稼働",
      labelEn: "TSMC Kumamoto comes online",
      share: "JASM第1工場稼働",
      shareEn: "JASM Fab 1 in operation",
      desc: "月産5.5万枚。第2工場は3nmへ格上げ決定",
      descEn: "55,000 wafers per month; Fab 2 upgraded to 3 nm",
      color: "#10b981",
      icon: "🏭",
    },
    {
      year: "2025〜27年",
      yearEn: "2025–27",
      label: "Rapidus 2nm",
      labelEn: "Rapidus 2 nm",
      share: "GAA動作実証済",
      shareEn: "GAA operation demonstrated",
      desc: "2025年7月GAA成功。PDK提供開始。2027年量産目標",
      descEn: "GAA success in July 2025; PDK released; volume production targeted for 2027",
      color: "#ef4444",
      icon: "🚀",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="日本の半導体産業 — 40年の軌跡" en="Japan's semiconductor industry — 40 years" />
      </div>
      <div className="space-y-1.5">
        {eras.map((era, i) => (
          <div key={i} className="flex items-start gap-3">
            {/* Timeline line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                style={{ backgroundColor: `${era.color}15` }}
              >
                {era.icon}
              </div>
              {i < eras.length - 1 && (
                <div className="w-px h-6 bg-brief-border" />
              )}
            </div>
            {/* Content */}
            <div className="pb-2 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[10px] font-bold tabular-nums"
                  style={{ color: era.color }}
                >
                  <T ja={era.year} en={era.yearEn} />
                </span>
                <span className="text-xs font-bold">
                  <T ja={era.label} en={era.labelEn} />
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-foreground/[0.05] text-foreground/50">
                  <T ja={era.share} en={era.shareEn} />
                </span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5 leading-relaxed">
                <T ja={era.desc} en={era.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Process Node Comparison (nm)
   ───────────────────────────────────────────── */
export function ProcessNodeDiagram() {
  const nodes = [
    {
      node: "180nm",
      year: "1999",
      transistors: "数千万",
      transistorsEn: "Tens of millions",
      example: "Pentium III",
      width: 95,
      color: "#94a3b8",
    },
    {
      node: "65nm",
      year: "2006",
      transistors: "数億",
      transistorsEn: "Hundreds of millions",
      example: "Core 2 Duo",
      width: 75,
      color: "#64748b",
    },
    {
      node: "14nm",
      year: "2014",
      transistors: "数十億",
      transistorsEn: "Several billion",
      example: "iPhone 6",
      width: 50,
      color: "#f59e0b",
    },
    {
      node: "7nm",
      year: "2018",
      transistors: "100億+",
      transistorsEn: "10B+",
      example: "A12 Bionic",
      width: 35,
      color: "#8b5cf6",
    },
    {
      node: "5nm",
      year: "2020",
      transistors: "150億+",
      transistorsEn: "15B+",
      example: "M1",
      width: 25,
      color: "#3b82f6",
    },
    {
      node: "3nm",
      year: "2022",
      transistors: "200億+",
      transistorsEn: "20B+",
      example: "M3 / A17 Pro",
      width: 18,
      color: "#10b981",
    },
    {
      node: "2nm",
      year: "2025",
      transistors: "2,080億*",
      transistorsEn: "208B*",
      example: "B200（2ダイ）/ GAA",
      exampleEn: "B200 (2-die) / GAA",
      width: 12,
      color: "#ef4444",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="プロセスノードの進化 — ムーアの法則の歩み" en="Process node evolution — the march of Moore's Law" />
      </div>
      <div className="space-y-2">
        {nodes.map((n, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-14 text-right flex-shrink-0">
              <div
                className="text-xs font-bold tabular-nums"
                style={{ color: n.color }}
              >
                {n.node}
              </div>
              <div className="text-[8px] text-foreground/30">{n.year}</div>
            </div>
            <div className="flex-1">
              <div className="h-6 rounded-full overflow-hidden bg-foreground/[0.04] flex items-center">
                <div
                  className="h-full rounded-full flex items-center px-2 transition-all"
                  style={{
                    width: `${n.width}%`,
                    backgroundColor: `${n.color}25`,
                    borderLeft: `3px solid ${n.color}`,
                    minWidth: "60px",
                  }}
                >
                  <span className="text-[9px] text-foreground/60 whitespace-nowrap truncate">
                    <T ja={n.transistors} en={n.transistorsEn} /> — <T ja={n.example} en={n.exampleEn ?? n.example} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="* 2nm世代は従来のFinFETからGAA（Gate-All-Around）構造へ移行。バーの長さは相対的な回路サイズのイメージ"
          en="* The 2 nm generation moves from FinFET to GAA (Gate-All-Around). Bar lengths represent relative feature size."
        />
      </div>
    </div>
  );
}
