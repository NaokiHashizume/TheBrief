"use client";

/* ────────────────────────────────────────────────────────────
   Logistics 2024 Aftermath — Diagrams
   ──────────────────────────────────────────────────────────── */

const LOG = "#6366f1";
const RED = "#dc2626";
const NAVY = "#1e3a8a";
const GREEN = "#16a34a";
const ECON = "#b9770e";

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
          style={{ color: `${LOG}aa` }}
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

/* ── 1. Recap ── */
export function Log24RecapDiagram() {
  const rules = [
    { label: "時間外労働", value: "年960時間" },
    { label: "拘束時間", value: "1日13時間" },
    { label: "連続運転", value: "4時間以内" },
    { label: "休息期間", value: "1日11時間" },
  ];
  return (
    <Card
      title="2024年4月施行の規制内容"
      subtitle="自動車運転業務の時間外労働上限規制"
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        {rules.map((r) => (
          <div
            key={r.label}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${LOG}0d` }}
          >
            <div className="text-[10px] text-foreground/60">{r.label}</div>
            <div className="text-[14px] font-bold tabular-nums mt-1" style={{ color: LOG }}>
              {r.value}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${ECON}0d` }}
        >
          <div className="text-[10px] text-foreground/60">2024年度</div>
          <div
            className="text-[18px] font-bold tabular-nums"
            style={{ color: ECON }}
          >
            14%不足
          </div>
          <div className="text-[10px] text-foreground/60">事前試算</div>
        </div>
        <div
          className="p-3 rounded-lg text-center"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div className="text-[10px] text-foreground/60">2030年度</div>
          <div
            className="text-[18px] font-bold tabular-nums"
            style={{ color: RED }}
          >
            34%不足
          </div>
          <div className="text-[10px] text-foreground/60">事前試算</div>
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
      subtitle="2024年6月の引き上げの効果"
    >
      <div className="space-y-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${GREEN}0d` }}>
          <div className="text-[11px] font-bold" style={{ color: GREEN }}>
            実現した：標準的運賃の引き上げ
          </div>
          <div className="text-[18px] font-bold tabular-nums mt-1" style={{ color: GREEN }}>
            +8%
          </div>
          <div className="text-[10px] text-foreground/60 mt-1">
            国土交通省告示・2024年6月
          </div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${RED}0d` }}>
          <div className="text-[11px] font-bold" style={{ color: RED }}>
            届かなかった：ドライバー賃金
          </div>
          <div className="text-[18px] font-bold tabular-nums mt-1" style={{ color: RED }}>
            目標6-13%
          </div>
          <div className="text-[10px] text-foreground/60 mt-1">
            実績は目標を大きく下回る
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <strong>原因</strong>：①中小事業者の交渉力不足 ②荷主の値上げ拒否 ③燃料費・人件費の上昇
      </div>
    </Card>
  );
}

/* ── 3. Wait time ── */
export function Log24WaitDiagram() {
  return (
    <Card
      title="荷待ち時間の改善状況"
      subtitle="国の目標「2時間以内」"
    >
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">バース予約導入率</span>
            <span className="tabular-nums font-bold" style={{ color: ECON }}>約30%</span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "30%", backgroundColor: ECON }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">パレット化率</span>
            <span className="tabular-nums font-bold" style={{ color: ECON }}>約30%</span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "30%", backgroundColor: ECON }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-foreground/70">業界平均の荷待ち時間</span>
            <span className="tabular-nums font-bold" style={{ color: RED }}>1.5-2時間</span>
          </div>
          <div className="h-4 rounded bg-foreground/5 overflow-hidden">
            <div className="h-full" style={{ width: "85%", backgroundColor: RED }} />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        大手は改善が進むが、業界平均では2024年問題前とほぼ同水準。
      </div>
    </Card>
  );
}

/* ── 4. Refusal / capacity gap ── */
export function Log24RefuseDiagram() {
  return (
    <Card
      title="運送拒否と「目に見えない不足」"
      subtitle="14%不足は表面化していないが…"
    >
      <div className="text-center mb-4">
        <div className="text-[11px] text-foreground/60">運送を断ったことがある事業者</div>
        <div
          className="text-[36px] font-bold tabular-nums"
          style={{ color: RED }}
        >
          16%
        </div>
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        表面化していない3つの代替手段
      </div>
      <ul className="space-y-1 text-[11px] text-foreground/70">
        <li>・モーダルシフト（鉄道・船舶）</li>
        <li>・共同配送・荷主連携</li>
        <li>・EC配送頻度の見直し（翌日→2-3日）</li>
        <li>・地方便の廃止・縮小</li>
      </ul>
      <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${ECON}0d` }}>
        <div className="text-[11px] font-bold" style={{ color: ECON }}>
          目に見えない不足
        </div>
        <div className="text-[10px] text-foreground/70 mt-1">
          地方の納期延長／引越し受付制限／BtoBリードタイムの長期化
        </div>
      </div>
    </Card>
  );
}

/* ── 5. 2026 next phase ── */
export function Log242026Diagram() {
  const items = [
    { num: "①", title: "CLO選任の義務化", color: LOG },
    { num: "②", title: "中長期計画と定期報告", color: NAVY },
    { num: "③", title: "荷待ち・荷役時間の数値目標", color: GREEN },
    { num: "④", title: "積載効率向上", color: ECON },
  ];
  return (
    <Card
      title="2026年4月 ― 改正物流効率化法の義務化"
      subtitle="特定事業者 約3,200社が対象"
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
              {i.title}
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] text-foreground/45 text-right">
        罰則あり：未届20万円以下／未選任100万円以下
      </div>
    </Card>
  );
}
