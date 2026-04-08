"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   April 2026 Reforms — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";

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
        <div className="text-[10px] tracking-[2.5px] uppercase font-bold text-brief-red/60 mb-1">
          <T ja="図表" en="FIGURE" />
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">{title}</div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. Overview: 7 reforms timeline ── */
export function AprilReformsOverviewDiagram() {
  const items = [
    { num: "①", label: "共同親権", labelEn: "Joint custody", area: "民法", areaEn: "Civil Code", color: POLITICS },
    { num: "②", label: "自転車青切符", labelEn: "Bicycle blue tickets", area: "道路交通法", areaEn: "Road Traffic Act", color: "#f97316" },
    { num: "③", label: "130万円の壁", labelEn: "1.3M yen wall", area: "社会保険", areaEn: "Social insurance", color: "#ca8a04" },
    { num: "④", label: "子ども・子育て支援金", labelEn: "Childcare support fund", area: "社会保険", areaEn: "Social insurance", color: "#16a34a" },
    { num: "⑤", label: "在職老齢年金", labelEn: "Working pensioner benefits", area: "年金", areaEn: "Pensions", color: "#0d9488" },
    { num: "⑥", label: "たばこ税・防衛特別法人税", labelEn: "Tobacco tax & defense corporate surtax", area: "税制", areaEn: "Taxation", color: "#2563eb" },
    { num: "⑦", label: "GX-ETS", labelEn: "GX-ETS", area: "環境", areaEn: "Environment", color: "#7c3aed" },
  ];
  return (
    <Card title={<T ja="2026年4月、同時施行された7つの大改正" en="Seven major reforms taking effect simultaneously in April 2026" />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <div
            key={it.num}
            className="flex items-center p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${it.color}08` }}
          >
            <div
              className="text-[20px] font-bold tabular-nums w-8"
              style={{ color: it.color }}
            >
              {it.num}
            </div>
            <div className="flex-1 ml-2">
              <div className="text-[13px] font-bold text-foreground"><T ja={it.label} en={it.labelEn} /></div>
              <div className="text-[10px] text-foreground/50 mt-0.5"><T ja={it.area} en={it.areaEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        <T ja="施行日：原則2026年4月1日（一部、事業年度開始日基準）" en="Effective date: generally April 1, 2026 (some tied to fiscal year start)" />
      </div>
    </Card>
  );
}

/* ── 2. Joint custody before/after ── */
export function AprilReformsJointCustodyDiagram() {
  return (
    <Card title={<T ja="共同親権 ― 1898年以来、約128年ぶりの選択肢" en="Joint custody — the first new option since 1898, about 128 years later" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-brief-border bg-foreground/[0.02]">
          <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold mb-2">
            <T ja="～ 2026年3月" en="Through March 2026" />
          </div>
          <div className="font-bold text-foreground mb-2"><T ja="単独親権のみ" en="Sole custody only" /></div>
          <ul className="text-[12px] text-foreground/70 space-y-1.5 leading-relaxed">
            <li><T ja="・離婚後はどちらか一方のみ" en="- After divorce, only one parent" /></li>
            <li><T ja="・もう一方は親権を失う" en="- The other parent loses parental authority" /></li>
            <li><T ja="・面会交流は努力義務" en="- Visitation is only a best-effort duty" /></li>
            <li><T ja="・養育費の取り立てが困難" en="- Child support is hard to collect" /></li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
        >
          <div
            className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
            style={{ color: POLITICS }}
          >
            <T ja="2026年4月～" en="From April 2026" />
          </div>
          <div className="font-bold text-foreground mb-2"><T ja="共同親権を選択可能" en="Joint custody becomes an option" /></div>
          <ul className="text-[12px] text-foreground/70 space-y-1.5 leading-relaxed">
            <li><T ja="・父母双方が親権を持つ選択肢" en="- Both parents can share parental authority" /></li>
            <li><T ja="・DV事案は単独親権を維持" en="- Sole custody retained in domestic violence cases" /></li>
            <li><T ja="・「監護者」と「親権」が分離" en="- Physical custody and legal authority are separated" /></li>
            <li><T ja="・養育費の優先弁済権を強化" en="- Strengthened priority right for child support" /></li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] leading-relaxed"
        style={{ backgroundColor: `${POLITICS}08`, color: "rgba(0,0,0,0.7)" }}
      >
        <strong><T ja="対象規模：" en="Scale affected: " /></strong>
        <T ja="日本では年間 約18万組が離婚し、約20万人の子どもが影響を受ける。施行前に離婚した家庭でも家裁に申立可能。" en="About 180,000 couples divorce in Japan each year, affecting roughly 200,000 children. Families that divorced before enactment can also file with family court." />
      </div>
    </Card>
  );
}

/* ── 3. Bicycle ticket fines table ── */
export function AprilReformsBicycleDiagram() {
  const fines = [
    { v: "信号無視", vEn: "Running a red light", f: "6,000円", fEn: "¥6,000", risk: "高", riskEn: "High" },
    { v: "一時不停止", vEn: "Failure to stop", f: "5,000円", fEn: "¥5,000", risk: "中", riskEn: "Medium" },
    { v: "携帯電話使用（ながら運転）", vEn: "Mobile phone use while riding", f: "12,000円", fEn: "¥12,000", risk: "最高", riskEn: "Highest" },
    { v: "傘さし運転", vEn: "Riding while holding an umbrella", f: "6,000円", fEn: "¥6,000", risk: "高", riskEn: "High" },
    { v: "歩道通行違反", vEn: "Illegal sidewalk riding", f: "6,000円", fEn: "¥6,000", risk: "中", riskEn: "Medium" },
    { v: "並進・二人乗り", vEn: "Riding abreast / doubling up", f: "3,000円", fEn: "¥3,000", risk: "低", riskEn: "Low" },
  ];
  return (
    <Card title={<T ja="自転車「青切符」 ― 主な違反と反則金（16歳以上が対象）" en="Bicycle blue tickets — key violations and fines (ages 16+)" />}>
      <div className="overflow-hidden rounded-lg border border-brief-border">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-foreground/[0.04] text-foreground/55">
              <th className="text-left py-2 px-3 font-semibold"><T ja="違反内容" en="Violation" /></th>
              <th className="text-right py-2 px-3 font-semibold tabular-nums"><T ja="反則金" en="Fine" /></th>
              <th className="text-center py-2 px-3 font-semibold"><T ja="危険度" en="Risk" /></th>
            </tr>
          </thead>
          <tbody>
            {fines.map((row, i) => (
              <tr
                key={row.v}
                className={i % 2 === 1 ? "bg-foreground/[0.015]" : ""}
              >
                <td className="py-2 px-3 text-foreground/80"><T ja={row.v} en={row.vEn} /></td>
                <td
                  className="py-2 px-3 text-right tabular-nums font-semibold"
                  style={{ color: POLITICS }}
                >
                  <T ja={row.f} en={row.fEn} />
                </td>
                <td className="py-2 px-3 text-center text-foreground/60"><T ja={row.risk} en={row.riskEn} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[10px] text-foreground/45">
        <T ja="反則金を期日までに納付すれば刑事手続には進まない。納付しない場合は赤切符（刑事手続）に移行。" en="Paying the fine on time avoids criminal proceedings. Non-payment escalates to a red ticket (criminal procedure)." />
      </div>
    </Card>
  );
}

/* ── 4. 130 man yen wall ── */
export function AprilReformsHyakuSanjuDiagram() {
  return (
    <Card title={<T ja="130万円の壁 ― 「実績ベース」から「労働契約ベース」へ" en="The 1.3M yen wall — from actual earnings to contracted wages" />}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-foreground/[0.02] border border-brief-border">
            <div className="text-[10px] tracking-[2px] uppercase font-bold text-foreground/40 mb-2">
              <T ja="旧ルール" en="Old rule" />
            </div>
            <div className="font-bold text-foreground mb-1"><T ja="実績年収で判定" en="Judged on actual annual income" /></div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja="繁忙期の残業代が乗ると、契約は120万円の予定でも実績135万円となり、扶養を外される。" en="If busy-season overtime pushes earnings above the threshold, a worker contracted at ¥1.2M can hit ¥1.35M and lose dependent status." />
            </div>
          </div>
          <div
            className="p-4 rounded-lg border-2"
            style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
          >
            <div
              className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
              style={{ color: POLITICS }}
            >
              <T ja="新ルール（2026年4月～）" en="New rule (from April 2026)" />
            </div>
            <div className="font-bold text-foreground mb-1"><T ja="労働契約上の所定賃金で判定" en="Judged on wages set in the labor contract" /></div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              <T ja="所定賃金が130万円未満なら、突発的な残業で実績が超過しても扶養を継続できる。" en="If contracted wages are below ¥1.3M, unexpected overtime that pushes actual earnings higher no longer breaks dependent status." />
            </div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
          <strong className="text-foreground"><T ja="対象：" en="Scope: " /></strong>
          <T ja="従業員50人以下の企業に勤めるパート・アルバイト約1,500万人。51人以上の企業は引き続き「週20時間・月8.8万円」の社会保険適用拡大ルールが優先される。" en="About 15 million part-time workers at firms with 50 or fewer employees. At firms of 51+, the existing 20-hour / ¥88,000-per-month social insurance expansion rule still applies." />
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Childcare support fund ── */
export function AprilReformsChildcareFundDiagram() {
  const tiers = [
    { year: "2026年度", yearEn: "FY2026", amt: "月 250〜450円", amtEn: "¥250–450/mo", scale: 30 },
    { year: "2027年度", yearEn: "FY2027", amt: "月 350〜650円", amtEn: "¥350–650/mo", scale: 60 },
    { year: "2028年度", yearEn: "FY2028", amt: "月 450〜850円", amtEn: "¥450–850/mo", scale: 100 },
  ];
  return (
    <Card title={<T ja="子ども・子育て支援金 ― 段階的に引き上げ" en="Childcare support fund — phased ramp-up" />}>
      <div className="space-y-3">
        {tiers.map((t) => (
          <div key={t.year} className="flex items-center">
            <div className="w-24 text-[12px] font-bold text-foreground/70"><T ja={t.year} en={t.yearEn} /></div>
            <div className="flex-1 ml-3">
              <div className="h-7 rounded-lg bg-foreground/[0.04] relative overflow-hidden">
                <div
                  className="h-full rounded-lg flex items-center justify-end pr-3"
                  style={{
                    width: `${t.scale}%`,
                    backgroundColor: `${POLITICS}25`,
                  }}
                >
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: POLITICS }}
                  >
                    <T ja={t.amt} en={t.amtEn} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/55 leading-relaxed">
        <T ja="被用者保険加入者1人あたりの月額目安。所得階層により幅があり、財源規模は2028年度に約 " en="Approximate monthly amount per employee-insurance enrollee. The range depends on income brackets, and total funding reaches roughly " />
        <strong className="text-foreground"><T ja="1兆円" en="¥1 trillion" /></strong>
        <T ja=" に達する見込み。" en=" in FY2028." />
      </div>
    </Card>
  );
}

/* ── 6. Pension threshold ── */
export function AprilReformsPensionDiagram() {
  return (
    <Card title={<T ja="在職老齢年金 ― 支給停止基準額の引き上げ" en="Working pensioner benefits — raising the suspension threshold" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-foreground/[0.02] border border-brief-border text-center">
          <div className="text-[10px] tracking-[2px] uppercase font-bold text-foreground/40 mb-2">
            <T ja="～ 2026年3月" en="Through March 2026" />
          </div>
          <div className="text-[32px] font-bold tabular-nums text-foreground/70">
            50<span className="text-[16px]"><T ja="万円" en="0k yen" /></span>
          </div>
          <div className="text-[11px] text-foreground/55 mt-1">
            <T ja="賃金＋年金 月額" en="Monthly wages + pension" />
          </div>
        </div>
        <div
          className="p-5 rounded-lg border-2 text-center"
          style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
        >
          <div
            className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
            style={{ color: POLITICS }}
          >
            <T ja="2026年4月～" en="From April 2026" />
          </div>
          <div
            className="text-[32px] font-bold tabular-nums"
            style={{ color: POLITICS }}
          >
            62<span className="text-[16px]"><T ja="万円" en="0k yen" /></span>
          </div>
          <div className="text-[11px] text-foreground/55 mt-1">
            <T ja="「働き損」の解消" en="No more penalty for working" />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
        <T ja="基準額を超えた分の " en="The rule still withholds " />
        <strong className="text-foreground"><T ja="半額" en="half" /></strong>
        <T ja=" が年金から差し引かれる仕組みは維持。月収40万円・年金20万円のケースで、改正前は " en=" of the excess above the threshold. For a ¥400,000 wage plus ¥200,000 pension, the old rule cut " />
        <strong className="text-foreground"><T ja="5万円カット" en="¥50,000" /></strong>
        <T ja="、改正後は " en="; the new rule yields " />
        <strong className="text-foreground"><T ja="カットなし" en="no cut" /></strong>
        <T ja="。" en="." />
      </div>
    </Card>
  );
}

/* ── 7. Defense tax sources ── */
export function AprilReformsDefenseTaxDiagram() {
  const sources = [
    { name: "歳出改革", nameEn: "Spending reform", amt: "0.3兆円", amtEn: "¥0.3T", color: "#94a3b8", w: 30 },
    { name: "決算剰余金", nameEn: "Budget surplus", amt: "0.7兆円", amtEn: "¥0.7T", color: "#64748b", w: 70 },
    { name: "防衛特別法人税", nameEn: "Defense corporate surtax", amt: "0.7兆円", amtEn: "¥0.7T", color: POLITICS, w: 70 },
    { name: "たばこ税", nameEn: "Tobacco tax", amt: "0.2兆円", amtEn: "¥0.2T", color: "#dc2626", w: 20 },
  ];
  return (
    <Card title={<T ja="防衛費1兆円の恒久財源 ― 内訳" en="Permanent funding for ¥1 trillion in defense spending — breakdown" />}>
      <div className="space-y-2.5">
        {sources.map((s) => (
          <div key={s.name} className="flex items-center">
            <div className="w-32 text-[12px] text-foreground/75"><T ja={s.name} en={s.nameEn} /></div>
            <div className="flex-1">
              <div className="h-6 rounded bg-foreground/[0.04] relative overflow-hidden">
                <div
                  className="h-full flex items-center pr-2 justify-end"
                  style={{ width: `${s.w}%`, backgroundColor: `${s.color}30` }}
                >
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: s.color }}
                  >
                    <T ja={s.amt} en={s.amtEn} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/55 leading-relaxed">
        <T ja="当初検討された " en="The originally proposed " />
        <strong className="text-foreground"><T ja="所得税の付加税（防衛特別所得税）" en="income tax surcharge (defense special income tax)" /></strong>
        <T ja=" は導入時期を先送り。たばこ税・法人税で先行する設計となった。" en=" has been postponed. The tobacco tax and corporate surtax move first instead." />
      </div>
    </Card>
  );
}

/* ── 8. GX-ETS scope ── */
export function AprilReformsGXETSDiagram() {
  return (
    <Card title={<T ja="GX-ETS ― 制度全体像と段階スケジュール" en="GX-ETS — overall system and phased schedule" />}>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-lg border border-brief-border bg-brief-card text-center">
            <div className="text-[10px] uppercase font-bold text-foreground/40">2026</div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1"><T ja="算定・報告" en="Measure & report" /></div>
            <div className="text-[10px] text-foreground/55 mt-1"><T ja="CO2排出量を計測し第三者検証" en="Measure CO2 emissions with third-party verification" /></div>
          </div>
          <div
            className="p-3 rounded-lg border-2 text-center"
            style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
          >
            <div
              className="text-[10px] uppercase font-bold"
              style={{ color: POLITICS }}
            >
              2027
            </div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1"><T ja="排出枠割当" en="Allowance allocation" /></div>
            <div className="text-[10px] text-foreground/55 mt-1"><T ja="2026実績ベースで初の義務枠" en="First mandatory allowances based on 2026 data" /></div>
          </div>
          <div className="p-3 rounded-lg border border-brief-border bg-brief-card text-center">
            <div className="text-[10px] uppercase font-bold text-foreground/40">2028～</div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1"><T ja="市場取引" en="Market trading" /></div>
            <div className="text-[10px] text-foreground/55 mt-1"><T ja="超過分は購入、不足は罰則" en="Buy allowances for excess; penalties for shortfalls" /></div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
          <strong className="text-foreground"><T ja="対象企業：" en="Covered firms: " /></strong>
          <T ja="直近3年平均で年間 " en="Roughly " />
          <strong className="text-foreground"><T ja="10万トン以上" en="300–400 firms" /></strong>
          <T ja=" のCO2を排出する約 " en=" emitting more than " />
          <strong className="text-foreground"><T ja="300〜400社" en="100,000 tons/year" /></strong>
          <T ja="。電力・鉄鋼・化学・セメント・紙パルプ・自動車・半導体などエネルギー多消費産業のほぼすべてをカバー。" en=" of CO2 on a 3-year average. Covers nearly all energy-intensive industries: power, steel, chemicals, cement, pulp & paper, autos, and semiconductors." />
        </div>
      </div>
    </Card>
  );
}
