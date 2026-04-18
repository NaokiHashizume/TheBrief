"use client";

const TEAL = "#14b8a6";
const AMBER = "#f59e0b";
const RED = "#ef4444";
const PURPLE = "#8b5cf6";

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
   drugstore-merger-overview
   統合後の規模概観
   ───────────────────────────────────────────── */
export function DrugstoreMergerOverviewDiagram() {
  const stats = [
    { label: "売上高", value: "2兆3,124億円", sub: "日本最大" },
    { label: "店舗数", value: "5,659店", sub: "業界シェア約25%" },
    { label: "社員数", value: "約6万人", sub: "統合後規模" },
  ];

  return (
    <Card title="ウエルシア×ツルハ統合後の規模（2025年12月1日完了）">
      <div className="grid grid-cols-3 gap-3 mb-5">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-3 rounded-xl border border-brief-border bg-foreground/[0.015]">
            <div className="text-[18px] font-bold" style={{ color: TEAL }}>{s.value}</div>
            <div className="text-[10px] text-foreground/50 mt-0.5">{s.label}</div>
            <div className="text-[10px] font-medium" style={{ color: TEAL }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-bold text-foreground/55 uppercase tracking-wider">統合の経緯</p>
        {[
          "2024年1月：イオンがウエルシアへのTOBを実施",
          "2024年：イオンがツルハ株を取得、統合への道を開く",
          "2025年12月1日：経営統合完了、日本最大ドラッグストアグループ誕生",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: TEAL }} />
            <p className="text-[12px] text-foreground/65">{s}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   drugstore-lifestore-vision
   ライフストア構想
   ───────────────────────────────────────────── */
export function DrugstoreLifestoreVisionDiagram() {
  const pillars = [
    { icon: "💊", label: "調剤薬局", detail: "全店展開で「病院帰りにそのまま」" },
    { icon: "🥬", label: "食品強化", detail: "生鮮・惣菜でフードドラッグモデルへ" },
    { icon: "💄", label: "美容", detail: "コスメ・スキンケアのワンストップ" },
    { icon: "🏃", label: "セルフメディケーション", detail: "薬剤師による健康相談・OTC薬拡充" },
  ];

  return (
    <Card title="「ライフストア」構想——薬・食・美・健康のワンストップ拠点">
      <div className="grid grid-cols-2 gap-3">
        {pillars.map((p, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border bg-foreground/[0.02]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[20px]">{p.icon}</span>
              <span className="text-[13px] font-bold text-foreground/85">{p.label}</span>
            </div>
            <p className="text-[11px] text-foreground/60">{p.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ background: `${TEAL}10`, borderLeft: `3px solid ${TEAL}40` }}>
        <p className="text-[12px] text-foreground/70">
          <span className="font-bold" style={{ color: TEAL }}>目標：</span>
          地域の「医療・健康・生活」のすべてを一か所でカバーする社会インフラ拠点
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   drugstore-matsukiyo-strategy
   マツキヨの差別化戦略
   ───────────────────────────────────────────── */
export function DrugstoreMatsukiyoStrategyDiagram() {
  const stores = [
    { region: "タイ", count: 28 },
    { region: "台湾", count: 23 },
    { region: "香港", count: 10 },
    { region: "ベトナム", count: 8 },
    { region: "グアム", count: 1 },
  ];
  const maxCount = 28;

  return (
    <Card title="マツキヨコカラ 海外展開（2024年6月末時点・計70店）">
      <div className="space-y-2 mb-5">
        {stores.map((s, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-0.5">
              <span className="text-foreground/70 w-14">{s.region}</span>
              <span className="font-bold text-foreground/80">{s.count}店</span>
            </div>
            <div className="h-2.5 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(s.count / maxCount) * 100}%`,
                  background: `linear-gradient(90deg, ${AMBER}80, ${AMBER})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border border-brief-border">
        <p className="text-[11px] text-foreground/65">
          <span className="font-bold text-foreground/80">戦略：</span>
          日本ブランドの化粧品・サプリへの信頼性を活かした「プレミアム路線」。国内規模劣勢を認め、インバウンド×海外で差別化。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   drugstore-pharmacy-competition
   調剤薬局業界への影響
   ───────────────────────────────────────────── */
export function DrugstorePharmacyCompetitionDiagram() {
  return (
    <Card title="独立系調剤薬局への影響シミュレーション">
      <div className="space-y-3 mb-5">
        <div className="p-3 rounded-xl border" style={{ borderColor: `${RED}30`, background: `${RED}06` }}>
          <p className="text-[13px] font-bold text-foreground/85 mb-2">2024年時点</p>
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-foreground/65">独立系調剤薬局</span>
            <span className="font-bold text-foreground/80">約5.8万店</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-[11px] text-foreground/40 flex items-center gap-1">
            <span>ドラッグストアの全店調剤展開</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </div>
        </div>
        <div className="p-3 rounded-xl border" style={{ borderColor: `${AMBER}30`, background: `${AMBER}06` }}>
          <p className="text-[13px] font-bold text-foreground/85 mb-2">2030年予測</p>
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-foreground/65">廃業・統合見込み</span>
            <span className="font-bold" style={{ color: AMBER }}>20〜30%</span>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <p className="text-[11px] font-bold text-foreground/55 mb-2">薬剤師争奪戦の構図</p>
        {[
          `国内薬剤師総数：約32万人`,
          "ドラッグストア大手が賃金・福利厚生で優遇条件を提示",
          "独立系から大手ドラッグストアへの移籍増加",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: PURPLE }} />
            <p className="text-[12px] text-foreground/60">{s}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   drugstore-aeon-strategy
   イオンの生活インフラ企業化
   ───────────────────────────────────────────── */
export function DrugstoreAeonStrategyDiagram() {
  const components = [
    { category: "食品・生活用品", brand: "イオン・マックスバリュ・ダイエー", scale: "4,000店超", color: TEAL },
    { category: "ドラッグ・調剤", brand: "ウエルシア・ツルハ統合体", scale: "5,659店", color: AMBER },
    { category: "金融", brand: "イオン銀行・イオンフィナンシャル", scale: "クレジット・保険", color: PURPLE },
    { category: "商業施設", brand: "イオンモール", scale: "170施設超", color: "#3b82f6" },
  ];

  return (
    <Card title="イオン「生活インフラ帝国」の構成要素">
      <div className="space-y-2">
        {components.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-brief-border">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-foreground/85">{c.category}</span>
                <span className="text-[11px] font-bold" style={{ color: c.color }}>{c.scale}</span>
              </div>
              <p className="text-[11px] text-foreground/50">{c.brand}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ background: `${TEAL}08`, borderLeft: `3px solid ${TEAL}30` }}>
        <p className="text-[12px] text-foreground/65">
          消費者の生活の「あらゆるシーン」を一つの企業グループが捕捉する「生活インフラ企業」への転換
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   drugstore-strategic-view
   業態の未来
   ───────────────────────────────────────────── */
export function DrugstoreStrategicViewDiagram() {
  const competitors = [
    { function: "調剤機能", rivals: "病院・独立系薬局" },
    { function: "食品機能", rivals: "コンビニ・スーパー" },
    { function: "美容機能", rivals: "百貨店コスメ・EC" },
    { function: "健康相談機能", rivals: "フィットネス・医療機関" },
  ];

  return (
    <Card title="「ライフストア」化後の多面的競合関係">
      <div className="space-y-2 mb-4">
        {competitors.map((c, i) => (
          <div key={i} className="flex items-center gap-3 text-[12px]">
            <span className="w-28 font-bold text-foreground/80 flex-shrink-0">{c.function}</span>
            <div className="flex items-center gap-1.5 text-foreground/40">
              <span>vs</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </div>
            <span className="text-foreground/65">{c.rivals}</span>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border border-brief-border">
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold text-foreground/80">結論：</span>
          中規模ドラッグストアチェーンに残された時間は少ない。マツキヨの「海外×インバウンド」路線は国内正面対決回避の現実認識。
        </p>
      </div>
    </Card>
  );
}
