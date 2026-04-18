"use client";

const TEAL = "#14b8a6";
const AMBER = "#f59e0b";
const RED = "#ef4444";

function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">Figure</div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   cvs-financial-comparison
   3社の2026年2月期業績比較
   ───────────────────────────────────────────── */
export function CvsFinancialComparisonDiagram() {
  const data = [
    { name: "ローソン", revenue: 30223, opProfit: "過去最高更新", color: TEAL, status: "good" },
    { name: "ファミリーマート", revenue: 28500, opProfit: "過去最高更新", color: TEAL, status: "good" },
    { name: "セブン＆アイ", revenue: 91000, opProfit: "国内▲0.9%", color: RED, status: "bad" },
  ];

  return (
    <Card title="コンビニ3社 2026年2月期業績サマリー">
      <div className="space-y-4">
        {data.map((d, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border bg-foreground/[0.015]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-bold text-foreground/85">{d.name}</span>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: d.status === "good" ? `${TEAL}20` : `${RED}20`,
                  color: d.status === "good" ? TEAL : RED,
                }}
              >
                {d.opProfit}
              </span>
            </div>
            <div className="h-2 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(d.revenue / 91000) * 100}%`,
                  background: `linear-gradient(90deg, ${d.color}80, ${d.color})`,
                }}
              />
            </div>
            <div className="text-[11px] text-foreground/50 mt-1">
              チェーン全店売上高 約{(d.revenue / 10000).toFixed(1)}兆円
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-foreground/40 mt-4">出典：各社IR資料・流通ニュース（2026.04）</p>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   cvs-lawson-strategy
   ローソン：三菱商事×KDDI戦略
   ───────────────────────────────────────────── */
export function CvsLawson2026StrategyDiagram() {
  const pillars = [
    { icon: "📡", label: "通信×小売融合", detail: "auネットワークによるセルフレジ遠隔支援" },
    { icon: "🤖", label: "調理ロボット", detail: "フライヤー自動化で品質均一化・省人化" },
    { icon: "💳", label: "au PAY×ポンタ連携", detail: "購買履歴×通信データの統合分析" },
    { icon: "📊", label: "リテールメディア次世代型", detail: "位置情報×属性データ連携広告配信" },
  ];

  return (
    <Card title="ローソン「三菱商事×KDDI」戦略の4本柱">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pillars.map((p, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border bg-foreground/[0.02]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[18px]">{p.icon}</span>
              <span className="text-[13px] font-bold text-foreground/85">{p.label}</span>
            </div>
            <p className="text-[12px] text-foreground/60 leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ background: `${TEAL}10`, borderLeft: `3px solid ${TEAL}40` }}>
        <p className="text-[12px] text-foreground/70">
          <span className="font-bold" style={{ color: TEAL }}>核心：</span>
          通信×小売データの融合によるターゲット広告プラットフォーム化
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   cvs-familymart-media
   ファミマ：リテールメディア戦略
   ───────────────────────────────────────────── */
export function CvsFamilymartMediaDiagram() {
  const metrics = [
    { label: "FamilyMart Vision設置店舗数", value: "1万店", note: "2025年末達成" },
    { label: "月間ファミマ来店者数", value: "1.4億件", note: "実数リーチ" },
    { label: "広告・メディア収益目標（2030年度）", value: "100億円", note: "4年後目標" },
  ];

  return (
    <Card title="ファミマ「リテールメディア100億円」戦略指標">
      <div className="space-y-3 mb-5">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-brief-border">
            <div>
              <span className="text-[12px] text-foreground/60">{m.label}</span>
              <div className="text-[10px] text-foreground/40">{m.note}</div>
            </div>
            <span className="text-[18px] font-bold" style={{ color: AMBER }}>{m.value}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-bold text-foreground/60 uppercase tracking-wider">リテールメディアの強み</p>
        {[
          "購買意図が最も高い瞬間（会計直前）に広告配信",
          "実際の購買データと連動した広告効果測定",
          "食品・飲料・日用品メーカーからの広告費シフト加速",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: AMBER }} />
            <p className="text-[12px] text-foreground/65">{s}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   cvs-seven-challenges
   セブン：2つの構造的課題
   ───────────────────────────────────────────── */
export function CvsSevenChallengesDiagram() {
  return (
    <Card title="セブン＆アイが抱える2つの構造的課題">
      <div className="space-y-4">
        <div className="p-4 rounded-xl border" style={{ borderColor: `${RED}30`, background: `${RED}08` }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: RED }}>1</div>
            <span className="text-[13px] font-bold text-foreground/85">北米の収益モデル崩壊</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-foreground/60">北米既存店売上</span>
              <span className="font-bold" style={{ color: RED }}>▲4.3%</span>
            </div>
            <p className="text-[11px] text-foreground/55">EV普及加速によりガソリン収益（Speedway・7-Eleven USA）が不安定化</p>
          </div>
        </div>
        <div className="p-4 rounded-xl border" style={{ borderColor: `${AMBER}30`, background: `${AMBER}08` }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: AMBER }}>2</div>
            <span className="text-[13px] font-bold text-foreground/85">国内「高単価路線」の限界</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-foreground/60">国内既存店客数</span>
              <span className="font-bold" style={{ color: AMBER }}>▲0.9%</span>
            </div>
            <p className="text-[11px] text-foreground/55">物価上昇×消費者節約志向で「高いセブン」からコスパ重視店へシフト</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   cvs-business-evolution
   コンビニのビジネス進化図
   ───────────────────────────────────────────── */
export function CvsBusinessEvolutionDiagram() {
  const evolutions = [
    { category: "リテールメディア", leader: "ファミマ先行", detail: "棚・レジ・アプリを通じたターゲット広告", color: TEAL },
    { category: "金融サービス", leader: "3社共通", detail: "セブン銀行・ローソン銀行・ファミペイ", color: AMBER },
    { category: "健康・医療", leader: "試験展開中", detail: "処方薬受け取り・健康相談", color: "#8b5cf6" },
    { category: "AI・ロボット活用", leader: "セブン先行", detail: "13種LLM活用・全社員8,000人展開計画", color: "#3b82f6" },
  ];

  return (
    <Card title="コンビニの「非商品収益」進化マップ">
      <div className="space-y-3">
        {evolutions.map((e, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-brief-border">
            <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: e.color }} />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[13px] font-bold text-foreground/85">{e.category}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border text-foreground/50 border-brief-border">{e.leader}</span>
              </div>
              <p className="text-[11px] text-foreground/55">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg border border-brief-border">
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-foreground/60">非商品収益の現状比率</span>
          <span className="font-bold text-foreground/80">{"< 5%"}</span>
        </div>
        <div className="flex items-center justify-between text-[12px] mt-1">
          <span className="text-foreground/60">非商品収益の粗利率（商品比）</span>
          <span className="font-bold" style={{ color: TEAL }}>2〜5倍</span>
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   cvs-global-expansion / cvs-strategic-view
   海外展開比較 & 商社戦略視点（共用Card）
   ───────────────────────────────────────────── */
export function CvsGlobalExpansionDiagram() {
  const chains = [
    { name: "セブン", overseas: "約6万店", focus: "アジア・オセアニア（5万近く）", challenge: "北米苦戦でキャッシュフロー制約" },
    { name: "ローソン", overseas: "中国6,000店超", focus: "中国・インドネシア・タイ", challenge: "KDDIとのテック型海外移植検討" },
    { name: "ファミマ", overseas: "海外約6,500店", focus: "台湾・タイ・ベトナム・フィリピン", challenge: "伊藤忠ASEANネットワーク活用" },
  ];

  return (
    <Card title="コンビニ3社 海外展開比較（2025年末時点）">
      <div className="space-y-3">
        {chains.map((c, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border bg-foreground/[0.015]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] font-bold text-foreground/85">{c.name}</span>
              <span className="text-[12px] font-bold" style={{ color: TEAL }}>{c.overseas}</span>
            </div>
            <p className="text-[11px] text-foreground/60">主要地域：{c.focus}</p>
            <p className="text-[11px] text-foreground/45 mt-1">戦略：{c.challenge}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CvsStrategicViewDiagram() {
  const positions = [
    { parent: "三菱商事×KDDI", chain: "ローソン", strategy: "通信×リテール融合データプラットフォーム化", horizon: "10年後構造転換", color: TEAL },
    { parent: "伊藤忠", chain: "ファミマ", strategy: "リテールメディアで今稼ぐ", horizon: "近中期収益化", color: AMBER },
    { parent: "セブン＆アイ", chain: "セブン", strategy: "北米大型M&A→環境変化に後追い", horizon: "戦略転換中", color: RED },
  ];

  return (
    <Card title="「商社の戦略哲学の違い」が生んだ業績差">
      <div className="space-y-3">
        {positions.map((p, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: p.color }} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[12px] text-foreground/50">{p.parent}</span>
                  <span className="text-[13px] font-bold text-foreground/85">→ {p.chain}</span>
                </div>
                <p className="text-[12px] text-foreground/70">{p.strategy}</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full mt-1.5 inline-block" style={{ background: `${p.color}15`, color: p.color }}>{p.horizon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
