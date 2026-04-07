"use client";

/* ────────────────────────────────────────────────────────────
   BOJ Rate Hike Cycle — Diagrams
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

/* ── 1. History ── */
export function BojHistoryDiagram() {
  const points = [
    { date: "1999", rate: "ゼロ金利導入", value: 0, color: "#94a3b8" },
    { date: "2016-02", rate: "−0.10%（マイナス）", value: -0.1, color: NAVY },
    { date: "2024-03", rate: "0.0〜0.1%", value: 0.05, color: GREEN },
    { date: "2024-07", rate: "0.25%", value: 0.25, color: GREEN },
    { date: "2025-01", rate: "0.50%", value: 0.5, color: ECON },
    { date: "2025-12", rate: "0.75%", value: 0.75, color: RED },
  ];
  return (
    <Card
      title="日銀政策金利の推移 ― 30年ぶりの「ふつう」へ"
      subtitle="無担保コール翌日物の誘導目標"
    >
      <div className="space-y-2">
        {points.map((p) => {
          const width = ((p.value + 0.2) / 0.95) * 100;
          return (
            <div key={p.date} className="flex items-center gap-3">
              <div className="w-16 text-[10px] font-bold tabular-nums text-foreground/60 shrink-0">
                {p.date}
              </div>
              <div className="flex-1 h-5 rounded bg-foreground/5 overflow-hidden">
                <div
                  className="h-full flex items-center justify-end pr-2"
                  style={{
                    width: `${Math.max(width, 8)}%`,
                    backgroundColor: p.color,
                  }}
                >
                  <span className="text-[9px] font-bold text-white tabular-nums whitespace-nowrap">
                    {p.rate}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

/* ── 2. Terminal rate ── */
export function BojTerminalDiagram() {
  const scenarios = [
    {
      label: "メイン",
      detail: "2026年 2回 ＋ 2027年 1回",
      terminal: "1.50%",
      color: ECON,
    },
    {
      label: "リスク（円安）",
      detail: "2026年 4月・10月 ＋ 2027年 4月・10月",
      terminal: "1.75%",
      color: RED,
    },
    {
      label: "ハト派",
      detail: "2026年 1〜2回程度",
      terminal: "1.25%",
      color: GREEN,
    },
  ];
  return (
    <Card
      title="ターミナルレートの3つのシナリオ"
      subtitle="出典：野村証券、第一生命経済研究所、みずほリサーチ"
    >
      <div className="space-y-3">
        {scenarios.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${s.color}0d` }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[12px] font-bold" style={{ color: s.color }}>
                {s.label}シナリオ
              </div>
              <div
                className="text-[16px] font-bold tabular-nums"
                style={{ color: s.color }}
              >
                {s.terminal}
              </div>
            </div>
            <div className="text-[10px] text-foreground/60 mt-1">
              {s.detail}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. Neutral rate ── */
export function BojNeutralRateDiagram() {
  return (
    <Card
      title="中立金利「1〜2.5%」という幅"
      subtitle="日銀が示すレンジは政策的余地を残した結果"
    >
      <div className="relative h-16 rounded-lg bg-foreground/5 overflow-hidden">
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: "20%",
            width: "60%",
            backgroundColor: `${ECON}33`,
            borderLeft: `2px solid ${ECON}`,
            borderRight: `2px solid ${ECON}`,
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 text-[10px] font-bold tabular-nums"
          style={{ left: "calc(20% - 18px)", color: ECON }}
        >
          1.0%
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 text-[10px] font-bold tabular-nums"
          style={{ left: "calc(80% + 6px)", color: ECON }}
        >
          2.5%
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 text-[11px] font-bold"
          style={{ left: "42%", color: ECON }}
        >
          中立金利レンジ
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px]">
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80 mb-1">
            なぜ広い幅？
          </div>
          <div className="text-foreground/60">
            推計手法で大きく振れる／政策的余地の確保
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80 mb-1">日銀の本音</div>
          <div className="text-foreground/60">
            理論値より実際の経済データを優先したい
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 4. Politics ── */
export function BojPoliticsDiagram() {
  return (
    <Card
      title="政府と日銀のせめぎ合い"
      subtitle="高市政権 vs 植田日銀"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${RED}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: RED }}
          >
            高市政権
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            積極財政・利上げ慎重
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・大型予算でアクセル</li>
            <li>・リフレ派の影響強い</li>
            <li>・利上げによる景気下押しを警戒</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: NAVY,
            backgroundColor: `${NAVY}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: NAVY }}
          >
            日銀（植田総裁）
          </div>
          <div className="text-[13px] font-bold text-foreground mt-1">
            金利正常化・利上げ前向き
          </div>
          <ul className="text-[11px] text-foreground/70 mt-2 space-y-1">
            <li>・金利でブレーキ</li>
            <li>・賃上げ定着を確認しつつ</li>
            <li>・円安が利上げの「援軍」</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        2025年10月の利上げ見送りは、政府牽制が原因との見方が市場で有力。
      </div>
    </Card>
  );
}

/* ── 5. Impact ── */
export function BojImpactDiagram() {
  const items = [
    {
      target: "住宅ローン（変動）",
      detail: "3,000万円・35年で月+4,000円",
      sub: "5年ルール・125%ルールあり",
      color: ECON,
    },
    {
      target: "中小企業 借入",
      detail: "1億円借入で年+25万円",
      sub: "全企業合計で年+5,000億円",
      color: NAVY,
    },
    {
      target: "預金金利",
      detail: "0.001% → 0.20%",
      sub: "1,000万円で年2万円の利息",
      color: GREEN,
    },
    {
      target: "国の利払い",
      detail: "1%上昇で年+8.7兆円",
      sub: "防衛増税6兆円を上回る規模",
      color: RED,
    },
  ];
  return (
    <Card
      title="0.25%利上げの影響 ― 家計・企業・国家"
      subtitle="金利が「ある世界」への移行コスト"
    >
      <div className="space-y-2">
        {items.map((i) => (
          <div
            key={i.target}
            className="p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-[12px] font-bold" style={{ color: i.color }}>
                {i.target}
              </div>
              <div
                className="text-[11px] font-bold tabular-nums"
                style={{ color: i.color }}
              >
                {i.detail}
              </div>
            </div>
            <div className="text-[10px] text-foreground/60 mt-1">{i.sub}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 6. Triggers ── */
export function BojTriggersDiagram() {
  const triggers = [
    {
      num: "①",
      title: "春闘・賃金統計",
      detail: "実質賃金プラス／サービス価格への転嫁",
      color: ECON,
    },
    {
      num: "②",
      title: "コアコアCPI",
      detail: "2%前後で安定推移しているか",
      color: NAVY,
    },
    {
      num: "③",
      title: "ドル円相場",
      detail: "155-160円が政治的限界ライン",
      color: RED,
    },
    {
      num: "④",
      title: "FRBの動向",
      detail: "利下げペースで日米金利差が変動",
      color: PURPLE,
    },
  ];
  return (
    <Card
      title="次の利上げを読む4つの指標"
      subtitle="日銀ウォッチャーが追っているもの"
    >
      <div className="space-y-2">
        {triggers.map((t) => (
          <div
            key={t.num}
            className="flex items-start gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${t.color}0a` }}
          >
            <div
              className="text-[16px] font-bold tabular-nums shrink-0"
              style={{ color: t.color }}
            >
              {t.num}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-bold" style={{ color: t.color }}>
                {t.title}
              </div>
              <div className="text-[10px] text-foreground/60 mt-0.5">
                {t.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        メインシナリオ：<strong>2026年6月利上げ</strong>（円安進行時は4月前倒し）
      </div>
    </Card>
  );
}
