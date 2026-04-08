"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Tax Rate History Timeline
   ───────────────────────────────────────────── */
export function TaxRateHistoryDiagram() {
  const milestones = [
    { year: "1989年4月", yearEn: "April 1989", rate: "3%", detail: "竹下登内閣で導入", detailEn: "Introduced under PM Takeshita", color: "#16a34a" },
    { year: "1997年4月", yearEn: "April 1997", rate: "5%", detail: "橋本龍太郎内閣", detailEn: "Under PM Hashimoto", color: "#ca8a04" },
    { year: "2014年4月", yearEn: "April 2014", rate: "8%", detail: "安倍晋三内閣", detailEn: "Under PM Abe", color: "#f59e0b" },
    { year: "2019年10月", yearEn: "October 2019", rate: "10%", detail: "軽減税率8%を同時導入", detailEn: "Reduced rate of 8% introduced simultaneously", color: "#ef4444" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="消費税率の推移" en="Consumption Tax Rate History" />
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-brief-border hidden sm:block" />
        <div className="space-y-4 sm:space-y-3">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold z-10"
                  style={{ backgroundColor: m.color }}
                >
                  {m.rate}
                </div>
              </div>
              <div className="pt-1.5">
                <div className="text-sm font-bold"><T ja={m.year} en={m.yearEn} /></div>
                <div className="text-[11px] text-foreground/55"><T ja={m.detail} en={m.detailEn} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-[9px] text-foreground/35 text-center">
        <T ja="※税率1%あたりの税収効果は約2.5兆円" en="* Each 1% increase in tax rate generates approx. ¥2.5 trillion in revenue" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Tax Revenue Stats Banner
   ───────────────────────────────────────────── */
export function TaxRevenueStatsDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#dc2626]">25.0兆円</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="消費税収（国税分）" en="Consumption tax revenue (national)" />
        </div>
        <div className="text-[9px] text-foreground/35"><T ja="2024年度・過去最高" en="FY2024 — record high" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">33%</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="国税収に占める割合" en="Share of national tax revenue" />
        </div>
        <div className="text-[9px] text-foreground/35"><T ja="最大の税収源" en="Largest single tax source" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">~34兆円</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="国＋地方合計" en="National + local combined" />
        </div>
        <div className="text-[9px] text-foreground/35"><T ja="2026年度予算" en="FY2026 budget" /></div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#16a34a]">7.6倍</div>
        <div className="text-[10px] text-foreground/50 mt-1">
          <T ja="35年間の税収増" en="35-year revenue growth" />
        </div>
        <div className="text-[9px] text-foreground/35"><T ja="1989年比" en="vs. 1989" /></div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Social Security Breakdown
   ───────────────────────────────────────────── */
export function SocialSecurityBreakdownDiagram() {
  const items = [
    { name: "年金給付費", nameEn: "Pension benefits", amount: "13.69兆円", pct: 36, color: "#dc2626", icon: "👴" },
    { name: "医療給付費", nameEn: "Medical benefits", amount: "12.32兆円", pct: 32, color: "#3b82f6", icon: "🏥" },
    { name: "介護給付費", nameEn: "Long-term care", amount: "3.73兆円", pct: 10, color: "#8b5cf6", icon: "🤝" },
    { name: "少子化対策費", nameEn: "Childcare measures", amount: "3.52兆円", pct: 9, color: "#f59e0b", icon: "👶" },
    { name: "その他社会福祉等", nameEn: "Other social welfare", amount: "5.03兆円", pct: 13, color: "#64748b", icon: "🏛" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
        <T ja="社会保障関係費の内訳（2025年度予算）" en="Social Security Spending Breakdown (FY2025 Budget)" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T
          ja="合計 38.3兆円 ← 消費税収（国税分）24.9兆円では約8.3兆円不足"
          en="Total ¥38.3T — consumption tax (national, ¥24.9T) falls ~¥8.3T short"
        />
      </div>

      {/* Stacked bar */}
      <div className="flex h-6 rounded-full overflow-hidden mb-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-[8px] text-white font-bold"
            style={{ width: `${item.pct}%`, backgroundColor: item.color }}
            title={`${item.name}: ${item.amount}`}
          >
            {item.pct >= 12 ? `${item.pct}%` : ""}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: item.color }}>
                  <T ja={item.name} en={item.nameEn} />
                </span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm font-bold" style={{ color: item.color }}>
                {item.amount}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-red-600 dark:text-red-400">
            <T ja="不足分: 約8.3兆円" en="Shortfall: approx. ¥8.3 trillion" />
          </span>
          <span className="text-[10px] text-foreground/50">
            <T ja="→ 国債（将来世代への負担転嫁）で補填" en="→ Covered by government bonds (burden shifted to future generations)" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   National vs. Local Split
   ───────────────────────────────────────────── */
export function NationalLocalSplitDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="消費税10%の配分構造" en="How the 10% Consumption Tax Is Allocated" />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* National */}
        <div className="flex-1 p-4 rounded-lg bg-blue-500/5 border border-blue-500/15">
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
            <T ja="国税分 — 7.8%" en="National — 7.8%" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-foreground/55"><T ja="社会保障財源（国）" en="Social security funding (national)" /></span>
              <span className="font-bold">6.28%</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-foreground/55"><T ja="地方交付税として配分" en="Distributed as local allocation tax" /></span>
              <span className="font-bold">1.52%</span>
            </div>
            <div className="h-px bg-blue-500/10 my-1" />
            <div className="flex justify-between text-[11px]">
              <span className="text-foreground/55"><T ja="金額（2025年度予算）" en="Amount (FY2025 budget)" /></span>
              <span className="font-bold text-blue-600 dark:text-blue-400">約24.9兆円</span>
            </div>
          </div>
        </div>

        {/* Local */}
        <div className="flex-1 p-4 rounded-lg bg-green-500/5 border border-green-500/15">
          <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-2">
            <T ja="地方消費税分 — 2.2%" en="Local consumption tax — 2.2%" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[11px]">
              <span className="text-foreground/55"><T ja="都道府県・市町村の一般財源" en="General revenue for prefectures & municipalities" /></span>
              <span className="font-bold">2.2%</span>
            </div>
            <div className="flex justify-between text-[11px] text-foreground/40">
              <span><T ja="＋地方交付税（国税分から）" en="+ Local allocation tax (from national portion)" /></span>
              <span className="font-bold">1.52%</span>
            </div>
            <div className="h-px bg-green-500/10 my-1" />
            <div className="flex justify-between text-[11px]">
              <span className="text-foreground/55"><T ja="金額（2025年度予算）" en="Amount (FY2025 budget)" /></span>
              <span className="font-bold text-green-600 dark:text-green-400">約7.0兆円</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-[10px] text-foreground/40">
        <T
          ja="実質的な地方への配分は 3.72%（2.2% + 1.52%）で、国に残るのは 6.28%"
          en="Effective local allocation is 3.72% (2.2% + 1.52%); national government retains 6.28%"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Reduced Rate Items
   ───────────────────────────────────────────── */
export function ReducedRateItemsDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="軽減税率（8%）の対象・非対象" en="Reduced Rate (8%) — Covered vs. Excluded Items" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* 8% items */}
        <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/15">
          <div className="text-xs font-bold text-green-600 dark:text-green-400 mb-3">
            <T ja="軽減税率 8% が適用" en="8% Reduced Rate Applies" />
          </div>
          <div className="space-y-2">
            {[
              { icon: "🍙", label: "飲食料品（持ち帰り・宅配）", labelEn: "Food & beverages (takeout / delivery)" },
              { icon: "🥤", label: "ペットボトル飲料・お茶", labelEn: "Bottled drinks & tea" },
              { icon: "🍱", label: "コンビニ弁当（持ち帰り）", labelEn: "Convenience store bento (takeout)" },
              { icon: "📰", label: "定期購読の新聞（週2回以上）", labelEn: "Newspaper subscriptions (≥2×/week)" },
              { icon: "🧃", label: "みりん風調味料（アルコール1%未満）", labelEn: "Mirin-style seasoning (<1% alcohol)" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <span>{item.icon}</span>
                <span className="text-foreground/70"><T ja={item.label} en={item.labelEn} /></span>
              </div>
            ))}
          </div>
        </div>

        {/* 10% items */}
        <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/15">
          <div className="text-xs font-bold text-red-600 dark:text-red-400 mb-3">
            <T ja="標準税率 10% が適用" en="Standard Rate 10% Applies" />
          </div>
          <div className="space-y-2">
            {[
              { icon: "🍽", label: "外食（レストラン・フードコート）", labelEn: "Dining in (restaurants, food courts)" },
              { icon: "🍺", label: "酒類（ビール・ワイン・日本酒）", labelEn: "Alcoholic beverages (beer, wine, sake)" },
              { icon: "🍶", label: "みりん（アルコール1%以上）", labelEn: "Mirin (≥1% alcohol)" },
              { icon: "💊", label: "医薬品・医薬部外品", labelEn: "Pharmaceuticals & quasi-drugs" },
              { icon: "🏪", label: "コンビニのイートイン飲食", labelEn: "Eating in at convenience stores" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <span>{item.icon}</span>
                <span className="text-foreground/70"><T ja={item.label} en={item.labelEn} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10 text-center">
        <span className="text-[10px] text-yellow-700 dark:text-yellow-400 font-medium">
          <T ja="減収額: 年間約1.1兆円（消費税収全体の約4%）" en="Revenue cost: approx. ¥1.1T/year (≈4% of total consumption tax)" />
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Invoice System Impact
   ───────────────────────────────────────────── */
export function InvoiceSystemDiagram() {
  const timeline = [
    { period: "~2026年9月", periodEn: "through Sep 2026", rate: "80%", color: "#16a34a" },
    { period: "2026年10月~2028年9月", periodEn: "Oct 2026 – Sep 2028", rate: "70%", color: "#ca8a04" },
    { period: "2028年10月~2030年9月", periodEn: "Oct 2028 – Sep 2030", rate: "50%", color: "#f59e0b" },
    { period: "2030年10月~2031年9月", periodEn: "Oct 2030 – Sep 2031", rate: "30%", color: "#ef4444" },
    { period: "2031年10月~", periodEn: "Oct 2031 onward", rate: "0%", color: "#dc2626" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="インボイス制度 — 経過措置と影響" en="Invoice System — Transition Measures & Impact" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#dc2626]">2,480億円</div>
          <div className="text-[9px] text-foreground/50"><T ja="増収効果（財務省試算）" en="Revenue gain (MOF estimate)" /></div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#3b82f6]">458万</div>
          <div className="text-[9px] text-foreground/50"><T ja="登録事業者数" en="Registered businesses" /></div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center sm:col-span-1 col-span-2">
          <div className="text-lg font-bold text-[#f59e0b]">161万者</div>
          <div className="text-[9px] text-foreground/50"><T ja="新規課税事業者転換" en="Newly registered taxable businesses" /></div>
        </div>
      </div>

      <div className="text-[10px] font-medium text-foreground/55 mb-2">
        <T ja="免税事業者からの仕入税額控除率（経過措置）" en="Input tax credit rate for purchases from tax-exempt suppliers (transition)" />
      </div>
      <div className="space-y-1.5">
        {timeline.map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-[10px] text-foreground/45 w-[180px] flex-shrink-0 tabular-nums">
              <T ja={t.period} en={t.periodEn} />
            </div>
            <div className="flex-1 h-4 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full transition-all flex items-center justify-end pr-2"
                style={{
                  width: `${Math.max(parseInt(t.rate), 8)}%`,
                  backgroundColor: t.color,
                  opacity: 0.6,
                }}
              >
                <span className="text-[8px] text-white font-bold">{t.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Regressivity Illustration
   ───────────────────────────────────────────── */
export function RegressivityDiagram() {
  const households = [
    { income: "200万円", incomeEn: "¥2M", taxBurden: "~18万円", rate: "~9%", barWidth: 90, color: "#dc2626" },
    { income: "400万円", incomeEn: "¥4M", taxBurden: "~28万円", rate: "~7%", barWidth: 70, color: "#f59e0b" },
    { income: "600万円", incomeEn: "¥6M", taxBurden: "~36万円", rate: "~6%", barWidth: 60, color: "#ca8a04" },
    { income: "800万円", incomeEn: "¥8M", taxBurden: "~42万円", rate: "~5.3%", barWidth: 53, color: "#16a34a" },
    { income: "1,000万円", incomeEn: "¥10M", taxBurden: "~46万円", rate: "~4.6%", barWidth: 46, color: "#3b82f6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-2">
        <T ja="消費税の逆進性 — 年収別の負担率（概算）" en="Regressive Nature of Consumption Tax — Effective Rate by Income (Estimate)" />
      </div>
      <div className="text-[9px] text-foreground/35 mb-4">
        <T ja="所得が低いほど、所得に対する消費税負担率が高くなる" en="Lower-income households pay a higher share of their income in consumption tax" />
      </div>
      <div className="space-y-2">
        {households.map((h, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-[80px] text-right text-[10px] text-foreground/55 flex-shrink-0 tabular-nums">
              <T ja={`年収${h.income}`} en={`Income ${h.incomeEn}`} />
            </div>
            <div className="flex-1 h-5 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full flex items-center pl-2"
                style={{
                  width: `${h.barWidth}%`,
                  backgroundColor: h.color,
                  opacity: 0.5,
                }}
              >
                <span className="text-[9px] text-white font-bold whitespace-nowrap">
                  {h.rate}
                </span>
              </div>
            </div>
            <div className="w-[60px] text-[9px] text-foreground/45 flex-shrink-0 tabular-nums">
              {h.taxBurden}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="※総務省 家計調査データに基づく概算。消費税率10%、軽減税率8%を考慮"
          en="* Estimate based on MIC Household Survey data. Assumes 10% standard rate and 8% reduced rate."
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   International Comparison
   ───────────────────────────────────────────── */
export function InternationalComparisonDiagram() {
  const countries = [
    { name: "ハンガリー", nameEn: "Hungary", rate: 27, food: "18%", color: "#dc2626" },
    { name: "デンマーク", nameEn: "Denmark", rate: 25, food: "25%", color: "#ef4444" },
    { name: "スウェーデン", nameEn: "Sweden", rate: 25, food: "12%", color: "#f59e0b" },
    { name: "フィンランド", nameEn: "Finland", rate: 25.5, food: "14%", color: "#f59e0b" },
    { name: "イギリス", nameEn: "UK", rate: 20, food: "0%", color: "#ca8a04" },
    { name: "ドイツ", nameEn: "Germany", rate: 19, food: "7%", color: "#ca8a04" },
    { name: "フランス", nameEn: "France", rate: 20, food: "5.5%", color: "#ca8a04" },
    { name: "中国", nameEn: "China", rate: 13, food: "9%", color: "#3b82f6" },
    { name: "日本", nameEn: "Japan", rate: 10, food: "8%", color: "#16a34a", highlight: true },
    { name: "韓国", nameEn: "South Korea", rate: 10, food: "0%", color: "#16a34a" },
    { name: "台湾", nameEn: "Taiwan", rate: 5, food: "0%", color: "#14b8a6" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="世界の消費税（VAT）率比較" en="Global VAT / Consumption Tax Rate Comparison" />
      </div>
      <div className="space-y-1">
        {countries.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-1.5 rounded ${c.highlight ? "bg-foreground/[0.04]" : ""}`}
          >
            <div className="w-[80px] text-[10px] text-foreground/60 flex-shrink-0">
              <T ja={c.name} en={c.nameEn} />
              {c.highlight && (
                <span className="ml-1 text-[8px] text-[#16a34a] font-bold">★</span>
              )}
            </div>
            <div className="flex-1 h-4 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(c.rate / 27) * 100}%`,
                  backgroundColor: c.color,
                  opacity: 0.5,
                }}
              />
            </div>
            <div className="w-[35px] text-[10px] font-bold text-right tabular-nums" style={{ color: c.color }}>
              {c.rate}%
            </div>
            <div className="w-[55px] text-[9px] text-foreground/40 text-right tabular-nums">
              <T ja={`食品${c.food}`} en={`Food ${c.food}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/35 text-center">
        <T
          ja="OECD+ASEAN等51カ国平均: 17.7% — 日本は42位（低い方）"
          en="51-country average (OECD + ASEAN etc.): 17.7% — Japan ranks 42nd (low end)"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Future Debates
   ───────────────────────────────────────────── */
export function FutureDebatesDiagram() {
  const debates = [
    {
      label: "食料品ゼロ税率",
      labelEn: "Zero rate on food",
      stance: "減税",
      stanceEn: "Tax cut",
      impact: "減収 約5兆円",
      impactEn: "Revenue loss: ~¥5T",
      color: "#16a34a",
      icon: "🥬",
    },
    {
      label: "防衛費増額の財源",
      labelEn: "Defense spending funding",
      stance: "増税圧力",
      stanceEn: "Pressure to raise",
      impact: "追加14.6兆円が必要",
      impactEn: "Additional ¥14.6T needed",
      color: "#dc2626",
      icon: "🛡",
    },
    {
      label: "少子化対策の強化",
      labelEn: "Childcare policy expansion",
      stance: "増税圧力",
      stanceEn: "Pressure to raise",
      impact: "子育て支援拡充",
      impactEn: "Expanded child support",
      color: "#f59e0b",
      icon: "👶",
    },
    {
      label: "給付付き税額控除",
      labelEn: "Refundable tax credit",
      stance: "制度改革",
      stanceEn: "Reform",
      impact: "マイナンバー活用が前提",
      impactEn: "Requires My Number integration",
      color: "#3b82f6",
      icon: "💳",
    },
    {
      label: "税率15%・20%への引上げ論",
      labelEn: "Debate over raising rate to 15–20%",
      stance: "増税",
      stanceEn: "Tax hike",
      impact: "社会保障財源の確保",
      impactEn: "Securing social security funding",
      color: "#8b5cf6",
      icon: "📈",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="消費税をめぐる今後の論点" en="Key Debates Surrounding Consumption Tax" />
      </div>
      <div className="space-y-2">
        {debates.map((d, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${d.color}06`,
              borderLeft: `3px solid ${d.color}`,
            }}
          >
            <span className="text-lg flex-shrink-0">{d.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold" style={{ color: d.color }}>
                  <T ja={d.label} en={d.labelEn} />
                </span>
                <span
                  className="text-[8px] px-1.5 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${d.color}15`,
                    color: d.color,
                  }}
                >
                  <T ja={d.stance} en={d.stanceEn} />
                </span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                <T ja={d.impact} en={d.impactEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
