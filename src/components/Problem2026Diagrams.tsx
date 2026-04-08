"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   2026 Problem (Healthcare / Logistics / Construction) — Diagrams
   ──────────────────────────────────────────────────────────── */

const ECON = "#b9770e";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const PURPLE = "#7c3aed";

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
          style={{ color: `${ECON}aa` }}
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
export function P2026OverviewDiagram() {
  const sectors = [
    {
      label: "医療",
      labelEn: "Healthcare",
      title: "医師の働き方改革",
      titleEn: "Physician work-style reform",
      detail: "2024年4月施行 / 上限960h",
      detailEn: "Enacted April 2024 / 960h annual cap",
      color: RED,
    },
    {
      label: "物流",
      labelEn: "Logistics",
      title: "改正物流効率化法",
      titleEn: "Amended Logistics Efficiency Act",
      detail: "2026年4月 義務化 / CLO選任",
      detailEn: "Mandatory from April 2026 / CLO appointment",
      color: ECON,
    },
    {
      label: "建設",
      labelEn: "Construction",
      title: "残業上限規制",
      titleEn: "Overtime cap regulation",
      detail: "2024年4月施行 / 月45h・年360h",
      detailEn: "Enacted April 2024 / 45h/month · 360h/year",
      color: NAVY,
    },
  ];
  return (
    <Card
      title={<T ja="2026年問題 ― 3業界の規制が同時に圧力をかける" en="The 2026 Problem — Three Industries Under Simultaneous Regulatory Pressure" />}
      subtitle={<T ja="2024年4月施行から2年、新たに物流に追い打ち" en="Two years after the April 2024 enactment, logistics is now hit with new rules" />}
    >
      <div className="space-y-3">
        {sectors.map((s) => (
          <div
            key={s.label}
            className="flex items-start gap-3 p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div
              className="text-[14px] font-bold tabular-nums shrink-0 w-12"
              style={{ color: s.color }}
            >
              <T ja={s.label} en={s.labelEn} />
            </div>
            <div>
              <div
                className="text-[13px] font-bold"
                style={{ color: s.color }}
              >
                <T ja={s.title} en={s.titleEn} />
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                <T ja={s.detail} en={s.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 2. Logistics law ── */
export function P2026LogisticsLawDiagram() {
  const tiers = [
    { label: "荷主・連鎖化事業者", labelEn: "Shippers / chain operators", criteria: "取扱貨物 9万トン/年以上", criteriaEn: "≥ 90,000 t/year handled" },
    { label: "倉庫業者", labelEn: "Warehouse operators", criteria: "保管量 70万トン/年以上", criteriaEn: "≥ 700,000 t/year in storage" },
    { label: "貨物自動車運送事業者", labelEn: "Trucking companies", criteria: "保有車両 150台以上", criteriaEn: "≥ 150 vehicles owned" },
  ];
  const duties = [
    { num: "①", title: "CLO（物流統括管理者）の選任", titleEn: "Appoint a CLO (Chief Logistics Officer)", detail: "経営幹部から指名・国に届出", detailEn: "Designated from senior management; must be reported to the government" },
    { num: "②", title: "中長期計画の作成・定期報告", titleEn: "Prepare medium-to-long-term plans and report regularly", detail: "積載効率／荷待ち時間／荷役時間", detailEn: "Load efficiency / waiting time / cargo-handling time" },
    { num: "③", title: "罰則あり", titleEn: "Penalties apply", detail: "未選任 100万円以下／未届 20万円以下", detailEn: "Failure to appoint: up to ¥1M / failure to notify: up to ¥200K" },
  ];
  return (
    <Card
      title={<T ja="改正物流効率化法 ― 特定事業者の指定と義務" en="Amended Logistics Efficiency Act — Designated Operators and Their Obligations" />}
      subtitle={<T ja="2026年4月から本格義務化" en="Full obligation from April 2026" />}
    >
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="特定事業者の指定基準" en="Criteria for designation as a specified operator" />
      </div>
      <div className="space-y-2 mb-4">
        {tiers.map((t) => (
          <div
            key={t.label}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${ECON}08` }}
          >
            <div className="text-[12px] font-bold text-foreground">
              <T ja={t.label} en={t.labelEn} />
            </div>
            <div className="text-[10px] text-foreground/60 tabular-nums">
              <T ja={t.criteria} en={t.criteriaEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="3つの主な義務" en="3 key obligations" />
      </div>
      <div className="space-y-2">
        {duties.map((d) => (
          <div
            key={d.num}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${ECON}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: ECON }}
            >
              {d.num}
            </div>
            <div>
              <div className="text-[12px] font-bold" style={{ color: ECON }}>
                <T ja={d.title} en={d.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={d.detail} en={d.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Doctor rules ── */
export function P2026DoctorRulesDiagram() {
  const tiers = [
    {
      level: "A水準",
      levelEn: "Tier A",
      hours: "年960h",
      target: "原則・全医師",
      targetEn: "All physicians (general rule)",
      color: GREEN,
    },
    {
      level: "B水準",
      levelEn: "Tier B",
      hours: "年1,860h",
      target: "救急・地域医療確保",
      targetEn: "Emergency / regional healthcare provision",
      color: ECON,
    },
    {
      level: "C水準",
      levelEn: "Tier C",
      hours: "年1,860h",
      target: "研修医・技能向上",
      targetEn: "Residents / skills development",
      color: RED,
    },
  ];
  return (
    <Card
      title={<T ja="医師の時間外労働 ― 3水準の上限規制" en="Physician Overtime — Three-Tier Cap System" />}
      subtitle={<T ja="2024年4月施行・違反は懲役/罰金" en="Enacted April 2024; violations carry imprisonment or fines" />}
    >
      <div className="space-y-2">
        {tiers.map((t) => (
          <div
            key={t.level}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${t.color}0d` }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[13px] font-bold" style={{ color: t.color }}>
                <T ja={t.level} en={t.levelEn} />
              </div>
              <div
                className="text-[13px] font-bold tabular-nums"
                style={{ color: t.color }}
              >
                {t.hours}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 mt-1">
              <T ja={t.target} en={t.targetEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja={<>勤務間インターバル <strong>9時間</strong>（連続当直は18時間）が義務化。月100時間超見込み時は産業医面接。</>}
          en={<>A minimum rest interval of <strong>9 hours</strong> between shifts (18 hours for consecutive on-call duty) is now mandatory. If overtime is projected to exceed 100 hours in a month, an occupational physician interview is required.</>}
        />
      </div>
    </Card>
  );
}

/* ── 4. Construction ── */
export function P2026ConstructionDiagram() {
  const facts = [
    { label: "正社員不足の企業", labelEn: "Firms with full-time worker shortages", value: "84.4%", detail: "全業種でワースト", detailEn: "Worst across all industries", color: RED },
    { label: "60歳以上の職人", labelEn: "Tradespeople aged 60+", value: "約26%", detail: "若手29歳以下は12%", detailEn: "Workers aged 29 or under: 12%", color: ECON },
    { label: "人手不足倒産（2025）", labelEn: "Understaffing bankruptcies (2025)", value: "113件", detail: "業種別ワースト1位", detailEn: "No. 1 by industry", color: NAVY },
  ];
  return (
    <Card
      title={<T ja="建設業の現状 ― 規制から2年、過去最悪の数字" en="Construction Industry — Two Years After Regulation, Record-Worst Figures" />}
      subtitle={<T ja="出典：東京商工リサーチ ほか" en="Source: Tokyo Shoko Research, et al." />}
    >
      <div className="space-y-2">
        {facts.map((f) => (
          <div
            key={f.label}
            className="flex items-center justify-between gap-3 p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${f.color}0a` }}
          >
            <div className="flex-1">
              <div className="text-[12px] font-bold text-foreground">
                <T ja={f.label} en={f.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                <T ja={f.detail} en={f.detailEn} />
              </div>
            </div>
            <div
              className="text-[20px] font-bold tabular-nums"
              style={{ color: f.color }}
            >
              {f.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 5. Bankruptcy stats ── */
export function P2026BankruptcyStatsDiagram() {
  const items = [
    { name: "建設業", nameEn: "Construction", count: 113, color: NAVY },
    { name: "道路貨物運送", nameEn: "Road freight", count: 52, color: ECON },
    { name: "老人福祉・介護", nameEn: "Elderly care", count: 38, color: RED },
    { name: "その他", nameEn: "Other", count: 224, color: "#94a3b8" },
  ];
  const total = 427;
  return (
    <Card
      title={<T ja="人手不足倒産（2025年）― 427件で過去最多" en="Understaffing Bankruptcies (2025) — Record 427 Cases" />}
      subtitle={<T ja="2026年問題の3業界が業種別ワースト3を独占" en="The 3 sectors of the 2026 problem claim the top 3 spots by industry" />}
    >
      <div className="space-y-2">
        {items.map((i) => {
          const pct = (i.count / total) * 100;
          return (
            <div key={i.name}>
              <div className="flex items-baseline justify-between text-[11px] mb-1">
                <span className="font-bold text-foreground"><T ja={i.name} en={i.nameEn} /></span>
                <span className="tabular-nums text-foreground/70">
                  <T ja={`${i.count}件`} en={`${i.count} cases`} />
                </span>
              </div>
              <div className="h-4 rounded bg-foreground/5 overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: i.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="text-foreground/60"><T ja="従業員10人未満" en="Fewer than 10 employees" /></div>
          <div className="text-[14px] font-bold text-foreground tabular-nums">
            77%
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="text-foreground/60"><T ja="2025年合計" en="2025 total" /></div>
          <div className="text-[14px] font-bold text-foreground tabular-nums">
            <T ja="427件" en="427 cases" />
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 6. Cascade ── */
export function P2026CascadeDiagram() {
  const loops = [
    {
      from: "建設",
      fromEn: "Construction",
      to: "物流",
      toEn: "Logistics",
      detail: "倉庫・道路の整備が遅れ、物流効率が悪化",
      detailEn: "Delays in warehouse and road construction reduce logistics efficiency",
      color: NAVY,
    },
    {
      from: "物流",
      fromEn: "Logistics",
      to: "医療",
      toEn: "Healthcare",
      detail: "医薬品・血液製剤の配送遅延が地方医療を直撃",
      detailEn: "Delayed delivery of medicines and blood products hits regional healthcare",
      color: ECON,
    },
    {
      from: "医療",
      fromEn: "Healthcare",
      to: "全業界",
      toEn: "All sectors",
      detail: "救急・産業医の不足は労働力全体を削る",
      detailEn: "Shortages of emergency doctors and occupational physicians erode the total workforce",
      color: RED,
    },
  ];
  return (
    <Card
      title={<T ja="3業界の連鎖崩壊リスク" en="Cascading Collapse Risk Across 3 Industries" />}
      subtitle={<T ja="独立した3問題ではなく、相互依存のループ" en="Not 3 separate problems, but an interdependent loop" />}
    >
      <div className="space-y-3">
        {loops.map((l) => (
          <div
            key={`${l.from}-${l.to}`}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${l.color}0a` }}
          >
            <div className="flex items-center gap-2 text-[13px] font-bold mb-1">
              <span style={{ color: l.color }}><T ja={l.from} en={l.fromEn} /></span>
              <span className="text-foreground/40">→</span>
              <span style={{ color: l.color }}><T ja={l.to} en={l.toEn} /></span>
            </div>
            <div className="text-[11px] text-foreground/70"><T ja={l.detail} en={l.detailEn} /></div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 7. Solutions ── */
export function P2026SolutionsDiagram() {
  const phases = [
    {
      term: "短期",
      termEn: "Short-term",
      title: "効率化と協力体制",
      titleEn: "Efficiency and cooperation",
      detail: "共同配送・地域連携・週休2日制",
      detailEn: "Joint delivery, regional collaboration, two-day weekends",
      color: GREEN,
    },
    {
      term: "中期",
      termEn: "Medium-term",
      title: "省人化・自動化",
      titleEn: "Labor-saving and automation",
      detail: "自動運転トラック・AI診断・ICT建機",
      detailEn: "Autonomous trucks, AI diagnostics, ICT construction equipment",
      color: ECON,
    },
    {
      term: "長期",
      termEn: "Long-term",
      title: "人口減を前提とした再設計",
      titleEn: "Redesign around population decline",
      detail: "コンパクトシティ・外国人材・サービス水準の見直し",
      detailEn: "Compact cities, foreign talent, reviewing service-level standards",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title={<T ja="対策の3層 ― 短期・中期・長期" en="Three-Layer Response — Short, Medium, and Long Term" />}
      subtitle={<T ja="技術と制度と社会設計を同時に走らせる" en="Technology, policy, and social design must advance in parallel" />}
    >
      <div className="space-y-3">
        {phases.map((p) => (
          <div
            key={p.term}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${p.color}0d` }}
          >
            <div
              className="text-[10px] tracking-[1.5px] uppercase font-bold"
              style={{ color: p.color }}
            >
              <T ja={p.term} en={p.termEn} />
            </div>
            <div className="text-[13px] font-bold text-foreground mt-1">
              <T ja={p.title} en={p.titleEn} />
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              <T ja={p.detail} en={p.detailEn} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
