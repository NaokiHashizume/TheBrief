"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   01. TPU vs GPU Overview
   ───────────────────────────────────────────── */
export function TpuGpuOverviewDiagram() {
  const items = [
    {
      name: "NVIDIA GPU",
      tag: "汎用並列プロセッサ",
      tagEn: "General-purpose parallel processor",
      color: "#76b900",
      icon: "◆",
      desc: "SIMT方式の汎用アクセラレーター",
      descEn: "General-purpose accelerator using the SIMT architecture",
      strengths: ["圧倒的なソフト資産", "柔軟な用途", "マルチクラウド対応"],
      strengthsEn: ["Dominant software ecosystem", "Flexible use cases", "Multi-cloud support"],
      share: "約 80%",
    },
    {
      name: "Google TPU",
      tag: "AI専用ASIC",
      tagEn: "AI-dedicated ASIC",
      color: "#4285f4",
      icon: "●",
      desc: "シストリックアレイで行列演算に特化",
      descEn: "Systolic array architecture specialized for matrix operations",
      strengths: ["電力あたり性能", "大規模Pod構成", "低コスト"],
      strengthsEn: ["Performance per watt", "Large-scale Pod configuration", "Lower cost"],
      share: "約 15%",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="TPU と GPU の概要"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="AIアクセラレーターの全体像" en="Overview of AI Accelerators" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年のAI計算インフラを支える2大アクセラレーター" en="The two dominant accelerators powering AI compute infrastructure in 2026" />
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
                <div className="text-[9px] text-foreground/40"><T ja={it.tag} en={it.tagEn} /></div>
              </div>
              <div className="ml-auto text-[10px] text-foreground/50 tabular-nums">
                <T ja="シェア" en="Share" /> {it.share}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 mb-2">
              <T ja={it.desc} en={it.descEn} />
            </div>
            <ul className="space-y-0.5">
              {it.strengths.map((s, idx) => (
                <li
                  key={s}
                  className="text-[10px] text-foreground/55 flex items-start gap-1.5"
                >
                  <span style={{ color: it.color }}>▸</span>
                  <T ja={s} en={it.strengthsEn[idx]} />
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
      aria-label="アーキテクチャ比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="アーキテクチャ" en="Architecture" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="SIMT（GPU）とシストリックアレイ（TPU）の根本的な違い" en="Fundamental differences between SIMT (GPU) and systolic array (TPU)" />
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
            <T ja="単一命令・複数スレッド方式" en="Single Instruction, Multiple Threads" />
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
            <T
              ja="数千のCUDA/Tensorコアが独立したスレッドを並列実行。汎用的で、グラフィックスから科学計算、AIまで幅広く対応。"
              en="Thousands of CUDA/Tensor cores execute independent threads in parallel. Versatile, covering everything from graphics to scientific computing and AI."
            />
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
            <T ja="TPU — シストリックアレイ" en="TPU — Systolic Array" />
          </div>
          <div className="text-[10px] text-foreground/50 mb-3">
            <T ja="行列積和演算に特化した「脈動型」構造" en={`"Pulsating" structure specialized for matrix multiply-accumulate operations`} />
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
            <T
              ja="データが配列を「脈動」するように流れ、中間結果をメモリに戻さず次の演算へ。行列積に圧倒的な効率。"
              en={`Data "pulses" through the array, passing intermediate results directly to the next operation without writing back to memory. Supremely efficient for matrix multiplication.`}
            />
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
    { label: "プロセス", labelEn: "Process node", gpu: "TSMC 4NP (4nm+)", tpu: "TSMC 3nm" },
    { label: "演算性能 (FP8)", labelEn: "Compute (FP8)", gpu: "10 PFLOPS", tpu: "4.6 PFLOPS" },
    { label: "演算性能 (FP4/低精度)", labelEn: "Compute (FP4/low precision)", gpu: "15 PFLOPS", tpu: "— (未対応)", tpuEn: "— (not supported)" },
    { label: "メモリ", labelEn: "Memory", gpu: "288 GB HBM3e", tpu: "192 GB HBM3e" },
    { label: "メモリ帯域", labelEn: "Memory bandwidth", gpu: "8 TB/s", tpu: "7.37 TB/s" },
    { label: "チップ間通信", labelEn: "Chip-to-chip interconnect", gpu: "NVLink 5 (1.8 TB/s)", tpu: "ICI + OCS" },
    {
      label: "スケールアップ単位",
      labelEn: "Scale-up unit",
      gpu: "NVL72 (72 chip)",
      tpu: "Pod (9,216 chip)",
    },
    {
      label: "単一システム性能",
      labelEn: "Single-system performance",
      gpu: "1.1 EFLOPS (FP4)",
      tpu: "42.5 EFLOPS (FP8)",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="性能スペック比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="スペックシート（2026年）" en="Spec Sheet (2026)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        NVIDIA Blackwell Ultra (B300) vs Google Ironwood (TPU v7)
      </div>

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-[10px]">
        <div className="text-foreground/40 font-semibold pb-2"><T ja="項目" en="Spec" /></div>
        <div className="text-[#76b900] font-bold pb-2">B300</div>
        <div className="text-[#4285f4] font-bold pb-2">TPU v7</div>
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <div className="text-foreground/55 py-1.5 border-t border-brief-border/50">
              <T ja={r.label} en={r.labelEn} />
            </div>
            <div className="text-foreground/75 py-1.5 border-t border-brief-border/50 tabular-nums">
              {r.gpu}
            </div>
            <div className="text-foreground/75 py-1.5 border-t border-brief-border/50 tabular-nums">
              {r.tpuEn ? <T ja={r.tpu} en={r.tpuEn} /> : r.tpu}
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
      aria-label="電力効率比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="電力あたり性能（相対値）" en="Performance per Watt (Relative)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="各世代アクセラレーターの電力あたり性能（H100を30として正規化）" en="Power efficiency of each accelerator generation (normalized with H100 = 30)" />
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
        <T ja="※ Google / NVIDIA公表値および業界ベンチマークより推計" en="※ Estimated from Google / NVIDIA published figures and industry benchmarks" />
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
      provider: "提供数限定",
      providerEn: "Limited availability",
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
      rate: "個別見積",
      rateEn: "Custom quote",
      provider: "Google Cloud",
      color: "#4285f4",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="コスト比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="クラウド利用料金" en="Cloud Pricing" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="オンデマンド価格（$/chip/hour, 2026年4月時点）" en="On-demand pricing ($/chip/hour, as of April 2026)" />
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
                {i.providerEn ? <T ja={i.provider} en={i.providerEn} /> : i.provider}
              </div>
            </div>
            <div className="text-xs font-bold tabular-nums text-foreground/75">
              {i.rateEn ? <T ja={i.rate} en={i.rateEn} /> : i.rate}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-[10px] text-foreground/55 leading-relaxed">
        <span className="font-semibold text-foreground/70">
          <T ja="7Bモデル×1兆トークンの学習コスト目安:" en="Estimated training cost for a 7B model × 1T tokens:" />
        </span>{" "}
        H100 = ~$800K–$1.2M / Trillium TPU = ~$400K–$700K
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
      name: "GPU スタック",
      nameEn: "GPU Stack",
      color: "#76b900",
      layers: [
        { name: "アプリケーション", nameEn: "Application", items: "PyTorch / TensorFlow / JAX" },
        { name: "ライブラリ", nameEn: "Libraries", items: "Triton / FlashAttention / vLLM" },
        { name: "ランタイム", nameEn: "Runtime", items: "CUDA / cuDNN / TensorRT" },
        { name: "ドライバ", nameEn: "Driver", items: "NVIDIA Driver" },
        { name: "ハードウェア", nameEn: "Hardware", items: "Blackwell / Hopper GPU" },
      ],
    },
    {
      name: "TPU スタック",
      nameEn: "TPU Stack",
      color: "#4285f4",
      layers: [
        { name: "アプリケーション", nameEn: "Application", items: "JAX / PyTorch-XLA" },
        { name: "ライブラリ", nameEn: "Libraries", items: "Flax / Haiku / MaxText" },
        { name: "ランタイム", nameEn: "Runtime", items: "XLA Compiler" },
        { name: "ドライバ", nameEn: "Driver", items: "libtpu" },
        { name: "ハードウェア", nameEn: "Hardware", items: "TPU v5 / v6 / v7" },
      ],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ソフトウェアスタック比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ソフトウェアエコシステム" en="Software Ecosystem" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="CUDA（18年の蓄積）vs XLA（JAX中心の新興エコシステム）" en="CUDA (18 years of accumulated tooling) vs. XLA (emerging JAX-centered ecosystem)" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stacks.map((s) => (
          <div key={s.name}>
            <div
              className="text-xs font-bold mb-2"
              style={{ color: s.color }}
            >
              <T ja={s.name} en={s.nameEn} />
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
                    <T ja={l.name} en={l.nameEn} />
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
    { name: "OpenAI", gpu: 85, tpu: 15, note: "2025年末よりTPU併用開始", noteEn: "Started using TPUs in late 2025" },
    { name: "Anthropic", gpu: 45, tpu: 55, note: "100万チップTPU調達中", noteEn: "Procuring 1M TPU chips" },
    { name: "Google DeepMind", gpu: 0, tpu: 100, note: "全モデルTPU学習", noteEn: "All models trained on TPUs" },
    { name: "Meta", gpu: 95, tpu: 5, note: "MTIA併用 / TPU検討中", noteEn: "MTIA in use / TPU under consideration" },
    { name: "Microsoft", gpu: 90, tpu: 0, note: "自社Maia 10%", noteEn: "In-house Maia chip at 10%" },
    { name: "xAI / Tesla", gpu: 100, tpu: 0, note: "Colossus 10万 GPU", noteEn: "Colossus cluster: 100K GPUs" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="主要企業の利用状況"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="どの企業が何を使っているか（2026年）" en="Which Companies Use What (2026)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="主要AI企業のアクセラレーター利用比率（推定）" en="Estimated accelerator usage ratio at leading AI companies" />
      </div>

      <div className="space-y-3">
        {companies.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70 font-medium">
                {c.name}
              </span>
              <span className="text-[9px] text-foreground/45">
                <T ja={c.note} en={c.noteEn} />
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
      titleEn: "Rise of In-house ASICs",
      icon: "⚙",
      color: "#f59e0b",
      desc: "Trainium / Maia / MTIA / Dojo など、ハイパースケーラーの自社チップ化が加速",
      descEn: "Hyperscalers accelerate in-house chip development: Trainium, Maia, MTIA, Dojo, and more",
    },
    {
      title: "電力が決定打に",
      titleEn: "Power Efficiency as the Decisive Factor",
      icon: "⚡",
      color: "#ef4444",
      desc: "1GW級データセンター時代へ。Perf/Wattが最重要KPIに昇格",
      descEn: "Entering the era of 1 GW-scale data centers. Perf/Watt becomes the top KPI.",
    },
    {
      title: "ソフトの民主化",
      titleEn: "Software Democratization",
      icon: "◎",
      color: "#10b981",
      desc: "vLLM / Triton / Mojo などハードウェア抽象化が進展。CUDAの堀が相対化",
      descEn: "Hardware abstraction advances through vLLM, Triton, Mojo, etc. CUDA's moat is narrowing.",
    },
    {
      title: "マルチアクセラレーター",
      titleEn: "Multi-Accelerator Era",
      icon: "◆",
      color: "#8b5cf6",
      desc: "「TPUとGPUを使い分ける」が2026年以降のスタンダードに",
      descEn: `"Using both TPUs and GPUs strategically" becomes standard practice from 2026 onward`,
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="今後の展望"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年以降の展望" en="Outlook Beyond 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="AIアクセラレーター市場を動かす4つの潮流" en="Four trends reshaping the AI accelerator market" />
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
                <T ja={t.title} en={t.titleEn} />
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja={t.desc} en={t.descEn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
