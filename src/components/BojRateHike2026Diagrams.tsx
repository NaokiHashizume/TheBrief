"use client";

/* ─────────────────────────────────────────────
   BojRateHike2026Diagrams — 日銀利上げ2026
   ───────────────────────────────────────────── */

/* 1. 政策金利の推移 */
export function BojPolicyRateDiagram() {
  const rateHistory = [
    { period: "2016年1月", rate: -0.1, label: "マイナス金利導入", color: "#94a3b8" },
    { period: "2024年3月", rate: 0.0, label: "マイナス金利解除", color: "#d97706" },
    { period: "2024年7月", rate: 0.25, label: "0.25%へ利上げ", color: "#d97706" },
    { period: "2025年1月", rate: 0.5, label: "0.50%へ利上げ", color: "#d97706" },
    { period: "2025年12月", rate: 0.75, label: "0.75%へ利上げ", color: "#d97706" },
    { period: "2026年後半（予想）", rate: 1.0, label: "1.0%へ（市場予想）", color: "#f59e0b" },
    { period: "ターミナルレート（予想）", rate: 1.5, label: "1.5%（中期目標）", color: "#fbbf24" },
  ];

  const maxRate = 1.6;
  const minRate = -0.2;
  const range = maxRate - minRate;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日銀政策金利の推移チャート（2016〜2026年）"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        BOJ Policy Rate
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        日銀政策金利の推移と今後の予想（2016年〜2026年以降）
      </div>

      <div className="space-y-2.5">
        {rateHistory.map((item, i) => {
          const barWidth = Math.max(((item.rate - minRate) / range) * 100, 2);
          const isNegative = item.rate < 0;
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="w-36 shrink-0">
                <div className="text-[9px] text-foreground/45 leading-tight">{item.period}</div>
              </div>
              <div className="flex-1 relative h-7 bg-foreground/[0.03] rounded overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 rounded flex items-center justify-end pr-2"
                  style={{
                    width: `${barWidth}%`,
                    backgroundColor: isNegative ? "#ef4444" : item.color,
                    opacity: i >= 5 ? 0.55 : 0.85,
                  }}
                >
                  <span className="text-[9px] font-bold text-white tabular-nums whitespace-nowrap">
                    {item.rate >= 0 ? "+" : ""}{item.rate.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="w-40 shrink-0">
                <div className="text-[9px] text-foreground/55 leading-tight">{item.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 rounded-lg border" style={{ backgroundColor: "#d97706" + "08", borderColor: "#d97706" + "20" }}>
        <div className="text-[10px] font-bold mb-0.5" style={{ color: "#d97706" }}>2026年1月現在</div>
        <div className="text-[11px] text-foreground/70">
          政策金利 <strong>0.75%</strong>（据え置き）。次回利上げは2026年後半が有力視。植田総裁は「引き続き金融緩和の度合いを調整する」と発言。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 日本銀行, NRI 木内登英, ダイヤモンド (2026-01)
      </div>
    </div>
  );
}

/* 2. インフレ率と実質賃金の乖離 */
export function BojInflationWagesDiagram() {
  const data = [
    { period: "2025年4月", cpi: 3.6, realWage: -0.1, color: "#ef4444" },
    { period: "2025年7月", cpi: 2.7, realWage: -0.2, color: "#ef4444" },
    { period: "2025年10月", cpi: 2.3, realWage: 0.4, color: "#16a34a" },
    { period: "2026年1月", cpi: 2.0, realWage: 0.6, color: "#16a34a" },
    { period: "2026年2月", cpi: 1.6, realWage: 0.8, color: "#16a34a" },
    { period: "2026年3月（予想）", cpi: 2.1, realWage: 0.5, color: "#d97706" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="コアCPIと実質賃金の推移グラフ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Inflation vs. Real Wages
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        コアCPI（前年比）と実質賃金（前年比）の推移（2025年4月〜2026年3月）
      </div>

      <div className="flex gap-4 mb-4 text-[9px]">
        <span className="flex items-center gap-1.5 text-foreground/60">
          <span className="w-3 h-2.5 rounded-sm" style={{ backgroundColor: "#d97706" }} />
          コアCPI（前年比%）
        </span>
        <span className="flex items-center gap-1.5 text-foreground/60">
          <span className="w-3 h-2.5 rounded-sm" style={{ backgroundColor: "#3b82f6" }} />
          実質賃金（前年比%）
        </span>
      </div>

      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="space-y-1">
            <div className="text-[9px] text-foreground/40 font-medium">{d.period}</div>
            <div className="flex gap-2 items-center">
              <span className="text-[8px] text-foreground/40 w-16 shrink-0">コアCPI</span>
              <div className="flex-1 h-4 bg-foreground/[0.03] rounded overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{ width: `${(d.cpi / 4) * 100}%`, backgroundColor: "#d97706", opacity: 0.75 }}
                />
              </div>
              <span className="text-[9px] font-bold tabular-nums w-10 text-right" style={{ color: "#d97706" }}>+{d.cpi}%</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[8px] text-foreground/40 w-16 shrink-0">実質賃金</span>
              <div className="flex-1 h-4 bg-foreground/[0.03] rounded overflow-hidden">
                {d.realWage >= 0 ? (
                  <div
                    className="h-full rounded"
                    style={{ width: `${(d.realWage / 2) * 100}%`, backgroundColor: "#16a34a", opacity: 0.75 }}
                  />
                ) : (
                  <div
                    className="h-full rounded ml-auto"
                    style={{ width: `${(Math.abs(d.realWage) / 2) * 100}%`, backgroundColor: "#ef4444", opacity: 0.75 }}
                  />
                )}
              </div>
              <span
                className="text-[9px] font-bold tabular-nums w-10 text-right"
                style={{ color: d.realWage >= 0 ? "#16a34a" : "#ef4444" }}
              >
                {d.realWage >= 0 ? "+" : ""}{d.realWage}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg border border-amber-500/20 bg-amber-500/[0.04]">
        <div className="text-[10px] font-bold mb-1 text-amber-600">批評的読みのポイント</div>
        <div className="text-[10px] text-foreground/65 leading-relaxed">
          2026年2月のコアCPIは3年11カ月ぶりに2%割れ（1.6%）。日銀の「物価安定目標」達成という根拠が揺らいでいる中での利上げ継続は、円安対策・財政正常化への配慮が本質的動機である可能性が高い。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 総務省統計局, 第一生命経済研究所, ニッセイ基礎研究所 (2026-03)
      </div>
    </div>
  );
}

/* 3. 変動金利住宅ローンへの影響 */
export function BojMortgageImpactDiagram() {
  const scenarios = [
    {
      label: "借入残高 2,000万円",
      remainingYears: "残20年",
      increasePerHike: "+1,400円/月",
      totalIncrease2026: "+2,800円/月",
      annualBurden: "+約3.4万円/年",
      color: "#d97706",
    },
    {
      label: "借入残高 3,000万円",
      remainingYears: "残25年",
      increasePerHike: "+2,100円/月",
      totalIncrease2026: "+4,200円/月",
      annualBurden: "+約5.0万円/年",
      color: "#d97706",
    },
    {
      label: "借入残高 4,000万円",
      remainingYears: "残30年",
      increasePerHike: "+2,800円/月",
      totalIncrease2026: "+5,600円/月",
      annualBurden: "+約6.7万円/年",
      color: "#f59e0b",
    },
    {
      label: "借入残高 5,000万円",
      remainingYears: "残30年",
      increasePerHike: "+3,500円/月",
      totalIncrease2026: "+7,000円/月",
      annualBurden: "+約8.4万円/年",
      color: "#ef4444",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="変動金利住宅ローン 利上げ影響シミュレーション"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Mortgage Impact
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        変動金利住宅ローン 利上げ0.25%ごとの月次返済増加試算
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: s.color, backgroundColor: s.color + "08" }}
          >
            <div className="text-[11px] font-bold text-foreground/80 mb-1">{s.label}</div>
            <div className="text-[9px] text-foreground/45 mb-2">{s.remainingYears} / 0.25%利上げ1回あたり</div>
            <div className="text-[14px] font-bold tabular-nums" style={{ color: s.color }}>
              {s.increasePerHike}
            </div>
            <div className="text-[10px] text-foreground/55 mt-1">
              2026年累計（2回分）: <span className="font-semibold">{s.totalIncrease2026}</span>
            </div>
            <div className="text-[10px] text-foreground/50">
              年間負担増: <span className="font-semibold">{s.annualBurden}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg border border-foreground/[0.06] bg-foreground/[0.02]">
        <div className="text-[10px] font-bold text-foreground/60 mb-1.5">重要な仕組み（5年ルール・125%ルール）</div>
        <div className="space-y-1 text-[10px] text-foreground/55 leading-relaxed">
          <div>• <strong>5年ルール</strong>：利上げ後も5年間は返済額が変わらない（ただし利息比率が増え元本返済が減少）</div>
          <div>• <strong>125%ルール</strong>：返済額は前回の1.25倍が上限（急激な返済増を抑制）</div>
          <div>• 変動金利の基準金利改定は年2回（4月・10月）。実際の返済増は2〜3カ月後から反映</div>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: モゲチェック, 住まいサーフィン, 楽天証券トウシル (2026-04)
      </div>
    </div>
  );
}

/* 4. 企業債務と中小企業の金利耐性 */
export function BojCorporateDebtDiagram() {
  const sectors = [
    {
      name: "大企業（製造業）",
      debtRatio: "中程度",
      interestCoverage: "8〜15倍",
      riskLevel: 1,
      note: "内部留保が厚く、金利上昇吸収力大",
      color: "#16a34a",
    },
    {
      name: "大企業（非製造業）",
      debtRatio: "低〜中",
      interestCoverage: "10〜20倍",
      riskLevel: 1,
      note: "不動産・金融セクターは資産価値上昇の恩恵も",
      color: "#16a34a",
    },
    {
      name: "中堅企業",
      debtRatio: "中",
      interestCoverage: "3〜8倍",
      riskLevel: 2,
      note: "業種・地域により格差。設備投資抑制リスク",
      color: "#d97706",
    },
    {
      name: "中小企業（製造）",
      debtRatio: "高",
      interestCoverage: "1〜3倍",
      riskLevel: 4,
      note: "0.5%利上げ1回で年間68万円コスト増（1社平均）",
      color: "#f97316",
    },
    {
      name: "中小企業（サービス）",
      debtRatio: "高",
      interestCoverage: "1〜2倍",
      riskLevel: 5,
      note: "コロナ融資（ゼロゼロ融資）返済と利上げが重なる最悪の時期",
      color: "#ef4444",
    },
    {
      name: "零細・個人事業主",
      debtRatio: "変動大",
      interestCoverage: "1倍未満も多数",
      riskLevel: 5,
      note: "利上げで赤字転落リスク：帝国DBが1.8%（約1,700社）と試算",
      color: "#ef4444",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="企業規模別 金利上昇耐性マトリクス"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Corporate Debt Resilience
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        企業規模別 金利上昇耐性マトリクス（2026年）
      </div>

      <div className="space-y-3">
        {sectors.map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-28 shrink-0">
              <div className="text-[10px] font-semibold text-foreground/80 leading-tight">{s.name}</div>
              <div className="text-[9px] text-foreground/45 mt-0.5">IC比率: {s.interestCoverage}</div>
            </div>
            <div className="flex-1">
              <div className="flex gap-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <div
                    key={lvl}
                    className={`h-2.5 flex-1 rounded-sm ${lvl > s.riskLevel ? "bg-foreground/[0.05]" : ""}`}
                    style={
                      lvl <= s.riskLevel
                        ? { backgroundColor: s.color, opacity: 0.35 + (lvl / 5) * 0.65 }
                        : undefined
                    }
                  />
                ))}
              </div>
              <p className="text-[10px] text-foreground/50 leading-relaxed">{s.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg border border-red-500/20 bg-red-500/[0.04]">
        <div className="text-[10px] font-bold mb-1 text-red-600">ゾンビ企業問題</div>
        <div className="text-[10px] text-foreground/65 leading-relaxed">
          2020〜2022年のゼロゼロ融資（無利子・無担保）で生き延びた約30万社が2024〜2026年に本格返済期を迎え、利上げが重なることで倒産・廃業が急増するリスクがある。2026年の企業倒産件数は前年比増加が見込まれる。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 帝国データバンク, 中小企業庁, みずほリサーチ&テクノロジーズ (2025-12〜2026-01)
      </div>
    </div>
  );
}

/* 5. 日銀vsFed — 政策乖離の比較 */
export function BojVsFedDiagram() {
  const comparison = [
    {
      item: "現在の政策金利",
      boj: "0.75%",
      fed: "4.25〜4.50%",
      diff: "▲3.75%差",
      color: "#d97706",
    },
    {
      item: "金利の方向性",
      boj: "引き上げ継続",
      fed: "据え置き〜引き下げ",
      diff: "逆方向",
      color: "#d97706",
    },
    {
      item: "インフレ目標",
      boj: "2%（達成中）",
      fed: "2%（超過中）",
      diff: "同目標・異フェーズ",
      color: "#94a3b8",
    },
    {
      item: "実質金利",
      boj: "約▲0.8%（マイナス圏）",
      fed: "約+2.2%",
      diff: "▲3%超の差",
      color: "#ef4444",
    },
    {
      item: "為替への影響",
      boj: "円高圧力（利上げ）",
      fed: "ドル高圧力（高金利維持）",
      diff: "ドル/円は膠着",
      color: "#94a3b8",
    },
    {
      item: "ターミナルレート予想",
      boj: "1.0〜1.5%",
      fed: "3.5〜4.0%",
      diff: "依然として大幅差",
      color: "#d97706",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日銀とFRBの金融政策比較表"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        BOJ vs. Fed
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        日銀とFRBの金融政策比較（2026年4月時点）
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left text-foreground/40 font-semibold py-2 pr-3 w-36">指標</th>
              <th className="text-left text-foreground/40 font-semibold py-2 pr-3">
                <span style={{ color: "#d97706" }}>日銀（BOJ）</span>
              </th>
              <th className="text-left text-foreground/40 font-semibold py-2 pr-3">
                <span className="text-blue-500">Fed（米国）</span>
              </th>
              <th className="text-left text-foreground/40 font-semibold py-2">差異</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} className="border-b border-foreground/[0.03]">
                <td className="py-2 pr-3 text-foreground/60 font-medium">{row.item}</td>
                <td className="py-2 pr-3 text-foreground/80 font-semibold" style={{ color: "#d97706" }}>{row.boj}</td>
                <td className="py-2 pr-3 text-blue-500 font-semibold">{row.fed}</td>
                <td className="py-2 text-foreground/50" style={{ color: row.color }}>{row.diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 rounded-lg border border-amber-500/20 bg-amber-500/[0.04]">
        <div className="text-[10px] font-bold mb-1 text-amber-600">円安構造の根本原因</div>
        <div className="text-[10px] text-foreground/65 leading-relaxed">
          日米の実質金利差が約3%超ある限り、円安圧力は構造的に続く。日銀が0.25%ずつ利上げしても焼け石に水。「利上げが円安を止めるための手段」という側面が透けて見える。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: FRB, 日本銀行, NRI木内, JBpress (2026-04)
      </div>
    </div>
  );
}

/* 6. 今後のシナリオ分析 */
export function BojScenarioDiagram() {
  const scenarios = [
    {
      name: "正常化シナリオ",
      nameEn: "Normalization",
      prob: "45%",
      condition: "賃金上昇が持続・コアCPI2%安定維持",
      rate2026end: "1.00%",
      rate2027end: "1.25〜1.50%",
      mortgage: "変動金利+0.5〜0.75%",
      corporate: "倒産件数：緩やかに増加",
      fx: "145〜152円/ドル",
      color: "#16a34a",
    },
    {
      name: "慎重シナリオ",
      nameEn: "Cautious",
      prob: "40%",
      condition: "実質賃金伸び悩み・内需弱く利上げ減速",
      rate2026end: "0.75〜1.00%",
      rate2027end: "1.00〜1.25%",
      mortgage: "変動金利+0.25〜0.5%",
      corporate: "倒産件数：横ばい〜微増",
      fx: "150〜158円/ドル",
      color: "#d97706",
    },
    {
      name: "後退シナリオ",
      nameEn: "Reversal",
      prob: "15%",
      condition: "景気後退・デフレ圧力再燃→利上げ停止",
      rate2026end: "0.75%（現状維持）",
      rate2027end: "利下げも視野",
      mortgage: "変動金利影響なし",
      corporate: "倒産件数：急増（景気後退要因）",
      fx: "155〜165円/ドル（超円安）",
      color: "#ef4444",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日銀金融政策 今後のシナリオ分析"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        BOJ Scenarios
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        日銀金融政策 今後のシナリオ別影響（2026〜2027年）
      </div>

      <div className="space-y-4">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: s.color, backgroundColor: s.color + "06" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[13px] font-bold text-foreground/85">{s.name}</span>
                <span className="text-[10px] text-foreground/40 ml-2">{s.nameEn}</span>
              </div>
              <span
                className="text-[12px] font-bold tabular-nums px-2 py-0.5 rounded-md text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.prob}
              </span>
            </div>
            <p className="text-[10px] text-foreground/60 mb-3 leading-relaxed italic">{s.condition}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { label: "2026年末金利", val: s.rate2026end },
                { label: "2027年末金利", val: s.rate2027end },
                { label: "ドル/円", val: s.fx },
              ].map((m) => (
                <div key={m.label} className="text-center p-2 rounded bg-foreground/[0.02]">
                  <div className="text-[8px] text-foreground/40 mb-0.5">{m.label}</div>
                  <div className="text-[10px] font-bold tabular-nums" style={{ color: s.color }}>
                    {m.val}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-[9px] text-foreground/50">
              <div>住宅ローン: {s.mortgage}</div>
              <div>企業: {s.corporate}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: 野村総研, みずほリサーチ, 第一生命経済研究所, NRI木内 (2026-01〜04)
      </div>
    </div>
  );
}
