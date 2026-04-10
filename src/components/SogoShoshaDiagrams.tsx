"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Sogo Shosha Business Model — Diagrams
   ──────────────────────────────────────────────────────────── */

const TRADE = "#78716c";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";
const PURPLE = "#8b5cf6";

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
          style={{ color: `${TRADE}cc` }}
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

/* ── 1. Overview ── */
export function ShoshaOverviewDiagram() {
  const cos = [
    { name: "三菱商事", nameEn: "Mitsubishi Corporation", profit: 9000, color: NAVY },
    { name: "三井物産", nameEn: "Mitsui & Co.", profit: 8800, color: TRADE },
    { name: "伊藤忠商事", nameEn: "Itochu Corporation", profit: 8000, color: GREEN },
    { name: "住友商事", nameEn: "Sumitomo Corporation", profit: 5500, color: ECON },
    { name: "丸紅", nameEn: "Marubeni Corporation", profit: 4700, color: PURPLE },
  ];
  const max = 10000;
  return (
    <Card
      title={<T ja="5大商社の純利益（2025年3月期 概算）" en="Net Profit of the 5 Major Sogo Shosha (FY2025 est.)" />}
      subtitle={<T ja="単位：億円" en="Unit: ¥100 million" />}
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70"><T ja={c.name} en={c.nameEn} /></span>
              <span
                className="tabular-nums font-bold"
                style={{ color: c.color }}
              >
                <T ja={`${c.profit.toLocaleString()}億円`} en={`¥${c.profit.toLocaleString()}00M`} />
              </span>
            </div>
            <div className="h-4 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(c.profit / max) * 100}%`,
                  backgroundColor: c.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        <T
          ja={<>5社合計純利益 <strong>3兆6,000億円超</strong> ／ 時価総額合計 約40兆円</>}
          en={<>Combined net profit exceeds <strong>¥3.6 trillion</strong> / Total market cap approx. ¥40 trillion</>}
        />
      </div>
    </Card>
  );
}

/* ── 2. Revenue model ── */
export function ShoshaRevenueModelDiagram() {
  return (
    <Card
      title={<T ja="トレーディングから事業投資へ" en="From Trading to Business Investment" />}
      subtitle={<T ja="商社モデルの転換" en="The sogo shosha model's transformation" />}
    >
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="かつて" en="Historically" /></div>
          <div className="text-[14px] font-bold mt-1" style={{ color: RED }}>
            <T ja="トレーディング" en="Trading" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-1">
            <T ja="売買仲介・口銭ビジネス" en="Trade brokerage and commission-based" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <T ja="利益率 0.5〜1%" en="Margin: 0.5–1%" />
          </div>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: `${GREEN}0d` }}
        >
          <div className="text-[10px] text-foreground/60"><T ja="現在" en="Today" /></div>
          <div className="text-[14px] font-bold mt-1" style={{ color: GREEN }}>
            <T ja="事業投資" en="Business investment" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-1">
            <T ja="権益・出資の持分利益" en="Equity income from stakes and interests" />
          </div>
          <div className="text-[10px] text-foreground/65 mt-0.5">
            <T ja="純利益の60-70%" en="60–70% of net profit" />
          </div>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] text-foreground/70"
        style={{ backgroundColor: `${TRADE}0d` }}
      >
        <T
          ja={<>商社は <strong>「世界中の事業会社の親会社」</strong> へ進化。連結子会社・関連会社からの取り込み利益が業績を支配する。</>}
          en={<>Sogo shosha have evolved into <strong>parent companies of operating businesses worldwide</strong>. Earnings from consolidated subsidiaries and affiliates now drive results.</>}
        />
      </div>
    </Card>
  );
}

/* ── 3. Five comparison ── */
export function ShoshaFiveComparisonDiagram() {
  const cos = [
    {
      name: "三菱商事",
      nameEn: "Mitsubishi Corporation",
      strength: "LNG・原料炭・自動車・ローソン",
      strengthEn: "LNG, coking coal, automotive, Lawson",
      dna: "総合力No.1・保守的",
      dnaEn: "Top overall strength; conservative",
      color: NAVY,
    },
    {
      name: "三井物産",
      nameEn: "Mitsui & Co.",
      strength: "鉄鉱石（VALE）・LNG・ヘルスケア",
      strengthEn: "Iron ore (Vale), LNG, healthcare",
      dna: "資源比率最大",
      dnaEn: "Highest resource exposure",
      color: TRADE,
    },
    {
      name: "伊藤忠商事",
      nameEn: "Itochu Corporation",
      strength: "繊維・ファミマ・CITIC",
      strengthEn: "Textiles, FamilyMart, CITIC",
      dna: "非資源No.1・独立系",
      dnaEn: "#1 in non-resources; independent",
      color: GREEN,
    },
    {
      name: "住友商事",
      nameEn: "Sumitomo Corporation",
      strength: "ニッケル・メディア・SCSK",
      strengthEn: "Nickel, media, SCSK",
      dna: "中位・大型減損経験",
      dnaEn: "Mid-tier; history of large write-downs",
      color: ECON,
    },
    {
      name: "丸紅",
      nameEn: "Marubeni Corporation",
      strength: "穀物（Gavilon）・電力・航空機",
      strengthEn: "Grains (Gavilon), power, aircraft",
      dna: "食料・電力に強い",
      dnaEn: "Strong in food and power",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title={<T ja={`5社それぞれの「色」`} en={`Each Firm's Distinct Character`} />}
      subtitle={<T ja="強みと DNA" en="Strengths and DNA" />}
    >
      <div className="space-y-2">
        {cos.map((c) => (
          <div
            key={c.name}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${c.color}0d` }}
          >
            <div className="text-[13px] font-bold" style={{ color: c.color }}>
              <T ja={c.name} en={c.nameEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              <T ja={c.strength} en={c.strengthEn} />
            </div>
            <div className="text-[10px] text-foreground/55 mt-0.5">
              <T ja={c.dna} en={c.dnaEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. Buffett ── */
export function ShoshaBuffettDiagram() {
  return (
    <Card
      title={<T ja="バフェットが買った理由" en="Why Buffett Bought" />}
      subtitle={<T ja="2020年買い増し → 2025年保有比率 各9-10%" en="Added in 2020 → holding ~9–10% each as of 2025" />}
    >
      <div className="space-y-2 mb-4">
        {[
          { num: "①", title: "低PER・高配当", titleEn: "Low P/E, high dividend", color: GREEN },
          { num: "②", title: "多角化と地域分散", titleEn: "Diversification across sectors and regions", color: NAVY },
          { num: "③", title: "厚い株主還元", titleEn: "Generous shareholder returns", color: ECON },
        ].map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              <T ja={i.title} en={i.titleEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60"><T ja="配当性向" en="Payout ratio" /></div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            30-35%
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60"><T ja="総還元性向" en="Total return ratio" /></div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            50-60%
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.04]">
          <div className="text-[9px] text-foreground/60"><T ja="自社株買い5社計" en="Buybacks (5 firms)" /></div>
          <div
            className="text-[14px] font-bold tabular-nums"
            style={{ color: TRADE }}
          >
            <T ja="1兆円超" en=">¥1 trillion" />
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Segments ── */
export function ShoshaSegmentsDiagram() {
  const segs = [
    { name: "金属資源", nameEn: "Metal resources", pct: 25, type: "資源", typeEn: "Resources", color: ECON },
    { name: "エネルギー", nameEn: "Energy", pct: 15, type: "資源", typeEn: "Resources", color: RED },
    { name: "機械・インフラ", nameEn: "Machinery & infrastructure", pct: 18, type: "非資源", typeEn: "Non-resources", color: NAVY },
    { name: "食料・農業", nameEn: "Food & agriculture", pct: 12, type: "非資源", typeEn: "Non-resources", color: GREEN },
    { name: "生活消費財", nameEn: "Consumer goods", pct: 14, type: "非資源", typeEn: "Non-resources", color: PURPLE },
    { name: "化学・金融・他", nameEn: "Chemicals, finance & other", pct: 16, type: "非資源", typeEn: "Non-resources", color: TRADE },
  ];
  return (
    <Card
      title={<T ja="セグメント別の利益構成（5社平均イメージ）" en="Profit Mix by Segment (5-firm average, approximate)" />}
      subtitle={<T ja="資源 約40% / 非資源 約60%" en="Resources ~40% / Non-resources ~60%" />}
    >
      <div className="space-y-1.5">
        {segs.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-foreground/70">
                <T ja={s.name} en={s.nameEn} />{" "}
                <span className="text-foreground/40">(<T ja={s.type} en={s.typeEn} />)</span>
              </span>
              <span
                className="tabular-nums font-bold"
                style={{ color: s.color }}
              >
                {s.pct}%
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full"
                style={{ width: `${s.pct * 3}%`, backgroundColor: s.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>伊藤忠は非資源比率 <strong>約70%</strong> ― 5社で最も「市況非依存」</>}
          en={<>Itochu&apos;s non-resource share is <strong>~70%</strong> — the least commodity-dependent of the five</>}
        />
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function ShoshaFutureDiagram() {
  const items = [
    { num: "①", title: "脱炭素 ― 水素・洋上風力・CCS", titleEn: "Decarbonization — hydrogen, offshore wind, CCS", color: GREEN },
    { num: "②", title: "地政学 ― 米中対応とグローバルサウス", titleEn: "Geopolitics — navigating US–China and the Global South", color: NAVY },
    { num: "③", title: "DX ― スタートアップ投資・AI", titleEn: "Digital transformation — startup investment and AI", color: PURPLE },
  ];
  return (
    <Card
      title={<T ja="次の10年 ― 3つの転換" en="The Next Decade — 3 Strategic Shifts" />}
      subtitle={<T ja="2026年以降の戦略軸" en="Strategic axes from 2026 onward" />}
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.num}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: i.color }}
            >
              {i.num}
            </div>
            <div className="text-[12px] font-bold" style={{ color: i.color }}>
              <T ja={i.title} en={i.titleEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>化石燃料の即時撤退は利益毀損につながるため、各社とも <strong>「移行期間」</strong> を強調</>}
          en={<>An abrupt exit from fossil fuels would hurt profits, so all firms emphasize a <strong>&quot;transition period&quot;</strong></>}
        />
      </div>
    </Card>
  );
}
