"use client";

import { T } from "./T";

const ACCENT = "#a855f7";

function Card({
  title,
  titleEn,
  children,
}: {
  title: string;
  titleEn: string;
  children: React.ReactNode;
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

/* ── 1. inbound-record-stats ── */
export function InboundRecordStatsDiagram() {
  const stats = [
    { ja: "2025年訪日外国人数", en: "2025 inbound visitors", value: "4,268万人", valueEn: "42.68M", sub: "前年比+15.8%・過去最高", subEn: "+15.8% YoY — all-time record", color: ACCENT },
    { ja: "2025年訪日消費額", en: "2025 inbound spending", value: "9.5兆円", valueEn: "¥9.5T", sub: "3年連続過去最高", subEn: "3rd consecutive record high", color: "#0891b2" },
    { ja: "2026年1〜3月累計", en: "Jan–Mar 2026 cumulative", value: "1,067万人", valueEn: "10.67M", sub: "1〜3月累計では過去最速水準", subEn: "Fastest pace on record for Jan–Mar", color: "#22c55e" },
    { ja: "政府2030年目標（来訪者数）", en: "Government 2030 target (visitors)", value: "6,000万人", valueEn: "60M", sub: "消費額15兆円も目標", subEn: "Plus ¥15T spending target", color: "#94a3b8" },
  ];
  return (
    <Card title="訪日観光の記録的成長——2025年の数字" titleEn="Record Inbound Tourism — 2025 by the Numbers">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03] text-center">
            <div className="text-[10px] text-foreground/50 mb-1 leading-tight">
              <T ja={s.ja} en={s.en} />
            </div>
            <div className="text-[20px] font-bold font-serif mb-1" style={{ color: s.color }}>
              <T ja={s.value} en={s.valueEn} />
            </div>
            <div className="text-[10px] text-foreground/40">
              <T ja={s.sub} en={s.subEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. inbound-airline-strategy ── */
export function InboundAirlineStrategyDiagram() {
  const strategies = [
    {
      carrier: "ANA",
      ja: "国際線ASKを2030年度に2023年比1.5倍に拡大",
      en: "Expand international ASK to 1.5× 2023 level by FY2030",
      premium: "「THE Room FX」新型ビジネスクラス（2026年8月〜）",
      premiumEn: "New 'THE Room FX' business class seat from Aug 2026",
      color: "#1e40af",
    },
    {
      carrier: "JAL",
      ja: "737-8・A321neoで機材更新、国内線ファーストクラス全国展開（2027年〜）",
      en: "Fleet renewal (737-8/A321neo), domestic first class nationwide from 2027",
      premium: "プレミアム旅行者・富裕層インバウンド特化",
      premiumEn: "Focus on premium travelers and high-net-worth inbound",
      color: "#dc2626",
    },
  ];
  return (
    <Card title="ANA・JALの国際線シフト——「数」から「単価」へ" titleEn="ANA & JAL International Shift — From Volume to Unit Price">
      <div className="space-y-4">
        {strategies.map((s, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03]">
            <div
              className="text-[14px] font-bold mb-2 inline-block px-3 py-0.5 rounded-full"
              style={{ background: `${s.color}18`, color: s.color }}
            >
              {s.carrier}
            </div>
            <p className="text-[12px] text-foreground/70 mb-2">
              <T ja={s.ja} en={s.en} />
            </p>
            <div className="text-[11px] text-foreground/50 flex items-center gap-1.5">
              <span style={{ color: ACCENT }}>★</span>
              <T ja={s.premium} en={s.premiumEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. inbound-hotel-investment ── */
export function InboundHotelInvestmentDiagram() {
  const data = [
    { ja: "不動産全体の外国資本比率（2024年）", en: "Foreign capital share of all real estate (2024)", pct: 31, color: "#94a3b8" },
    { ja: "ホテルセクターの外国資本比率（2024年）", en: "Foreign capital share of hotels (2024)", pct: 47, color: ACCENT },
  ];
  const investors = [
    { ja: "ヒルトン・マリオット・ハイアット", en: "Hilton / Marriott / Hyatt", detail: "東京・京都・大阪でのフラッグシップ新設", detailEn: "New flagship properties in Tokyo/Kyoto/Osaka" },
    { ja: "中東ソブリンファンド", en: "Middle East sovereign funds", detail: "旅館・高級施設への戦略的投資", detailEn: "Strategic investment in ryokan & luxury properties" },
    { ja: "シンガポール系PE", en: "Singapore private equity", detail: "地方名旅館の買収・リブランディング", detailEn: "Acquiring regional renowned ryokan for rebranding" },
  ];
  return (
    <Card title="ホテル投資の47%が外資——訪日収益の帰属先が変わっている" titleEn="47% of Hotel Investment Is Foreign Capital — Who Captures Inbound Revenue?">
      <div className="space-y-3 mb-5">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-foreground/70">
                <T ja={d.ja} en={d.en} />
              </span>
              <span className="font-bold" style={{ color: d.color }}>{d.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${d.pct}%`, backgroundColor: d.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider mb-2">
        <T ja="主な外資系投資家" en="Key Foreign Investors" />
      </div>
      <div className="space-y-2">
        {investors.map((inv, i) => (
          <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-foreground/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: ACCENT }} />
            <div>
              <span className="text-[12px] font-bold text-foreground/75">
                <T ja={inv.ja} en={inv.en} />
              </span>
              <span className="text-[11px] text-foreground/50 ml-2">
                <T ja={inv.detail} en={inv.detailEn} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 4. inbound-revenue-paradox ── */
export function InboundRevenueParadoxDiagram() {
  const causes = [
    {
      ja: "旅行者の多様化",
      en: "Traveler diversification",
      detail: "中国「爆買い型」→東南アジア・欧米FITへ分散、免税消費が減少",
      detailEn: "China mass-buy tourists → spread to SE Asia/Western FIT, duty-free spending down",
    },
    {
      ja: "日常化による単価低下",
      en: "Repeat visits lowering per-trip spend",
      detail: "韓国・台湾・香港の反復旅行者が増加、1回あたり消費が低下",
      detailEn: "Korea/Taiwan/HK repeat visitors growing — lower spend per trip",
    },
    {
      ja: "物価上昇の逆説",
      en: "Price rise paradox",
      detail: "「外国人には安い日本」でも食料・宿泊の値上がりが満足度を下げる",
      detailEn: "'Cheap Japan for foreigners' — yet food/hotel price rises reduce satisfaction",
    },
  ];
  return (
    <Card title="「4,000万人なのに儲からない」——消費単価停滞の構造" titleEn="'42M Visitors Yet We're Not Profitable' — Why Spending Per Head Is Stagnant">
      <div className="mb-4 p-4 rounded-xl text-center bg-foreground/[0.03]">
        <div className="text-[12px] text-foreground/55">
          <T ja="訪日客数は過去最高・消費総額も過去最高 → にもかかわらず「観光業が儲かっていない」という声" en="Record visitor count + record total spend → yet operators say 'we're not making money'" />
        </div>
      </div>
      <div className="space-y-3">
        {causes.map((c, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-foreground/[0.03]">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
              style={{ background: `${ACCENT}18`, color: ACCENT }}
            >
              {i + 1}
            </span>
            <div>
              <div className="text-[12px] font-bold text-foreground/75">
                <T ja={c.ja} en={c.en} />
              </div>
              <div className="text-[11px] text-foreground/50 mt-0.5">
                <T ja={c.detail} en={c.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. inbound-overtourism ── */
export function InboundOvertourismDiagram() {
  const cases = [
    {
      ja: "富士山",
      en: "Mt. Fuji",
      measure: "1日4,000人上限・通行料2,000円",
      measureEn: "4,000/day cap + ¥2,000 access fee",
      year: "2024〜",
    },
    {
      ja: "姫路城",
      en: "Himeji Castle",
      measure: "入場料1,000円→2,500円（2026年〜）",
      measureEn: "Entry fee ¥1,000 → ¥2,500 (from 2026)",
      year: "2026〜",
    },
    {
      ja: "京都・嵐山",
      en: "Kyoto Arashiyama",
      measure: "混雑時入場制限の検討が進む",
      measureEn: "Congestion-based access controls under discussion",
      year: "検討中",
    },
  ];
  return (
    <Card title="オーバーツーリズムの対応策——富士山・姫路城・京都" titleEn="Overtourism Countermeasures — Fuji, Himeji, Kyoto">
      <div className="space-y-3">
        {cases.map((c, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-bold text-foreground/80">
                <T ja={c.ja} en={c.en} />
              </span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: `${ACCENT}15`, color: ACCENT }}
              >
                {c.year}
              </span>
            </div>
            <p className="text-[12px] text-foreground/60">
              <T ja={c.measure} en={c.measureEn} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.02] text-[11px] text-foreground/50">
        <T ja="課題: 高値化が「国内旅行者の追い出し」と「観光地の社会的包摂性の喪失」につながるリスク" en="Risk: Price hikes may displace domestic visitors and erode social inclusivity of tourist sites" />
      </div>
    </Card>
  );
}

/* ── 6. inbound-strategic-view ── */
export function InboundStrategicViewDiagram() {
  const tensions = [
    {
      ja: "政府の「2030年6,000万人」目標",
      en: "Government '60M by 2030' target",
      contradiction: "「量から質」という政策言説と矛盾",
      contradictionEn: "Contradicts 'quality over quantity' policy rhetoric",
      color: "#ef4444",
    },
    {
      ja: "外資ホテルによる高単価旅行者囲い込み",
      en: "Foreign hotel chains capturing high-value travelers",
      contradiction: "インバウンド収益が日本社会に還元されない構造",
      contradictionEn: "Inbound revenue doesn't flow back to Japanese communities",
      color: "#f59e0b",
    },
    {
      ja: "ANAのプレミアム路線シフト",
      en: "ANA's premium route shift",
      contradiction: "市場が自律的に「質重視」へ動く好例",
      contradictionEn: "Example of market-driven shift toward quality",
      color: "#22c55e",
    },
  ];
  return (
    <Card title="「量から質」転換は本当に起きているのか" titleEn="Is the 'Quality over Quantity' Shift Actually Happening?">
      <div className="space-y-3">
        {tensions.map((t, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ background: `${t.color}0d`, border: `1px solid ${t.color}20` }}>
            <div className="text-[12px] font-bold text-foreground/75 mb-1">
              <T ja={t.ja} en={t.en} />
            </div>
            <p className="text-[11px]" style={{ color: t.color }}>
              <T ja={t.contradiction} en={t.contradictionEn} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T
          ja="問いの核心: 「質の高いインバウンド」の付加価値が日本社会・地域コミュニティ・地場産業に還元される仕組みが設計されているか"
          en="The core question: Is there a system ensuring that value from 'high-quality inbound' flows back to Japanese society, local communities, and indigenous industries?"
        />
      </div>
    </Card>
  );
}
