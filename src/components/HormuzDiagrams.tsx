"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   Crisis Timeline Diagram
   ───────────────────────────────────────────── */
export function CrisisTimelineDiagram() {
  const events = [
    {
      date: "2/28",
      label: "米・イスラエル空爆開始",
      labelEn: "US–Israel airstrikes begin",
      detail: "エピック・フューリー作戦",
      detailEn: "Operation Epic Fury",
      severity: "critical",
    },
    {
      date: "3/2",
      label: "IRGC封鎖宣言",
      labelEn: "IRGC declares blockade",
      detail: "「通過する船は燃やす」",
      detailEn: "\"Any transiting ship will be burned\"",
      severity: "critical",
    },
    {
      date: "3/4",
      label: "QatarEnergy生産停止",
      labelEn: "QatarEnergy halts production",
      detail: "世界LNG供給の20%喪失",
      detailEn: "20% of global LNG supply lost",
      severity: "high",
    },
    {
      date: "3/5",
      label: "保険引受停止",
      labelEn: "Insurers suspend coverage",
      detail: "大手海運6社が通過中止",
      detailEn: "Six major shipping lines cease transit",
      severity: "high",
    },
    {
      date: "3/6",
      label: "通航隻数激減",
      labelEn: "Transit traffic plunges",
      detail: "1日120隻→わずか5隻に",
      detailEn: "From 120 ships/day to just 5",
      severity: "critical",
    },
    {
      date: "3/8",
      label: "原油100ドル突破",
      labelEn: "Crude breaks $100",
      detail: "ピーク時126ドルに到達",
      detailEn: "Peaks at $126",
      severity: "high",
    },
    {
      date: "3/11",
      label: "首相が独自放出決定",
      labelEn: "PM orders unilateral release",
      detail: "IEA協調を待たず歴史的判断",
      detailEn: "Historic decision without waiting for IEA coordination",
      severity: "response",
    },
    {
      date: "3/16",
      label: "備蓄放出開始",
      labelEn: "Reserve release begins",
      detail: "日本は8,000万バレル",
      detailEn: "Japan releases 80 million barrels",
      severity: "response",
    },
    {
      date: "3/21",
      label: "イラン、日本船通航許可へ",
      labelEn: "Iran to allow Japanese-flagged transit",
      detail: "外相間で交渉進行中",
      detailEn: "Foreign minister talks underway",
      severity: "response",
    },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div role="img" aria-label="2026 Strait of Hormuz crisis timeline" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年ホルムズ海峡危機" en="2026 Strait of Hormuz Crisis" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年2月〜3月の主要イベント" en="Key events from February to March 2026" />
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-5 text-[9px] text-foreground/50">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
          <T ja="危機的事象" en="Critical event" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
          <T ja="深刻な影響" en="Severe impact" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
          <T ja="対応措置" en="Response measure" />
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
                  <span className="text-sm font-semibold">
                    <T ja={event.label} en={event.labelEn} />
                  </span>
                </div>
                <div className="text-[11px] text-foreground/50 mt-0.5">
                  <T ja={event.detail} en={event.detailEn} />
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
    { country: "UAE", countryEn: "UAE", share: 40.9, color: "#dc2626" },
    { country: "サウジアラビア", countryEn: "Saudi Arabia", share: 39.3, color: "#ef4444" },
    { country: "クウェート", countryEn: "Kuwait", share: 6.1, color: "#f97316" },
    { country: "カタール", countryEn: "Qatar", share: 4.1, color: "#fb923c" },
    { country: "その他中東", countryEn: "Other Middle East", share: 3.6, color: "#fdba74" },
    { country: "非中東", countryEn: "Non–Middle East", share: 6.0, color: "#3b82f6" },
  ];

  const lngSources = [
    { country: "オーストラリア", countryEn: "Australia", share: 39.7, color: "#3b82f6" },
    { country: "マレーシア", countryEn: "Malaysia", share: 14.8, color: "#60a5fa" },
    { country: "ロシア", countryEn: "Russia", share: 8.9, color: "#93c5fd" },
    { country: "カタール", countryEn: "Qatar", share: 5.3, color: "#ef4444" },
    { country: "UAE", countryEn: "UAE", share: 1.0, color: "#f87171" },
    { country: "その他", countryEn: "Other", share: 30.3, color: "#a5b4fc" },
  ];

  const maxBar = 45;

  return (
    <div role="img" aria-label="Japan oil and LNG import dependency by source country" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="日本のエネルギー輸入元（2025年）" en="Japan's energy import sources (2025)" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Crude Oil */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-bold">
              <T ja="原油輸入先" en="Crude oil imports" />
            </h4>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-medium">
              <T ja="中東依存 94%" en="Middle East dependency 94%" />
            </span>
          </div>
          <div className="space-y-1.5">
            {oilSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/60 w-20 flex-shrink-0 text-right tabular-nums">
                  <T ja={s.country} en={s.countryEn} />
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
            <h4 className="text-sm font-bold">
              <T ja="LNG輸入先" en="LNG imports" />
            </h4>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
              <T ja="ホルムズ依存 6.3%" en="Hormuz dependency 6.3%" />
            </span>
          </div>
          <div className="space-y-1.5">
            {lngSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/60 w-20 flex-shrink-0 text-right tabular-nums">
                  <T ja={s.country} en={s.countryEn} />
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
        <T
          ja="出典: 経済産業省 石油統計速報、JETRO（2025年データ） 赤系 = ホルムズ海峡経由 / 青系 = 非ホルムズルート"
          en="Source: METI Petroleum Statistics, JETRO (2025 data). Reds = via Strait of Hormuz / Blues = non-Hormuz routes"
        />
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
      nameEn: "Base scenario",
      oilPrice: "$87",
      oilPriceEn: "$87",
      gdp: "−0.18%",
      cpi: "+0.31%",
      gasoline: "200円超/L",
      gasolineEn: "Over ¥200/L",
      color: "#f59e0b",
      bgColor: "#f59e0b10",
    },
    {
      name: "悲観シナリオ",
      nameEn: "Pessimistic scenario",
      oilPrice: "$140",
      oilPriceEn: "$140",
      gdp: "−0.65%",
      cpi: "+1.14%",
      gasoline: "250円超/L",
      gasolineEn: "Over ¥250/L",
      color: "#ef4444",
      bgColor: "#ef444410",
    },
    {
      name: "最悪シナリオ",
      nameEn: "Worst-case scenario",
      oilPrice: "供給途絶",
      oilPriceEn: "Supply cutoff",
      gdp: "−3.0%",
      cpi: "大幅上昇",
      cpiEn: "Sharp rise",
      gasoline: "供給制限",
      gasolineEn: "Rationing",
      color: "#991b1b",
      bgColor: "#991b1b10",
    },
  ];

  return (
    <div role="img" aria-label="Economic impact scenarios from the Hormuz crisis" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="経済影響シナリオ" en="Economic impact scenarios" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="原油価格シナリオ別の日本経済への影響試算（NRI・日本総研）"
          en="Estimated impact on Japan's economy by crude oil price scenario (NRI / JRI)"
        />
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
              <T ja={s.name} en={s.nameEn} />
            </div>

            <div className="space-y-2">
              <div>
                <div className="text-[9px] text-foreground/40 uppercase">
                  <T ja="原油価格" en="Oil price" />
                </div>
                <div className="text-lg font-bold tabular-nums">
                  <T ja={s.oilPrice} en={s.oilPriceEn} />
                </div>
              </div>
              <div className="h-px bg-foreground/5" />
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[9px] text-foreground/40">
                    <T ja="GDP影響" en="GDP impact" />
                  </div>
                  <div
                    className="text-sm font-bold tabular-nums"
                    style={{ color: s.color }}
                  >
                    {s.gdp}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-foreground/40">
                    <T ja="物価影響" en="CPI impact" />
                  </div>
                  <div className="text-sm font-bold tabular-nums">
                    <T ja={s.cpi} en={s.cpiEn ?? s.cpi} />
                  </div>
                </div>
              </div>
              <div className="h-px bg-foreground/5" />
              <div>
                <div className="text-[9px] text-foreground/40">
                  <T ja="ガソリン価格" en="Gasoline price" />
                </div>
                <div className="text-xs font-medium">
                  <T ja={s.gasoline} en={s.gasolineEn} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        <T
          ja="出典: 野村総合研究所（NRI）木内登英氏試算、日本総合研究所"
          en="Source: Nomura Research Institute (Takahide Kiuchi), Japan Research Institute"
        />
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
      typeEn: "National reserves",
      days: 146,
      volume: "4,319万KL",
      volumeEn: "43.19 million kL",
      detail: "原油4,177万KL + 石油製品142万KL",
      detailEn: "Crude 41.77M kL + refined products 1.42M kL",
      color: "#3b82f6",
    },
    {
      type: "民間備蓄",
      typeEn: "Private-sector reserves",
      days: 96,
      volume: "2,778万KL",
      volumeEn: "27.78 million kL",
      detail: "原油1,278万KL + 石油製品1,500万KL",
      detailEn: "Crude 12.78M kL + refined products 15.00M kL",
      color: "#8b5cf6",
    },
    {
      type: "産油国共同備蓄",
      typeEn: "Joint reserves with producers",
      days: 6,
      volume: "191万KL",
      volumeEn: "1.91 million kL",
      detail: "UAE・サウジとの共同備蓄",
      detailEn: "Joint stockpile with UAE and Saudi Arabia",
      color: "#f59e0b",
    },
  ];

  const totalDays = 248;
  const totalVolume = "7,289万KL";
  const totalVolumeEn = "72.89 million kL";

  return (
    <div role="img" aria-label="Japan strategic petroleum reserves breakdown" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本の戦略石油備蓄" en="Japan's strategic petroleum reserves" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="2026年1月末時点（IEA協調放出後）" en="As of end of January 2026 (after IEA coordinated release)" />
      </div>

      {/* Total */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-3xl font-bold tabular-nums">{totalDays}</span>
        <span className="text-sm text-foreground/50">
          <T ja="日分" en="days of supply" />
        </span>
        <span className="text-sm text-foreground/40">
          （<T ja={totalVolume} en={totalVolumeEn} />）
        </span>
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
              <T ja={`${r.days}日`} en={`${r.days}d`} />
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
            <div className="text-xs font-semibold">
              <T ja={r.type} en={r.typeEn} />
            </div>
            <div className="text-lg font-bold tabular-nums mt-0.5">
              {r.days}
              <span className="text-xs text-foreground/40 ml-1">
                <T ja="日分" en="days" />
              </span>
            </div>
            <div className="text-[10px] text-foreground/50 mt-0.5">
              <T ja={r.volume} en={r.volumeEn} />
            </div>
            <div className="text-[9px] text-foreground/35 mt-0.5">
              <T ja={r.detail} en={r.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
        <div className="text-[10px] font-medium text-red-600 dark:text-red-400">
          <T ja="注意：専門家の指摘" en="Caveat: expert view" />
        </div>
        <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
          <T
            ja="「254日分」の備蓄数値について、精製キャパシティや輸送制約を考慮すると「実際に使用可能な量は半分以下」との指摘がある。"
            en="On the headline figure of roughly 254 days, experts note that refining capacity and transport constraints mean the actually usable volume is less than half of that."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T
          ja="出典: 資源エネルギー庁 石油備蓄の現況、経済産業省"
          en="Source: Agency for Natural Resources and Energy – Current Status of Petroleum Reserves, METI"
        />
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
      nameEn: "Power & Gas",
      shortTerm: 4,
      midTerm: 5,
      detail: "LNGスポット価格急騰、補助金終了と重複",
      detailEn: "Spot LNG prices surge, overlapping with the end of subsidies",
    },
    {
      name: "石油化学・素材",
      nameEn: "Petrochemicals & Materials",
      shortTerm: 5,
      midTerm: 4,
      detail: "ナフサ価格上昇→プラスチック・合成繊維全般に波及",
      detailEn: "Naphtha prices rise, spreading across plastics and synthetic fibers",
    },
    {
      name: "物流・海運",
      nameEn: "Logistics & Shipping",
      shortTerm: 5,
      midTerm: 4,
      detail: "喜望峰迂回で航行日数2.5倍、コスト300〜500万ドル増",
      detailEn: "Cape of Good Hope detour 2.5x transit time, $3–5M added cost per voyage",
    },
    {
      name: "食料・農業",
      nameEn: "Food & Agriculture",
      shortTerm: 2,
      midTerm: 5,
      detail: "肥料（アンモニア）価格上昇→3〜6カ月後に農産物に波及",
      detailEn: "Fertilizer (ammonia) prices rise, feeding through to produce in 3–6 months",
    },
    {
      name: "自動車",
      nameEn: "Automotive",
      shortTerm: 3,
      midTerm: 4,
      detail: "部品コスト増＋円安ダブルパンチ、EV需要増の可能性も",
      detailEn: "Higher parts costs plus weak yen; potential upside for EV demand",
    },
    {
      name: "航空",
      nameEn: "Aviation",
      shortTerm: 5,
      midTerm: 3,
      detail: "ジェット燃料は即座に影響、燃油サーチャージ大幅引上げ",
      detailEn: "Jet fuel hits immediately; fuel surcharges raised sharply",
    },
  ];

  function heatColor(level: number): string {
    const colors = ["", "#fef3c7", "#fde68a", "#fbbf24", "#f59e0b", "#dc2626"];
    return colors[level] || "#e5e7eb";
  }

  return (
    <div role="img" aria-label="Industry impact heatmap from energy supply disruption" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="産業別影響評価" en="Impact by industry" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T
          ja="産業別の影響度（5段階: 1=軽微 〜 5=深刻）"
          en="Impact severity by industry (scale 1 = minor to 5 = severe)"
        />
      </div>

      {/* Header */}
      <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[140px_80px_80px_1fr] gap-2 mb-2">
        <div className="text-[9px] font-medium text-foreground/40">
          <T ja="産業" en="Industry" />
        </div>
        <div className="text-[9px] font-medium text-foreground/40 text-center">
          <T ja="短期" en="Short term" />
        </div>
        <div className="text-[9px] font-medium text-foreground/40 text-center">
          <T ja="中期" en="Medium term" />
        </div>
        <div className="text-[9px] font-medium text-foreground/40 hidden sm:block">
          <T ja="影響の概要" en="Impact summary" />
        </div>
      </div>

      <div className="space-y-1.5">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[140px_80px_80px_1fr] gap-2 items-center"
          >
            <div className="text-xs font-semibold">
              <T ja={ind.name} en={ind.nameEn} />
            </div>
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
              <T ja={ind.detail} en={ind.detailEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-1 text-[9px] text-foreground/35">
        <span>
          <T ja="影響度:" en="Severity:" />
        </span>
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
        <span className="ml-1">
          <T ja="（1=軽微 / 5=深刻）" en="(1 = minor / 5 = severe)" />
        </span>
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
      nameEn: "First Oil Shock",
      trigger: "第四次中東戦争",
      triggerEn: "Yom Kippur War",
      oilPriceChange: "4倍",
      oilPriceChangeEn: "4x",
      cpiImpact: "+23%",
      gdpImpact: "−1.2%",
      mideastDep: "77%",
      oilShare: "76%",
    },
    {
      year: "1979",
      name: "第二次石油危機",
      nameEn: "Second Oil Shock",
      trigger: "イラン革命",
      triggerEn: "Iranian Revolution",
      oilPriceChange: "2.7倍",
      oilPriceChangeEn: "2.7x",
      cpiImpact: "+7.8%",
      gdpImpact: "軽微",
      gdpImpactEn: "Minor",
      mideastDep: "72%",
      oilShare: "66%",
    },
    {
      year: "1990",
      name: "湾岸戦争",
      nameEn: "Gulf War",
      trigger: "イラクのクウェート侵攻",
      triggerEn: "Iraq's invasion of Kuwait",
      oilPriceChange: "2倍",
      oilPriceChangeEn: "2x",
      cpiImpact: "限定的",
      cpiImpactEn: "Limited",
      gdpImpact: "限定的",
      gdpImpactEn: "Limited",
      mideastDep: "68%",
      oilShare: "56%",
    },
    {
      year: "2026",
      name: "ホルムズ海峡危機",
      nameEn: "Strait of Hormuz Crisis",
      trigger: "米・イスラエルのイラン攻撃",
      triggerEn: "US–Israeli strikes on Iran",
      oilPriceChange: "1.9倍",
      oilPriceChangeEn: "1.9x",
      cpiImpact: "+1.1%〜",
      cpiImpactEn: "+1.1%+",
      gdpImpact: "−0.7%〜",
      gdpImpactEn: "−0.7%+",
      mideastDep: "94%",
      oilShare: "36%",
    },
  ];

  return (
    <div role="img" aria-label="Historical oil crisis comparison including 2026 Hormuz crisis" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card overflow-x-auto">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="過去の石油危機との比較" en="Comparison with past oil crises" />
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        <T ja="過去の石油危機との比較" en="Comparison with past oil crises" />
      </div>

      <table className="w-full text-[11px] min-w-[560px]">
        <thead>
          <tr className="border-b border-brief-border">
            <th className="text-left py-2 pr-2 text-foreground/40 font-medium">
              <T ja="年" en="Year" />
            </th>
            <th className="text-left py-2 pr-2 text-foreground/40 font-medium">
              <T ja="危機名" en="Crisis" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="原油変動" en="Oil price" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="CPI影響" en="CPI impact" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="GDP影響" en="GDP impact" />
            </th>
            <th className="text-center py-2 px-2 text-foreground/40 font-medium">
              <T ja="中東依存度" en="ME dependency" />
            </th>
            <th className="text-center py-2 pl-2 text-foreground/40 font-medium">
              <T ja="石油比率" en="Oil share" />
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
                <td className="py-2.5 pr-2 font-medium">
                  <T ja={c.name} en={c.nameEn} />
                </td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  <T ja={c.oilPriceChange} en={c.oilPriceChangeEn} />
                </td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  <T ja={c.cpiImpact} en={c.cpiImpactEn ?? c.cpiImpact} />
                </td>
                <td className="py-2.5 px-2 text-center tabular-nums">
                  <T ja={c.gdpImpact} en={c.gdpImpactEn ?? c.gdpImpact} />
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
        <T
          ja="注目点：中東依存度は1973年の77%から2026年は94%に上昇。一方、一次エネルギーに占める石油比率は76%→36%に低下しており、構造的な緩衝効果がある。"
          en="Key point: Middle East dependency has risen from 77% in 1973 to 94% in 2026. However, oil's share of primary energy has dropped from 76% to 36%, providing a structural buffer."
        />
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
      timeframeEn: "Short term",
      period: "〜6カ月",
      periodEn: "up to 6 months",
      color: "#3b82f6",
      items: [
        { name: "IEA協調備蓄放出", nameEn: "IEA coordinated reserve release", status: "実施中", statusEn: "In progress" },
        { name: "省エネ要請・節電対策", nameEn: "Energy-saving requests and power conservation", status: "実施中", statusEn: "In progress" },
        { name: "非中東産原油のスポット調達", nameEn: "Spot procurement of non–Middle East crude", status: "交渉中", statusEn: "Under negotiation" },
      ],
    },
    {
      timeframe: "中期",
      timeframeEn: "Medium term",
      period: "1〜5年",
      periodEn: "1–5 years",
      color: "#8b5cf6",
      items: [
        { name: "調達先の多様化（米国・カナダ・ブラジル）", nameEn: "Supplier diversification (US, Canada, Brazil)", status: "計画", statusEn: "Planned" },
        { name: "原子力発電所の再稼働加速", nameEn: "Accelerated nuclear restart", status: "審査中", statusEn: "Under review" },
        { name: "LNG長期契約の見直し", nameEn: "Review of long-term LNG contracts", status: "交渉中", statusEn: "Under negotiation" },
      ],
    },
    {
      timeframe: "長期",
      timeframeEn: "Long term",
      period: "5〜15年",
      periodEn: "5–15 years",
      color: "#10b981",
      items: [
        { name: "再生可能エネルギーの大量導入", nameEn: "Large-scale deployment of renewables", status: "推進", statusEn: "Advancing" },
        { name: "水素・アンモニア燃料の商用化", nameEn: "Commercialization of hydrogen and ammonia fuels", status: "開発中", statusEn: "In development" },
        { name: "EV普及による石油需要削減", nameEn: "Oil demand reduction via EV adoption", status: "加速中", statusEn: "Accelerating" },
      ],
    },
  ];

  return (
    <div role="img" aria-label="Japan energy security strategy roadmap" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本のエネルギー安全保障ロードマップ" en="Japan's energy security roadmap" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T
          ja="エネルギー安全保障の構造的対策ロードマップ"
          en="Structural roadmap for energy security measures"
        />
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
                <T ja={s.timeframe} en={s.timeframeEn} />
              </span>
              <span className="text-[9px] text-foreground/40">
                (<T ja={s.period} en={s.periodEn} />)
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
                      <T ja={item.name} en={item.nameEn} />
                    </div>
                    <div className="text-[9px] text-foreground/40 mt-0.5">
                      <T ja={item.status} en={item.statusEn} />
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
          <T
            ja="エネルギー安全保障とカーボンニュートラルは同じコインの裏表。化石燃料依存の低減こそが最も効果的な安全保障策。"
            en="Energy security and carbon neutrality are two sides of the same coin. Reducing fossil-fuel dependency is the most effective security strategy."
          />
        </div>
      </div>
    </div>
  );
}
