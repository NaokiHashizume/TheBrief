"use client";

/* ─────────────────────────────────────────────
   Telecom Overview — 3-step concept
   ───────────────────────────────────────────── */
export function TelecomOverviewDiagram() {
  const steps = [
    { icon: "🎤", label: "変換", detail: "音声・映像をデジタル信号（0/1）に変換", color: "#3b82f6" },
    { icon: "🌊", label: "伝送", detail: "電波・光・ケーブルで信号を運ぶ", color: "#8b5cf6" },
    { icon: "📱", label: "復元", detail: "受信側で元の音声・映像に戻す", color: "#10b981" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        通信の基本原理 — 3つのステップ
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-0 w-full sm:w-auto">
            <div className="flex flex-col items-center flex-1 sm:flex-none sm:w-[140px]">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2"
                style={{ borderColor: step.color, backgroundColor: `${step.color}10` }}
              >
                {step.icon}
              </div>
              <div className="mt-2 text-sm font-bold" style={{ color: step.color }}>
                {step.label}
              </div>
              <div className="mt-0.5 text-[10px] text-foreground/50 text-center leading-tight px-1">
                {step.detail}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden sm:block text-foreground/25 text-lg mx-2">→</div>
            )}
            {i < steps.length - 1 && (
              <div className="sm:hidden text-foreground/25 text-lg">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { label: "通話（高音質）", value: "64 Kbps" },
          { label: "音楽ストリーミング", value: "320 Kbps" },
          { label: "HD動画", value: "5 Mbps" },
          { label: "4K動画", value: "25 Mbps" },
        ].map((item) => (
          <div key={item.label} className="p-2 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-xs font-bold text-foreground/70">{item.value}</div>
            <div className="text-[9px] text-foreground/40 mt-0.5">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Spectrum Bands Diagram
   ───────────────────────────────────────────── */
export function SpectrumBandsDiagram() {
  const bands = [
    { range: "700–900 MHz", name: "プラチナバンド", use: "4G基盤・広域カバー", reach: "数十km", speed: "低〜中", color: "#10b981", width: "100%" },
    { range: "3.5–4.5 GHz", name: "Sub6", use: "5G主力帯域", reach: "数km", speed: "中〜高", color: "#3b82f6", width: "65%" },
    { range: "28 GHz", name: "ミリ波", use: "超高速・密集エリア", reach: "数百m", speed: "超高速", color: "#8b5cf6", width: "30%" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        携帯電話の周波数帯域
      </div>
      <div className="space-y-3">
        {bands.map((band) => (
          <div key={band.range} className="space-y-1.5">
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold" style={{ color: band.color }}>
                  {band.range}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${band.color}15`, color: band.color }}>
                  {band.name}
                </span>
              </div>
              <span className="text-[10px] text-foreground/40">{band.use}</span>
            </div>
            {/* Bar showing relative reach */}
            <div className="h-3 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: band.width, backgroundColor: `${band.color}40` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-foreground/40">
              <span>到達距離: {band.reach}</span>
              <span>速度: {band.speed}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/50 mb-1">周波数の基本法則</div>
        <div className="flex items-center gap-3 text-[10px] text-foreground/45">
          <span>低周波 → 広範囲・低速</span>
          <span className="text-foreground/20">|</span>
          <span>高周波 → 狭範囲・高速</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Modulation Types Diagram
   ───────────────────────────────────────────── */
export function ModulationTypesDiagram() {
  const types = [
    { name: "AM（振幅変調）", nameEn: "Amplitude Modulation", desc: "波の高さを変える", example: "AMラジオ", icon: "📻", color: "#f59e0b" },
    { name: "FM（周波数変調）", nameEn: "Frequency Modulation", desc: "波の速さを変える", example: "FMラジオ", icon: "🎵", color: "#3b82f6" },
    { name: "PM（位相変調）", nameEn: "Phase Modulation", desc: "波のタイミングを変える", example: "デジタル通信", icon: "📡", color: "#8b5cf6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        変調方式の比較
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {types.map((t) => (
          <div
            key={t.name}
            className="p-3 rounded-lg border"
            style={{ borderColor: `${t.color}25`, backgroundColor: `${t.color}05` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{t.icon}</span>
              <div>
                <div className="text-xs font-bold" style={{ color: t.color }}>{t.name}</div>
                <div className="text-[8px] text-foreground/35">{t.nameEn}</div>
              </div>
            </div>
            {/* Simple wave visualization with SVG */}
            <div className="mb-2 flex justify-center">
              <svg width="120" height="36" viewBox="0 0 120 36" className="text-foreground/20">
                {t.name.startsWith("AM") && (
                  <path
                    d="M0,18 Q10,4 20,18 Q30,32 40,18 Q50,10 60,18 Q70,26 80,18 Q90,4 100,18 Q110,32 120,18"
                    fill="none"
                    stroke={t.color}
                    strokeWidth="2"
                    opacity="0.6"
                  />
                )}
                {t.name.startsWith("FM") && (
                  <path
                    d="M0,18 Q5,4 10,18 Q15,32 20,18 Q25,4 30,18 Q35,32 40,18 Q50,4 60,18 Q70,32 80,18 Q85,4 90,18 Q95,32 100,18 Q105,4 110,18 Q115,32 120,18"
                    fill="none"
                    stroke={t.color}
                    strokeWidth="2"
                    opacity="0.6"
                  />
                )}
                {t.name.startsWith("PM") && (
                  <path
                    d="M0,18 Q10,4 20,18 Q30,32 40,18 Q50,32 60,18 Q70,4 80,18 Q90,32 100,18 Q110,4 120,18"
                    fill="none"
                    stroke={t.color}
                    strokeWidth="2"
                    opacity="0.6"
                  />
                )}
              </svg>
            </div>
            <div className="text-[10px] text-foreground/55">{t.desc}</div>
            <div className="text-[9px] text-foreground/35 mt-1">例: {t.example}</div>
          </div>
        ))}
      </div>
      {/* QAM / OFDM callout */}
      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.05] border border-[#8b5cf6]/10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-[#8b5cf6]">5G時代の変調技術</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 text-[10px] text-foreground/55">
          <div className="flex-1">
            <span className="font-semibold text-foreground/70">256QAM</span> — 振幅+位相を組み合わせ、1回の変化で8ビット送信
          </div>
          <div className="flex-1">
            <span className="font-semibold text-foreground/70">OFDM</span> — 複数の搬送波を束ね、帯域効率を最大化
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Fiber Optic Structure Diagram
   ───────────────────────────────────────────── */
export function FiberOpticDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        光ファイバーの構造と種類
      </div>
      {/* Cross-section illustration */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative">
          {/* Outer: coating */}
          <div className="w-36 h-36 rounded-full border-4 border-[#64748b]/30 flex items-center justify-center bg-[#64748b]/5">
            {/* Middle: cladding */}
            <div className="w-24 h-24 rounded-full border-3 border-[#3b82f6]/30 flex items-center justify-center bg-[#3b82f6]/5">
              {/* Inner: core */}
              <div className="w-10 h-10 rounded-full bg-[#ef4444]/20 border-2 border-[#ef4444]/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
              </div>
            </div>
          </div>
          {/* Labels */}
          <div className="absolute top-0 -right-20 text-[9px]">
            <div className="text-[#64748b] font-medium">被覆</div>
            <div className="text-foreground/35">250μm</div>
          </div>
          <div className="absolute top-8 -right-24 text-[9px]">
            <div className="text-[#3b82f6] font-medium">クラッド</div>
            <div className="text-foreground/35">125μm</div>
          </div>
          <div className="absolute top-16 -right-20 text-[9px]">
            <div className="text-[#ef4444] font-medium">コア</div>
            <div className="text-foreground/35">9μm</div>
          </div>
        </div>
      </div>
      {/* Types comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-[#3b82f6]/[0.04] border border-[#3b82f6]/10">
          <div className="text-xs font-bold text-[#3b82f6] mb-1">シングルモード</div>
          <div className="space-y-1 text-[10px] text-foreground/55">
            <div>コア径: <span className="font-semibold text-foreground/70">約9μm</span></div>
            <div>用途: <span className="font-semibold text-foreground/70">長距離（数十〜数百km）</span></div>
            <div>特徴: 光が1つの経路のみ進む</div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#f59e0b]/[0.04] border border-[#f59e0b]/10">
          <div className="text-xs font-bold text-[#f59e0b] mb-1">マルチモード</div>
          <div className="space-y-1 text-[10px] text-foreground/55">
            <div>コア径: <span className="font-semibold text-foreground/70">約50μm</span></div>
            <div>用途: <span className="font-semibold text-foreground/70">短距離（DC内部など）</span></div>
            <div>特徴: 複数の経路で光が進む</div>
          </div>
        </div>
      </div>
      {/* Japan FTTH stats */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="p-2 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#3b82f6]">4,105万</div>
          <div className="text-[9px] text-foreground/40">FTTH契約数</div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#8b5cf6]">57.9%</div>
          <div className="text-[9px] text-foreground/40">NTT東西シェア</div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#10b981]">111.7万</div>
          <div className="text-[9px] text-foreground/40">10Gbps契約</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Cell Network Diagram
   ───────────────────────────────────────────── */
export function CellNetworkDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        セルラーネットワークの仕組み
      </div>
      {/* Honeycomb concept */}
      <div className="flex items-center justify-center mb-4">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => {
            const isCenter = i === 4;
            const hasPhone = i === 3;
            const hasArrow = i === 5;
            return (
              <div
                key={i}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 flex flex-col items-center justify-center text-center"
                style={{
                  borderColor: isCenter ? "#3b82f6" : hasPhone ? "#10b981" : "#e2e8f0",
                  backgroundColor: isCenter ? "#3b82f610" : hasPhone ? "#10b98108" : "transparent",
                }}
              >
                <div className="text-lg">{isCenter ? "📡" : hasPhone ? "📱" : hasArrow ? "→📡" : "📡"}</div>
                <div className="text-[8px] text-foreground/40 mt-0.5">
                  {isCenter ? "現在のセル" : hasPhone ? "移動中" : "隣接セル"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center text-[10px] text-foreground/45 mb-4">
        ↑ セル方式：エリアを小区画に分割し、基地局を配置
      </div>
      {/* Handover concept */}
      <div className="p-3 rounded-lg bg-[#3b82f6]/[0.04] border border-[#3b82f6]/10 mb-4">
        <div className="text-xs font-bold text-[#3b82f6] mb-2">ハンドオーバー</div>
        <div className="flex items-center gap-2 text-[10px] text-foreground/55 overflow-x-auto">
          <span className="flex-shrink-0 px-2 py-1 rounded bg-[#10b981]/10 text-[#10b981] font-medium">セルA</span>
          <span className="text-foreground/25">→</span>
          <span className="flex-shrink-0 text-foreground/40">電波弱</span>
          <span className="text-foreground/25">→</span>
          <span className="flex-shrink-0 px-2 py-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] font-medium">切替</span>
          <span className="text-foreground/25">→</span>
          <span className="flex-shrink-0 px-2 py-1 rounded bg-[#10b981]/10 text-[#10b981] font-medium">セルB</span>
          <span className="text-foreground/25">→</span>
          <span className="flex-shrink-0 text-foreground/40">通信継続</span>
        </div>
      </div>
      {/* Carrier shares */}
      <div className="text-[10px] font-medium text-foreground/50 mb-2">日本4キャリアのシェア（2025年9月末）</div>
      <div className="space-y-1.5">
        {[
          { name: "NTTドコモ", share: 39.7, color: "#ef4444" },
          { name: "KDDI（au）", share: 31.3, color: "#f59e0b" },
          { name: "ソフトバンク", share: 24.8, color: "#64748b" },
          { name: "楽天モバイル", share: 4.2, color: "#ec4899" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-2">
            <span className="text-[10px] w-20 flex-shrink-0 text-foreground/60">{c.name}</span>
            <div className="flex-1 h-4 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${c.share * 2.5}%`, backgroundColor: `${c.color}50` }}
              />
            </div>
            <span className="text-[10px] font-bold tabular-nums w-10 text-right" style={{ color: c.color }}>
              {c.share}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Satellite Types Diagram
   ───────────────────────────────────────────── */
export function SatelliteTypesDiagram() {
  const types = [
    { name: "GEO（静止軌道）", altitude: "36,000 km", latency: "500ms+", count: "3機で地球カバー", example: "BS/CS放送", color: "#f59e0b" },
    { name: "MEO（中軌道）", altitude: "2,000–36,000 km", latency: "100–200ms", count: "数十機", example: "GPS", color: "#3b82f6" },
    { name: "LEO（低軌道）", altitude: "200–2,000 km", latency: "20–50ms", count: "数千機", example: "Starlink", color: "#10b981" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        通信衛星の種類と特徴
      </div>
      {/* Altitude visualization */}
      <div className="relative mb-6 pl-4">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-foreground/10" />
        {types.map((t, i) => (
          <div key={t.name} className="relative flex items-start gap-4 mb-6 last:mb-0">
            <div
              className="absolute left-[-6px] w-3 h-3 rounded-full border-2 bg-brief-card flex-shrink-0 z-10"
              style={{ borderColor: t.color }}
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-bold" style={{ color: t.color }}>{t.name}</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${t.color}12`, color: t.color }}>
                  高度 {t.altitude}
                </span>
              </div>
              <div className="mt-1 grid grid-cols-3 gap-2 text-[10px]">
                <div>
                  <span className="text-foreground/40">遅延: </span>
                  <span className="text-foreground/65 font-medium">{t.latency}</span>
                </div>
                <div>
                  <span className="text-foreground/40">機数: </span>
                  <span className="text-foreground/65 font-medium">{t.count}</span>
                </div>
                <div>
                  <span className="text-foreground/40">例: </span>
                  <span className="text-foreground/65 font-medium">{t.example}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Starlink highlight */}
      <div className="p-3 rounded-lg bg-[#10b981]/[0.05] border border-[#10b981]/10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm">🛰</span>
          <span className="text-xs font-bold text-[#10b981]">Starlink（SpaceX）</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
          <div>
            <span className="text-foreground/40">衛星数: </span>
            <span className="font-semibold text-foreground/70">約7,900機</span>
          </div>
          <div>
            <span className="text-foreground/40">高度: </span>
            <span className="font-semibold text-foreground/70">550 km</span>
          </div>
          <div>
            <span className="text-foreground/40">遅延: </span>
            <span className="font-semibold text-foreground/70">20–50 ms</span>
          </div>
          <div>
            <span className="text-foreground/40">速度: </span>
            <span className="font-semibold text-foreground/70">最大220 Mbps</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Japan Infrastructure Overview
   ───────────────────────────────────────────── */
export function JapanInfraDiagram() {
  const layers = [
    {
      name: "固定通信（光ファイバー）",
      icon: "🔌",
      color: "#3b82f6",
      stats: [
        { label: "FTTH契約", value: "4,105万" },
        { label: "10Gbps", value: "111.7万" },
      ],
    },
    {
      name: "移動通信（5G/4G）",
      icon: "📱",
      color: "#8b5cf6",
      stats: [
        { label: "5Gカバー率", value: "98.4%" },
        { label: "契約回線", value: "約2億" },
      ],
    },
    {
      name: "衛星通信（LEO）",
      icon: "🛰",
      color: "#10b981",
      stats: [
        { label: "参入キャリア", value: "4社" },
        { label: "目標", value: "圏外ゼロ" },
      ],
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        日本の通信インフラ — 3層構造
      </div>
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <div
            key={layer.name}
            className="p-3 rounded-lg border"
            style={{ borderColor: `${layer.color}20`, backgroundColor: `${layer.color}04` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{layer.icon}</span>
              <span className="text-sm font-bold" style={{ color: layer.color }}>
                {layer.name}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {layer.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-[10px] text-foreground/40">{stat.label}:</span>
                  <span className="text-sm font-bold" style={{ color: layer.color }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Complementary note */}
      <div className="mt-3 flex items-center gap-2 text-[10px] text-foreground/40">
        <div className="flex gap-0.5">
          {layers.map((l) => (
            <div key={l.name} className="w-3 h-3 rounded-full" style={{ backgroundColor: `${l.color}40` }} />
          ))}
        </div>
        <span>3層が相互補完 → いつでも・どこでも・高速に接続</span>
      </div>
    </div>
  );
}
