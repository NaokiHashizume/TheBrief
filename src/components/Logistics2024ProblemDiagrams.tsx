"use client";

/* ────────────────────────────────────────────────────────────
   Logistics 2024 Problem Reality — Diagrams
   ──────────────────────────────────────────────────────────── */

import { T } from "@/components/T";

const AMB = "#d97706"; // logistics amber
const RED = "#dc2626";
const GREEN = "#16a34a";
const NAVY = "#1e3a8a";
const GRAY = "#6b7280";

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
          style={{ color: `${AMB}aa` }}
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

/* ── 1. Driver shortage ── */
export function LogisticsDriverShortageDiagram() {
  const stats = [
    { label: "ドライバー平均年齢", labelEn: "Avg. driver age", value: "49.9歳", valueEn: "49.9 yrs", color: AMB },
    { label: "全産業平均より", labelEn: "vs. all-industry avg.", value: "+5〜6歳", valueEn: "+5–6 yrs", color: RED },
    { label: "現役ドライバー数", labelEn: "Active drivers", value: "約84万人", valueEn: "~840,000", color: AMB },
    { label: "2030年推計不足数", labelEn: "Estimated 2030 shortfall", value: "約24万人", valueEn: "~240,000", color: RED },
  ];
  const bars = [
    { label: "年収（ドライバー）", labelEn: "Driver annual income", pct: 46, note: "477万円", color: RED },
    { label: "年収（全産業平均）", labelEn: "All-industry avg.", pct: 50, note: "503万円", color: AMB },
    { label: "時間外労働（ドライバー）", labelEn: "Overtime (drivers)", pct: 78, note: "年約2,605時間", color: RED },
    { label: "時間外労働（全産業）", labelEn: "Overtime (all)", pct: 65, note: "年約2,209時間", color: AMB },
  ];
  return (
    <Card
      title="ドライバー不足の実態"
      titleEn="The Driver Shortage in Numbers"
      subtitle="高齢化・低賃金・長時間労働の三重苦"
      subtitleEn="Triple burden: aging workforce, low wages, long hours"
    >
      <div className="grid grid-cols-2 gap-3 mb-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="text-[10px] text-foreground/60">
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div className="text-[15px] font-bold tabular-nums mt-1" style={{ color: s.color }}>
              <T ja={s.value} en={s.valueEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-foreground/70">
                <T ja={b.label} en={b.labelEn} />
              </span>
              <span className="tabular-nums font-bold" style={{ color: b.color }}>
                {b.note}
              </span>
            </div>
            <div className="h-3 rounded bg-foreground/5 overflow-hidden">
              <div className="h-full rounded" style={{ width: `${b.pct}%`, backgroundColor: b.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="野村総研試算：何も対策しなければ2030年に約24万人のドライバーが不足。若年層の入職は進まず、引退が加速。"
          en="NRI estimate: Without action, Japan faces a shortfall of ~240,000 drivers by 2030. Youth entry remains low as retirements accelerate."
        />
      </div>
    </Card>
  );
}

/* ── 2. Capacity gap ── */
export function LogisticsCapacityGapDiagram() {
  return (
    <Card
      title="EC需要増と輸送キャパシティのギャップ"
      titleEn="Gap Between E-Commerce Demand and Transport Capacity"
      subtitle="宅配便52億個 vs 規制で失われる輸送力"
      subtitleEn="5.2 billion parcels vs. capacity lost to regulation"
    >
      <div className="space-y-4 mb-5">
        <div>
          <div className="text-[11px] font-bold text-foreground/60 mb-2">
            <T ja="EC市場・宅配便の拡大" en="E-Commerce & Parcel Volume Growth" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { year: "2014", parcels: "36億個", parcelsEn: "3.6B", color: GRAY },
              { year: "2024", parcels: "52億個", parcelsEn: "5.2B", color: AMB },
              { year: "2030予測", parcelsEn: "2030 est.", parcels: "60億個+", parcelsEn2: "6B+", color: RED },
            ].map((d) => (
              <div
                key={d.year}
                className="p-3 rounded-lg text-center border border-brief-border"
                style={{ backgroundColor: `${d.color}0d` }}
              >
                <div className="text-[10px] text-foreground/50">{d.year}</div>
                <div className="text-[14px] font-bold tabular-nums" style={{ color: d.color }}>
                  <T ja={d.parcels} en={d.parcelsEn2 ?? d.parcelsEn} />
                </div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="宅配便" en="parcels" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold text-foreground/60 mb-2">
            <T ja="輸送能力不足の試算（対策なしの場合）" en="Estimated Capacity Shortfall (No Action Taken)" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg text-center" style={{ backgroundColor: `${AMB}0d` }}>
              <div className="text-[10px] text-foreground/60">
                <T ja="2024年度" en="FY2024" />
              </div>
              <div className="text-[22px] font-bold tabular-nums" style={{ color: AMB }}>
                <T ja="14.2%" en="14.2%" />
              </div>
              <div className="text-[10px] text-foreground/60">
                <T ja="不足" en="shortfall" />
              </div>
            </div>
            <div className="p-3 rounded-lg text-center" style={{ backgroundColor: `${RED}0d` }}>
              <div className="text-[10px] text-foreground/60">
                <T ja="2030年度" en="FY2030" />
              </div>
              <div className="text-[22px] font-bold tabular-nums" style={{ color: RED }}>
                <T ja="34.1%" en="34.1%" />
              </div>
              <div className="text-[10px] text-foreground/60">
                <T ja="不足" en="shortfall" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="規制施行で約2.5万台分のトラック輸送力が失われた（国土交通省推計）。EC市場のBtoC規模は2024年に26.1兆円（前年比+5.1%）と拡大が続く。"
          en="The regulation removed ~25,000 trucks' worth of capacity (MLIT estimate). Japan's BtoC e-commerce market grew 5.1% to ¥26.1 trillion in 2024."
        />
      </div>
    </Card>
  );
}

/* ── 3. Major players ── */
export function LogisticsMajorPlayersDiagram() {
  const players = [
    {
      name: "ヤマト運輸", nameEn: "Yamato Transport",
      share: "43%", shareNum: 43,
      action: "置き配全面解禁・クロスベルトソーター導入・宅急便単価引き上げ",
      actionEn: "Full opt-in for contactless delivery, cross-belt sorter, higher per-parcel rates",
      color: AMB,
    },
    {
      name: "佐川急便", nameEn: "Sagawa Express",
      share: "30%", shareNum: 30,
      action: "法人向け特化・EC大手との長期契約・2年連続7%値上げ",
      actionEn: "B2B focus, long-term contracts with major EC firms, 7% rate hike 2 years running",
      color: GREEN,
    },
    {
      name: "日本郵便", nameEn: "Japan Post",
      share: "15%", shareNum: 15,
      action: "ドローン配送実証・郵便局ネットワーク活用・ゆうパック値上げ",
      actionEn: "Drone delivery trials, postal network leverage, ¥ rate increase for Yu-Pack",
      color: NAVY,
    },
  ];
  return (
    <Card
      title="大手3社の対応戦略"
      titleEn="Response Strategies of the Top 3 Carriers"
      subtitle="ヤマト・佐川・日本郵便の2024年問題対応"
      subtitleEn="Yamato, Sagawa, and Japan Post vs. the 2024 crisis"
    >
      <div className="space-y-3">
        {players.map((p) => (
          <div
            key={p.name}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}08` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-[13px]" style={{ color: p.color }}>
                <T ja={p.name} en={p.nameEn} />
              </div>
              <div
                className="text-[18px] font-bold tabular-nums"
                style={{ color: p.color }}
              >
                {p.share}
              </div>
            </div>
            <div className="h-2 rounded bg-foreground/5 overflow-hidden mb-2">
              <div className="h-full rounded" style={{ width: `${p.shareNum}%`, backgroundColor: p.color }} />
            </div>
            <div className="text-[11px] text-foreground/65">
              <T ja={p.action} en={p.actionEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/65">
        <T
          ja="再配達率は2024年10月時点で約10%（前年同月比▲1.0ポイント）に低下。置き配・宅配ロッカー普及が寄与。"
          en="Redelivery rates fell to ~10% as of Oct. 2024 (down 1.0 pt YoY), driven by contactless delivery and locker adoption."
        />
      </div>
    </Card>
  );
}

/* ── 4. Automation ── */
export function LogisticsAutomationDiagram() {
  const techs = [
    {
      icon: "🚚",
      title: "自動運転トラック",
      titleEn: "Autonomous Trucks",
      status: "2025〜商用実証",
      statusEn: "Commercial trials from 2025",
      body: "レベル4（高速道路）が2024年4月解禁。T2・いすゞ・三菱ふそうが新東名で実証。2027年商用化目標。",
      bodyEn: "Level 4 autonomy (highways) cleared in April 2024. T2, Isuzu, and MFTBC running trials on the Shin-Tomei. Commercial target: 2027.",
      color: AMB,
    },
    {
      icon: "🏭",
      title: "自動仕分け・倉庫ロボット",
      titleEn: "Automated Sorting & Warehouse Robots",
      status: "導入拡大中",
      statusEn: "Rapidly expanding",
      body: "ヤマトのクロスベルトソーターで1時間5万個処理。Amazonロボティクスによるピッキング自動化率70%以上。",
      bodyEn: "Yamato's cross-belt sorter handles 50,000 parcels/hr. Amazon Robotics achieves 70%+ automated picking.",
      color: GREEN,
    },
    {
      icon: "🤖",
      title: "AI配送ルート最適化",
      titleEn: "AI Delivery Route Optimization",
      status: "実用段階",
      statusEn: "In production use",
      body: "AIによるルート自動生成で走行距離10〜20%削減。積載率の低いトラック空車マッチングも普及。",
      bodyEn: "AI route generation cuts mileage 10–20%. Empty-truck matching platforms (e.g., PickGo) improving load rates.",
      color: NAVY,
    },
    {
      icon: "🚁",
      title: "ドローン配送",
      titleEn: "Drone Delivery",
      status: "過疎地・離島で実用化",
      statusEn: "Live in remote / island areas",
      body: "ANAが五島列島で定期運航。日本郵便が奥多摩で実証。都市部は2028年以降と見込まれる。",
      bodyEn: "ANA runs regular drone service to the Goto Islands. Japan Post trialing in Okutama. Urban use unlikely before 2028.",
      color: RED,
    },
  ];
  return (
    <Card
      title="自動化・AI活用の最前線"
      titleEn="Automation & AI: Current Frontline"
      subtitle="人手不足を補う4つのテクノロジー"
      subtitleEn="Four technologies addressing the labor gap"
    >
      <div className="grid grid-cols-1 gap-3">
        {techs.map((t) => (
          <div
            key={t.title}
            className="p-3 rounded-lg border border-brief-border flex gap-3"
            style={{ backgroundColor: `${t.color}08` }}
          >
            <div className="text-[20px] shrink-0 mt-0.5">{t.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="text-[12px] font-bold" style={{ color: t.color }}>
                  <T ja={t.title} en={t.titleEn} />
                </div>
                <div
                  className="text-[9px] px-2 py-0.5 rounded-full shrink-0 font-medium"
                  style={{ backgroundColor: `${t.color}15`, color: t.color }}
                >
                  <T ja={t.status} en={t.statusEn} />
                </div>
              </div>
              <div className="text-[11px] text-foreground/65 leading-relaxed">
                <T ja={t.body} en={t.bodyEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Cost breakdown ── */
export function LogisticsCostDiagram() {
  return (
    <Card
      title="「送料無料」の真実 — 誰がコストを払っているのか"
      titleEn={`The Truth About "Free Shipping" — Who Really Pays?`}
      subtitle="宅配便1個の原価構造と負担の連鎖"
      subtitleEn="Cost structure of one parcel and the chain of burden"
    >
      <div className="space-y-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${AMB}0d` }}>
          <div className="text-[11px] font-bold mb-3" style={{ color: AMB }}>
            <T ja="宅配便1個の原価（ヤマト宅急便・平均単価720円）" en="Cost per parcel — Yamato avg. ¥720" />
          </div>
          <div className="space-y-2">
            {[
              { item: "人件費（ドライバー等）", itemEn: "Labor (drivers etc.)", pct: 52, color: RED },
              { item: "燃料費", itemEn: "Fuel", pct: 9, color: AMB },
              { item: "車両・設備費", itemEn: "Vehicles & equipment", pct: 6, color: NAVY },
              { item: "営業利益", itemEn: "Operating profit", pct: 4, color: GREEN },
              { item: "その他", itemEn: "Other", pct: 29, color: GRAY },
            ].map((r) => (
              <div key={r.item}>
                <div className="flex justify-between text-[10px] mb-0.5">
                  <span className="text-foreground/65">
                    <T ja={r.item} en={r.itemEn} />
                  </span>
                  <span className="font-bold tabular-nums" style={{ color: r.color }}>{r.pct}%</span>
                </div>
                <div className="h-2.5 rounded bg-foreground/5 overflow-hidden">
                  <div className="h-full rounded" style={{ width: `${r.pct}%`, backgroundColor: r.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${RED}0d` }}>
            <div className="text-[10px] font-bold mb-1" style={{ color: RED }}>
              <T ja="再配達コスト" en="Redelivery cost" />
            </div>
            <div className="text-[18px] font-bold tabular-nums" style={{ color: RED }}>
              <T ja="200〜300円/回" en="¥200–300 / trip" />
            </div>
            <div className="text-[9px] text-foreground/50 mt-1">
              <T ja="全コストをEC事業者が実質負担" en="EC operators absorb full cost" />
            </div>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${AMB}0d` }}>
            <div className="text-[10px] font-bold mb-1" style={{ color: AMB }}>
              <T ja="再配達率（2024年10月）" en="Redelivery rate (Oct 2024)" />
            </div>
            <div className="text-[18px] font-bold tabular-nums" style={{ color: AMB }}>
              約10%
            </div>
            <div className="text-[9px] text-foreground/50 mt-1">
              <T ja="前年同月比▲1.0ポイント" en="−1.0 pt vs. prior year" />
            </div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
          <T
            ja="EC消費者の多くは「送料無料」を当然と思っているが、そのコストはEC事業者→物流会社→ドライバーへと転嫁される。特に中小運送会社は「赤字でも断れない」構造に追い込まれてきた。"
            en="Most e-commerce consumers take 'free shipping' for granted, but costs cascade from EC operators to logistics firms to drivers. Small carriers in particular have been trapped in a structure where they cannot refuse even loss-making loads."
          />
        </div>
      </div>
    </Card>
  );
}

/* ── 6. Future ── */
export function LogisticsFutureDiagram() {
  const scenarios = [
    {
      label: "シナリオA：消費者・EC業界が変わる",
      labelEn: "Scenario A: Consumers & EC adapt",
      items: [
        { ja: "「送料無料」表示の廃止・適正価格化", en: "End of 'free shipping' — true-cost pricing" },
        { ja: "翌日配送から2〜3日配送への移行", en: "Shift from next-day to 2–3 day delivery" },
        { ja: "置き配・宅配ロッカー利用が常態化", en: "Contactless delivery and lockers become standard" },
        { ja: "ドライバーの待遇改善・若年層流入", en: "Better pay attracts younger drivers" },
      ],
      color: GREEN,
      verdict: "持続可能な物流へ",
      verdictEn: "Toward sustainable logistics",
    },
    {
      label: "シナリオB：構造が変わらない",
      labelEn: "Scenario B: Structure unchanged",
      items: [
        { ja: "EC大手が値下げ圧力をかけ続ける", en: "Major EC players continue squeezing rates" },
        { ja: "中小運送会社の廃業・統合加速", en: "Small carriers go out of business or consolidate" },
        { ja: "地方・過疎地への配送が消える", en: "Delivery to rural and remote areas disappears" },
        { ja: "2030年に34%の輸送能力不足が現実化", en: "The 34% capacity shortfall becomes real by 2030" },
      ],
      color: RED,
      verdict: "問題の先送りと崩壊",
      verdictEn: "Deferred collapse",
    },
  ];
  return (
    <Card
      title="2030年への分岐点 — 2つのシナリオ"
      titleEn="The Fork in the Road to 2030 — Two Scenarios"
      subtitle="EC業界・消費者・行政の行動が分岐点を決める"
      subtitleEn="The choices of EC players, consumers, and regulators determine which path is taken"
    >
      <div className="space-y-4">
        {scenarios.map((s) => (
          <div key={s.label} className="p-4 rounded-lg border border-brief-border" style={{ backgroundColor: `${s.color}08` }}>
            <div className="font-bold text-[12px] mb-3" style={{ color: s.color }}>
              <T ja={s.label} en={s.labelEn} />
            </div>
            <ul className="space-y-1.5 mb-3">
              {s.items.map((item) => (
                <li key={item.ja} className="text-[11px] text-foreground/70 flex gap-2">
                  <span style={{ color: s.color }}>▸</span>
                  <T ja={item.ja} en={item.en} />
                </li>
              ))}
            </ul>
            <div
              className="text-center text-[13px] font-bold py-2 rounded-lg"
              style={{ backgroundColor: `${s.color}15`, color: s.color }}
            >
              <T ja={s.verdict} en={s.verdictEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="2026年4月からの改正物流効率化法の義務化、フィジカルインターネット（2040年目標）、自動運転の商用化が「シナリオA」への鍵となる。"
          en="The 2026 mandatory logistics act, the 'Physical Internet' vision (2040 target), and autonomous truck commercialization are the keys to Scenario A."
        />
      </div>
    </Card>
  );
}
