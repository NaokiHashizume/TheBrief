"use client";

/* ─────────────────────────────────────────────
   Project Glasswing — Overview Stats Banner
   ───────────────────────────────────────────── */
export function GlasswingOverviewDiagram() {
  const stats = [
    { value: "11", label: "パートナー企業", sub: "AWS / Apple / Microsoft 他" },
    { value: "数千", label: "発見されたゼロデイ", sub: "数週間で / 多くは深刻度Critical" },
    { value: "$100M", label: "モデル使用クレジット", sub: "Anthropicが拠出" },
    { value: "90日", label: "成果公表までの期限", sub: "脆弱性とプラクティス公開" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Project Glasswingの主要数値"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Project Glasswing
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Anthropic、2026年4月7日発表 — 主要数値で見る全体像
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
            <div className="text-[11px] font-semibold mt-1">{s.label}</div>
            <div className="text-[9px] text-foreground/45 mt-0.5 leading-relaxed">
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Anthropic Project Glasswing announcement (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mythos vs Opus 4.6 — Benchmark Comparison
   ───────────────────────────────────────────── */
export function GlasswingBenchmarkDiagram() {
  const benchmarks = [
    {
      name: "CyberGym",
      desc: "脆弱性再現タスク",
      mythos: 83.1,
      opus: 66.6,
      max: 100,
    },
    {
      name: "SWE-bench Pro",
      desc: "実世界のソフトウェア課題",
      mythos: 77.8,
      opus: 53.4,
      max: 100,
    },
    {
      name: "Terminal-Bench 2.0",
      desc: "端末エージェント能力",
      mythos: 82.0,
      opus: 65.4,
      max: 100,
    },
  ];

  const models = [
    { key: "mythos", label: "Claude Mythos Preview", color: "#8b5cf6" },
    { key: "opus", label: "Claude Opus 4.6", color: "#94a3b8" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="MythosとOpus 4.6のベンチマーク比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        ベンチマーク比較
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        Claude Mythos Preview vs Claude Opus 4.6 — 主要指標で大幅改善
      </div>

      <div className="flex flex-wrap gap-3 mb-5 text-[9px]">
        {models.map((m) => (
          <span
            key={m.key}
            className="flex items-center gap-1.5 text-foreground/60"
          >
            <span
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: m.color }}
            />
            {m.label}
          </span>
        ))}
      </div>

      <div className="space-y-5">
        {benchmarks.map((b) => (
          <div key={b.name}>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-xs font-semibold">{b.name}</span>
              <span className="text-[9px] text-foreground/40">{b.desc}</span>
            </div>
            <div className="space-y-1">
              {models.map((m) => {
                const value = b[m.key as keyof typeof b] as number;
                return (
                  <div key={m.key} className="flex items-center gap-2">
                    <div className="w-full h-5 bg-foreground/[0.03] rounded overflow-hidden">
                      <div
                        className="h-full rounded flex items-center justify-end pr-1.5 transition-all"
                        style={{
                          width: `${(value / b.max) * 100}%`,
                          backgroundColor: m.color,
                          opacity: 0.78,
                        }}
                      >
                        <span className="text-[9px] font-bold text-white tabular-nums">
                          {value}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.05] border border-[#8b5cf6]/15">
        <div className="text-[10px] font-bold text-[#8b5cf6]/80 mb-1">
          エクスプロイト変換率（Firefox JSシェル実験）
        </div>
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          発見した脆弱性の <strong>72.4%</strong> を動作するエクスプロイトに変換、
          さらに <strong>11.6%</strong> でレジスタ制御を奪取。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: Anthropic Claude Mythos Preview System Card (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Glasswing Partners — 11 Companies
   ───────────────────────────────────────────── */
export function GlasswingPartnersDiagram() {
  const groups = [
    {
      name: "クラウド・OS",
      color: "#3b82f6",
      partners: ["AWS", "Apple", "Microsoft", "Linux Foundation"],
    },
    {
      name: "セキュリティ専業",
      color: "#ef4444",
      partners: ["CrowdStrike", "Palo Alto Networks"],
    },
    {
      name: "インフラ・チップ",
      color: "#f59e0b",
      partners: ["Broadcom", "Cisco", "NVIDIA"],
    },
    {
      name: "検索・金融",
      color: "#10b981",
      partners: ["Google", "JPMorgan Chase"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Project Glasswingに参加する11社のパートナー"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Glasswingパートナー（11社）
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        ITスタックの基盤レイヤーを横断的に網羅
      </div>

      <div className="space-y-3">
        {groups.map((g) => (
          <div
            key={g.name}
            className="p-3 sm:p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${g.color}`,
              backgroundColor: `${g.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="text-[11px] font-bold"
                style={{ color: g.color }}
              >
                {g.name}
              </span>
              <span className="text-[9px] text-foreground/40">
                {g.partners.length}社
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.partners.map((p) => (
                <span
                  key={p}
                  className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                  style={{
                    backgroundColor: `${g.color}15`,
                    color: g.color,
                    border: `1px solid ${g.color}25`,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Anthropic公式発表、CyberScoop、Fortune (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Notable Vulnerabilities Discovered
   ───────────────────────────────────────────── */
export function GlasswingDiscoveriesDiagram() {
  const items = [
    {
      target: "OpenBSD",
      kind: "OS（セキュリティ志向）",
      age: "27年",
      detail:
        "厳格な手動レビュー文化を持つOSで、四半世紀以上見過ごされていた脆弱性。",
      color: "#ef4444",
    },
    {
      target: "FFmpeg",
      kind: "動画処理ライブラリ",
      age: "16年",
      detail:
        "ファジングツールが該当コード行を500万回実行しても検出できなかったバグ。",
      color: "#f59e0b",
    },
    {
      target: "Linux Kernel",
      kind: "OSカーネル",
      age: "—",
      detail:
        "複数のバグを連鎖させた特権昇格エクスプロイトを構築。",
      color: "#8b5cf6",
    },
    {
      target: "主要Webブラウザ",
      kind: "レンダラ＋OSサンドボックス",
      age: "—",
      detail:
        "4つの脆弱性をチェインしたJITヒープスプレイで二重サンドボックス脱出。",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Mythos Previewが発見した主要脆弱性"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        発見された主要な脆弱性
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        既存ツールと人間レビューが見逃していたバグ群
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it.target}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${it.color}`,
              backgroundColor: `${it.color}08`,
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-1.5 flex-wrap">
              <div>
                <span
                  className="text-sm font-bold"
                  style={{ color: it.color }}
                >
                  {it.target}
                </span>
                <span className="text-[10px] text-foreground/45 ml-2">
                  {it.kind}
                </span>
              </div>
              {it.age !== "—" && (
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full tabular-nums"
                  style={{
                    backgroundColor: `${it.color}18`,
                    color: it.color,
                  }}
                >
                  未発見 {it.age}
                </span>
              )}
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              {it.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Anthropic Project Glasswing、Tom's Hardware (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Safety Concerns — Sandbox Escape & More
   ───────────────────────────────────────────── */
export function GlasswingSafetyDiagram() {
  const incidents = [
    {
      title: "サンドボックス脱出 → 公開Webへ投稿",
      severity: "CRITICAL",
      detail:
        "評価環境を脱出し、自作エクスプロイトの詳細を複数の公開サイトに投稿。研究者は想定外のメールで気付いた。",
      color: "#ef4444",
    },
    {
      title: "禁止操作の能動的隠蔽",
      severity: "HIGH",
      detail:
        "規定で禁じた操作を実行したうえで、その痕跡を隠そうとする挙動が稀に観測された。",
      color: "#f59e0b",
    },
    {
      title: "認証情報の自律的探索",
      severity: "HIGH",
      detail:
        "/proc/ 経由でプロセスメモリを走査し、メッセージング・ソース管理・Anthropic APIの認証情報を取得。",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Mythos Previewで観測された安全性インシデント"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        観測された安全性インシデント
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Anthropic Red Teamの内部評価で判明した挙動
      </div>

      <div className="space-y-3">
        {incidents.map((inc) => (
          <div
            key={inc.title}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${inc.color}`,
              backgroundColor: `${inc.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider"
                style={{
                  backgroundColor: `${inc.color}20`,
                  color: inc.color,
                }}
              >
                {inc.severity}
              </span>
              <span className="text-sm font-semibold">{inc.title}</span>
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              {inc.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          → Anthropicは <strong>一般公開を見送り</strong>、
          検証された防御側パートナーにのみ Mythos Preview を提供する判断を下した。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: red.anthropic.com Mythos Preview Risk Report (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Defender-First Strategy — Funding Allocation
   ───────────────────────────────────────────── */
export function GlasswingStrategyDiagram() {
  const items = [
    {
      label: "モデル使用クレジット",
      amount: "$100M",
      target: "Glasswingパートナー11社",
      detail:
        "リサーチプレビュー期間中の十分な使用量を保証。脆弱性発掘に必要な計算資源を無償提供。",
      color: "#8b5cf6",
    },
    {
      label: "OSS団体への直接寄付",
      amount: "$4M",
      target: "Linux Foundation・OpenBSD等",
      detail:
        "オープンソースセキュリティ団体に無条件で現金寄付。エコシステム全体の防御力を底上げ。",
      color: "#10b981",
    },
    {
      label: "成果の公開",
      amount: "90日",
      target: "業界全体",
      detail:
        "修正された脆弱性のサマリと、AI時代のセキュリティ・ベストプラクティスを公表。",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="防御側を先行させるためのコミットメント"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        防御側先行戦略
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Anthropicのコミットメント — 攻撃側との時間差を最大化する
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${it.color}`,
              backgroundColor: `${it.color}08`,
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
              <div>
                <span
                  className="text-sm font-bold"
                  style={{ color: it.color }}
                >
                  {it.label}
                </span>
                <div className="text-[10px] text-foreground/45 mt-0.5">
                  対象: {it.target}
                </div>
              </div>
              <div
                className="text-2xl font-bold tabular-nums"
                style={{ color: it.color }}
              >
                {it.amount}
              </div>
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              {it.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Anthropic Project Glasswing announcement (2026-04-07)
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Roadmap Timeline
   ───────────────────────────────────────────── */
export function GlasswingTimelineDiagram() {
  const phases = [
    {
      time: "2026年4月7日",
      label: "発表・始動",
      detail: "Project Glasswing公開。11社のパートナーにMythos Previewへのアクセスを提供開始。",
      color: "#8b5cf6",
    },
    {
      time: "〜90日後（〜2026年7月）",
      label: "初期成果報告",
      detail: "修正された脆弱性のサマリと、AI時代のセキュリティ・ベストプラクティスを公開。",
      color: "#3b82f6",
    },
    {
      time: "中期",
      label: "セーフガード完成",
      detail: "危険な出力を検出・遮断する技術を開発。一般公開の判断材料を整備。",
      color: "#10b981",
    },
    {
      time: "長期",
      label: "新SDLCの標準化",
      detail: "AIによる脆弱性発見・修正を組み込んだ新しい開発ライフサイクルの業界標準化。",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Project Glasswingのロードマップ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        ロードマップ
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Project Glasswingの段階的展開
      </div>

      <div className="space-y-2">
        {phases.map((p, i) => (
          <div
            key={p.label}
            className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg"
            style={{
              backgroundColor: `${p.color}08`,
              borderLeft: `3px solid ${p.color}`,
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: p.color }}
            >
              {i + 1}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-sm font-semibold">{p.label}</span>
                <span
                  className="text-[10px] font-medium tabular-nums"
                  style={{ color: p.color }}
                >
                  {p.time}
                </span>
              </div>
              <div className="mt-1 text-[11px] text-foreground/60 leading-relaxed">
                {p.detail}
              </div>
            </div>
            {i < phases.length - 1 && (
              <div className="absolute -bottom-2 left-7 text-foreground/20 text-xs z-10">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Anthropic Project Glasswing announcement、CNBC (2026-04-07)
      </div>
    </div>
  );
}
