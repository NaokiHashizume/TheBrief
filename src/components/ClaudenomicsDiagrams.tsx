"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Claudenomics Overview Stats Banner
   ───────────────────────────────────────────── */
export function ClaudenomicsOverviewDiagram() {
  const stats = [
    { value: "$30B", label: "Anthropic ARR (2026春)", labelEn: "Anthropic ARR (Spring 2026)", sub: "$1B (2024末) から30倍", subEn: "30× from $1B in late 2024" },
    { value: "67%", label: "Opus 料金下落率", labelEn: "Opus price reduction", sub: "$15/$75 → $5/$25 per MTok", subEn: "$15/$75 → $5/$25 per MTok" },
    { value: "95%", label: "Batch+Cache 最大削減率", labelEn: "Max savings (Batch+Cache)", sub: "公式確認済みの削減効果", subEn: "Officially confirmed savings" },
    { value: "80%", label: "エンタープライズ比率", labelEn: "Enterprise revenue share", sub: "年$100万超の企業が1000社超", subEn: "1,000+ companies spending $1M+/yr" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="クロードノミクス主要数値バナー"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Claudenomics
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Anthropicのトークン経済——数字で見る全体像" en="Anthropic token economy at a glance" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: "#8b5cf6", backgroundColor: "#8b5cf608" }}
          >
            <div className="text-2xl sm:text-3xl font-bold tabular-nums" style={{ color: "#8b5cf6" }}>
              {s.value}
            </div>
            <div className="text-[11px] font-semibold mt-1">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[9px] text-foreground/45 mt-0.5 leading-relaxed">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Anthropic, SaaStr, Sacra, Sherwood News (2026年4月)" en="Sources: Anthropic, SaaStr, Sacra, Sherwood News (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Claude API Pricing Tiers Comparison
   ───────────────────────────────────────────── */
export function ClaudenomicsPricingDiagram() {
  const models = [
    {
      name: "Haiku 4.5",
      tier: "速度・軽量",
      tierEn: "Speed / Light",
      inputPrice: "$1",
      outputPrice: "$5",
      context: "200K",
      useCase: "分類・変換・定型処理",
      useCaseEn: "Classification, conversion, routine",
      color: "#10b981",
      width: 20,
    },
    {
      name: "Sonnet 4.6",
      tier: "バランス（推奨）",
      tierEn: "Balanced (recommended)",
      inputPrice: "$3",
      outputPrice: "$15",
      context: "1M",
      useCase: "推論・要約・コードレビュー",
      useCaseEn: "Reasoning, summary, code review",
      color: "#8b5cf6",
      width: 60,
    },
    {
      name: "Opus 4.6",
      tier: "フラッグシップ",
      tierEn: "Flagship",
      inputPrice: "$5",
      outputPrice: "$25",
      context: "1M",
      useCase: "法務・医療・複雑推論",
      useCaseEn: "Legal, medical, complex reasoning",
      color: "#f59e0b",
      width: 100,
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude APIモデル別料金比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Pricing Tiers
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Claude API 料金体系（2026年4月）——100万トークン(MTok)あたりドル" en="Claude API pricing (April 2026) — USD per 1M tokens (MTok)" />
      </div>

      <div className="space-y-4">
        {models.map((m) => (
          <div key={m.name} className="p-4 rounded-xl border border-brief-border/50">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="font-bold text-[14px]" style={{ color: m.color }}>{m.name}</div>
                <div className="text-[10px] text-foreground/45 mt-0.5">
                  <T ja={m.tier} en={m.tierEn} />
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[11px] text-foreground/50">
                  <span className="font-bold text-[13px] text-foreground/80">{m.inputPrice}</span> 入力
                  <span className="mx-1 text-foreground/25">/</span>
                  <span className="font-bold text-[13px] text-foreground/80">{m.outputPrice}</span> 出力
                </div>
                <div className="text-[9px] text-foreground/35 mt-0.5">context: {m.context}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-foreground/[0.04] rounded-full h-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.width}%`, backgroundColor: `${m.color}60` }} />
              </div>
              <div className="text-[10px] text-foreground/55 flex-shrink-0">
                <T ja={m.useCase} en={m.useCaseEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15 text-[10px] text-foreground/60">
        <T
          ja="出力は入力の5倍高コスト。プロンプト設計で出力量を制御することがコスト最適化の第一歩。「JSON形式で200文字以内で答えよ」などの制約が有効。"
          en="Output costs 5× more than input. Controlling output length via prompt design is the first step in cost optimization. Constraints like 'Answer in JSON under 200 characters' are effective."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Prompt Caching Economics Diagram
   ───────────────────────────────────────────── */
export function ClaudenomicsCachingDiagram() {
  const scenarios = [
    { label: "キャッシュなし（毎回フル処理）", labelEn: "No cache (full processing every time)", cost: "$0.060", saving: "0%", bar: 100, color: "#ef4444" },
    { label: "キャッシュあり（10回/時）", labelEn: "With cache (10 calls/hr)", cost: "$0.013", saving: "78%", bar: 22, color: "#8b5cf6" },
    { label: "キャッシュあり（100回/時）", labelEn: "With cache (100 calls/hr)", cost: "$0.004", saving: "93%", bar: 7, color: "#10b981" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="プロンプトキャッシングのコスト削減効果"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Prompt Caching
      </div>
      <div className="text-xs text-foreground/50 mb-2">
        <T ja="キャッシュの削減効果——2000トークンのシステムプロンプト / Sonnet 4.6 ($3/MTok)" en="Cache savings — 2,000-token system prompt / Sonnet 4.6 ($3/MTok)" />
      </div>

      {/* Cache mechanics */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/15 text-center">
          <div className="text-[10px] text-red-400 font-bold mb-1">
            <T ja="書き込みコスト" en="Cache write cost" />
          </div>
          <div className="text-[22px] font-bold text-red-400">×1.25</div>
          <div className="text-[9px] text-foreground/45 mt-1">
            <T ja="通常入力の125%（初回のみ）" en="125% of base input (first time only)" />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20 text-center">
          <div className="text-[10px] text-green-400 font-bold mb-1">
            <T ja="読み出しコスト" en="Cache read cost" />
          </div>
          <div className="text-[22px] font-bold text-green-400">×0.10</div>
          <div className="text-[9px] text-foreground/45 mt-1">
            <T ja="通常入力の10%（2回目以降）" en="10% of base input (subsequent calls)" />
          </div>
        </div>
      </div>

      {/* Cost comparison bars */}
      <div className="space-y-3 mb-4">
        {scenarios.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-foreground/60">
                <T ja={s.label} en={s.labelEn} />
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tabular-nums text-foreground/70">{s.cost}/時</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                  -{s.saving}
                </span>
              </div>
            </div>
            <div className="h-3 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${s.bar}%`, backgroundColor: `${s.color}50` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/15 text-[10px] text-foreground/60">
        <T
          ja="TTL: Haiku 4.5 → 1時間 / Sonnet 4.6・Opus 4.6 → 5分。高頻度呼び出しほど効果大。設計の鉄則:「静的コンテンツ（システムプロンプト・文書）を先頭、動的コンテンツ（ユーザー入力）を末尾」"
          en="TTL: Haiku 4.5 → 1 hr / Sonnet 4.6 & Opus 4.6 → 5 min. Higher frequency = more savings. Design rule: 'static content (system prompt, docs) first, dynamic content (user input) last'"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Batch API + Caching Combined Savings
   ───────────────────────────────────────────── */
export function ClaudenomicsBatchDiagram() {
  const methods = [
    { label: "標準 API", labelEn: "Standard API", cost: "$1,800", bar: 100, color: "#ef4444", desc: "即時処理、フル料金", descEn: "Immediate, full price" },
    { label: "Batch API のみ", labelEn: "Batch API only", cost: "$900", bar: 50, color: "#f97316", desc: "24h以内、50%割引", descEn: "Within 24h, 50% discount" },
    { label: "Batch + キャッシング", labelEn: "Batch + Caching", cost: "$180", bar: 10, color: "#10b981", desc: "最大90%+ 削減", descEn: "Up to 90%+ reduction" },
    { label: "最大最適化時", labelEn: "Fully optimized", cost: "$90", bar: 5, color: "#8b5cf6", desc: "最大95%削減（公式確認）", descEn: "Up to 95% savings (official)" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Batch APIとキャッシングの組み合わせ効果"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Token Maximizing
      </div>
      <div className="text-xs text-foreground/50 mb-2">
        <T ja="Batch API × キャッシング——組み合わせコスト削減効果" en="Batch API × Caching — combined cost reduction" />
      </div>
      <div className="text-[9px] text-foreground/40 mb-4">
        <T ja="前提: Sonnet 4.6 / 1日10,000件 / 各1,000トークン入力+200トークン出力 / 月換算" en="Assumption: Sonnet 4.6 / 10,000 docs/day / 1,000 input + 200 output tokens each / monthly" />
      </div>

      <div className="space-y-3 mb-4">
        {methods.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between items-center mb-1">
              <div>
                <span className="text-[11px] font-semibold text-foreground/70">
                  <T ja={m.label} en={m.labelEn} />
                </span>
                <span className="text-[9px] text-foreground/40 ml-2">
                  <T ja={m.desc} en={m.descEn} />
                </span>
              </div>
              <span className="text-[12px] font-bold tabular-nums" style={{ color: m.color }}>{m.cost}/月</span>
            </div>
            <div className="h-4 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div className="h-full rounded-full flex items-center pl-2 transition-all" style={{ width: `${m.bar}%`, backgroundColor: `${m.color}40` }}>
                {m.bar >= 20 && (
                  <span className="text-[8px] font-bold" style={{ color: m.color }}>{m.bar}%</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/15 text-[10px] text-foreground/55">
        <span className="font-bold text-amber-400">
          <T ja="注意: " en="Note: " />
        </span>
        <T
          ja="Batch APIはレイテンシの代償あり（24時間以内）。リアルタイム応答が必要なユーザー向けアプリには使用不可。バックオフィス処理・分析・非同期生成に限定する。"
          en="Batch API has a latency trade-off (within 24 hours). Not suitable for user-facing real-time apps. Limit to back-office processing, analytics, and async generation."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Multi-LLM Routing 70/20/10 Rule
   ───────────────────────────────────────────── */
export function ClaudenomicsRoutingDiagram() {
  const tiers = [
    {
      model: "Haiku 4.5",
      pct: 70,
      color: "#10b981",
      price: "$1/$5",
      tasks: ["キーワード抽出", "定型文生成", "単純分類", "短いQ&A", "テキスト変換"],
      tasksEn: ["Keyword extraction", "Template generation", "Simple classification", "Short Q&A", "Text conversion"],
    },
    {
      model: "Sonnet 4.6",
      pct: 20,
      color: "#8b5cf6",
      price: "$3/$15",
      tasks: ["コードレビュー", "要約・翻訳", "複数ステップ推論", "文書作成"],
      tasksEn: ["Code review", "Summary / translation", "Multi-step reasoning", "Document writing"],
    },
    {
      model: "Opus 4.6",
      pct: 10,
      color: "#f59e0b",
      price: "$5/$25",
      tasks: ["法務・医療文書解析", "高難易度コード生成", "深い推論・分析", "意思決定支援"],
      tasksEn: ["Legal/medical doc analysis", "Hard coding tasks", "Deep reasoning", "Decision support"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="マルチLLMルーティング 70/20/10ルール"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Routing Strategy
      </div>
      <div className="text-xs text-foreground/50 mb-2">
        <T ja="70/20/10 ルーティングルール——全Sonnet比でコスト半減" en="70/20/10 routing rule — cut costs vs. all-Sonnet by 50%+" />
      </div>

      {/* Distribution bar */}
      <div className="flex rounded-lg overflow-hidden mb-5 h-8">
        {tiers.map((t) => (
          <div
            key={t.model}
            className="flex items-center justify-center text-[10px] font-bold text-white"
            style={{ width: `${t.pct}%`, backgroundColor: t.color }}
          >
            {t.pct}%
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {tiers.map((t) => (
          <div key={t.model} className="p-3 rounded-lg" style={{ backgroundColor: `${t.color}08`, borderWidth: 1, borderColor: `${t.color}20` }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                <span className="font-bold text-[12px]" style={{ color: t.color }}>{t.model}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/[0.05] text-foreground/50">{t.pct}%</span>
              </div>
              <span className="text-[10px] tabular-nums text-foreground/45">{t.price} /MTok</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {t.tasks.map((task, i) => (
                <span key={task} className="text-[9px] px-2 py-0.5 rounded-full bg-foreground/[0.04] text-foreground/55">
                  <T ja={task} en={t.tasksEn[i]} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/40 leading-relaxed">
        <T
          ja="日本語注意: 英語より1.5〜2倍トークン数が多い。コスト見積もりは実際の日本語テキストでトークン数を計測してから行うこと。"
          en="Japanese note: Japanese uses 1.5–2× more tokens than English. Always measure actual token counts with real Japanese text before estimating costs."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Anthropic Revenue Growth Timeline
   ───────────────────────────────────────────── */
export function ClaudenomicsRevenueDiagram() {
  const milestones = [
    { date: "2024年末", dateEn: "Late 2024", arr: "$1B", arrNum: 1, note: "シリーズE完了", noteEn: "Series E closed" },
    { date: "2025年夏", dateEn: "Summer 2025", arr: "$3B", arrNum: 3, note: "Claude 3.5 Sonnet人気", noteEn: "Claude 3.5 Sonnet traction" },
    { date: "2025年末", dateEn: "Late 2025", arr: "$9B", arrNum: 9, note: "Claude Code登場", noteEn: "Claude Code launches" },
    { date: "2026年2月", dateEn: "Feb 2026", arr: "$14B", arrNum: 14, note: "シリーズG $30B / $380Bバリュ", noteEn: "Series G $30B / $380B valuation" },
    { date: "2026年春", dateEn: "Spring 2026", arr: "$30B+", arrNum: 30, note: "Claude Code $2.5B単独", noteEn: "Claude Code $2.5B standalone" },
  ];

  const maxVal = 30;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Anthropic収益成長タイムライン"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Revenue Growth
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Anthropic 年間収益ランレート（ARR）の推移" en="Anthropic Annual Recurring Revenue (ARR) growth" />
      </div>

      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div key={m.date} className="flex items-center gap-3">
            <div className="w-20 sm:w-24 text-[10px] text-foreground/50 flex-shrink-0 text-right">
              <T ja={m.date} en={m.dateEn} />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-foreground/[0.04] rounded-full h-5 overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center pl-2 transition-all"
                  style={{
                    width: `${(m.arrNum / maxVal) * 100}%`,
                    backgroundColor: i === milestones.length - 1 ? "#8b5cf660" : "#8b5cf625",
                  }}
                >
                  <span className="text-[9px] font-bold text-[#8b5cf6]">{m.arr}</span>
                </div>
              </div>
            </div>
            <div className="text-[9px] text-foreground/40 w-32 sm:w-44 flex-shrink-0 hidden sm:block">
              <T ja={m.note} en={m.noteEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-[9px]">
        <div className="p-2 rounded-lg bg-foreground/[0.03]">
          <div className="text-foreground/40 mb-0.5">
            <T ja="収益の80%" en="80% of revenue" />
          </div>
          <div className="font-bold text-foreground/70">
            <T ja="エンタープライズ（API法人顧客）" en="Enterprise (API business clients)" />
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.03]">
          <div className="text-foreground/40 mb-0.5">
            <T ja="年$100万+の顧客" en="$1M+ annual customers" />
          </div>
          <div className="font-bold text-foreground/70">
            <T ja="500社→1,000社（2ヶ月で倍増）" en="500 → 1,000 companies (doubled in 2 months)" />
          </div>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: SaaStr, Sacra, Sherwood News, Anthropic Series G 発表 (2026年2月)" en="Sources: SaaStr, Sacra, Sherwood News, Anthropic Series G announcement (Feb 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Token Demand Paradox Diagram
   ───────────────────────────────────────────── */
export function ClaudenomicsParadoxDiagram() {
  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="トークン需要の逆説図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        The Paradox
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="単価下落 × 需要爆増——総コストが増え続ける構造" en="Price drop × demand explosion — why total costs keep rising" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-center">
          <div className="text-3xl font-bold text-green-400">-67%</div>
          <div className="text-[10px] font-semibold text-foreground/60 mt-1">
            <T ja="Opus 単価下落" en="Opus price drop" />
          </div>
          <div className="text-[9px] text-foreground/40 mt-0.5">
            <T ja="$15/$75 → $5/$25" en="$15/$75 → $5/$25" />
          </div>
        </div>
        <div className="flex items-center justify-center text-3xl text-foreground/20 font-bold">×</div>
        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
          <div className="text-3xl font-bold text-red-400">+30×</div>
          <div className="text-[10px] font-semibold text-foreground/60 mt-1">
            <T ja="Anthropic ARR成長" en="Anthropic ARR growth" />
          </div>
          <div className="text-[9px] text-foreground/40 mt-0.5">
            <T ja="$1B → $30B (14ヶ月)" en="$1B → $30B (14 months)" />
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wide mb-2">
          <T ja="エージェントAIによるトークン爆消費" en="Agent AI token explosion" />
        </div>
        {[
          { task: "単純チャット応答", taskEn: "Simple chat reply", tokens: "〜500 tok", bar: 5, color: "#10b981" },
          { task: "文書要約タスク", taskEn: "Document summary", tokens: "〜5,000 tok", bar: 20, color: "#f97316" },
          { task: "Claude Code: 小機能実装", taskEn: "Claude Code: small feature", tokens: "〜50,000 tok", bar: 55, color: "#ef4444" },
          { task: "Claude Code: 複雑タスク", taskEn: "Claude Code: complex task", tokens: "〜500,000 tok", bar: 100, color: "#7c3aed" },
        ].map((item) => (
          <div key={item.task}>
            <div className="flex justify-between text-[9px] text-foreground/50 mb-0.5">
              <T ja={item.task} en={item.taskEn} />
              <span className="tabular-nums font-medium" style={{ color: item.color }}>{item.tokens}</span>
            </div>
            <div className="h-2.5 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.bar}%`, backgroundColor: `${item.color}50` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/15 text-[10px] text-foreground/55">
        <T
          ja="ガートナー予測: 2030年までに推論コスト90%削減。しかしAIエージェント普及により消費量が爆増するため、総コストは増加する可能性が高い。タスクあたりのトークン消費量の管理こそが重要。"
          en="Gartner forecast: 90% inference cost reduction by 2030. But AI agent adoption will explode consumption, so total costs may still rise. Managing tokens-per-task is the key metric."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Enterprise Strategy Framework
   ───────────────────────────────────────────── */
export function ClaudenomicsStrategyDiagram() {
  const steps = [
    {
      step: "STEP 1",
      title: "消費量の計測",
      titleEn: "Measure consumption",
      desc: "APIログからモデル別・タスク別のトークン消費量を集計。コストの80%を占めるタスクを特定する。",
      descEn: "Aggregate token usage by model and task from API logs. Identify the tasks driving 80% of costs.",
      icon: "📊",
      color: "#8b5cf6",
    },
    {
      step: "STEP 2",
      title: "ワークロード分類",
      titleEn: "Classify workloads",
      desc: "速度 × 品質の2軸で4象限に分類。各象限に最適なモデル×APIの組み合わせを割り当てる。",
      descEn: "Classify into 4 quadrants on speed × quality axes. Assign optimal model × API combination to each.",
      icon: "🗂️",
      color: "#3b82f6",
    },
    {
      step: "STEP 3",
      title: "プロンプト最適化",
      titleEn: "Optimize prompts",
      desc: "出力トークンを制限する制約をシステムプロンプトに追加。JSON形式・箇条書き・最大文字数の指定。",
      descEn: "Add output constraints to system prompts: JSON format, bullet points, max character limits.",
      icon: "✂️",
      color: "#10b981",
    },
    {
      step: "STEP 4",
      title: "ロックイン回避",
      titleEn: "Avoid lock-in",
      desc: "Claude一択ではなくGemini・GPT・Llamaへのスイッチコストゼロのラッパーアーキテクチャを設計。",
      descEn: "Design wrapper architecture with zero switching cost to Gemini, GPT, or Llama — avoid single-vendor lock-in.",
      icon: "🔓",
      color: "#f97316",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="企業向けトークン最適化フレームワーク"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Strategy
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="企業向けトークン最適化 4ステップフレームワーク" en="4-step token optimization framework for enterprises" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="p-4 rounded-xl"
            style={{ backgroundColor: `${s.color}08`, borderWidth: 1, borderColor: `${s.color}20` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full" style={{ backgroundColor: `${s.color}20`, color: s.color }}>
                {s.step}
              </span>
              <span className="font-bold text-[12px] text-foreground/80">
                <T ja={s.title} en={s.titleEn} />
              </span>
            </div>
            <p className="text-[10px] text-foreground/55 leading-relaxed">
              <T ja={s.desc} en={s.descEn} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-[10px] text-foreground/55 leading-relaxed">
        <span className="font-bold text-foreground/70">
          <T ja="即効策: " en="Quick win: " />
        </span>
        <T
          ja="今すぐプロンプトキャッシングを実装し、Batch APIの適用範囲を評価するだけで、多くの場合は月次コストを30〜60%削減できる。この2つが最初に取り組むべき最適化だ。"
          en="Implementing prompt caching now and evaluating Batch API coverage will reduce monthly costs by 30–60% in most cases. These two are the highest-ROI optimizations to tackle first."
        />
      </div>
    </div>
  );
}
