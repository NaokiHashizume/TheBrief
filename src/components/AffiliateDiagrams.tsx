"use client";

const ACCENT = "#f59e0b";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">
          Figure
        </div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   affiliate-market-scale
   アフィリエイト市場規模の推移と予測
   ───────────────────────────────────────────── */
export function AffiliateMarketScaleDiagram() {
  const data = [
    { year: "2021", value: 3491, growth: "—" },
    { year: "2022", value: 3836, growth: "+9.9%" },
    { year: "2023", value: 4113, growth: "+7.2%" },
    { year: "2024", value: 4382, growth: "+6.5%", isCurrent: true },
    { year: "2025", value: 4650, growth: "+6.1%", isForecast: true },
    { year: "2028", value: 5835, growth: "CAGR 7.2%", isForecast: true },
  ];
  const maxValue = 5835;

  return (
    <Card title="国内アフィリエイト市場規模の推移と予測（億円）">
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-12 text-[12px] font-bold text-foreground/70 tabular-nums text-right flex-shrink-0">
              {d.year}
            </div>
            <div className="flex-1 relative">
              <div
                className="h-7 rounded-md flex items-center"
                style={{
                  width: `${(d.value / maxValue) * 100}%`,
                  backgroundColor: d.isForecast
                    ? `${ACCENT}20`
                    : `${ACCENT}30`,
                  borderLeft: `3px solid ${ACCENT}`,
                }}
              >
                <span
                  className="text-[11px] font-bold pl-2 whitespace-nowrap"
                  style={{ color: ACCENT }}
                >
                  {d.value.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="w-20 text-right flex-shrink-0">
              <span
                className={`text-[11px] font-semibold ${
                  d.isCurrent
                    ? "text-foreground/80"
                    : d.isForecast
                      ? "text-foreground/40"
                      : "text-foreground/55"
                }`}
              >
                {d.growth}
              </span>
              {d.isForecast && (
                <span className="text-[9px] text-foreground/30 ml-1">予測</span>
              )}
              {d.isCurrent && (
                <span className="text-[9px] text-foreground/50 ml-1">見込</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        出典: 矢野経済研究所「アフィリエイト市場に関する調査（2025年）」
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-stema-regulation
   ステマ規制の構造と影響
   ───────────────────────────────────────────── */
export function AffiliateStemaRegulationDiagram() {
  const timeline = [
    { date: "2023年3月", event: "ステマ告示・運用基準を制定", type: "regulation" },
    { date: "2023年10月", event: "景品表示法に基づくステマ規制施行", type: "regulation" },
    { date: "2024年11月", event: "大正製薬にステマ初の措置命令", type: "enforcement" },
    { date: "2024-25年", event: "課徴金合計 約3.3億円", type: "penalty" },
    { date: "2025年〜", event: "さらなる規制強化が予定", type: "future" },
  ];

  const typeColors: Record<string, string> = {
    regulation: "#3b82f6",
    enforcement: "#ef4444",
    penalty: "#f59e0b",
    future: "#8b5cf6",
  };

  const typeLabels: Record<string, string> = {
    regulation: "法規制",
    enforcement: "摘発",
    penalty: "制裁",
    future: "今後",
  };

  return (
    <Card title="ステルスマーケティング規制のタイムラインと影響">
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-foreground/10" />
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div key={i} className="relative flex items-start gap-3">
              <div
                className="absolute left-[-18px] top-1.5 w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: typeColors[t.type],
                  backgroundColor: `${typeColors[t.type]}30`,
                }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-bold tabular-nums text-foreground/60">
                    {t.date}
                  </span>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{
                      backgroundColor: `${typeColors[t.type]}15`,
                      color: typeColors[t.type],
                    }}
                  >
                    {typeLabels[t.type]}
                  </span>
                </div>
                <p className="text-[12px] text-foreground/70">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06]">
        <div className="text-[11px] font-bold text-foreground/60 mb-1">
          規制の核心
        </div>
        <div className="text-[11px] text-foreground/55 leading-relaxed">
          広告主が第三者に依頼した表示は「広告」と明示が必要。違反は措置命令＋課徴金（売上の3%）。消費者庁サイトに半永久的に公開。
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-ai-overview
   AI Overview導入によるCTR変化
   ───────────────────────────────────────────── */
export function AffiliateAiOverviewDiagram() {
  const metrics = [
    { label: "グローバル CTR低下", value: "最大61%", severity: "high" },
    { label: "日本市場 CTR低下", value: "約37.8%", severity: "medium" },
    { label: "トラフィック減少", value: "約30%", severity: "medium" },
    { label: "CV減少サイト", value: "8.8%のみ", severity: "low" },
  ];

  return (
    <Card title="Google AI Overviewがアフィリエイトに与えた影響">
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border"
            style={{
              borderColor:
                m.severity === "high"
                  ? "#ef444430"
                  : m.severity === "medium"
                    ? "#f59e0b30"
                    : "#22c55e30",
              backgroundColor:
                m.severity === "high"
                  ? "#ef444408"
                  : m.severity === "medium"
                    ? "#f59e0b08"
                    : "#22c55e08",
            }}
          >
            <div className="text-[11px] text-foreground/50 mb-1">{m.label}</div>
            <div
              className="text-[20px] font-bold tabular-nums"
              style={{
                color:
                  m.severity === "high"
                    ? "#ef4444"
                    : m.severity === "medium"
                      ? "#f59e0b"
                      : "#22c55e",
              }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[11px] text-foreground/55 leading-relaxed">
          <span className="font-bold text-foreground/70">注目点：</span>
          トラフィック減少にもかかわらず、CV（成約）の減少は限定的。購買意欲の高いユーザーは依然としてサイトを訪問する傾向がある。
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-sns-channels
   SNSアフィリエイトの主要チャネル比較
   ───────────────────────────────────────────── */
export function AffiliateSnsChannelsDiagram() {
  const channels = [
    {
      name: "TikTok",
      status: "急成長",
      entry: "フォロワー1,000人〜",
      feature: "ショート動画→TikTok Shop→直接購入",
      color: "#000000",
    },
    {
      name: "Instagram",
      status: "主力",
      entry: "フォロワー1万人〜が目安",
      feature: "ストーリーズ・リール活用、PR案件中心",
      color: "#E1306C",
    },
    {
      name: "YouTube",
      status: "安定",
      entry: "登録者1,000人＋再生4,000h",
      feature: "レビュー動画、概要欄にASPリンク",
      color: "#FF0000",
    },
    {
      name: "note",
      status: "ニッチ",
      entry: "制限なし",
      feature: "体験型レビュー、Amazonアソシエイト中心",
      color: "#41C9B4",
    },
  ];

  return (
    <Card title="SNSアフィリエイト主要チャネルの比較（2026年）">
      <div className="space-y-3">
        {channels.map((ch, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4"
            style={{
              borderLeftColor: ch.color,
              backgroundColor: `${ch.color}08`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[13px] font-bold"
                style={{ color: ch.color }}
              >
                {ch.name}
              </span>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                style={{
                  backgroundColor: `${ch.color}15`,
                  color: ch.color,
                }}
              >
                {ch.status}
              </span>
            </div>
            <div className="text-[11px] text-foreground/60 mb-0.5">
              参入条件: {ch.entry}
            </div>
            <div className="text-[11px] text-foreground/55">{ch.feature}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        インフルエンサーマーケティング市場: 2023年 741億円 → 2027年 1,302億円（予測）
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-asp-comparison
   主要ASPの比較表
   ───────────────────────────────────────────── */
export function AffiliateAspComparisonDiagram() {
  const asps = [
    {
      name: "A8.net",
      operator: "ファンコミュニケーションズ",
      sites: "360万+",
      advertisers: "2.6万社",
      strength: "15年連続満足度1位、全ジャンル網羅",
      color: "#2563eb",
    },
    {
      name: "もしもアフィリエイト",
      operator: "もしも",
      sites: "非公開",
      advertisers: "非公開",
      strength: "W報酬制度（+12%）、Amazon審査代行",
      color: "#059669",
    },
    {
      name: "バリューコマース",
      operator: "バリューコマース（ヤフー子会社）",
      sites: "100万+",
      advertisers: "7,800社+",
      strength: "Yahoo!ショッピング唯一連携、TikTok対応",
      color: "#dc2626",
    },
    {
      name: "afb",
      operator: "フォーイット",
      sites: "非公開",
      advertisers: "非公開",
      strength: "美容・健康ジャンル特化、最低支払777円",
      color: "#7c3aed",
    },
    {
      name: "アクセストレード",
      operator: "インタースペース",
      sites: "非公開",
      advertisers: "非公開",
      strength: "金融・人材・ゲーム特化",
      color: "#ea580c",
    },
  ];

  return (
    <Card title="日本の主要ASP 5社比較（2026年）">
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="text-left py-2 pr-2 text-foreground/50 font-semibold">ASP</th>
              <th className="text-left py-2 px-2 text-foreground/50 font-semibold">登録サイト</th>
              <th className="text-left py-2 px-2 text-foreground/50 font-semibold">広告主数</th>
              <th className="text-left py-2 pl-2 text-foreground/50 font-semibold">強み</th>
            </tr>
          </thead>
          <tbody>
            {asps.map((a, i) => (
              <tr key={i} className="border-b border-foreground/[0.05]">
                <td className="py-2.5 pr-2">
                  <span className="font-bold" style={{ color: a.color }}>
                    {a.name}
                  </span>
                  <div className="text-[9px] text-foreground/40 mt-0.5">{a.operator}</div>
                </td>
                <td className="py-2.5 px-2 text-foreground/65 tabular-nums">{a.sites}</td>
                <td className="py-2.5 px-2 text-foreground/65 tabular-nums">{a.advertisers}</td>
                <td className="py-2.5 pl-2 text-foreground/60">{a.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        出典: 各社公式サイト・IR資料（2025〜2026年）
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-ai-content
   AI生成コンテンツの評価とE-E-A-T
   ───────────────────────────────────────────── */
export function AffiliateAiContentDiagram() {
  const factors = [
    { label: "Experience（経験）", desc: "実際に商品を使った体験", icon: "E", importance: 95 },
    { label: "Expertise（専門性）", desc: "資格・業界知識に基づく分析", icon: "E", importance: 90 },
    { label: "Authoritativeness（権威性）", desc: "サイト・著者の業界での評価", icon: "A", importance: 85 },
    { label: "Trustworthiness（信頼性）", desc: "情報の正確性・透明性", icon: "T", importance: 100 },
  ];

  return (
    <Card title="E-E-A-T — AI時代にGoogleが重視する4要素">
      <div className="space-y-3">
        {factors.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold flex-shrink-0"
              style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}
            >
              {f.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-bold text-foreground/80">{f.label}</div>
              <div className="text-[10px] text-foreground/50">{f.desc}</div>
            </div>
            <div className="w-20 flex-shrink-0">
              <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${f.importance}%`,
                    backgroundColor: ACCENT,
                    opacity: 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06]">
        <div className="text-[11px] text-foreground/55 leading-relaxed">
          <span className="font-bold text-foreground/70">注目データ：</span>
          専門家監修なしのAI量産記事の87%がGoogleコアアップデートでネガティブな影響を受けた（2025年）
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   affiliate-future-model
   アフィリエイトの未来3シナリオ
   ───────────────────────────────────────────── */
export function AffiliateFutureModelDiagram() {
  const scenarios = [
    {
      label: "SNSファースト",
      probability: "高",
      description: "検索依存→SNS信頼経済へ移行。クリエイターと広告主の直接契約が増加",
      color: "#22c55e",
    },
    {
      label: "AIエージェント時代",
      probability: "中",
      description: "AIが代行購入。送客モデル→APIトランザクション手数料モデルへ",
      color: "#3b82f6",
    },
    {
      label: "規制強化による縮小",
      probability: "低〜中",
      description: "ステマ規制強化＋AI規制で、コンプライアンスコストが増大",
      color: "#ef4444",
    },
  ];

  return (
    <Card title="アフィリエイトの未来 — 3つのシナリオ">
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border"
            style={{
              borderColor: `${s.color}25`,
              backgroundColor: `${s.color}06`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[13px] font-bold"
                style={{ color: s.color }}
              >
                {s.label}
              </span>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                style={{
                  backgroundColor: `${s.color}15`,
                  color: s.color,
                }}
              >
                実現可能性: {s.probability}
              </span>
            </div>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 p-3 rounded-lg bg-foreground/[0.03]">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <div className="text-[11px] font-bold text-foreground/60">
          2028年度予測: 5,835億円（中身は2024年とは全く異なる構造に）
        </div>
      </div>
    </Card>
  );
}
