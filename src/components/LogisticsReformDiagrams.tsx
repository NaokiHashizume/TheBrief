"use client";

import { T } from "./T";

const ACCENT = "#f59e0b";

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

/* ── 1. logistics-law-overview ── */
export function LogisticsLawOverviewDiagram() {
  const obligations = [
    { ja: "中長期計画の策定・公表", en: "Medium/long-term plan formulation & disclosure", done: true },
    { ja: "国土交通大臣への定期報告", en: "Regular reporting to Land Minister", done: true },
    { ja: "物流統括管理者（CLO）の選任", en: "Appointment of Chief Logistics Officer (CLO)", done: true },
    { ja: "違反時：100万円以下の罰金（法人1億円）", en: "Penalty: up to ¥1M (¥100M for corporations)", done: true },
  ];
  return (
    <Card title="2026年4月1日——改正物流効率化法の義務内容" titleEn="April 1, 2026 — Obligations Under Revised Logistics Efficiency Act">
      <div className="mb-4 p-4 rounded-xl text-center" style={{ background: `${ACCENT}0d` }}>
        <div className="text-[11px] text-foreground/50 mb-1">
          <T ja="義務対象：特定荷主" en="Obligated parties: Designated shippers" />
        </div>
        <div className="text-[18px] font-bold" style={{ color: ACCENT }}>
          <T ja="年間9万トン以上の貨物を取り扱う事業者" en="Businesses handling 90,000+ tons of cargo per year" />
        </div>
      </div>
      <div className="space-y-2">
        {obligations.map((o, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-foreground/[0.03]">
            <span className="text-[14px]">✅</span>
            <span className="text-[12px] text-foreground/75">
              <T ja={o.ja} en={o.en} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T
          ja="「2024年は意識改革・2025年は移行期間・2026年こそ構造改革本番」——初めて荷主側に法的義務が課された転換点"
          en="'2024: awareness, 2025: transition, 2026: real structural reform' — first time legal obligations placed on shippers"
        />
      </div>
    </Card>
  );
}

/* ── 2. logistics-capacity-crisis ── */
export function LogisticsCapacityCrisisDiagram() {
  const causes = [
    { ja: "ドライバー絶対数不足", en: "Absolute driver shortage", detail: "有効求人倍率：全産業平均の2倍超", detailEn: "Job opening rate: 2× all-industry average" },
    { ja: "残業上限規制（年960時間）", en: "OT cap (960hrs/year)", detail: "1人あたり稼働可能時間が減少", detailEn: "Per-driver working hours reduced" },
    { ja: "ドライバーの高齢化", en: "Driver aging", detail: "平均年齢48.6歳（国交省）", detailEn: "Average age 48.6 (MLIT)" },
    { ja: "若者の参入障壁", en: "Youth entry barriers", detail: "長時間・低賃金・荷役拘束の「3K」", detailEn: "Long hours, low pay, loading duties — the '3K' problem" },
  ];
  return (
    <Card title="2030年に輸送能力が34.1%不足——危機の構造" titleEn="34.1% Capacity Shortfall by 2030 — The Structural Crisis">
      <div className="mb-4 p-4 rounded-xl text-center" style={{ background: "#ef444408" }}>
        <div className="text-[11px] text-foreground/50 mb-1">
          <T ja="何もしない場合の2030年輸送能力不足（国の検討会試算）" en="2030 capacity shortfall if no action taken (Government study group)" />
        </div>
        <div className="text-[36px] font-bold font-serif text-[#ef4444]">▲34.1%</div>
      </div>
      <div className="space-y-2">
        {causes.map((c, i) => (
          <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-foreground/[0.03]">
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
              <div className="text-[11px] text-foreground/50">
                <T ja={c.detail} en={c.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. logistics-price-reform ── */
export function LogisticsPriceReformDiagram() {
  const groups = [
    {
      ja: "大手・中堅運送会社",
      en: "Large/mid-size carriers",
      result: "値上げ実現",
      resultEn: "Price increases achieved",
      detail: "ヤマト・佐川等：交渉力あり、2024年以降に改定実施",
      detailEn: "Yamato/Sagawa etc.: have negotiating power, revised rates since 2024",
      color: "#22c55e",
    },
    {
      ja: "中小運送会社",
      en: "Small/micro carriers",
      result: "値上げ困難",
      resultEn: "Price increase blocked",
      detail: "「仕事を切られる」という力関係の非対称性が壁",
      detailEn: "Asymmetric power relationship — fear of losing contracts blocks negotiations",
      color: "#ef4444",
    },
  ];
  return (
    <Card title="運賃値上げの現実——格差が鮮明に" titleEn="Freight Rate Reform Reality — A Widening Gap">
      <div className="mb-4 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/60 text-center">
        <T ja="国交省が標準的運賃を8%引き上げ告示（2024年3月）" en="MLIT announced 8% increase in standard freight rate (Mar 2024)" />
      </div>
      <div className="space-y-3">
        {groups.map((g, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ background: `${g.color}0d`, border: `1px solid ${g.color}25` }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-bold text-foreground/80">
                <T ja={g.ja} en={g.en} />
              </span>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{ color: g.color, background: `${g.color}18` }}
              >
                <T ja={g.result} en={g.resultEn} />
              </span>
            </div>
            <p className="text-[11px] text-foreground/60">
              <T ja={g.detail} en={g.detailEn} />
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/50">
        <T
          ja="改正法の閾値（9万トン）以下の中小荷主はすり抜ける→中小→中小の取引での価格転嫁は依然困難"
          en="SME shippers below the 90,000-ton threshold escape the law — price pass-through in SME-to-SME transactions remains difficult"
        />
      </div>
    </Card>
  );
}

/* ── 4. logistics-last-mile ── */
export function LogisticsLastMileDiagram() {
  const stats = [
    { ja: "宅配再配達率（2024年度）", en: "Redelivery rate (FY2024)", value: "約10%", valueEn: "~10%", note: "2023年度12%から改善", noteEn: "Down from 12% in FY2023" },
    { ja: "Amazon置き配比率", en: "Amazon contactless delivery rate", value: "約40%", valueEn: "~40%", note: "2024年時点", noteEn: "As of 2024" },
    { ja: "マンション宅配BOX設置率", en: "Apartment parcel locker rate", value: "52%", valueEn: "52%", note: "2025年（2023年38%から上昇）", noteEn: "2025 (up from 38% in 2023)" },
  ];
  return (
    <Card title="「置き配」普及でラストマイルが変わりつつある" titleEn="Contactless Delivery Is Changing Last-Mile Logistics">
      <div className="space-y-3 mb-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-foreground/[0.03]">
            <div>
              <div className="text-[12px] font-medium text-foreground/75">
                <T ja={s.ja} en={s.en} />
              </div>
              <div className="text-[11px] text-foreground/45 mt-0.5">
                <T ja={s.note} en={s.noteEn} />
              </div>
            </div>
            <span
              className="text-[16px] font-bold tabular-nums"
              style={{ color: ACCENT }}
            >
              <T ja={s.value} en={s.valueEn} />
            </span>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-foreground/[0.03] text-[11px] text-foreground/55">
        <T ja="課題: 過疎地・高齢化地域での配送コスト上昇——ドローン配送は一部実用化だが全国展開は2028年以降" en="Challenge: Rising delivery costs in rural/aging areas — drone delivery partially live but nationwide rollout after 2028" />
      </div>
    </Card>
  );
}

/* ── 5. logistics-collaborative-solutions ── */
export function LogisticsCollaborativeSolutionsDiagram() {
  const solutions = [
    {
      ja: "共同配送",
      en: "Joint Delivery",
      detail: "ライオン・花王・P&G 3社で積載率55%→76%に改善",
      detailEn: "Lion/Kao/P&G joint delivery: load rate 55%→76%",
      target: "積載効率44%達成目標（改正法）",
      targetEn: "44% loading efficiency target (revised law)",
      color: ACCENT,
    },
    {
      ja: "モーダルシフト",
      en: "Modal Shift",
      detail: "鉄道はCO2が自動車の9分の1——リードタイム延長（1〜2日）が課題",
      detailEn: "Rail CO2 = 1/9 of trucks — but +1-2 day lead time is a barrier",
      target: "EC「翌日配達」前提との相性が問題",
      targetEn: "Tension with EC's next-day delivery expectations",
      color: "#0891b2",
    },
  ];
  return (
    <Card title="共同配送・モーダルシフト——競合他社が「一緒に運ぶ」時代" titleEn="Joint Delivery & Modal Shift — Competitors Shipping Together">
      <div className="space-y-3">
        {solutions.map((s, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03]">
            <div className="text-[13px] font-bold text-foreground/80 mb-1" style={{ color: s.color }}>
              <T ja={s.ja} en={s.en} />
            </div>
            <p className="text-[12px] text-foreground/65 mb-2">
              <T ja={s.detail} en={s.detailEn} />
            </p>
            <div className="text-[11px] text-foreground/45 italic">
              <T ja={s.target} en={s.targetEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. logistics-strategic-view ── */
export function LogisticsStrategicViewDiagram() {
  const shifts = [
    { ja: "物流費の意識", en: "Cost mindset", from: "削るもの", fromEn: "Cost to cut", to: "競争力の一部", toEn: "Source of competitive advantage" },
    { ja: "ドライバーの長時間労働", en: "Driver long hours", from: "「見えないコスト」", fromEn: "Hidden cost", to: "社会で分担する明示コスト", toEn: "Explicit cost shared by society" },
    { ja: "送料の常識", en: "Shipping fee norm", from: "「無料が当たり前」", fromEn: "'Free shipping is normal'", to: "適正コストへの移行開始", toEn: "Shift toward appropriate cost pricing" },
  ];
  return (
    <Card title="2026年——物流コストを「顕在化」させる転換点" titleEn="2026 — The Tipping Point That Makes Logistics Costs Visible">
      <div className="space-y-3">
        {shifts.map((s, i) => (
          <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-foreground/[0.03]">
            <div className="flex-1">
              <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1">
                <T ja={s.ja} en={s.en} />
              </div>
              <div className="flex items-center gap-2 text-[12px]">
                <span className="text-foreground/50 line-through">
                  <T ja={s.from} en={s.fromEn} />
                </span>
                <span className="text-foreground/30">→</span>
                <span className="font-bold" style={{ color: ACCENT }}>
                  <T ja={s.to} en={s.toEn} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
