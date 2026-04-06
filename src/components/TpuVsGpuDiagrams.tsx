"use client";

/* ─────────────────────────────────────────────
   01. TPU vs GPU Overview
   ───────────────────────────────────────────── */
export function TpuGpuOverviewDiagram() {
  const items = [
    {
      name: "NVIDIA GPU",
      tag: "汎用並列プロセッサ",
      color: "#76b900",
      icon: "◆",
      desc: "SIMT方式の汎用アクセラレーター",
      strengths: ["圧倒的なソフト資産", "柔軟な用途", "マルチクラウド対応"],
      share: "約 80%",
    },
    {
      name: "Google TPU",
      tag: "AI専用ASIC",
      color: "#4285f4",
      icon: "●",
      desc: "シストリックアレイで行列演算に特化",
      strengths: ["電力あたり性能", "大規模Pod構成", "低コスト"],
      share: "約 15%",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="TPU vs GPU overview"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        AI Accelerator Landscape
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        2026年のAI計算インフラを支える2大アクセラレーター
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <div
            key={it.name}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${it.color}`,
              backgroundColor: `${it.color}0d`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg" style={{ color: it.color }}>
                {it.icon}
              </span>
              <div>
                <div
                  className="text-sm font-bold"
                  style={{ color: it.color }}
                >
                  {it.name}
                </div>
                <div className="text-[9px] text-foreground/40">{it.tag}</div>
              </div>
              <div className="ml-auto text-[10px] text-foreground/50 tabular-nums">
                シェア {it.share}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 mb-2">
              {it.desc}
            </div>
            <ul className="space-y-0.5">
              {it.strengths.map((s) => (
                <li
                  key={s}
                  className="text-[10px] text-foreground/55 flex items-start gap-1.5"
                >
                  <span style={{ color: it.color }}>▸</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   02. Architecture Comparison
   ───────────────────────────────────────────── */
export function ArchitectureComparisonDiagram() {
  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Architecture comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Architecture
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        SIMT（GPU）と Systolic Array（TPU）の根本的な違い
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* GPU */}
        <div
          className="p-4 rounded-lg"
          style={{
            borderLeft: "3px solid #76b900",
            backgroundColor: "#76b9000d",
          }}
        >
          <div className="text-xs font-bold text-[#76b900] mb-2">
            GPU — SIMT
          </div>
          <div className="text-[10px] text-foreground/50 mb-3">
            Single Instruction, Multiple Threads
          </div>
          <div className="grid grid-cols-8 gap-1 mb-3">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm"
                style={{ backgroundColor: "#76b90033" }}
              />
            ))}
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            数千のCUDA/Tensorコアが独立したスレッドを並列実行。汎用的で、グラフィックスから科学計算、AIまで幅広く対応。
          </div>
        </div>

        {/* TPU */}
        <div
          className="p-4 rounded-lg"
          style={{
            borderLeft: "3px solid #4285f4",
            backgroundColor: "#4285f40d",
          }}
        >
          <div className="text-xs font-bold text-[#4285f4] mb-2">
            TPU — Systolic Array
          </div>
          <div className="text-[10px] text-foreground/50 mb-3">
            行列積和演算に特化した「脈動型」構造
          </div>
          <div className="relative mb-3">
            <div className="grid grid-cols-6 gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[2px] flex items-center justify-center text-[8px]"
                  style={{
                    backgroundColor: "#4285f430",
                    color: "#4285f4",
                  }}
                >
                  ×+
                </div>
              ))}
            </div>
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 text-[#4285f4] text-xs">
              →
            </div>
            <div className="absolute left-1/2 -top-1 -translate-x-1/2 text-[#4285f4] text-xs">
              ↓
            </div>
          </div>
          <div className="text-[10px] text-foreground/55 leading-relaxed">
            データが配列を「脈動」するように流れ、中間結果をメモリに戻さず次の演算へ。行列積に圧倒的な効率。
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   03. Performance Spec Sheet
   ───────────────────────────────────────────── */
export function PerformanceSpecDiagram() {
  const rows = [
    { label: "プロセス", gpu: "TSMC 4NP (4nm+)", tpu: "TSMC 3nm" },
    { label: "演算性能 (FP8)", gpu: "10 PFLOPS", tpu: "4.6 PFLOPS" },
    { label: "演算性能 (FP4/低精度)", gpu: "15 PFLOPS", tpu: "— (未対応)" },
    { label: "メモリ", gpu: "288 GB HBM3e", tpu: "192 GB HBM3e" },
    { label: "メモリ帯域", gpu: "8 TB/s", tpu: "7.37 TB/s" },
    { label: "チップ間通信", gpu: "NVLink 5 (1.8 TB/s)", tpu: "ICI + OCS" },
    {
      label: "スケールアップ単位",
      gpu: "NVL72 (72 chip)",
      tpu: "Pod (9,216 chip)",
    },
    {
      label: "単一システム性能",
      gpu: "1.1 EFLOPS (FP4)",
      tpu: "42.5 EFLOPS (FP8)",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Performance specs"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Spec Sheet (2026)
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        NVIDIA Blackwell Ultra (B300) vs Google Ironwood (TPU v7)
      </div>

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-[10px]">
        <div className="text-foreground/40 font-semibold pb-2">項目</div>
        <div className="text-[#76b900] font-bold pb-2">B300</div>
        <div className="text-[#4285f4] font-bold pb-2">TPU v7</div>
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <div className="text-foreground/55 py-1.5 border-t border-brief-border/50">
              {r.label}
            </div>
            <div className="text-foreground/75 py-1.5 border-t border-brief-border/50 tabular-nums">
              {r.gpu}
            </div>
            <div className="text-foreground/75 py-1.5 border-t border-brief-border/50 tabular-nums">
              {r.tpu}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   04. Power Efficiency
   ───────────────────────────────────────────── */
export function PowerEfficiencyDiagram() {
  const bars = [
    { name: "H100", perf: 30, color: "#76b90088" },
    { name: "B200", perf: 55, color: "#76b900bb" },
    { name: "B300", perf: 70, color: "#76b900" },
    { name: "TPU v5p", perf: 40, color: "#4285f488" },
    { name: "Trillium (v6)", perf: 65, color: "#4285f4bb" },
    { name: "Ironwood (v7)", perf: 95, color: "#4285f4" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Power efficiency"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Perf / Watt (相対値)
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        各世代アクセラレーターの電力あたり性能（H100を30として正規化）
      </div>

      <div className="space-y-2.5">
        {bars.map((b) => (
          <div key={b.name}>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-foreground/60">{b.name}</span>
              <span className="tabular-nums text-foreground/50">
                {b.perf}
              </span>
            </div>
            <div className="h-4 rounded-sm bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-sm transition-all"
                style={{
                  width: `${b.perf}%`,
                  backgroundColor: b.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[10px] text-foreground/40 italic">
        ※ Google / NVIDIA公表値および業界ベンチマークより推計
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   05. Cost Comparison
   ───────────────────────────────────────────── */
export function CostComparisonDiagram() {
  const items = [
    {
      name: "H200",
      rate: "$3.00 – $4.50",
      provider: "AWS / Azure / GCP",
      color: "#76b90099",
    },
    {
      name: "B200",
      rate: "$6.00 – $9.00",
      provider: "AWS / Azure / GCP",
      color: "#76b900bb",
    },
    {
      name: "B300",
      rate: "$10.00 – $14.00",
      provider: "Limited availability",
      color: "#76b900",
    },
    {
      name: "TPU v5p",
      rate: "$4.20",
      provider: "Google Cloud",
      color: "#4285f499",
    },
    {
      name: "Trillium (v6)",
      rate: "$2.70",
      provider: "Google Cloud",
      color: "#4285f4bb",
    },
    {
      name: "Ironwood (v7)",
      rate: "Contact sales",
      provider: "Google Cloud",
      color: "#4285f4",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Cost comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Cloud Rental Pricing
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        オンデマンド価格（$/chip/hour, 2026年4月時点）
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((i) => (
          <div
            key={i.name}
            className="p-3 rounded-lg flex items-center justify-between"
            style={{
              borderLeft: `3px solid ${i.color}`,
              backgroundColor: `${i.color}0d`,
            }}
          >
            <div>
              <div
                className="text-xs font-bold"
                style={{ color: i.color }}
              >
                {i.name}
              </div>
              <div className="text-[9px] text-foreground/40">
                {i.provider}
              </div>
            </div>
            <div className="text-xs font-bold tabular-nums text-foreground/75">
              {i.rate}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-[10px] text-foreground/55 leading-relaxed">
        <span className="font-semibold text-foreground/70">
          7Bモデル×1兆トークンの学習コスト目安:
        </span>{" "}
        H100系 = 約 $800K – $1.2M / Trillium TPU = 約 $400K – $700K
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   06. Software Stack
   ───────────────────────────────────────────── */
export function SoftwareStackDiagram() {
  const stacks = [
    {
      name: "GPU Stack",
      color: "#76b900",
      layers: [
        { name: "Application", items: "PyTorch / TensorFlow / JAX" },
        { name: "Library", items: "Triton / FlashAttention / vLLM" },
        { name: "Runtime", items: "CUDA / cuDNN / TensorRT" },
        { name: "Driver", items: "NVIDIA Driver" },
        { name: "Hardware", items: "Blackwell / Hopper GPU" },
      ],
    },
    {
      name: "TPU Stack",
      color: "#4285f4",
      layers: [
        { name: "Application", items: "JAX / PyTorch-XLA" },
        { name: "Library", items: "Flax / Haiku / MaxText" },
        { name: "Runtime", items: "XLA Compiler" },
        { name: "Driver", items: "libtpu" },
        { name: "Hardware", items: "TPU v5 / v6 / v7" },
      ],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Software stack"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Software Ecosystem
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        CUDA（18年の蓄積）vs XLA（JAX中心の新興エコシステム）
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stacks.map((s) => (
          <div key={s.name}>
            <div
              className="text-xs font-bold mb-2"
              style={{ color: s.color }}
            >
              {s.name}
            </div>
            <div className="space-y-1">
              {s.layers.map((l, i) => (
                <div
                  key={l.name}
                  className="p-2 rounded-md"
                  style={{
                    backgroundColor: `${s.color}${
                      ["22", "1c", "16", "10", "0a"][i]
                    }`,
                  }}
                >
                  <div
                    className="text-[9px] font-semibold"
                    style={{ color: s.color }}
                  >
                    {l.name}
                  </div>
                  <div className="text-[10px] text-foreground/70">
                    {l.items}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   07. Usage Map — Who Uses What
   ───────────────────────────────────────────── */
export function UsageMapDiagram() {
  const companies = [
    { name: "OpenAI", gpu: 85, tpu: 15, note: "2025年末よりTPU併用開始" },
    { name: "Anthropic", gpu: 45, tpu: 55, note: "100万チップTPU調達中" },
    { name: "Google DeepMind", gpu: 0, tpu: 100, note: "全モデルTPU学習" },
    { name: "Meta", gpu: 95, tpu: 5, note: "MTIA併用 / TPU検討中" },
    { name: "Microsoft", gpu: 90, tpu: 0, note: "自社Maia 10%" },
    { name: "xAI / Tesla", gpu: 100, tpu: 0, note: "Colossus 10万 GPU" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Usage map"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Who Uses What (2026)
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        主要AI企業のアクセラレーター利用比率（推定）
      </div>

      <div className="space-y-3">
        {companies.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70 font-medium">
                {c.name}
              </span>
              <span className="text-[9px] text-foreground/45">
                {c.note}
              </span>
            </div>
            <div className="flex h-4 rounded-sm overflow-hidden bg-foreground/5">
              {c.gpu > 0 && (
                <div
                  className="flex items-center justify-center text-[9px] text-white font-semibold"
                  style={{
                    width: `${c.gpu}%`,
                    backgroundColor: "#76b900",
                  }}
                >
                  {c.gpu >= 20 ? `GPU ${c.gpu}%` : ""}
                </div>
              )}
              {c.tpu > 0 && (
                <div
                  className="flex items-center justify-center text-[9px] text-white font-semibold"
                  style={{
                    width: `${c.tpu}%`,
                    backgroundColor: "#4285f4",
                  }}
                >
                  {c.tpu >= 20 ? `TPU ${c.tpu}%` : ""}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   08. Future Outlook
   ───────────────────────────────────────────── */
export function FutureOutlookDiagram() {
  const trends = [
    {
      title: "自社ASICの拡大",
      icon: "⚙",
      color: "#f59e0b",
      desc: "Trainium / Maia / MTIA / Dojo など、ハイパースケーラーの自社チップ化が加速",
    },
    {
      title: "電力が決定打に",
      icon: "⚡",
      color: "#ef4444",
      desc: "1GW級データセンター時代へ。Perf/Wattが最重要KPIに昇格",
    },
    {
      title: "ソフトの民主化",
      icon: "◎",
      color: "#10b981",
      desc: "vLLM / Triton / Mojo などハードウェア抽象化が進展。CUDAの堀が相対化",
    },
    {
      title: "マルチアクセラレーター",
      icon: "◆",
      color: "#8b5cf6",
      desc: "「TPUとGPUを使い分ける」が2026年以降のスタンダードに",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Future outlook"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Beyond 2026
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        AIアクセラレーター市場を動かす4つの潮流
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {trends.map((t) => (
          <div
            key={t.title}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${t.color}`,
              backgroundColor: `${t.color}0d`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg" style={{ color: t.color }}>
                {t.icon}
              </span>
              <div
                className="text-xs font-bold"
                style={{ color: t.color }}
              >
                {t.title}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              {t.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
