"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Retail Market Overview Stats
   ───────────────────────────────────────────── */
export function RetailMarketOverviewDiagram() {
  return (
    <div role="img" aria-label="Retail market overview statistics" className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#78716c]">167兆</div>
        <div className="text-[10px] text-foreground/50 mt-1"><T ja="小売業販売額（2024年）" en="Retail sales (2024)" /></div>
        <div className="text-[9px] text-foreground/35"><T ja="前年比+2.5%" en="+2.5% YoY" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">15.2兆</div>
        <div className="text-[10px] text-foreground/50 mt-1"><T ja="EC市場（物販系）" en="E-commerce market (goods)" /></div>
        <div className="text-[9px] text-foreground/35"><T ja="EC化率 9.78%" en="E-commerce ratio: 9.78%" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">+6.9%</div>
        <div className="text-[10px] text-foreground/50 mt-1"><T ja="ドラッグストア成長率" en="Drug store growth rate" /></div>
        <div className="text-[9px] text-foreground/35"><T ja="全業態トップ" en="Top of all retail formats" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#ef4444]">60万人</div>
        <div className="text-[10px] text-foreground/50 mt-1"><T ja="2030年の人材不足" en="Labor shortage by 2030" /></div>
        <div className="text-[9px] text-foreground/35"><T ja="卸売・小売業界" en="Wholesale & retail sector" /></div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CVS Business Model Diagram
   ───────────────────────────────────────────── */
export function CvsBusinessModelDiagram() {
  const chains = [
    { name: "セブン-イレブン", nameEn: "Seven-Eleven", sales: "5兆3,697億円", salesEn: "¥5.37T", parent: "セブン&アイHD", parentEn: "Seven & i HD", color: "#ef4444", note: "国内最多店舗", noteEn: "Most stores in Japan" },
    { name: "ファミリーマート", nameEn: "FamilyMart", sales: "過去最高利益", salesEn: "Record profit", parent: "伊藤忠商事（100%）", parentEn: "Itochu Corp. (100%)", color: "#10b981", note: "AI発注導入", noteEn: "AI ordering deployed" },
    { name: "ローソン", nameEn: "Lawson", sales: "非上場化", salesEn: "Delisted", parent: "三菱商事 × KDDI", parentEn: "Mitsubishi Corp. × KDDI", color: "#3b82f6", note: "デジタル融合", noteEn: "Digital convergence" },
  ];

  return (
    <div role="img" aria-label="Convenience store business model and franchise structure" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="コンビニ3社の経営構造" en="Convenience Store Big 3 — Business Structure" />
      </div>
      <div className="space-y-2">
        {chains.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50"><T ja={c.parent} en={c.parentEn} /></div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs font-semibold tabular-nums"><T ja={c.sales} en={c.salesEn} /></div>
              <div className="text-[9px] text-foreground/40"><T ja={c.note} en={c.noteEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1"><T ja="FCモデルの収益構造" en="Franchise Model Revenue Structure" /></div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "本部", labelEn: "HQ", detail: "ブランド・商品開発・物流", detailEn: "Brand, product development, logistics", icon: "🏢" },
            { label: "ロイヤリティ", labelEn: "Royalty", detail: "粗利の50-60%", detailEn: "50–60% of gross profit", icon: "💰" },
            { label: "加盟店", labelEn: "Franchisee", detail: "店舗運営・販売", detailEn: "Store operations & sales", icon: "🏪" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-xl">{s.icon}</div>
                <div className="text-[10px] font-semibold"><T ja={s.label} en={s.labelEn} /></div>
                <div className="text-[9px] text-foreground/40"><T ja={s.detail} en={s.detailEn} /></div>
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
    { name: "イオン", nameEn: "AEON", sales: 101348, unit: "億円", yoy: "+6.1%", color: "#8b5cf6" },
    { name: "セブン-イレブン", nameEn: "Seven-Eleven", sales: 53697, unit: "億円", yoy: "+0.5%", color: "#ef4444" },
    { name: "ファストリテイリング", nameEn: "Fast Retailing", sales: 34005, unit: "億円", yoy: "+9.6%", color: "#f59e0b" },
    { name: "ウエルシア+ツルハ", nameEn: "Welcia+Tsuruha", sales: 23124, unit: "億円", yoy: "統合", color: "#3b82f6" },
    { name: "高島屋", nameEn: "Takashimaya", sales: 5750, unit: "億円", yoy: "--", color: "#78716c" },
    { name: "三越伊勢丹HD", nameEn: "Isetan Mitsukoshi HD", sales: 5555, unit: "億円", yoy: "+5.9%", color: "#78716c" },
  ];

  const maxSales = 101348;

  return (
    <div role="img" aria-label="Revenue scale of major retailers in Japan" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="主要小売企業の売上規模" en="Revenue Scale of Major Retailers" />
      </div>
      <div className="space-y-2.5">
        {companies.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[11px] font-semibold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></span>
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
        <T ja="※ 各社直近決算期の連結売上高／営業収益。セブン-イレブンはチェーン全店売上高。" en="※ Consolidated revenue / operating revenue from each company's most recent fiscal year. Seven-Eleven figure is chain-wide total sales." />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Growth Sectors Diagram
   ───────────────────────────────────────────── */
export function GrowthSectorsDiagram() {
  const sectors = [
    { name: "ドラッグストア", nameEn: "Drug Stores", growth: 6.9, color: "#3b82f6" },
    { name: "百貨店", nameEn: "Department Stores", growth: 6.3, color: "#8b5cf6" },
    { name: "スーパー", nameEn: "Supermarkets", growth: 2.8, color: "#10b981" },
    { name: "小売業全体", nameEn: "Retail Overall", growth: 2.5, color: "#78716c" },
    { name: "ホームセンター", nameEn: "Home Centers", growth: 1.7, color: "#f59e0b" },
    { name: "コンビニ", nameEn: "Convenience Stores", growth: 1.2, color: "#ef4444" },
  ];

  return (
    <div role="img" aria-label="Retail growth sectors by format 2024" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="業態別販売額 成長率（2024年 前年比）" en="Retail Format Growth Rates (2024 YoY)" />
      </div>
      <div className="space-y-2">
        {sectors.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="w-28 text-xs text-foreground/60 text-right flex-shrink-0"><T ja={s.name} en={s.nameEn} /></div>
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
        <T ja="※ 経産省 商業動態統計に基づく（2024年通年）。" en="※ Based on METI Monthly Survey of Commerce (full year 2024)." />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EC Landscape Diagram
   ───────────────────────────────────────────── */
export function EcLandscapeDiagram() {
  const categories = [
    { name: "書籍・映像・音楽", nameEn: "Books / Video / Music", rate: 56.45, color: "#3b82f6" },
    { name: "生活家電", nameEn: "Consumer Electronics", rate: 43.03, color: "#8b5cf6" },
    { name: "生活雑貨", nameEn: "Household Goods", rate: 32.58, color: "#f59e0b" },
    { name: "衣類", nameEn: "Apparel", rate: 23.38, color: "#10b981" },
    { name: "化粧品・医薬品", nameEn: "Cosmetics / Pharma", rate: 8.82, color: "#78716c" },
    { name: "食品・飲料", nameEn: "Food & Beverage", rate: 4.52, color: "#ef4444" },
  ];

  return (
    <div role="img" aria-label="E-commerce penetration by retail category 2024" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="分野別 EC化率（2024年）" en="E-commerce Penetration by Category (2024)" />
      </div>
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-32 text-[11px] text-foreground/60 text-right flex-shrink-0"><T ja={c.name} en={c.nameEn} /></div>
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
          <div className="text-[9px] text-foreground/50"><T ja="楽天 EC流通総額" en="Rakuten GMV" /></div>
        </div>
        <div className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#f59e0b]">4.0兆</div>
          <div className="text-[9px] text-foreground/50">Amazon Japan</div>
        </div>
        <div className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#3b82f6]">5,029億</div>
          <div className="text-[9px] text-foreground/50"><T ja="ZOZO 取扱高" en="ZOZO GMV" /></div>
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
    { name: "人手不足", nameEn: "Labor Shortage", desc: "2030年に卸売・小売で60万人不足", descEn: "600K worker shortfall in wholesale & retail by 2030", severity: "critical", color: "#ef4444" },
    { name: "物流問題", nameEn: "Logistics Crisis", desc: "ドライバー不足・時間外規制の構造的影響", descEn: "Structural impact of driver shortage and overtime caps", severity: "high", color: "#f59e0b" },
    { name: "DXの遅れ", nameEn: "Digital Lag", desc: "IT人材不足・レガシーシステム・ROI課題", descEn: "IT talent shortage, legacy systems, ROI challenges", severity: "high", color: "#f59e0b" },
    { name: "人口減少", nameEn: "Population Decline", desc: "年平均-0.68%減少、高齢化による消費構造変化", descEn: "Avg. −0.68%/yr decline; aging shifts consumption patterns", severity: "critical", color: "#ef4444" },
    { name: "コスト上昇", nameEn: "Rising Costs", desc: "原材料・エネルギー・人件費の複合的上昇", descEn: "Combined rise in raw materials, energy, and labor costs", severity: "medium", color: "#3b82f6" },
  ];

  return (
    <div role="img" aria-label="Structural challenges facing Japan's retail sector" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="日本の小売業が直面する構造的課題" en="Structural Challenges Facing Japan's Retail Sector" />
      </div>
      <div className="space-y-2">
        {challenges.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50"><T ja={c.desc} en={c.descEn} /></div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{
                backgroundColor: `${c.color}15`,
                color: c.color,
              }}
            >
              {c.severity === "critical"
                ? <T ja="深刻" en="Critical" />
                : c.severity === "high"
                  ? <T ja="重大" en="High" />
                  : <T ja="注意" en="Watch" />}
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
    { name: "AI発注・需要予測", nameEn: "AI Ordering & Demand Forecasting", detail: "ファミマ500店舗でAIレコメンド発注", detailEn: "AI recommend-ordering at 500 FamilyMart stores", impact: "廃棄20%削減", impactEn: "20% waste reduction", color: "#8b5cf6" },
    { name: "リテールメディア", nameEn: "Retail Media", detail: "2025年市場規模6,066億円（+29%）", detailEn: "Market size ¥606.6B in 2025 (+29%)", impact: "2035年に1兆円", impactEn: "¥1T target by 2035", color: "#3b82f6" },
    { name: "OMO", nameEn: "OMO (Online-Merge-Offline)", detail: "EC事業者の8割が注目、54%が実施中", detailEn: "80% of e-commerce players focused; 54% already implementing", impact: "購買体験の融合", impactEn: "Unified shopping experience", color: "#10b981" },
    { name: "フードロス対策", nameEn: "Food Loss Reduction", detail: "年間464万トン → 2030年60%削減目標", detailEn: "4.64M tons/yr → 60% reduction target by 2030", impact: "AI+涙目シール", impactEn: "AI + markdown stickers", color: "#f59e0b" },
    { name: "無人店舗・省人化", nameEn: "Unmanned Stores & Labor Saving", detail: "ウォークスルー型・セルフレジ型", detailEn: "Walk-through and self-checkout formats", impact: "人手不足対応", impactEn: "Addressing labor shortage", color: "#ef4444" },
  ];

  return (
    <div role="img" aria-label="Retail innovation frontline 2025–2026" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="小売イノベーション最前線（2025-2026）" en="Retail Innovation Frontline (2025–2026)" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {innovations.map((inn) => (
          <div
            key={inn.name}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${inn.color}06`, borderLeft: `3px solid ${inn.color}` }}
          >
            <div className="text-xs font-bold" style={{ color: inn.color }}><T ja={inn.name} en={inn.nameEn} /></div>
            <div className="text-[10px] text-foreground/50 mt-0.5"><T ja={inn.detail} en={inn.detailEn} /></div>
            <div className="text-[9px] text-foreground/40 mt-1 font-medium"><T ja={inn.impact} en={inn.impactEn} /></div>
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
    { name: "セブン-イレブン", nameEn: "Seven-Eleven", stores: "21,722", sales: "5兆3,697億円", salesEn: "¥5.37T", dailySales: "67.5万円", dailySalesEn: "¥675K/day", parent: "セブン&アイHD", parentEn: "Seven & i HD", color: "#ef4444" },
    { name: "ファミリーマート", nameEn: "FamilyMart", stores: "16,415", sales: "非公開（過去最高益）", salesEn: "Undisclosed (record profit)", dailySales: "約53万円", dailySalesEn: "~¥530K/day", parent: "伊藤忠商事", parentEn: "Itochu Corp.", color: "#10b981" },
    { name: "ローソン", nameEn: "Lawson", stores: "14,697", sales: "非上場化", salesEn: "Delisted", dailySales: "約49万円", dailySalesEn: "~¥490K/day", parent: "三菱商事×KDDI", parentEn: "Mitsubishi Corp. × KDDI", color: "#3b82f6" },
  ];

  return (
    <div role="img" aria-label="Convenience store big three overview and key metrics" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="コンビニ大手3社 — 基本データ" en="Convenience Store Big 3 — Key Metrics" />
      </div>
      <div className="space-y-2">
        {companies.map((c) => (
          <div
            key={c.name}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50"><T ja={c.parent} en={c.parentEn} /></div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div>
                <div className="text-[9px] text-foreground/40"><T ja="店舗数" en="Stores" /></div>
                <div className="text-xs font-semibold tabular-nums">{c.stores}</div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40"><T ja="売上規模" en="Revenue" /></div>
                <div className="text-xs font-semibold"><T ja={c.sales} en={c.salesEn} /></div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40"><T ja="日販" en="Daily Sales" /></div>
                <div className="text-xs font-semibold"><T ja={c.dailySales} en={c.dailySalesEn} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-lg font-bold text-[#78716c]"><T ja="市場シェア 約93%" en="~93% Market Share" /></div>
        <div className="text-[9px] text-foreground/40"><T ja="3社合計 約5.3万店 / 全国 約5.6万店" en="Big 3 total: ~53,000 stores out of ~56,000 nationwide" /></div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Seven-Eleven Strategy Diagram
   ───────────────────────────────────────────── */
export function CvsSevenStrategyDiagram() {
  const strengths = [
    { ja: "PB「セブンプレミアム」1.5兆円", en: `PB "Seven Premium" ¥1.5T` },
    { ja: "日販67.5万円で業界首位", en: "Industry-leading daily sales of ¥675K" },
    { ja: "海外8.5万店のネットワーク", en: "Network of 85,000 overseas stores" },
    { ja: "チームMDによる商品開発力", en: "Product development via Team MD approach" },
  ];
  const weaknesses = [
    { ja: "2024年度 減収減益", en: "Revenue and profit decline in FY2024" },
    { ja: "買収提案への対応", en: "Responding to acquisition bids" },
    { ja: "北米事業の収益性", en: "Profitability of North American operations" },
    { ja: "デジタル戦略の出遅れ", en: "Lagging digital strategy" },
  ];

  return (
    <div role="img" aria-label="Seven-Eleven strengths and strategic challenges" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="セブン-イレブンの強みと課題" en="Seven-Eleven: Strengths & Challenges" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-[#ef4444]/5 border border-[#ef4444]/15">
          <div className="text-xs font-bold text-[#ef4444] mb-2"><T ja="強み" en="Strengths" /></div>
          <div className="space-y-1.5">
            {strengths.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#ef4444] text-[10px] mt-0.5">{"\u25B2"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#78716c]/5 border border-[#78716c]/15">
          <div className="text-xs font-bold text-[#78716c] mb-2"><T ja="課題" en="Challenges" /></div>
          <div className="space-y-1.5">
            {weaknesses.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#78716c] text-[10px] mt-0.5">{"\u25BC"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
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
    <div role="img" aria-label="FamilyMart growth strategy and Itochu synergies" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="ファミリーマートの成長戦略" en="FamilyMart Growth Strategy" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "伊藤忠シナジー", labelEn: "Itochu Synergy", value: "川上→川下統合", valueEn: "Upstream→Downstream Integration", color: "#10b981" },
          { label: "AI発注", labelEn: "AI Ordering", value: "全店展開済", valueEn: "Rolled out chain-wide", color: "#8b5cf6" },
          { label: "ファミペイ", labelEn: "FamiPay", value: "2,000万人超", valueEn: "20M+ users", color: "#3b82f6" },
          { label: "リテールメディア", labelEn: "Retail Media", value: "新収益の柱", valueEn: "New revenue pillar", color: "#f59e0b" },
        ].map((item) => (
          <div key={item.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-lg font-bold" style={{ color: item.color }}><T ja={item.value} en={item.valueEn} /></div>
            <div className="text-[10px] text-foreground/50 mt-1"><T ja={item.label} en={item.labelEn} /></div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-[10px] font-medium text-foreground/55 mb-2"><T ja="伊藤忠商事の完全子会社化による変化" en="Impact of Full Itochu Subsidiary Status" /></div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "原材料調達", labelEn: "Raw Material Sourcing", desc: "グローバル調達網", descEn: "Global procurement network" },
            { label: "商品開発", labelEn: "Product Development", desc: "PB「ファミマル」", descEn: `PB "Famimaru"` },
            { label: "デジタル", labelEn: "Digital", desc: "データワン連携", descEn: "DataOne integration" },
            { label: "収益多角化", labelEn: "Revenue Diversification", desc: "Fit&GO・ランドリー", descEn: "Fit&GO, laundry services" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-[10px] font-semibold text-[#10b981]"><T ja={s.label} en={s.labelEn} /></div>
                <div className="text-[9px] text-foreground/40"><T ja={s.desc} en={s.descEn} /></div>
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
  const kddiBenefits = [
    { ja: "Ponta 1億人超の顧客基盤", en: "Ponta loyalty base of 100M+ users" },
    { ja: "auデータ×購買データ融合", en: "au data × purchase data integration" },
    { ja: "5G通信インフラ活用", en: "Leveraging 5G communications infrastructure" },
    { ja: "デジタルマーケティング", en: "Digital marketing capabilities" },
  ];
  const mitsubishiBenefits = [
    { ja: "グローバル調達ネットワーク", en: "Global procurement network" },
    { ja: "食品・物流の専門知見", en: "Food and logistics expertise" },
    { ja: "海外展開の推進力", en: "Overseas expansion capabilities" },
    { ja: "長期投資の資金力", en: "Capital strength for long-term investment" },
  ];

  return (
    <div role="img" aria-label="Lawson new joint structure with Mitsubishi Corp. and KDDI" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="ローソンの新体制 — 三菱商事×KDDI" en="Lawson New Structure — Mitsubishi Corp. × KDDI" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-sm font-bold text-[#3b82f6] mb-1">KDDI（50%）</div>
          <div className="space-y-1.5">
            {kddiBenefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#8b5cf6]/5 border border-[#8b5cf6]/15">
          <div className="text-sm font-bold text-[#8b5cf6] mb-1"><T ja="三菱商事（50%）" en="Mitsubishi Corp. (50%)" /></div>
          <div className="space-y-1.5">
            {mitsubishiBenefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#8b5cf6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "ヘルスケア", labelEn: "Healthcare", value: "調剤350店", valueEn: "350 pharmacy stores", color: "#10b981" },
          { label: "海外", labelEn: "Overseas", value: "約7,000店", valueEn: "~7,000 stores", color: "#f59e0b" },
          { label: "非上場化", labelEn: "Delisting", value: "長期投資可能", valueEn: "Enables long-term investment", color: "#ef4444" },
        ].map((item) => (
          <div key={item.label} className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-sm font-bold" style={{ color: item.color }}><T ja={item.value} en={item.valueEn} /></div>
            <div className="text-[9px] text-foreground/50"><T ja={item.label} en={item.labelEn} /></div>
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
    { metric: "日販", metricEn: "Daily Sales", seven: "67.5万円", famima: "約53万円", lawson: "約49万円" },
    { metric: "PB", metricEn: "Private Brand", seven: "セブンプレミアム", sevenEn: "Seven Premium", famima: "ファミマル", famimaEn: "Famimaru", lawson: "ローソンセレクト", lawsonEn: "Lawson Select" },
    { metric: "デジタル", metricEn: "Digital", seven: "POS活用", sevenEn: "POS analytics", famima: "AI発注先行", famimaEn: "AI ordering leader", lawson: "通信×小売融合", lawsonEn: "Telecom × retail convergence" },
    { metric: "海外店舗", metricEn: "Overseas Stores", seven: "約8.5万店", famima: "約8,000店", lawson: "約7,000店" },
    { metric: "差別化軸", metricEn: "Differentiator", seven: "商品力", sevenEn: "Product quality", famima: "総合商社パワー", famimaEn: "Trading house power", lawson: "テクノロジー", lawsonEn: "Technology" },
  ];

  return (
    <div role="img" aria-label="Convenience store big three comparison matrix" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="3社比較マトリクス" en="Three-Company Comparison Matrix" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 pr-3 text-foreground/40 font-medium"></th>
              <th className="text-center py-2 px-2 font-bold text-[#ef4444]"><T ja="セブン" en="7-Eleven" /></th>
              <th className="text-center py-2 px-2 font-bold text-[#10b981]"><T ja="ファミマ" en="FamilyMart" /></th>
              <th className="text-center py-2 px-2 font-bold text-[#3b82f6]"><T ja="ローソン" en="Lawson" /></th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((row) => (
              <tr key={row.metric} className="border-b border-brief-border/50">
                <td className="py-2 pr-3 text-foreground/55 font-medium"><T ja={row.metric} en={row.metricEn} /></td>
                <td className="py-2 px-2 text-center text-foreground/70">
                  {row.sevenEn ? <T ja={row.seven} en={row.sevenEn} /> : row.seven}
                </td>
                <td className="py-2 px-2 text-center text-foreground/70">
                  {row.famimaEn ? <T ja={row.famima} en={row.famimaEn} /> : row.famima}
                </td>
                <td className="py-2 px-2 text-center text-foreground/70">
                  {row.lawsonEn ? <T ja={row.lawson} en={row.lawsonEn} /> : row.lawson}
                </td>
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
  const fcIssues = [
    { label: "人手不足", labelEn: "Labor Shortage", desc: "24時間維持困難", descEn: "Difficult to maintain 24/7" },
    { label: "収益圧迫", labelEn: "Margin Squeeze", desc: "最低賃金上昇", descEn: "Rising minimum wage" },
    { label: "オーナー高齢化", labelEn: "Aging Owners", desc: "後継者不足", descEn: "Successor shortage" },
    { label: "モデル変革", labelEn: "Model Reform", desc: "省人化・直営化", descEn: "Labor reduction, direct management" },
  ];

  return (
    <div role="img" aria-label="Convenience store franchise model structure and royalty rates" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="フランチャイズモデルの構造" en="Franchise Model Structure" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {[
          { name: "セブン", nameEn: "Seven-Eleven", royalty: "43〜76%", color: "#ef4444" },
          { name: "ファミマ", nameEn: "FamilyMart", royalty: "49〜69%", color: "#10b981" },
          { name: "ローソン", nameEn: "Lawson", royalty: "45〜70%", color: "#3b82f6" },
        ].map((c) => (
          <div key={c.name} className="p-3 rounded-lg text-center" style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}>
            <div className="text-xs font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
            <div className="text-lg font-bold text-foreground/70 mt-1">{c.royalty}</div>
            <div className="text-[9px] text-foreground/40"><T ja="粗利ロイヤリティ" en="Gross Profit Royalty" /></div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-2"><T ja="FCモデルの課題" en="Franchise Model Challenges" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {fcIssues.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[10px] font-semibold text-[#f59e0b]"><T ja={item.label} en={item.labelEn} /></div>
              <div className="text-[9px] text-foreground/40"><T ja={item.desc} en={item.descEn} /></div>
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
  const futures = [
    { name: "セブン-イレブン", nameEn: "Seven-Eleven", strategy: "「食」の高付加価値化 + 7NOW全国展開", strategyEn: `Premium food upgrade + nationwide 7NOW rollout`, keyword: "商品力深化", keywordEn: "Product excellence", color: "#ef4444" },
    { name: "ファミリーマート", nameEn: "FamilyMart", strategy: "リテールメディア拡大 + FinTech参入", strategyEn: "Retail media expansion + FinTech entry", keyword: "プラットフォーム", keywordEn: "Platform", color: "#10b981" },
    { name: "ローソン", nameEn: "Lawson", strategy: "テクノロジーコンビニ + ヘルスケア500店", strategyEn: "Tech convenience store + 500 healthcare locations", keyword: "社会インフラ", keywordEn: "Social Infrastructure", color: "#3b82f6" },
  ];

  return (
    <div role="img" aria-label="Future strategies of the convenience store big three" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="3社の未来戦略" en="Future Strategies of the Big 3" />
      </div>
      <div className="space-y-3">
        {futures.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50 mt-0.5"><T ja={c.strategy} en={c.strategyEn} /></div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ backgroundColor: `${c.color}15`, color: c.color }}
            >
              <T ja={c.keyword} en={c.keywordEn} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-[10px] font-medium text-foreground/55 mb-1"><T ja="共通テーマ" en="Common Theme" /></div>
        <div className="text-sm font-bold text-[#78716c]"><T ja={`「モノを売る店」→「社会のOS」へ`} en={`From "stores that sell goods" → "the OS of society"`} /></div>
        <div className="text-[9px] text-foreground/40"><T ja="決済・物流・ヘルスケア・行政サービスの集約拠点" en="Convergence hub for payments, logistics, healthcare, and government services" /></div>
      </div>
    </div>
  );
}

export function ShoshaRetailStrategyDiagram() {
  const itochuItems = [
    { ja: "消費者データの自社分析", en: "In-house consumer data analytics" },
    { ja: "AI発注システム導入", en: "AI ordering system deployment" },
    { ja: "グローバル調達の最適化", en: "Optimized global procurement" },
    { ja: "事業利益：過去最高更新", en: "Business profit: record high" },
  ];
  const mitsubishiItems = [
    { ja: "通信×小売のデジタル融合", en: "Telecom × retail digital convergence" },
    { ja: "非上場化で長期投資", en: "Long-term investment enabled by delisting" },
    { ja: "「未来のコンビニ」実験", en: `"Future convenience store" experiments` },
    { ja: "データドリブン経営", en: "Data-driven management" },
  ];
  const motives = [
    { label: "バリューチェーン統合", labelEn: "Value Chain Integration", desc: "川上→川下の一気通貫", descEn: "Upstream-to-downstream vertical control" },
    { label: "安定キャッシュフロー", labelEn: "Stable Cash Flow", desc: "資源価格に左右されない", descEn: "Not subject to commodity price swings" },
    { label: "消費者データ取得", labelEn: "Consumer Data Capture", desc: "日5,000万人の購買データ", descEn: "50M daily shoppers' purchase data" },
  ];

  return (
    <div role="img" aria-label="Trading house retail strategy two approaches" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="商社のコンビニ戦略 — 2つのアプローチ" en="Trading Houses in Convenience Retail — Two Approaches" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
          <div className="text-sm font-bold text-[#10b981] mb-1"><T ja="伊藤忠 × ファミマ" en="Itochu × FamilyMart" /></div>
          <div className="text-[10px] text-foreground/50 mb-2"><T ja="自前主義 — 完全子会社化" en="In-house model — full subsidiary" /></div>
          <div className="space-y-1.5">
            {itochuItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#10b981] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-sm font-bold text-[#3b82f6] mb-1"><T ja="三菱商事 × ローソン × KDDI" en="Mitsubishi Corp. × Lawson × KDDI" /></div>
          <div className="text-[10px] text-foreground/50 mb-2"><T ja="協業型 — 折半共同経営" en="Partnership model — 50/50 joint management" /></div>
          <div className="space-y-1.5">
            {mitsubishiItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1"><T ja="商社がリテールに投資する3つの狙い" en="3 Reasons Trading Houses Invest in Retail" /></div>
        <div className="grid grid-cols-3 gap-2">
          {motives.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[10px] font-semibold text-[#78716c]"><T ja={item.label} en={item.labelEn} /></div>
              <div className="text-[9px] text-foreground/40"><T ja={item.desc} en={item.descEn} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
