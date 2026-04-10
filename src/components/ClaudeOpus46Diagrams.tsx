"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Claude Opus 4.6 — 概要カード
   ───────────────────────────────────────────── */
export function ClaudeOpus46OverviewDiagram() {
  const specs = [
    {
      label: "リリース日",
      labelEn: "Release Date",
      value: "2026年2月5日",
      valueEn: "Feb 5, 2026",
    },
    {
      label: "コンテキスト",
      labelEn: "Context Window",
      value: "200K（1Mベータ）",
      valueEn: "200K (1M beta)",
    },
    {
      label: "最大出力",
      labelEn: "Max Output",
      value: "128K tokens",
      valueEn: "128K tokens",
    },
    {
      label: "料金（入力/出力）",
      labelEn: "Pricing (in/out)",
      value: "$5 / $25 per 1M tok",
      valueEn: "$5 / $25 per 1M tok",
    },
    {
      label: "主な機能",
      labelEn: "Key Features",
      value: "Agent Teams・拡張思考",
      valueEn: "Agent Teams · Extended Thinking",
    },
    {
      label: "安全フレームワーク",
      labelEn: "Safety Framework",
      value: "Constitutional AI v3",
      valueEn: "Constitutional AI v3",
    },
  ];

  const highlights = [
    {
      icon: "🏆",
      text: "SWE-bench Verified 80.8%",
      sub: "コーディングベンチマーク",
      subEn: "Coding benchmark",
      color: "#8b5cf6",
    },
    {
      icon: "🧠",
      text: "GPQA Diamond 91.3%",
      sub: "PhD水準推論",
      subEn: "PhD-level reasoning",
      color: "#7c3aed",
    },
    {
      icon: "⚡",
      text: "Agent Teams",
      sub: "並列マルチエージェント",
      subEn: "Parallel multi-agent",
      color: "#6d28d9",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 overview specifications"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="Claude Opus 4.6 概要" en="Claude Opus 4.6 Overview" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="Anthropicのフラッグシップモデル — 2026年2月5日リリース"
          en="Anthropic's flagship model — Released February 5, 2026"
        />
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {highlights.map((h) => (
          <div
            key={h.text}
            className="p-3 rounded-lg text-center"
            style={{ backgroundColor: `${h.color}10`, border: `1px solid ${h.color}20` }}
          >
            <div className="text-lg mb-1">{h.icon}</div>
            <div className="text-[11px] font-bold" style={{ color: h.color }}>
              {h.text}
            </div>
            <div className="text-[9px] text-foreground/45 mt-0.5">
              <T ja={h.sub} en={h.subEn} />
            </div>
          </div>
        ))}
      </div>

      {/* Spec grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {specs.map((s) => (
          <div key={s.label} className="p-2.5 rounded-md bg-foreground/[0.03]">
            <div className="text-[9px] text-foreground/40 mb-0.5">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[11px] font-semibold text-foreground/75">
              <T ja={s.value} en={s.valueEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: Anthropic公式発表・morphllm.com・digitalapplied.com (2026-02)"
          en="Source: Anthropic official release, morphllm.com, digitalapplied.com (Feb 2026)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Claude Opus 4.6 — ベンチマーク比較
   ───────────────────────────────────────────── */
export function ClaudeOpus46BenchmarksDiagram() {
  const benchmarks = [
    {
      name: "SWE-bench Verified",
      description: "ソフトウェアエンジニアリング",
      descriptionEn: "Software engineering",
      opus: 80.8,
      gpt: 80.0,
      gemini: 80.6,
      unit: "%",
      winner: "opus",
    },
    {
      name: "GPQA Diamond",
      description: "PhD水準科学推論",
      descriptionEn: "PhD-level science reasoning",
      opus: 91.3,
      gpt: 92.8,
      gemini: 94.3,
      unit: "%",
      winner: "gemini",
    },
    {
      name: "ARC-AGI-2",
      description: "抽象パターン認識",
      descriptionEn: "Abstract pattern recognition",
      opus: 68.8,
      gpt: 73.3,
      gemini: 77.1,
      unit: "%",
      winner: "gemini",
    },
    {
      name: "GDPval-AA",
      description: "経済的知識タスク",
      descriptionEn: "Economically valuable knowledge work",
      opus: 144,
      gpt: 0,
      gemini: 0,
      unit: " Elo差",
      winner: "opus",
      note: "Opus 4.6 vs GPT-5.2比較",
      noteEn: "Opus 4.6 vs GPT-5.2 comparison",
    },
  ];

  const color = {
    opus: "#8b5cf6",
    gpt: "#10b981",
    gemini: "#f59e0b",
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 benchmark comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンチマーク比較" en="Benchmark Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-2">
        <T
          ja="Claude Opus 4.6 vs GPT-5.4 vs Gemini 3.1 Pro"
          en="Claude Opus 4.6 vs GPT-5.4 vs Gemini 3.1 Pro"
        />
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-5 text-[10px]">
        {[
          { label: "Opus 4.6", key: "opus" },
          { label: "GPT-5.4", key: "gpt" },
          { label: "Gemini 3.1", key: "gemini" },
        ].map((l) => (
          <div key={l.key} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: color[l.key as keyof typeof color] }}
            />
            <span className="text-foreground/55">{l.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="flex items-baseline justify-between mb-1.5 flex-wrap gap-1">
              <div>
                <span className="text-[12px] font-semibold text-foreground/80">{b.name}</span>
                <span className="text-[10px] text-foreground/40 ml-2">
                  <T ja={b.description} en={b.descriptionEn} />
                </span>
              </div>
              {b.winner === "opus" && (
                <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "#8b5cf620", color: "#8b5cf6" }}>
                  <T ja="Claude最強" en="Claude wins" />
                </span>
              )}
            </div>

            {b.name !== "GDPval-AA" ? (
              <div className="space-y-1.5">
                {[
                  { key: "opus", label: "Opus 4.6", val: b.opus },
                  { key: "gpt", label: "GPT-5.4", val: b.gpt },
                  { key: "gemini", label: "Gemini 3.1", val: b.gemini },
                ].map((bar) => {
                  const max = Math.max(b.opus, b.gpt, b.gemini);
                  const pct = (bar.val / max) * 100;
                  return (
                    <div key={bar.key} className="flex items-center gap-2">
                      <div className="text-[9px] text-foreground/40 w-16 text-right">{bar.label}</div>
                      <div className="flex-1 h-4 bg-foreground/[0.05] rounded-sm overflow-hidden">
                        <div
                          className="h-full rounded-sm flex items-center justify-end pr-1.5 transition-all"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: color[bar.key as keyof typeof color],
                          }}
                        >
                          <span className="text-[8px] font-bold text-white/90">
                            {bar.val}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-3 rounded-md bg-[#8b5cf6]/[0.06] border border-[#8b5cf6]/15">
                <div className="text-[11px] font-semibold text-[#8b5cf6]">
                  <T ja="+144 Elo優位（金融・法務・医療タスク）" en="+144 Elo advantage (finance, legal, medical tasks)" />
                </div>
                <div className="text-[10px] text-foreground/50 mt-0.5">
                  <T ja={b.note ?? ""} en={b.noteEn ?? ""} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-md bg-amber-500/[0.05] border border-amber-500/15">
        <div className="text-[10px] font-semibold text-amber-600/80 mb-0.5">
          <T ja="ARC-AGI-2の逆説" en="The ARC-AGI-2 Paradox" />
        </div>
        <div className="text-[10px] text-foreground/55 leading-relaxed">
          <T
            ja="汎用推論（ARC-AGI-2）ではGemini・GPTに劣るが、ビジネス用途（GDPval-AA）では+144 Elo優位。「安全性のためにパフォーマンスを犠牲にしている」は誤解だ。"
            en="While trailing Gemini and GPT in abstract reasoning (ARC-AGI-2), Opus 4.6 leads by +144 Elo in business tasks (GDPval-AA). The 'safety at the cost of performance' narrative is a myth."
          />
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: mindstudio.ai・morphllm.com・philippdubach.com・apiyi.com (2026-Q1)"
          en="Source: mindstudio.ai, morphllm.com, philippdubach.com, apiyi.com (Q1 2026)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Constitutional AI × 安全性アプローチ
   ───────────────────────────────────────────── */
export function ClaudeOpus46SafetyDiagram() {
  const layers = [
    {
      step: "01",
      title: "Constitutional AI",
      titleEn: "Constitutional AI",
      desc: "憲法的原則リストを使い、AIが自己批判・自己改善を繰り返す。人間のラベリングを大幅に削減しながら安全性を担保。",
      descEn:
        "AI self-critiques and refines responses against a list of constitutional principles, dramatically reducing human labeling while maintaining safety.",
      color: "#8b5cf6",
    },
    {
      step: "02",
      title: "RLHF（人間フィードバック強化学習）",
      titleEn: "RLHF (Human Feedback RL)",
      desc: "合成データで初期学習した後、人間の評価者が報酬モデルを調整。Constitutional AIで生成した高品質データを活用することで効率化。",
      descEn:
        "After pre-training on synthetic data, human raters tune the reward model. High-quality Constitutional AI–generated data improves efficiency.",
      color: "#7c3aed",
    },
    {
      step: "03",
      title: "Project Glasswing との接続",
      titleEn: "Connection to Project Glasswing",
      desc: "Claude Mythos（未公開フラッグシップ）の攻撃的サイバー能力を受け、AWS・Apple・Googleら12社と共同でOSSの脆弱性を修正する官民連携プロジェクト。",
      descEn:
        "In response to Claude Mythos's offensive cyber capabilities, a public-private initiative with 12 partners (AWS, Apple, Google, etc.) to fix OSS vulnerabilities.",
      color: "#6d28d9",
    },
    {
      step: "04",
      title: "Responsible Scaling Policy",
      titleEn: "Responsible Scaling Policy",
      desc: "モデルが一定の危険能力閾値を超えた場合、自動的にリリースを保留するポリシー。Opus 4.6はASL-3（高リスク）に分類されるが、十分な緩和策が確認されリリース。",
      descEn:
        "Policy to automatically hold release when a model surpasses capability thresholds. Opus 4.6 is classified ASL-3 (high risk), released after sufficient mitigations were verified.",
      color: "#5b21b6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 safety approach layers"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="安全性アプローチ" en="Safety Approach" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="Constitutional AI から Project Glasswing まで — 4層の安全設計"
          en="From Constitutional AI to Project Glasswing — 4-layer safety architecture"
        />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[#8b5cf6]/30 to-[#5b21b6]/10" />

        <div className="space-y-4">
          {layers.map((l) => (
            <div key={l.step} className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-10"
                style={{ backgroundColor: l.color }}
              >
                {l.step}
              </div>
              <div className="flex-1 pb-2">
                <div className="text-[12px] font-semibold text-foreground/80 mb-1">
                  <T ja={l.title} en={l.titleEn} />
                </div>
                <div className="text-[11px] text-foreground/60 leading-relaxed">
                  <T ja={l.desc} en={l.descEn} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 p-3 rounded-md bg-[#8b5cf6]/[0.06] border border-[#8b5cf6]/15">
        <div className="text-[10px] font-semibold text-[#8b5cf6] mb-0.5">
          <T ja="逆説：制約が能力を生む" en="Paradox: Constraints generate capability" />
        </div>
        <div className="text-[10px] text-foreground/55 leading-relaxed">
          <T
            ja="Constitutional AIは単なる「安全フィルター」ではなく、より一貫性・信頼性の高い応答を訓練するための強化学習インフラだ。安全性と能力はトレードオフではなく、同じ訓練パイプラインの産物。"
            en="Constitutional AI is not merely a 'safety filter' — it is RL infrastructure that trains more consistent and reliable responses. Safety and capability are not a trade-off; they emerge from the same training pipeline."
          />
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: anthropic.com/research・anthropic.com/glasswing・rlhfbook.com (2026-04)"
          en="Source: anthropic.com/research, anthropic.com/glasswing, rlhfbook.com (April 2026)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GPT-5.4 / Gemini 3.1 Pro との比較
   ───────────────────────────────────────────── */
export function ClaudeOpus46VsRivalsDiagram() {
  const categories = [
    {
      cat: "コーディング",
      catEn: "Coding",
      opus: "◎ SWE-bench 80.8%",
      opusEn: "◎ SWE-bench 80.8%",
      gpt: "○ 80.0% / UI自動化首位",
      gptEn: "○ 80.0% / UI automation leader",
      gemini: "○ 80.6%",
      geminiEn: "○ 80.6%",
    },
    {
      cat: "推論・科学",
      catEn: "Reasoning / Science",
      opus: "○ GPQA 91.3%",
      opusEn: "○ GPQA 91.3%",
      gpt: "○ GPQA 92.8%",
      gptEn: "○ GPQA 92.8%",
      gemini: "◎ GPQA 94.3% / ARC 77.1%",
      geminiEn: "◎ GPQA 94.3% / ARC 77.1%",
    },
    {
      cat: "文章・ライティング",
      catEn: "Writing Quality",
      opus: "◎ 評価者全員が最高評価",
      opusEn: "◎ Highest rating from all evaluators",
      gpt: "○ 高品質",
      gptEn: "○ High quality",
      gemini: "△ スタイル維持が課題",
      geminiEn: "△ Tone consistency challenges",
    },
    {
      cat: "コンテキスト長",
      catEn: "Context Length",
      opus: "○ 200K（1Mベータ）",
      opusEn: "○ 200K (1M beta)",
      gpt: "○ 1M tokens",
      gptEn: "○ 1M tokens",
      gemini: "◎ 1M tokens（標準）",
      geminiEn: "◎ 1M tokens (standard)",
    },
    {
      cat: "ビジネス用途",
      catEn: "Business Tasks",
      opus: "◎ GDPval-AA +144 Elo",
      opusEn: "◎ GDPval-AA +144 Elo",
      gpt: "○ エンタープライズ実績",
      gptEn: "○ Enterprise track record",
      gemini: "○ GCP統合で強み",
      geminiEn: "○ Strength via GCP integration",
    },
    {
      cat: "料金",
      catEn: "Pricing",
      opus: "△ $5/$25 per 1M",
      opusEn: "△ $5/$25 per 1M",
      gpt: "△ $2.50/$20 per 1M",
      gptEn: "△ $2.50/$20 per 1M",
      gemini: "◎ $2/$10 per 1M",
      geminiEn: "◎ $2/$10 per 1M",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 vs rivals comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="競合比較" en="Competitive Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T
          ja="Opus 4.6 × GPT-5.4 × Gemini 3.1 Pro — カテゴリ別強弱マップ"
          en="Opus 4.6 × GPT-5.4 × Gemini 3.1 Pro — category-by-category strength map"
        />
      </div>

      {/* Header */}
      <div className="grid grid-cols-4 gap-1 mb-2">
        <div className="text-[9px] text-foreground/35" />
        {[
          { label: "Opus 4.6", color: "#8b5cf6" },
          { label: "GPT-5.4", color: "#10b981" },
          { label: "Gemini 3.1", color: "#f59e0b" },
        ].map((h) => (
          <div key={h.label} className="text-[9px] font-semibold text-center" style={{ color: h.color }}>
            {h.label}
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        {categories.map((c) => (
          <div key={c.cat} className="grid grid-cols-4 gap-1 items-start">
            <div className="text-[10px] text-foreground/55 py-1.5 font-medium">
              <T ja={c.cat} en={c.catEn} />
            </div>
            {[
              { val: c.opus, valEn: c.opusEn, color: "#8b5cf6" },
              { val: c.gpt, valEn: c.gptEn, color: "#10b981" },
              { val: c.gemini, valEn: c.geminiEn, color: "#f59e0b" },
            ].map((cell, idx) => (
              <div
                key={idx}
                className="text-[9px] leading-snug p-1.5 rounded text-center"
                style={{
                  backgroundColor: cell.val.startsWith("◎")
                    ? `${cell.color}15`
                    : cell.val.startsWith("△")
                    ? "#94a3b820"
                    : `${cell.color}08`,
                  color: cell.val.startsWith("◎")
                    ? cell.color
                    : cell.val.startsWith("△")
                    ? "#94a3b8"
                    : "inherit",
                }}
              >
                <T ja={cell.val} en={cell.valEn} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-[9px] text-foreground/40">
        <span>◎ = 最強クラス</span>
        <span>○ = 高水準</span>
        <span>△ = 課題あり</span>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T
          ja="出典: mindstudio.ai・evolink.ai・nxcode.io・tech-insider.org (2026-Q1)"
          en="Source: mindstudio.ai, evolink.ai, nxcode.io, tech-insider.org (Q1 2026)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   日本市場 — 採用事例マップ
   ───────────────────────────────────────────── */
export function ClaudeOpus46JapanDiagram() {
  const cases = [
    {
      org: "みずほフィナンシャルグループ",
      orgEn: "Mizuho Financial Group",
      users: "3万人",
      usersEn: "30,000 employees",
      use: "行内業務全般でClaude活用",
      useEn: "Company-wide Claude deployment",
      sector: "金融",
      sectorEn: "Finance",
      color: "#8b5cf6",
    },
    {
      org: "野村総合研究所（NRI）",
      orgEn: "Nomura Research Institute (NRI)",
      users: "パートナー拡大",
      usersEn: "Partnership expansion",
      use: "日本初Amazon Bedrock向けAnthropic認定リセラー（2025年11月）",
      useEn: "Japan's first Anthropic-certified reseller for Amazon Bedrock (Nov 2025)",
      sector: "コンサル",
      sectorEn: "Consulting",
      color: "#7c3aed",
    },
    {
      org: "クラスメソッド",
      orgEn: "Classmethod",
      users: "全社導入",
      usersEn: "Company-wide",
      use: "コードベースの99%をClaude Codeが生成",
      useEn: "Claude Code generates 99% of codebase",
      sector: "IT",
      sectorEn: "IT",
      color: "#6d28d9",
    },
    {
      org: "Anthropic Japan",
      orgEn: "Anthropic Japan",
      users: "東京オフィス開設",
      usersEn: "Tokyo office opened",
      use: "2025年10月29日に日本法人設立。日本語対応・規制産業向け支援を強化。",
      useEn: "Japan subsidiary established Oct 29, 2025. Enhanced Japanese-language and regulated-industry support.",
      sector: "プラットフォーム",
      sectorEn: "Platform",
      color: "#5b21b6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 Japan adoption case studies"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本市場の採用事例" en="Japan Market Adoption" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="Anthropic Japan設立以降の主要導入事例（2025〜2026年）"
          en="Key adoption cases since Anthropic Japan established (2025–2026)"
        />
      </div>

      <div className="space-y-3">
        {cases.map((c) => (
          <div
            key={c.org}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${c.color}`,
              backgroundColor: `${c.color}08`,
            }}
          >
            <div className="flex items-baseline justify-between mb-1.5 flex-wrap gap-1">
              <span className="text-[12px] font-bold text-foreground/80">
                <T ja={c.org} en={c.orgEn} />
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: `${c.color}20`, color: c.color }}
                >
                  <T ja={c.sector} en={c.sectorEn} />
                </span>
                <span className="text-[10px] font-semibold" style={{ color: c.color }}>
                  <T ja={c.users} en={c.usersEn} />
                </span>
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja={c.use} en={c.useEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-md bg-foreground/[0.03]">
        <div className="text-[10px] font-semibold text-foreground/60 mb-1">
          <T ja="日本展開の特徴" en="Japan Strategy Characteristics" />
        </div>
        <div className="text-[10px] text-foreground/50 leading-relaxed">
          <T
            ja="日本のClaude利用は「開発中心」が特徴。Microsoftイベントでも実態が報告された通り、エンジニア・データサイエンティストがAPI経由で活用するケースが多く、一般コンシューマー向けよりも法人・開発者向けの浸透が先行している。"
            en="Japan's Claude usage is characterized by developer-centric adoption. As reported at Microsoft events, engineers and data scientists primarily access Claude via API, with enterprise and developer penetration leading ahead of general consumer adoption."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T
          ja="出典: impress.co.jp・nri.com・weeklybcn.com・aismiley.co.jp (2025〜2026)"
          en="Source: impress.co.jp, nri.com, weeklybcn.com, aismiley.co.jp (2025–2026)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ユースケース — 得意領域マップ
   ───────────────────────────────────────────── */
export function ClaudeOpus46UsecasesDiagram() {
  const usecases = [
    {
      icon: "⚖️",
      title: "法務・コンプライアンス",
      titleEn: "Legal & Compliance",
      desc: "契約書レビュー・規制文書の解析。200Kコンテキストで長大な文書を一括処理。Constitutional AIによる正確性が稟議を通りやすくする。",
      descEn:
        "Contract review and regulatory document analysis. 200K context enables processing of large document sets. Constitutional AI accuracy eases internal approvals.",
      strength: "最強",
      strengthEn: "Best-in-class",
      color: "#8b5cf6",
    },
    {
      icon: "🏥",
      title: "医療・ヘルスケア",
      titleEn: "Healthcare",
      desc: "診療記録の要約・医学文献の解析。HealthBench Hardでも高評価。HIPAA準拠の企業向けデプロイが可能。",
      descEn:
        "Medical record summarization and literature analysis. High HealthBench Hard scores. HIPAA-compliant enterprise deployment available.",
      strength: "高適合",
      strengthEn: "High fit",
      color: "#7c3aed",
    },
    {
      icon: "💻",
      title: "エンタープライズコーディング",
      titleEn: "Enterprise Coding",
      desc: "Claude Code powering agent teams。SWE-bench 80.8%。大規模コードベースのリファクタリング・エラー修正で他を圧倒。",
      descEn:
        "Claude Code powers agent teams. SWE-bench 80.8%. Dominates in large-codebase refactoring and error resolution.",
      strength: "最強",
      strengthEn: "Best-in-class",
      color: "#6d28d9",
    },
    {
      icon: "✍️",
      title: "長文コンテンツ生成",
      titleEn: "Long-form Content",
      desc: "レポート・技術文書・分析レポートの生成。ライティング品質は評価者全員から最高評価。一貫したトーンと文体維持が強み。",
      descEn:
        "Reports, technical documents, analytical writing. Top-rated writing quality across all evaluators. Consistent tone and style across long documents.",
      strength: "高適合",
      strengthEn: "High fit",
      color: "#5b21b6",
    },
    {
      icon: "🤖",
      title: "マルチエージェント・自律タスク",
      titleEn: "Multi-agent / Autonomous Tasks",
      desc: "Agent Teamsにより複数サブエージェントを並列実行。長期・複合タスクの自律処理が可能。Claude Code統合でCI/CDへの組み込みも。",
      descEn:
        "Agent Teams enable parallel sub-agent execution. Autonomous handling of long-horizon and multi-step tasks. Claude Code integration enables CI/CD embedding.",
      strength: "最強",
      strengthEn: "Best-in-class",
      color: "#4c1d95",
    },
    {
      icon: "🔢",
      title: "抽象的パターン認識",
      titleEn: "Abstract Pattern Recognition",
      desc: "ARC-AGI-2では68.8%とGemini・GPTに劣る。数学オリンピック級の純粋推論や初見の抽象タスクはGeminiの方が得意。",
      descEn:
        "68.8% on ARC-AGI-2, trailing Gemini and GPT. Pure abstract reasoning and novel pattern tasks where Gemini leads.",
      strength: "改善余地",
      strengthEn: "Room to improve",
      color: "#94a3b8",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Claude Opus 4.6 use case map"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ユースケース適合マップ" en="Use Case Fit Map" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="Claude Opus 4.6 が最も輝く領域・苦手な領域"
          en="Where Claude Opus 4.6 excels — and where it falls short"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {usecases.map((u) => (
          <div
            key={u.title}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${u.color}`,
              backgroundColor: `${u.color}08`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{u.icon}</span>
              <span className="text-[11px] font-bold text-foreground/80">
                <T ja={u.title} en={u.titleEn} />
              </span>
              <span
                className="ml-auto text-[9px] px-1.5 py-0.5 rounded font-semibold"
                style={{
                  backgroundColor: u.strength === "改善余地" ? "#94a3b820" : `${u.color}20`,
                  color: u.strength === "改善余地" ? "#94a3b8" : u.color,
                }}
              >
                <T ja={u.strength} en={u.strengthEn} />
              </span>
            </div>
            <div className="text-[10px] text-foreground/60 leading-relaxed">
              <T ja={u.desc} en={u.descEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-md bg-[#8b5cf6]/[0.06] border border-[#8b5cf6]/15">
        <div className="text-[10px] text-foreground/60 leading-relaxed">
          <T
            ja="「安全のためにパフォーマンスを犠牲にしている」という誤解は、ARC-AGI-2という1つのベンチマークから来る。しかし企業が実際に必要とするタスク（法務・医療・コード・長文）では、Opus 4.6はGPT・Geminiと並ぶか上回る。"
            en="The myth that 'Anthropic sacrifices performance for safety' stems from a single benchmark — ARC-AGI-2. But in the tasks enterprises actually need (legal, medical, coding, long-form), Opus 4.6 matches or outperforms GPT and Gemini."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T
          ja="出典: apiyi.com・evolink.ai・philippdubach.com・humai.blog (2026-Q1)"
          en="Source: apiyi.com, evolink.ai, philippdubach.com, humai.blog (Q1 2026)"
        />
      </div>
    </div>
  );
}
