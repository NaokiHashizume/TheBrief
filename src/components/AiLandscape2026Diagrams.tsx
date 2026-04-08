"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   AI Landscape 2026 — 4社ポジショニングマップ
   ───────────────────────────────────────────── */
export function AiLandscape2026OverviewDiagram() {
  const companies = [
    {
      name: "OpenAI",
      position: "API中心 × 閉鎖型",
      positionEn: "API-first × Closed",
      strategy: "B2B/B2C両輪。ChatGPT + API + Microsoft統合でエンタープライズ制覇を狙う。",
      strategyEn: "Dual B2B/B2C approach. ChatGPT + API + Microsoft integration targeting enterprise dominance.",
      color: "#10b981",
      tag: "収益最大化",
      tagEn: "Revenue maximization",
    },
    {
      name: "Anthropic",
      position: "安全性 × エンタープライズ",
      positionEn: "Safety × Enterprise",
      strategy: "Constitutional AIで差別化。大企業・政府向けの高信頼モデルとしてAPI展開。",
      strategyEn: "Differentiated by Constitutional AI. API deployment for large enterprises and governments.",
      color: "#8b5cf6",
      tag: "安全性ブランド",
      tagEn: "Safety brand",
    },
    {
      name: "Meta",
      position: "SNS統合 × 大規模展開",
      positionEn: "SNS integration × Scale",
      strategy: "Instagram/WhatsApp/Facebookの30億人に直接リーチ。Muse Sparkで一般消費者を制す。",
      strategyEn: "Direct reach to 3B users via Instagram/WhatsApp/Facebook. Muse Spark targets mass consumer.",
      color: "#3b82f6",
      tag: "配布力最強",
      tagEn: "Unmatched distribution",
    },
    {
      name: "Google",
      position: "検索×クラウド × 研究",
      positionEn: "Search × Cloud × Research",
      strategy: "検索・Workspace・GCPに深く統合。Gemini 3.1 Proで技術ベンチマーク首位を維持。",
      strategyEn: "Deep integration across Search, Workspace, GCP. Gemini 3.1 Pro leads technical benchmarks.",
      color: "#f59e0b",
      tag: "エコシステム統合",
      tagEn: "Ecosystem integration",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI landscape 2026 positioning map"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年AI覇権地図" en="AI Power Map 2026" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Meta・OpenAI・Anthropic・Google — 戦略ポジション一覧" en="Meta, OpenAI, Anthropic, Google — strategic positioning at a glance" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {companies.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${c.color}`,
              backgroundColor: `${c.color}08`,
            }}
          >
            <div className="flex items-baseline justify-between gap-2 flex-wrap mb-2">
              <span className="text-sm font-bold" style={{ color: c.color }}>
                {c.name}
              </span>
              <span
                className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${c.color}20`, color: c.color }}
              >
                <T ja={c.tag} en={c.tagEn} />
              </span>
            </div>
            <div className="text-[10px] font-semibold text-foreground/50 mb-1.5">
              <T ja={c.position} en={c.positionEn} />
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              <T ja={c.strategy} en={c.strategyEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社公式発表・The Brief編集部分析 (2026-04)" en="Source: Company announcements, The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   主要モデル比較表
   ───────────────────────────────────────────── */
export function AiLandscape2026ModelsDiagram() {
  const models = [
    {
      name: "GPT-5.4",
      company: "OpenAI",
      color: "#10b981",
      release: "2026年Q1",
      releaseEn: "Q1 2026",
      context: "256K tokens",
      pricing: "$15/1Mtok",
      strength: "コーディング・論理推論",
      strengthEn: "Coding & logical reasoning",
      openness: "クローズド",
      opennessEn: "Closed",
    },
    {
      name: "Claude Opus 4.6",
      company: "Anthropic",
      color: "#8b5cf6",
      release: "2026年Q1",
      releaseEn: "Q1 2026",
      context: "200K tokens",
      pricing: "$18/1Mtok",
      strength: "安全性・長文処理",
      strengthEn: "Safety & long-context",
      openness: "クローズド",
      opennessEn: "Closed",
    },
    {
      name: "Gemini 3.1 Pro",
      company: "Google",
      color: "#f59e0b",
      release: "2026年Q1",
      releaseEn: "Q1 2026",
      context: "1M tokens",
      pricing: "$10/1Mtok",
      strength: "マルチモーダル・検索統合",
      strengthEn: "Multimodal & search integration",
      openness: "クローズド",
      opennessEn: "Closed",
    },
    {
      name: "Muse Spark",
      company: "Meta (MSL)",
      color: "#3b82f6",
      release: "2026年4月",
      releaseEn: "April 2026",
      context: "128K tokens",
      pricing: "無料（SNS統合）",
      pricingEn: "Free (SNS integrated)",
      strength: "視覚推論・HealthBench",
      strengthEn: "Visual reasoning & HealthBench",
      openness: "クローズド（SNS限定）",
      opennessEn: "Closed (SNS-native)",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="2026 major AI model comparison table"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="主要モデル比較" en="Major model comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="2026年時点の主要フロンティアモデル — 性能・料金・特徴" en="Leading frontier models as of 2026 — capabilities, pricing, features" />
      </div>

      <div className="space-y-3">
        {models.map((m) => (
          <div
            key={m.name}
            className="p-3 sm:p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${m.color}`,
              backgroundColor: `${m.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <span className="text-sm font-bold" style={{ color: m.color }}>
                {m.name}
              </span>
              <span className="text-[10px] text-foreground/45">{m.company}</span>
              <span className="text-[9px] text-foreground/35 tabular-nums ml-auto">
                <T ja={m.release} en={m.releaseEn} />
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div>
                <div className="text-foreground/35 mb-0.5"><T ja="コンテキスト" en="Context" /></div>
                <div className="font-semibold text-foreground/70">{m.context}</div>
              </div>
              <div>
                <div className="text-foreground/35 mb-0.5"><T ja="料金" en="Pricing" /></div>
                <div className="font-semibold text-foreground/70">
                  <T ja={m.pricing} en={m.pricingEn ?? m.pricing} />
                </div>
              </div>
              <div>
                <div className="text-foreground/35 mb-0.5"><T ja="強み" en="Strength" /></div>
                <div className="font-semibold text-foreground/70">
                  <T ja={m.strength} en={m.strengthEn} />
                </div>
              </div>
              <div>
                <div className="text-foreground/35 mb-0.5"><T ja="公開度" en="Openness" /></div>
                <div className="font-semibold text-foreground/70">
                  <T ja={m.openness} en={m.opennessEn} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社公式ドキュメント・The Brief編集部まとめ (2026-04)" en="Source: Official documentation, The Brief editorial summary (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ベンチマーク比較バーチャート
   ───────────────────────────────────────────── */
export function AiLandscape2026BenchmarkDiagram() {
  const benchmarks = [
    {
      name: "GPQA Diamond",
      desc: "PhD水準推論",
      descEn: "PhD-level reasoning",
      max: 100,
      scores: [
        { model: "Gemini 3.1 Pro", value: 94.3, color: "#f59e0b" },
        { model: "GPT-5.4", value: 92.8, color: "#10b981" },
        { model: "Claude Opus 4.6", value: 92.7, color: "#8b5cf6" },
        { model: "Muse Spark", value: 89.5, color: "#3b82f6" },
      ],
    },
    {
      name: "ARC AGI 2",
      desc: "抽象的推論・パターン認識",
      descEn: "Abstract reasoning & pattern recognition",
      max: 100,
      scores: [
        { model: "Gemini 3.1 Pro", value: 76.5, color: "#f59e0b" },
        { model: "GPT-5.4", value: 76.1, color: "#10b981" },
        { model: "Claude Opus 4.6", value: 72.3, color: "#8b5cf6" },
        { model: "Muse Spark", value: 42.5, color: "#3b82f6" },
      ],
    },
    {
      name: "MMMU Pro",
      desc: "マルチモーダル理解",
      descEn: "Multimodal understanding",
      max: 100,
      scores: [
        { model: "Gemini 3.1 Pro", value: 83.9, color: "#f59e0b" },
        { model: "GPT-5.4", value: 82.8, color: "#10b981" },
        { model: "Muse Spark", value: 80.4, color: "#3b82f6" },
        { model: "Claude Opus 4.6", value: 78.6, color: "#8b5cf6" },
      ],
    },
    {
      name: "HealthBench Hard",
      desc: "医療情報の質",
      descEn: "Medical information quality",
      max: 60,
      scores: [
        { model: "Muse Spark", value: 42.8, color: "#3b82f6" },
        { model: "GPT-5.4", value: 38.1, color: "#10b981" },
        { model: "Claude Opus 4.6", value: 36.4, color: "#8b5cf6" },
        { model: "Gemini 3.1 Pro", value: 35.7, color: "#f59e0b" },
      ],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="2026 AI model benchmark comparison chart"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンチマーク比較" en="Benchmark comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年主要ベンチマーク — 各社モデルのスコア比較" en="2026 key benchmarks — model score comparison across companies" />
      </div>

      <div className="space-y-6">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xs font-semibold">{b.name}</span>
              <span className="text-[9px] text-foreground/40">
                <T ja={b.desc} en={b.descEn} />
              </span>
            </div>
            <div className="space-y-1.5">
              {b.scores.map((s) => (
                <div key={s.model} className="flex items-center gap-2">
                  <div className="w-28 text-[9px] text-foreground/50 text-right flex-shrink-0">
                    {s.model}
                  </div>
                  <div className="flex-1 h-5 bg-foreground/[0.03] rounded overflow-hidden">
                    <div
                      className="h-full rounded flex items-center justify-end pr-1.5"
                      style={{
                        width: `${(s.value / b.max) * 100}%`,
                        backgroundColor: s.color,
                        opacity: 0.8,
                      }}
                    >
                      <span className="text-[9px] font-bold text-white tabular-nums">
                        {s.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社公式ベンチマーク報告・The Brief編集部集計 (2026-04)" en="Source: Official benchmark reports, The Brief editorial compilation (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   各社ビジネスモデル比較
   ───────────────────────────────────────────── */
export function AiLandscape2026StrategyDiagram() {
  const strategies = [
    {
      company: "OpenAI",
      color: "#10b981",
      model: "API収益 + ChatGPT課金",
      modelEn: "API revenue + ChatGPT subscriptions",
      target: "開発者・企業・一般消費者",
      targetEn: "Developers, enterprises, consumers",
      moat: "MicrosoftのAzure統合と巨大ユーザーベース",
      moatEn: "Microsoft Azure integration and massive user base",
      risk: "競合の値下げ圧力・GPUコスト",
      riskEn: "Price competition and GPU costs",
      openClosed: "クローズド",
      openClosedEn: "Closed",
      why: "IP保護と収益最大化が最優先",
      whyEn: "IP protection and revenue maximization are top priorities",
    },
    {
      company: "Anthropic",
      color: "#8b5cf6",
      model: "エンタープライズAPI特化",
      modelEn: "Enterprise API specialist",
      target: "金融・医療・法務などの規制産業",
      targetEn: "Regulated industries: finance, healthcare, legal",
      moat: "Constitutional AIによる安全性ブランド",
      moatEn: "Safety brand powered by Constitutional AI",
      risk: "限られたコンシューマーリーチ",
      riskEn: "Limited consumer reach",
      openClosed: "クローズド",
      openClosedEn: "Closed",
      why: "安全性担保のためコントロールが不可欠",
      whyEn: "Control is essential to guarantee safety",
    },
    {
      company: "Meta",
      color: "#3b82f6",
      model: "SNS統合による間接収益",
      modelEn: "Indirect revenue via SNS integration",
      target: "SNS上の30億人の一般消費者",
      targetEn: "3B general consumers across SNS platforms",
      moat: "Instagram・WhatsApp・Facebookの配布網",
      moatEn: "Instagram, WhatsApp, Facebook distribution network",
      risk: "直接API収益が限定的",
      riskEn: "Limited direct API revenue",
      openClosed: "Muse Sparkはクローズド",
      openClosedEn: "Muse Spark is closed",
      why: "広告収益エコシステムを最大化するため",
      whyEn: "To maximize the advertising revenue ecosystem",
    },
    {
      company: "Google",
      color: "#f59e0b",
      model: "検索統合 + GCPクラウド収益",
      modelEn: "Search integration + GCP cloud revenue",
      target: "検索ユーザー + GCP企業顧客",
      targetEn: "Search users + GCP enterprise customers",
      moat: "Google検索・Workspaceへの深い統合",
      moatEn: "Deep integration with Google Search & Workspace",
      risk: "AI検索への移行で既存収益を毀損するリスク",
      riskEn: "Risk of cannibalizing own search revenue with AI search",
      openClosed: "クローズド（Gemmaはオープン）",
      openClosedEn: "Closed (Gemma series open-weight)",
      why: "検索広告を守りながら新市場を開拓",
      whyEn: "Protect search ads while opening new markets",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI company business model comparison 2026"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ビジネスモデル比較" en="Business model comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="4社の収益戦略・対象顧客・オープン/クローズド選択の理由" en="Revenue strategies, target customers, and rationale for open vs. closed source" />
      </div>

      <div className="space-y-3">
        {strategies.map((s) => (
          <div
            key={s.company}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${s.color}`,
              backgroundColor: `${s.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-2 flex-wrap">
              <span className="text-sm font-bold" style={{ color: s.color }}>
                {s.company}
              </span>
              <span className="text-[10px] font-semibold text-foreground/50">
                <T ja={s.model} en={s.modelEn} />
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
              <div>
                <span className="text-foreground/35"><T ja="対象顧客: " en="Target: " /></span>
                <span className="text-foreground/65"><T ja={s.target} en={s.targetEn} /></span>
              </div>
              <div>
                <span className="text-foreground/35"><T ja="堀: " en="Moat: " /></span>
                <span className="text-foreground/65"><T ja={s.moat} en={s.moatEn} /></span>
              </div>
              <div>
                <span className="text-foreground/35"><T ja="公開戦略: " en="Open/Closed: " /></span>
                <span className="text-foreground/65"><T ja={s.openClosed} en={s.openClosedEn} /></span>
              </div>
              <div>
                <span className="text-foreground/35"><T ja="その理由: " en="Why: " /></span>
                <span className="text-foreground/65"><T ja={s.why} en={s.whyEn} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社IR資料・公式発表 (2026-04)" en="Source: Company IR materials and official announcements (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   日本市場での展開状況
   ───────────────────────────────────────────── */
export function AiLandscape2026JapanDiagram() {
  const items = [
    {
      company: "OpenAI",
      color: "#10b981",
      status: "積極展開",
      statusEn: "Active expansion",
      detail: "東京オフィス開設（2024年）。SoftBankと戦略的パートナーシップ。GPT-5.4のAPIは日本語も優先対応。",
      detailEn: "Tokyo office opened (2024). Strategic partnership with SoftBank. GPT-5.4 API prioritizes Japanese language.",
      temp: "高",
      tempEn: "High",
      tempColor: "#10b981",
    },
    {
      company: "Anthropic",
      color: "#8b5cf6",
      status: "選択的展開",
      statusEn: "Selective deployment",
      detail: "AWS経由でのアクセスが主。国内ISV・SIerがClaude APIを活用。金融・医療への展開を推進中。",
      detailEn: "Primarily accessed via AWS. Domestic ISVs and SIers adopt Claude API. Expanding in finance and healthcare.",
      temp: "中",
      tempEn: "Medium",
      tempColor: "#f59e0b",
    },
    {
      company: "Meta",
      color: "#3b82f6",
      status: "SNS展開のみ",
      statusEn: "SNS only",
      detail: "Muse SparkはInstagram/WhatsApp統合で間接到達。日本語対応の品質はまだ課題。専用APIは未提供。",
      detailEn: "Muse Spark reaches Japan indirectly via Instagram/WhatsApp. Japanese quality still a challenge. No dedicated API.",
      temp: "低〜中",
      tempEn: "Low–Medium",
      tempColor: "#ef4444",
    },
    {
      company: "Google",
      color: "#f59e0b",
      status: "インフラ統合が最深",
      statusEn: "Deepest infrastructure integration",
      detail: "GCP・Google Workspace経由で日本企業に浸透。Gemini 3.1 ProはGoogle検索にも統合済みで最大リーチ。",
      detailEn: "Penetrates Japanese enterprises via GCP and Google Workspace. Gemini 3.1 Pro integrated into Google Search for maximum reach.",
      temp: "高",
      tempEn: "High",
      tempColor: "#10b981",
    },
  ];

  const barriers = [
    { label: "データローカライゼーション規制", labelEn: "Data localization regulations", icon: "🏛️" },
    { label: "日本語品質の格差", labelEn: "Japanese language quality gap", icon: "🗾" },
    { label: "AI活用人材不足", labelEn: "Shortage of AI-skilled talent", icon: "👩‍💻" },
    { label: "既存ITシステムとの統合コスト", labelEn: "Integration cost with legacy IT systems", icon: "🔧" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI companies' Japan market status 2026"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本市場の展開状況" en="Japan market deployment status" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="4社の日本戦略温度差と日本企業のAI採用障壁" en="Differing intensities of Japan strategy and barriers to AI adoption by Japanese firms" />
      </div>

      <div className="space-y-2 mb-5">
        {items.map((it) => (
          <div
            key={it.company}
            className="p-3 rounded-lg flex items-start gap-3"
            style={{
              borderLeft: `3px solid ${it.color}`,
              backgroundColor: `${it.color}08`,
            }}
          >
            <div className="flex-shrink-0 w-20">
              <div className="text-sm font-bold" style={{ color: it.color }}>
                {it.company}
              </div>
              <div
                className="text-[9px] font-semibold mt-0.5"
                style={{ color: it.tempColor }}
              >
                <T ja={`温度: ${it.temp}`} en={`Intensity: ${it.tempEn}`} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-foreground/60 mb-0.5">
                <T ja={it.status} en={it.statusEn} />
              </div>
              <div className="text-[10px] text-foreground/55 leading-relaxed">
                <T ja={it.detail} en={it.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[10px] font-bold text-foreground/50 mb-2">
          <T ja="日本企業のAI採用障壁（主要4項目）" en="Key barriers to AI adoption among Japanese enterprises" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {barriers.map((b) => (
            <div key={b.label} className="flex items-start gap-1.5 text-[10px] text-foreground/60">
              <span>{b.icon}</span>
              <span><T ja={b.label} en={b.labelEn} /></span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社公式発表・総務省ICT活用調査 (2026-04)" en="Source: Company announcements, MIC ICT survey (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2025-2026 主要モデルリリースタイムライン
   ───────────────────────────────────────────── */
export function AiLandscape2026TimelineDiagram() {
  const events = [
    {
      date: "2025年Q1",
      dateEn: "Q1 2025",
      event: "GPT-4.5リリース",
      eventEn: "GPT-4.5 released",
      company: "OpenAI",
      color: "#10b981",
    },
    {
      date: "2025年Q2",
      dateEn: "Q2 2025",
      event: "Claude Opus 4.0リリース",
      eventEn: "Claude Opus 4.0 released",
      company: "Anthropic",
      color: "#8b5cf6",
    },
    {
      date: "2025年Q2",
      dateEn: "Q2 2025",
      event: "Gemini 3.0 Proリリース",
      eventEn: "Gemini 3.0 Pro released",
      company: "Google",
      color: "#f59e0b",
    },
    {
      date: "2025年Q3",
      dateEn: "Q3 2025",
      event: "Llama 4 Maverickリリース（オープンウェイト）",
      eventEn: "Llama 4 Maverick released (open-weight)",
      company: "Meta",
      color: "#3b82f6",
    },
    {
      date: "2025年Q4",
      dateEn: "Q4 2025",
      event: "MSL設立・Alexandr Wang就任",
      eventEn: "MSL founded, Alexandr Wang joins",
      company: "Meta",
      color: "#3b82f6",
    },
    {
      date: "2026年Q1",
      dateEn: "Q1 2026",
      event: "GPT-5.4・Claude Opus 4.6・Gemini 3.1 Pro 相次いでリリース",
      eventEn: "GPT-5.4, Claude Opus 4.6, Gemini 3.1 Pro released in quick succession",
      company: "3社同時",
      color: "#6366f1",
    },
    {
      date: "2026年4月7日",
      dateEn: "April 7, 2026",
      event: "Project Glasswing発表（Anthropic × セキュリティ）",
      eventEn: "Project Glasswing announced (Anthropic × security)",
      company: "Anthropic",
      color: "#8b5cf6",
    },
    {
      date: "2026年4月8日",
      dateEn: "April 8, 2026",
      event: "Muse Spark正式リリース（MSL初モデル）",
      eventEn: "Muse Spark officially released (MSL's first model)",
      company: "Meta",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI model release timeline 2025-2026"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="主要モデルリリース年表" en="Major model release timeline" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2025〜2026年 — フロンティアモデルの競争加速期" en="2025–2026 — the frontier model race accelerates" />
      </div>

      <div className="space-y-2">
        {events.map((e, i) => (
          <div
            key={i}
            className="relative flex items-start gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${e.color}08`,
              borderLeft: `3px solid ${e.color}`,
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mt-0.5"
              style={{ backgroundColor: e.color }}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-[10px] font-bold tabular-nums"
                  style={{ color: e.color }}
                >
                  <T ja={e.date} en={e.dateEn} />
                </span>
                <span className="text-[9px] text-foreground/35">{e.company}</span>
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5 leading-relaxed">
                <T ja={e.event} en={e.eventEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: 各社公式発表・The Brief編集部まとめ (2026-04)" en="Source: Company announcements, The Brief editorial compilation (April 2026)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   今後の展開予測
   ───────────────────────────────────────────── */
export function AiLandscape2026FutureDiagram() {
  const predictions = [
    {
      timeframe: "2026年下半期",
      timeframeEn: "H2 2026",
      color: "#8b5cf6",
      items: [
        {
          label: "エージェント競争の激化",
          labelEn: "Agent competition intensifies",
          detail: "各社がAIエージェントを実用化。自律的タスク実行が差別化の主戦場に。",
          detailEn: "All majors commercialize AI agents. Autonomous task execution becomes the key differentiator.",
        },
        {
          label: "価格戦争の本格化",
          labelEn: "Full-scale price war",
          detail: "Gemini・GPTがAPI料金を引き下げ。Claudeも追随か。",
          detailEn: "Gemini and GPT cut API pricing. Claude may follow suit.",
        },
      ],
    },
    {
      timeframe: "2027年〜",
      timeframeEn: "2027 onward",
      color: "#3b82f6",
      items: [
        {
          label: "日本語特化モデルの登場",
          labelEn: "Japan-focused models emerge",
          detail: "日本市場向けにファインチューニングしたモデルが増加。NTT・Fujitsuなど国内勢も本格参入。",
          detailEn: "Models fine-tuned for Japan increase. NTT, Fujitsu, and other domestic players enter seriously.",
        },
        {
          label: "オープン vs クローズドの再編",
          labelEn: "Open vs. closed realignment",
          detail: "MetaがMuse Sparkをオープン化するか否かが業界の焦点。LlamaとMuse Sparkの関係が問われる。",
          detailEn: "Whether Meta open-sources Muse Spark becomes a key industry question. The Llama–Muse Spark relationship will be scrutinized.",
        },
      ],
    },
    {
      timeframe: "5年後の問い",
      timeframeEn: "The 5-year question",
      color: "#f59e0b",
      items: [
        {
          label: "誰が生き残るか",
          labelEn: "Who survives?",
          detail: "技術の優位は流動的。「誰に届けるか」という配布力と、規制への適応力が最終的な勝敗を分ける。",
          detailEn: "Technical leads are transient. Distribution reach and regulatory adaptability will ultimately determine the winner.",
        },
      ],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI industry future outlook and predictions"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="今後の展開予測" en="Future outlook" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年下半期〜5年後 — AI業界の行方を読む" en="H2 2026 through the next 5 years — reading where the AI industry is headed" />
      </div>

      <div className="space-y-4">
        {predictions.map((p) => (
          <div key={p.timeframe}>
            <div
              className="text-[10px] font-bold mb-2 px-2 py-1 rounded-md inline-block"
              style={{ backgroundColor: `${p.color}15`, color: p.color }}
            >
              <T ja={p.timeframe} en={p.timeframeEn} />
            </div>
            <div className="space-y-2 ml-2">
              {p.items.map((it) => (
                <div
                  key={it.label}
                  className="p-3 rounded-lg"
                  style={{
                    borderLeft: `3px solid ${p.color}`,
                    backgroundColor: `${p.color}06`,
                  }}
                >
                  <div className="text-[11px] font-semibold mb-1" style={{ color: p.color }}>
                    <T ja={it.label} en={it.labelEn} />
                  </div>
                  <div className="text-[10px] text-foreground/60 leading-relaxed">
                    <T ja={it.detail} en={it.detailEn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.05] border border-[#8b5cf6]/15">
        <div className="text-[10px] font-bold text-[#8b5cf6]/80 mb-1">
          <T ja="記者的問い" en="The reporter's question" />
        </div>
        <div className="text-[11px] text-foreground/70 leading-relaxed italic">
          <T
            ja="「ベンチマーク1位は毎年変わる。だが30億人のSNSに溶け込んだプラットフォームと、国際規制に適応できる安全性ブランドは、そう簡単には消えない。」"
            en="'Benchmark leaders change every year. But a platform embedded in 3 billion people's social lives, and a safety brand that can adapt to global regulation — those don't disappear so easily.'"
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 (2026-04)" en="Source: The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}
