"use client";

/* ─────────────────────────────────────────────
   Retail Market Overview Stats
   ───────────────────────────────────────────── */
export function RetailMarketOverviewDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#78716c]">167兆</div>
        <div className="text-[10px] text-foreground/50 mt-1">小売業販売額（2024年）</div>
        <div className="text-[9px] text-foreground/35">前年比+2.5%</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">15.2兆</div>
        <div className="text-[10px] text-foreground/50 mt-1">EC市場（物販系）</div>
        <div className="text-[9px] text-foreground/35">EC化率 9.78%</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">+6.9%</div>
        <div className="text-[10px] text-foreground/50 mt-1">ドラッグストア成長率</div>
        <div className="text-[9px] text-foreground/35">全業態トップ</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#ef4444]">60万人</div>
        <div className="text-[10px] text-foreground/50 mt-1">2030年の人材不足</div>
        <div className="text-[9px] text-foreground/35">卸売・小売業界</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CVS Business Model Diagram
   ───────────────────────────────────────────── */
export function CvsBusinessModelDiagram() {
  const chains = [
    { name: "セブン-イレブン", sales: "5兆3,697億円", parent: "セブン&アイHD", color: "#ef4444", note: "国内最多店舗" },
    { name: "ファミリーマート", sales: "過去最高利益", parent: "伊藤忠商事（100%）", color: "#10b981", note: "AI発注導入" },
    { name: "ローソン", sales: "非上場化", parent: "三菱商事 × KDDI", color: "#3b82f6", note: "デジタル融合" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        コンビニ3社の経営構造
      </div>
      <div className="space-y-2">
        {chains.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50">{c.parent}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs font-semibold tabular-nums">{c.sales}</div>
              <div className="text-[9px] text-foreground/40">{c.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1">FCモデルの収益構造</div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "本部", detail: "ブランド・商品開発・物流", icon: "🏢" },
            { label: "ロイヤリティ", detail: "粗利の50-60%", icon: "💰" },
            { label: "加盟店", detail: "店舗運営・販売", icon: "🏪" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-xl">{s.icon}</div>
                <div className="text-[10px] font-semibold">{s.label}</div>
                <div className="text-[9px] text-foreground/40">{s.detail}</div>
              </div>
              {i < 2 && <div className="text-foreground/20 text-sm">{"\u2192"}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Financials Comparison
   ───────────────────────────────────────────── */
export function RetailFinancialsDiagram() {
  const companies = [
    { name: "イオン", sales: 101348, unit: "億円", yoy: "+6.1%", color: "#8b5cf6" },
    { name: "セブン-イレブン", sales: 53697, unit: "億円", yoy: "+0.5%", color: "#ef4444" },
    { name: "ファストリテイリング", sales: 34005, unit: "億円", yoy: "+9.6%", color: "#f59e0b" },
    { name: "ウエルシア+ツルハ", sales: 23124, unit: "億円", yoy: "統合", color: "#3b82f6" },
    { name: "高島屋", sales: 5750, unit: "億円", yoy: "--", color: "#78716c" },
    { name: "三越伊勢丹HD", sales: 5555, unit: "億円", yoy: "+5.9%", color: "#78716c" },
  ];

  const maxSales = 101348;

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        主要小売企業の売上規模
      </div>
      <div className="space-y-2.5">
        {companies.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[11px] font-semibold" style={{ color: c.color }}>{c.name}</span>
              <span className="text-[10px] text-foreground/45 tabular-nums">
                {c.sales.toLocaleString()}{c.unit} ({c.yoy})
              </span>
            </div>
            <div className="h-4 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max((c.sales / maxSales) * 100, 5)}%`,
                  backgroundColor: `${c.color}25`,
                  borderRight: `3px solid ${c.color}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ 各社直近決算期の連結売上高／営業収益。セブン-イレブンはチェーン全店売上高。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Growth Sectors Diagram
   ───────────────────────────────────────────── */
export function GrowthSectorsDiagram() {
  const sectors = [
    { name: "ドラッグストア", growth: 6.9, color: "#3b82f6" },
    { name: "百貨店", growth: 6.3, color: "#8b5cf6" },
    { name: "スーパー", growth: 2.8, color: "#10b981" },
    { name: "小売業全体", growth: 2.5, color: "#78716c" },
    { name: "ホームセンター", growth: 1.7, color: "#f59e0b" },
    { name: "コンビニ", growth: 1.2, color: "#ef4444" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        業態別販売額 成長率（2024年 前年比）
      </div>
      <div className="space-y-2">
        {sectors.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="w-28 text-xs text-foreground/60 text-right flex-shrink-0">{s.name}</div>
            <div className="flex-1 h-5 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${(s.growth / 8) * 100}%`,
                  backgroundColor: `${s.color}20`,
                  borderRight: `3px solid ${s.color}`,
                }}
              >
                <span className="text-[10px] font-bold" style={{ color: s.color }}>
                  +{s.growth}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35">
        ※ 経産省 商業動態統計に基づく（2024年通年）。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EC Landscape Diagram
   ───────────────────────────────────────────── */
export function EcLandscapeDiagram() {
  const categories = [
    { name: "書籍・映像・音楽", rate: 56.45, color: "#3b82f6" },
    { name: "生活家電", rate: 43.03, color: "#8b5cf6" },
    { name: "生活雑貨", rate: 32.58, color: "#f59e0b" },
    { name: "衣類", rate: 23.38, color: "#10b981" },
    { name: "化粧品・医薬品", rate: 8.82, color: "#78716c" },
    { name: "食品・飲料", rate: 4.52, color: "#ef4444" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        分野別 EC化率（2024年）
      </div>
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-32 text-[11px] text-foreground/60 text-right flex-shrink-0">{c.name}</div>
            <div className="flex-1 h-5 bg-foreground/[0.04] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full flex items-center justify-end pr-2"
                style={{
                  width: `${(c.rate / 60) * 100}%`,
                  backgroundColor: `${c.color}20`,
                  borderRight: `3px solid ${c.color}`,
                }}
              >
                <span className="text-[10px] font-bold" style={{ color: c.color }}>
                  {c.rate}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#10b981]">6.3兆</div>
          <div className="text-[9px] text-foreground/50">楽天 EC流通総額</div>
        </div>
        <div className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#f59e0b]">4.0兆</div>
          <div className="text-[9px] text-foreground/50">Amazon Japan</div>
        </div>
        <div className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#3b82f6]">5,029億</div>
          <div className="text-[9px] text-foreground/50">ZOZO 取扱高</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Challenges Diagram
   ───────────────────────────────────────────── */
export function RetailChallengesDiagram() {
  const challenges = [
    { name: "人手不足", desc: "2030年に卸売・小売で60万人不足", severity: "critical", color: "#ef4444" },
    { name: "物流問題", desc: "ドライバー不足・時間外規制の構造的影響", severity: "high", color: "#f59e0b" },
    { name: "DXの遅れ", desc: "IT人材不足・レガシーシステム・ROI課題", severity: "high", color: "#f59e0b" },
    { name: "人口減少", desc: "年平均-0.68%減少、高齢化による消費構造変化", severity: "critical", color: "#ef4444" },
    { name: "コスト上昇", desc: "原材料・エネルギー・人件費の複合的上昇", severity: "medium", color: "#3b82f6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        日本の小売業が直面する構造的課題
      </div>
      <div className="space-y-2">
        {challenges.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50">{c.desc}</div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{
                backgroundColor: `${c.color}15`,
                color: c.color,
              }}
            >
              {c.severity === "critical" ? "深刻" : c.severity === "high" ? "重大" : "注意"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail Innovation Diagram
   ───────────────────────────────────────────── */
export function RetailInnovationDiagram() {
  const innovations = [
    { name: "AI発注・需要予測", detail: "ファミマ500店舗でAIレコメンド発注", impact: "廃棄20%削減", color: "#8b5cf6" },
    { name: "リテールメディア", detail: "2025年市場規模6,066億円（+29%）", impact: "2035年に1兆円", color: "#3b82f6" },
    { name: "OMO", detail: "EC事業者の8割が注目、54%が実施中", impact: "購買体験の融合", color: "#10b981" },
    { name: "フードロス対策", detail: "年間464万トン → 2030年60%削減目標", impact: "AI+涙目シール", color: "#f59e0b" },
    { name: "無人店舗・省人化", detail: "ウォークスルー型・セルフレジ型", impact: "人手不足対応", color: "#ef4444" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売イノベーション最前線（2025-2026）
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {innovations.map((inn) => (
          <div
            key={inn.name}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${inn.color}06`, borderLeft: `3px solid ${inn.color}` }}
          >
            <div className="text-xs font-bold" style={{ color: inn.color }}>{inn.name}</div>
            <div className="text-[10px] text-foreground/50 mt-0.5">{inn.detail}</div>
            <div className="text-[9px] text-foreground/40 mt-1 font-medium">{inn.impact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Shosha Retail Strategy Diagram
   ───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   CVS Big 3 Overview Diagram
   ───────────────────────────────────────────── */
export function CvsBig3OverviewDiagram() {
  const companies = [
    { name: "セブン-イレブン", stores: "21,722", sales: "5兆3,697億円", dailySales: "67.5万円", parent: "セブン&アイHD", color: "#ef4444" },
    { name: "ファミリーマート", stores: "16,415", sales: "非公開（過去最高益）", dailySales: "約53万円", parent: "伊藤忠商事", color: "#10b981" },
    { name: "ローソン", stores: "14,697", sales: "非上場化", dailySales: "約49万円", parent: "三菱商事×KDDI", color: "#3b82f6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        コンビニ大手3社 — 基本データ
      </div>
      <div className="space-y-2">
        {companies.map((c) => (
          <div
            key={c.name}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50">{c.parent}</div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div>
                <div className="text-[9px] text-foreground/40">店舗数</div>
                <div className="text-xs font-semibold tabular-nums">{c.stores}</div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40">売上規模</div>
                <div className="text-xs font-semibold">{c.sales}</div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40">日販</div>
                <div className="text-xs font-semibold">{c.dailySales}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-lg font-bold text-[#78716c]">市場シェア 約93%</div>
        <div className="text-[9px] text-foreground/40">3社合計 約5.3万店 / 全国 約5.6万店</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Seven-Eleven Strategy Diagram
   ───────────────────────────────────────────── */
export function CvsSevenStrategyDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        セブン-イレブンの強みと課題
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-[#ef4444]/5 border border-[#ef4444]/15">
          <div className="text-xs font-bold text-[#ef4444] mb-2">強み</div>
          <div className="space-y-1.5">
            {["PB「セブンプレミアム」1.5兆円", "日販67.5万円で業界首位", "海外8.5万店のネットワーク", "チームMDによる商品開発力"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#ef4444] text-[10px] mt-0.5">{"\u25B2"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#78716c]/5 border border-[#78716c]/15">
          <div className="text-xs font-bold text-[#78716c] mb-2">課題</div>
          <div className="space-y-1.5">
            {["2024年度 減収減益", "買収提案への対応", "北米事業の収益性", "デジタル戦略の出遅れ"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#78716c] text-[10px] mt-0.5">{"\u25BC"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FamilyMart Strategy Diagram
   ───────────────────────────────────────────── */
export function CvsFamimaStrategyDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        ファミリーマートの成長戦略
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "伊藤忠シナジー", value: "川上→川下統合", color: "#10b981" },
          { label: "AI発注", value: "全店展開済", color: "#8b5cf6" },
          { label: "ファミペイ", value: "2,000万人超", color: "#3b82f6" },
          { label: "リテールメディア", value: "新収益の柱", color: "#f59e0b" },
        ].map((item) => (
          <div key={item.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-lg font-bold" style={{ color: item.color }}>{item.value}</div>
            <div className="text-[10px] text-foreground/50 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">伊藤忠商事の完全子会社化による変化</div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "原材料調達", desc: "グローバル調達網" },
            { label: "商品開発", desc: "PB「ファミマル」" },
            { label: "デジタル", desc: "データワン連携" },
            { label: "収益多角化", desc: "Fit&GO・ランドリー" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-[10px] font-semibold text-[#10b981]">{s.label}</div>
                <div className="text-[9px] text-foreground/40">{s.desc}</div>
              </div>
              {i < 3 && <div className="text-foreground/20 text-sm">{"\u2192"}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Lawson Strategy Diagram
   ───────────────────────────────────────────── */
export function CvsLawsonStrategyDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        ローソンの新体制 — 三菱商事×KDDI
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-sm font-bold text-[#3b82f6] mb-1">KDDI（50%）</div>
          <div className="space-y-1.5">
            {["Ponta 1億人超の顧客基盤", "auデータ×購買データ融合", "5G通信インフラ活用", "デジタルマーケティング"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/15">
          <div className="text-sm font-bold text-[#8b5cf6] mb-1">三菱商事（50%）</div>
          <div className="space-y-1.5">
            {["グローバル調達ネットワーク", "食品・物流の専門知見", "海外展開の推進力", "長期投資の資金力"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#8b5cf6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "ヘルスケア", value: "調剤350店", color: "#10b981" },
          { label: "海外", value: "約7,000店", color: "#f59e0b" },
          { label: "非上場化", value: "長期投資可能", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-sm font-bold" style={{ color: item.color }}>{item.value}</div>
            <div className="text-[9px] text-foreground/50">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CVS Big 3 Comparison Diagram
   ───────────────────────────────────────────── */
export function CvsBig3ComparisonDiagram() {
  const metrics = [
    { metric: "日販", seven: "67.5万円", famima: "約53万円", lawson: "約49万円" },
    { metric: "PB", seven: "セブンプレミアム", famima: "ファミマル", lawson: "ローソンセレクト" },
    { metric: "デジタル", seven: "POS活用", famima: "AI発注先行", lawson: "通信×小売融合" },
    { metric: "海外店舗", seven: "約8.5万店", famima: "約8,000店", lawson: "約7,000店" },
    { metric: "差別化軸", seven: "商品力", famima: "総合商社パワー", lawson: "テクノロジー" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        3社比較マトリクス
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium"></th>
              <th className="text-center py-2 px-2 font-bold text-[#ef4444]">セブン</th>
              <th className="text-center py-2 px-2 font-bold text-[#10b981]">ファミマ</th>
              <th className="text-center py-2 px-2 font-bold text-[#3b82f6]">ローソン</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((row) => (
              <tr key={row.metric} className="border-b border-brief-border/50">
                <td className="py-2 pr-3 text-foreground/55 font-medium">{row.metric}</td>
                <td className="py-2 px-2 text-center text-foreground/70">{row.seven}</td>
                <td className="py-2 px-2 text-center text-foreground/70">{row.famima}</td>
                <td className="py-2 px-2 text-center text-foreground/70">{row.lawson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Franchise Model Diagram
   ───────────────────────────────────────────── */
export function CvsFranchiseModelDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        フランチャイズモデルの構造
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {[
          { name: "セブン", royalty: "43〜76%", color: "#ef4444" },
          { name: "ファミマ", royalty: "49〜69%", color: "#10b981" },
          { name: "ローソン", royalty: "45〜70%", color: "#3b82f6" },
        ].map((c) => (
          <div key={c.name} className="p-3 rounded-lg text-center" style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}>
            <div className="text-xs font-bold" style={{ color: c.color }}>{c.name}</div>
            <div className="text-lg font-bold text-foreground/70 mt-1">{c.royalty}</div>
            <div className="text-[9px] text-foreground/40">粗利ロイヤリティ</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">FCモデルの課題</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "人手不足", desc: "24時間維持困難" },
            { label: "収益圧迫", desc: "最低賃金上昇" },
            { label: "オーナー高齢化", desc: "後継者不足" },
            { label: "モデル変革", desc: "省人化・直営化" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[10px] font-semibold text-[#f59e0b]">{item.label}</div>
              <div className="text-[9px] text-foreground/40">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CVS Big 3 Future Diagram
   ───────────────────────────────────────────── */
export function CvsBig3FutureDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        3社の未来戦略
      </div>
      <div className="space-y-3">
        {[
          { name: "セブン-イレブン", strategy: "「食」の高付加価値化 + 7NOW全国展開", keyword: "商品力深化", color: "#ef4444" },
          { name: "ファミリーマート", strategy: "リテールメディア拡大 + FinTech参入", keyword: "プラットフォーム", color: "#10b981" },
          { name: "ローソン", strategy: "テクノロジーコンビニ + ヘルスケア500店", keyword: "社会インフラ", color: "#3b82f6" },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50 mt-0.5">{c.strategy}</div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ backgroundColor: `${c.color}15`, color: c.color }}
            >
              {c.keyword}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-[10px] font-medium text-foreground/55 mb-1">共通テーマ</div>
        <div className="text-sm font-bold text-[#78716c]">「モノを売る店」→「社会のOS」へ</div>
        <div className="text-[9px] text-foreground/40">決済・物流・ヘルスケア・行政サービスの集約拠点</div>
      </div>
    </div>
  );
}

export function ShoshaRetailStrategyDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        商社のコンビニ戦略 — 2つのアプローチ
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
          <div className="text-sm font-bold text-[#10b981] mb-1">伊藤忠 × ファミマ</div>
          <div className="text-[10px] text-foreground/50 mb-2">自前主義 — 完全子会社化</div>
          <div className="space-y-1.5">
            {["消費者データの自社分析", "AI発注システム導入", "グローバル調達の最適化", "事業利益：過去最高更新"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#10b981] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-sm font-bold text-[#3b82f6] mb-1">三菱商事 × ローソン × KDDI</div>
          <div className="text-[10px] text-foreground/50 mb-2">協業型 — 折半共同経営</div>
          <div className="space-y-1.5">
            {["通信×小売のデジタル融合", "非上場化で長期投資", "「未来のコンビニ」実験", "データドリブン経営"].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1">商社がリテールに投資する3つの狙い</div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "バリューチェーン統合", desc: "川上→川下の一気通貫" },
            { label: "安定キャッシュフロー", desc: "資源価格に左右されない" },
            { label: "消費者データ取得", desc: "日5,000万人の購買データ" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[10px] font-semibold text-[#78716c]">{item.label}</div>
              <div className="text-[9px] text-foreground/40">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
