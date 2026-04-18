"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   GPT-5.4 Model War 2026 Diagrams
   ───────────────────────────────────────────── */

export function Gpt54BenchmarkOverviewDiagram() {
  const benchmarks = [
    { label: "OSWorld-Verified", labelEn: "Desktop Navigation", gpt54: 75.0, human: 72.4, prev: 47.3, color: "#10b981" },
    { label: "SWE-bench Pro", labelEn: "Coding Tasks", gpt54: 57.7, human: null, prev: 38.2, color: "#8b5cf6" },
    { label: "GPQA Diamond", labelEn: "Science Reasoning", gpt54: 88.1, human: null, prev: 75.4, color: "#3b82f6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="GPT-5.4 benchmark overview chart"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="GPT-5.4 主要ベンチマーク" en="GPT-5.4 Key Benchmarks" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="デスクトップ操作・コーディング・科学推論の成功率比較" en="Comparison of desktop nav, coding, and science reasoning success rates" />
      </div>

      <div className="space-y-5">
        {benchmarks.map((b) => (
          <div key={b.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-foreground/70">
                <T ja={b.label} en={b.labelEn} />
              </span>
              <span className="text-[11px] font-bold" style={{ color: b.color }}>
                GPT-5.4: {b.gpt54}%
              </span>
            </div>
            <div className="relative h-6 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-2 transition-all"
                style={{ width: `${b.gpt54}%`, backgroundColor: `${b.color}55` }}
              />
              {b.human !== null && (
                <div
                  className="absolute top-0 h-full w-0.5 bg-amber-400 opacity-70"
                  style={{ left: `${b.human}%` }}
                  title={`Human: ${b.human}%`}
                />
              )}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-[9px] text-foreground/40">
                <T ja={`前バージョン: ${b.prev}%`} en={`Previous: ${b.prev}%`} />
              </span>
              {b.human !== null && (
                <span className="text-[9px] text-amber-500/70">
                  <T ja={`人間: ${b.human}%`} en={`Human: ${b.human}%`} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: OpenAI公式 / LM Council (2026-04)" en="Source: OpenAI official / LM Council (April 2026)" />
      </div>
    </div>
  );
}

export function Gpt54VsCompetitorsDiagram() {
  const models = [
    { name: "GPT-5.4", score: 84, coding: 57.7, science: 88.1, agent: 75.0, color: "#10b981" },
    { name: "Gemini 3.1 Pro", score: 83, coding: 53.2, science: 85.4, agent: 61.3, color: "#f59e0b" },
    { name: "Claude Opus 4.6", score: 81, coding: 46.8, science: 91.3, agent: 63.2, color: "#8b5cf6" },
    { name: "DeepSeek V3.2", score: 78, coding: 51.0, science: 80.2, agent: 55.0, color: "#ec4899" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="LM Council model ranking comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="LM Council 総合ランキング 2026-04" en="LM Council Overall Rankings April 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="用途別スコア比較——評価軸でリーダーが変わる" en="Scores vary by use case — leaders depend on evaluation axis" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-3 text-foreground/40 font-semibold text-[10px]">
                <T ja="モデル" en="Model" />
              </th>
              <th className="text-right py-2 px-2 text-foreground/40 font-semibold text-[10px]">
                <T ja="総合" en="Overall" />
              </th>
              <th className="text-right py-2 px-2 text-foreground/40 font-semibold text-[10px]">
                <T ja="コーディング" en="Coding" />
              </th>
              <th className="text-right py-2 px-2 text-foreground/40 font-semibold text-[10px]">
                <T ja="科学推論" en="Science" />
              </th>
              <th className="text-right py-2 pl-2 text-foreground/40 font-semibold text-[10px]">
                <T ja="エージェント" en="Agent" />
              </th>
            </tr>
          </thead>
          <tbody>
            {models.map((m, i) => (
              <tr key={m.name} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-2.5 pr-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="font-semibold text-foreground/80">{m.name}</span>
                    {i === 0 && (
                      <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                        #1
                      </span>
                    )}
                  </div>
                </td>
                <td className="text-right py-2.5 px-2">
                  <span className="font-bold text-[13px]" style={{ color: m.color }}>
                    {m.score}
                  </span>
                </td>
                <td className="text-right py-2.5 px-2 text-foreground/60">{m.coding}%</td>
                <td className="text-right py-2.5 px-2 text-foreground/60">{m.science}%</td>
                <td className="text-right py-2.5 pl-2 text-foreground/60">{m.agent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: LM Council (2026-04). スコアは100点満点。" en="Source: LM Council (April 2026). Scores out of 100." />
      </div>
    </div>
  );
}

export function Gpt54CostComparisonDiagram() {
  const models = [
    { name: "GPT-5.4", cost: 100, perf: 100, color: "#10b981" },
    { name: "Gemini 3.1 Pro", cost: 72, perf: 98, color: "#f59e0b" },
    { name: "Claude Opus 4.6", cost: 85, perf: 96, color: "#8b5cf6" },
    { name: "GPT-5.4 mini", cost: 18, perf: 78, color: "#6ee7b7" },
    { name: "DeepSeek V3.2", cost: 11, perf: 90, color: "#ec4899" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI model cost vs performance comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="コスト対性能マトリクス" en="Cost vs Performance Matrix" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="GPT-5.4を基準（100）とした相対比較" en="Relative comparison with GPT-5.4 as baseline (100)" />
      </div>

      <div className="space-y-3">
        {models.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <div className="w-28 flex-shrink-0 text-[11px] font-medium text-foreground/70 text-right">
              {m.name}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-foreground/40 w-14 text-right">
                  <T ja="コスト" en="Cost" />
                </span>
                <div className="flex-1 h-3 bg-foreground/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${m.cost}%`, backgroundColor: `${m.color}60` }}
                  />
                </div>
                <span className="text-[10px] font-semibold w-8 text-right" style={{ color: m.color }}>
                  {m.cost}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-foreground/40 w-14 text-right">
                  <T ja="性能" en="Perf" />
                </span>
                <div className="flex-1 h-3 bg-foreground/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${m.perf}%`, backgroundColor: m.color }}
                  />
                </div>
                <span className="text-[10px] font-semibold w-8 text-right text-foreground/60">
                  {m.perf}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-pink-500/[0.06] border border-pink-500/15">
        <div className="text-[10px] text-pink-500 font-semibold mb-1">
          <T ja="DeepSeek V3.2の衝撃" en="The DeepSeek V3.2 Shock" />
        </div>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="GPT-5.4の11%のコストで90%の性能を実現。年間処理量によっては数億円規模のコスト差が生じる。"
            en="90% of GPT-5.4 performance at 11% of the cost. At scale, annual cost differences can reach hundreds of millions of yen."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: 各社公開API料金・The Brief試算 (2026-04)" en="Source: Public API pricing, The Brief estimates (April 2026)" />
      </div>
    </div>
  );
}

export function Gpt54JapanSoftbankDiagram() {
  const players = [
    {
      name: "SB OAI Japan",
      product: "Crystal Intelligence",
      investment: "30億ドル/年",
      investmentEn: "$3B/year",
      focus: "エージェント型業務自動化",
      focusEn: "Agentic workflow automation",
      color: "#f59e0b",
    },
    {
      name: "Microsoft Japan",
      product: "Azure OpenAI Service",
      investment: "100億ドル (〜2029)",
      investmentEn: "$10B (through 2029)",
      focus: "AI・セキュリティ・人材育成",
      focusEn: "AI, security, talent development",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="SoftBank OpenAI Japan enterprise AI landscape"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本エンタープライズAI二強構造" en="Japan Enterprise AI — Two-Player Structure" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="SoftBank-OpenAI vs Microsoft の日本市場展開" en="SoftBank-OpenAI vs Microsoft in the Japanese market" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {players.map((p) => (
          <div
            key={p.name}
            className="p-4 rounded-lg"
            style={{ borderLeft: `3px solid ${p.color}`, backgroundColor: `${p.color}08` }}
          >
            <div className="text-sm font-bold mb-0.5" style={{ color: p.color }}>
              {p.name}
            </div>
            <div className="text-[10px] text-foreground/50 font-semibold mb-2">{p.product}</div>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-[9px] text-foreground/40 w-14 flex-shrink-0 pt-0.5">
                  <T ja="投資規模" en="Investment" />
                </span>
                <span className="text-[11px] text-foreground/70 font-semibold">
                  <T ja={p.investment} en={p.investmentEn} />
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[9px] text-foreground/40 w-14 flex-shrink-0 pt-0.5">
                  <T ja="注力領域" en="Focus" />
                </span>
                <span className="text-[11px] text-foreground/70">
                  <T ja={p.focus} en={p.focusEn} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: SoftBank Group / Microsoft Source Asia (2026-04)" en="Source: SoftBank Group / Microsoft Source Asia (April 2026)" />
      </div>
    </div>
  );
}

export function Gpt54EnterpriseStrategyDiagram() {
  const tools = [
    { name: "LiteLLM", type: "OSS Router", desc: "100+ LLM統一API", descEn: "Unified API for 100+ LLMs", color: "#8b5cf6" },
    { name: "OpenRouter", type: "Cloud Router", desc: "コスト最適モデル自動選択", descEn: "Auto-select cost-optimal model", color: "#3b82f6" },
    { name: "PortKey", type: "Enterprise", desc: "モデル切替＋監視統合", descEn: "Model switching + integrated monitoring", color: "#10b981" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Enterprise AI model routing strategy diagram"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="モデル選択疲れへの対応策：ルーターレイヤー" en="Addressing Model Selection Fatigue: The Router Layer" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="用途・コスト・性能でAIモデルを自動ルーティングする新アーキテクチャ" en="New architecture that auto-routes AI models by use case, cost, and performance" />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <div className="p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] text-center">
          <span className="text-[11px] font-semibold text-foreground/60">
            <T ja="アプリケーション層" en="Application Layer" />
          </span>
        </div>
        <div className="flex justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className="p-3 rounded-lg bg-[#8b5cf6]/[0.08] border border-[#8b5cf6]/20 text-center">
          <span className="text-[11px] font-bold text-[#8b5cf6]">
            <T ja="ルーターレイヤー（モデル非依存層）" en="Router Layer (Model-Agnostic)" />
          </span>
        </div>
        <div className="flex justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["GPT-5.4", "Gemini 3.1", "Claude 4.6", "DeepSeek V3.2"].map((m, i) => (
            <div
              key={m}
              className="p-2 rounded text-center text-[9px] font-semibold text-foreground/60 bg-foreground/[0.03] border border-foreground/[0.05]"
            >
              {m}
            </div>
          ))}
        </div>
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="主要ルーターツール" en="Major Router Tools" />
      </div>
      <div className="space-y-2">
        {tools.map((t) => (
          <div key={t.name} className="flex items-center gap-3 p-2 rounded-lg bg-foreground/[0.02]">
            <span className="text-[10px] font-bold w-20 flex-shrink-0" style={{ color: t.color }}>
              {t.name}
            </span>
            <span
              className="text-[8px] px-1.5 py-0.5 rounded font-semibold"
              style={{ backgroundColor: `${t.color}20`, color: t.color }}
            >
              {t.type}
            </span>
            <span className="text-[10px] text-foreground/55">
              <T ja={t.desc} en={t.descEn} />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 (2026-04)" en="Source: The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}

export function Gpt54FutureOutlookDiagram() {
  const phases = [
    {
      period: "2024〜2025",
      periodEn: "2024–2025",
      phase: "モデル性能競争",
      phaseEn: "Model Performance Race",
      desc: "ベンチマーク上位争い・パラメータ数競争",
      descEn: "Benchmark leaderboard competition, parameter count race",
      color: "#94a3b8",
      done: true,
    },
    {
      period: "2026",
      periodEn: "2026",
      phase: "統合深度競争（現在）",
      phaseEn: "Integration Depth Race (Now)",
      desc: "ワークフロー埋め込み・エージェント化・企業パッケージ化",
      descEn: "Workflow embedding, agentification, enterprise packaging",
      color: "#8b5cf6",
      done: false,
    },
    {
      period: "2027〜",
      periodEn: "2027+",
      phase: "最適ルーティング競争",
      phaseEn: "Optimal Routing Race",
      desc: "マルチモデル管理・コスト最適化・業務特化モデル選択",
      descEn: "Multi-model management, cost optimization, task-specific routing",
      color: "#3b82f6",
      done: false,
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI competition phase transition outlook"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="AI競争フェーズの移行" en="AI Competition Phase Transitions" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="「モデル性能」から「統合の巧拙」へ" en="From 'model performance' to 'integration sophistication'" />
      </div>

      <div className="space-y-3">
        {phases.map((p, i) => (
          <div
            key={p.period}
            className="relative pl-5 pb-3"
            style={{ borderLeft: `2px solid ${p.done ? "#94a3b820" : p.color}` }}
          >
            <div
              className="absolute left-[-5px] top-1 w-2 h-2 rounded-full"
              style={{ backgroundColor: p.done ? "#94a3b840" : p.color }}
            />
            <div className="text-[9px] text-foreground/40 mb-0.5">
              <T ja={p.period} en={p.periodEn} />
            </div>
            <div
              className="text-[12px] font-bold mb-1"
              style={{ color: p.done ? undefined : p.color }}
            >
              <T ja={p.phase} en={p.phaseEn} />
            </div>
            <div className="text-[11px] text-foreground/55">
              <T ja={p.desc} en={p.descEn} />
            </div>
            {!p.done && i === 1 && (
              <div className="mt-1.5 inline-block text-[8px] px-2 py-0.5 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] font-semibold">
                <T ja="← 現在地" en="← Current phase" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 (2026-04)" en="Source: The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}
