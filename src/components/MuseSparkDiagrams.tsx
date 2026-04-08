"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Muse Spark Overview — Model Summary Banner
   ───────────────────────────────────────────── */
export function MuseSparkOverviewDiagram() {
  const stats = [
    {
      value: "MSL",
      label: "開発元",
      labelEn: "Developer",
      sub: "Meta Superintelligence Labs",
      subEn: "Meta Superintelligence Labs",
    },
    {
      value: "2026/4/8",
      label: "リリース日",
      labelEn: "Release date",
      sub: "meta.ai・Meta AIアプリ（米国）",
      subEn: "meta.ai / Meta AI app (US)",
    },
    {
      value: "3",
      label: "動作モード",
      labelEn: "Operating modes",
      sub: "Instant / Thinking / Contemplating",
      subEn: "Instant / Thinking / Contemplating",
    },
    {
      value: "+9%",
      label: "Meta株価変動",
      labelEn: "Meta stock change",
      sub: "発表翌日",
      subEn: "Day after announcement",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark overview statistics"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Muse Spark
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="Meta、2026年4月8日発表 — モデル概要"
          en="Meta, announced April 8, 2026 — model overview"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{
              borderLeftColor: "#8b5cf6",
              backgroundColor: "#8b5cf608",
            }}
          >
            <div
              className="text-2xl sm:text-3xl font-bold tabular-nums"
              style={{ color: "#8b5cf6" }}
            >
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

      <div className="mt-5 p-3 rounded-lg bg-[#8b5cf6]/[0.04] border border-[#8b5cf6]/10">
        <div className="text-[10px] font-semibold text-[#8b5cf6]/70 mb-2">
          <T ja="開発リード" en="Development lead" />
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[12px] font-bold text-[#8b5cf6]">AW</span>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/80">Alexandr Wang</div>
            <div className="text-[10px] text-foreground/45">
              <T ja="元Scale AI CEO → MSL代表" en="Former Scale AI CEO → Head of MSL" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Meta announcement (2026-04-08)" en="Source: Meta announcement (2026-04-08)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark Modes — Three Mode Comparison
   ───────────────────────────────────────────── */
export function MuseSparkModesDiagram() {
  const modes = [
    {
      name: "Instant",
      icon: "⚡",
      desc: "即時応答",
      descEn: "Immediate response",
      detail: "カジュアルな質問・日常タスク",
      detailEn: "Casual questions and daily tasks",
      color: "#10b981",
    },
    {
      name: "Thinking",
      icon: "🧠",
      desc: "思考モード",
      descEn: "Thinking mode",
      detail: "数秒の推論。数学・科学・コーディング",
      detailEn: "Seconds of reasoning. Math, science, coding",
      color: "#3b82f6",
    },
    {
      name: "Contemplating",
      icon: "🔮",
      desc: "熟考モード",
      descEn: "Contemplating mode",
      detail: "マルチエージェント並列。複合タスク対応",
      detailEn: "Multi-agent parallel. Complex multi-step tasks",
      color: "#8b5cf6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark three operating modes comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="動作モード" en="Operating Modes" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="用途に応じた3段階の推論深度" en="Three levels of reasoning depth for different use cases" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {modes.map((m) => (
          <div
            key={m.name}
            className="p-4 rounded-lg border"
            style={{
              borderColor: `${m.color}20`,
              backgroundColor: `${m.color}06`,
            }}
          >
            <div className="text-2xl mb-2">{m.icon}</div>
            <div className="text-[14px] font-bold" style={{ color: m.color }}>
              {m.name}
            </div>
            <div className="text-[11px] font-semibold text-foreground/70 mt-0.5">
              <T ja={m.desc} en={m.descEn} />
            </div>
            <div className="text-[10px] text-foreground/45 mt-2 leading-relaxed">
              <T ja={m.detail} en={m.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[10px] font-semibold text-foreground/40 mb-2 uppercase tracking-wide">
          <T ja="入出力仕様" en="I/O Specifications" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-[9px] text-foreground/35 uppercase tracking-wide mb-1">
              <T ja="入力" en="Input" />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["テキスト", "音声", "画像"].map((item) => (
                <span
                  key={item}
                  className="text-[9px] px-2 py-0.5 rounded bg-[#8b5cf6]/10 text-[#8b5cf6]/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[9px] text-foreground/35 uppercase tracking-wide mb-1">
              <T ja="出力" en="Output" />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="text-[9px] px-2 py-0.5 rounded bg-foreground/[0.06] text-foreground/50">
                <T ja="テキストのみ" en="Text only" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="料金: 全モード無料（レート制限あり）" en="Pricing: All modes free (rate limits apply)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark Benchmarks — 4 Models × 5 Tasks
   ───────────────────────────────────────────── */
export function MuseSparkBenchmarksDiagram() {
  const benchmarks = [
    {
      name: "HealthBench Hard",
      desc: "医療情報品質",
      descEn: "Medical information quality",
      muse: 42.8,
      claude: 38.1,
      gpt: 39.5,
      gemini: 41.2,
      max: 60,
      winner: "muse",
      unit: "%",
    },
    {
      name: "CharXiv Reasoning",
      desc: "視覚推論",
      descEn: "Visual reasoning",
      muse: 86.4,
      claude: 79.3,
      gpt: 82.8,
      gemini: 80.2,
      max: 100,
      winner: "muse",
      unit: "",
    },
    {
      name: "MMMU Pro",
      desc: "マルチモーダル理解",
      descEn: "Multimodal understanding",
      muse: 80.4,
      claude: 78.9,
      gpt: 81.7,
      gemini: 83.9,
      max: 100,
      winner: "gemini",
      unit: "%",
    },
    {
      name: "GPQA Diamond",
      desc: "PhD水準推論",
      descEn: "PhD-level reasoning",
      muse: 89.5,
      claude: 92.7,
      gpt: 92.8,
      gemini: 94.3,
      max: 100,
      winner: "gemini",
      unit: "%",
    },
    {
      name: "ARC AGI 2",
      desc: "抽象推論",
      descEn: "Abstract reasoning",
      muse: 42.5,
      claude: 65.2,
      gpt: 76.1,
      gemini: 76.5,
      max: 100,
      winner: "gemini",
      unit: "",
    },
  ];

  const models = [
    { key: "muse" as const, label: "Muse Spark", color: "#8b5cf6" },
    { key: "claude" as const, label: "Claude Opus 4.6", color: "#f59e0b" },
    { key: "gpt" as const, label: "GPT-5.4", color: "#10b981" },
    { key: "gemini" as const, label: "Gemini 3.1 Pro", color: "#3b82f6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark benchmark comparison across models"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンチマーク比較" en="Benchmark Comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="4モデル × 5指標 — 得意・苦手領域が明確" en="4 models × 5 benchmarks — strengths and weaknesses are clear" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-5">
        {models.map((m) => (
          <div key={m.key} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
            <span className="text-[10px] text-foreground/55">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <span className="text-[12px] font-semibold text-foreground/80">{b.name}</span>
                <span className="ml-2 text-[10px] text-foreground/40">
                  <T ja={b.desc} en={b.descEn} />
                </span>
              </div>
              {b.winner === "muse" && (
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6]/70 font-medium">
                  <T ja="Muse Spark 1位" en="Muse Spark #1" />
                </span>
              )}
            </div>
            <div className="space-y-1">
              {models.map((m) => {
                const value = b[m.key];
                const pct = (value / b.max) * 100;
                return (
                  <div key={m.key} className="flex items-center gap-2">
                    <div className="w-[90px] text-[9px] text-foreground/40 text-right flex-shrink-0">
                      {m.label.replace(" Pro", "").replace("Opus ", "").replace("Gemini ", "G3.1 ")}
                    </div>
                    <div className="flex-1 h-2 bg-foreground/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: m.color }}
                      />
                    </div>
                    <div
                      className="text-[10px] font-semibold tabular-nums w-12 flex-shrink-0"
                      style={{ color: m.color }}
                    >
                      {value}{b.unit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: Meta Muse Spark launch benchmarks (2026-04-08)"
          en="Source: Meta Muse Spark launch benchmarks (2026-04-08)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark Investment — Financial Data
   ───────────────────────────────────────────── */
export function MuseSparkInvestmentDiagram() {
  const items = [
    {
      label: "Scale AI投資額",
      labelEn: "Scale AI investment",
      value: "$143億",
      valueEn: "$14.3B",
      sub: "49%株式取得",
      subEn: "49% equity stake",
      color: "#8b5cf6",
    },
    {
      label: "2026年設備投資（見込）",
      labelEn: "2026 capex (forecast)",
      value: "$1,150-1,350億",
      valueEn: "$115-135B",
      sub: "前年比+80%",
      subEn: "+80% year-over-year",
      color: "#3b82f6",
    },
    {
      label: "Meta株変動",
      labelEn: "Meta stock move",
      value: "+9%",
      valueEn: "+9%",
      sub: "発表翌日",
      subEn: "Day after announcement",
      color: "#10b981",
    },
    {
      label: "計算効率改善",
      labelEn: "Compute efficiency gain",
      value: "1桁以上",
      valueEn: "10×+",
      sub: "Llama 4 Maverick比",
      subEn: "vs Llama 4 Maverick",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark investment and financial data"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="投資・財務データ" en="Investment & Financial Data" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Meta AI戦略を支える資金規模" en="The scale of capital behind Meta's AI strategy" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="p-4 rounded-lg border-l-[3px]"
            style={{
              borderLeftColor: item.color,
              backgroundColor: `${item.color}08`,
            }}
          >
            <div
              className="text-xl sm:text-2xl font-bold tabular-nums leading-tight"
              style={{ color: item.color }}
            >
              <T ja={item.value} en={item.valueEn} />
            </div>
            <div className="text-[11px] font-semibold text-foreground/70 mt-1">
              <T ja={item.label} en={item.labelEn} />
            </div>
            <div className="text-[9px] text-foreground/40 mt-0.5">
              <T ja={item.sub} en={item.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[10px] text-foreground/50 leading-relaxed">
          <T
            ja="BofAはMuse Spark発表を受けてMetaの格付けを維持し、「AI能力の大幅なギャップ縮小」と評価した。"
            en="BofA maintained its Meta rating following the Muse Spark announcement, citing a 'significant narrowing of the AI capability gap.'"
          />
        </div>
        <div className="text-[9px] text-foreground/30 mt-1">BofA Research, 2026-04</div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Meta IR / BofA Research (2026-04)" en="Source: Meta IR / BofA Research (2026-04)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark SNS — Integration Roadmap
   ───────────────────────────────────────────── */
export function MuseSparkSnsDiagram() {
  const platforms = [
    {
      name: "meta.ai / Meta AI App",
      users: "現在利用可能",
      usersEn: "Available now",
      status: "live",
      use: "チャット・質問応答",
      useEn: "Chat and Q&A",
    },
    {
      name: "Instagram",
      users: "20億人以上",
      usersEn: "2B+ users",
      status: "planned",
      use: "視覚解析・ショッピング・コンテンツ生成",
      useEn: "Visual analysis, shopping, content creation",
    },
    {
      name: "WhatsApp",
      users: "20億人以上",
      usersEn: "2B+ users",
      status: "planned",
      use: "健康相談・翻訳・スケジュール",
      useEn: "Health advice, translation, scheduling",
    },
    {
      name: "Facebook",
      users: "30億人以上",
      usersEn: "3B+ users",
      status: "planned",
      use: "コンテンツ推薦・コミュニティAI",
      useEn: "Content recommendations, community AI",
    },
    {
      name: "Ray-Ban Meta (AIグラス)",
      users: "ウェアラブル",
      usersEn: "Wearable",
      status: "planned",
      use: "リアルタイム視覚AI支援",
      useEn: "Real-time visual AI assistance",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark SNS integration roadmap"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="SNS統合ロードマップ" en="SNS Integration Roadmap" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="30億人のSNSユーザーへの展開計画" en="Rollout plan to 3 billion SNS users" />
      </div>

      <div className="space-y-2">
        {platforms.map((p, i) => (
          <div
            key={p.name}
            className="flex items-start gap-3 p-3 rounded-lg"
            style={{ backgroundColor: i === 0 ? "#8b5cf608" : "transparent" }}
          >
            <div className="flex-shrink-0 mt-0.5">
              {p.status === "live" ? (
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              ) : (
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#8b5cf6]/40" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] font-semibold text-foreground/80">{p.name}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/[0.05] text-foreground/40">
                  <T ja={p.users} en={p.usersEn} />
                </span>
                {p.status === "live" && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10b981]/10 text-[#10b981]/70 font-medium">
                    <T ja="利用可能" en="Live" />
                  </span>
                )}
              </div>
              <div className="text-[10px] text-foreground/45 mt-0.5">
                <T ja={p.use} en={p.useEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.04] border border-[#8b5cf6]/10">
        <div className="text-[10px] text-[#8b5cf6]/70 font-semibold mb-1">
          <T ja="Meta最大の差別化要因" en="Meta's key differentiator" />
        </div>
        <div className="text-[10px] text-foreground/55 leading-relaxed">
          <T
            ja="OpenAI・AnthropicがAPIや独自アプリで利用者を集める一方、Metaはすでに生活に溶け込んだSNSを通じてAIを展開する。"
            en="While OpenAI and Anthropic attract users via APIs and standalone apps, Meta deploys AI through SNS platforms already embedded in daily life."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Meta announcement (2026-04-08)" en="Source: Meta announcement (2026-04-08)" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark vs Llama — Open vs Closed
   ───────────────────────────────────────────── */
export function MuseSparkVsLlamaDiagram() {
  const rows = [
    {
      aspect: "ソースコード",
      aspectEn: "Source code",
      llama: "オープンソース",
      llamaEn: "Open source",
      muse: "クローズドソース",
      museEn: "Closed source",
      museFavorable: false,
    },
    {
      aspect: "開発者利用",
      aspectEn: "Developer access",
      llama: "自由に利用・改変可",
      llamaEn: "Free to use and modify",
      muse: "限定APIプレビュー",
      museEn: "Limited API preview",
      museFavorable: false,
    },
    {
      aspect: "商業利用",
      aspectEn: "Commercial use",
      llama: "ライセンス次第",
      llamaEn: "Depends on license",
      muse: "API経由で収益化",
      museEn: "Monetized via API",
      museFavorable: true,
    },
    {
      aspect: "安全性管理",
      aspectEn: "Safety controls",
      llama: "利用者が管理",
      llamaEn: "User-controlled",
      muse: "Meta側で一元管理",
      museEn: "Centrally managed by Meta",
      museFavorable: true,
    },
    {
      aspect: "将来的なオープン化",
      aspectEn: "Future open release",
      llama: "N/A",
      llamaEn: "N/A",
      muse: "一部バージョンを予定",
      museEn: "Planned for some versions",
      museFavorable: true,
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Llama vs Muse Spark open source comparison"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="Llama vs Muse Spark" en="Llama vs Muse Spark" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="オープンソースからクローズドへの転換" en="Shift from open source to closed source" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr>
              <th className="text-left text-foreground/40 font-medium pb-2 pr-3 w-1/3">
                <T ja="観点" en="Aspect" />
              </th>
              <th className="text-left text-foreground/40 font-medium pb-2 pr-3">
                <span className="text-[#f59e0b]">Llama</span>
              </th>
              <th className="text-left text-foreground/40 font-medium pb-2">
                <span style={{ color: "#8b5cf6" }}>Muse Spark</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-foreground/[0.04]">
                <td className="py-2.5 pr-3 text-foreground/55 font-medium">
                  <T ja={r.aspect} en={r.aspectEn} />
                </td>
                <td className="py-2.5 pr-3 text-foreground/45">
                  <T ja={r.llama} en={r.llamaEn} />
                </td>
                <td
                  className="py-2.5 font-medium"
                  style={{ color: r.museFavorable ? "#8b5cf6" : undefined }}
                >
                  <T ja={r.muse} en={r.museEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: Meta announcement / Llama license terms"
          en="Source: Meta announcement / Llama license terms"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Muse Spark Japan — Impact Summary
   ───────────────────────────────────────────── */
export function MuseSparkJapanDiagram() {
  const impacts = [
    {
      area: "SNS経由の間接影響",
      areaEn: "Indirect impact via SNS",
      desc: "InstagramとWhatsAppの日本ユーザーに自動展開",
      descEn: "Auto-rollout to Japanese Instagram and WhatsApp users",
      icon: "📱",
      level: "高",
      levelEn: "High",
      levelColor: "#ef4444",
    },
    {
      area: "AI競争の激化",
      areaEn: "Intensified AI competition",
      desc: "日本語性能向上・価格競争が加速する可能性",
      descEn: "Could accelerate Japanese language improvements and price competition",
      icon: "⚔️",
      level: "中",
      levelEn: "Medium",
      levelColor: "#f59e0b",
    },
    {
      area: "医療AIへの影響",
      areaEn: "Impact on medical AI",
      desc: "HealthBench Hard 1位の意義は大きい",
      descEn: "Top HealthBench Hard score has significant implications",
      icon: "🏥",
      level: "中",
      levelEn: "Medium",
      levelColor: "#f59e0b",
    },
    {
      area: "投資家への影響",
      areaEn: "Investor impact",
      desc: "SNS×AI統合テーマ株への波及注視",
      descEn: "Watch for SNS×AI integration theme stock effects",
      icon: "📈",
      level: "中",
      levelEn: "Medium",
      levelColor: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Muse Spark impact on Japan summary"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本への影響" en="Impact on Japan" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Muse Sparkが日本市場に与える4つの影響軸" en="Four impact axes of Muse Spark on the Japanese market" />
      </div>

      <div className="space-y-3">
        {impacts.map((item) => (
          <div
            key={item.area}
            className="flex items-start gap-3 p-3 rounded-lg border border-foreground/[0.04] bg-foreground/[0.01]"
          >
            <div className="text-xl flex-shrink-0">{item.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[12px] font-semibold text-foreground/80">
                  <T ja={item.area} en={item.areaEn} />
                </span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded font-medium"
                  style={{
                    backgroundColor: `${item.levelColor}15`,
                    color: item.levelColor,
                  }}
                >
                  <T ja={item.level} en={item.levelEn} />
                </span>
              </div>
              <div className="text-[10px] text-foreground/45 leading-relaxed">
                <T ja={item.desc} en={item.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.04] border border-[#8b5cf6]/10">
        <div className="text-[10px] text-[#8b5cf6]/70 leading-relaxed">
          <T
            ja="Muse Sparkは「最強のAI」ではないが、最も多くの人に届くAIになる可能性が最も高いモデルだ。"
            en="Muse Spark may not be the 'most powerful AI,' but it is the model most likely to reach the most people."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="2026年4月時点の見通し（日本語対応は未発表）" en="Outlook as of April 2026 (Japanese support not yet announced)" />
      </div>
    </div>
  );
}
