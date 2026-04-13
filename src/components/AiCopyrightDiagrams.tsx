"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   AI Copyright 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const ACCENT = "#6366f1";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const AMBER = "#d97706";
const PURPLE = "#7c3aed";
const TEAL = "#0d9488";

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

/* ── 1. Overview — 3 key numbers ── */
export function CopyrightOverviewDiagram() {
  const stats = [
    {
      value: "51",
      unit: <T ja="件" en="cases" />,
      label: <T ja="世界のAI著作権訴訟（2025年10月時点）" en="Global AI copyright lawsuits (as of Oct 2025)" />,
      color: RED,
    },
    {
      value: "0",
      unit: <T ja="件" en="cases" />,
      label: <T ja="フェアユースに関する実体判決" en="Substantive rulings on fair use" />,
      color: AMBER,
    },
    {
      value: "3%",
      unit: <T ja="制裁金" en="penalty" />,
      label: <T ja="EU AI Act違反時の全世界売上比制裁金" en="EU AI Act penalty as % of global revenue" />,
      color: PURPLE,
    },
  ];
  return (
    <Card
      title={<T ja="AIと著作権 — 数字で見る現在地" en="AI & Copyright — The Current State in Numbers" />}
      subtitle={<T ja="2026年4月時点の主要データ" en="Key data as of April 2026" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: s.color, borderTopWidth: 3 }}
          >
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-[32px] font-bold tabular-nums" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-[12px] text-foreground/50">{s.unit}</span>
            </div>
            <div className="text-[11px] text-foreground/55 leading-relaxed">{s.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Japan / US / EU Comparison Table ── */
export function CopyrightComparisonDiagram() {
  const rows = [
    {
      item: <T ja="AI学習の法的根拠" en="Legal basis for AI training" />,
      jp: <T ja="30条の4（非享受利用）" en="Art. 30-4 (non-enjoyment use)" />,
      us: <T ja="フェアユース（判例法）" en="Fair use (case law)" />,
      eu: <T ja="DSM指令3条・4条（TDM例外）" en="DSM Dir. Art. 3/4 (TDM exception)" />,
    },
    {
      item: <T ja="商用利用" en="Commercial use" />,
      jp: <T ja="原則OK" en="Generally OK" />,
      us: <T ja="不利に考慮される" en="Weighs against" />,
      eu: <T ja="オプトアウトなければOK" en="OK unless opted out" />,
    },
    {
      item: <T ja="オプトアウト制度" en="Opt-out mechanism" />,
      jp: <T ja="なし" en="None" />,
      us: <T ja="なし（交渉次第）" en="None (by negotiation)" />,
      eu: <T ja="あり（機械可読で権利留保）" en="Yes (machine-readable reservation)" />,
    },
    {
      item: <T ja="学習データ開示義務" en="Training data disclosure" />,
      jp: <T ja="なし" en="None" />,
      us: <T ja="なし（訴訟で開示命令あり）" en="None (court discovery orders)" />,
      eu: <T ja="義務（AI Act, 2025年8月〜）" en="Mandatory (AI Act, Aug 2025+)" />,
    },
    {
      item: <T ja="生成物の著作権" en="Copyright on AI output" />,
      jp: <T ja="人間の創作的寄与があれば可" en="If human creative contribution" />,
      us: <T ja="人間の創作的寄与があれば可" en="If human creative contribution" />,
      eu: <T ja="人間の知的創作物のみ" en="Human intellectual creation only" />,
    },
    {
      item: <T ja="制裁金" en="Penalties" />,
      jp: <T ja="民事賠償＋刑事罰あり" en="Civil damages + criminal penalties" />,
      us: <T ja="民事賠償（法定最大15万ドル/件）" en="Civil damages (up to $150K/work)" />,
      eu: <T ja="売上高3%または1,500万EUR" en="3% revenue or EUR 15M" />,
    },
  ];

  return (
    <Card
      title={<T ja="日米EU著作権法制度の比較" en="Japan / US / EU Copyright Framework Comparison" />}
      subtitle={<T ja="3つの法哲学が生む決定的な違い" en="Three legal philosophies, decisive differences" />}
    >
      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 px-2 text-foreground/40 font-semibold w-[22%]" />
              <th className="text-left py-2 px-2 font-semibold" style={{ color: RED }}>
                <T ja="日本" en="Japan" />
              </th>
              <th className="text-left py-2 px-2 font-semibold" style={{ color: BLUE }}>
                <T ja="米国" en="US" />
              </th>
              <th className="text-left py-2 px-2 font-semibold" style={{ color: TEAL }}>
                <T ja="EU" en="EU" />
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-brief-border/40">
                <td className="py-2.5 px-2 text-foreground/60 font-medium">{r.item}</td>
                <td className="py-2.5 px-2 text-foreground/70">{r.jp}</td>
                <td className="py-2.5 px-2 text-foreground/70">{r.us}</td>
                <td className="py-2.5 px-2 text-foreground/70">{r.eu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-foreground/35 mt-3">
        <T ja="※ 2026年4月時点の法制度に基づく" en="* Based on legal frameworks as of April 2026" />
      </p>
    </Card>
  );
}

/* ── 3. Lawsuit Timeline ── */
export function CopyrightTimelineDiagram() {
  const events = [
    {
      date: "2023/01",
      title: <T ja="Getty Images、Stability AIを提訴（英国・米国）" en="Getty Images sues Stability AI (UK/US)" />,
      color: RED,
    },
    {
      date: "2023/12",
      title: <T ja="NYT、OpenAI・Microsoftを提訴" en="NYT sues OpenAI & Microsoft" />,
      color: RED,
    },
    {
      date: "2024/03",
      title: <T ja="文化庁「AIと著作権に関する考え方」公表" en="Japan Cultural Agency publishes AI copyright guidelines" />,
      color: GREEN,
    },
    {
      date: "2025/02",
      title: <T ja="Thomson Reuters対ROSS：初のAI学習著作権侵害の陪審評決" en="Thomson Reuters v ROSS: first jury verdict on AI training copyright" />,
      color: AMBER,
    },
    {
      date: "2025/03",
      title: <T ja="NYT対OpenAI：裁判所が請求棄却を却下、審理継続" en="NYT v OpenAI: court denies motion to dismiss" />,
      color: BLUE,
    },
    {
      date: "2025/08",
      title: <T ja="日本新聞3社がPerplexity AIを提訴 / EU AI Act施行開始" en="3 Japanese papers sue Perplexity AI / EU AI Act takes effect" />,
      color: PURPLE,
    },
    {
      date: "2025/11",
      title: <T ja="英国高等法院：Getty敗訴「モデル重みはコピーでない」/ 日本初のAI著作権刑事事件" en="UK High Court: Getty loses / Japan's first AI copyright criminal case" />,
      color: RED,
    },
    {
      date: "2026/01",
      title: <T ja="NYT対OpenAI：2,000万件ChatGPTログ開示命令" en="NYT v OpenAI: 20M ChatGPT logs disclosure order" />,
      color: BLUE,
    },
    {
      date: "2026/08",
      title: <T ja="EU AI Act：制裁権限の発効予定" en="EU AI Act: enforcement powers take effect" />,
      color: TEAL,
    },
  ];

  return (
    <Card
      title={<T ja="AI著作権訴訟・規制タイムライン（2023〜2026年）" en="AI Copyright Lawsuits & Regulation Timeline (2023–2026)" />}
      subtitle={<T ja="訴訟（赤・青）、規制（緑・紫）、判決（オレンジ）" en="Lawsuits (red/blue), regulation (green/purple), verdicts (orange)" />}
    >
      <div className="space-y-0">
        {events.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className="w-3 h-3 rounded-full shrink-0 mt-1"
                style={{ backgroundColor: e.color, opacity: 0.85 }}
              />
              {i < events.length - 1 && (
                <div className="w-px flex-1 bg-foreground/10 my-1" />
              )}
            </div>
            <div className="pb-4 flex-1">
              <span className="text-[10px] tabular-nums font-semibold text-foreground/40 mr-2">
                {e.date}
              </span>
              <span className="text-[12px] text-foreground/70 leading-relaxed">
                {e.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Copyright Protection Flow ── */
export function CopyrightFlowDiagram() {
  const stages = [
    {
      stage: <T ja="学習データ" en="Training Data" />,
      stageEn: "Input",
      question: <T ja="著作物を学習に使えるか？" en="Can copyrighted works be used for training?" />,
      jp: <T ja="30条の4で原則OK" en="Generally OK under Art. 30-4" />,
      us: <T ja="フェアユース次第（未確定）" en="Depends on fair use (unresolved)" />,
      eu: <T ja="オプトアウトがなければOK" en="OK unless opted out" />,
      color: BLUE,
    },
    {
      stage: <T ja="モデル" en="Model" />,
      stageEn: "Process",
      question: <T ja="モデルの重みは「コピー」か？" en="Are model weights a 'copy'?" />,
      jp: <T ja="判例なし" en="No case law" />,
      us: <T ja="係争中" en="In dispute" />,
      eu: <T ja="英国高等法院：コピーではない" en="UK High Court: Not a copy" />,
      color: PURPLE,
    },
    {
      stage: <T ja="生成物" en="Output" />,
      stageEn: "Output",
      question: <T ja="生成物に著作権はあるか？" en="Is output copyrightable?" />,
      jp: <T ja="人間の創作的寄与があれば可" en="Yes, if human creative contribution" />,
      us: <T ja="人間の創作的寄与が必要" en="Human creative contribution required" />,
      eu: <T ja="人間の知的創作物のみ" en="Human intellectual creation only" />,
      color: GREEN,
    },
  ];

  return (
    <Card
      title={<T ja="著作権保護の3段階 — 学習データ・モデル・生成物" en="Three Stages of Copyright — Training Data, Model, Output" />}
      subtitle={<T ja="各段階で異なる法的論点が存在する" en="Different legal issues at each stage" />}
    >
      <div className="space-y-4">
        {stages.map((s, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold shrink-0"
                style={{ backgroundColor: s.color }}
              >
                {s.stage}
              </div>
              {i < stages.length - 1 && (
                <span className="text-foreground/20 text-[14px]">
                  {"-->"}
                </span>
              )}
              <span className="text-[12px] font-semibold text-foreground/70 flex-1">
                {s.question}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 ml-0 sm:ml-20">
              {[
                { label: <T ja="日本" en="JP" />, val: s.jp, c: RED },
                { label: <T ja="米国" en="US" />, val: s.us, c: BLUE },
                { label: <T ja="EU" en="EU" />, val: s.eu, c: TEAL },
              ].map((col, ci) => (
                <div
                  key={ci}
                  className="p-2 rounded-lg border border-brief-border/50 text-[10px] text-foreground/60 leading-relaxed"
                  style={{ borderTopColor: col.c, borderTopWidth: 2 }}
                >
                  <span className="font-bold text-[9px]" style={{ color: col.c }}>
                    {col.label}
                  </span>
                  <div className="mt-0.5">{col.val}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Risk Matrix for Japanese Companies ── */
export function CopyrightRiskMatrixDiagram() {
  const risks = [
    {
      risk: <T ja="生成物の著作権侵害" en="Output copyright infringement" />,
      impact: <T ja="高" en="High" />,
      probability: <T ja="中" en="Medium" />,
      color: RED,
      bar: 80,
    },
    {
      risk: <T ja="学習データの適法性" en="Training data legality" />,
      impact: <T ja="高" en="High" />,
      probability: <T ja="低〜中" en="Low-Med" />,
      color: AMBER,
      bar: 60,
    },
    {
      risk: <T ja="EU域外適用" en="EU extraterritorial application" />,
      impact: <T ja="高" en="High" />,
      probability: <T ja="中" en="Medium" />,
      color: PURPLE,
      bar: 75,
    },
    {
      risk: <T ja="契約・利用規約の不備" en="Inadequate contracts/ToS" />,
      impact: <T ja="中" en="Medium" />,
      probability: <T ja="高" en="High" />,
      color: BLUE,
      bar: 70,
    },
    {
      risk: <T ja="レピュテーション毀損" en="Reputation damage" />,
      impact: <T ja="中〜高" en="Med-High" />,
      probability: <T ja="中" en="Medium" />,
      color: TEAL,
      bar: 65,
    },
  ];

  return (
    <Card
      title={<T ja="日本企業のAI著作権リスクマトリクス" en="AI Copyright Risk Matrix for Japanese Companies" />}
      subtitle={<T ja="リスクの影響度と発生確率の評価" en="Impact and probability assessment" />}
    >
      <div className="space-y-3">
        {risks.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-[40%] sm:w-[35%]">
              <span className="text-[12px] font-medium text-foreground/70">{r.risk}</span>
            </div>
            <div className="flex-1">
              <div className="h-2.5 rounded bg-foreground/5 overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{ width: `${r.bar}%`, backgroundColor: r.color, opacity: 0.7 }}
                />
              </div>
            </div>
            <div className="shrink-0 flex gap-2 text-[10px]">
              <span className="text-foreground/40">
                <T ja="影響" en="Impact" />:
              </span>
              <span className="font-semibold" style={{ color: r.color }}>{r.impact}</span>
              <span className="text-foreground/40">
                <T ja="確率" en="Prob" />:
              </span>
              <span className="font-semibold text-foreground/60">{r.probability}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border/50">
        <p className="text-[11px] text-foreground/55 leading-relaxed">
          <T
            ja="最も緊急度が高いのは「生成物の著作権侵害リスク」。2025年11月の日本初刑事事件により、民事だけでなく刑事責任の可能性も現実化した"
            en="Highest urgency: output copyright infringement risk. Japan's first criminal case in Nov 2025 made criminal liability a reality"
          />
        </p>
      </div>
    </Card>
  );
}

/* ── 6. EU AI Act Structure ── */
export function CopyrightEuActDiagram() {
  const items = [
    {
      label: <T ja="学習データ要約の公開" en="Training data summary disclosure" />,
      date: "2025/08",
      status: <T ja="施行済" en="In effect" />,
      color: GREEN,
    },
    {
      label: <T ja="著作権ポリシーの策定・公表" en="Copyright policy establishment" />,
      date: "2025/08",
      status: <T ja="施行済" en="In effect" />,
      color: GREEN,
    },
    {
      label: <T ja="実践規範（Code of Practice）" en="Code of Practice" />,
      date: "2025/07",
      status: <T ja="公表済" en="Published" />,
      color: BLUE,
    },
    {
      label: <T ja="オプトアウト確認義務" en="Opt-out verification obligation" />,
      date: "2026",
      status: <T ja="施行予定" en="Upcoming" />,
      color: AMBER,
    },
    {
      label: <T ja="制裁金の執行権限" en="Penalty enforcement powers" />,
      date: "2026/08",
      status: <T ja="発効予定" en="Upcoming" />,
      color: RED,
    },
    {
      label: <T ja="施行前モデルの遡及適用" en="Retroactive compliance for existing models" />,
      date: "2027/08",
      status: <T ja="猶予期限" en="Grace period" />,
      color: PURPLE,
    },
  ];

  return (
    <Card
      title={<T ja="EU AI Act — 著作権関連規定の施行スケジュール" en="EU AI Act — Copyright Provisions Implementation Schedule" />}
      subtitle={<T ja="違反時の制裁金：全世界売上高3%または1,500万EUR" en="Penalty: 3% of global revenue or EUR 15M" />}
    >
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl border border-brief-border/50"
            style={{ borderLeftColor: item.color, borderLeftWidth: 3 }}
          >
            <div className="shrink-0 w-16">
              <span className="text-[11px] tabular-nums font-semibold text-foreground/50">
                {item.date}
              </span>
            </div>
            <div className="flex-1 text-[12px] text-foreground/70">{item.label}</div>
            <div
              className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{
                color: item.color,
                backgroundColor: `${item.color}15`,
              }}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 7. Compliance Checklist ── */
export function CopyrightChecklistDiagram() {
  const devItems = [
    <T ja="学習データの取得元は適法か（海賊版サイトを含まないか）" en="Is training data source lawful (no pirated content)?" />,
    <T ja="学習目的は「情報解析」に該当するか（非享受利用か）" en="Does training purpose qualify as 'information analysis'?" />,
    <T ja="特定クリエイターの作風模倣を目的としていないか" en="Not targeting specific creator's style?" />,
    <T ja="データプロベナンス（出典・日時・目的）を記録しているか" en="Is data provenance recorded (source, date, purpose)?" />,
  ];
  const userItems = [
    <T ja="生成物が既存著作物と類似していないか確認したか" en="Checked output for similarity to existing works?" />,
    <T ja="特定の作品名・クリエイター名をプロンプトに含めていないか" en="No specific work/creator names in prompts?" />,
    <T ja="人間の創作的寄与の記録を保存しているか" en="Records of human creative contribution preserved?" />,
    <T ja="AIサービスの利用規約における権利帰属条項を確認したか" en="Reviewed IP ownership clauses in AI service ToS?" />,
    <T ja="EU向けサービスの場合、AI Act対応の体制があるか" en="For EU services: AI Act compliance framework in place?" />,
  ];

  return (
    <Card
      title={<T ja="文化庁ガイドライン対応チェックリスト" en="Cultural Agency Guidelines Compliance Checklist" />}
      subtitle={<T ja="開発者・利用者それぞれの確認項目" en="Checklist items for developers and users" />}
    >
      <div className="space-y-5">
        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-wider mb-2.5"
            style={{ color: BLUE }}
          >
            <T ja="AI開発者・学習段階" en="AI DEVELOPERS — TRAINING STAGE" />
          </div>
          <div className="space-y-1.5">
            {devItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2 rounded-lg border border-brief-border/30"
              >
                <div
                  className="w-4 h-4 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center"
                  style={{ borderColor: BLUE }}
                >
                  <span className="text-[8px] font-bold text-foreground/30">{i + 1}</span>
                </div>
                <span className="text-[11px] text-foreground/65 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[10px] font-bold uppercase tracking-wider mb-2.5"
            style={{ color: GREEN }}
          >
            <T ja="AI利用者・生成段階" en="AI USERS — GENERATION STAGE" />
          </div>
          <div className="space-y-1.5">
            {userItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2 rounded-lg border border-brief-border/30"
              >
                <div
                  className="w-4 h-4 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center"
                  style={{ borderColor: GREEN }}
                >
                  <span className="text-[8px] font-bold text-foreground/30">{i + 1}</span>
                </div>
                <span className="text-[11px] text-foreground/65 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
