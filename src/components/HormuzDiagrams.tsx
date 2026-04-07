"use client";

/* ─────────────────────────────────────────────
   Crisis Timeline Diagram
   ───────────────────────────────────────────── */
export function CrisisTimelineDiagram() {
  const events = [
    {
      date: "2/28",
      label: "米・イスラエル空爆開始",
      detail: "エピック・フューリー作戦",
      severity: "critical",
    },
    {
      date: "3/2",
      label: "IRGC封鎖宣言",
      detail: "「通過する船は燃やす」",
      severity: "critical",
    },
    {
      date: "3/4",
      label: "QatarEnergy生産停止",
      detail: "世界LNG供給の20%喪失",
      severity: "high",
    },
    {
      date: "3/5",
      label: "保険引受停止",
      detail: "大手海運6社が通過中止",
      severity: "high",
    },
    {
      date: "3/6",
      label: "通航隻数激減",
      detail: "1日120隻→わずか5隻に",
      severity: "critical",
    },
    {
      date: "3/8",
      label: "原油100ドル突破",
      detail: "ピーク時126ドルに到達",
      severity: "high",
    },
    {
      date: "3/11",
      label: "首相が独自放出決定",
      detail: "IEA協調を待たず歴史的判断",
      severity: "response",
    },
    {
      date: "3/16",
      label: "備蓄放出開始",
      detail: "日本は8,000万バレル",
      severity: "response",
    },
    {
      date: "3/21",
      label: "イラン、日本船通航許可へ",
      detail: "外相間で交渉進行中",
      severity: "response",
    },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        2026年ホルムズ海峡危機
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        2026年2月〜3月の主要イベント
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-5 text-[9px] text-foreground/50">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
          危機的事象
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          深刻な影響
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
          対応措置
        </span>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-foreground/10" />

        <div className="space-y-3">
          {events.map((event, i) => {
            const color =
              severityColor[event.severity as keyof typeof severityColor];
            return (
              <div key={i} className="relative pl-8">
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ backgroundColor: color.bg }}
                >
                  <span className="text-white text-[8px] font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{ color: color.text }}
                  >
                    {event.date}
                  </span>
                  <span className="text-sm font-semibold">{event.label}</span>
                </div>
                <div className="text-[11px] text-foreground/50 mt-0.5">
                  {event.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Oil Dependency Diagram — Japan's Import Sources
   ───────────────────────────────────────────── */
export function OilDependencyDiagram() {
  const oilSources = [
    { country: "UAE", share: 40.9, color: "#dc2626" },
    { country: "サウジアラビア", share: 39.3, color: "#ef4444" },
    { country: "クウェート", share: 6.1, color: "#f97316" },
    { country: "カタール", share: 4.1, color: "#fb923c" },
    { country: "その他中東", share: 3.6, color: "#fdba74" },
    { country: "非中東", share: 6.0, color: "#3b82f6" },
  ];

  const lngSources = [
    { country: "オーストラリア", share: 39.7, color: "#3b82f6" },
    { country: "マレーシア", share: 14.8, color: "#60a5fa" },
    { country: "ロシア", share: 8.9, color: "#93c5fd" },
    { country: "カタール", share: 5.3, color: "#ef4444" },
    { country: "UAE", share: 1.0, color: "#f87171" },
    { country: "その他", share: 30.3, color: "#a5b4fc" },
  ];

  const maxBar = 45;

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        日本のエネルギー輸入元（2025年）
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Crude Oil */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-bold">原油輸入先</h4>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-medium">
              中東依存 94%
            </span>
          </div>
          <div className="space-y-1.5">
            {oilSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/60 w-20 flex-shrink-0 text-right tabular-nums">
                  {s.country}
                </span>
                <div className="flex-1 h-4 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded transition-all"
                    style={{
                      width: `${(s.share / maxBar) * 100}%`,
                      backgroundColor: s.color,
                      opacity: 0.75,
                    }}
                  />
                </div>
                <span className="text-[10px] font-medium tabular-nums w-10 text-right">
                  {s.share}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LNG */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-bold">LNG輸入先</h4>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
              ホルムズ依存 6.3%
            </span>
          </div>
          <div className="space-y-1.5">
            {lngSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/60 w-20 flex-shrink-0 text-right tabular-nums">
                  {s.country}
                </span>
                <div className="flex-1 h-4 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded transition-all"
                    style={{
                      width: `${(s.share / maxBar) * 100}%`,
                      backgroundColor: s.color,
                      opacity: 0.75,
                    }}
                  />
                </div>
                <span className="text-[10px] font-medium tabular-nums w-10 text-right">
                  {s.share}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: 経済産業省 石油統計速報、JETRO（2025年データ）
        赤系 = ホルムズ海峡経由 / 青系 = 非ホルムズルート
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Economic Impact Scenarios Diagram
   ───────────────────────────────────────────── */
export function EconomicImpactDiagram() {
  const scenarios = [
    {
      name: "ベースシナリオ",
      oilPrice: "$87",
      gdp: "−0.18%",
      cpi: "+0.31%",
      gasoline: "200円超/L",
      color: "#f59e0b",
      bgColor: "#f59e0b10",
    },
    {
      name: "悲観シナリオ",
      oilPrice: "$140",
      gdp: "−0.65%",
      cpi: "+1.14%",
      gasoline: "250円超/L",
      color: "#ef4444",
      bgColor: "#ef444410",
    },
    {
      name: "最悪シナリオ",
      oilPrice: "供給途絶",
      gdp: "−3.0%",
      cpi: "大幅上昇",
      gasoline: "供給制限",
      color: "#991b1b",
      bgColor: "#991b1b10",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        経済影響シナリオ
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        原油価格シナリオ別の日本経済への影響試算（NRI・日本総研）
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {scenarios.map((s) => (
          <div
            key={s.name}
            className="p-4 rounded-lg border"
            style={{
              borderColor: `${s.color}30`,
              backgroundColor: s.bgColor,
            }}
          >
            <div
              className="text-xs font-bold mb-3"
              style={{ color: s.color }}
            >
              {s.name}
            </div>

            <div className="space-y-2">
              <div>
                <div className="text-[9px] text-foreground/40 uppercase">
                  原油価格
                </div>
                <div className="text-lg font-bold tabular-nums">
                  {s.oilPrice}
                </div>
              </div>
              <div className="h-px bg-foreground/5" />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[9px] text-foreground/40">GDP影響</div>
                  <div
                    className="text-sm font-bold tabular-nums"
                    style={{ color: s.color }}
                  >
                    {s.gdp}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-foreground/40">物価影響</div>
                  <div className="text-sm font-bold tabular-nums">
                    {s.cpi}
                  </div>
                </div>
              </div>
              <div className="h-px bg-foreground/5" />
              <div>
                <div className="text-[9px] text-foreground/40">
                  ガソリン価格
                </div>
                <div className="text-xs font-medium">{s.gasoline}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: 野村総合研究所（NRI）木内登英氏試算、日本総合研究所
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Oil Reserves Breakdown Diagram
   ───────────────────────────────────────────── */
export function OilReservesDiagram() {
  const reserves = [
    {
      type: "国家備蓄",
      days: 146,
      volume: "4,319万KL",
      detail: "原油4,177万KL + 石油製品142万KL",
      color: "#3b82f6",
    },
    {
      type: "民間備蓄",
      days: 96,
      volume: "2,778万KL",
      detail: "原油1,278万KL + 石油製品1,500万KL",
      color: "#8b5cf6",
    },
    {
      type: "産油国共同備蓄",
      days: 6,
      volume: "191万KL",
      detail: "UAE・サウジとの共同備蓄",
      color: "#f59e0b",
    },
  ];

  const totalDays = 248;
  const totalVolume = "7,289万KL";

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        日本の戦略石油備蓄
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        2026年1月末時点（IEA協調放出後）
      </div>

      {/* Total */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-3xl font-bold tabular-nums">{totalDays}</span>
        <span className="text-sm text-foreground/50">日分</span>
        <span className="text-sm text-foreground/40">（{totalVolume}）</span>
      </div>

      {/* Stacked bar */}
      <div className="flex h-8 rounded-lg overflow-hidden mb-4">
        {reserves.map((r) => (
          <div
            key={r.type}
            className="flex items-center justify-center"
            style={{
              width: `${(r.days / totalDays) * 100}%`,
              backgroundColor: r.color,
              opacity: 0.8,
            }}
          >
            <span className="text-white text-[9px] font-bold">
              {r.days}日
            </span>
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {reserves.map((r) => (
          <div
            key={r.type}
            className="p-3 rounded-lg"
            style={{
              borderLeft: `3px solid ${r.color}`,
              backgroundColor: `${r.color}08`,
            }}
          >
            <div className="text-xs font-semibold">{r.type}</div>
            <div className="text-lg font-bold tabular-nums mt-0.5">
              {r.days}
              <span className="text-xs text-foreground/40 ml-1">日分</span>
            </div>
            <div className="text-[10px] text-foreground/50 mt-0.5">
              {r.volume}
            </div>
            <div className="text-[9px] text-foreground/35 mt-0.5">
              {r.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
        <div className="text-[10px] font-medium text-red-600 dark:text-red-400">
          注意：専門家の指摘
        </div>
        <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
          「254日分」の備蓄数値について、精製キャパシティや輸送制約を考慮すると「実際に使用可能な量は半分以下」との指摘がある。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 資源エネルギー庁 石油備蓄の現況、経済産業省
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Industry Impact Heatmap
   ───────────────────────────────────────────── */
export function IndustryImpactDiagram() {
  const industries = [
    {
      name: "電力・ガス",
      shortTerm: 4,
      midTerm: 5,
      detail: "LNGスポット価格急騰、補助金終了と重複",
    },
    {
      name: "石油化学・素材",
      shortTerm: 5,
      midTerm: 4,
      detail: "ナフサ価格上昇→プラスチック・合成繊維全般に波及",
    },
    {
      name: "物流・海運",
      shortTerm: 5,
      midTerm: 4,
      detail: "喜望峰迂回で航行日数2.5倍、コスト300〜500万ドル増",
    },
    {
      name: "食料・農業",
      shortTerm: 2,
      midTerm: 5,
      detail: "肥料（アンモニア）価格上昇→3〜6カ月後に農産物に波及",
    },
    {
      name: "自動車",
      shortTerm: 3,
      midTerm: 4,
      detail: "部品コスト増＋円安ダブルパンチ、EV需要増の可能性も",
    },
    {
      name: "航空",
      shortTerm: 5,
      midTerm: 3,
      detail: "ジェット燃料は即座に影響、燃油サーチャージ大幅引上げ",
    },
  ];

  function heatColor(level: number): string {
    const colors = ["", "#fef3c7", "#fde68a", "#fbbf24", "#f59e0b", "#dc2626"];
    return colors[level] || "#e5e7eb";
  }

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        産業別影響評価
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        産業別の影響度（5段階: 1=軽微 〜 5=深刻）
      </div>

      {/* Header */}
      <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[140px_80px_80px_1fr] gap-2 mb-2">
        <div className="text-[9px] font-medium text-foreground/40">産業</div>
        <div className="text-[9px] font-medium text-foreground/40 text-center">
          短期
        </div>
        <div className="text-[9px] font-medium text-foreground/40 text-center">
          中期
        </div>
        <div className="text-[9px] font-medium text-foreground/40 hidden sm:block">
          影響の概要
        </div>
      </div>

      <div className="space-y-1.5">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[140px_80px_80px_1fr] gap-2 items-center"
          >
            <div className="text-xs font-semibold">{ind.name}</div>
            <div className="flex justify-center">
              <span
                className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: heatColor(ind.shortTerm),
                  color: ind.shortTerm >= 4 ? "#fff" : "#92400e",
                }}
              >
                {ind.shortTerm}
              </span>
            </div>
            <div className="flex justify-center">
              <span
                className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: heatColor(ind.midTerm),
                  color: ind.midTerm >= 4 ? "#fff" : "#92400e",
                }}
              >
                {ind.midTerm}
              </span>
            </div>
            <div className="text-[10px] text-foreground/50 hidden sm:block leading-relaxed">
              {ind.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-1 text-[9px] text-foreground/35">
        <span>影響度:</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className="w-5 h-5 rounded flex items-center justify-center font-bold"
            style={{
              backgroundColor: heatColor(n),
              color: n >= 4 ? "#fff" : "#92400e",
              fontSize: "8px",
            }}
          >
            {n}
          </span>
        ))}
        <span className="ml-1">（1=軽微 / 5=深刻）</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Historical Oil Crisis Comparison
   ───────────────────────────────────────────── */
export function HistoricalComparisonDiagram() {
  const crises = [
    {
      year: "1973",
      name: "第一次石油危機",
      trigger: "第四次中東戦争",
      oilPriceChange: "4倍",
      cpiImpact: "+23%",
      gdpImpact: "−1.2%",
      mideastDep: "77%",
      oilShare: "76%",
    },
    {
      year: "1979",
      name: "第二次石油危機",
      trigger: "イラン革命",
      oilPriceChange: "2.7倍",
      cpiImpact: "+7.8%",
      gdpImpact: "軽微",
      mideastDep: "72%",
      oilShare: "66%",
    },
    {
      year: "1990",
      name: "湾岸戦争",
      trigger: "イラクのクウェート侵攻",
      oilPriceChange: "2倍",
      cpiImpact: "限定的",
      gdpImpact: "限定的",
      mideastDep: "68%",
      oilShare: "56%",
    },
    {
      year: "2026",
      name: "ホルムズ海峡危機",
      trigger: "米・イスラエルのイラン攻撃",
      oilPriceChange: "1.9倍",
      cpiImpact: "+1.1%〜",
      gdpImpact: "−0.7%〜",
      mideastDep: "94%",
      oilShare: "36%",
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card overflow-x-auto">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        過去の石油危機との比較
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        過去の石油危機との比較
      </div>

      <table className="w-full text-[11px] min-w-[560px]">
        <thead>
          <tr className="border-b border-brief-border">
            <th className="text-left py-2 pr-2 text-foreground/40 font-medium">
              年
            </th>
            <th className="text-left py-2 pr-2 text-foreground/40 font-medium">
              危機名
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              原油変動
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              CPI影響
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              GDP影響
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              中東依存度
            </th>
            <th className="text-center py-2 pl-2 text-foreground/40 font-medium">
              石油比率
            </th>
          </tr>
        </thead>
        <tbody>
          {crises.map((c) => {
            const isCurrent = c.year === "2026";
            return (
              <tr
                key={c.year}
                className={`border-b border-brief-border/50 ${isCurrent ? "bg-red-500/5" : ""}`}
              >
                <td
                  className={`py-2.5 pr-2 font-bold tabular-nums ${isCurrent ? "text-red-600 dark:text-red-400" : ""}`}
                >
                  {c.year}
                </td>
                <td className="py-2.5 pr-2 font-medium">{c.name}</td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  {c.oilPriceChange}
                </td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  {c.cpiImpact}
                </td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  {c.gdpImpact}
                </td>
                <td
                  className={`py-2.5 px-2 text-center tabular-nums font-medium ${isCurrent ? "text-red-600 dark:text-red-400" : ""}`}
                >
                  {c.mideastDep}
                </td>
                <td className="py-2.5 pl-2 text-center tabular-nums">
                  {c.oilShare}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-3 p-2 rounded bg-foreground/[0.02] text-[10px] text-foreground/50 leading-relaxed">
        注目点：中東依存度は1973年の77%から2026年は94%に上昇。一方、一次エネルギーに占める石油比率は76%→36%に低下しており、構造的な緩衝効果がある。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Energy Strategy Directions Diagram
   ───────────────────────────────────────────── */
export function EnergyStrategyDiagram() {
  const strategies = [
    {
      timeframe: "短期",
      timeframeEn: "短期",
      period: "〜6カ月",
      color: "#3b82f6",
      items: [
        { name: "IEA協調備蓄放出", status: "実施中" },
        { name: "省エネ要請・節電対策", status: "実施中" },
        { name: "非中東産原油のスポット調達", status: "交渉中" },
      ],
    },
    {
      timeframe: "中期",
      timeframeEn: "中期",
      period: "1〜5年",
      color: "#8b5cf6",
      items: [
        { name: "調達先の多様化（米国・カナダ・ブラジル）", status: "計画" },
        { name: "原子力発電所の再稼働加速", status: "審査中" },
        { name: "LNG長期契約の見直し", status: "交渉中" },
      ],
    },
    {
      timeframe: "長期",
      timeframeEn: "長期",
      period: "5〜15年",
      color: "#10b981",
      items: [
        { name: "再生可能エネルギーの大量導入", status: "推進" },
        { name: "水素・アンモニア燃料の商用化", status: "開発中" },
        { name: "EV普及による石油需要削減", status: "加速中" },
      ],
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        日本のエネルギー安全保障ロードマップ
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        エネルギー安全保障の構造的対策ロードマップ
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {strategies.map((s) => (
          <div
            key={s.timeframe}
            className="p-4 rounded-lg"
            style={{
              borderLeft: `3px solid ${s.color}`,
              backgroundColor: `${s.color}08`,
            }}
          >
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-sm font-bold" style={{ color: s.color }}>
                {s.timeframe}
              </span>
              <span className="text-[9px] text-foreground/40">
                {s.timeframeEn} ({s.period})
              </span>
            </div>

            <div className="space-y-2">
              {s.items.map((item) => (
                <div key={item.name} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: s.color }}
                  />
                  <div>
                    <div className="text-[11px] font-medium leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[9px] text-foreground/40 mt-0.5">
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
        <span className="text-green-600 dark:text-green-400 text-sm">
          {"→"}
        </span>
        <div className="text-[11px] text-foreground/60 leading-relaxed">
          エネルギー安全保障とカーボンニュートラルは同じコインの裏表。化石燃料依存の低減こそが最も効果的な安全保障策。
        </div>
      </div>
    </div>
  );
}
