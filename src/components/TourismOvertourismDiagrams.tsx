"use client";

import { T } from "@/components/T";

/* ────────────────────────────────────────────────────────────
   Inbound Tourism & Overtourism 2026 — Diagrams
   ──────────────────────────────────────────────────────────── */

const RED = "#dc2626";
const AMBER = "#d97706";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const SLATE = "#64748b";
const VIOLET = "#7c3aed";

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
      aria-label="Tourism and overtourism diagram"
    >
      <figcaption className="mb-5">
        <div
          className="text-[10px] tracking-[2.5px] uppercase font-bold mb-1"
          style={{ color: `${VIOLET}aa` }}
        >
          <T ja="図" en="FIGURE" />
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

/* ── 1. 訪日客の推移 ── */
export function TourismRecordOverviewDiagram() {
  const data = [
    { year: "2019年", visitors: 3188, spend: 4.8, color: SLATE },
    { year: "2023年", visitors: 2507, spend: 5.3, color: AMBER },
    { year: "2024年", visitors: 3687, spend: 8.1, color: BLUE },
    { year: "2025年", visitors: 4268, spend: 9.5, color: VIOLET },
  ];

  const monthly2026 = [
    { month: "1月", visitors: 359.75 },
    { month: "2月", visitors: 346.67 },
    { month: "3月", visitors: 361 },
  ];

  return (
    <Card
      title={<T ja="訪日外国人数と消費額の推移" en="Inbound Tourist Numbers and Spending Trends" />}
      subtitle={<T ja="2025年に4,268万人・9.5兆円と過去最高を更新" en="2025 record: 42.68 million visitors, ¥9.5 trillion spending" />}
    >
      <div className="space-y-3 mb-5">
        {data.map((d) => (
          <div key={d.year}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] text-foreground/70">{d.year}</span>
              <span className="text-[11px] tabular-nums font-bold" style={{ color: d.color }}>
                {d.visitors.toLocaleString()}万人 / {d.spend}兆円
              </span>
            </div>
            <div className="h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${(d.visitors / 4268) * 100}%`, backgroundColor: d.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg" style={{ backgroundColor: `${VIOLET}08` }}>
        <div className="text-[11px] font-bold text-foreground/70 mb-2">2026年月次（前年比増）</div>
        <div className="flex gap-3">
          {monthly2026.map((m) => (
            <div key={m.month} className="flex-1 text-center p-2 rounded-lg border border-brief-border">
              <div className="text-[10px] text-foreground/50">{m.month}</div>
              <div className="text-[12px] font-bold tabular-nums" style={{ color: VIOLET }}>{m.visitors.toLocaleString()}</div>
              <div className="text-[9px] text-foreground/40">万人</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── 2. オーバーツーリズムの実態 ── */
export function TourismOvertourismCasesDiagram() {
  const cases = [
    {
      place: "富士山",
      icon: "🗻",
      measures: ["1日4,000人上限設定", "登山道2,000円の通行料", "弾丸登山防止ゲート設置"],
      issue: "無断横断・ゴミ増加など住民生活被害",
      color: RED,
    },
    {
      place: "姫路城",
      icon: "🏯",
      measures: ["市外者の入場料：1,000円→2,500円", "二重価格制（2026年〜）", "市民向け料金は維持"],
      issue: "文化財への過度な負荷軽減と市民権利保護のバランス",
      color: AMBER,
    },
    {
      place: "京都",
      icon: "⛩️",
      measures: ["観光客と通勤客の棲み分け検討", "混雑エリアへの新税検討", "観光シーズン分散策"],
      issue: "地下鉄・バスが観光客で溢れ市民利用を圧迫",
      color: BLUE,
    },
  ];

  return (
    <Card
      title={<T ja="オーバーツーリズムの最前線——富士山・姫路城・京都の「限界」" en="Overtourism on the Front Line: Fuji, Himeji Castle, and Kyoto Hit Their Limits" />}
      subtitle={<T ja="点の対策は進むが面の問題（交通・廃棄物処理）は未解決" en="Point solutions are advancing, but systemic issues (transport, waste) remain unsolved" />}
    >
      <div className="space-y-4">
        {cases.map((c) => (
          <div
            key={c.place}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderLeftColor: c.color, borderLeftWidth: "3px" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{c.icon}</span>
              <span className="text-[14px] font-bold text-foreground">{c.place}</span>
            </div>
            <div className="space-y-1 mb-2">
              {c.measures.map((m) => (
                <div key={m} className="flex items-start gap-1.5 text-[11px]">
                  <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: c.color }} />
                  <span className="text-foreground/70">{m}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-foreground/50 italic">{c.issue}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ── 3. 消費単価停滞の構造 ── */
export function TourismRevenueGapDiagram() {
  const segments = [
    { segment: "韓国・台湾（頻繁来日型）", spend: 70, note: "1回あたりの消費は少ない", color: AMBER },
    { segment: "東南アジア（成長中）", spend: 85, note: "中程度の消費額", color: BLUE },
    { segment: "中国（回復途上）", spend: 100, note: "基準値（2019年対比）", color: SLATE },
    { segment: "欧米豪（高付加価値）", spend: 280, note: "東アジア系の3〜5倍の消費額", color: GREEN },
  ];

  return (
    <Card
      title={<T ja="「4,000万人なのに儲からない」——消費単価停滞の構造" en="'42 Million Tourists Yet Still Unprofitable' — The Stagnant Spending Structure" />}
      subtitle={<T ja="旅行者セグメント別の相対的消費単価（基準：中国旅行者=100）" en="Relative spending per visitor by segment (base: Chinese tourists = 100)" />}
    >
      <div className="space-y-3 mb-4">
        {segments.map((s) => (
          <div key={s.segment}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-foreground/70">{s.segment}</span>
              <span className="text-[12px] font-bold tabular-nums" style={{ color: s.color }}>{s.spend}</span>
            </div>
            <div className="h-5 bg-foreground/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${(s.spend / 280) * 100}%`, backgroundColor: s.color }}
              />
            </div>
            <div className="text-[10px] text-foreground/40 mt-0.5">{s.note}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${AMBER}10` }}>
        <T
          ja="ホテル投資の47%が外国資本（CBRE）。運営収益が国外に還流する構造が地域経済への恩恵を薄める"
          en="47% of hotel investment is foreign capital (CBRE). Operational profits flowing overseas dilute the benefit to local economies"
        />
      </div>
    </Card>
  );
}

/* ── 4. 二重価格制の論点 ── */
export function TourismDualPricingDiagram() {
  const pros = [
    "文化財への過度な負荷を価格機能で抑制",
    "外国人旅行者の「日本は安い」認識を修正",
    "地域住民の文化財利用権を保護",
  ];
  const cons = [
    "「外国人差別では」という文化的摩擦のリスク",
    "地域外の日本人も高額負担という「国内観光の階層化」",
    "「安い旅行先・日本」ブランド喪失が高単価旅行者を遠ざける逆説",
  ];

  return (
    <Card
      title={<T ja="「二重価格制」は正しいか——観光地は誰のものか" en="Is Dual Pricing Right? Who Does a Tourist Destination Belong To?" />}
      subtitle={<T ja="姫路城の事例から「量から質」への転換の論点を整理" en="Using Himeji Castle to frame the 'quantity to quality' transition debate" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div
            className="text-[11px] font-bold mb-2 px-2 py-1 rounded"
            style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
          >
            賛成論
          </div>
          <div className="space-y-2">
            {pros.map((p) => (
              <div key={p} className="flex items-start gap-1.5 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: GREEN }} />
                <span className="text-foreground/70">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className="text-[11px] font-bold mb-2 px-2 py-1 rounded"
            style={{ backgroundColor: `${RED}15`, color: RED }}
          >
            反対論・リスク
          </div>
          <div className="space-y-2">
            {cons.map((c) => (
              <div key={c} className="flex items-start gap-1.5 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: RED }} />
                <span className="text-foreground/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${VIOLET}10` }}>
        <T
          ja="バリ島・アムステルダム・ヴェネツィアの事例。成功と失敗の両面から学ぶことが日本に求められている"
          en="Lessons from Bali, Amsterdam, and Venice — Japan must study both the successes and failures"
        />
      </div>
    </Card>
  );
}

/* ── 5. 政策目標の矛盾 ── */
export function TourismPolicyContradictionDiagram() {
  const goals = [
    {
      label: "量的目標（6,000万人）",
      needs: ["誘客促進・低コスト旅行の奨励", "観光地アクセス改善", "宿泊施設の増設"],
      color: AMBER,
    },
    {
      label: "オーバーツーリズム解消",
      needs: ["入場制限・価格引き上げ", "旅行時期分散", "地域住民への配慮"],
      color: VIOLET,
    },
  ];

  return (
    <Card
      title={<T ja="「2030年に6,000万人」目標——量と質の政策矛盾" en="The '60 Million by 2030' Target: The Quantity–Quality Policy Contradiction" />}
      subtitle={<T ja="二つの政策スローガンが根本的に相反している" en="Two policy slogans are fundamentally contradictory" />}
    >
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        {goals.map((g) => (
          <div
            key={g.label}
            className="p-4 rounded-xl border border-brief-border"
            style={{ borderTopColor: g.color, borderTopWidth: "3px" }}
          >
            <div className="text-[13px] font-bold mb-3" style={{ color: g.color }}>{g.label}</div>
            <div className="space-y-1.5">
              {g.needs.map((n) => (
                <div key={n} className="flex items-start gap-1.5 text-[11px]">
                  <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: g.color }} />
                  <span className="text-foreground/70">{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${RED}10` }}>
        <T
          ja="解決策：①6,000万人でも特定観光地に集中しない分散型観光、②数は減らしても消費単価が上がる高付加価値路線、のどちらかを選択する必要がある"
          en="Resolution: choose between (1) dispersed tourism that spreads 60M visitors and (2) a premium route that accepts fewer visitors at higher spend"
        />
      </div>
    </Card>
  );
}

/* ── 6. 戦略視点 ── */
export function TourismStrategicViewDiagram() {
  const proposals = [
    {
      num: "①",
      label: "観光収益の地域留保義務化",
      desc: "地元雇用率・地場調達率に応じた税制優遇",
      color: GREEN,
    },
    {
      num: "②",
      label: "住民参加型の観光計画策定",
      desc: "観光業者と行政だけでなく地域住民の意見を反映",
      color: BLUE,
    },
    {
      num: "③",
      label: "「訪日客数目標」の廃止",
      desc: "評価指標を消費単価・分散度・住民満足度に変更",
      color: VIOLET,
    },
  ];

  return (
    <Card
      title={<T ja="「観光立国」の成功を地域住民の豊かさで測り直せ" en="Redefine Tourism Success by Local Residents' Wellbeing" />}
      subtitle={<T ja="誰のための、何のための観光立国か" en="Who is Japan's tourism nation for — and what purpose does it serve?" />}
    >
      <div className="space-y-3 mb-4">
        {proposals.map((p) => (
          <div
            key={p.num}
            className="p-4 rounded-xl border border-brief-border flex items-start gap-3"
            style={{ borderLeftColor: p.color, borderLeftWidth: "3px" }}
          >
            <span className="text-[16px] font-bold shrink-0" style={{ color: p.color }}>{p.num}</span>
            <div>
              <div className="text-[13px] font-bold text-foreground mb-0.5">{p.label}</div>
              <div className="text-[11px] text-foreground/65">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg text-[11px] text-foreground/60" style={{ backgroundColor: `${VIOLET}10` }}>
        <T
          ja="「私たちは誰のために、何のために観光立国を目指しているのか」——4,268万人の成功が突きつける本質的な問い"
          en="'Who is our tourism nation for, and why?' — the fundamental question raised by 42.68 million visitors"
        />
      </div>
    </Card>
  );
}
