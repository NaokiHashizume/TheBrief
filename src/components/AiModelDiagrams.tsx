"use client";

/* ─────────────────────────────────────────────
   AI Model Overview Stats Banner
   ───────────────────────────���───────────────── */
export function AiModelOverviewDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#10b981]">GPT-5.4</div>
        <div className="text-[10px] text-foreground/50 mt-1">OpenAI 最新モデル</div>
        <div className="text-[9px] text-foreground/35">2026年3月5日</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">Gemini 3.1</div>
        <div className="text-[10px] text-foreground/50 mt-1">Google 最新モデル</div>
        <div className="text-[9px] text-foreground/35">2026年2月19日</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">Opus 4.6</div>
        <div className="text-[10px] text-foreground/50 mt-1">Anthropic 最新モデル</div>
        <div className="text-[9px] text-foreground/35">2026年2月5日</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#8b5cf6]">3社</div>
        <div className="text-[10px] text-foreground/50 mt-1">AI覇権を争う</div>
        <div className="text-[9px] text-foreground/35">2026年現在</div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────��─────────
   Model Release Timeline
   ─────────────────��─────────────────────────���─ */
export function ModelTimelineDiagram() {
  const events = [
    { date: "2025/4", label: "o3 / o4-mini", company: "OpenAI", color: "#10b981" },
    { date: "2025/5", label: "Claude 4 Sonnet/Opus", company: "Anthropic", color: "#f59e0b" },
    { date: "2025/6", label: "Gemini 2.5 Pro GA", company: "Google", color: "#3b82f6" },
    { date: "2025/8", label: "GPT-5 / Opus 4.1", company: "OpenAI / Anthropic", color: "#8b5cf6" },
    { date: "2025/10", label: "Sonnet 4.5 / Haiku 4.5", company: "Anthropic", color: "#f59e0b" },
    { date: "2025/11", label: "Gemini 3 Pro / Opus 4.5", company: "Google / Anthropic", color: "#8b5cf6" },
    { date: "2025/12", label: "GPT-5.2 / Gemini 3 Flash", company: "OpenAI / Google", color: "#10b981" },
    { date: "2026/2", label: "Opus 4.6 / Gemini 3.1 Pro", company: "Anthropic / Google", color: "#3b82f6" },
    { date: "2026/3", label: "GPT-5.4", company: "OpenAI", color: "#10b981" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        主要モデルリリース タイムライン (2025-2026)
      </div>
      <div className="space-y-1.5">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="text-[10px] text-foreground/45 tabular-nums w-16 flex-shrink-0 pt-1.5">
              {e.date}
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-3 h-3 rounded-full border-2"
                style={{ borderColor: e.color, backgroundColor: `${e.color}30` }}
              />
              {i < events.length - 1 && (
                <div className="w-px h-6 bg-brief-border" />
              )}
            </div>
            <div className="pt-0.5 min-w-0">
              <div className="text-xs font-semibold" style={{ color: e.color }}>
                {e.label}
              </div>
              <div className="text-[9px] text-foreground/40">{e.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────���─────────────────────────
   Benchmark Comparison Chart
   ──────────────────────────────────────���────── */
export function BenchmarkComparisonDiagram() {
  const benchmarks = [
    { name: "GPQA Diamond", gpt: 92.8, gemini: 94.3, claude: 91.3, unit: "%" },
    { name: "SWE-bench Verified", gpt: 80.0, gemini: 80.6, claude: 80.8, unit: "%" },
    { name: "SWE-bench Pro", gpt: 57.7, gemini: null, claude: 74.0, unit: "%" },
    { name: "MATH", gpt: 94.8, gemini: 94.6, claude: 94.1, unit: "%" },
    { name: "HumanEval", gpt: 93.1, gemini: 89.2, claude: 90.4, unit: "%" },
    { name: "MMLU Pro", gpt: 92.3, gemini: 90.8, claude: 91.7, unit: "%" },
  ];

  const maxVal = 100;
  const colors = { gpt: "#10b981", gemini: "#3b82f6", claude: "#f59e0b" };

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        主要ベンチマーク比較 — フラッグシップモデル
      </div>
      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.gpt }} />
          <span className="text-[10px] text-foreground/60">GPT-5.4</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.gemini }} />
          <span className="text-[10px] text-foreground/60">Gemini 3.1 Pro</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: colors.claude }} />
          <span className="text-[10px] text-foreground/60">Claude Opus 4.6</span>
        </div>
      </div>
      <div className="space-y-3">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="text-[10px] text-foreground/55 font-medium mb-1">{b.name}</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-14 text-[9px] text-foreground/40 text-right">GPT</div>
                <div className="flex-1 h-4 bg-foreground/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2"
                    style={{
                      width: `${(b.gpt / maxVal) * 100}%`,
                      backgroundColor: `${colors.gpt}25`,
                      borderRight: `3px solid ${colors.gpt}`,
                    }}
                  >
                    <span className="text-[9px] font-bold" style={{ color: colors.gpt }}>
                      {b.gpt}{b.unit}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-14 text-[9px] text-foreground/40 text-right">Gemini</div>
                <div className="flex-1 h-4 bg-foreground/[0.04] rounded-full overflow-hidden">
                  {b.gemini !== null ? (
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2"
                      style={{
                        width: `${(b.gemini / maxVal) * 100}%`,
                        backgroundColor: `${colors.gemini}25`,
                        borderRight: `3px solid ${colors.gemini}`,
                      }}
                    >
                      <span className="text-[9px] font-bold" style={{ color: colors.gemini }}>
                        {b.gemini}{b.unit}
                      </span>
                    </div>
                  ) : (
                    <div className="h-full flex items-center pl-3">
                      <span className="text-[9px] text-foreground/30">N/A</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-14 text-[9px] text-foreground/40 text-right">Claude</div>
                <div className="flex-1 h-4 bg-foreground/[0.04] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2"
                    style={{
                      width: `${(b.claude / maxVal) * 100}%`,
                      backgroundColor: `${colors.claude}25`,
                      borderRight: `3px solid ${colors.claude}`,
                    }}
                  >
                    <span className="text-[9px] font-bold" style={{ color: colors.claude }}>
                      {b.claude}{b.unit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ ベンチマーク結果は各社公式発表および独立評価に基づく（2026年3月時点）。SWE-bench Proはデータ汚染リスクが低い新基準。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   API Pricing Comparison Table
   ─────────────────────────────────────��─────── */
export function PricingComparisonDiagram() {
  const models = [
    { name: "GPT-5.4", tier: "フラッグシップ", input: "$2.50", output: "$15.00", color: "#10b981" },
    { name: "GPT-5.4 Mini", tier: "軽量", input: "$0.25", output: "$2.00", color: "#10b981" },
    { name: "o3", tier: "推論特化", input: "$10.00", output: "$40.00", color: "#10b981" },
    { name: "Gemini 3.1 Pro", tier: "フラッグシップ", input: "$2.00", output: "$12.00", color: "#3b82f6" },
    { name: "Gemini 3 Flash", tier: "軽量", input: "$0.15", output: "$0.60", color: "#3b82f6" },
    { name: "Claude Opus 4.6", tier: "フラッグシップ", input: "$5.00", output: "$25.00", color: "#f59e0b" },
    { name: "Claude Sonnet 4.6", tier: "バランス", input: "$3.00", output: "$15.00", color: "#f59e0b" },
    { name: "Claude Haiku 4.5", tier: "軽量", input: "$1.00", output: "$5.00", color: "#f59e0b" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        API料金比較 — 100万トークンあたり (USD)
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[450px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-[10px] text-foreground/45 font-medium py-2 pr-3">モデル</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3">ティア</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3 text-right">入力</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 pl-3 text-right">出力</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.name} className="border-b border-brief-border/50 last:border-0">
                <td className="py-2 pr-3">
                  <span className="text-xs font-bold" style={{ color: m.color }}>
                    {m.name}
                  </span>
                </td>
                <td className="py-2 px-3 text-[10px] text-foreground/50">{m.tier}</td>
                <td className="py-2 px-3 text-xs tabular-nums text-right">{m.input}</td>
                <td className="py-2 pl-3 text-xs tabular-nums text-right">{m.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ バッチAPIは約50%割引。プロンプトキャッシュでさらに最大90%節約可能。価格は2026年3月時点。
      </div>
    </div>
  );
}

/* ────────────────────���────────────────────────
   Multimodal Capabilities Matrix
   ───────────────��───────────────────────────── */
export function MultimodalCapsDiagram() {
  const capabilities = [
    { name: "テキスト入出力", gpt: true, gemini: true, claude: true },
    { name: "画像入力（認識）", gpt: true, gemini: true, claude: true },
    { name: "画像生成", gpt: true, gemini: true, claude: false },
    { name: "音声入力", gpt: true, gemini: true, claude: false },
    { name: "音声生成", gpt: true, gemini: true, claude: false },
    { name: "動画入力", gpt: true, gemini: true, claude: false },
    { name: "動画生成", gpt: true, gemini: true, claude: false },
    { name: "コンピュータ操作", gpt: true, gemini: false, claude: true },
    { name: "コード実行", gpt: true, gemini: true, claude: true },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        マルチモーダル対応状況
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[400px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-[10px] text-foreground/45 font-medium py-2 pr-3">機能</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3 text-center">ChatGPT</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3 text-center">Gemini</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 pl-3 text-center">Claude</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((c) => (
              <tr key={c.name} className="border-b border-brief-border/50 last:border-0">
                <td className="py-2 pr-3 text-xs text-foreground/70">{c.name}</td>
                <td className="py-2 px-3 text-center">
                  <span className={c.gpt ? "text-[#10b981]" : "text-foreground/20"}>
                    {c.gpt ? "\u25CF" : "\u2014"}
                  </span>
                </td>
                <td className="py-2 px-3 text-center">
                  <span className={c.gemini ? "text-[#3b82f6]" : "text-foreground/20"}>
                    {c.gemini ? "\u25CF" : "\u2014"}
                  </span>
                </td>
                <td className="py-2 pl-3 text-center">
                  <span className={c.claude ? "text-[#f59e0b]" : "text-foreground/20"}>
                    {c.claude ? "\u25CF" : "\u2014"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        {"\u25CF"} = 対応　{"\u2014"} = 未対応または限定的（2026年4月時点）
      </div>
    </div>
  );
}

/* ────────────────────────────���────────────────
   Context Window Comparison
   ──────────────────────────────────────���────── */
export function ContextWindowDiagram() {
  const models = [
    { name: "Gemini 3.1 Pro", tokens: 2000000, maxOutput: "N/A", color: "#3b82f6" },
    { name: "GPT-5.4", tokens: 1100000, maxOutput: "128K", color: "#10b981" },
    { name: "Claude Opus 4.6", tokens: 1000000, maxOutput: "128K", color: "#f59e0b" },
    { name: "Claude Sonnet 4.6", tokens: 1000000, maxOutput: "64K", color: "#f59e0b" },
    { name: "Claude Haiku 4.5", tokens: 200000, maxOutput: "64K", color: "#f59e0b" },
  ];

  const maxTokens = 2000000;

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        コンテキストウィンドウ比較
      </div>
      <div className="space-y-3">
        {models.map((m) => (
          <div key={m.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold" style={{ color: m.color }}>
                {m.name}
              </span>
              <span className="text-[10px] text-foreground/45 tabular-nums">
                {(m.tokens / 1000).toLocaleString()}K tokens
              </span>
            </div>
            <div className="h-5 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center pl-2"
                style={{
                  width: `${Math.max((m.tokens / maxTokens) * 100, 8)}%`,
                  backgroundColor: `${m.color}20`,
                  borderRight: `3px solid ${m.color}`,
                }}
              >
                <span className="text-[9px] font-medium text-foreground/50">
                  max output: {m.maxOutput}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ コンテキストウィンドウは入力+出力の合計容量。大きいほど長文の処理が可能。
      </div>
    </div>
  );
}

/* ────────────────────��────────────────────────
   Market Share Diagram
   ────────���────────────────────────────���─────── */
export function MarketShareDiagram() {
  const consumer = [
    { name: "ChatGPT", share: 45.3, prev: 69.1, color: "#10b981" },
    { name: "Gemini", share: 25.2, prev: 14.7, color: "#3b82f6" },
    { name: "その他", share: 29.5, prev: 16.2, color: "#94a3b8" },
  ];

  const enterprise = [
    { name: "Anthropic", share: 40, prev: 12, color: "#f59e0b" },
    { name: "OpenAI", share: 27, prev: 50, color: "#10b981" },
    { name: "Google", share: 21, prev: 7, color: "#3b82f6" },
    { name: "その他", share: 12, prev: 31, color: "#94a3b8" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        市場シェアの変動 (2025年初頭 → 2026年)
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="text-xs font-semibold text-foreground/70 mb-3">コンシューマー市場</div>
          <div className="space-y-2">
            {consumer.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[11px] font-medium" style={{ color: c.color }}>
                    {c.name}
                  </span>
                  <span className="text-[10px] tabular-nums text-foreground/50">
                    {c.prev}% → <span className="font-bold">{c.share}%</span>
                  </span>
                </div>
                <div className="h-3 bg-foreground/[0.04] rounded-full overflow-hidden relative">
                  <div
                    className="absolute h-full rounded-full opacity-20"
                    style={{
                      width: `${c.prev}%`,
                      backgroundColor: c.color,
                    }}
                  />
                  <div
                    className="relative h-full rounded-full"
                    style={{
                      width: `${c.share}%`,
                      backgroundColor: `${c.color}60`,
                      borderRight: `2px solid ${c.color}`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-foreground/70 mb-3">エンタープライズ市場</div>
          <div className="space-y-2">
            {enterprise.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[11px] font-medium" style={{ color: c.color }}>
                    {c.name}
                  </span>
                  <span className="text-[10px] tabular-nums text-foreground/50">
                    {c.prev}% → <span className="font-bold">{c.share}%</span>
                  </span>
                </div>
                <div className="h-3 bg-foreground/[0.04] rounded-full overflow-hidden relative">
                  <div
                    className="absolute h-full rounded-full opacity-20"
                    style={{
                      width: `${c.prev}%`,
                      backgroundColor: c.color,
                    }}
                  />
                  <div
                    className="relative h-full rounded-full"
                    style={{
                      width: `${c.share}%`,
                      backgroundColor: `${c.color}60`,
                      borderRight: `2px solid ${c.color}`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ コンシューマー: アプリ利用シェア。エンタープライ���: LLM支出シェア。薄い色は2025年初頭の値。
      </div>
    </div>
  );
}

/* ────────────────────────────────────���────────
   Strengths Summary Diagram
   ───────────────────────────────────────────── */
export function StrengthsSummaryDiagram() {
  const strengths = [
    { category: "コーディング（複雑）", leader: "Claude", detail: "SWE-bench Pro 74%", color: "#f59e0b" },
    { category: "科学的推論", leader: "Gemini", detail: "GPQA Diamond 94.3%", color: "#3b82f6" },
    { category: "数学", leader: "GPT", detail: "AIME満点 / MATH 94.8%", color: "#10b981" },
    { category: "マルチモーダル", leader: "Gemini", detail: "動画・音声・画像の入出力", color: "#3b82f6" },
    { category: "コンピュータ操作", leader: "GPT", detail: "ネイティブ対応（5.4~）", color: "#10b981" },
    { category: "コンテキスト長", leader: "Gemini", detail: "最大200万トークン", color: "#3b82f6" },
    { category: "コスト効率", leader: "Gemini", detail: "Flash-Lite $0.10/MTok", color: "#3b82f6" },
    { category: "エンタープライズ", leader: "Claude", detail: "新規案件の70%を獲得", color: "#f59e0b" },
    { category: "文章の質", leader: "Claude", detail: "最も自然な文体", color: "#f59e0b" },
    { category: "エコシステム", leader: "Gemini", detail: "Workspace深層連携", color: "#3b82f6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        分野別リーダーシップ — どのモデルが何に強いか
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {strengths.map((s) => (
          <div
            key={s.category}
            className="flex items-center gap-3 p-2.5 rounded-lg"
            style={{ backgroundColor: `${s.color}06`, borderLeft: `3px solid ${s.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-foreground/50">{s.category}</div>
              <div className="text-xs font-bold" style={{ color: s.color }}>
                {s.leader}
              </div>
            </div>
            <div className="text-[9px] text-foreground/40 text-right flex-shrink-0">
              {s.detail}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#10b981" }} />
          <span className="text-[10px] text-foreground/50">OpenAI (GPT)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#3b82f6" }} />
          <span className="text-[10px] text-foreground/50">Google (Gemini)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#f59e0b" }} />
          <span className="text-[10px] text-foreground/50">Anthropic (Claude)</span>
        </div>
      </div>
    </div>
  );
}
