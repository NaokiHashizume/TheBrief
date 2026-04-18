"use client";

const TEAL = "#14b8a6";
const AMBER = "#f59e0b";
const RED = "#ef4444";
const BLUE = "#3b82f6";

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
   housing-rate-history
   金利引き上げの経緯と返済額影響
   ───────────────────────────────────────────── */
export function HousingRateHistoryDiagram() {
  const timeline = [
    { date: "2024年3月", event: "マイナス金利解除", rate: "0%", color: "#6b7280" },
    { date: "2024年7月", event: "政策金利引き上げ", rate: "0.25%", color: AMBER },
    { date: "2025年12月", event: "追加利上げ", rate: "0.5%", color: AMBER },
    { date: "2026年4月", event: "変動金利到達", rate: "1%前後", color: RED },
  ];

  return (
    <Card title="日銀利上げの経緯と住宅ローン変動金利の推移">
      <div className="relative space-y-3 mb-5 pl-4">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-brief-border" />
        {timeline.map((t, i) => (
          <div key={i} className="relative pl-4">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background" style={{ background: t.color }} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-foreground/45">{t.date}</p>
                <p className="text-[13px] font-bold text-foreground/85">{t.event}</p>
              </div>
              <span className="text-[16px] font-bold" style={{ color: t.color }}>{t.rate}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border" style={{ borderColor: `${RED}30`, background: `${RED}06` }}>
        <p className="text-[12px] text-foreground/70">
          <span className="font-bold" style={{ color: RED }}>家計負担試算：</span>
          3,000万円借入・残期間25年で金利0.5%→1.0%上昇時、月返済額増加は約1.5〜2万円（年間18〜24万円増）
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   housing-tokyo-price
   東京23区の不動産価格
   ───────────────────────────────────────────── */
export function HousingTokyoPriceDiagram() {
  const prices = [
    { type: "新築マンション平均価格（東京23区）", price: "1億2,126万円", change: "+15.8%", period: "2026年1月", color: RED },
    { type: "中古マンション平均希望売り出し（70㎡）", price: "1億2,123万円", change: "+34.4%", period: "2026年2月", color: AMBER },
  ];

  return (
    <Card title="東京23区の不動産価格（9カ月連続1億円超え）">
      <div className="space-y-4 mb-5">
        {prices.map((p, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border bg-foreground/[0.015]">
            <p className="text-[11px] text-foreground/50 mb-1">{p.period}</p>
            <p className="text-[12px] text-foreground/70 mb-2">{p.type}</p>
            <div className="flex items-end justify-between">
              <span className="text-[22px] font-bold" style={{ color: p.color }}>{p.price}</span>
              <span className="text-[13px] font-bold" style={{ color: p.color }}>前年比 {p.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <p className="text-[11px] font-bold text-foreground/55">価格高騰の主要因</p>
        {[
          "建築費の恒常的上昇（2020年比30〜40%増）",
          "首都圏新築マンション供給：過去50年で最低水準（約2.3万戸見通し）",
          "円安を背景とした外国人・富裕層の需要継続",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: RED }} />
            <p className="text-[12px] text-foreground/60">{s}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   housing-price-paradox
   「金利上昇でも価格下落しない」パラドックス
   ───────────────────────────────────────────── */
export function HousingPriceParadoxDiagram() {
  const factors = [
    { title: "供給の構造的不足", detail: "建築費高騰で採算合う価格（1億超）でしか供給できない", icon: "🏗️" },
    { title: "海外資本・富裕層の金利感応度の低さ", detail: "一括購入主流のため金利上昇が需要を抑制しない", icon: "💰" },
    { title: "インフレ下での実物資産選好", detail: "都心不動産を「安定資産」として保全需要が継続", icon: "🏙️" },
  ];

  return (
    <Card title="教科書と現実が乖離する理由——「金利上昇でも東京は売れる」">
      <div className="flex items-center gap-3 mb-4 text-[12px]">
        <div className="p-2 rounded-lg text-center flex-1" style={{ background: `${BLUE}10`, borderLeft: `2px solid ${BLUE}30` }}>
          <p className="text-foreground/50">教科書</p>
          <p className="font-bold text-foreground/70">金利↑→需要↓→価格↓</p>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30 flex-shrink-0"><path d="M9 18l6-6-6-6" /></svg>
        <div className="p-2 rounded-lg text-center flex-1" style={{ background: `${RED}10`, borderLeft: `2px solid ${RED}30` }}>
          <p className="text-foreground/50">東京2026</p>
          <p className="font-bold" style={{ color: RED }}>金利↑→価格↑（継続）</p>
        </div>
      </div>
      <div className="space-y-3">
        {factors.map((f, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-brief-border">
            <span className="text-[18px] flex-shrink-0">{f.icon}</span>
            <div>
              <p className="text-[13px] font-bold text-foreground/85">{f.title}</p>
              <p className="text-[11px] text-foreground/55 mt-0.5">{f.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   housing-inequality
   「二つの日本」——市場の二極化
   ───────────────────────────────────────────── */
export function HousingInequalityDiagram() {
  const markets = [
    {
      area: "都心（港区・千代田区・渋谷区等）",
      trend: "価格上昇継続",
      driver: "外国人投資家・共働き高所得世帯",
      color: RED,
      icon: "📈",
    },
    {
      area: "郊外（神奈川・埼玉・千葉郊外）",
      trend: "買い手市場化",
      driver: "金利上昇で購入断念・空き家増加",
      color: AMBER,
      icon: "📉",
    },
    {
      area: "地方都市・移住ブーム地域",
      trend: "二極化",
      driver: "人口減少地域は底打ち、長野・福岡・那覇郊外は値上がり",
      color: TEAL,
      icon: "↔️",
    },
  ];

  return (
    <Card title="「二つの日本」——都心富裕層 vs 郊外・地方中間層の分断">
      <div className="space-y-3">
        {markets.map((m, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] font-bold text-foreground/85">{m.area}</span>
              <span className="text-[12px] font-bold" style={{ color: m.color }}>{m.trend} {m.icon}</span>
            </div>
            <p className="text-[11px] text-foreground/55">{m.driver}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg" style={{ background: `${AMBER}08`, borderLeft: `3px solid ${AMBER}30` }}>
        <p className="text-[12px] text-foreground/65">
          「格差の空間的固定化」が進行。全国900万戸超の空き家と東京1.2億円の新築マンションが共存する状況。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   housing-action-plan
   借入者・購入検討者の実践アクション
   ───────────────────────────────────────────── */
export function HousingActionPlanDiagram() {
  const actions = [
    { group: "既存の変動金利借入者", items: ["繰り上げ返済で元本を減らす", "固定金利への切り替え検討（10年固定2.5〜2.7%台）", "年間返済額の点検（金利1%上昇時シミュレーション）"], color: RED },
    { group: "購入検討者", items: ["固定10年+変動のハイブリッド戦略で初期リスクをヘッジ", "「買える」より「持続できる」——総保有コストで判断"], color: TEAL },
  ];

  return (
    <Card title="2026年の金利上昇に備える実践的アクション">
      <div className="space-y-4">
        {actions.map((a, i) => (
          <div key={i} className="p-4 rounded-xl border border-brief-border">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
              <span className="text-[13px] font-bold text-foreground/85">{a.group}</span>
            </div>
            <div className="space-y-1.5">
              {a.items.map((item, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className="text-[11px] font-bold flex-shrink-0" style={{ color: a.color }}>›</span>
                  <p className="text-[12px] text-foreground/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   housing-strategic-view
   2026〜2027年の試金石
   ───────────────────────────────────────────── */
export function HousingStrategicViewDiagram() {
  return (
    <Card title="2026〜2027年の不動産市場「試金石」——金利感応型に戻るか">
      <div className="space-y-3 mb-4">
        <div className="p-3 rounded-xl border" style={{ borderColor: `${TEAL}30`, background: `${TEAL}06` }}>
          <p className="text-[12px] font-bold text-foreground/80 mb-1">金利正常化が地方・郊外を再評価するシナリオ</p>
          <p className="text-[11px] text-foreground/60">都心高額物件の投資利回り低下→「郊外の安い物件に少額ローン」が合理的に。地方移住トレンドと組み合わさると郊外需要が回復。</p>
        </div>
        <div className="p-3 rounded-xl border" style={{ borderColor: `${RED}30`, background: `${RED}06` }}>
          <p className="text-[12px] font-bold text-foreground/80 mb-1">外国人・富裕層需要が継続するシナリオ</p>
          <p className="text-[11px] text-foreground/60">非金利感応需要が引き続き強ければ「二つの日本」の分断は深まるばかり。都心価格は高止まり。</p>
        </div>
      </div>
      <div className="p-3 rounded-lg" style={{ background: `${AMBER}08`, borderLeft: `3px solid ${AMBER}30` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: AMBER }}>観察ポイント：</span>
          2026〜2027年が「市場が金利感応型に戻るかどうか」の試金石。
        </p>
      </div>
    </Card>
  );
}
