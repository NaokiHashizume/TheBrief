"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   LLM Overview Stats Banner
   ───────────────────────────────────────────── */
export function LlmOverviewDiagram() {
  const stats = [
    { value: "1750億", valueEn: "175B", label: "GPT-3 パラメータ数", labelEn: "GPT-3 parameters", sub: "2020年、OpenAI", subEn: "2020, OpenAI" },
    { value: "5日", valueEn: "5 days", label: "ChatGPT 100万ユーザー", labelEn: "ChatGPT to 1M users", sub: "2022年11月——史上最速", subEn: "Nov 2022 — fastest ever" },
    { value: "27%", label: "幻覚発生確率（研究推定）", labelEn: "Hallucination rate (est.)", sub: "テキストの46%に事実誤り", subEn: "46% of outputs contain factual errors" },
    { value: "16社", label: "日本国産LLM（2025年）", labelEn: "Japanese domestic LLMs (2025)", sub: "tsuzumi / ELYZA / PLaMo 他", subEn: "tsuzumi / ELYZA / PLaMo and more" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="LLM主要数値バナー"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Key Figures
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="大規模言語モデルを数字で理解する" en="LLMs by the numbers" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: "#8b5cf6", backgroundColor: "#8b5cf608" }}
          >
            <div className="text-2xl sm:text-3xl font-bold tabular-nums" style={{ color: "#8b5cf6" }}>
              <T ja={s.value} en={s.valueEn ?? s.value} />
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

      <div className="mt-4 text-[9px] text-foreground/40">
        <T ja="出典: OpenAI, Gartner, AI Data Base, デジタル庁 各種発表" en="Sources: OpenAI, Gartner, AI Data Base, Digital Agency Japan" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Transformer Architecture Flow Diagram
   ───────────────────────────────────────────── */
export function LlmTransformerDiagram() {
  const steps = [
    { label: "入力テキスト", labelEn: "Input Text", desc: "「今日の天気は？」", descEn: '"How is the weather today?"', color: "#8b5cf6" },
    { label: "トークン化", labelEn: "Tokenization", desc: "単語→トークン（数値）に変換", descEn: "Words → tokens (numbers)", color: "#8b5cf6" },
    { label: "埋め込み表現", labelEn: "Embedding", desc: "各トークンを多次元ベクトルへ", descEn: "Each token → high-dim vector", color: "#7c3aed" },
    { label: "Self-Attention", labelEn: "Self-Attention", desc: "単語間の関係性を全対全で計算", descEn: "All-to-all relationship scoring", color: "#6d28d9" },
    { label: "FFN層", labelEn: "Feed-Forward", desc: "特徴を非線形変換（×N層）", descEn: "Non-linear transformation (×N layers)", color: "#5b21b6" },
    { label: "出力生成", labelEn: "Output", desc: "次の単語の確率分布→サンプリング", descEn: "Probability dist. → sampling", color: "#4c1d95" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Transformerアーキテクチャのフロー図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Architecture
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Transformerの処理フロー——入力から出力まで" en="Transformer pipeline — from input to output" />
      </div>

      <div className="flex flex-col sm:flex-row gap-1 items-stretch sm:items-center overflow-x-auto">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-row sm:flex-col items-center gap-1 flex-1">
            <div
              className="p-3 rounded-lg flex-1 w-full text-center"
              style={{ backgroundColor: `${step.color}12`, borderWidth: 1, borderColor: `${step.color}30` }}
            >
              <div className="text-[11px] font-bold" style={{ color: step.color }}>
                <T ja={step.label} en={step.labelEn} />
              </div>
              <div className="text-[9px] text-foreground/50 mt-1 leading-tight">
                <T ja={step.desc} en={step.descEn} />
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="text-foreground/25 font-bold text-sm sm:rotate-0 rotate-90 flex-shrink-0">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-lg bg-foreground/[0.03] text-[10px] text-foreground/50 leading-relaxed">
        <T
          ja="Self-Attentionは文中の全単語ペアの関係をO(n²)で計算。「彼女は山田さんに本を渡した。彼女は喜んだ。」——「彼女」が誰かを理解できる理由がここにある。"
          en="Self-Attention computes all word-pair relationships in O(n²). This is why it can resolve 'She gave the book to Yamada-san. She was happy.' — identifying who 'she' refers to."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LLM Params & Scaling Chart
   ───────────────────────────────────────────── */
export function LlmParamsDiagram() {
  const models = [
    { name: "GPT-3", year: "2020", params: "175B", bar: 18, color: "#10b981" },
    { name: "GPT-4 (推定)", year: "2023", params: "~1T (MoE)", bar: 50, color: "#10b981" },
    { name: "Gemini 1.5 Pro", year: "2024", params: "~1T (MoE)", bar: 50, color: "#3b82f6" },
    { name: "Claude 3 Opus", year: "2024", params: "未公表", bar: 40, color: "#8b5cf6" },
    { name: "Llama 3.1 70B", year: "2024", params: "70B", bar: 7, color: "#f97316" },
    { name: "Gemma 3 27B", year: "2025", params: "27B", bar: 3, color: "#3b82f6" },
    { name: "ELYZA 70B", year: "2025", params: "70B (Llama base)", bar: 7, color: "#ef4444" },
    { name: "PLaMo 2.0", year: "2025", params: "100B+", bar: 10, color: "#ef4444" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="主要LLMのパラメータ数比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Model Scale
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="主要LLMのパラメータ規模——大きさと賢さは別物" en="Scale of major LLMs — size and intelligence are not the same" />
      </div>

      <div className="space-y-2">
        {models.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <div className="w-32 sm:w-40 text-[11px] text-foreground/70 flex-shrink-0">
              <span className="font-medium">{m.name}</span>
              <span className="text-foreground/40 ml-1 text-[9px]">({m.year})</span>
            </div>
            <div className="flex-1 bg-foreground/[0.04] rounded-full h-4 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${Math.min(m.bar * 2, 100)}%`, backgroundColor: `${m.color}70` }}
              />
            </div>
            <div className="text-[10px] tabular-nums text-foreground/50 w-24 text-right flex-shrink-0">
              {m.params}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15 text-[10px] text-foreground/60">
        <T
          ja="注: GPT-4・Gemini 1.5はMoE（Mixture of Experts）アーキテクチャ。表示パラメータ数は全体規模であり、1回の推論で使う実パラメータは一部のみ。"
          en="Note: GPT-4 and Gemini 1.5 use MoE. Listed parameter counts reflect total model size; only a fraction is activated per inference."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GPT / Claude / Gemini / Japanese LLM Comparison Table
   ───────────────────────────────────────────── */
export function LlmComparisonDiagram() {
  const models = [
    {
      name: "GPT-5系",
      provider: "OpenAI",
      color: "#10b981",
      strengths: "UI自動化、Computer Use、エージェント",
      strengthsEn: "UI automation, Computer Use, agents",
      context: "128K",
      price: "~$2.50/$20",
      best: "PCオペレーション自動化",
      bestEn: "PC operation automation",
    },
    {
      name: "Claude Opus 4.6",
      provider: "Anthropic",
      color: "#8b5cf6",
      strengths: "長文処理、コーディング、ビジネス文書",
      strengthsEn: "Long-form, coding, business docs",
      context: "200K",
      price: "$5/$25",
      best: "法務・医療・大規模コード",
      bestEn: "Legal, medical, large codebase",
    },
    {
      name: "Gemini 2.0 Flash",
      provider: "Google",
      color: "#3b82f6",
      strengths: "マルチモーダル、低コスト大量処理",
      strengthsEn: "Multimodal, low-cost high-volume",
      context: "1M",
      price: "$0.075/$0.30",
      best: "動画・画像処理、コスト最適化",
      bestEn: "Video/image processing, cost optimization",
    },
    {
      name: "Rakuten AI 3.0",
      provider: "楽天",
      color: "#ef4444",
      strengths: "日本語特化、楽天エコシステム連携",
      strengthsEn: "Japanese-optimized, Rakuten ecosystem",
      context: "未公表",
      price: "非公開",
      best: "日本語ビジネス、GPT-4o超え主張",
      bestEn: "Japanese business, claims to beat GPT-4o",
    },
    {
      name: "PLaMo 2.0",
      provider: "PFN",
      color: "#ef4444",
      strengths: "日本語フルスクラッチ、企業向け",
      strengthsEn: "Full-scratch Japanese, enterprise",
      context: "未公表",
      price: "要問合せ",
      best: "政府・金融・製造の国内案件",
      bestEn: "Government, finance, manufacturing",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="主要LLM比較表"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Comparison
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="主要LLM 用途別比較（2026年4月時点）" en="Major LLMs by use case (April 2026)" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium">モデル</th>
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium hidden sm:table-cell">強み</th>
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium">Context</th>
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium hidden sm:table-cell">料金 (in/out)</th>
              <th className="text-left py-2 text-foreground/40 font-medium">最適用途</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.name} className="border-b border-brief-border/50 hover:bg-foreground/[0.02]">
                <td className="py-2.5 pr-3">
                  <div className="font-bold text-[11px]" style={{ color: m.color }}>{m.name}</div>
                  <div className="text-[9px] text-foreground/40">{m.provider}</div>
                </td>
                <td className="py-2.5 pr-3 text-foreground/60 hidden sm:table-cell">
                  <T ja={m.strengths} en={m.strengthsEn} />
                </td>
                <td className="py-2.5 pr-3 text-foreground/60 tabular-nums">{m.context}</td>
                <td className="py-2.5 pr-3 text-foreground/60 tabular-nums hidden sm:table-cell">{m.price}</td>
                <td className="py-2.5 text-foreground/70 font-medium">
                  <T ja={m.best} en={m.bestEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-[9px] text-foreground/40">
        <T ja="料金は概算。$は1Mトークンあたり（入力/出力）。国産LLMは要問合せのものが多い。" en="Prices are approximate per 1M tokens (in/out). Japanese models often require direct inquiry for pricing." />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hallucination Causes & Mitigation Diagram
   ───────────────────────────────────────────── */
export function LlmHallucinationDiagram() {
  const causes = [
    { label: "確率的生成の限界", labelEn: "Probabilistic generation", desc: "「次の単語の確率」を出力するため、事実より「それらしい文章」を優先することがある", descEn: "Optimizes for 'likely next word', not factual accuracy" },
    { label: "断言調の学習データ", labelEn: "Confident training text", desc: "論文・ニュース・百科事典は断言調。LLMはその文体ごと学習し、根拠なく自信満々に答える", descEn: "Training data (papers, news) uses confident tone — LLMs inherit that style" },
    { label: "知識カットオフ", labelEn: "Knowledge cutoff", desc: "学習データの期限以降の情報を「知らない」のに答えてしまう", descEn: "No knowledge after training cutoff, yet answers confidently" },
    { label: "指示への過剰適合", labelEn: "Over-instruction", desc: "「必ず答えよ」という指示があると、知らなくても作話して応答する", descEn: "'Always answer' instructions cause fabrication when unknown" },
  ];

  const mitigations = [
    { label: "RAG", desc: "外部DBから根拠を検索して渡す", descEn: "Retrieve source docs before answering" },
    { label: "Chain-of-Thought", desc: "ステップ分解で推論を透明化", descEn: "Step-by-step reasoning reduces errors" },
    { label: "自己整合性チェック", desc: "複数回生成して多数決", descEn: "Multi-sampling + majority vote" },
    { label: "ファクトチェックツール", desc: "専用ツールで生成後に検証", descEn: "Post-generation fact verification" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ハルシネーションの原因と対策"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Hallucination
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="LLMが「嘘をつく」4つの構造的原因と緩和策" en="4 structural causes of LLM hallucination and mitigations" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {causes.map((c) => (
          <div key={c.label} className="p-3 rounded-lg bg-red-500/5 border border-red-500/15">
            <div className="text-[11px] font-bold text-red-400 mb-1">
              <T ja={c.label} en={c.labelEn} />
            </div>
            <div className="text-[10px] text-foreground/55 leading-relaxed">
              <T ja={c.desc} en={c.descEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2 uppercase tracking-wide">
        <T ja="主な緩和策" en="Key mitigations" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {mitigations.map((m) => (
          <div key={m.label} className="p-2.5 rounded-lg bg-green-500/5 border border-green-500/20 text-center">
            <div className="text-[11px] font-bold text-green-400">
              {m.label}
            </div>
            <div className="text-[9px] text-foreground/45 mt-1 leading-tight">
              <T ja={m.desc} en={m.descEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/15 text-[10px] text-foreground/55">
        <T
          ja="注意: RAGも万能ではない。検索の不正確さとLLMの幻覚が複合すると、「信頼できそうな情報源があるように見せながら間違える」という最悪パターンが起きる。"
          en="Warning: RAG is not a silver bullet. Combined retrieval errors and LLM hallucination can create the worst pattern — appearing authoritative while being wrong."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Japanese LLM Landscape Diagram
   ───────────────────────────────────────────── */
export function LlmJapanDiagram() {
  const models = [
    { name: "tsuzumi 2", org: "NTTデータ", type: "独自", typeEn: "Proprietary", use: "政府・金融", useEn: "Gov / Finance", selected: true },
    { name: "Llama-3.1-ELYZA-JP-70B", org: "KDDI / ELYZA", type: "Llamaベース", typeEn: "Llama-based", use: "一般業務", useEn: "General business", selected: true },
    { name: "PLaMo 2.0 Prime", org: "PFN", type: "独自", typeEn: "Proprietary", use: "企業向け", useEn: "Enterprise", selected: true },
    { name: "Rakuten AI 3.0", org: "楽天", type: "Qwenベース", typeEn: "Qwen-based", use: "楽天EC・金融", useEn: "Rakuten EC/Finance", selected: false },
    { name: "Stockmark-2-100B", org: "Stockmark", type: "独自", typeEn: "Proprietary", use: "ビジネスQ&A", useEn: "Business Q&A", selected: false },
    { name: "Llama 3.1 Swallow", org: "東工大 / AIST", type: "Llamaベース", typeEn: "Llama-based", use: "研究・OSS", useEn: "Research / OSS", selected: false },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本語LLM主要モデル一覧"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Japanese LLMs
      </div>
      <div className="text-xs text-foreground/50 mb-2">
        <T ja="国産・日本語特化LLM主要モデル一覧（2026年4月）" en="Major Japanese / Japan-focused LLMs (April 2026)" />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
          ★ <T ja="デジタル庁選定モデル" en="Digital Agency selected" />
        </span>
      </div>

      <div className="space-y-2">
        {models.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-3 p-2.5 rounded-lg"
            style={{ backgroundColor: m.selected ? "#ef444408" : "#ffffff04", borderWidth: 1, borderColor: m.selected ? "#ef444425" : "#ffffff08" }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-foreground/80 truncate">{m.name}</span>
                {m.selected && <span className="text-[9px] text-red-400 flex-shrink-0">★</span>}
              </div>
              <div className="text-[9px] text-foreground/40">{m.org}</div>
            </div>
            <div className="text-[9px] px-2 py-0.5 rounded-full bg-foreground/[0.05] text-foreground/50 flex-shrink-0">
              <T ja={m.type} en={m.typeEn} />
            </div>
            <div className="text-[9px] text-foreground/55 flex-shrink-0 hidden sm:block">
              <T ja={m.use} en={m.useEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/40">
        <T ja="注: 「Llamaベース」はMetaのオープンモデルを日本語データで追加学習したモデル。「独自」はフルスクラッチまたは独自アーキテクチャ。" en="Note: 'Llama-based' = Meta's open model fine-tuned on Japanese data. 'Proprietary' = full-scratch or unique architecture." />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RAG vs Fine-tuning Comparison
   ───────────────────────────────────────────── */
export function LlmRagDiagram() {
  const ragSteps = [
    { n: "1", label: "質問入力", labelEn: "User query", desc: "「〇〇の規定は？」", descEn: '"What does rule X say?"' },
    { n: "2", label: "ベクトル検索", labelEn: "Vector search", desc: "社内DBから関連文書を取得", descEn: "Retrieve relevant docs from DB" },
    { n: "3", label: "コンテキスト注入", labelEn: "Context injection", desc: "文書をプロンプトに追加", descEn: "Append docs to prompt" },
    { n: "4", label: "LLM生成", labelEn: "LLM generation", desc: "根拠ありの回答を生成", descEn: "Generate grounded answer" },
  ];

  const comparison = [
    { label: "RAG", labelEn: "RAG", pro: "知識更新が容易、モデル再学習不要", proEn: "Easy knowledge updates, no retraining", con: "検索精度に依存、複合エラーリスク", conEn: "Depends on retrieval quality, compounded errors", color: "#3b82f6" },
    { label: "ファインチューニング", labelEn: "Fine-tuning", pro: "スタイル・深い知識の埋め込みに強い", proEn: "Embeds style and deep domain knowledge", con: "コスト高・学習データ準備が必要", conEn: "Costly, requires curated training data", color: "#8b5cf6" },
    { label: "LoRA (PEFT)", labelEn: "LoRA (PEFT)", pro: "軽量FT——数時間・少数GPUで完了", proEn: "Lightweight FT — hours, few GPUs", con: "フルFTより効果は限定的", conEn: "Less expressive than full fine-tuning", color: "#f97316" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="RAGとファインチューニングの比較図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        RAG & Fine-tuning
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="LLM実用化の2大技術——RAGフローと手法比較" en="Two pillars of LLM deployment — RAG flow and technique comparison" />
      </div>

      {/* RAG Flow */}
      <div className="flex items-center gap-1 mb-5 overflow-x-auto pb-1">
        {ragSteps.map((s, i) => (
          <div key={s.n} className="flex items-center gap-1 flex-shrink-0">
            <div className="text-center p-2.5 rounded-lg bg-blue-500/8 border border-blue-500/20 min-w-[80px]">
              <div className="text-[9px] text-blue-400 font-bold">STEP {s.n}</div>
              <div className="text-[10px] font-semibold text-foreground/75 mt-0.5">
                <T ja={s.label} en={s.labelEn} />
              </div>
              <div className="text-[8px] text-foreground/40 mt-0.5 leading-tight">
                <T ja={s.desc} en={s.descEn} />
              </div>
            </div>
            {i < ragSteps.length - 1 && <div className="text-foreground/25 text-sm">→</div>}
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="space-y-2">
        {comparison.map((c) => (
          <div key={c.label} className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-foreground/[0.02] border border-foreground/[0.05]">
            <div className="font-bold text-[11px]" style={{ color: c.color }}>
              <T ja={c.label} en={c.labelEn} />
            </div>
            <div className="text-[9px] text-green-400 leading-tight">
              ✓ <T ja={c.pro} en={c.proEn} />
            </div>
            <div className="text-[9px] text-red-400/80 leading-tight">
              ✗ <T ja={c.con} en={c.conEn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LLM Use Case Selection Matrix
   ───────────────────────────────────────────── */
export function LlmUsecaseDiagram() {
  const usecases = [
    { task: "コーディング / Claude Code", taskEn: "Coding / Claude Code", model: "Claude Opus 4.6", reason: "SWE-bench 80.8%、エージェント安定性", reasonEn: "SWE-bench 80.8%, agent stability", color: "#8b5cf6" },
    { task: "UI・ブラウザ自動化", taskEn: "UI / Browser automation", model: "GPT-5系", reason: "Computer Use、画面認識性能が最強", reasonEn: "Computer Use, best screen recognition", color: "#10b981" },
    { task: "動画・画像処理", taskEn: "Video / image processing", model: "Gemini 2.0 Flash", reason: "マルチモーダル統合、1Mコンテキスト", reasonEn: "Multimodal integration, 1M context", color: "#3b82f6" },
    { task: "大量テキスト処理（低コスト）", taskEn: "High-volume text processing", model: "Gemini 2.0 Flash / Claude Haiku", reason: "$0.075〜$0.25/1Mトークン", reasonEn: "$0.075–$0.25 per 1M tokens", color: "#3b82f6" },
    { task: "法務・医療・長文文書", taskEn: "Legal / medical / long docs", model: "Claude Opus 4.6", reason: "200K ctx、Constitutional AI安全性", reasonEn: "200K ctx, Constitutional AI safety", color: "#8b5cf6" },
    { task: "日本語業務システム", taskEn: "Japanese business systems", model: "ELYZA / PLaMo 2.0", reason: "日本語特化、国内規制対応", reasonEn: "Japanese-optimized, domestic compliance", color: "#ef4444" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ユースケース別LLM選択ガイド"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Selection Guide
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="ユースケース別LLM選択ガイド（2026年4月）" en="LLM selection guide by use case (April 2026)" />
      </div>

      <div className="space-y-2">
        {usecases.map((u) => (
          <div key={u.task} className="flex items-start gap-3 p-3 rounded-lg bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-foreground/80">
                <T ja={u.task} en={u.taskEn} />
              </div>
              <div className="text-[9px] text-foreground/40 mt-0.5">
                <T ja={u.reason} en={u.reasonEn} />
              </div>
            </div>
            <div
              className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: `${u.color}15`, color: u.color }}
            >
              {u.model}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg border border-brief-border text-[10px] text-foreground/55 leading-relaxed">
        <T
          ja="マルチLLM戦略: ルーティングレイヤーで「簡単なタスク→安いモデル、複雑なタスク→高いモデル」と振り分けることで、品質を落とさずコストを最大70%削減できる。"
          en="Multi-LLM strategy: Routing 'simple tasks → cheap model, complex tasks → expensive model' can cut costs up to 70% without compromising quality."
        />
      </div>
    </div>
  );
}
