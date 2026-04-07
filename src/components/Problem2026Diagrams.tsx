"use client";

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
          style={{ color: `${ECON}aa` }}
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

/* ── 1. Overview ── */
export function P2026OverviewDiagram() {
  const sectors = [
    {
      label: "医療",
      title: "医師の働き方改革",
      detail: "2024年4月施行 / 上限960h",
      color: RED,
    },
    {
      label: "物流",
      title: "改正物流効率化法",
      detail: "2026年4月 義務化 / CLO選任",
      color: ECON,
    },
    {
      label: "建設",
      title: "残業上限規制",
      detail: "2024年4月施行 / 月45h・年360h",
      color: NAVY,
    },
  ];
  return (
    <Card
      title="2026年問題 ― 3業界の規制が同時に圧力をかける"
      subtitle="2024年4月施行から2年、新たに物流に追い打ち"
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
              {s.label}
            </div>
            <div>
              <div
                className="text-[13px] font-bold"
                style={{ color: s.color }}
              >
                {s.title}
              </div>
              <div className="text-[11px] text-foreground/70 mt-0.5">
                {s.detail}
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
    { label: "荷主・連鎖化事業者", criteria: "取扱貨物 9万トン/年以上" },
    { label: "倉庫業者", criteria: "保管量 70万トン/年以上" },
    { label: "貨物自動車運送事業者", criteria: "保有車両 150台以上" },
  ];
  const duties = [
    { num: "①", title: "CLO（物流統括管理者）の選任", detail: "経営幹部から指名・国に届出" },
    { num: "②", title: "中長期計画の作成・定期報告", detail: "積載効率／荷待ち時間／荷役時間" },
    { num: "③", title: "罰則あり", detail: "未選任 100万円以下／未届 20万円以下" },
  ];
  return (
    <Card
      title="改正物流効率化法 ― 特定事業者の指定と義務"
      subtitle="2026年4月から本格義務化"
    >
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        特定事業者の指定基準
      </div>
      <div className="space-y-2 mb-4">
        {tiers.map((t) => (
          <div
            key={t.label}
            className="flex items-center justify-between p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${ECON}08` }}
          >
            <div className="text-[12px] font-bold text-foreground">
              {t.label}
            </div>
            <div className="text-[10px] text-foreground/60 tabular-nums">
              {t.criteria}
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        3つの主な義務
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
                {d.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {d.detail}
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
      hours: "年960h",
      target: "原則・全医師",
      color: GREEN,
    },
    {
      level: "B水準",
      hours: "年1,860h",
      target: "救急・地域医療確保",
      color: ECON,
    },
    {
      level: "C水準",
      hours: "年1,860h",
      target: "研修医・技能向上",
      color: RED,
    },
  ];
  return (
    <Card
      title="医師の時間外労働 ― 3水準の上限規制"
      subtitle="2024年4月施行・違反は懲役/罰金"
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
                {t.level}
              </div>
              <div
                className="text-[13px] font-bold tabular-nums"
                style={{ color: t.color }}
              >
                {t.hours}
              </div>
            </div>
            <div className="text-[11px] text-foreground/60 mt-1">
              {t.target}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        勤務間インターバル <strong>9時間</strong>（連続当直は18時間）が義務化。月100時間超見込み時は産業医面接。
      </div>
    </Card>
  );
}

/* ── 4. Construction ── */
export function P2026ConstructionDiagram() {
  const facts = [
    { label: "正社員不足の企業", value: "84.4%", detail: "全業種でワースト", color: RED },
    { label: "60歳以上の職人", value: "約26%", detail: "若手29歳以下は12%", color: ECON },
    { label: "人手不足倒産（2025）", value: "113件", detail: "業種別ワースト1位", color: NAVY },
  ];
  return (
    <Card
      title="建設業の現状 ― 規制から2年、過去最悪の数字"
      subtitle="出典：東京商工リサーチ ほか"
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
                {f.label}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {f.detail}
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
    { name: "建設業", count: 113, color: NAVY },
    { name: "道路貨物運送", count: 52, color: ECON },
    { name: "老人福祉・介護", count: 38, color: RED },
    { name: "その他", count: 224, color: "#94a3b8" },
  ];
  const total = 427;
  return (
    <Card
      title="人手不足倒産（2025年）― 427件で過去最多"
      subtitle="2026年問題の3業界が業種別ワースト3を独占"
    >
      <div className="space-y-2">
        {items.map((i) => {
          const pct = (i.count / total) * 100;
          return (
            <div key={i.name}>
              <div className="flex items-baseline justify-between text-[11px] mb-1">
                <span className="font-bold text-foreground">{i.name}</span>
                <span className="tabular-nums text-foreground/70">
                  {i.count}件
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
          <div className="text-foreground/60">従業員10人未満</div>
          <div className="text-[14px] font-bold text-foreground tabular-nums">
            77%
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="text-foreground/60">2025年合計</div>
          <div className="text-[14px] font-bold text-foreground tabular-nums">
            427件
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
      to: "物流",
      detail: "倉庫・道路の整備が遅れ、物流効率が悪化",
      color: NAVY,
    },
    {
      from: "物流",
      to: "医療",
      detail: "医薬品・血液製剤の配送遅延が地方医療を直撃",
      color: ECON,
    },
    {
      from: "医療",
      to: "全業界",
      detail: "救急・産業医の不足は労働力全体を削る",
      color: RED,
    },
  ];
  return (
    <Card
      title="3業界の連鎖崩壊リスク"
      subtitle="独立した3問題ではなく、相互依存のループ"
    >
      <div className="space-y-3">
        {loops.map((l) => (
          <div
            key={`${l.from}-${l.to}`}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${l.color}0a` }}
          >
            <div className="flex items-center gap-2 text-[13px] font-bold mb-1">
              <span style={{ color: l.color }}>{l.from}</span>
              <span className="text-foreground/40">→</span>
              <span style={{ color: l.color }}>{l.to}</span>
            </div>
            <div className="text-[11px] text-foreground/70">{l.detail}</div>
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
      title: "効率化と協力体制",
      detail: "共同配送・地域連携・週休2日制",
      color: GREEN,
    },
    {
      term: "中期",
      title: "省人化・自動化",
      detail: "自動運転トラック・AI診断・ICT建機",
      color: ECON,
    },
    {
      term: "長期",
      title: "人口減を前提とした再設計",
      detail: "コンパクトシティ・外国人材・サービス水準の見直し",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title="対策の3層 ― 短期・中期・長期"
      subtitle="技術と制度と社会設計を同時に走らせる"
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
              {p.term}
            </div>
            <div className="text-[13px] font-bold text-foreground mt-1">
              {p.title}
            </div>
            <div className="text-[11px] text-foreground/70 mt-0.5">
              {p.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
