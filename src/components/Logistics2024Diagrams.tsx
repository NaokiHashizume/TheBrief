"use client";

/* ────────────────────────────────────────────────────────────
   Logistics 2024 Aftermath — Diagrams
   ──────────────────────────────────────────────────────────── */

import { T } from "@/components/T";

const LOG = "#6366f1";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";

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
          style={{ color: `${LOG}aa` }}
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

/* ── 1. Recap ── */
export function Log24RecapDiagram() {
  const rules = [
    { label: "時間外労働", labelEn: "Overtime", value: "年960時間", valueEn: "960 hrs/yr" },
    { label: "拘束時間", labelEn: "Max shift length", value: "1日13時間", valueEn: "13 hrs/day" },
    { label: "連続運転", labelEn: "Continuous driving", value: "4時間以内", valueEn: "Within 4 hrs" },
    { label: "休息期間", labelEn: "Rest period", value: "1日11時間", valueEn: "11 hrs/day" },
  ];
  return (
    <Card
      title="2024年4月施行の規制内容"
      titleEn="Regulations Effective April 2024"
      subtitle="自動車運転業務の時間外労働上限規制"
      subtitleEn="Overtime cap for truck driver operations"
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        {rules.map((r) => (
          <div
            key={r.label}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${LOG}0d` }}
          >
            <div className="text-[10px] text-foreground/60">
              <T ja={r.label} en={r.labelEn} />
            </div>
            <div className="text-[14px] font-bold tabular-nums mt-1" style={{ color: LOG }}>
              <T ja={r.value} en={r.valueEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${ECON}0d` }}
        >
          <div className="text-[10px] text-foreground/60">
            <T ja="2024年度" en="FY2024" />
          </div>
          <div
            className="text-[18px] font-bold tabular-nums"
            style={{ color: ECON }}
          >
            <T ja="14%不足" en="14% shortage" />
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="事前試算" en="Pre-regulation estimate" />
          </div>
        </div>
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">
            <T ja="2030年度" en="FY2030" />
          </div>
          <div
            className="text-[18px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            <T ja="34%不足" en="34% shortage" />
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="事前試算" en="Pre-regulation estimate" />
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 2. Wages ── */
export function Log24WagesDiagram() {
  return (
    <Card
      title="標準的運賃8%引き上げ vs 賃金目標6-13%"
      titleEn="Standard Freight Rate +8% vs. Wage Target 6–13%"
      subtitle="2024年6月の引き上げの効果"
      subtitleEn="Impact of the June 2024 rate increase"
    >
      <div className="space-y-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${GREEN}0d` }}>
          <div className="text-[11px] font-bold" style={{ color: GREEN }}>
            <T ja="実現した：標準的運賃の引き上げ" en="Achieved: Standard freight rate increase" />
          </div>
          <div className="text-[18px] font-bold tabular-nums mt-1" style={{ color: GREEN }}>
            +8%
          </div>
          <div className="text-[10px] text-foreground/60 mt-1">
            <T ja="国土交通省告示・2024年6月" en="MLIT notification, June 2024" />
          </div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[11px] font-bold" style={{ color: RED }}>
            <T ja="届かなかった：ドライバー賃金" en="Fell short: Driver wages" />
          </div>
          <div className="text-[18px] font-bold tabular-nums mt-1" style={{ color: RED }}>
            <T ja="目標6-13%" en="Target 6–13%" />
          </div>
          <div className="text-[10px] text-foreground/60 mt-1">
            <T ja="実績は目標を大きく下回る" en="Actual results fell well below target" />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="原因：①中小事業者の交渉力不足 ②荷主の値上げ拒否 ③燃料費・人件費の上昇"
          en="Causes: (1) Weak bargaining power of small carriers (2) Shippers refusing rate hikes (3) Rising fuel and labor costs"
        />
      </div>
    </Card>
  );
}

/* ── 3. Wait time ── */
export function Log24WaitDiagram() {
  return (
    <Card
      title="荷待ち時間の改善状況"
      titleEn="Progress on Reducing Loading Wait Times"
      subtitle="国の目標「2時間以内」"
      subtitleEn={`Government target: "Within 2 hours"`}
    >
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">
              <T ja="バース予約導入率" en="Berth reservation adoption" />
            </span>
            <span className="tabular-nums font-bold" style={{ color: ECON }}>
              <T ja="約30%" en="~30%" />
            </span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "30%", backgroundColor: ECON }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">
              <T ja="パレット化率" en="Palletization rate" />
            </span>
            <span className="tabular-nums font-bold" style={{ color: ECON }}>
              <T ja="約30%" en="~30%" />
            </span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "30%", backgroundColor: ECON }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">
              <T ja="業界平均の荷待ち時間" en="Industry avg. wait time" />
            </span>
            <span className="tabular-nums font-bold" style={{ color: RED }}>
              <T ja="1.5-2時間" en="1.5–2 hrs" />
            </span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "85%", backgroundColor: RED }} />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T
          ja="大手は改善が進むが、業界平均では2024年問題前とほぼ同水準。"
          en="Large operators are improving, but the industry average remains nearly unchanged from before the 2024 crisis."
        />
      </div>
    </Card>
  );
}

/* ── 4. Refusal / capacity gap ── */
export function Log24RefuseDiagram() {
  return (
    <Card
      title="運送拒否と「目に見えない不足」"
      titleEn={`Shipment Refusals and the "Invisible Shortage"`}
      subtitle="14%不足は表面化していないが…"
      subtitleEn="The 14% shortfall has not fully surfaced — yet"
    >
      <div className="text-center mb-4">
        <div className="text-[11px] text-foreground/60">
          <T ja="運送を断ったことがある事業者" en="Carriers that have refused shipments" />
        </div>
        <div
          className="text-[36px] font-bold tabular-nums"
          style={{ color: RED }}
        >
          16%
        </div>
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="表面化していない3つの代替手段" en="3 workarounds masking the shortage" />
      </div>
      <ul className="space-y-1 text-[11px] text-foreground/70">
        <li>
          <T ja="・モーダルシフト（鉄道・船舶）" en="- Modal shift (rail / sea)" />
        </li>
        <li>
          <T ja="・共同配送・荷主連携" en="- Joint delivery and shipper collaboration" />
        </li>
        <li>
          <T ja="・EC配送頻度の見直し（翌日→2-3日）" en="- Reduced e-commerce delivery frequency (next-day → 2–3 days)" />
        </li>
        <li>
          <T ja="・地方便の廃止・縮小" en="- Cancellation or reduction of rural routes" />
        </li>
      </ul>
      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${ECON}0d` }}>
        <div className="text-[11px] font-bold" style={{ color: ECON }}>
          <T ja="目に見えない不足" en="The invisible shortage" />
        </div>
        <div className="text-[10px] text-foreground/70 mt-1">
          <T
            ja="地方の納期延長／引越し受付制限／BtoBリードタイムの長期化"
            en="Longer delivery times in rural areas / restrictions on moving bookings / extended B2B lead times"
          />
        </div>
      </div>
    </Card>
  );
}

/* ── 5. 2026 next phase ── */
export function Log242026Diagram() {
  const items = [
    { num: "①", title: "CLO選任の義務化", titleEn: "Mandatory appointment of CLO (Chief Logistics Officer)", color: LOG },
    { num: "②", title: "中長期計画と定期報告", titleEn: "Medium- and long-term plans with periodic reporting", color: NAVY },
    { num: "③", title: "荷待ち・荷役時間の数値目標", titleEn: "Numerical targets for wait and loading times", color: GREEN },
    { num: "④", title: "積載効率向上", titleEn: "Improving load efficiency", color: ECON },
  ];
  return (
    <Card
      title="2026年4月 ― 改正物流効率化法の義務化"
      titleEn="April 2026 — Mandatory Requirements under the Revised Logistics Efficiency Act"
      subtitle="特定事業者 約3,200社が対象"
      subtitleEn="Approx. 3,200 designated businesses subject to the law"
    >
      <div className="space-y-2 mb-4">
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
      <div className="text-[10px] text-foreground/45 text-right">
        <T
          ja="罰則あり：未届20万円以下／未選任100万円以下"
          en="Penalties apply: up to ¥200,000 for non-reporting / up to ¥1,000,000 for failing to appoint CLO"
        />
      </div>
    </Card>
  );
}
