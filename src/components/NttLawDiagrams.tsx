"use client";

import { T } from "./T";

const ACCENT = "#3b82f6";

function Card({
  children,
  title,
  titleEn,
}: {
  children: React.ReactNode;
  title: string;
  titleEn: string;
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
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">
          <T ja={title} en={titleEn} />
        </h3>
      </figcaption>
      {children}
    </figure>
  );
}

export function NttLawKeyPointsDiagram() {
  const rows = [
    { ja: "研究開示義務", jaR: "撤廃", en: "Research disclosure", enR: "Abolished" },
    { ja: "固定電話ユニバーサル", jaR: "柔軟化", en: "Fixed-line universal svc", enR: "Relaxed" },
    { ja: "政府の3分の1保有", jaR: "維持", en: "1/3 government stake", enR: "Kept" },
    { ja: "外資規制", jaR: "維持", en: "Foreign ownership cap", enR: "Kept" },
    { ja: "設備譲渡", jaR: "国の認可必要", enR: "State approval", en: "Infra transfers" },
    { ja: "3年後の再検討", jaR: "付則で明記", enR: "Mandated", en: "Review in 3 years" },
  ];
  return (
    <Card
      title="改正NTT法 — 変わった点・変わらなかった点"
      titleEn="Revised NTT Law — What Changed and What Didn't"
    >
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
          >
            <div className="text-[13px] font-medium text-foreground/80">
              <T ja={r.ja} en={r.en} />
            </div>
            <div
              className="text-[11px] font-bold px-3 py-1 rounded-full"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              <T ja={r.jaR} en={r.enR} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function NttLawOppositionDiagram() {
  const groups = [
    { ja: "通信事業者", en: "Telecoms", n: "18 社", nEn: "18 cos.", examples: "KDDI / SoftBank / Rakuten Mobile / LINE Yahoo …" },
    { ja: "ケーブルテレビ", en: "Cable TV", n: "45 社", nEn: "45 ops.", examples: "J:COM / TOKAI …" },
    { ja: "地方自治体", en: "Local governments", n: "120+ 団体", nEn: "120+", examples: "知事会・市長会" },
  ];
  return (
    <Card
      title="NTT法廃止への反対連合 183者の内訳（概算）"
      titleEn="The 183-Organization Opposition Coalition (Approx.)"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {groups.map((g, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-brief-border text-center"
          >
            <div
              className="text-[10px] uppercase tracking-[1.5px] font-bold mb-1"
              style={{ color: ACCENT }}
            >
              <T ja={g.ja} en={g.en} />
            </div>
            <div className="text-2xl font-bold font-serif tabular-nums">
              <T ja={g.n} en={g.nEn} />
            </div>
            <div className="text-[11px] text-foreground/50 mt-2 leading-snug">
              {g.examples}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/45 text-center">
        <T
          ja="計183者 — 2025年1月7日・総務省提出の連名意見書"
          en="Total: 183 organizations — Joint opinion filed with MIC on Jan 7, 2025"
        />
      </div>
    </Card>
  );
}

export function NttGlobalStrategyDiagram() {
  const items = [
    { ja: "IOWN商用化", en: "IOWN commercialization", desc: "光電融合・APN", descEn: "Photonics / APN" },
    { ja: "国際M&A", en: "International M&A", desc: "欧米クラウド・セキュリティ", descEn: "US/EU cloud & security" },
    { ja: "研究非公開化", en: "R&D confidentiality", desc: "開示義務撤廃で実現", descEn: "Enabled by disclosure repeal" },
    { ja: "資金調達柔軟化", en: "Flexible financing", desc: "株式発行の制約緩和を狙う", descEn: "Targeting equity flexibility" },
  ];
  return (
    <Card
      title="NTTのグローバル戦略 4つの軸"
      titleEn="NTT's Global Strategy — Four Pillars"
    >
      <div className="grid grid-cols-2 gap-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border-l-4 bg-brief-card"
            style={{ borderLeftColor: ACCENT }}
          >
            <div className="text-[13px] font-bold text-foreground/90 mb-1">
              <T ja={it.ja} en={it.en} />
            </div>
            <div className="text-[11px] text-foreground/55">
              <T ja={it.desc} en={it.descEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ThreeRivalsStrategyDiagram() {
  const rivals = [
    {
      name: "KDDI",
      posture: "通信+ライフデザイン",
      postureEn: "Telecom + Life Design",
      focus: "金融・決済・ブランドでの総合力",
      focusEn: "Cross-sell across finance, payments, brand",
    },
    {
      name: "SoftBank",
      posture: "AI + SB Economic Zone",
      postureEn: "AI + SB Economic Zone",
      focus: "OpenAI・Arm・LINEヤフー連携",
      focusEn: "OpenAI / Arm / LINE Yahoo integration",
    },
    {
      name: "Rakuten Mobile",
      posture: "コスト最適化 + 楽天経済圏",
      postureEn: "Cost optimization + Rakuten ecosystem",
      focus: "Open RAN・KDDI協定で面展開",
      focusEn: "Open RAN + KDDI roaming for coverage",
    },
  ];
  return (
    <Card
      title="3社のポジショニング"
      titleEn="How the Three Rivals Are Positioned"
    >
      <div className="space-y-3">
        {rivals.map((r, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border">
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded"
                style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
              >
                {r.name}
              </span>
              <span className="text-[13px] font-semibold text-foreground/85">
                <T ja={r.posture} en={r.postureEn} />
              </span>
            </div>
            <div className="text-[12px] text-foreground/60 leading-relaxed">
              <T ja={r.focus} en={r.focusEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Ntt2029PipelineDiagram() {
  const years = [
    { y: "2025", ja: "改正NTT法 成立", en: "Revised NTT Law enacted" },
    { y: "2026", ja: "施行 / IOWN商用展開加速", en: "Effective / IOWN rollout" },
    { y: "2027-28", ja: "国際M&A・大規模商用契約", en: "M&A / large commercial deals" },
    { y: "2029", ja: "再検討 — 業務範囲・保有・外資", en: "Review: scope, stake, foreign caps" },
  ];
  return (
    <Card
      title="2025 → 2029: 再検討までのタイムライン"
      titleEn="2025 → 2029: Timeline to the Next Review"
    >
      <div className="relative">
        <div
          className="absolute left-0 right-0 top-6 h-0.5"
          style={{ backgroundColor: `${ACCENT}30` }}
        />
        <div className="grid grid-cols-4 gap-2 relative">
          {years.map((y, i) => (
            <div key={i} className="text-center">
              <div
                className="w-3 h-3 rounded-full mx-auto mb-2"
                style={{ backgroundColor: ACCENT }}
              />
              <div className="text-[11px] font-bold tabular-nums text-foreground/80 mb-1">
                {y.y}
              </div>
              <div className="text-[10px] text-foreground/55 leading-snug">
                <T ja={y.ja} en={y.en} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Review2029AgendaDiagram() {
  const items = [
    { ja: "業務範囲規制", en: "Scope of business" },
    { ja: "政府の3分の1保有", en: "Government 1/3 stake" },
    { ja: "外資規制", en: "Foreign ownership" },
    { ja: "ユニバーサルサービスの将来", en: "Future of universal service" },
    { ja: "IOWN・量子・AIの競争政策", en: "Competition policy for IOWN/quantum/AI" },
  ];
  return (
    <Card
      title="2029年再検討の5論点"
      titleEn="Five Points for the 2029 Review"
    >
      <ol className="space-y-2">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
          >
            <span
              className="text-[11px] font-bold tabular-nums w-6 h-6 rounded-full flex items-center justify-center"
              style={{ color: ACCENT, backgroundColor: `${ACCENT}14` }}
            >
              {i + 1}
            </span>
            <span className="text-[13px] text-foreground/80 font-medium">
              <T ja={it.ja} en={it.en} />
            </span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
