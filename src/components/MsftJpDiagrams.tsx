"use client";

/* ────────────────────────────────────────────────────────────
   Microsoft Japan $10B Investment — Diagrams
   ──────────────────────────────────────────────────────────── */

const MSFT = "#0078d4";
const AI = "#8b5cf6";
const GREEN = "#16a34a";
const ORANGE = "#ea580c";

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={title}
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${MSFT}aa` }}
        >
          Figure
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

/* ── 1. Investment growth ── */
export function MsftJpOverviewDiagram() {
  const years = [
    { y: "2014", amt: 0.7, label: "$0.7B" },
    { y: "2020", amt: 2.0, label: "$2.0B" },
    { y: "2024", amt: 2.9, label: "$2.9B" },
    { y: "2026-29", amt: 10.0, label: "$10B", highlight: true },
  ];
  const max = 10;
  return (
    <Card
      title="Microsoft の日本投資 ― 過去最大規模への拡大"
      subtitle="2024年比 約3.4倍"
    >
      <div className="space-y-3">
        {years.map((y) => (
          <div key={y.y} className="flex items-center gap-3">
            <div className="w-16 text-[11px] font-bold text-foreground/60 shrink-0">
              {y.y}
            </div>
            <div className="flex-1 h-7 rounded-md bg-foreground/5 overflow-hidden relative">
              <div
                className="h-full rounded-md flex items-center justify-end pr-2"
                style={{
                  width: `${(y.amt / max) * 100}%`,
                  backgroundColor: y.highlight ? MSFT : `${MSFT}66`,
                }}
              >
                <span className="text-[11px] font-bold text-white tabular-nums">
                  {y.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※2026-29は4年累計コミットメント（約1.6兆円）
      </div>
    </Card>
  );
}

/* ── 2. Infrastructure & Partners ── */
export function MsftJpInfraDiagram() {
  const partners = [
    {
      name: "Microsoft 自社DC",
      detail: "東京・大阪リージョン拡張、Hopper/Blackwell GPU 配備",
      color: MSFT,
    },
    {
      name: "ソフトバンク",
      detail: "苫小牧・千葉等のAI専用DC、Azure/M365 販売・運用",
      color: "#e60012",
    },
    {
      name: "さくらインターネット",
      detail: "石狩DCへH100大量調達、国産クラウド × Azure 連携",
      color: GREEN,
    },
  ];
  return (
    <Card
      title="AIインフラ拡張 ― 自社DC＋2社のパートナーDC"
      subtitle="日本におけるGPU供給の三本立て"
    >
      <div className="space-y-3">
        {partners.map((p) => (
          <div
            key={p.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}0d` }}
          >
            <div
              className="text-[13px] font-bold"
              style={{ color: p.color }}
            >
              {p.name}
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              {p.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Cybersecurity ── */
export function MsftJpSecurityDiagram() {
  const items = [
    { from: "Microsoft", to: "NISC", label: "脅威情報共有" },
    { from: "Microsoft", to: "警察庁", label: "サイバー犯罪捜査連携" },
    { from: "Microsoft", to: "デジタル庁", label: "ガバメントクラウド" },
    { from: "Microsoft", to: "JPCERT/CC", label: "ゼロデイ対応" },
    { from: "Microsoft", to: "電力・金融・通信", label: "重要インフラ防衛" },
  ];
  return (
    <Card
      title="官民サイバーセキュリティ連携の構図"
      subtitle="MDTI / Azure Sentinel を軸に展開"
    >
      <div className="space-y-2">
        {items.map((it) => (
          <div
            key={it.to}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${MSFT}08` }}
          >
            <div
              className="text-[11px] font-bold px-2 py-1 rounded shrink-0"
              style={{ backgroundColor: `${MSFT}1a`, color: MSFT }}
            >
              MS
            </div>
            <div className="text-foreground/40">→</div>
            <div className="flex-1">
              <div className="text-[12px] font-bold text-foreground">
                {it.to}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {it.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Talent ── */
export function MsftJpTalentDiagram() {
  const partners = ["富士通", "日立", "NEC", "NTTデータ", "ソフトバンク"];
  return (
    <Card
      title="2030年までに100万人のAI人材を育成"
      subtitle="日本のIT人材約120万人の大半をカバーする規模"
    >
      <div className="p-5 rounded-lg border-2 mb-4"
        style={{ borderColor: `${AI}66`, backgroundColor: `${AI}10` }}>
        <div className="text-center">
          <div
            className="text-[11px] tracking-[2px] uppercase font-bold"
            style={{ color: AI }}
          >
            Target by 2030
          </div>
          <div
            className="text-[36px] font-bold tabular-nums mt-1"
            style={{ color: AI }}
          >
            1,000,000
          </div>
          <div className="text-[12px] text-foreground/70 mt-1">
            AIスキルを持つエンジニア・開発者・労働者
          </div>
        </div>
      </div>
      <div>
        <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60 mb-2">
          連携企業
        </div>
        <div className="flex flex-wrap gap-2">
          {partners.map((p) => (
            <span
              key={p}
              className="px-3 py-1.5 text-[12px] font-bold rounded-md border border-brief-border"
              style={{ backgroundColor: `${MSFT}0d`, color: MSFT }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Cloud market share ── */
export function MsftJpVsCloudDiagram() {
  const players = [
    { name: "AWS", share: 35, color: ORANGE },
    { name: "Microsoft Azure", share: 25, color: MSFT, highlight: true },
    { name: "Google Cloud", share: 12, color: "#ea4335" },
    { name: "Oracle Cloud", share: 6, color: "#c74634" },
    { name: "その他・国産", share: 22, color: "#94a3b8" },
  ];
  return (
    <Card
      title="日本パブリッククラウド市場シェア（推計）"
      subtitle="AWS が首位、Azure が追撃"
    >
      <div className="space-y-2">
        {players.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span
                className={`font-bold ${p.highlight ? "" : "text-foreground"}`}
                style={p.highlight ? { color: p.color } : {}}
              >
                {p.name}
              </span>
              <span
                className="font-bold tabular-nums"
                style={{ color: p.color }}
              >
                {p.share}%
              </span>
            </div>
            <div className="h-3 rounded-full bg-foreground/5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${p.share}%`, backgroundColor: p.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Connection to semi industry ── */
export function MsftJpSemiLinkDiagram() {
  const pillars = [
    {
      title: "Rapidus IIM-1",
      role: "国産2nmロジック",
      timing: "2027量産",
      color: GREEN,
    },
    {
      title: "TSMC熊本第2工場",
      role: "3nm（仕様引上げ）",
      timing: "2027末稼働",
      color: ORANGE,
    },
    {
      title: "Microsoft $10B",
      role: "DC・人材・セキュリティ",
      timing: "2026-29年",
      color: MSFT,
    },
  ];
  return (
    <Card
      title="日本の「半導体 × AIインフラ」の3本柱"
      subtitle="2026-2029の同時進行"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}0d` }}
          >
            <div
              className="text-[12px] font-bold"
              style={{ color: p.color }}
            >
              {p.title}
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">{p.role}</div>
            <div className="text-[10px] text-foreground/50 mt-2">
              {p.timing}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        米国Big Tech × 日本企業 × 政府 の三つ巴
      </div>
    </Card>
  );
}

/* ── 7. Stakeholder impact ── */
export function MsftJpImpactDiagram() {
  const groups = [
    {
      title: "大手SIer",
      detail: "5社が優先パイプライン獲得",
      pos: "+",
      color: GREEN,
    },
    {
      title: "ホワイトカラー",
      detail: "Copilot スキルが基礎要件化",
      pos: "+",
      color: AI,
    },
    {
      title: "スタートアップ",
      detail: "Azure クレジット支援",
      pos: "+",
      color: GREEN,
    },
    {
      title: "公共・自治体",
      detail: "ガバメントクラウド標準化",
      pos: "+",
      color: MSFT,
    },
    {
      title: "中堅SIer",
      detail: "エコシステム外のリスク",
      pos: "−",
      color: "#dc2626",
    },
  ];
  return (
    <Card title="100億ドルが日本の IT 産業に与える影響">
      <div className="space-y-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${g.color}08` }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold shrink-0"
              style={{
                backgroundColor: `${g.color}20`,
                color: g.color,
              }}
            >
              {g.pos}
            </div>
            <div className="flex-1">
              <div
                className="text-[12px] font-bold"
                style={{ color: g.color }}
              >
                {g.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {g.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
