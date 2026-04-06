"use client";

/* ─────────────────────────────────────────────
   DX Overview Stats Diagram
   ───────────────────────────────────────────── */
export function DxOverviewStatsDiagram() {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { value: "17.3兆円", label: "2026年度 IT投資額", sub: "前年比+3.9%", color: "#3b82f6" },
          { value: "82%", label: "DX予算計上企業", sub: "AI予算計上: 70%", color: "#10b981" },
          { value: "7%", label: "崖を完全に克服", sub: "4割が課題残存", color: "#ef4444" },
          { value: "79万人", label: "2030年 IT人材不足", sub: "最大シナリオ", color: "#f59e0b" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] text-foreground/50 mt-1">{s.label}</div>
            <div className="text-[9px] text-foreground/35">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
          DX成果の日米独比較
        </div>
        <div className="space-y-2">
          {[
            { country: "米国", pct: 83, color: "#3b82f6" },
            { country: "ドイツ", pct: 82, color: "#10b981" },
            { country: "日本", pct: 58, color: "#ef4444" },
          ].map((c) => (
            <div key={c.country} className="flex items-center gap-3">
              <div className="w-12 text-xs text-foreground/60 text-right flex-shrink-0">{c.country}</div>
              <div className="flex-1 h-5 bg-foreground/[0.04] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2"
                  style={{
                    width: `${c.pct}%`,
                    backgroundColor: `${c.color}20`,
                    borderRight: `3px solid ${c.color}`,
                  }}
                >
                  <span className="text-[10px] font-bold" style={{ color: c.color }}>{c.pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[9px] text-foreground/35">
          ※ DXで「成果が出ている」と回答した企業の割合（IPA「DX動向2025」）
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Manufacturing DX Diagram
   ───────────────────────────────────────────── */
export function DxManufacturingDiagram() {
  const challenges = [
    { name: "レガシーシステム", desc: "MES/SCADAが20年以上稼働、クラウド非対応", severity: "critical", color: "#ef4444" },
    { name: "データサイロ化", desc: "CAD/MES/QMS/SCMが部門ごとに分断", severity: "critical", color: "#ef4444" },
    { name: "OT/IT統合", desc: "工場系と情報系のネットワーク分離", severity: "high", color: "#f59e0b" },
    { name: "人材不足", desc: "製造現場のデジタル人材が圧倒的に不足", severity: "high", color: "#f59e0b" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        製造業DXの課題マップ
      </div>
      <div className="space-y-2">
        {challenges.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50">{c.desc}</div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ backgroundColor: `${c.color}15`, color: c.color }}
            >
              {c.severity === "critical" ? "深刻" : "重大"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1">処方箋</div>
        <div className="text-[10px] text-foreground/60">
          全面刷新ではなく「段階的接続」— OTデータをクラウドに集約 → AI分析で予知保全・品質予測
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Construction DX Diagram
   ───────────────────────────────────────────── */
export function DxConstructionDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        建設業DXの現状
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "約60%", label: "業務の半分以上が紙", color: "#ef4444" },
          { value: "99%", label: "中小企業の割合", color: "#f59e0b" },
          { value: "1.5倍", label: "ICTで生産性向上", color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-foreground/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">DXを阻む3つの壁</div>
        <div className="space-y-1.5">
          {[
            { label: "紙文化", desc: "図面・日報・検査記録が紙ベース、FAX依存" },
            { label: "多重下請け", desc: "元請→一次→二次…でデータ共有が困難" },
            { label: "2024年問題", desc: "時間外労働規制で人手不足がさらに深刻化" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 pl-2" style={{ borderLeft: "2px solid #f59e0b40" }}>
              <div>
                <div className="text-[10px] font-semibold text-[#f59e0b]">{item.label}</div>
                <div className="text-[9px] text-foreground/50">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Healthcare DX Diagram
   ───────────────────────────────────────────── */
export function DxHealthcareDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        医療DXの進捗と課題
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-xs font-bold text-[#3b82f6] mb-2">電子カルテ普及率</div>
          <div className="space-y-1.5">
            {[
              { label: "大病院（400床以上）", value: "90%超" },
              { label: "一般病院", value: "約60%" },
              { label: "診療所", value: "約50%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[10px] text-foreground/60">{item.label}</span>
                <span className="text-[10px] font-bold text-[#3b82f6]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#ef4444]/5 border border-[#ef4444]/15">
          <div className="text-xs font-bold text-[#ef4444] mb-2">課題</div>
          <div className="space-y-1.5">
            {[
              "ベンダー間のデータ形式が不統一",
              "セキュリティ規制とデジタル化の両立",
              "中小医療機関のIT投資余力不足",
            ].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#ef4444] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1">処方箋</div>
        <div className="text-[10px] text-foreground/60">
          全国医療情報プラットフォーム構築 + HL7 FHIR標準規格の採用義務化
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Logistics DX Diagram
   ───────────────────────────────────────────── */
export function DxLogisticsDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        物流DXの構造的課題
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { value: "36%", label: "2030年に運べなくなる荷物", color: "#ef4444" },
          { value: "40%→15%", label: "空車率改善（プラットフォーム活用時）", color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-foreground/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03] mb-3">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">サプライチェーン全体のDXが必要</div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "荷主", desc: "発注デジタル化" },
            { label: "物流企業", desc: "配車AI・ルート最適化" },
            { label: "倉庫", desc: "自動化・ロボット" },
            { label: "ラストワンマイル", desc: "再配達削減" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-[10px] font-semibold text-[#8b5cf6]">{s.label}</div>
                <div className="text-[9px] text-foreground/40">{s.desc}</div>
              </div>
              {i < 3 && <div className="text-foreground/20 text-sm">{"\u2192"}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
        <div className="text-xs font-bold text-[#3b82f6] mb-1">成功事例</div>
        <div className="text-[10px] text-foreground/60">
          SGホールディングス — DX銘柄2025グランプリ。AI配送ルート最適化、自動仕分けロボット、再配達率削減を実現
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Finance DX Diagram
   ───────────────────────────────────────────── */
export function DxFinanceDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        金融DXの現在地
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-xs font-bold text-[#3b82f6] mb-2">DX先進業界としての実績</div>
          <div className="space-y-1.5">
            {[
              "DX推進指標で業界トップスコア",
              "メガバンク：数千億円規模のIT投資",
              "オープンAPI導入努力義務",
              "フィンテック企業との連携拡大",
            ].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25B2"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/15">
          <div className="text-xs font-bold text-[#f59e0b] mb-2">「次の壁」</div>
          <div className="space-y-1.5">
            {[
              "IT投資の7〜8割が維持運用に消費",
              "レガシー基幹の刷新が進まない",
              "PayPay等フィンテックの市場侵食",
              "BaaS・組込み型金融への対応",
            ].map((item) => (
              <div key={item} className="flex items-start gap-1.5">
                <span className="text-[#f59e0b] text-[10px] mt-0.5">{"\u25BC"}</span>
                <span className="text-[10px] text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1">IT投資配分の課題</div>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="h-5 bg-foreground/[0.04] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#ef4444]/20 border-r-2 border-[#ef4444]" style={{ width: "75%" }}>
                <span className="text-[9px] font-bold text-[#ef4444] pl-2 leading-5">維持運用 75%</span>
              </div>
              <div className="h-full bg-[#10b981]/20 border-r-2 border-[#10b981]" style={{ width: "25%" }}>
                <span className="text-[9px] font-bold text-[#10b981] pl-1 leading-5">新規 25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Retail DX Diagram
   ───────────────────────────────────────────── */
export function DxRetailDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        小売DXのキーワード
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { label: "EC化率", value: "9.78%", sub: "先進国では低水準", color: "#3b82f6" },
          { label: "リテールメディア", value: "6,066億円", sub: "2025年 前年比+29%", color: "#10b981" },
          { label: "ID-POS統合", value: "大手の一部", sub: "中小は未着手", color: "#f59e0b" },
          { label: "OMO実施率", value: "54%", sub: "EC事業者の8割が注目", color: "#8b5cf6" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] text-foreground/50 mt-1">{s.label}</div>
            <div className="text-[9px] text-foreground/35">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1">処方箋</div>
        <div className="text-[10px] text-foreground/60">
          CDP（顧客データ基盤）でID-POS・EC・アプリのデータ統合 → パーソナライゼーション + リテールメディア基盤を同時構築
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DX Success Conditions Diagram
   ───────────────────────────────────────────── */
export function DxSuccessConditionsDiagram() {
  const conditions = [
    { num: "1", name: "経営者のコミットメント", desc: "DXを「IT部門の仕事」ではなく「経営戦略」に", color: "#ef4444" },
    { num: "2", name: "内製化の推進", desc: "日本のIT人材28%がユーザー企業（米国72%）", color: "#3b82f6" },
    { num: "3", name: "レガシーの段階的刷新", desc: "API連携・マイクロサービス・SaaS移行", color: "#10b981" },
    { num: "4", name: "データ基盤の統合", desc: "サイロ解消 + データガバナンスの整備", color: "#8b5cf6" },
    { num: "5", name: "小さく始めて速く回す", desc: "PoC→検証→展開のアジャイルサイクル", color: "#f59e0b" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        DX成功の5つの共通条件
      </div>
      <div className="space-y-2">
        {conditions.map((c) => (
          <div
            key={c.num}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
              style={{ backgroundColor: c.color }}
            >
              {c.num}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold" style={{ color: c.color }}>{c.name}</div>
              <div className="text-[10px] text-foreground/50">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-[10px] font-medium text-foreground/55">
          失敗企業の64%は「業務フロー整理を後回しにしてITツールを先に導入」
        </div>
      </div>
    </div>
  );
}
