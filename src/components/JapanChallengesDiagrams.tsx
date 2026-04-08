"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img">
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-brief-red/40 font-semibold">
          {label}
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

function StatCard({
  value,
  label,
  sub,
  color,
}: {
  value: string;
  label: React.ReactNode;
  sub?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold tabular-nums" style={{ color: color ?? "var(--foreground)", opacity: color ? 1 : 0.7 }}>
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">{label}</div>
      {sub && <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   1. 構造的課題の全体像
   ───────────────────────────────────────────── */
export function JapanChallengesOverviewDiagram() {
  const challenges = [
    { num: "01", title: "少子化の加速", titleEn: "Accelerating birth-rate decline", stat: "出生率 1.15", statEn: "TFR 1.15", color: "#ef4444" },
    { num: "02", title: "高齢化と社会保障", titleEn: "Aging population & social security", stat: "高齢化率 29.3%", statEn: "Elderly ratio 29.3%", color: "#f97316" },
    { num: "03", title: "財政の崖", titleEn: "Fiscal cliff", stat: "債務 GDP比235%", statEn: "Debt 235% of GDP", color: "#eab308" },
    { num: "04", title: "安全保障の激変", titleEn: "Security environment upheaval", stat: "防衛費 9兆円超", statEn: "Defense ¥9T+", color: "#3b82f6" },
    { num: "05", title: "労働力不足", titleEn: "Labor shortage", stat: "2030年 700万人不足", statEn: "7M shortfall by 2030", color: "#8b5cf6" },
    { num: "06", title: "エネルギー脆弱性", titleEn: "Energy vulnerability", stat: "自給率 13%", statEn: "Self-sufficiency 13%", color: "#06b6d4" },
    { num: "07", title: "食料安全保障", titleEn: "Food security", stat: "自給率 38%", statEn: "Self-sufficiency 38%", color: "#22c55e" },
  ];

  return (
    <DiagramCard label={<T ja="日本が直面する7つの構造的課題" en="Japan's 7 Structural Challenges" />}>
      <div className="space-y-2 mt-3">
        {challenges.map((c) => (
          <div key={c.num} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold tabular-nums"
              style={{ backgroundColor: `${c.color}10`, color: c.color }}
            >
              {c.num}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[12px] font-bold text-foreground/70"><T ja={c.title} en={c.titleEn} /></span>
            </div>
            <div className="flex-shrink-0 text-[11px] font-semibold tabular-nums" style={{ color: c.color }}>
              <T ja={c.stat} en={c.statEn} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[11px] text-foreground/40">
          <T
            ja="これらの課題は互いに連鎖し増幅し合う「複合危機」。少子化→労働力不足→経済停滞→財政悪化→社会保障縮小→少子化加速という負のスパイラルが形成されている。"
            en="These challenges form a compounding crisis, reinforcing one another in a negative spiral: declining births → labor shortage → economic stagnation → fiscal deterioration → weaker social security → further birth-rate decline."
          />
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   2. 出生数・出生率の推移
   ───────────────────────────────────────────── */
export function JapanBirthsDeclineDiagram() {
  const data = [
    { year: "1947", births: "268万", rate: "4.54", note: "第1次ベビーブーム", noteEn: "1st baby boom" },
    { year: "1973", births: "209万", rate: "2.14", note: "第2次ベビーブーム", noteEn: "2nd baby boom" },
    { year: "1989", births: "125万", rate: "1.57", note: "1.57ショック", noteEn: "1.57 shock" },
    { year: "2005", births: "106万", rate: "1.26", note: "過去最低（当時）", noteEn: "Record low (at the time)" },
    { year: "2016", births: "98万", rate: "1.44", note: "初の100万人割れ", noteEn: "First time below 1M" },
    { year: "2022", births: "77万", rate: "1.20", note: "初の80万人割れ", noteEn: "First time below 800K" },
    { year: "2024", births: "68.6万", rate: "1.15", note: "初の70万人割れ", noteEn: "First time below 700K" },
  ];

  return (
    <DiagramCard label={<T ja="出生数と合計特殊出生率の推移" en="Births and Total Fertility Rate: Historical Trend" />}>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-2 font-semibold text-foreground/50"><T ja="年" en="Year" /></th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50"><T ja="出生数" en="Births" /></th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50"><T ja="出生率" en="TFR" /></th>
              <th className="text-left py-2 pl-2 font-semibold text-foreground/50"><T ja="備考" en="Note" /></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.year} className="border-b border-foreground/[0.03]">
                <td className="py-2 pr-2 text-foreground/60 tabular-nums font-medium">{d.year}</td>
                <td className="py-2 px-2 text-right text-foreground/70 tabular-nums font-semibold">{d.births}</td>
                <td className="py-2 px-2 text-right tabular-nums font-semibold" style={{ color: parseFloat(d.rate) < 1.5 ? "#ef4444" : "var(--foreground)", opacity: parseFloat(d.rate) < 1.5 ? 0.8 : 0.7 }}>{d.rate}</td>
                <td className="py-2 pl-2 text-foreground/40 text-[11px]"><T ja={d.note} en={d.noteEn} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <StatCard value="28.3%" label={<T ja="男性 生涯未婚率" en="Male lifetime unmarried rate" />} sub={<T ja="2020年国勢調査" en="2020 census" />} color="#ef4444" />
        <StatCard value="17.8%" label={<T ja="女性 生涯未婚率" en="Female lifetime unmarried rate" />} sub={<T ja="2020年国勢調査" en="2020 census" />} color="#ef4444" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   3. 高齢化と社会保障負担
   ───────────────────────────────────────────── */
export function JapanAgingBurdenDiagram() {
  const ratios = [
    { year: "1960", ratio: "11.2人", type: "胴上げ型", typeEn: "Many-to-one", color: "#22c55e" },
    { year: "1990", ratio: "5.1人", type: "中間型", typeEn: "Transitional", color: "#eab308" },
    { year: "2024", ratio: "2.0人", type: "騎馬戦型", typeEn: "Two-to-one", color: "#f97316" },
    { year: "2060", ratio: "1.3人", type: "肩車型", typeEn: "One-to-one", color: "#ef4444" },
  ];

  return (
    <DiagramCard label={<T ja="高齢者1人を支える現役世代の推移" en="Working-age population per elderly person" />}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        {ratios.map((r) => (
          <div key={r.year} className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
            <div className="text-[10px] text-foreground/40 tabular-nums font-medium"><T ja={`${r.year}年`} en={r.year} /></div>
            <div className="text-xl font-bold tabular-nums mt-1" style={{ color: r.color }}>{r.ratio}</div>
            <div className="text-[10px] text-foreground/50 mt-1 font-medium"><T ja={r.type} en={r.typeEn} /></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="39.1兆円" label={<T ja="社会保障関係費" en="Social security expenditure" />} sub={<T ja="2026年度予算" en="FY2026 budget" />} />
        <StatCard value="122万人" label={<T ja="介護職員不足" en="Care worker shortage" />} sub={<T ja="2050年推計" en="2050 projection" />} color="#ef4444" />
        <StatCard value="56%" label={<T ja="歳出に占める割合" en="Share of general expenditure" />} sub={<T ja="一般会計" en="General account" />} />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   4. 財政 — 債務残高と歳出構造
   ───────────────────────────────────────────── */
export function JapanFiscalDebtDiagram() {
  const countries = [
    { name: "日本", nameEn: "Japan", ratio: "235%", color: "#ef4444", width: "100%" },
    { name: "イタリア", nameEn: "Italy", ratio: "140%", color: "#f97316", width: "60%" },
    { name: "米国", nameEn: "US", ratio: "123%", color: "#eab308", width: "52%" },
    { name: "フランス", nameEn: "France", ratio: "112%", color: "#3b82f6", width: "48%" },
    { name: "英国", nameEn: "UK", ratio: "104%", color: "#8b5cf6", width: "44%" },
    { name: "ドイツ", nameEn: "Germany", ratio: "63%", color: "#22c55e", width: "27%" },
  ];

  return (
    <DiagramCard label={<T ja="政府債務残高の国際比較（対GDP比）" en="Government Debt: International Comparison (% of GDP)" />}>
      <div className="space-y-2.5 mt-3">
        {countries.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-16 text-[11px] font-medium text-foreground/60 text-right flex-shrink-0"><T ja={c.name} en={c.nameEn} /></div>
            <div className="flex-1 h-6 rounded-md bg-foreground/[0.03] overflow-hidden relative">
              <div
                className="h-full rounded-md transition-all"
                style={{ width: c.width, backgroundColor: `${c.color}30` }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-bold tabular-nums" style={{ color: c.color }}>
                {c.ratio}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        <StatCard value="122.3兆円" label={<T ja="一般会計歳出" en="General account spending" />} sub={<T ja="2026年度" en="FY2026" />} />
        <StatCard value="28.2兆円" label={<T ja="国債費" en="Debt service" />} sub={<T ja="利払い＋元本返済" en="Interest + principal" />} />
        <StatCard value="1.5%" label={<T ja="10年国債利回り" en="10-year JGB yield" />} sub={<T ja="2026年3月" en="March 2026" />} color="#eab308" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5. 防衛費の推移
   ───────────────────────────────────────────── */
export function JapanDefenseSpendingDiagram() {
  const timeline = [
    { year: "2022", amount: "5.4兆円", gdp: "1.0%", event: "安保3文書策定", eventEn: "Three national security documents issued" },
    { year: "2023", amount: "6.8兆円", gdp: "1.2%", event: "5カ年計画1年目", eventEn: "Year 1 of 5-year plan" },
    { year: "2024", amount: "7.7兆円", gdp: "1.5%", event: "反撃能力整備", eventEn: "Counterstrike capability development" },
    { year: "2025", amount: "8.3兆円", gdp: "1.7%", event: "無人アセット拡充", eventEn: "Unmanned asset expansion" },
    { year: "2026", amount: "9.0兆円超", gdp: "2.0%", event: "GDP比2%達成", eventEn: "2% of GDP target reached" },
  ];

  return (
    <DiagramCard label={<T ja="防衛費の推移と主要イベント" en="Defense Spending Trend and Key Milestones" />}>
      <div className="mt-3 space-y-2">
        {timeline.map((t, i) => (
          <div key={t.year} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 text-[11px] font-bold text-foreground/50 tabular-nums text-right">{t.year}</div>
            <div className="flex-shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: i === timeline.length - 1 ? "#3b82f6" : "var(--foreground)", opacity: i === timeline.length - 1 ? 1 : 0.15 }} />
            <div className="flex-1 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] font-bold text-foreground/70 tabular-nums">{t.amount}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#3b82f6]/[0.08] text-[#3b82f6]/70 font-medium tabular-nums">GDP {t.gdp}</span>
              </div>
              <div className="text-[11px] text-foreground/40 mt-0.5"><T ja={t.event} en={t.eventEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   6. 労働力不足
   ───────────────────────────────────────────── */
export function JapanLaborShortageDiagram() {
  const sectors = [
    { name: "医療・介護", nameEn: "Healthcare & care", shortage: "187万人", severity: "極めて深刻", severityEn: "Critical", color: "#ef4444" },
    { name: "建設業", nameEn: "Construction", shortage: "90万人", severity: "深刻", severityEn: "Severe", color: "#f97316" },
    { name: "運輸・物流", nameEn: "Transport & logistics", shortage: "75万人", severity: "深刻", severityEn: "Severe", color: "#eab308" },
    { name: "サービス業", nameEn: "Services", shortage: "120万人", severity: "深刻", severityEn: "Severe", color: "#8b5cf6" },
    { name: "製造業", nameEn: "Manufacturing", shortage: "85万人", severity: "中程度", severityEn: "Moderate", color: "#3b82f6" },
    { name: "その他", nameEn: "Other", shortage: "143万人", severity: "—", severityEn: "—", color: "#6b7280" },
  ];

  return (
    <DiagramCard label={<T ja="2030年の産業別労働力不足予測" en="Projected Labor Shortage by Industry in 2030" />}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
        {sectors.map((s) => (
          <div key={s.name} className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="text-[11px] text-foreground/40 font-medium"><T ja={s.name} en={s.nameEn} /></div>
            <div className="text-lg font-bold tabular-nums mt-1" style={{ color: s.color }}>{s.shortage}</div>
            <div className="text-[9px] mt-0.5" style={{ color: s.color, opacity: 0.7 }}><T ja={s.severity} en={s.severityEn} /></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="700万人" label={<T ja="総不足数（2030年）" en="Total shortfall (2030)" />} color="#ef4444" />
        <StatCard value="323件" label={<T ja="人手不足倒産" en="Understaffing bankruptcies" />} sub={<T ja="2025年1〜10月" en="Jan–Oct 2025" />} />
        <StatCard value="230万人" label={<T ja="外国人労働者" en="Foreign workers" />} sub={<T ja="2024年10月時点" en="As of Oct 2024" />} />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   7. エネルギー・食料自給率
   ───────────────────────────────────────────── */
export function JapanSelfSufficiencyDiagram() {
  const items = [
    { category: "エネルギー", categoryEn: "Energy", rate: "13%", target: "—", risk: "原油の中東依存95%", riskEn: "95% dependence on Middle East oil", color: "#06b6d4" },
    { category: "食料（カロリー）", categoryEn: "Food (calories)", rate: "38%", target: "45%（2030年目標）", targetEn: "45% (2030 target)", risk: "15年連続40%割れ", riskEn: "Below 40% for 15 straight years", color: "#22c55e" },
    { category: "米", categoryEn: "Rice", rate: "98%", target: "—", risk: "安定", riskEn: "Stable", color: "#22c55e" },
    { category: "野菜", categoryEn: "Vegetables", rate: "75%", target: "—", risk: "やや安定", riskEn: "Mostly stable", color: "#22c55e" },
    { category: "小麦", categoryEn: "Wheat", rate: "17%", target: "—", risk: "輸入依存", riskEn: "Import-dependent", color: "#ef4444" },
    { category: "大豆", categoryEn: "Soybeans", rate: "26%", target: "—", risk: "輸入依存", riskEn: "Import-dependent", color: "#f97316" },
  ];

  return (
    <DiagramCard label={<T ja="日本の自給率 — エネルギーと食料" en="Japan's Self-Sufficiency — Energy and Food" />}>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-2 font-semibold text-foreground/50"><T ja="品目" en="Item" /></th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50"><T ja="自給率" en="Self-suf." /></th>
              <th className="text-left py-2 px-2 font-semibold text-foreground/50"><T ja="目標" en="Target" /></th>
              <th className="text-left py-2 pl-2 font-semibold text-foreground/50"><T ja="リスク評価" en="Risk" /></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-b border-foreground/[0.03]">
                <td className="py-2 pr-2 text-foreground/60 font-medium"><T ja={item.category} en={item.categoryEn} /></td>
                <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: item.color }}>{item.rate}</td>
                <td className="py-2 px-2 text-foreground/40 text-[11px]">
                  {item.target === "—" ? "—" : <T ja={item.target} en={item.targetEn ?? item.target} />}
                </td>
                <td className="py-2 pl-2 text-foreground/40 text-[11px]"><T ja={item.risk} en={item.riskEn} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#ef4444]/[0.04] border border-[#ef4444]/10">
        <div className="text-[11px] text-[#ef4444]/60 font-medium">
          <T
            ja="農業従事者の平均年齢は68.7歳。2024年上半期の農業事業者倒産件数は過去30年で最多を記録した。"
            en="The average age of farmers is 68.7. Agricultural business bankruptcies in the first half of 2024 hit a 30-year high."
          />
        </div>
      </div>
    </DiagramCard>
  );
}
