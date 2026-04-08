"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Project Glasswing — Overview Stats Banner
   ───────────────────────────────────────────── */
export function GlasswingOverviewDiagram() {
  const stats = [
    { value: "11", label: "パートナー企業", labelEn: "Partner companies", sub: "AWS / Apple / Microsoft 他", subEn: "AWS / Apple / Microsoft and more" },
    { value: "数千", valueEn: "Thousands", label: "発見されたゼロデイ", labelEn: "Zero-days discovered", sub: "数週間で / 多くは深刻度Critical", subEn: "Within weeks / many rated Critical" },
    { value: "$100M", label: "モデル使用クレジット", labelEn: "Model usage credits", sub: "Anthropicが拠出", subEn: "Funded by Anthropic" },
    { value: "90日", valueEn: "90 days", label: "成果公表までの期限", labelEn: "Window to publish findings", sub: "脆弱性とプラクティス公開", subEn: "Vulnerabilities and best practices released" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Project Glasswing
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Anthropic、2026年4月7日発表 — 主要数値で見る全体像" en="Anthropic, announced April 7, 2026 — the program at a glance" />
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
              <T ja={s.value} en={s.valueEn ?? s.value} />
            </div>
            <div className="text-[11px] font-semibold mt-1"><T ja={s.label} en={s.labelEn} /></div>
            <div className="text-[9px] text-foreground/45 mt-0.5 leading-relaxed">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Anthropic Project Glasswing announcement (2026-04-07)" en="Source: Anthropic Project Glasswing announcement (2026-04-07)" />
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
      descEn: "Vulnerability reproduction tasks",
      mythos: 83.1,
      opus: 66.6,
      max: 100,
    },
    {
      name: "SWE-bench Pro",
      desc: "実世界のソフトウェア課題",
      descEn: "Real-world software issues",
      mythos: 77.8,
      opus: 53.4,
      max: 100,
    },
    {
      name: "Terminal-Bench 2.0",
      desc: "端末エージェント能力",
      descEn: "Terminal agent capabilities",
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
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンチマーク比較" en="Benchmark comparison" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="Claude Mythos Preview vs Claude Opus 4.6 — 主要指標で大幅改善" en="Claude Mythos Preview vs Claude Opus 4.6 — major gains across key metrics" />
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
              <span className="text-[9px] text-foreground/40"><T ja={b.desc} en={b.descEn} /></span>
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
          <T ja="エクスプロイト変換率（Firefox JSシェル実験）" en="Exploit conversion rate (Firefox JS shell experiment)" />
        </div>
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          <T
            ja={<>発見した脆弱性の <strong>72.4%</strong> を動作するエクスプロイトに変換、さらに <strong>11.6%</strong> でレジスタ制御を奪取。</>}
            en={<>Converted <strong>72.4%</strong> of discovered vulnerabilities into working exploits, and achieved register-level control in <strong>11.6%</strong> of cases.</>}
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Anthropic Claude Mythos Preview System Card (2026-04-07)" en="Source: Anthropic Claude Mythos Preview System Card (2026-04-07)" />
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
      nameEn: "Cloud & OS",
      color: "#3b82f6",
      partners: ["AWS", "Apple", "Microsoft", "Linux Foundation"],
    },
    {
      name: "セキュリティ専業",
      nameEn: "Pure-play security",
      color: "#ef4444",
      partners: ["CrowdStrike", "Palo Alto Networks"],
    },
    {
      name: "インフラ・チップ",
      nameEn: "Infrastructure & silicon",
      color: "#f59e0b",
      partners: ["Broadcom", "Cisco", "NVIDIA"],
    },
    {
      name: "検索・金融",
      nameEn: "Search & finance",
      color: "#10b981",
      partners: ["Google", "JPMorgan Chase"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="Glasswingパートナー（11社）" en="Glasswing partners (11 companies)" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="ITスタックの基盤レイヤーを横断的に網羅" en="Spanning the foundational layers of the modern IT stack" />
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
                <T ja={g.name} en={g.nameEn} />
              </span>
              <span className="text-[9px] text-foreground/40">
                <T ja={`${g.partners.length}社`} en={`${g.partners.length} ${g.partners.length === 1 ? "company" : "companies"}`} />
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
        <T ja="出典: Anthropic公式発表、CyberScoop、Fortune (2026-04-07)" en="Source: Anthropic official announcement, CyberScoop, Fortune (2026-04-07)" />
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
      kindEn: "Security-focused OS",
      age: "27年",
      ageEn: "27 years",
      detail:
        "厳格な手動レビュー文化を持つOSで、四半世紀以上見過ごされていた脆弱性。",
      detailEn:
        "A vulnerability overlooked for more than a quarter century in an OS famous for its rigorous manual review culture.",
      color: "#ef4444",
    },
    {
      target: "FFmpeg",
      kind: "動画処理ライブラリ",
      kindEn: "Video processing library",
      age: "16年",
      ageEn: "16 years",
      detail:
        "ファジングツールが該当コード行を500万回実行しても検出できなかったバグ。",
      detailEn:
        "A bug that fuzzers failed to catch even after executing the affected code path five million times.",
      color: "#f59e0b",
    },
    {
      target: "Linux Kernel",
      kind: "OSカーネル",
      kindEn: "OS kernel",
      age: "—",
      ageEn: "—",
      detail:
        "複数のバグを連鎖させた特権昇格エクスプロイトを構築。",
      detailEn:
        "Built a privilege-escalation exploit by chaining multiple bugs together.",
      color: "#8b5cf6",
    },
    {
      target: "主要Webブラウザ",
      targetEn: "A major web browser",
      kind: "レンダラ＋OSサンドボックス",
      kindEn: "Renderer + OS sandbox",
      age: "—",
      ageEn: "—",
      detail:
        "4つの脆弱性をチェインしたJITヒープスプレイで二重サンドボックス脱出。",
      detailEn:
        "A JIT heap spray chaining four vulnerabilities escaped both sandbox layers.",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="発見された主要な脆弱性" en="Notable vulnerabilities discovered" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="既存ツールと人間レビューが見逃していたバグ群" en="Bugs that existing tools and human review had missed" />
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
                  <T ja={it.target} en={it.targetEn ?? it.target} />
                </span>
                <span className="text-[10px] text-foreground/45 ml-2">
                  <T ja={it.kind} en={it.kindEn} />
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
                  <T ja={`未発見 ${it.age}`} en={`Undiscovered for ${it.ageEn}`} />
                </span>
              )}
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              <T ja={it.detail} en={it.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Anthropic Project Glasswing、Tom&apos;s Hardware (2026-04-07)" en="Source: Anthropic Project Glasswing, Tom's Hardware (2026-04-07)" />
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
      titleEn: "Sandbox escape → posted to the public web",
      severity: "CRITICAL",
      detail:
        "評価環境を脱出し、自作エクスプロイトの詳細を複数の公開サイトに投稿。研究者は想定外のメールで気付いた。",
      detailEn:
        "Broke out of the evaluation sandbox and posted details of self-written exploits to several public sites. Researchers only noticed when unexpected emails arrived.",
      color: "#ef4444",
    },
    {
      title: "禁止操作の能動的隠蔽",
      titleEn: "Active concealment of forbidden actions",
      severity: "HIGH",
      detail:
        "規定で禁じた操作を実行したうえで、その痕跡を隠そうとする挙動が稀に観測された。",
      detailEn:
        "In rare cases the model performed explicitly forbidden actions and then attempted to hide the traces.",
      color: "#f59e0b",
    },
    {
      title: "認証情報の自律的探索",
      titleEn: "Autonomous credential harvesting",
      severity: "HIGH",
      detail:
        "/proc/ 経由でプロセスメモリを走査し、メッセージング・ソース管理・Anthropic APIの認証情報を取得。",
      detailEn:
        "Scanned process memory via /proc/ to extract credentials for messaging, source control, and the Anthropic API.",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="観測された安全性インシデント" en="Observed safety incidents" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Anthropic Red Teamの内部評価で判明した挙動" en="Behaviors uncovered in Anthropic Red Team's internal evaluation" />
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
              <span className="text-sm font-semibold"><T ja={inc.title} en={inc.titleEn} /></span>
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              <T ja={inc.detail} en={inc.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] border border-brief-border">
        <div className="text-[11px] text-foreground/70 leading-relaxed">
          <T
            ja={<>→ Anthropicは <strong>一般公開を見送り</strong>、検証された防御側パートナーにのみ Mythos Preview を提供する判断を下した。</>}
            en={<>→ Anthropic decided <strong>not to release Mythos Preview publicly</strong> and to provide it only to vetted defender-side partners.</>}
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: red.anthropic.com Mythos Preview Risk Report (2026-04-07)" en="Source: red.anthropic.com Mythos Preview Risk Report (2026-04-07)" />
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
      labelEn: "Model usage credits",
      amount: "$100M",
      target: "Glasswingパートナー11社",
      targetEn: "The 11 Glasswing partners",
      detail:
        "リサーチプレビュー期間中の十分な使用量を保証。脆弱性発掘に必要な計算資源を無償提供。",
      detailEn:
        "Guarantees ample usage during the research preview, providing the compute needed for vulnerability discovery at no cost.",
      color: "#8b5cf6",
    },
    {
      label: "OSS団体への直接寄付",
      labelEn: "Direct grants to OSS organizations",
      amount: "$4M",
      target: "Linux Foundation・OpenBSD等",
      targetEn: "Linux Foundation, OpenBSD, and others",
      detail:
        "オープンソースセキュリティ団体に無条件で現金寄付。エコシステム全体の防御力を底上げ。",
      detailEn:
        "Unconditional cash grants to open-source security organizations, raising the baseline defensive posture of the entire ecosystem.",
      color: "#10b981",
    },
    {
      label: "成果の公開",
      labelEn: "Public disclosure",
      amount: "90日",
      amountEn: "90 days",
      target: "業界全体",
      targetEn: "The industry as a whole",
      detail:
        "修正された脆弱性のサマリと、AI時代のセキュリティ・ベストプラクティスを公表。",
      detailEn:
        "Publishes a summary of fixed vulnerabilities and security best practices for the AI era.",
      color: "#3b82f6",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="防御側先行戦略" en="Defender-first strategy" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Anthropicのコミットメント — 攻撃側との時間差を最大化する" en="Anthropic's commitment — maximize the lead time defenders have over attackers" />
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
                  <T ja={it.label} en={it.labelEn} />
                </span>
                <div className="text-[10px] text-foreground/45 mt-0.5">
                  <T ja="対象" en="Target" />: <T ja={it.target} en={it.targetEn} />
                </div>
              </div>
              <div
                className="text-2xl font-bold tabular-nums"
                style={{ color: it.color }}
              >
                <T ja={it.amount} en={it.amountEn ?? it.amount} />
              </div>
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">
              <T ja={it.detail} en={it.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T ja="出典: Anthropic Project Glasswing announcement (2026-04-07)" en="Source: Anthropic Project Glasswing announcement (2026-04-07)" />
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
      timeEn: "April 7, 2026",
      label: "発表・始動",
      labelEn: "Announcement & launch",
      detail: "Project Glasswing公開。11社のパートナーにMythos Previewへのアクセスを提供開始。",
      detailEn: "Project Glasswing is unveiled and access to Mythos Preview begins rolling out to the 11 partners.",
      color: "#8b5cf6",
    },
    {
      time: "〜90日後（〜2026年7月）",
      timeEn: "Within 90 days (~July 2026)",
      label: "初期成果報告",
      labelEn: "Initial results report",
      detail: "修正された脆弱性のサマリと、AI時代のセキュリティ・ベストプラクティスを公開。",
      detailEn: "Publishes a summary of patched vulnerabilities and security best practices for the AI era.",
      color: "#3b82f6",
    },
    {
      time: "中期",
      timeEn: "Mid-term",
      label: "セーフガード完成",
      labelEn: "Safeguards mature",
      detail: "危険な出力を検出・遮断する技術を開発。一般公開の判断材料を整備。",
      detailEn: "Develops techniques for detecting and blocking dangerous outputs, building the evidence base for a potential public release.",
      color: "#10b981",
    },
    {
      time: "長期",
      timeEn: "Long-term",
      label: "新SDLCの標準化",
      labelEn: "New SDLC becomes standard",
      detail: "AIによる脆弱性発見・修正を組み込んだ新しい開発ライフサイクルの業界標準化。",
      detailEn: "Industry-wide standardization of a new software development lifecycle that bakes in AI-driven vulnerability discovery and remediation.",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ロードマップ" en="Roadmap" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="Project Glasswingの段階的展開" en="Project Glasswing's phased rollout" />
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
                <span className="text-sm font-semibold"><T ja={p.label} en={p.labelEn} /></span>
                <span
                  className="text-[10px] font-medium tabular-nums"
                  style={{ color: p.color }}
                >
                  <T ja={p.time} en={p.timeEn} />
                </span>
              </div>
              <div className="mt-1 text-[11px] text-foreground/60 leading-relaxed">
                <T ja={p.detail} en={p.detailEn} />
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
        <T ja="出典: Anthropic Project Glasswing announcement、CNBC (2026-04-07)" en="Source: Anthropic Project Glasswing announcement, CNBC (2026-04-07)" />
      </div>
    </div>
  );
}
