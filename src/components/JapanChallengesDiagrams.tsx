"use client";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${label}`}>
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
  label: string;
  sub?: string;
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
    { num: "01", title: "少子化の加速", stat: "出生率 1.15", color: "#ef4444" },
    { num: "02", title: "高齢化と社会保障", stat: "高齢化率 29.3%", color: "#f97316" },
    { num: "03", title: "財政の崖", stat: "債務 GDP比235%", color: "#eab308" },
    { num: "04", title: "安全保障の激変", stat: "防衛費 9兆円超", color: "#3b82f6" },
    { num: "05", title: "労働力不足", stat: "2030年 700万人不足", color: "#8b5cf6" },
    { num: "06", title: "エネルギー脆弱性", stat: "自給率 13%", color: "#06b6d4" },
    { num: "07", title: "食料安全保障", stat: "自給率 38%", color: "#22c55e" },
  ];

  return (
    <DiagramCard label="日本が直面する7つの構造的課題">
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
              <span className="text-[12px] font-bold text-foreground/70">{c.title}</span>
            </div>
            <div className="flex-shrink-0 text-[11px] font-semibold tabular-nums" style={{ color: c.color }}>
              {c.stat}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[11px] text-foreground/40">
          これらの課題は互いに連鎖し増幅し合う「複合危機」。少子化→労働力不足→経済停滞→財政悪化→社会保障縮小→少子化加速という負のスパイラルが形成されている。
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
    { year: "1947", births: "268万", rate: "4.54", note: "第1次ベビーブーム" },
    { year: "1973", births: "209万", rate: "2.14", note: "第2次ベビーブーム" },
    { year: "1989", births: "125万", rate: "1.57", note: "1.57ショック" },
    { year: "2005", births: "106万", rate: "1.26", note: "過去最低（当時）" },
    { year: "2016", births: "98万", rate: "1.44", note: "初の100万人割れ" },
    { year: "2022", births: "77万", rate: "1.20", note: "初の80万人割れ" },
    { year: "2024", births: "68.6万", rate: "1.15", note: "初の70万人割れ" },
  ];

  return (
    <DiagramCard label="出生数と合計特殊出生率の推移">
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-2 font-semibold text-foreground/50">年</th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50">出生数</th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50">出生率</th>
              <th className="text-left py-2 pl-2 font-semibold text-foreground/50">備考</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.year} className="border-b border-foreground/[0.03]">
                <td className="py-2 pr-2 text-foreground/60 tabular-nums font-medium">{d.year}</td>
                <td className="py-2 px-2 text-right text-foreground/70 tabular-nums font-semibold">{d.births}</td>
                <td className="py-2 px-2 text-right tabular-nums font-semibold" style={{ color: parseFloat(d.rate) < 1.5 ? "#ef4444" : "var(--foreground)", opacity: parseFloat(d.rate) < 1.5 ? 0.8 : 0.7 }}>{d.rate}</td>
                <td className="py-2 pl-2 text-foreground/40 text-[11px]">{d.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <StatCard value="28.3%" label="男性 生涯未婚率" sub="2020年国勢調査" color="#ef4444" />
        <StatCard value="17.8%" label="女性 生涯未婚率" sub="2020年国勢調査" color="#ef4444" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   3. 高齢化と社会保障負担
   ───────────────────────────────────────────── */
export function JapanAgingBurdenDiagram() {
  const ratios = [
    { year: "1960", ratio: "11.2人", type: "胴上げ型", color: "#22c55e" },
    { year: "1990", ratio: "5.1人", type: "中間型", color: "#eab308" },
    { year: "2024", ratio: "2.0人", type: "騎馬戦型", color: "#f97316" },
    { year: "2060", ratio: "1.3人", type: "肩車型", color: "#ef4444" },
  ];

  return (
    <DiagramCard label="高齢者1人を支える現役世代の推移">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        {ratios.map((r) => (
          <div key={r.year} className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
            <div className="text-[10px] text-foreground/40 tabular-nums font-medium">{r.year}年</div>
            <div className="text-xl font-bold tabular-nums mt-1" style={{ color: r.color }}>{r.ratio}</div>
            <div className="text-[10px] text-foreground/50 mt-1 font-medium">{r.type}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="39.1兆円" label="社会保障関係費" sub="2026年度予算" />
        <StatCard value="122万人" label="介護職員不足" sub="2050年推計" color="#ef4444" />
        <StatCard value="56%" label="歳出に占める割合" sub="一般会計" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   4. 財政 — 債務残高と歳出構造
   ───────────────────────────────────────────── */
export function JapanFiscalDebtDiagram() {
  const countries = [
    { name: "日本", ratio: "235%", color: "#ef4444", width: "100%" },
    { name: "イタリア", ratio: "140%", color: "#f97316", width: "60%" },
    { name: "米国", ratio: "123%", color: "#eab308", width: "52%" },
    { name: "フランス", ratio: "112%", color: "#3b82f6", width: "48%" },
    { name: "英国", ratio: "104%", color: "#8b5cf6", width: "44%" },
    { name: "ドイツ", ratio: "63%", color: "#22c55e", width: "27%" },
  ];

  return (
    <DiagramCard label="政府債務残高の国際比較（対GDP比）">
      <div className="space-y-2.5 mt-3">
        {countries.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-16 text-[11px] font-medium text-foreground/60 text-right flex-shrink-0">{c.name}</div>
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
        <StatCard value="122.3兆円" label="一般会計歳出" sub="2026年度" />
        <StatCard value="28.2兆円" label="国債費" sub="利払い＋元本返済" />
        <StatCard value="1.5%" label="10年国債利回り" sub="2026年3月" color="#eab308" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5. 防衛費の推移
   ───────────────────────────────────────────── */
export function JapanDefenseSpendingDiagram() {
  const timeline = [
    { year: "2022", amount: "5.4兆円", gdp: "1.0%", event: "安保3文書策定" },
    { year: "2023", amount: "6.8兆円", gdp: "1.2%", event: "5カ年計画1年目" },
    { year: "2024", amount: "7.7兆円", gdp: "1.5%", event: "反撃能力整備" },
    { year: "2025", amount: "8.3兆円", gdp: "1.7%", event: "無人アセット拡充" },
    { year: "2026", amount: "9.0兆円超", gdp: "2.0%", event: "GDP比2%達成" },
  ];

  return (
    <DiagramCard label="防衛費の推移と主要イベント">
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
              <div className="text-[11px] text-foreground/40 mt-0.5">{t.event}</div>
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
    { name: "医療・介護", shortage: "187万人", severity: "極めて深刻", color: "#ef4444" },
    { name: "建設業", shortage: "90万人", severity: "深刻", color: "#f97316" },
    { name: "運輸・物流", shortage: "75万人", severity: "深刻", color: "#eab308" },
    { name: "サービス業", shortage: "120万人", severity: "深刻", color: "#8b5cf6" },
    { name: "製造業", shortage: "85万人", severity: "中程度", color: "#3b82f6" },
    { name: "その他", shortage: "143万人", severity: "—", color: "#6b7280" },
  ];

  return (
    <DiagramCard label="2030年の産業別労働力不足予測">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
        {sectors.map((s) => (
          <div key={s.name} className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="text-[11px] text-foreground/40 font-medium">{s.name}</div>
            <div className="text-lg font-bold tabular-nums mt-1" style={{ color: s.color }}>{s.shortage}</div>
            <div className="text-[9px] mt-0.5" style={{ color: s.color, opacity: 0.7 }}>{s.severity}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="700万人" label="総不足数（2030年）" color="#ef4444" />
        <StatCard value="323件" label="人手不足倒産" sub="2025年1〜10月" />
        <StatCard value="230万人" label="外国人労働者" sub="2024年10月時点" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   7. エネルギー・食料自給率
   ───────────────────────────────────────────── */
export function JapanSelfSufficiencyDiagram() {
  const items = [
    { category: "エネルギー", rate: "13%", target: "—", risk: "原油の中東依存95%", color: "#06b6d4" },
    { category: "食料（カロリー）", rate: "38%", target: "45%（2030年目標）", risk: "15年連続40%割れ", color: "#22c55e" },
    { category: "米", rate: "98%", target: "—", risk: "安定", color: "#22c55e" },
    { category: "野菜", rate: "75%", target: "—", risk: "やや安定", color: "#22c55e" },
    { category: "小麦", rate: "17%", target: "—", risk: "輸入依存", color: "#ef4444" },
    { category: "大豆", rate: "26%", target: "—", risk: "輸入依存", color: "#f97316" },
  ];

  return (
    <DiagramCard label="日本の自給率 — エネルギーと食料">
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2 pr-2 font-semibold text-foreground/50">品目</th>
              <th className="text-right py-2 px-2 font-semibold text-foreground/50">自給率</th>
              <th className="text-left py-2 px-2 font-semibold text-foreground/50">目標</th>
              <th className="text-left py-2 pl-2 font-semibold text-foreground/50">リスク評価</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.category} className="border-b border-foreground/[0.03]">
                <td className="py-2 pr-2 text-foreground/60 font-medium">{item.category}</td>
                <td className="py-2 px-2 text-right tabular-nums font-bold" style={{ color: item.color }}>{item.rate}</td>
                <td className="py-2 px-2 text-foreground/40 text-[11px]">{item.target}</td>
                <td className="py-2 pl-2 text-foreground/40 text-[11px]">{item.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#ef4444]/[0.04] border border-[#ef4444]/10">
        <div className="text-[11px] text-[#ef4444]/60 font-medium">
          農業従事者の平均年齢は68.7歳。2024年上半期の農業事業者倒産件数は過去30年で最多を記録した。
        </div>
      </div>
    </DiagramCard>
  );
}
