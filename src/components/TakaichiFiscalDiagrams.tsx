"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Fiscal Philosophy — 3 Pillars
   ───────────────────────────────────────────── */
export function FiscalPhilosophyDiagram() {
  const pillars = [
    { label: "生活の安全保障", labelEn: "Livelihood Security", sub: "物価高対策", subEn: "Anti-inflation measures", amount: "8.9兆円", color: "#3b82f6", icon: "🛡" },
    { label: "危機管理・成長投資", labelEn: "Crisis Management & Growth Investment", sub: "17分野への集中投資", subEn: "Concentrated investment in 17 sectors", amount: "6.4兆円", color: "#f59e0b", icon: "📈" },
    { label: "防衛力・外交力", labelEn: "Defense & Diplomacy", sub: "GDP比2%達成", subEn: "Achieving 2% of GDP", amount: "9.0兆円", color: "#ef4444", icon: "🔒" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="責任ある積極財政の3本柱">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="「責任ある積極財政」の3本柱" en={`Three Pillars of "Responsible Active Fiscal Policy"`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-brief-border text-center"
            style={{ borderTopColor: p.color, borderTopWidth: 3 }}
          >
            <div className="text-2xl mb-2">{p.icon}</div>
            <div className="text-sm font-bold"><T ja={p.label} en={p.labelEn} /></div>
            <div className="text-[11px] text-foreground/50 mt-1"><T ja={p.sub} en={p.subEn} /></div>
            <div className="text-lg font-bold mt-2" style={{ color: p.color }}>
              {p.amount}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-[10px] text-foreground/35">
        <T ja="※金額は2025年度補正予算＋2026年度当初予算ベース" en="* Amounts based on FY2025 supplementary + FY2026 initial budget" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Budget Breakdown — 122.3 Trillion Yen
   ───────────────────────────────────────────── */
export function BudgetBreakdownDiagram() {
  const items = [
    { name: "社会保障関係費", nameEn: "Social security", amount: "39.1兆円", pct: 32, color: "#ef4444" },
    { name: "国債費", nameEn: "Debt servicing", amount: "31.3兆円", pct: 26, color: "#64748b" },
    { name: "地方交付税交付金", nameEn: "Local allocation grants", amount: "21.8兆円", pct: 18, color: "#8b5cf6" },
    { name: "防衛関係費", nameEn: "Defense", amount: "9.0兆円", pct: 7, color: "#f59e0b" },
    { name: "文教・科学振興費", nameEn: "Education & science", amount: "5.6兆円", pct: 5, color: "#3b82f6" },
    { name: "公共事業費", nameEn: "Public works", amount: "6.1兆円", pct: 5, color: "#16a34a" },
    { name: "その他", nameEn: "Other", amount: "9.4兆円", pct: 7, color: "#a3a3a3" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="2026年度予算の内訳">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年度一般会計予算" en="FY2026 General Account Budget" />
      </div>
      <div className="text-2xl font-bold mb-4">122.3<span className="text-base font-normal text-foreground/50 ml-1">兆円</span></div>

      {/* Stacked bar */}
      <div className="flex h-8 rounded-lg overflow-hidden mb-4">
        {items.map((item, i) => (
          <div
            key={i}
            style={{ width: `${item.pct}%`, backgroundColor: item.color }}
            className="relative group"
            title={`${item.name}: ${item.amount}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div>
              <span className="text-foreground/70"><T ja={item.name} en={item.nameEn} /></span>
              <span className="text-foreground/40 ml-1">{item.amount}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#16a34a]">83.7兆円</div>
          <div className="text-[10px] text-foreground/50"><T ja="税収（過去最高）" en="Tax revenue (record high)" /></div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#ef4444]">29.6兆円</div>
          <div className="text-[10px] text-foreground/50"><T ja="新規国債発行" en="New government bond issuance" /></div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center col-span-2 sm:col-span-1">
          <div className="text-lg font-bold text-[#3b82f6]">24.2%</div>
          <div className="text-[10px] text-foreground/50"><T ja="公債依存度" en="Bond dependency ratio" /></div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PB Surplus — 28-Year Milestone
   ───────────────────────────────────────────── */
export function PBSurplusDiagram() {
  const timeline = [
    { year: "1998", label: "最後のPB黒字", labelEn: "Last PB surplus", note: "橋本内閣（消費税5%引き上げ後）", noteEn: "Hashimoto cabinet (after CT hike to 5%)", type: "positive" },
    { year: "2008", label: "リーマンショック", labelEn: "Global Financial Crisis", note: "PB赤字が急拡大", noteEn: "PB deficit expanded sharply", type: "negative" },
    { year: "2020", label: "コロナ対策", labelEn: "COVID-19 response", note: "PB赤字が過去最大に", noteEn: "PB deficit hit record high", type: "negative" },
    { year: "2026", label: "PB黒字化", labelEn: "PB surplus achieved", note: "+1.34兆円（28年ぶり）", noteEn: "+¥1.34T (first time in 28 years)", type: "positive" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="プライマリーバランスの推移">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="プライマリーバランスの転換点" en="Primary Balance — Key Turning Points" />
      </div>

      <div className="flex items-center justify-center gap-3 mb-6 p-4 rounded-lg bg-[#16a34a]/[0.06] border border-[#16a34a]/20">
        <div className="text-3xl font-bold text-[#16a34a]">+1.34兆円</div>
        <div className="text-[11px] text-foreground/60">
          <div className="font-bold"><T ja="28年ぶりの黒字化" en="First surplus in 28 years" /></div>
          <div className="text-foreground/40"><T ja="2026年度当初予算ベース" en="Based on FY2026 initial budget" /></div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-brief-border hidden sm:block" />
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold z-10 ${
                    t.type === "positive" ? "bg-[#16a34a]" : "bg-[#ef4444]"
                  }`}
                >
                  {t.year}
                </div>
              </div>
              <div className="pt-1">
                <div className="text-sm font-bold"><T ja={t.label} en={t.labelEn} /></div>
                <div className="text-[11px] text-foreground/50"><T ja={t.note} en={t.noteEn} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 p-3 rounded-lg bg-[#f59e0b]/[0.06] border border-[#f59e0b]/15 text-[11px] text-foreground/60">
        <T
          ja="⚠️ 補正予算（18.3兆円）を合算すると実質赤字。「見かけ上の黒字」との指摘あり"
          en="⚠️ Including the supplementary budget (¥18.3T) reveals a de facto deficit — critics call it a cosmetic surplus"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Defense Spending Growth
   ───────────────────────────────────────────── */
export function DefenseSpendingDiagram() {
  const years = [
    { year: "2023", amount: 6.8, label: "6.8兆円" },
    { year: "2024", amount: 7.7, label: "7.7兆円" },
    { year: "2025", amount: 8.5, label: "8.5兆円" },
    { year: "2026", amount: 9.0, label: "9.0兆円" },
  ];
  const maxAmount = 10;

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="防衛費の推移">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="防衛関係費の推移" en="Defense Spending Growth" />
      </div>
      <div className="flex items-end gap-3 h-40 mb-3">
        {years.map((y, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="text-[11px] font-bold text-foreground/70 mb-1">{y.label}</div>
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${(y.amount / maxAmount) * 100}%`,
                backgroundColor: i === years.length - 1 ? "#ef4444" : "#f59e0b",
                opacity: i === years.length - 1 ? 1 : 0.4 + i * 0.15,
              }}
            />
            <div className="text-[10px] text-foreground/40 mt-1">{y.year}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#ef4444]">+32%</div>
          <div className="text-[10px] text-foreground/50"><T ja="3年間の増加率" en="3-year increase" /></div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-lg font-bold text-[#f59e0b]">43兆円</div>
          <div className="text-[10px] text-foreground/50"><T ja="5年間計画（2023-27）" en="5-year plan (2023–27)" /></div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   17 Strategic Sectors — Growth Investment Map
   ───────────────────────────────────────────── */
export function GrowthInvestmentDiagram() {
  const sectors = [
    { name: "半導体", nameEn: "Semiconductors", icon: "⚡", tier: 1 },
    { name: "AI", nameEn: "AI", icon: "🤖", tier: 1 },
    { name: "量子", nameEn: "Quantum", icon: "🔬", tier: 1 },
    { name: "バイオ", nameEn: "Biotech", icon: "🧬", tier: 1 },
    { name: "宇宙", nameEn: "Space", icon: "🚀", tier: 2 },
    { name: "海洋", nameEn: "Maritime", icon: "🌊", tier: 2 },
    { name: "重要鉱物", nameEn: "Critical minerals", icon: "⛏", tier: 2 },
    { name: "エネルギー", nameEn: "Energy", icon: "🔋", tier: 2 },
    { name: "次世代通信", nameEn: "Next-gen telecom", icon: "📡", tier: 2 },
    { name: "ロボティクス", nameEn: "Robotics", icon: "🦾", tier: 3 },
    { name: "サイバー", nameEn: "Cyber", icon: "🔐", tier: 3 },
    { name: "核融合", nameEn: "Fusion energy", icon: "☀️", tier: 3 },
    { name: "防災技術", nameEn: "Disaster tech", icon: "🏗", tier: 3 },
    { name: "食料・農業", nameEn: "Food & agriculture", icon: "🌾", tier: 3 },
    { name: "アニメ", nameEn: "Anime/content", icon: "🎬", tier: 3 },
    { name: "観光", nameEn: "Tourism", icon: "✈️", tier: 3 },
    { name: "造船", nameEn: "Shipbuilding", icon: "🚢", tier: 3 },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="17の戦略分野">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本成長戦略本部" en="Japan Growth Strategy Headquarters" />
      </div>
      <div className="text-lg font-bold mb-4">
        <T ja="17の戦略分野 × 6.4兆円" en="17 Strategic Sectors × ¥6.4T" />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {sectors.map((s, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg border text-center text-[10px] ${
              s.tier === 1
                ? "border-[#f59e0b]/30 bg-[#f59e0b]/[0.06]"
                : s.tier === 2
                ? "border-brief-border bg-foreground/[0.02]"
                : "border-brief-border bg-transparent"
            }`}
          >
            <div className="text-lg">{s.icon}</div>
            <div className="font-medium text-foreground/70 mt-0.5"><T ja={s.name} en={s.nameEn} /></div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-[10px] text-foreground/45">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#f59e0b]/30" /><T ja="最重点分野" en="Top priority" /></span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-foreground/10" /><T ja="重点分野" en="Priority" /></span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm border border-brief-border" /><T ja="戦略分野" en="Strategic" /></span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Household Measures — Education & Living Cost
   ───────────────────────────────────────────── */
export function HouseholdMeasuresDiagram() {
  const measures = [
    { name: "私立高校授業料 実質無償化", nameEn: "Tuition-free private high school (de facto)", date: "2026年4月〜", dateEn: "From Apr 2026", target: "約300万人", targetEn: "~3 million students", status: "施行済", statusEn: "In effect", color: "#8b5cf6" },
    { name: "公立小学校 給食費無償化", nameEn: "Free school lunches at public elementaries", date: "2026年4月〜", dateEn: "From Apr 2026", target: "全国公立小学生", targetEn: "All public elementary pupils", status: "施行済", statusEn: "In effect", color: "#3b82f6" },
    { name: "こども誰でも通園制度", nameEn: "Universal nursery access", date: "2026年4月〜", dateEn: "From Apr 2026", target: "3歳未満の未就園児", targetEn: "Children under 3 not in nursery", status: "施行済", statusEn: "In effect", color: "#16a34a" },
    { name: "ガソリン暫定税率 廃止", nameEn: "Abolition of provisional gasoline tax", date: "2025年12月〜", dateEn: "From Dec 2025", target: "年1.2万円/世帯", targetEn: "¥12,000/year per household", status: "施行済", statusEn: "In effect", color: "#f59e0b" },
    { name: "電気・ガス補助金", nameEn: "Electricity & gas subsidies", date: "〜2026年3月", dateEn: "until Mar 2026", target: "全世帯", targetEn: "All households", status: "終了", statusEn: "Ended", color: "#64748b" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="家計向け施策一覧">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="家計への主な負担軽減策" en="Key Household Cost-Relief Measures" />
      </div>
      <div className="space-y-2">
        {measures.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.02]">
            <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold truncate"><T ja={m.name} en={m.nameEn} /></div>
              <div className="text-[10px] text-foreground/45">
                <T ja={m.date} en={m.dateEn} /> ｜ <T ja={`対象: ${m.target}`} en={`Target: ${m.targetEn}`} />
              </div>
            </div>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                m.status === "施行済"
                  ? "bg-[#16a34a]/10 text-[#16a34a]"
                  : "bg-foreground/5 text-foreground/40"
              }`}
            >
              <T ja={m.status} en={m.statusEn} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Interest Rate Risk — Rising Costs
   ───────────────────────────────────────────── */
export function InterestRateRiskDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="金利上昇と国債費のリスク">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="金利上昇が財政に与えるインパクト" en="Impact of Rising Interest Rates on Public Finances" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#ef4444]/[0.06] border border-[#ef4444]/15 text-center">
          <div className="text-2xl font-bold text-[#ef4444]">2.34%</div>
          <div className="text-[10px] text-foreground/50"><T ja="10年国債利回り" en="10-year JGB yield" /></div>
          <div className="text-[9px] text-foreground/35"><T ja="2026年1月" en="January 2026" /></div>
        </div>
        <div className="p-3 rounded-lg bg-[#ef4444]/[0.06] border border-[#ef4444]/15 text-center">
          <div className="text-2xl font-bold text-[#ef4444]">3.87%</div>
          <div className="text-[10px] text-foreground/50"><T ja="30年国債利回り" en="30-year JGB yield" /></div>
          <div className="text-[9px] text-foreground/35"><T ja="過去最高（1999年発行以来）" en="All-time high (since 1999 issuance)" /></div>
        </div>
      </div>

      {/* Projection */}
      <div className="p-4 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] tracking-[1.5px] uppercase text-foreground/40 mb-3">
          <T ja="金利+1%が続いた場合の利払費推計" en="Projected interest costs if rates rise +1%" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="flex items-end justify-between mb-1">
              <span className="text-[11px] text-foreground/50"><T ja="2024年度" en="FY2024" /></span>
              <span className="text-sm font-bold">10.5兆円</span>
            </div>
            <div className="h-3 rounded-full bg-foreground/10 overflow-hidden">
              <div className="h-full rounded-full bg-[#f59e0b]" style={{ width: "30%" }} />
            </div>
          </div>
          <div className="text-foreground/30 text-lg">→</div>
          <div className="flex-1">
            <div className="flex items-end justify-between mb-1">
              <span className="text-[11px] text-foreground/50"><T ja="2034年度" en="FY2034" /></span>
              <span className="text-sm font-bold text-[#ef4444]">34.4兆円</span>
            </div>
            <div className="h-3 rounded-full bg-foreground/10 overflow-hidden">
              <div className="h-full rounded-full bg-[#ef4444]" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div className="text-[10px] text-foreground/40 mt-2 text-center">
          <T ja="3倍以上に膨張する可能性（財務省試算）" en="Could balloon to over 3× (Ministry of Finance estimate)" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Fiscal Sustainability — Japan vs G7
   ───────────────────────────────────────────── */
export function FiscalSustainabilityDiagram() {
  const ratings = [
    { agency: "S&P", rating: "A+", outlook: "ポジティブ", outlookEn: "Positive" },
    { agency: "Moody's", rating: "A1", outlook: "安定的", outlookEn: "Stable" },
    { agency: "Fitch", rating: "A", outlook: "安定的", outlookEn: "Stable" },
  ];

  const defenses = [
    { label: "経常黒字国", labelEn: "Current account surplus", desc: "対外純資産は世界最大", descEn: "World's largest net external assets" },
    { label: "国内保有比率", labelEn: "Domestic ownership", desc: "国債の約9割が国内投資家", descEn: "~90% of JGBs held domestically" },
    { label: "日銀の保有", labelEn: "BOJ holdings", desc: "国債の約5割を日銀が保有", descEn: "BOJ holds ~50% of outstanding JGBs" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="財政の持続可能性">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="日本の財政 — 格付けと防波堤" en="Japan's Finances — Credit Ratings & Buffers" />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {ratings.map((r, i) => (
          <div key={i} className="p-3 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-[10px] text-foreground/40 mb-1">{r.agency}</div>
            <div className="text-xl font-bold">{r.rating}</div>
            <div className="text-[9px] text-foreground/45 mt-0.5"><T ja={r.outlook} en={r.outlookEn} /></div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-[#ef4444]/[0.04] border border-[#ef4444]/10 text-center mb-4">
        <div className="text-[10px] text-foreground/40 mb-1"><T ja="政府債務残高（対GDP比）" en="Government debt-to-GDP ratio" /></div>
        <div className="text-3xl font-bold text-[#ef4444]">約260%</div>
        <div className="text-[10px] text-foreground/40 mt-0.5"><T ja="先進国中で突出して高い水準" en="Highest among advanced economies" /></div>
      </div>

      <div className="text-[10px] tracking-[1.5px] uppercase text-foreground/40 mb-3">
        <T ja="国債暴落を防ぐ3つの「防波堤」" en={`Three "Buffers" Against a JGB Market Crash`} />
      </div>
      <div className="space-y-2">
        {defenses.map((d, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#16a34a]/[0.04] border border-[#16a34a]/10">
            <div className="w-6 h-6 rounded-full bg-[#16a34a]/10 flex items-center justify-center text-[#16a34a] text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <div className="text-[12px] font-bold"><T ja={d.label} en={d.labelEn} /></div>
              <div className="text-[10px] text-foreground/45"><T ja={d.desc} en={d.descEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Three Scenarios — Outcome Matrix
   ───────────────────────────────────────────── */
export function ThreeScenariosDiagram() {
  const scenarios = [
    {
      name: "楽観",
      nameEn: "Optimistic",
      nameEnFull: "楽観シナリオ",
      nameEnFullEn: "Optimistic scenario",
      growth: "名目GDP 3%+",
      growthEn: "Nominal GDP 3%+",
      pb: "PB黒字定着",
      pbEn: "PB surplus sustained",
      risk: "低",
      riskEn: "Low",
      color: "#16a34a",
      condition: "戦略投資が成功、賃上げ5%以上定着",
      conditionEn: "Strategic investments succeed; wage growth ≥5% sustained",
    },
    {
      name: "基本",
      nameEn: "Baseline",
      nameEnFull: "基本シナリオ",
      nameEnFullEn: "Baseline scenario",
      growth: "名目GDP 1-2%",
      growthEn: "Nominal GDP 1–2%",
      pb: "補正込みで赤字",
      pbEn: "Deficit when including supplementary budget",
      risk: "中",
      riskEn: "Medium",
      color: "#f59e0b",
      condition: "効果は限定的、参院選後に修正路線",
      conditionEn: "Limited impact; policy course corrected after Upper House election",
    },
    {
      name: "悲観",
      nameEn: "Pessimistic",
      nameEnFull: "悲観シナリオ",
      nameEnFullEn: "Pessimistic scenario",
      growth: "成長鈍化",
      growthEn: "Growth slowdown",
      pb: "赤字拡大",
      pbEn: "Deficit expands",
      risk: "高",
      riskEn: "High",
      color: "#ef4444",
      condition: "長期金利3%超、格下げリスク顕在化",
      conditionEn: "Long-term rates exceed 3%; downgrade risk materializes",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card" role="img" aria-label="3つのシナリオ">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="高市積極財政の行方 — 3つのシナリオ" en="Takaichi Active Fiscal Policy — 3 Scenarios" />
      </div>
      <div className="space-y-3">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border"
            style={{ borderColor: `${s.color}30` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: s.color }}
              >
                <T ja={s.name} en={s.nameEn} />
              </span>
              <span className="text-[10px] text-foreground/40"><T ja={s.nameEnFull} en={s.nameEnFullEn} /></span>
            </div>
            <div className="text-[12px] text-foreground/70 mb-2"><T ja={s.condition} en={s.conditionEn} /></div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2 rounded bg-foreground/[0.03] text-center">
                <div className="text-foreground/40 mb-0.5"><T ja="成長率" en="Growth" /></div>
                <div className="font-bold"><T ja={s.growth} en={s.growthEn} /></div>
              </div>
              <div className="p-2 rounded bg-foreground/[0.03] text-center">
                <div className="text-foreground/40 mb-0.5">PB</div>
                <div className="font-bold"><T ja={s.pb} en={s.pbEn} /></div>
              </div>
              <div className="p-2 rounded bg-foreground/[0.03] text-center">
                <div className="text-foreground/40 mb-0.5"><T ja="財政リスク" en="Fiscal risk" /></div>
                <div className="font-bold" style={{ color: s.color }}><T ja={s.risk} en={s.riskEn} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
