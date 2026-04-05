"use client";

/* ─────────────────────────────────────────────
   Semiconductor Market Scale Stats Banner
   ───────────────────────────────────────────── */
export function SemiMarketScaleDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">$627B</div>
        <div className="text-[10px] text-foreground/50 mt-1">世界市場規模</div>
        <div className="text-[9px] text-foreground/35">2024年（SIA）</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#8b5cf6]">1兆個+</div>
        <div className="text-[10px] text-foreground/50 mt-1">年間出荷チップ数</div>
        <div className="text-[9px] text-foreground/35">2024年推計</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">2nm</div>
        <div className="text-[10px] text-foreground/50 mt-1">最先端プロセスノード</div>
        <div className="text-[9px] text-foreground/35">2025年量産開始</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#10b981]">2,000億+</div>
        <div className="text-[10px] text-foreground/50 mt-1">最新チップのトランジスタ数</div>
        <div className="text-[9px] text-foreground/35">Apple M4 Ultra等</div>
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
      bandGap: "0 eV",
      desc: "電気をよく通す。自由電子が豊富。",
      color: "#f59e0b",
      level: 95,
    },
    {
      name: "半導体",
      nameEn: "Semiconductor",
      examples: "シリコン、ゲルマニウム",
      bandGap: "0.1〜4 eV",
      desc: "条件次第で電気を通したり通さなかったりする。",
      color: "#3b82f6",
      level: 50,
    },
    {
      name: "絶縁体",
      nameEn: "Insulator",
      examples: "ガラス、ゴム、セラミック",
      bandGap: "4 eV 以上",
      desc: "電気をほとんど通さない。",
      color: "#ef4444",
      level: 5,
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        導体・半導体・絶縁体の比較
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
              {mat.name}
            </div>
            <div className="text-[9px] text-foreground/40">{mat.nameEn}</div>
            <div className="mt-2 text-[11px] text-foreground/60">
              {mat.desc}
            </div>
            <div className="mt-2">
              <div className="text-[9px] text-foreground/40 mb-1">導電性</div>
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
                バンドギャップ: {mat.bandGap}
              </span>
            </div>
            <div className="mt-1 text-[9px] text-foreground/35">
              例: {mat.examples}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        バンドギャップ =
        電子が伝導帯へ移動するために必要なエネルギー。半導体はこの値が「ちょうどいい」
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
        ドーピングと P-N 接合
      </div>
      {/* Doping explanation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#ef4444]/8 border border-[#ef4444]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-[#ef4444] text-white text-[10px] font-bold flex items-center justify-center">
              P
            </div>
            <div className="text-sm font-bold text-[#ef4444]">P型半導体</div>
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            シリコンにホウ素（B）などの3価元素を添加。電子の「穴」（正孔）がキャリアとなり、正の電荷が移動するように振る舞う。
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-[9px] text-foreground/35">キャリア:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="w-4 h-4 rounded-full border-2 border-[#ef4444]/40 text-[8px] text-[#ef4444]/60 flex items-center justify-center"
              >
                +
              </span>
            ))}
            <span className="text-[9px] text-foreground/30 ml-1">
              （正孔）
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#3b82f6]/8 border border-[#3b82f6]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-[#3b82f6] text-white text-[10px] font-bold flex items-center justify-center">
              N
            </div>
            <div className="text-sm font-bold text-[#3b82f6]">N型半導体</div>
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            シリコンにリン（P）などの5価元素を添加。余った電子が自由に動き回り、負の電荷のキャリアとなる。
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-[9px] text-foreground/35">キャリア:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="w-4 h-4 rounded-full bg-[#3b82f6]/20 text-[8px] text-[#3b82f6]/80 flex items-center justify-center font-bold"
              >
                e⁻
              </span>
            ))}
            <span className="text-[9px] text-foreground/30 ml-1">
              （電子）
            </span>
          </div>
        </div>
      </div>
      {/* P-N Junction */}
      <div className="p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
        <div className="text-[10px] font-medium text-foreground/50 mb-2">
          P-N接合（ダイオード）
        </div>
        <div className="flex items-stretch rounded-lg overflow-hidden h-16 sm:h-20">
          <div className="flex-1 bg-[#ef4444]/10 flex flex-col items-center justify-center border-r-2 border-dashed border-foreground/15">
            <div className="text-sm font-bold text-[#ef4444]">P</div>
            <div className="text-[8px] text-foreground/40">正孔 → → →</div>
          </div>
          <div className="w-12 sm:w-16 bg-foreground/[0.06] flex flex-col items-center justify-center flex-shrink-0">
            <div className="text-[8px] font-bold text-foreground/50">
              空乏層
            </div>
            <div className="text-[7px] text-foreground/30">電界</div>
          </div>
          <div className="flex-1 bg-[#3b82f6]/10 flex flex-col items-center justify-center border-l-2 border-dashed border-foreground/15">
            <div className="text-sm font-bold text-[#3b82f6]">N</div>
            <div className="text-[8px] text-foreground/40">← ← ← 電子</div>
          </div>
        </div>
        <div className="mt-2 text-[9px] text-foreground/40 text-center">
          順方向バイアス（P→N）で電流が流れ、逆方向では流れない →
          整流作用（ダイオード）
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
        MOSFET トランジスタの構造と動作
      </div>
      {/* Transistor structure */}
      <div className="relative bg-foreground/[0.02] rounded-lg p-4 mb-4">
        <div className="flex flex-col items-center">
          {/* Gate */}
          <div className="px-8 py-2 bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded text-center mb-1">
            <div className="text-xs font-bold text-[#f59e0b]">
              ゲート (G)
            </div>
            <div className="text-[8px] text-foreground/40">
              電圧で ON/OFF 制御
            </div>
          </div>
          {/* Gate oxide */}
          <div className="w-32 h-3 bg-[#94a3b8]/20 border border-[#94a3b8]/30 flex items-center justify-center">
            <span className="text-[7px] text-foreground/40">
              酸化膜 (SiO₂)
            </span>
          </div>
          {/* Channel area */}
          <div className="flex items-stretch w-full max-w-xs">
            <div className="flex-1 py-3 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-bl text-center">
              <div className="text-xs font-bold text-[#3b82f6]">
                ソース (S)
              </div>
              <div className="text-[8px] text-foreground/35">N型</div>
            </div>
            <div className="w-20 py-3 bg-[#ef4444]/8 border-y border-brief-border text-center">
              <div className="text-[9px] text-foreground/50">チャネル</div>
              <div className="text-[7px] text-foreground/30">P型基板</div>
            </div>
            <div className="flex-1 py-3 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-br text-center">
              <div className="text-xs font-bold text-[#3b82f6]">
                ドレイン (D)
              </div>
              <div className="text-[8px] text-foreground/35">N型</div>
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
            <div className="text-xs font-bold text-[#10b981]">ON（導通）</div>
          </div>
          <div className="text-[10px] text-foreground/55">
            ゲートに電圧を加えるとチャネルが形成され、ソース→ドレイン間に電流が流れる
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#ef4444]/8 border border-[#ef4444]/15">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white text-[9px] font-bold flex items-center justify-center">
              0
            </div>
            <div className="text-xs font-bold text-[#ef4444]">OFF（遮断）</div>
          </div>
          <div className="text-[10px] text-foreground/55">
            ゲート電圧がないとチャネルが形成されず、電流は流れない
          </div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        この ON/OFF が「1」と「0」に対応し、すべてのデジタル演算の基礎となる
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
      detail: "純度99.999999999%（イレブンナイン）",
      color: "#94a3b8",
    },
    {
      icon: "🪨",
      label: "インゴット成長",
      detail: "単結晶シリコンの円柱を成長",
      color: "#64748b",
    },
    {
      icon: "🔪",
      label: "ウェハ切断",
      detail: "薄い円盤状にスライス・研磨",
      color: "#f59e0b",
    },
    {
      icon: "📐",
      label: "回路設計",
      detail: "EDAツールで数十億のトランジスタを設計",
      color: "#8b5cf6",
    },
    {
      icon: "🎭",
      label: "フォトマスク",
      detail: "回路パターンをマスクに転写",
      color: "#3b82f6",
    },
    {
      icon: "💡",
      label: "露光（リソグラフィ）",
      detail: "EUV光でウェハにパターン形成",
      color: "#ef4444",
    },
    {
      icon: "🧪",
      label: "エッチング・成膜",
      detail: "不要部分除去、薄膜を堆積",
      color: "#10b981",
    },
    {
      icon: "📦",
      label: "パッケージング",
      detail: "チップを切り出し封止・接続",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        半導体チップの製造工程
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
                {i + 1}. {step.label}
              </div>
              <div className="mt-1 text-[9px] text-foreground/45 leading-tight">
                {step.detail}
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
                  {i + 1}. {step.label}
                </div>
                <div className="text-[10px] text-foreground/45">
                  {step.detail}
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
          EUV露光装置 — 半導体製造の最重要機器
        </div>
        <div className="text-[9px] text-foreground/50">
          ASML社（オランダ）が独占供給。1台約200億円。13.5nmの極端紫外線で2nm以下の微細パターンを形成。年間生産台数は約60台。
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
      nameEn: "Logic",
      examples: "CPU, GPU, SoC",
      use: "演算・制御処理",
      color: "#3b82f6",
      share: "35%",
    },
    {
      name: "メモリ半導体",
      nameEn: "Memory",
      examples: "DRAM, NAND Flash",
      use: "データの記憶・保存",
      color: "#8b5cf6",
      share: "25%",
    },
    {
      name: "アナログ半導体",
      nameEn: "Analog",
      examples: "パワーIC, センサー",
      use: "アナログ信号処理",
      color: "#f59e0b",
      share: "15%",
    },
    {
      name: "ディスクリート",
      nameEn: "Discrete",
      examples: "パワー半導体, IGBT",
      use: "電力変換・制御",
      color: "#10b981",
      share: "10%",
    },
    {
      name: "光半導体",
      nameEn: "Opto",
      examples: "LED, イメージセンサー",
      use: "光電変換",
      color: "#ef4444",
      share: "8%",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        半導体の主な種類と市場シェア
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
                  {t.name}
                </span>
                <span className="text-[9px] text-foreground/35">
                  {t.nameEn}
                </span>
              </div>
              <div className="mt-0.5 text-[10px] text-foreground/50">
                {t.use} — {t.examples}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold" style={{ color: t.color }}>
                {t.share}
              </div>
              <div className="text-[8px] text-foreground/30">市場比率</div>
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
      leaders: [
        {
          country: "米国",
          companies: "Apple, NVIDIA, AMD, Qualcomm",
          share: "~65%",
          flag: "🇺🇸",
        },
      ],
      color: "#3b82f6",
    },
    {
      step: "製造装置",
      leaders: [
        {
          country: "オランダ",
          companies: "ASML（露光装置独占）",
          share: "~30%",
          flag: "🇳🇱",
        },
        {
          country: "日本",
          companies: "東京エレクトロン、SCREEN",
          share: "~27%",
          flag: "🇯🇵",
        },
        {
          country: "米国",
          companies: "Applied Materials, Lam Research",
          share: "~30%",
          flag: "🇺🇸",
        },
      ],
      color: "#8b5cf6",
    },
    {
      step: "素材・材料",
      leaders: [
        {
          country: "日本",
          companies: "信越化学、SUMCO、JSR、東京応化",
          share: "~50%",
          flag: "🇯🇵",
        },
      ],
      color: "#f59e0b",
    },
    {
      step: "前工程（製造）",
      leaders: [
        {
          country: "台湾",
          companies: "TSMC（世界シェア60%超）",
          share: "~65%",
          flag: "🇹🇼",
        },
        {
          country: "韓国",
          companies: "Samsung",
          share: "~13%",
          flag: "🇰🇷",
        },
      ],
      color: "#ef4444",
    },
    {
      step: "後工程（封止・検査）",
      leaders: [
        { country: "台湾", companies: "ASE", share: "~30%", flag: "🇹🇼" },
        { country: "中国", companies: "JCET", share: "~15%", flag: "🇨🇳" },
      ],
      color: "#10b981",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        半導体サプライチェーン — 各工程の主要プレイヤー
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
              {c.step}
            </div>
            <div className="border border-t-0 border-brief-border rounded-b-lg divide-y divide-brief-border/50">
              {c.leaders.map((l, j) => (
                <div key={j} className="flex items-center gap-3 px-3 py-2">
                  <span className="text-base flex-shrink-0">{l.flag}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium">{l.country}</div>
                    <div className="text-[9px] text-foreground/45 truncate">
                      {l.companies}
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
        1つのチップが完成するまでに国境を70回以上越えることもある（SIA調べ）
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
      label: "黄金期",
      share: "世界シェア50%超",
      desc: "DRAM市場を席巻。NEC、東芝、日立がトップ3",
      color: "#f59e0b",
      icon: "👑",
    },
    {
      year: "1986年",
      label: "日米半導体協定",
      share: "輸出自主規制",
      desc: "米国の圧力で市場開放を余儀なくされる",
      color: "#ef4444",
      icon: "📜",
    },
    {
      year: "1990〜2000年代",
      label: "衰退期",
      share: "シェア急落",
      desc: "韓国・台湾勢の台頭。投資判断の遅れ",
      color: "#94a3b8",
      icon: "📉",
    },
    {
      year: "2019年",
      label: "キオクシア独立",
      share: "NAND Flash世界3位",
      desc: "東芝メモリから社名変更。フラッシュメモリで健闘",
      color: "#8b5cf6",
      icon: "💾",
    },
    {
      year: "2022年",
      label: "国家戦略始動",
      share: "政府投資4兆円超",
      desc: "経済安保推進法のもと半導体産業復活に着手",
      color: "#3b82f6",
      icon: "🏛",
    },
    {
      year: "2024〜25年",
      label: "TSMC熊本稼働",
      share: "JASM第1工場稼働",
      desc: "ソニー・デンソーらと合弁。第2工場も建設中",
      color: "#10b981",
      icon: "🏭",
    },
    {
      year: "2027年（目標）",
      label: "Rapidus 2nm",
      share: "千歳で量産開始予定",
      desc: "日本初の最先端ロジック半導体ファウンドリ",
      color: "#ef4444",
      icon: "🚀",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        日本の半導体産業 — 40年の軌跡
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
                  {era.year}
                </span>
                <span className="text-xs font-bold">{era.label}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-foreground/[0.05] text-foreground/50">
                  {era.share}
                </span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5 leading-relaxed">
                {era.desc}
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
      example: "Pentium III",
      width: 95,
      color: "#94a3b8",
    },
    {
      node: "65nm",
      year: "2006",
      transistors: "数億",
      example: "Core 2 Duo",
      width: 75,
      color: "#64748b",
    },
    {
      node: "14nm",
      year: "2014",
      transistors: "数十億",
      example: "iPhone 6",
      width: 50,
      color: "#f59e0b",
    },
    {
      node: "7nm",
      year: "2018",
      transistors: "100億+",
      example: "A12 Bionic",
      width: 35,
      color: "#8b5cf6",
    },
    {
      node: "5nm",
      year: "2020",
      transistors: "150億+",
      example: "M1",
      width: 25,
      color: "#3b82f6",
    },
    {
      node: "3nm",
      year: "2022",
      transistors: "200億+",
      example: "M3 / A17 Pro",
      width: 18,
      color: "#10b981",
    },
    {
      node: "2nm",
      year: "2025",
      transistors: "500億+*",
      example: "GAA構造採用",
      width: 12,
      color: "#ef4444",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        プロセスノードの進化 — ムーアの法則の歩み
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
                    {n.transistors} — {n.example}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        * 2nm世代は従来のFinFETからGAA（Gate-All-Around）構造へ移行。バーの長さは相対的な回路サイズのイメージ
      </div>
    </div>
  );
}
