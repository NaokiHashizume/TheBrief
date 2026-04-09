"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Claude Managed Agents — Diagrams
   ──────────────────────────────────────────────────────────── */

const ACCENT = "#8b5cf6"; // violet
const INDIGO = "#6366f1";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const AMBER = "#d97706";
const RED = "#dc2626";
const SLATE = "#475569";

function Card({
  title,
  subtitle,
  children,
  ariaLabel,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={ariaLabel}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${ACCENT}cc` }}
        >
          <T ja="図表" en="FIGURE" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          {title}
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. Architecture Diagram ── */
export function CmaArchitectureDiagram() {
  const layers = [
    {
      label: "開発者が定義",
      labelEn: "Developer defines",
      items: [
        { ja: "エージェント設定（モデル・プロンプト・ツール）", en: "Agent config (model, prompt, tools)" },
        { ja: "環境設定（パッケージ・ネットワーク）", en: "Environment (packages, network)" },
        { ja: "タスクと成功基準", en: "Task & success criteria" },
      ],
      color: BLUE,
    },
    {
      label: "Anthropicが管理",
      labelEn: "Anthropic manages",
      items: [
        { ja: "セキュアなサンドボックス実行", en: "Secure sandbox execution" },
        { ja: "認証・クレデンシャル管理", en: "Auth & credential management" },
        { ja: "チェックポイント・再開ロジック", en: "Checkpointing & resumption" },
        { ja: "コンテキスト管理・エラー回復", en: "Context mgmt & error recovery" },
        { ja: "スケーリングとモニタリング", en: "Scaling & monitoring" },
      ],
      color: ACCENT,
    },
    {
      label: "提供される能力",
      labelEn: "Capabilities provided",
      items: [
        { ja: "Bash・ファイル操作", en: "Bash & file operations" },
        { ja: "Webサーチ・フェッチ", en: "Web search & fetch" },
        { ja: "MCPサーバー連携", en: "MCP server integration" },
        { ja: "マルチエージェント委任（RP）", en: "Multi-agent delegation (RP)" },
      ],
      color: GREEN,
    },
  ];
  return (
    <Card
      title={<T ja="Claude Managed Agents — 責任分担アーキテクチャ" en="Claude Managed Agents — Responsibility Split Architecture" />}
      subtitle={<T ja="開発者が定義すること vs Anthropicが管理すること" en="What developers define vs what Anthropic manages" />}
      ariaLabel="Claude Managed Agentsのアーキテクチャ図"
    >
      <div className="space-y-3">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className="rounded-xl p-4 border border-brief-border"
            style={{ backgroundColor: `${layer.color}08` }}
          >
            <div
              className="text-[11px] font-bold tracking-wide mb-3"
              style={{ color: layer.color }}
            >
              <T ja={layer.label} en={layer.labelEn} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {layer.items.map((item) => (
                <div
                  key={item.ja}
                  className="flex items-center gap-2 text-[12px] text-foreground/70"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <T ja={item.ja} en={item.en} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Decoupling Diagram ── */
export function CmaDecouplingDiagram() {
  const components = [
    {
      name: "Session",
      desc: "アペンドオンリーのイベントログ。外部に永続化。",
      descEn: "Append-only event log. Persisted externally.",
      icon: "🗃️",
      color: INDIGO,
    },
    {
      name: "Harness",
      desc: "ステートレスな実行ループ。壊れても再起動して再開可能。",
      descEn: "Stateless execution loop. Restartable and resumable.",
      icon: "🔄",
      color: ACCENT,
    },
    {
      name: "Sandbox",
      desc: "コード実行環境。標準インターフェース経由のみ呼び出し可能。",
      descEn: "Code execution environment. Called only via standard interface.",
      icon: "📦",
      color: GREEN,
    },
  ];
  const metrics = [
    { label: "p50 TTFT 改善率", labelEn: "p50 TTFT improvement", value: "〜60%", color: ACCENT },
    { label: "p95 TTFT 改善率", labelEn: "p95 TTFT improvement", value: ">90%", color: GREEN },
    { label: "開発期間の短縮（目標）", labelEn: "Dev time reduction (target)", value: "数ヶ月→数週間", valueEn: "Months→Weeks", color: BLUE },
    { label: "タスク成功率向上（内部テスト）", labelEn: "Task success rate gain (internal)", value: "+10pt", color: AMBER },
  ];
  return (
    <Card
      title={<T ja="脳と手を切り離す — 3コンポーネント設計" en="Decoupling Brain from Hands — 3-Component Design" />}
      subtitle={<T ja="各コンポーネントが独立して交換可能" en="Each component is independently replaceable" />}
      ariaLabel="Claude Managed Agentsの3コンポーネント設計図"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {components.map((c) => (
          <div
            key={c.name}
            className="rounded-xl p-4 text-center border border-brief-border"
            style={{ backgroundColor: `${c.color}08` }}
          >
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="font-bold text-[14px] mb-1" style={{ color: c.color }}>
              {c.name}
            </div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja={c.desc} en={c.descEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg p-3 border border-brief-border text-center"
            style={{ backgroundColor: `${m.color}06` }}
          >
            <div className="text-[18px] font-bold tabular-nums" style={{ color: m.color }}>
              <T ja={m.value} en={m.valueEn ?? m.value} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-1 leading-snug">
              <T ja={m.label} en={m.labelEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Platform Comparison ── */
export function CmaPlatformComparisonDiagram() {
  const platforms = [
    {
      name: "Claude Managed Agents",
      company: "Anthropic",
      color: ACCENT,
      features: [
        { label: "モデル", labelEn: "Model", value: "Claude専用", valueEn: "Claude only", positive: false },
        { label: "インフラ管理", labelEn: "Infra management", value: "フルマネージド", valueEn: "Fully managed", positive: true },
        { label: "セキュリティ", labelEn: "Security", value: "垂直統合", valueEn: "Vertically integrated", positive: true },
        { label: "料金体系", labelEn: "Pricing", value: "$0.08/時間＋モデル料", valueEn: "$0.08/hr + model", positive: true },
        { label: "向き先", labelEn: "Best for", value: "エンタープライズ", valueEn: "Enterprise", positive: true },
      ],
    },
    {
      name: "Agents SDK",
      company: "OpenAI",
      color: GREEN,
      features: [
        { label: "モデル", labelEn: "Model", value: "100+ LLM対応", valueEn: "100+ LLMs", positive: true },
        { label: "インフラ管理", labelEn: "Infra management", value: "自前構築", valueEn: "Self-managed", positive: false },
        { label: "セキュリティ", labelEn: "Security", value: "開発者責任", valueEn: "Dev responsibility", positive: false },
        { label: "料金体系", labelEn: "Pricing", value: "モデル料のみ", valueEn: "Model only", positive: true },
        { label: "向き先", labelEn: "Best for", value: "柔軟性重視", valueEn: "Flexibility-first", positive: true },
      ],
    },
    {
      name: "ADK",
      company: "Google",
      color: BLUE,
      features: [
        { label: "モデル", labelEn: "Model", value: "Gemini主体", valueEn: "Gemini-primary", positive: false },
        { label: "インフラ管理", labelEn: "Infra management", value: "Vertex AI統合", valueEn: "Vertex AI integrated", positive: true },
        { label: "セキュリティ", labelEn: "Security", value: "GCPベース", valueEn: "GCP-based", positive: true },
        { label: "料金体系", labelEn: "Pricing", value: "GCP従量", valueEn: "GCP pay-as-you-go", positive: true },
        { label: "向き先", labelEn: "Best for", value: "GCP活用企業", valueEn: "GCP-native orgs", positive: true },
      ],
    },
  ];
  return (
    <Card
      title={<T ja="主要AIエージェントプラットフォーム比較" en="Major AI Agent Platform Comparison" />}
      subtitle={<T ja="Claude / OpenAI / Google — 2026年4月時点" en="Claude / OpenAI / Google — as of April 2026" />}
      ariaLabel="AIエージェントプラットフォーム比較表"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-brief-border overflow-hidden"
          >
            <div
              className="p-3 text-center"
              style={{ backgroundColor: `${p.color}15` }}
            >
              <div className="text-[11px] text-foreground/50">{p.company}</div>
              <div className="font-bold text-[14px]" style={{ color: p.color }}>
                {p.name}
              </div>
            </div>
            <div className="p-3 space-y-2">
              {p.features.map((f) => (
                <div key={f.label} className="flex items-start gap-2 text-[11px]">
                  <span style={{ color: f.positive ? GREEN : RED }} className="flex-shrink-0 mt-0.5">
                    {f.positive ? "✓" : "△"}
                  </span>
                  <span className="text-foreground/50">
                    <T ja={f.label} en={f.labelEn} />
                    {": "}
                  </span>
                  <span className="text-foreground/80 font-medium">
                    <T ja={f.value} en={f.valueEn} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Japan Impact Diagram ── */
export function CmaJapanImpactDiagram() {
  const items = [
    {
      title: "楽天グループ",
      titleEn: "Rakuten Group",
      detail: "早期採用企業として製品・財務・マーケティング領域で展開。日本発グローバル企業の公式採用実績。",
      detailEn: "Early adopter deploying agents across product, finance & marketing. First major Japan-origin global enterprise.",
      color: RED,
      impact: "HIGH",
    },
    {
      title: "IT人材不足への処方箋",
      titleEn: "Solution to IT talent shortage",
      detail: "2030年最大79万人不足が予測される中、Managed Agentsによる「少人数での高度エージェント運用」が有効な解となりうる。",
      detailEn: "With 790K IT workers shortage projected by 2030, Managed Agents enables small teams to operate sophisticated agents.",
      color: AMBER,
      impact: "HIGH",
    },
    {
      title: "コスト試算",
      titleEn: "Cost estimate",
      detail: "月200時間稼働のエージェント1本：セッション料$16（約2,400円）。Webサーチ1万回追加で+$100（約15,000円）。",
      detailEn: "Agent running 200 hrs/month: $16 session fee. Add 10K web searches: +$100.",
      color: GREEN,
      impact: "MED",
    },
    {
      title: "日本語インターフェース",
      titleEn: "Japanese UI",
      detail: "コンソール・ドキュメントは現在英語中心。エージェントの実行タスク自体の日本語処理は問題なく可能。",
      detailEn: "Console & docs currently English-first. Agent task execution in Japanese works well.",
      color: SLATE,
      impact: "LOW",
    },
  ];
  return (
    <Card
      title={<T ja="日本企業への導入インパクト" en="Impact on Japanese Enterprise Adoption" />}
      subtitle={<T ja="楽天グループ採用から見えるもの" en="Insights from Rakuten Group's early adoption" />}
      ariaLabel="日本企業へのClaude Managed Agents導入インパクト図"
    >
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-xl p-4 border border-brief-border"
            style={{ backgroundColor: `${item.color}06` }}
          >
            <div className="flex-shrink-0">
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: `${item.color}18`, color: item.color }}
              >
                {item.impact}
              </span>
            </div>
            <div>
              <div className="font-bold text-[13px] mb-1" style={{ color: item.color }}>
                <T ja={item.title} en={item.titleEn} />
              </div>
              <div className="text-[12px] text-foreground/65 leading-relaxed">
                <T ja={item.detail} en={item.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Autonomy Levels Diagram ── */
export function CmaAutonomyLevelsDiagram() {
  const levels = [
    {
      level: "L1",
      name: "アシスト",
      nameEn: "Assist",
      desc: "人間がすべての操作を行う。AIはサジェストのみ。",
      descEn: "Human performs all actions. AI only suggests.",
      color: SLATE,
      available: "現在",
      availableEn: "Now",
    },
    {
      level: "L2",
      name: "コパイロット",
      nameEn: "Copilot",
      desc: "人間が確認・承認し、AIが実行を担当。",
      descEn: "Human approves, AI executes.",
      color: BLUE,
      available: "現在",
      availableEn: "Now",
    },
    {
      level: "L3",
      name: "マネージドエージェント",
      nameEn: "Managed Agent",
      desc: "スコープされた権限内で自律実行。人間は監視・割り込み可。",
      descEn: "Autonomous within scoped permissions. Human can monitor & interrupt.",
      color: ACCENT,
      available: "現在（ベータ）",
      availableEn: "Now (Beta)",
    },
    {
      level: "L4",
      name: "Outcomes（目標設定型）",
      nameEn: "Outcomes (Goal-driven)",
      desc: "目標と成功基準を与えるだけ。Claudeが自己評価・反復。",
      descEn: "Define goal & success criteria only. Claude self-evaluates & iterates.",
      color: AMBER,
      available: "RP（招待制）",
      availableEn: "Research Preview",
    },
    {
      level: "L5",
      name: "マルチエージェント組織",
      nameEn: "Multi-Agent Organization",
      desc: "エージェントが他のエージェントを生成・委任・調整する。",
      descEn: "Agents spawn, delegate to, and coordinate other agents.",
      color: RED,
      available: "RP（招待制）",
      availableEn: "Research Preview",
    },
  ];
  return (
    <Card
      title={<T ja="エージェント自律度レベル分類" en="Agent Autonomy Level Classification" />}
      subtitle={<T ja="Claude Managed Agentsで実現できる自律度のスペクトラム" en="Spectrum of autonomy achievable with Claude Managed Agents" />}
      ariaLabel="エージェント自律度レベル分類図"
    >
      <div className="space-y-2">
        {levels.map((l, i) => (
          <div
            key={l.level}
            className="flex items-start gap-4 rounded-xl p-4 border border-brief-border"
            style={{ backgroundColor: `${l.color}07` }}
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px]"
              style={{ backgroundColor: `${l.color}18`, color: l.color }}
            >
              {l.level}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="font-bold text-[13px]" style={{ color: l.color }}>
                  <T ja={l.name} en={l.nameEn} />
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded font-medium"
                  style={{ backgroundColor: `${l.color}15`, color: l.color }}
                >
                  <T ja={l.available} en={l.availableEn} />
                </span>
              </div>
              <div className="text-[12px] text-foreground/60 leading-relaxed">
                <T ja={l.desc} en={l.descEn} />
              </div>
            </div>
            {i < levels.length - 1 && (
              <div
                className="flex-shrink-0 text-foreground/20 text-sm mt-0.5"
                style={{ color: levels[i + 1].color }}
              >
                ↑
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Stakeholders Diagram ── */
export function CmaStakeholdersDiagram() {
  const stakeholders = [
    {
      who: "開発者・エンジニア",
      whoEn: "Developers & Engineers",
      color: BLUE,
      gains: [
        { ja: "インフラ構築の省略（数ヶ月→数週間）", en: "Skip infra build (months→weeks)" },
        { ja: "タスク成功率向上（最大+10pt）", en: "Task success rate +up to 10pt" },
        { ja: "エラー回復の自動化", en: "Automated error recovery" },
      ],
      risks: [
        { ja: "Claudeへのロックイン", en: "Lock-in to Claude" },
        { ja: "インフラ知見が蓄積されない", en: "Internal infra expertise doesn't grow" },
      ],
    },
    {
      who: "企業・事業部門",
      whoEn: "Enterprises & Business Units",
      color: ACCENT,
      gains: [
        { ja: "本番エージェント導入のスピードアップ", en: "Faster prod agent deployment" },
        { ja: "セキュリティ・コンプライアンス対応", en: "Security & compliance support" },
        { ja: "スケーリングの自動化", en: "Automatic scaling" },
      ],
      risks: [
        { ja: "ベンダー依存リスク", en: "Vendor dependency risk" },
        { ja: "大規模展開時のコスト積み上がり", en: "Cost accumulation at scale" },
      ],
    },
    {
      who: "Anthropic",
      whoEn: "Anthropic",
      color: GREEN,
      gains: [
        { ja: "セッション課金による収益多様化", en: "Revenue diversification via session fees" },
        { ja: "エンタープライズ顧客の囲い込み", en: "Enterprise customer lock-in" },
        { ja: "エージェント実行データの蓄積", en: "Agent execution data accumulation" },
      ],
      risks: [
        { ja: "Claudeの優位性維持が前提条件", en: "Requires maintaining Claude's edge" },
        { ja: "競合がマネージドサービスを強化すれば差別化が薄れる", en: "Rivals' managed services could erode differentiation" },
      ],
    },
  ];
  return (
    <Card
      title={<T ja="三者の利害分析 — 誰が得をするか" en="Stakeholder Analysis — Who Benefits" />}
      subtitle={<T ja="開発者・企業・Anthropic それぞれの利得とリスク" en="Gains and risks for developers, enterprises, and Anthropic" />}
      ariaLabel="Claude Managed Agentsの三者利害分析図"
    >
      <div className="space-y-4">
        {stakeholders.map((s) => (
          <div
            key={s.who}
            className="rounded-xl border border-brief-border overflow-hidden"
          >
            <div
              className="px-4 py-2"
              style={{ backgroundColor: `${s.color}12` }}
            >
              <span className="font-bold text-[13px]" style={{ color: s.color }}>
                <T ja={s.who} en={s.whoEn} />
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              <div>
                <div className="text-[10px] font-bold text-green-600 tracking-wide mb-2">
                  <T ja="メリット" en="GAINS" />
                </div>
                <ul className="space-y-1">
                  {s.gains.map((g) => (
                    <li key={g.ja} className="flex items-start gap-1.5 text-[12px] text-foreground/70">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">+</span>
                      <T ja={g.ja} en={g.en} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] font-bold text-red-500 tracking-wide mb-2">
                  <T ja="リスク" en="RISKS" />
                </div>
                <ul className="space-y-1">
                  {s.risks.map((r) => (
                    <li key={r.ja} className="flex items-start gap-1.5 text-[12px] text-foreground/70">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">△</span>
                      <T ja={r.ja} en={r.en} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 7. Competitor Matrix ── */
export function CmaCompetitorMatrixDiagram() {
  const axes = [
    { label: "インフラ管理の手軽さ", labelEn: "Infra ease", claude: 95, openai: 40, google: 70 },
    { label: "モデル選択の自由度", labelEn: "Model flexibility", claude: 20, openai: 95, google: 50 },
    { label: "エンタープライズ安全性", labelEn: "Enterprise security", claude: 90, openai: 70, google: 85 },
    { label: "価格競争力", labelEn: "Price competitiveness", claude: 75, openai: 80, google: 70 },
    { label: "日本語エコシステム", labelEn: "Japanese ecosystem", claude: 55, openai: 60, google: 65 },
  ];
  const colors = { claude: ACCENT, openai: GREEN, google: BLUE };
  return (
    <Card
      title={<T ja="競合比較マトリクス — 2026年4月時点" en="Competitor Matrix — April 2026" />}
      subtitle={<T ja="Claude / OpenAI / Google ADK — 主要評価軸" en="Claude / OpenAI / Google ADK — key evaluation axes" />}
      ariaLabel="AIエージェントプラットフォーム競合比較マトリクス"
    >
      <div className="mb-4 flex items-center gap-4 text-[11px]">
        {(["claude", "openai", "google"] as const).map((k) => (
          <div key={k} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[k] }} />
            <span className="text-foreground/60 capitalize">
              {k === "claude" ? "Claude (Anthropic)" : k === "openai" ? "OpenAI" : "Google ADK"}
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {axes.map((ax) => (
          <div key={ax.label}>
            <div className="text-[11px] text-foreground/60 mb-1.5">
              <T ja={ax.label} en={ax.labelEn} />
            </div>
            <div className="space-y-1">
              {(["claude", "openai", "google"] as const).map((k) => (
                <div key={k} className="flex items-center gap-2">
                  <div className="w-14 text-[10px] text-foreground/40 text-right capitalize">
                    {k === "claude" ? "Claude" : k === "openai" ? "OpenAI" : "Google"}
                  </div>
                  <div className="flex-1 h-2 bg-foreground/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${ax[k]}%`, backgroundColor: colors[k] }}
                    />
                  </div>
                  <div className="w-8 text-[10px] tabular-nums text-foreground/50">
                    {ax[k]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
