"use client";

/* ────────────────────────────────────────────────────────────
   Microsoft Japan $10B Investment — Diagrams
   ──────────────────────────────────────────────────────────── */

import { T } from "@/components/T";

const MSFT = "#0078d4";
const AI = "#8b5cf6";
const GREEN = "#16a34a";
const ORANGE = "#ea580c";

function Card({
  title,
  titleEn,
  subtitle,
  subtitleEn,
  children,
}: {
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
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
          <T ja="図" en="Fig." />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">
          <T ja={title} en={titleEn ?? title} />
        </div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">
            <T ja={subtitle} en={subtitleEn ?? subtitle} />
          </div>
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
      titleEn="Microsoft Japan Investment — Largest Ever Commitment"
      subtitle="2024年比 約3.4倍"
      subtitleEn="Approx. 3.4× the 2024 figure"
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
        <T
          ja="※2026-29は4年累計コミットメント（約1.6兆円）"
          en="* 2026-29 figure is a 4-year cumulative commitment (approx. ¥1.6 trillion)"
        />
      </div>
    </Card>
  );
}

/* ── 2. Infrastructure & Partners ── */
export function MsftJpInfraDiagram() {
  const partners = [
    {
      name: "Microsoft 自社DC",
      nameEn: "Microsoft Own DCs",
      detail: "東京・大阪リージョン拡張、Hopper/Blackwell GPU 配備",
      detailEn: "Expanding Tokyo & Osaka regions; deploying Hopper/Blackwell GPUs",
      color: MSFT,
    },
    {
      name: "ソフトバンク",
      nameEn: "SoftBank",
      detail: "苫小牧・千葉等のAI専用DC、Azure/M365 販売・運用",
      detailEn: "AI-dedicated DCs in Tomakomai, Chiba, etc.; Azure/M365 sales & ops",
      color: "#e60012",
    },
    {
      name: "さくらインターネット",
      nameEn: "Sakura Internet",
      detail: "石狩DCへH100大量調達、国産クラウド × Azure 連携",
      detailEn: "Bulk H100 procurement for Ishikari DC; domestic cloud × Azure integration",
      color: GREEN,
    },
  ];
  return (
    <Card
      title="AIインフラ拡張 ― 自社DC＋2社のパートナーDC"
      titleEn="AI Infrastructure Expansion — Own DCs + 2 Partner DCs"
      subtitle="日本におけるGPU供給の三本立て"
      subtitleEn="Three pillars of GPU supply in Japan"
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
              <T ja={p.name} en={p.nameEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              <T ja={p.detail} en={p.detailEn} />
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
    { from: "Microsoft", to: "NISC", label: "脅威情報共有", labelEn: "Threat intelligence sharing" },
    { from: "Microsoft", to: "警察庁", toEn: "NPA", label: "サイバー犯罪捜査連携", labelEn: "Cybercrime investigation cooperation" },
    { from: "Microsoft", to: "デジタル庁", toEn: "Digital Agency", label: "ガバメントクラウド", labelEn: "Government cloud" },
    { from: "Microsoft", to: "JPCERT/CC", label: "ゼロデイ対応", labelEn: "Zero-day response" },
    { from: "Microsoft", to: "電力・金融・通信", toEn: "Power / Finance / Telecom", label: "重要インフラ防衛", labelEn: "Critical infrastructure defense" },
  ];
  return (
    <Card
      title="官民サイバーセキュリティ連携の構図"
      titleEn="Public-Private Cybersecurity Collaboration"
      subtitle="MDTI / Azure Sentinel を軸に展開"
      subtitleEn="Built around MDTI / Azure Sentinel"
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
                <T ja={it.to} en={it.toEn ?? it.to} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={it.label} en={it.labelEn} />
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
  const partners = [
    { ja: "富士通", en: "Fujitsu" },
    { ja: "日立", en: "Hitachi" },
    { ja: "NEC", en: "NEC" },
    { ja: "NTTデータ", en: "NTT Data" },
    { ja: "ソフトバンク", en: "SoftBank" },
  ];
  return (
    <Card
      title="2030年までに100万人のAI人材を育成"
      titleEn="Training 1 Million AI Professionals by 2030"
      subtitle="日本のIT人材約120万人の大半をカバーする規模"
      subtitleEn="Covering the majority of Japan's approx. 1.2 million IT workers"
    >
      <div className="p-5 rounded-lg border-2 mb-4"
        style={{ borderColor: `${AI}66`, backgroundColor: `${AI}10` }}>
        <div className="text-center">
          <div
            className="text-[11px] tracking-[2px] uppercase font-bold"
            style={{ color: AI }}
          >
            <T ja="2030年までの目標" en="Target by 2030" />
          </div>
          <div
            className="text-[36px] font-bold tabular-nums mt-1"
            style={{ color: AI }}
          >
            1,000,000
          </div>
          <div className="text-[12px] text-foreground/70 mt-1">
            <T
              ja="AIスキルを持つエンジニア・開発者・労働者"
              en="Engineers, developers, and workers with AI skills"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-foreground/60 mb-2">
          <T ja="連携企業" en="Partner Companies" />
        </div>
        <div className="flex flex-wrap gap-2">
          {partners.map((p) => (
            <span
              key={p.ja}
              className="px-3 py-1.5 text-[12px] font-bold rounded-md border border-brief-border"
              style={{ backgroundColor: `${MSFT}0d`, color: MSFT }}
            >
              <T ja={p.ja} en={p.en} />
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
    { name: "その他・国産", nameEn: "Others / Domestic", share: 22, color: "#94a3b8" },
  ];
  return (
    <Card
      title="日本パブリッククラウド市場シェア（推計）"
      titleEn="Japan Public Cloud Market Share (Estimate)"
      subtitle="AWS が首位、Azure が追撃"
      subtitleEn="AWS leads; Azure closing the gap"
    >
      <div className="space-y-2">
        {players.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between text-[12px] mb-1">
              <span
                className={`font-bold ${p.highlight ? "" : "text-foreground"}`}
                style={p.highlight ? { color: p.color } : {}}
              >
                <T ja={p.name} en={"nameEn" in p ? p.nameEn : p.name} />
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
      roleEn: "Domestic 2nm logic chip",
      timing: "2027量産",
      timingEn: "Mass production 2027",
      color: GREEN,
    },
    {
      title: "TSMC熊本第2工場",
      titleEn: "TSMC Kumamoto Plant 2",
      role: "3nm（仕様引上げ）",
      roleEn: "3nm (upgraded spec)",
      timing: "2027末稼働",
      timingEn: "Online late 2027",
      color: ORANGE,
    },
    {
      title: "Microsoft $10B",
      role: "DC・人材・セキュリティ",
      roleEn: "DCs, talent, security",
      timing: "2026-29年",
      timingEn: "2026–29",
      color: MSFT,
    },
  ];
  return (
    <Card
      title="日本の「半導体 × AIインフラ」の3本柱"
      titleEn={`Japan's Three Pillars of "Semiconductors × AI Infrastructure"`}
      subtitle="2026-2029の同時進行"
      subtitleEn="Advancing in parallel, 2026–2029"
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
              <T ja={p.title} en={"titleEn" in p ? p.titleEn : p.title} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-1">
              <T ja={p.role} en={p.roleEn} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-2">
              <T ja={p.timing} en={p.timingEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T
          ja="米国Big Tech × 日本企業 × 政府 の三つ巴"
          en="A three-way interplay: US Big Tech × Japanese firms × Government"
        />
      </div>
    </Card>
  );
}

/* ── 7. Stakeholder impact ── */
export function MsftJpImpactDiagram() {
  const groups = [
    {
      title: "大手SIer",
      titleEn: "Major SIers",
      detail: "5社が優先パイプライン獲得",
      detailEn: "5 firms gain preferred pipeline access",
      pos: "+",
      color: GREEN,
    },
    {
      title: "ホワイトカラー",
      titleEn: "White-collar workers",
      detail: "Copilot スキルが基礎要件化",
      detailEn: "Copilot skills becoming a baseline requirement",
      pos: "+",
      color: AI,
    },
    {
      title: "スタートアップ",
      titleEn: "Startups",
      detail: "Azure クレジット支援",
      detailEn: "Azure credit support",
      pos: "+",
      color: GREEN,
    },
    {
      title: "公共・自治体",
      titleEn: "Public sector / Local govt.",
      detail: "ガバメントクラウド標準化",
      detailEn: "Government cloud standardization",
      pos: "+",
      color: MSFT,
    },
    {
      title: "中堅SIer",
      titleEn: "Mid-tier SIers",
      detail: "エコシステム外のリスク",
      detailEn: "Risk of being left outside the ecosystem",
      pos: "−",
      color: "#dc2626",
    },
  ];
  return (
    <Card
      title="100億ドルが日本の IT 産業に与える影響"
      titleEn="Impact of the $10B Investment on Japan's IT Industry"
    >
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
                <T ja={g.title} en={g.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={g.detail} en={g.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
