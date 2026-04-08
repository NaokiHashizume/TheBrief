"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   米イラン関係 タイムライン
   ───────────────────────────────────────────── */
export function USIranTimelineDiagram() {
  const events = [
    { year: "1953", label: "CIAによるイラン・クーデター", labelEn: "CIA-backed Iranian coup", detail: "アジャックス作戦でモサッデク首相を失脚、シャー復権", detailEn: "Operation Ajax ousts PM Mosaddegh and restores the Shah", severity: "critical" },
    { year: "1979", label: "イスラム革命", labelEn: "Islamic Revolution", detail: "シャー打倒、ホメイニ師がイスラム共和制を樹立", detailEn: "Shah overthrown; Ayatollah Khomeini establishes the Islamic Republic", severity: "critical" },
    { year: "1979-81", label: "在テヘラン米大使館人質事件", labelEn: "Tehran US embassy hostage crisis", detail: "444日間 — 米外交官52名がテヘラン大使館で拘束", detailEn: "444 days — 52 US diplomats held at the Tehran embassy", severity: "critical" },
    { year: "1980-88", label: "イラン・イラク戦争", labelEn: "Iran-Iraq War", detail: "米国はイラクを支援、犠牲者約100万人、化学兵器使用", detailEn: "US backs Iraq; roughly 1 million dead, chemical weapons used", severity: "high" },
    { year: "2002", label: "核開発計画の暴露", labelEn: "Nuclear program exposed", detail: "反体制派NCRIがナタンズの秘密濃縮施設を暴露", detailEn: "Opposition group NCRI reveals the secret Natanz enrichment site", severity: "high" },
    { year: "2015", label: "JCPOA調印", labelEn: "JCPOA signed", detail: "P5+1核合意 — イランは制裁解除と引き換えに濃縮を制限", detailEn: "P5+1 nuclear deal — Iran curbs enrichment in exchange for sanctions relief", severity: "response" },
    { year: "2018", label: "トランプがJCPOA離脱", labelEn: "Trump withdraws from JCPOA", detail: "「最大圧力」政策、米制裁を全面再発動", detailEn: "\"Maximum pressure\" campaign; full reimposition of US sanctions", severity: "critical" },
    { year: "2020", label: "ソレイマニ司令官殺害", labelEn: "Soleimani assassinated", detail: "バグダッド空港で米軍ドローンが革命防衛隊コッズ部隊司令官を暗殺", detailEn: "US drone strike at Baghdad airport kills the IRGC Quds Force commander", severity: "critical" },
    { year: "2025", label: "スナップバック制裁", labelEn: "Snapback sanctions", detail: "2025年9月に国連制裁が復活、JCPOAは事実上消滅", detailEn: "UN sanctions reimposed in September 2025; JCPOA effectively dead", severity: "high" },
    { year: "2026", label: "米・イスラエル合同攻撃", labelEn: "Joint US-Israeli strikes", detail: "「エピック・フューリー作戦」 — 2月28日に大規模空爆開始", detailEn: "\"Operation Epic Fury\" — major air campaign begins February 28", severity: "critical" },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="1953年のCIAクーデターから2026年の軍事攻撃までの米イラン関係の縦型タイムライン"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="米イラン関係 タイムライン" en="US-Iran Relations Timeline" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="70年にわたる対立 — 主要な転換点" en="Seven decades of confrontation — the key turning points" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap mb-5 text-[9px] text-foreground/50">
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-1.5" />
          <T ja="重大局面" en="Critical" />
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-1.5" />
          <T ja="高影響" en="High impact" />
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] mr-1.5" />
          <T ja="対応・外交" en="Response / diplomacy" />
        </span>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-foreground/10" />

        <div>
          {events.map((event, i) => {
            const color =
              severityColor[event.severity as keyof typeof severityColor];
            return (
              <div key={i} className={`relative pl-8 ${i > 0 ? "mt-3" : ""}`}>
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ backgroundColor: color.bg }}
                >
                  <span className="text-white text-[8px] font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex items-baseline flex-wrap">
                  <span
                    className="text-xs font-bold tabular-nums mr-2"
                    style={{ color: color.text }}
                  >
                    {event.year}
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
   制裁の三層構造
   ───────────────────────────────────────────── */
export function SanctionsArchitectureDiagram() {
  const pillars = [
    {
      name: "米国の単独制裁",
      nameEn: "US unilateral sanctions",
      color: "#dc2626",
      bgColor: "#dc262610",
      targets: ["財務省OFAC主導", "エネルギー部門", "銀行・金融", "革命防衛隊（IRGC）をFTOに指定"],
      targetsEn: ["Led by Treasury OFAC", "Energy sector", "Banking and finance", "IRGC designated as FTO"],
    },
    {
      name: "国連安保理制裁",
      nameEn: "UN Security Council sanctions",
      color: "#3b82f6",
      bgColor: "#3b82f610",
      targets: ["6本の決議（2006-2010）", "武器禁輸＋渡航禁止", "2025年9月にスナップバック発動", "2025年10月にJCPOA終了"],
      targetsEn: ["Six resolutions (2006-2010)", "Arms embargo plus travel ban", "Snapback triggered September 2025", "JCPOA ended October 2025"],
    },
    {
      name: "EU制裁",
      nameEn: "EU sanctions",
      color: "#8b5cf6",
      bgColor: "#8b5cf610",
      targets: ["国連枠組みに準拠", "原油輸入禁止（2012年7月）", "保険・再保険禁止", "イラン中央銀行が対象"],
      targetsEn: ["Aligned with UN framework", "Oil import ban (July 2012)", "Insurance and reinsurance ban", "Central Bank of Iran targeted"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="米国・国連・EUの3層からなるイラン制裁構造を示す図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="イラン制裁の三層構造" en="Three-tier architecture of Iran sanctions" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="国際制裁レジームの3つの柱" en="The three pillars of the international sanctions regime" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {pillars.map((p, idx) => (
          <div
            key={p.name}
            className={`p-4 rounded-lg border ${idx > 0 ? "mt-3 sm:mt-0 sm:ml-3" : ""}`}
            style={{
              borderColor: `${p.color}30`,
              backgroundColor: p.bgColor,
            }}
          >
            <div
              className="text-xs font-bold mb-3"
              style={{ color: p.color }}
            >
              <T ja={p.name} en={p.nameEn} />
            </div>
            <div>
              {p.targets.map((t, ti) => (
                <div key={t} className={`flex items-start ${ti > 0 ? "mt-1.5" : ""}`}>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-[11px] text-foreground/60 leading-tight">
                    <T ja={t} en={p.targetsEn[ti]} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SWIFT callout */}
      <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
        <div className="text-[10px] font-medium text-red-600 dark:text-red-400">
          <T ja="SWIFTからの切断 — 2012年3月" en="Disconnected from SWIFT — March 2012" />
        </div>
        <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
          <T
            ja="イランの銀行がSWIFTネットワークから切断 — 国家単位での切断は史上初。「金融の核兵器」と評された。"
            en={`Iranian banks were cut off from the SWIFT network — the first country-wide disconnection in history, described as a "financial nuclear weapon."`}
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   イラン経済への影響
   ───────────────────────────────────────────── */
export function IranEconomicImpactDiagram() {
  const stats = [
    {
      label: "GDP",
      labelEn: "GDP",
      before: "6,000億ドル",
      beforeEn: "$600B",
      after: "3,560億ドル",
      afterEn: "$356B",
      change: "▼41%",
      changeEn: "▼41%",
      color: "#dc2626",
    },
    {
      label: "石油輸出量",
      labelEn: "Oil exports",
      before: "日量220万バレル",
      beforeEn: "2.2M bpd",
      after: "日量70万バレル",
      afterEn: "0.7M bpd",
      change: "▼68%",
      changeEn: "▼68%",
      color: "#dc2626",
    },
    {
      label: "凍結資産",
      labelEn: "Frozen assets",
      before: "",
      beforeEn: "",
      after: "1,000-1,200億ドル",
      afterEn: "$100-120B",
      change: "海外で凍結",
      changeEn: "Held abroad",
      color: "#f59e0b",
    },
    {
      label: "インフレ率",
      labelEn: "Inflation",
      before: "",
      beforeEn: "",
      after: "60%",
      afterEn: "60%",
      change: "ピーク時",
      changeEn: "At peak",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="GDP減少、石油輸出損失、凍結資産、インフレを示すイラン経済への影響の統計"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="イラン経済への影響" en="Impact on the Iranian economy" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="制裁と孤立の累積的打撃" en="The cumulative toll of sanctions and isolation" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, idx) => (
          <div
            key={s.label}
            className={`p-4 rounded-lg ${idx === 1 ? "ml-3" : ""} ${idx === 2 ? "mt-3 sm:mt-0 sm:ml-3" : ""} ${idx === 3 ? "mt-3 ml-3 sm:mt-0" : ""}`}
            style={{
              borderLeft: `3px solid ${s.color}`,
              backgroundColor: `${s.color}08`,
            }}
          >
            <div className="text-[9px] text-foreground/40 uppercase">
              <T ja={s.label} en={s.labelEn} />
            </div>
            {s.before && (
              <div className="text-[10px] text-foreground/40 mt-1 line-through">
                <T ja={s.before} en={s.beforeEn} />
              </div>
            )}
            <div className="text-lg font-bold tabular-nums mt-0.5">
              <T ja={s.after} en={s.afterEn} />
            </div>
            <div
              className="text-[10px] font-medium mt-1"
              style={{ color: s.color }}
            >
              <T ja={s.change} en={s.changeEn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   イラン石油輸出の推移
   ───────────────────────────────────────────── */
export function IranOilExportsDiagram() {
  const exports = [
    { year: "2011", yearEn: "2011", bpd: 2.2, label: "220万", labelEn: "2.2M", note: "制裁前のピーク", noteEn: "Pre-sanctions peak" },
    { year: "2013", yearEn: "2013", bpd: 0.7, label: "70万", labelEn: "0.7M", note: "オバマ期の制裁効果", noteEn: "Obama-era sanctions bite" },
    { year: "2016", yearEn: "2016", bpd: 2.0, label: "200万", labelEn: "2.0M", note: "JCPOA後の回復", noteEn: "Post-JCPOA recovery" },
    { year: "2019", yearEn: "2019", bpd: 0.4, label: "40万", labelEn: "0.4M", note: "トランプ最大圧力", noteEn: "Trump maximum pressure" },
    { year: "2024", yearEn: "2024", bpd: 1.5, label: "150万", labelEn: "1.5M", note: "バイデン期の緩い執行", noteEn: "Loose Biden-era enforcement" },
    { year: "2025年9月", yearEn: "Sep 2025", bpd: 2.13, label: "213万", labelEn: "2.13M", note: "戦争前ピーク", noteEn: "Pre-war peak" },
  ];

  const maxBpd = 2.5;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="2011年から2025年9月までのイラン石油輸出量の横棒グラフ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="イラン石油輸出の推移" en="Iran oil exports over time" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="日量バレル数 — 制裁影響のサイクル" en="Barrels per day — cycles of sanctions pressure" />
      </div>

      <div>
        {exports.map((e, i) => {
          const pct = (e.bpd / maxBpd) * 100;
          const barColor = e.bpd >= 1.5 ? "#f59e0b" : "#dc2626";
          return (
            <div key={e.year} className={i > 0 ? "mt-2.5" : ""}>
              <div className="flex items-center">
                <span className="text-[10px] text-foreground/60 w-16 flex-shrink-0 text-right tabular-nums font-medium mr-2">
                  <T ja={e.year} en={e.yearEn} />
                </span>
                <div className="flex-1 h-5 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded transition-all flex items-center justify-end pr-2"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: barColor,
                      opacity: 0.75,
                    }}
                  >
                    <span className="text-white text-[9px] font-bold">
                      <T ja={e.label} en={e.labelEn} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-foreground/35 ml-[72px] mt-0.5">
                <T ja={e.note} en={e.noteEn} />
              </div>
            </div>
          );
        })}
      </div>

      {/* China note */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] text-[10px] text-foreground/50 leading-relaxed">
        <span className="font-semibold">
          <T ja="中国ファクター：" en="The China factor: " />
        </span>
        <T
          ja="2024〜25年時点で、中国は「影の艦隊」タンカーとSTS（船舶間移送）を通じてイランの石油輸出の約9割を購入し、米制裁の執行を骨抜きにしている。"
          en={`As of 2024-25, China buys roughly 90% of Iran's oil exports via "shadow fleet" tankers and ship-to-ship transfers, gutting US sanctions enforcement.`}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   核交渉のタイムライン
   ───────────────────────────────────────────── */
export function NuclearNegotiationsDiagram() {
  const events = [
    { date: "2015年7月", dateEn: "Jul 2015", label: "JCPOA調印", labelEn: "JCPOA signed", detail: "P5+1核合意 — イランは濃縮を3.67%に制限", detailEn: "P5+1 nuclear deal — Iran caps enrichment at 3.67%", severity: "response" },
    { date: "2018年5月", dateEn: "May 2018", label: "米国の離脱", labelEn: "US withdrawal", detail: "トランプがJCPOA離脱、「最大圧力」開始", detailEn: "Trump exits JCPOA; \"maximum pressure\" begins", severity: "critical" },
    { date: "2025年4-6月", dateEn: "Apr-Jun 2025", label: "マスカット協議", labelEn: "Muscat talks", detail: "オマーンを介した米イラン秘密協議、突破口なし", detailEn: "Oman-mediated secret US-Iran talks, no breakthrough", severity: "response" },
    { date: "2025年6月", dateEn: "Jun 2025", label: "戦争勃発", labelEn: "War breaks out", detail: "軍事的エスカレーションが外交ルートを断絶", detailEn: "Military escalation severs diplomatic channels", severity: "critical" },
    { date: "2025年8月", dateEn: "Aug 2025", label: "スナップバック発動", labelEn: "Snapback triggered", detail: "英国がスナップバック条項を発動、国連制裁が全面復活", detailEn: "UK triggers snapback clause; UN sanctions fully restored", severity: "high" },
    { date: "2025年10月", dateEn: "Oct 2025", label: "JCPOA失効", labelEn: "JCPOA expires", detail: "国連安保理決議2231号が期限切れ — 合意は正式に消滅", detailEn: "UN Security Council Resolution 2231 expires — the deal formally ends", severity: "critical" },
    { date: "2026年2月", dateEn: "Feb 2026", label: "最終協議が決裂", labelEn: "Final talks collapse", detail: "土壇場の外交が崩壊、数週間後に攻撃開始", detailEn: "Last-ditch diplomacy falls apart; strikes follow weeks later", severity: "critical" },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="2015年のJCPOA調印から2026年2月の最終協議決裂までの核交渉タイムライン"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="核交渉のタイムライン" en="Nuclear negotiations timeline" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="JCPOAから崩壊まで — 外交の軌跡" en="From JCPOA to collapse — the diplomatic arc" />
      </div>

      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-foreground/10" />

        <div>
          {events.map((event, i) => {
            const color =
              severityColor[event.severity as keyof typeof severityColor];
            return (
              <div key={i} className={`relative pl-8 ${i > 0 ? "mt-3" : ""}`}>
                <div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ backgroundColor: color.bg }}
                >
                  <span className="text-white text-[8px] font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex items-baseline flex-wrap">
                  <span
                    className="text-xs font-bold tabular-nums mr-2"
                    style={{ color: color.text }}
                  >
                    <T ja={event.date} en={event.dateEn} />
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
   抗議運動と戦争
   ───────────────────────────────────────────── */
export function ProtestsAndWarDiagram() {
  const protests = [
    { label: "インフレ率60%", labelEn: "60% inflation", detail: "制裁下で食料・燃料価格が高騰", detailEn: "Food and fuel prices surge under sanctions" },
    { label: "200都市以上に拡大", labelEn: "Spread to 200+ cities", detail: "全国各州で抗議運動が広がる", detailEn: "Protests spread across every province" },
    { label: "12月28日 抗議勃発", labelEn: "Dec 28 — protests erupt", detail: "経済崩壊と戦争被害が引き金", detailEn: "Triggered by economic collapse and war damage" },
    { label: "1月8-9日 弾圧", labelEn: "Jan 8-9 — crackdown", detail: "革命防衛隊投入、大量逮捕とネット遮断", detailEn: "IRGC deployed; mass arrests and internet blackouts" },
  ];

  const warEvents = [
    { label: "2月28日 エピック・フューリー作戦", labelEn: "Feb 28 — Operation Epic Fury", detail: "米・イスラエル合同空爆開始", detailEn: "Joint US-Israeli air campaign begins" },
    { label: "ハメネイ師死亡", labelEn: "Khamenei killed", detail: "最高指導者が指導部地下壕への攻撃で死亡", detailEn: "Supreme Leader dies in strike on leadership bunker" },
    { label: "ホルムズ海峡封鎖", labelEn: "Strait of Hormuz closed", detail: "革命防衛隊が封鎖を宣言、世界の原油価格が急騰", detailEn: "IRGC declares closure; global oil prices spike" },
    { label: "体制の分裂", labelEn: "Regime fractures", detail: "革命防衛隊各派が支配権を争い指揮系統が崩壊", detailEn: "IRGC factions vie for control as chain of command collapses" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="国内抗議運動と軍事戦争の出来事を比較する2列の図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="国内危機と戦争" en="Domestic crisis and war" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="国内の動乱と外部からの軍事作戦が交錯" en="Internal unrest and external military operations collide" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Protests column */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#f59e0b30", backgroundColor: "#f59e0b10" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#f59e0b" }}>
            <T ja="国内抗議運動" en="Domestic protests" />
          </div>
          <div>
            {protests.map((item, i) => (
              <div key={item.label} className={`flex items-start ${i > 0 ? "mt-2.5" : ""}`}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                  style={{ backgroundColor: "#f59e0b" }}
                />
                <div>
                  <div className="text-[11px] font-medium leading-tight">
                    <T ja={item.label} en={item.labelEn} />
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    <T ja={item.detail} en={item.detailEn} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* War column */}
        <div
          className="p-4 rounded-lg border mt-3 sm:mt-0 sm:ml-4"
          style={{ borderColor: "#dc262630", backgroundColor: "#dc262610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#dc2626" }}>
            <T ja="軍事戦争" en="Military war" />
          </div>
          <div>
            {warEvents.map((item, i) => (
              <div key={item.label} className={`flex items-start ${i > 0 ? "mt-2.5" : ""}`}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                  style={{ backgroundColor: "#dc2626" }}
                />
                <div>
                  <div className="text-[11px] font-medium leading-tight">
                    <T ja={item.label} en={item.labelEn} />
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    <T ja={item.detail} en={item.detailEn} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   停戦交渉の条件
   ───────────────────────────────────────────── */
export function CeasefireConditionsDiagram() {
  const iranConditions: { ja: string; en: string }[] = [
    { ja: "全空爆の即時停止", en: "Immediate halt to all airstrikes" },
    { ja: "国連・米制裁の全面解除", en: "Full lifting of UN and US sanctions" },
    { ja: "ペルシャ湾からの海軍撤退", en: "Withdrawal of naval forces from the Persian Gulf" },
    { ja: "イランの地域安全保障上の役割の承認", en: "Recognition of Iran's regional security role" },
    { ja: "民間インフラ被害への賠償", en: "Reparations for damage to civilian infrastructure" },
  ];

  const usConditions: { ja: string; en: string }[] = [
    { ja: "核計画の完全な解体", en: "Complete dismantlement of the nuclear program" },
    { ja: "革命防衛隊（IRGC）の武装解除・解体", en: "Disarmament and dissolution of the IRGC" },
    { ja: "地域代理勢力（ヒズボラ、フーシ派）への支援停止", en: "End of support for regional proxies (Hezbollah, Houthis)" },
    { ja: "ホルムズ海峡の無条件再開放", en: "Unconditional reopening of the Strait of Hormuz" },
    { ja: "国際査察団の完全アクセス", en: "Full access for international inspectors" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="イランと米国の停戦条件を比較する2列の図と現状"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="停戦交渉" en="Ceasefire negotiations" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="イランの5条件 vs 米国の主要要求" en="Iran's five conditions vs. the main US demands" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Iran conditions */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#dc262630", backgroundColor: "#dc262610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#dc2626" }}>
            <T ja="イランの5条件" en="Iran's five conditions" />
          </div>
          <div>
            {iranConditions.map((cond, i) => (
              <div key={i} className={`flex items-start ${i > 0 ? "mt-2" : ""}`}>
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mr-2"
                  style={{ backgroundColor: "#dc2626" }}
                >
                  {i + 1}
                </span>
                <span className="text-[11px] text-foreground/60 leading-tight mt-0.5">
                  <T ja={cond.ja} en={cond.en} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* US demands */}
        <div
          className="p-4 rounded-lg border mt-3 sm:mt-0 sm:ml-4"
          style={{ borderColor: "#3b82f630", backgroundColor: "#3b82f610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#3b82f6" }}>
            <T ja="米国の主要要求" en="Key US demands" />
          </div>
          <div>
            {usConditions.map((demand, i) => (
              <div key={i} className={`flex items-start ${i > 0 ? "mt-2" : ""}`}>
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mr-2"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  {i + 1}
                </span>
                <span className="text-[11px] text-foreground/60 leading-tight mt-0.5">
                  <T ja={demand.ja} en={demand.en} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status callout */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
        <div className="text-[10px] font-medium text-foreground/60 mb-1.5">
          <T ja="現状" en="Current status" />
        </div>
        <div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-2" />
            <span className="text-[11px] text-foreground/55">
              <T ja="オマーン仲介で45日間の停戦協議が進行中" en="Oman-mediated 45-day ceasefire talks are underway" />
            </span>
          </div>
          <div className="flex items-center mt-1.5">
            <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-2" />
            <span className="text-[11px] text-foreground/55">
              <T ja="4月5日の最後通牒をイランが拒否、協議は膠着" en="Iran rejected the April 5 ultimatum and talks are stalled" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
