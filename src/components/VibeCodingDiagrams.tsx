"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Vibe Coding — Diagrams
   ──────────────────────────────────────────────────────────── */

const ACCENT = "#6366f1"; // indigo
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#d97706";
const PURPLE = "#7c3aed";

function Card({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
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

/* ── 1. Overview Stats ── */
export function VibeCodingOverviewDiagram() {
  const stats = [
    { label: "提唱者のポスト閲覧数", labelEn: "Karpathy post views", value: "450万回+", valueEn: "4.5M+", color: ACCENT },
    { label: "AI生成コードの割合", labelEn: "Share of AI-generated code", value: "41%", valueEn: "41%", color: BLUE },
    { label: "米国開発者のAIツール日常利用率", labelEn: "US devs using AI tools daily", value: "92%", valueEn: "92%", color: GREEN },
    { label: "2024年にAIが書いたコード行数", labelEn: "Lines of code written by AI (2024)", value: "256億行", valueEn: "25.6B lines", color: PURPLE },
    { label: "YC 2025冬コホートのAI生成比率91%超スタートアップ", labelEn: "YC W25 startups w/ 91%+ AI code", value: "21%", valueEn: "21%", color: AMBER },
    { label: "2025年市場規模", labelEn: "2025 market size", value: "$47億", valueEn: "$4.7B", color: RED },
  ];
  return (
    <Card
      title={<T ja="数字で見るバイブコーディング普及の規模" en="Vibe Coding Adoption — By the Numbers" />}
      subtitle={<T ja="2025年時点の主要統計" en="Key statistics as of 2025" />}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 border border-brief-border"
            style={{ backgroundColor: `${s.color}08` }}
          >
            <div className="text-[10px] text-foreground/50 leading-snug mb-2">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div
              className="text-[22px] font-bold tabular-nums leading-none"
              style={{ color: s.color }}
            >
              <T ja={s.value} en={s.valueEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Stats banner ── */
export function VibeCodingStatsDiagram() {
  const items = [
    { num: "92%", desc: "米国開発者がAIコーディングツールを日常利用", descEn: "US devs use AI coding tools daily", color: BLUE },
    { num: "41%", desc: "グローバルコードがAI生成", descEn: "of global code is AI-generated", color: GREEN },
    { num: "47億ドル", desc: "2025年AI開発ツール市場規模", descEn: "AI dev tools market size in 2025", color: ACCENT },
    { num: "470億ドル", desc: "2030年予測市場規模（CAGR 38%）", descEn: "Projected 2030 market (CAGR 38%)", color: PURPLE },
  ];
  return (
    <Card
      title={<T ja="AIコーディング市場の拡大規模" en="AI Coding Market Expansion" />}
      subtitle={<T ja="2025→2030年の成長軌道" en="Growth trajectory 2025→2030" />}
    >
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.num}
            className="p-5 rounded-xl text-center border border-brief-border"
            style={{ borderTopColor: item.color, borderTopWidth: 3 }}
          >
            <div className="text-[32px] font-bold tabular-nums leading-none mb-2" style={{ color: item.color }}>
              {item.num}
            </div>
            <div className="text-[11px] text-foreground/60 leading-snug">
              <T ja={item.desc} en={item.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Tool Comparison ── */
export function VibeCodingToolsDiagram() {
  const tools = [
    {
      name: "Cursor",
      target: "プロエンジニア", targetEn: "Pro engineers",
      strength: "既存コードベースへの深い文脈理解、大規模リファクタリング", strengthEn: "Deep codebase context, large-scale refactoring",
      model: "Claude 3.5 / GPT-4o",
      color: ACCENT,
      rating: 5,
    },
    {
      name: "GitHub Copilot",
      target: "全エンジニア", targetEn: "All engineers",
      strength: "採用率最多。マルチモデル対応（Claude・Gemini・GPT-4o）", strengthEn: "Most widely adopted. Multi-model (Claude, Gemini, GPT-4o)",
      model: "Multi-model",
      color: BLUE,
      rating: 5,
    },
    {
      name: "Replit",
      target: "非エンジニア・教育", targetEn: "Non-engineers & education",
      strength: "ゼロセットアップ、ブラウザだけで完結。月5,000万回以上の実行処理", strengthEn: "Zero-setup, browser-only. 50M+ monthly executions",
      model: "複数対応",
      color: GREEN,
      rating: 4,
    },
    {
      name: "Lovable/Bolt",
      target: "デザイナー・PM", targetEn: "Designers & PMs",
      strength: "ビジュアル操作でUIコンポーネントを直接生成", strengthEn: "Visual UI component generation",
      model: "各社LLM",
      color: AMBER,
      rating: 3,
    },
    {
      name: "Claude Code",
      target: "エンジニア・ビジネス協業", targetEn: "Engineers & business collaboration",
      strength: "リポジトリ全体を理解したマルチステップ実装。CLIベース", strengthEn: "Repo-wide multi-step implementation. CLI-based",
      model: "Claude",
      color: PURPLE,
      rating: 4,
    },
  ];
  return (
    <Card
      title={<T ja="主要バイブコーディングツール比較 2026" en="Top Vibe Coding Tools Comparison 2026" />}
      subtitle={<T ja="用途・強み・対象ユーザー別の整理" en="Organized by use case, strength, and target user" />}
    >
      <div className="space-y-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: t.color, borderLeftWidth: 3 }}
          >
            <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[14px]">{t.name}</span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{ backgroundColor: `${t.color}18`, color: t.color }}
                >
                  <T ja={t.target} en={t.targetEn} />
                </span>
              </div>
              <span className="text-[10px] text-foreground/40 tabular-nums">{t.model}</span>
            </div>
            <p className="text-[12px] text-foreground/60 leading-relaxed">
              <T ja={t.strength} en={t.strengthEn} />
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Productivity Paradox ── */
export function VibeCodingProductivityDiagram() {
  return (
    <Card
      title={<T ja="生産性の逆説 — 感覚と実測の乖離" en="The Productivity Paradox — Perception vs. Measurement" />}
      subtitle={<T ja="METR研究（2025年7月）: 開発者16人・246課題の厳密な比較実験" en="METR Study (Jul 2025): Rigorous test with 16 devs, 246 tasks" />}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-brief-border text-center" style={{ borderTopColor: GREEN, borderTopWidth: 3 }}>
            <div className="text-[11px] text-foreground/50 mb-2">
              <T ja="開発者の「主観的」評価" en="Developers' 'subjective' assessment" />
            </div>
            <div className="text-[40px] font-bold tabular-nums" style={{ color: GREEN }}>+20%</div>
            <div className="text-[11px] text-foreground/60 mt-1">
              <T ja="速くなったと感じた" en="felt they were faster" />
            </div>
          </div>
          <div className="p-5 rounded-xl border border-brief-border text-center" style={{ borderTopColor: RED, borderTopWidth: 3 }}>
            <div className="text-[11px] text-foreground/50 mb-2">
              <T ja="実測されたタスク完了時間" en="Measured task completion time" />
            </div>
            <div className="text-[40px] font-bold tabular-nums" style={{ color: RED }}>−19%</div>
            <div className="text-[11px] text-foreground/60 mt-1">
              <T ja="実際には遅くなっていた" en="actually slowed down" />
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-foreground/[0.02] border border-brief-border/50">
          <div className="text-[11px] font-semibold text-foreground/70 mb-2">
            <T ja="なぜ乖離が生まれるのか" en="Why the gap exists" />
          </div>
          <div className="space-y-2">
            {[
              { ja: "AIがコードを生成する待ち時間 → 「進んでいる感覚」を生む", en: "AI generation wait → creates sensation of 'making progress'" },
              { ja: "AI出力の確認・デバッグ・リトライが積み重なる", en: "Output review, debug, and retry cycles accumulate invisibly" },
              { ja: "「できた」体験が頻繁に起きるため、詰まった時間を過小評価する", en: "'Done' moments feel frequent, so stuck-time gets discounted" },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-[12px] text-foreground/60">
                <span style={{ color: ACCENT }} className="shrink-0">▸</span>
                <span><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[11px] text-foreground/40 text-right">
          <T ja="出典: METR研究 2025年7月" en="Source: METR Research, July 2025" />
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Security Risks ── */
export function VibeCodingSecurityDiagram() {
  const risks = [
    { pct: 53, label: "本番デプロイ後にセキュリティ問題が発見されたAI生成コード", labelEn: "AI-generated code with security issues found after prod deploy", color: RED },
    { pct: 86, label: "XSS防御機能に失敗したAI生成コード（Georgetown CSET研究）", labelEn: "AI-generated code failing XSS defenses (Georgetown CSET)", color: RED },
    { pct: 45, label: "OWASP Top 10脆弱性を含むAI生成コードの割合", labelEn: "AI-generated code containing OWASP Top 10 vulnerabilities", color: AMBER },
    { pct: 40, label: "「理解していないAI生成コードをデプロイした」と認めたジュニア開発者", labelEn: "Junior devs who admitted deploying AI code they didn't understand", color: AMBER },
  ];
  return (
    <Card
      title={<T ja="AI生成コードのセキュリティリスク実態" en="Security Risk Reality of AI-Generated Code" />}
      subtitle={<T ja="複数の独立研究・サーベイによる統合データ" en="Aggregated data from multiple independent studies & surveys" />}
    >
      <div className="space-y-3">
        {risks.map((r) => (
          <div key={r.pct}>
            <div className="flex justify-between items-center mb-1 gap-2">
              <span className="text-[11px] text-foreground/65 leading-snug flex-1">
                <T ja={r.label} en={r.labelEn} />
              </span>
              <span className="font-bold tabular-nums text-[15px] shrink-0" style={{ color: r.color }}>{r.pct}%</span>
            </div>
            <div className="h-2 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded transition-all"
                style={{ width: `${r.pct}%`, backgroundColor: r.color, opacity: 0.75 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg border border-brief-border/50 bg-foreground/[0.015]">
        <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1.5">
          <T ja="主要インシデント例" en="Notable incident" />
        </div>
        <p className="text-[12px] text-foreground/60 leading-relaxed">
          <T
            ja="Moltbook社（SaaS）: バイブコーディングで構築したDB設定のミスにより、150万APIトークン・3.5万件メールアドレス・4,060件の非公開メッセージが流出"
            en="Moltbook (SaaS): DB misconfiguration from vibe-coded setup leaked 1.5M API tokens, 35K email addresses, and 4,060 private messages"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 6. Japan Cases ── */
export function VibeCodingJapanDiagram() {
  const cases = [
    {
      company: "GMOペパボ",
      companyEn: "GMO Pepabo",
      result: "国内初バイブコーディング研修（2025年新卒向け）。Cursor・Claude Code等を使った20時間プログラム",
      resultEn: "Japan's first vibe coding training (2025 new grads). 20-hr program using Cursor, Claude Code, etc.",
      highlight: "国内初", highlightEn: "Japan 1st",
      color: ACCENT,
    },
    {
      company: "トランスコスモス",
      companyEn: "Transcosmos",
      result: "「VibeOpsメソッド」確立。従来15.5人日の案件を1.5人日で完了",
      resultEn: "Established 'VibeOps method'. Reduced 15.5 person-day project to 1.5 person-days",
      highlight: "87%削減", highlightEn: "87% reduction",
      color: GREEN,
    },
    {
      company: "ASOLAB",
      companyEn: "ASOLAB",
      result: "非エンジニア社員がファイル転送サービスを24時間で構築・リリース",
      resultEn: "Non-engineer employee built and launched a file transfer service in 24 hours",
      highlight: "24時間開発", highlightEn: "24-hour build",
      color: BLUE,
    },
    {
      company: "NTTドコモ",
      companyEn: "NTT Docomo",
      result: "非エンジニア90名が参加するバイブコーディング大会を開催。社内ノーコード文化を推進",
      resultEn: "Hosted vibe coding contest with 90 non-engineer employees. Advancing internal no-code culture",
      highlight: "90名参加", highlightEn: "90 participants",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title={<T ja="日本企業のバイブコーディング活用事例" en="Vibe Coding Use Cases at Japanese Companies" />}
      subtitle={<T ja="2025年時点の先行事例" en="Early adopter cases as of 2025" />}
    >
      <div className="space-y-3">
        {cases.map((c) => (
          <div key={c.company} className="flex gap-4 p-4 rounded-xl border border-brief-border">
            <div
              className="shrink-0 px-3 py-2 rounded-lg text-center"
              style={{ backgroundColor: `${c.color}12` }}
            >
              <div className="text-[10px] font-bold" style={{ color: c.color }}>
                <T ja={c.highlight} en={c.highlightEn} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[13px] mb-0.5">
                <T ja={c.company} en={c.companyEn} />
              </div>
              <p className="text-[12px] text-foreground/60 leading-relaxed">
                <T ja={c.result} en={c.resultEn} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 7. Agentic Engineering Evolution ── */
export function VibeCodingAgenticDiagram() {
  const stages = [
    {
      era: "〜2020年代前半", eraEn: "Pre-2020s",
      label: "手書きコーディング", labelEn: "Manual Coding",
      role: "コードを書く", roleEn: "Write code",
      focus: "実装力・アルゴリズム", focusEn: "Implementation & algorithms",
      color: BLUE,
    },
    {
      era: "2025年", eraEn: "2025",
      label: "バイブコーディング", labelEn: "Vibe Coding",
      role: "プロンプトを書く", roleEn: "Write prompts",
      focus: "自然言語・要件定義", focusEn: "Natural language & requirements",
      color: ACCENT,
    },
    {
      era: "2025〜（進化形）", eraEn: "2025+ (evolved)",
      label: "エージェンティック\nエンジニアリング", labelEn: "Agentic Engineering",
      role: "AIエージェントを指揮・監査", roleEn: "Orchestrate & audit AI agents",
      focus: "設計力・品質判断・ビジネス理解", focusEn: "System design, quality judgment, business acumen",
      color: GREEN,
    },
  ];
  return (
    <Card
      title={<T ja="Karpathyが描くエンジニアリングの3段階進化" en="Karpathy's 3-Stage Evolution of Engineering" />}
      subtitle={<T ja="「バイブコーディング」→「エージェンティックエンジニアリング」へ" en="From 'vibe coding' → 'agentic engineering'" />}
    >
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={s.era} className="relative">
            <div
              className="p-4 rounded-xl border border-brief-border"
              style={{ borderLeftColor: s.color, borderLeftWidth: 3 }}
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-[10px] tabular-nums text-foreground/40 font-medium">
                  <T ja={s.era} en={s.eraEn} />
                </span>
                <span
                  className="text-[12px] font-bold"
                  style={{ color: s.color }}
                >
                  <T ja={s.label} en={s.labelEn} />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <span className="text-foreground/40 font-semibold uppercase text-[9px] tracking-wider block mb-0.5">
                    <T ja="役割" en="Role" />
                  </span>
                  <span className="text-foreground/70">
                    <T ja={s.role} en={s.roleEn} />
                  </span>
                </div>
                <div>
                  <span className="text-foreground/40 font-semibold uppercase text-[9px] tracking-wider block mb-0.5">
                    <T ja="重要スキル" en="Key skill" />
                  </span>
                  <span className="text-foreground/70">
                    <T ja={s.focus} en={s.focusEn} />
                  </span>
                </div>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="flex justify-center my-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/20">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
