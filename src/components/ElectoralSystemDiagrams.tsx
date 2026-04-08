"use client";

import { T } from "@/components/T";

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
          style={{ color: `${POLITICS}aa` }}
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
export function ElecOverviewDiagram() {
  return (
    <Card
      title={<T ja="2つの理念を同時に追求する日本の選挙制度" en="Japan's electoral system pursues two principles at once" />}
      subtitle={<T ja="政権選択 vs 民意反映" en="Choosing a government vs. reflecting public opinion" />}
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
            <T ja="目的①" en="GOAL 1" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="強い政権を選ぶ" en="Elect a strong government" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T ja="小選挙区制 → 第1党に議席集中・政権交代しやすい" en="Single-member districts concentrate seats in the leading party, enabling turnovers of power" />
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
            <T ja="目的②" en="GOAL 2" />
          </div>
          <div className="text-[14px] font-bold text-foreground mt-1">
            <T ja="民意を反映する" en="Reflect the public will" />
          </div>
          <div className="text-[11px] text-foreground/70 mt-2">
            <T ja="比例代表制 → 得票率に応じた議席・少数派も代表" en="Proportional representation allocates seats by vote share and represents minorities" />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70 text-center">
        <T ja="日本の答え：" en="Japan's answer: " />
        <strong><T ja="並立制" en="parallel system" /></strong>
        <T ja=" ― 両方を1つの選挙で同時に行う" en=" — both are run simultaneously in a single election" />
      </div>
    </Card>
  );
}

/* ── 2. Lower house ── */
export function ElecLowerHouseDiagram() {
  return (
    <Card
      title={<T ja="衆議院 ― 小選挙区比例代表並立制（465議席）" en="House of Representatives — parallel SMD/PR system (465 seats)" />}
      subtitle={<T ja="1996年〜・任期4年・解散あり" en="Since 1996 · 4-year term · dissolvable" />}
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
            <T ja="小選挙区" en="Single-member districts" />
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: POLITICS }}
          >
            289
          </div>
          <div className="text-[11px] text-foreground/70">
            <T ja="全国289区 ／ 各区1人当選" en="289 districts nationwide / one winner each" />
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
            <T ja="比例代表" en="Proportional representation" />
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: NAVY }}
          >
            176
          </div>
          <div className="text-[11px] text-foreground/70">
            <T ja="11ブロック ／ 政党名で投票" en="11 blocks / vote by party name" />
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <strong><T ja="2票制" en="Two-ballot system" /></strong>
        <T ja="：小選挙区に候補者名／比例代表に政党名／重複立候補は" en=": candidate name for the district ballot, party name for PR; dual-listed candidates can win back a seat via " />
        <strong><T ja="惜敗率" en="narrow-loss ratio" /></strong>
        <T ja="で復活当選" en="" />
      </div>
    </Card>
  );
}

/* ── 3. Upper house ── */
export function ElecUpperHouseDiagram() {
  return (
    <Card
      title={<T ja="参議院 ― 選挙区＋全国比例（248議席・半数改選）" en="House of Councillors — districts + nationwide PR (248 seats, half renewed)" />}
      subtitle={<T ja="任期6年・解散なし" en="6-year term, no dissolution" />}
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
            <T ja="選挙区" en="Electoral districts" />
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: ECON }}
          >
            148
          </div>
          <div className="text-[11px] text-foreground/70">
            <T ja="都道府県単位 ／ 1〜6人区 ／ 合区2つ" en="Prefecture-based / 1–6 seats per district / 2 merged districts" />
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
            <T ja="比例代表" en="Proportional representation" />
          </div>
          <div
            className="text-[24px] font-bold tabular-nums"
            style={{ color: GREEN }}
          >
            100
          </div>
          <div className="text-[11px] text-foreground/70">
            <T ja="全国1ブロック ／ 非拘束名簿式" en="Single nationwide block / open-list" />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80"><T ja="非拘束名簿式" en="Open-list system" /></div>
          <div className="text-foreground/60 mt-1">
            <T ja="候補者名か政党名で投票、得票数順に当選" en="Vote for a candidate or a party; winners by vote count" />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.04]">
          <div className="font-bold text-foreground/80"><T ja="特定枠" en="Priority quota" /></div>
          <div className="text-foreground/60 mt-1">
            <T ja="合区救済のため、優先順位付きの例外枠" en="A ranked exception slot to compensate for merged districts" />
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
      title={<T ja="ドント方式 ― 比例代表の議席配分" en="D'Hondt method — PR seat allocation" />}
      subtitle={<T ja="得票数を1,2,3…で割って大きい順に配分" en="Divide vote totals by 1, 2, 3… and allocate from the largest quotient down" />}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-foreground/50">
              <th className="text-left py-2 px-2"><T ja="商" en="Quotient" /></th>
              <th className="text-right py-2 px-2"><T ja="A党(1500)" en="Party A (1500)" /></th>
              <th className="text-right py-2 px-2"><T ja="B党(900)" en="Party B (900)" /></th>
              <th className="text-right py-2 px-2"><T ja="C党(600)" en="Party C (600)" /></th>
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
              <td className="py-2 px-2 font-bold"><T ja="議席" en="Seats" /></td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>3</td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>1</td>
              <td className="py-2 px-2 text-right font-bold" style={{ color: POLITICS }}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.04] text-[11px] text-foreground/70">
        <T ja="定数5の場合、商の大きい順に5つ（赤字）を選んで配分。" en="With 5 seats, allocate to the five largest quotients (shown in red)." />
      </div>
    </Card>
  );
}

/* ── 5. Vote disparity ── */
export function ElecDisparityDiagram() {
  return (
    <Card
      title={<T ja="1票の格差と最高裁の判例" en="Vote-value disparity and Supreme Court rulings" />}
      subtitle={<T ja="衆議院2倍・参議院3倍が違憲状態の目安" en="Rough thresholds: 2x for the lower house, 3x for the upper house" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${POLITICS}0d` }}
        >
          <div className="text-[11px] font-bold" style={{ color: POLITICS }}>
            <T ja="衆議院" en="House of Representatives" />
          </div>
          <div className="text-[20px] font-bold tabular-nums text-foreground mt-1">
            <T ja="2倍" en="2x" />
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="を超えると違憲状態" en="above this is unconstitutional" />
          </div>
        </div>
        <div
          className="p-4 rounded-lg border border-brief-border"
          style={{ backgroundColor: `${NAVY}0d` }}
        >
          <div className="text-[11px] font-bold" style={{ color: NAVY }}>
            <T ja="参議院" en="House of Councillors" />
          </div>
          <div className="text-[20px] font-bold tabular-nums text-foreground mt-1">
            <T ja="3倍" en="3x" />
          </div>
          <div className="text-[10px] text-foreground/60">
            <T ja="程度が違憲状態の目安" en="around this is the unconstitutional threshold" />
          </div>
        </div>
      </div>
      <div className="space-y-1 text-[11px]">
        <div className="font-bold text-foreground/70 mb-2"><T ja="是正の歴史" en="History of corrections" /></div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2015</span>
          <span className="text-foreground/70"><T ja="参議院に合区導入" en="Merged districts introduced in the upper house" /></span>
        </div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2017</span>
          <span className="text-foreground/70"><T ja="衆議院 0増6減・アダムズ方式" en="Lower house: 0 added, 6 cut; Adams method adopted" /></span>
        </div>
        <div className="flex gap-2 items-baseline">
          <span className="tabular-nums w-12 text-foreground/50">2022</span>
          <span className="text-foreground/70"><T ja="衆議院 10増10減" en="Lower house: 10 added, 10 cut" /></span>
        </div>
      </div>
    </Card>
  );
}

/* ── 6. Local elections ── */
export function ElecLocalDiagram() {
  const items = [
    { age: "25歳", ageEn: "Age 25", roles: "衆議院議員／市区町村長／地方議員", rolesEn: "Lower house, municipal mayors, local assembly members", color: GREEN },
    { age: "30歳", ageEn: "Age 30", roles: "参議院議員／知事", rolesEn: "Upper house, prefectural governors", color: ECON },
  ];
  const deposits = [
    { type: "衆議院 小選挙区", typeEn: "Lower house (SMD)", amount: "300万円", amountEn: "¥3M" },
    { type: "衆議院 比例代表", typeEn: "Lower house (PR)", amount: "600万円", amountEn: "¥6M" },
    { type: "参議院 選挙区", typeEn: "Upper house (district)", amount: "300万円", amountEn: "¥3M" },
    { type: "参議院 比例代表", typeEn: "Upper house (PR)", amount: "600万円", amountEn: "¥6M" },
  ];
  return (
    <Card
      title={<T ja="被選挙権と供託金" en="Eligibility to run and candidate deposits" />}
      subtitle={<T ja="立候補の年齢と費用" en="Age and cost of candidacy" />}
    >
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="被選挙権の年齢" en="Minimum age to run" />
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
              <T ja={i.age} en={i.ageEn} />
            </div>
            <div className="text-[11px] text-foreground/70"><T ja={i.roles} en={i.rolesEn} /></div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-bold text-foreground/60 mb-2">
        <T ja="供託金（一定得票なしで没収）" en="Deposit (forfeited below a vote threshold)" />
      </div>
      <div className="space-y-1">
        {deposits.map((d) => (
          <div
            key={d.type}
            className="flex justify-between p-2 rounded border border-brief-border bg-foreground/[0.02] text-[11px]"
          >
            <span className="text-foreground/70"><T ja={d.type} en={d.typeEn} /></span>
            <span className="font-bold tabular-nums" style={{ color: PURPLE }}>
              <T ja={d.amount} en={d.amountEn} />
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
      title={<T ja="衆議院（小選挙区）投票率の推移" en="Lower house (SMD) turnout over time" />}
      subtitle={<T ja="1996年並立制以降・長期低下傾向" en="Since the 1996 parallel system, with a long-term decline" />}
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
        <T ja="※ 期日前投票は全体の約3割を占める" en="* Early voting accounts for roughly 30% of the total" />
      </div>
    </Card>
  );
}
