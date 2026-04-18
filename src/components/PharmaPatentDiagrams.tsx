"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Pharma Patent Cliff 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
const EMERALD = "#10b981";

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
      aria-label="Pharma patent cliff diagram"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${EMERALD}aa` }}
        >
          <T ja="図" en="FIGURE" />
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

/* ── 1. 日本製薬4社の概況 ── */
export function PharmaPatentCliffOverviewDiagram() {
  const companies = [
    {
      name: "武田薬品",
      flagship: "エンタイビオ",
      risk: "中",
      outlook: "特許延命で一息。後継品育成が課題",
      color: AMBER,
      riskLevel: 2,
    },
    {
      name: "アステラス製薬",
      flagship: "イクスタンジ",
      risk: "高",
      outlook: "2027年特許切れ×IRA価格交渉の「二重の崖」",
      color: RED,
      riskLevel: 3,
    },
    {
      name: "第一三共",
      flagship: "エンハーツ（ADC）",
      risk: "低",
      outlook: "2030年ピーク1兆円超予測。最も強い成長曲線",
      color: GREEN,
      riskLevel: 1,
    },
    {
      name: "中外製薬",
      flagship: "ロシュ協業品",
      risk: "低",
      outlook: "ロシュとの協業で安定成長。最も安定的",
      color: BLUE,
      riskLevel: 1,
    },
  ];

  return (
    <Card
      title={<T ja="日本製薬大手4社の「明暗分化」——2026〜27年の分水嶺" en="Japan's Top 4 Pharma: Diverging Fortunes at the 2026–27 Watershed" />}
      subtitle={<T ja="パテントクリフリスクと成長性の対比" en="Patent cliff risk vs. growth momentum" />}
    >
      <div className="space-y-3">
        {companies.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: c.color, borderLeftWidth: "3px" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-foreground">{c.name}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: `${c.color}20`, color: c.color }}
              >
                崖リスク：{c.risk}
              </span>
            </div>
            <div className="text-[11px] text-foreground/50 mb-1">主力品：{c.flagship}</div>
            <div className="text-[12px] text-foreground/70">{c.outlook}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. 武田・エンタイビオ ── */
export function PharmaWithTakedaEntyvio(){}
export function PharmaTakedaEntyvioDiagram() {
  const data = [
    { year: "2023年度", sales: 8000, label: "グローバル売上" },
    { year: "2025年度（見込み）", sales: 10000, label: "1兆円超" },
    { year: "2032年", sales: null, label: "米国特許・データ保護が実質継続" },
  ];

  return (
    <Card
      title={<T ja="武田のエンタイビオ——「2032年延命成功」の意味" en="Takeda's Entyvio: What '2032 Extension' Really Means" />}
      subtitle={<T ja="1兆円品が特許の壁を突破——しかし1品依存リスクは残る" en="A trillion-yen drug clears the patent hurdle — but single-product dependency persists" />}
    >
      <div className="space-y-3 mb-4">
        {data.map((d) => (
          <div key={d.year} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/60 w-28 shrink-0">{d.year}</div>
            {d.sales ? (
              <div className="flex-1">
                <div className="h-6 bg-foreground/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center px-2"
                    style={{ width: `${(d.sales / 10000) * 100}%`, backgroundColor: AMBER }}
                  >
                    <span className="text-[10px] font-bold text-white">{d.sales.toLocaleString()}億円</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 p-2 rounded-lg text-[11px] text-foreground/65" style={{ backgroundColor: `${GREEN}10` }}>
                ✓ {d.label}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="p-3 rounded-xl border border-brief-border">
          <div className="text-[10px] text-foreground/40 mb-1">ポジティブ要因</div>
          <div className="text-[12px] text-foreground/75">2026年に11年ぶりのCEO交代→新中計でM&A加速の見込み</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border">
          <div className="text-[10px] text-foreground/40 mb-1">リスク</div>
          <div className="text-[12px] text-foreground/75">エンタイビオ1品依存の構造は変わらず。後継品育成が急務</div>
        </div>
      </div>
    </Card>
  );
}

/* ── 3. アステラスの二重の崖 ── */
export function PharmaAstellasDoubleCliffDiagram() {
  const cliffs = [
    {
      cliff: "崖1",
      label: "2027年特許切れ",
      detail: "イクスタンジ（7,505億円の収益源）の核心特許が満了。後発品参入後50〜70%減の可能性",
      color: RED,
    },
    {
      cliff: "崖2",
      label: "米国IRA価格交渉",
      detail: "Medicare薬価交渉によりイクスタンジが価格圧力にさらされる可能性",
      color: AMBER,
    },
  ];

  return (
    <Card
      title={<T ja="アステラスの「二重の崖」——2027〜28年の収益急落リスク" en="Astellas's 'Twin Cliffs': The 2027–28 Earnings Cliff Risk" />}
      subtitle={<T ja="特許切れ×IRA価格交渉という類例のない複合リスク" en="An unprecedented compound risk: patent expiry meets IRA price negotiations" />}
    >
      <div className="space-y-4 mb-4">
        {cliffs.map((c) => (
          <div
            key={c.cliff}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: c.color, borderLeftWidth: "4px" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${c.color}20`, color: c.color }}
              >
                {c.cliff}
              </span>
              <span className="text-[14px] font-bold text-foreground">{c.label}</span>
            </div>
            <div className="text-[12px] text-foreground/70 leading-relaxed">{c.detail}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="イクスタンジ売上7,505億円は全体の約40%。「二重の崖」が重なれば収益の壊滅的縮小というシナリオが現実に"
          en="Xtandi accounts for ~40% of revenue. If both cliffs hit simultaneously, a catastrophic earnings collapse becomes a real scenario"
        />
      </div>
    </Card>
  );
}

/* ── 4. アステラスのパイプライン ── */
export function PharmaAstellasPipelineDiagram() {
  const pipeline = [
    { drug: "ベオーザ（fezolinetant）", indication: "更年期ホットフラッシュ", expected: "2,000億円超", revised: "1,000億円未満", status: "下方修正" },
    { drug: "ゾスパタ（gilteritinib）", indication: "急性骨髄性白血病", expected: "安定的成長", revised: "成長中", status: "安定" },
    { drug: "各種パイプライン品", indication: "複数", expected: "未確定", revised: "イクスタンジ補填には不十分", status: "不足" },
  ];

  return (
    <Card
      title={<T ja="アステラスのパイプライン——R&D費18%でも「穴埋め」できない現実" en="Astellas Pipeline: 18% R&D Spending Still Can't Fill the Gap" />}
      subtitle={<T ja="ベオーザの当初予想の半分以下への下方修正が象徴する困難" en="Veoza's >50% downward revision symbolises the pipeline challenge" />}
    >
      <div className="space-y-3">
        {pipeline.map((p) => (
          <div key={p.drug} className="p-3 rounded-xl border border-brief-border">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-bold text-foreground">{p.drug}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: p.status === "下方修正" ? `${RED}15` : p.status === "安定" ? `${GREEN}15` : `${AMBER}15`,
                  color: p.status === "下方修正" ? RED : p.status === "安定" ? GREEN : AMBER,
                }}
              >
                {p.status}
              </span>
            </div>
            <div className="text-[11px] text-foreground/50 mb-2">{p.indication}</div>
            {p.status === "下方修正" && (
              <div className="flex gap-2 text-[11px]">
                <span className="text-foreground/40">当初：</span>
                <span className="line-through text-foreground/40">{p.expected}</span>
                <span className="text-foreground/40">→</span>
                <span className="font-bold text-red-500">{p.revised}</span>
              </div>
            )}
            {p.status !== "下方修正" && (
              <div className="text-[11px] text-foreground/65">{p.revised}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="R&D費売上比18.4%（2,942億円）は業界最高水準。しかし既存品の収益縮小を補う「1本の柱」がない"
          en="R&D-to-sales ratio of 18.4% (¥294.2 bn) leads the industry. Yet there is no single product to offset the erosion of existing revenues"
        />
      </div>
    </Card>
  );
}

/* ── 5. 第一三共のADC革命 ── */
export function PharmaDaiichiAdcDiagram() {
  const adcData = [
    { year: "2023年", sales: 3500, label: "エンハーツ売上（推定）" },
    { year: "2025年度（9M）", sales: 5526, label: "グローバル製品売上高" },
    { year: "2030年（予測）", sales: 10000, label: "ピーク時1兆円超（一部予測2兆円）" },
  ];

  return (
    <Card
      title={<T ja="第一三共のADC革命——エンハーツが「ゲームチェンジャー」になった理由" en="Daiichi Sankyo's ADC Revolution: Why Enhertu Became a Game-Changer" />}
      subtitle={<T ja="2030年にピーク時1兆〜2兆円予測。ADCフランチャイズの筆頭走者" en="Peak estimates of ¥1–2 trillion by 2030. Leading the ADC franchise race" />}
    >
      <div className="space-y-3 mb-4">
        {adcData.map((d) => (
          <div key={d.year} className="flex items-center gap-3">
            <div className="text-[11px] text-foreground/60 w-24 shrink-0">{d.year}</div>
            <div className="flex-1">
              <div className="h-6 bg-foreground/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center px-2"
                  style={{ width: `${(d.sales / 10000) * 100}%`, backgroundColor: GREEN }}
                >
                  <span className="text-[10px] font-bold text-white">{d.sales.toLocaleString()}億円</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl border border-brief-border" style={{ borderLeftColor: GREEN, borderLeftWidth: "3px" }}>
        <div className="text-[12px] font-bold text-foreground mb-2">エンハーツの優位性</div>
        <div className="space-y-1 text-[11px] text-foreground/65">
          <div>• HER2陽性乳がん・胃がん・肺がんの二次治療で従来を上回る有効性</div>
          <div>• AstraZenecaとのグローバル共同開発で商業化を加速</div>
          <div>• 次世代ADCパイプライン（DS-8201後継・TROP2標的など）で技術基盤を拡大</div>
        </div>
      </div>
    </Card>
  );
}

/* ── 6. 戦略視点 ── */
export function PharmaStrategicViewDiagram() {
  const lessons = [
    { label: "1品依存のリスク", desc: "「当たれば大きい・切れれば壊滅的」。特許切れは予見可能なリスクであり10年前からの準備が必要", color: RED },
    { label: "開発費と成功率の構造", desc: "新薬開発は平均3,000億円・15年。成功確率数%。中規模企業が単独で維持するのは限界に近い", color: AMBER },
    { label: "M&A再編の加速", desc: "「明暗」が固定化すれば第三者への身売り・合併・事業売却が現実的な議論になる", color: BLUE },
  ];

  return (
    <Card
      title={<T ja="2026〜27年が日本製薬の「勝ち組・負け組」を決める" en="2026–27: The Year Japan Pharma's Winners and Losers Are Decided" />}
      subtitle={<T ja="イノベーションへの賭けの結果が出る時期の到来" en="The moment when the results of innovation bets come in" />}
    >
      <div className="space-y-3">
        {lessons.map((l) => (
          <div
            key={l.label}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: l.color, borderLeftWidth: "3px" }}
          >
            <div className="text-[13px] font-bold text-foreground mb-1">{l.label}</div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">{l.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${EMERALD}10` }}>
        <T
          ja="アステラスの「二重の崖」は経営の失敗ではなく、製薬業界の構造的困難さを示す事例。M&A再編の起爆剤になる可能性"
          en="Astellas's 'twin cliffs' illustrate structural industry difficulty, not management failure — and may trigger M&A consolidation"
        />
      </div>
    </Card>
  );
}
