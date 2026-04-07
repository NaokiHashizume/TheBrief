"use client";

/* ────────────────────────────────────────────────────────────
   Japan Electoral System — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";
const NAVY = "#1e3a8a";
const ECON = "#b9770e";
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
          style={{ color: `${POLITICS}aa` }}
        >
          図表
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
export function ElecOverviewDiagram() {
  return (
    <Card
      title="2つの理念を同時に追求する日本の選挙制度"
      subtitle="政権選択 vs 民意反映"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${POLITICS}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: POLITICS }}
          >
            目的①
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            強い政権を選ぶ
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            小選挙区制 → 第1党に議席集中・政権交代しやすい
          </div>
        </div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: NAVY }}
          >
            目的②
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            民意を反映する
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            比例代表制 → 得票率に応じた議席・少数派も代表
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        日本の答え：<strong>並立制</strong> ― 両方を1つの選挙で同時に行う
      </div>
    </Card>
  );
}

/* ── 2. Lower house ── */
export function ElecLowerHouseDiagram() {
  return (
    <Card
      title="衆議院 ― 小選挙区比例代表並立制（465議席）"
      subtitle="1996年〜・任期4年・解散あり"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: POLITICS,
            backgroundColor: `${POLITICS}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: POLITICS }}
          >
            小選挙区
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: POLITICS }}
          >
            289
          </div>
          <div className="text-[11px] text-foreground/70">
            全国289区 ／ 各区1人当選
          </div>
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
            比例代表
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: NAVY }}
          >
            176
          </div>
          <div className="text-[11px] text-foreground/70">
            11ブロック ／ 政党名で投票
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <strong>2票制</strong>：小選挙区に候補者名／比例代表に政党名／重複立候補は<strong>惜敗率</strong>で復活当選
      </div>
    </Card>
  );
}

/* ── 3. Upper house ── */
export function ElecUpperHouseDiagram() {
  return (
    <Card
      title="参議院 ― 選挙区＋全国比例（248議席・半数改選）"
      subtitle="任期6年・解散なし"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: ECON,
            backgroundColor: `${ECON}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: ECON }}
          >
            選挙区
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: ECON }}
          >
            148
          </div>
          <div className="text-[11px] text-foreground/70">
            都道府県単位 ／ 1〜6人区 ／ 合区2つ
          </div>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{
            borderColor: GREEN,
            backgroundColor: `${GREEN}10`,
          }}
        >
          <div
            className="text-[10px] tracking-[1.5px] uppercase font-bold"
            style={{ color: GREEN }}
          >
            比例代表
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            100
          </div>
          <div className="text-[11px] text-foreground/70">
            全国1ブロック ／ 非拘束名簿式
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80">非拘束名簿式</div>
          <div className="text-foreground/60 mt-1">
            候補者名か政党名で投票、得票数順に当選
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80">特定枠</div>
          <div className="text-foreground/60 mt-1">
            合区救済のため、優先順位付きの例外枠
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── 4. D'Hondt method ── */
export function ElecDhondtDiagram() {
  return (
    <Card
      title="ドント方式 ― 比例代表の議席配分"
      subtitle="得票数を1,2,3…で割って大きい順に配分"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2">商</th>
              <th className="text-right py-2 px-2">A党(1500)</th>
              <th className="text-right py-2 px-2">B党(900)</th>
              <th className="text-right py-2 px-2">C党(600)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-brief-border">
              <td className="py-2 px-2 font-bold">÷1</td>
              <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: POLITICS }}>1500</td>
              <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: POLITICS }}>900</td>
              <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: POLITICS }}>600</td>
            </tr>
            <tr className="border-t border-brief-border">
              <td className="py-2 px-2 font-bold">÷2</td>
              <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: POLITICS }}>750</td>
              <td className="py-2 px-2 text-right tabular-nums text-foreground/50">450</td>
              <td className="py-2 px-2 text-right tabular-nums text-foreground/50">300</td>
            </tr>
            <tr className="border-t border-brief-border">
              <td className="py-2 px-2 font-bold">÷3</td>
              <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: POLITICS }}>500</td>
              <td className="py-2 px-2 text-right tabular-nums text-foreground/50">300</td>
              <td className="py-2 px-2 text-right tabular-nums text-foreground/50">200</td>
            </tr>
            <tr className="border-t border-brief-border bg-foreground/[0.03]">
              <td className="py-2 px-2 font-bold">議席</td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>3</td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>1</td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        定数5の場合、商の大きい順に5つ（赤字）を選んで配分。
      </div>
    </Card>
  );
}

/* ── 5. Vote disparity ── */
export function ElecDisparityDiagram() {
  return (
    <Card
      title="1票の格差と最高裁の判例"
      subtitle="衆議院2倍・参議院3倍が違憲状態の目安"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${POLITICS}0d` }}
        >
          <div className="text-[11px] font-bold" style={{ color: POLITICS }}>
            衆議院
          </div>
          <div className="text-[20px] font-bold tabular-nums text-foreground mt-1">
            2倍
          </div>
          <div className="text-[10px] text-foreground/60">
            を超えると違憲状態
          </div>
        </div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div className="text-[11px] font-bold" style={{ color: NAVY }}>
            参議院
          </div>
          <div className="text-[20px] font-bold tabular-nums text-foreground mt-1">
            3倍
          </div>
          <div className="text-[10px] text-foreground/60">
            程度が違憲状態の目安
          </div>
        </div>
      </div>
      <div className="space-y-1 text-[11px]">
        <div className="font-bold text-foreground/70 mb-2">是正の歴史</div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2015</span>
          <span className="text-foreground/70">参議院に合区導入</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2017</span>
          <span className="text-foreground/70">衆議院 0増6減・アダムズ方式</span>
        </div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2022</span>
          <span className="text-foreground/70">衆議院 10増10減</span>
        </div>
      </div>
    </Card>
  );
}

/* ── 6. Local elections ── */
export function ElecLocalDiagram() {
  const items = [
    { age: "25歳", roles: "衆議院議員／市区町村長／地方議員", color: GREEN },
    { age: "30歳", roles: "参議院議員／知事", color: ECON },
  ];
  const deposits = [
    { type: "衆議院 小選挙区", amount: "300万円" },
    { type: "衆議院 比例代表", amount: "600万円" },
    { type: "参議院 選挙区", amount: "300万円" },
    { type: "参議院 比例代表", amount: "600万円" },
  ];
  return (
    <Card
      title="被選挙権と供託金"
      subtitle="立候補の年齢と費用"
    >
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        被選挙権の年齢
      </div>
      <div className="space-y-2 mb-4">
        {items.map((i) => (
          <div
            key={i.age}
            className="flex items-center gap-3 p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${i.color}0a` }}
          >
            <div
              className="text-[14px] font-bold tabular-nums w-12"
              style={{ color: i.color }}
            >
              {i.age}
            </div>
            <div className="text-[11px] text-foreground/70">{i.roles}</div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        供託金（一定得票なしで没収）
      </div>
      <div className="space-y-1">
        {deposits.map((d) => (
          <div
            key={d.type}
            className="flex justify-between p-2 rounded border border-brief-border bg-foreground/[0.02] text-[11px]"
          >
            <span className="text-foreground/70">{d.type}</span>
            <span className="font-bold tabular-nums" style={{ color: PURPLE }}>
              {d.amount}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 7. Turnout ── */
export function ElecTurnoutDiagram() {
  const data = [
    { year: "1996", value: 59.6, color: NAVY },
    { year: "2003", value: 59.9, color: NAVY },
    { year: "2009", value: 69.3, color: GREEN },
    { year: "2014", value: 52.7, color: ECON },
    { year: "2017", value: 53.7, color: ECON },
    { year: "2021", value: 55.9, color: ECON },
    { year: "2024", value: 53.9, color: POLITICS },
  ];
  return (
    <Card
      title="衆議院（小選挙区）投票率の推移"
      subtitle="1996年並立制以降・長期低下傾向"
    >
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.year} className="flex items-center gap-3">
            <div className="w-12 text-[10px] font-bold tabular-nums text-foreground/60">
              {d.year}
            </div>
            <div className="flex-1 h-5 rounded bg-foreground/5 overflow-hidden">
              <div
                className="h-full flex items-center justify-end pr-2"
                style={{
                  width: `${d.value}%`,
                  backgroundColor: d.color,
                }}
              >
                <span className="text-[10px] font-bold text-white tabular-nums">
                  {d.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        ※ 期日前投票は全体の約3割を占める
      </div>
    </Card>
  );
}
