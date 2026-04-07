"use client";

/* ─────────────────────────────────────────────
   米イラン関係 タイムライン
   ───────────────────────────────────────────── */
export function USIranTimelineDiagram() {
  const events = [
    { year: "1953", label: "CIAによるイラン・クーデター", detail: "アジャックス作戦でモサッデク首相を失脚、シャー復権", severity: "critical" },
    { year: "1979", label: "イスラム革命", detail: "シャー打倒、ホメイニ師がイスラム共和制を樹立", severity: "critical" },
    { year: "1979-81", label: "在テヘラン米大使館人質事件", detail: "444日間 — 米外交官52名がテヘラン大使館で拘束", severity: "critical" },
    { year: "1980-88", label: "イラン・イラク戦争", detail: "米国はイラクを支援、犠牲者約100万人、化学兵器使用", severity: "high" },
    { year: "2002", label: "核開発計画の暴露", detail: "反体制派NCRIがナタンズの秘密濃縮施設を暴露", severity: "high" },
    { year: "2015", label: "JCPOA調印", detail: "P5+1核合意 — イランは制裁解除と引き換えに濃縮を制限", severity: "response" },
    { year: "2018", label: "トランプがJCPOA離脱", detail: "「最大圧力」政策、米制裁を全面再発動", severity: "critical" },
    { year: "2020", label: "ソレイマニ司令官殺害", detail: "バグダッド空港で米軍ドローンが革命防衛隊コッズ部隊司令官を暗殺", severity: "critical" },
    { year: "2025", label: "スナップバック制裁", detail: "2025年9月に国連制裁が復活、JCPOAは事実上消滅", severity: "high" },
    { year: "2026", label: "米・イスラエル合同攻撃", detail: "「エピック・フューリー作戦」 — 2月28日に大規模空爆開始", severity: "critical" },
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
        米イラン関係 タイムライン
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        70年にわたる対立 — 主要な転換点
      </div>

      {/* Legend */}
      <div className="flex flex-wrap mb-5 text-[9px] text-foreground/50">
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-1.5" />
          重大局面
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-1.5" />
          高影響
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] mr-1.5" />
          対応・外交
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
   制裁の三層構造
   ───────────────────────────────────────────── */
export function SanctionsArchitectureDiagram() {
  const pillars = [
    {
      name: "米国の単独制裁",
      color: "#dc2626",
      bgColor: "#dc262610",
      targets: ["財務省OFAC主導", "エネルギー部門", "銀行・金融", "革命防衛隊（IRGC）をFTOに指定"],
    },
    {
      name: "国連安保理制裁",
      color: "#3b82f6",
      bgColor: "#3b82f610",
      targets: ["6本の決議（2006-2010）", "武器禁輸＋渡航禁止", "2025年9月にスナップバック発動", "2025年10月にJCPOA終了"],
    },
    {
      name: "EU制裁",
      color: "#8b5cf6",
      bgColor: "#8b5cf610",
      targets: ["国連枠組みに準拠", "原油輸入禁止（2012年7月）", "保険・再保険禁止", "イラン中央銀行が対象"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="米国・国連・EUの3層からなるイラン制裁構造を示す図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        イラン制裁の三層構造
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        国際制裁レジームの3つの柱
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
              {p.name}
            </div>
            <div>
              {p.targets.map((t, ti) => (
                <div key={t} className={`flex items-start ${ti > 0 ? "mt-1.5" : ""}`}>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-[11px] text-foreground/60 leading-tight">
                    {t}
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
          SWIFTからの切断 — 2012年3月
        </div>
        <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
          イランの銀行がSWIFTネットワークから切断 — 国家単位での切断は史上初。「金融の核兵器」と評された。
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
      before: "6,000億ドル",
      after: "3,560億ドル",
      change: "▼41%",
      color: "#dc2626",
    },
    {
      label: "石油輸出量",
      before: "日量220万バレル",
      after: "日量70万バレル",
      change: "▼68%",
      color: "#dc2626",
    },
    {
      label: "凍結資産",
      before: "",
      after: "1,000-1,200億ドル",
      change: "海外で凍結",
      color: "#f59e0b",
    },
    {
      label: "インフレ率",
      before: "",
      after: "60%",
      change: "ピーク時",
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
        イラン経済への影響
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        制裁と孤立の累積的打撃
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
              {s.label}
            </div>
            {s.before && (
              <div className="text-[10px] text-foreground/40 mt-1 line-through">
                {s.before}
              </div>
            )}
            <div className="text-lg font-bold tabular-nums mt-0.5">
              {s.after}
            </div>
            <div
              className="text-[10px] font-medium mt-1"
              style={{ color: s.color }}
            >
              {s.change}
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
    { year: "2011", bpd: 2.2, label: "220万", note: "制裁前のピーク" },
    { year: "2013", bpd: 0.7, label: "70万", note: "オバマ期の制裁効果" },
    { year: "2016", bpd: 2.0, label: "200万", note: "JCPOA後の回復" },
    { year: "2019", bpd: 0.4, label: "40万", note: "トランプ最大圧力" },
    { year: "2024", bpd: 1.5, label: "150万", note: "バイデン期の緩い執行" },
    { year: "2025年9月", bpd: 2.13, label: "213万", note: "戦争前ピーク" },
  ];

  const maxBpd = 2.5;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="2011年から2025年9月までのイラン石油輸出量の横棒グラフ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        イラン石油輸出の推移
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        日量バレル数 — 制裁影響のサイクル
      </div>

      <div>
        {exports.map((e, i) => {
          const pct = (e.bpd / maxBpd) * 100;
          const barColor = e.bpd >= 1.5 ? "#f59e0b" : "#dc2626";
          return (
            <div key={e.year} className={i > 0 ? "mt-2.5" : ""}>
              <div className="flex items-center">
                <span className="text-[10px] text-foreground/60 w-16 flex-shrink-0 text-right tabular-nums font-medium mr-2">
                  {e.year}
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
                      {e.label}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-foreground/35 ml-[72px] mt-0.5">
                {e.note}
              </div>
            </div>
          );
        })}
      </div>

      {/* China note */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] text-[10px] text-foreground/50 leading-relaxed">
        <span className="font-semibold">中国ファクター：</span>2024〜25年時点で、中国は「影の艦隊」タンカーとSTS（船舶間移送）を通じてイランの石油輸出の約9割を購入し、米制裁の執行を骨抜きにしている。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   核交渉のタイムライン
   ───────────────────────────────────────────── */
export function NuclearNegotiationsDiagram() {
  const events = [
    { date: "2015年7月", label: "JCPOA調印", detail: "P5+1核合意 — イランは濃縮を3.67%に制限", severity: "response" },
    { date: "2018年5月", label: "米国の離脱", detail: "トランプがJCPOA離脱、「最大圧力」開始", severity: "critical" },
    { date: "2025年4-6月", label: "マスカット協議", detail: "オマーンを介した米イラン秘密協議、突破口なし", severity: "response" },
    { date: "2025年6月", label: "戦争勃発", detail: "軍事的エスカレーションが外交ルートを断絶", severity: "critical" },
    { date: "2025年8月", label: "スナップバック発動", detail: "英国がスナップバック条項を発動、国連制裁が全面復活", severity: "high" },
    { date: "2025年10月", label: "JCPOA失効", detail: "国連安保理決議2231号が期限切れ — 合意は正式に消滅", severity: "critical" },
    { date: "2026年2月", label: "最終協議が決裂", detail: "土壇場の外交が崩壊、数週間後に攻撃開始", severity: "critical" },
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
        核交渉のタイムライン
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        JCPOAから崩壊まで — 外交の軌跡
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
   抗議運動と戦争
   ───────────────────────────────────────────── */
export function ProtestsAndWarDiagram() {
  const protests = [
    { label: "インフレ率60%", detail: "制裁下で食料・燃料価格が高騰" },
    { label: "200都市以上に拡大", detail: "全国各州で抗議運動が広がる" },
    { label: "12月28日 抗議勃発", detail: "経済崩壊と戦争被害が引き金" },
    { label: "1月8-9日 弾圧", detail: "革命防衛隊投入、大量逮捕とネット遮断" },
  ];

  const warEvents = [
    { label: "2月28日 エピック・フューリー作戦", detail: "米・イスラエル合同空爆開始" },
    { label: "ハメネイ師死亡", detail: "最高指導者が指導部地下壕への攻撃で死亡" },
    { label: "ホルムズ海峡封鎖", detail: "革命防衛隊が封鎖を宣言、世界の原油価格が急騰" },
    { label: "体制の分裂", detail: "革命防衛隊各派が支配権を争い指揮系統が崩壊" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="国内抗議運動と軍事戦争の出来事を比較する2列の図"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        国内危機と戦争
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        国内の動乱と外部からの軍事作戦が交錯
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Protests column */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#f59e0b30", backgroundColor: "#f59e0b10" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#f59e0b" }}>
            国内抗議運動
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
                    {item.label}
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    {item.detail}
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
            軍事戦争
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
                    {item.label}
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    {item.detail}
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
  const iranConditions = [
    "全空爆の即時停止",
    "国連・米制裁の全面解除",
    "ペルシャ湾からの海軍撤退",
    "イランの地域安全保障上の役割の承認",
    "民間インフラ被害への賠償",
  ];

  const usConditions = [
    "核計画の完全な解体",
    "革命防衛隊（IRGC）の武装解除・解体",
    "地域代理勢力（ヒズボラ、フーシ派）への支援停止",
    "ホルムズ海峡の無条件再開放",
    "国際査察団の完全アクセス",
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="イランと米国の停戦条件を比較する2列の図と現状"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        停戦交渉
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        イランの5条件 vs 米国の主要要求
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Iran conditions */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#dc262630", backgroundColor: "#dc262610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#dc2626" }}>
            イランの5条件
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
                  {cond}
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
            米国の主要要求
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
                  {demand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status callout */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
        <div className="text-[10px] font-medium text-foreground/60 mb-1.5">
          現状
        </div>
        <div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-2" />
            <span className="text-[11px] text-foreground/55">
              オマーン仲介で45日間の停戦協議が進行中
            </span>
          </div>
          <div className="flex items-center mt-1.5">
            <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-2" />
            <span className="text-[11px] text-foreground/55">
              4月5日の最後通牒をイランが拒否、協議は膠着
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
