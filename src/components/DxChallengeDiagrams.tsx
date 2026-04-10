"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   DX Overview Stats Diagram
   ───────────────────────────────────────────── */
export function DxOverviewStatsDiagram() {
  return (
    <div role="img" aria-label="DX overview statistics and international comparison" className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { value: "17.3兆円", label: "2026年度 IT投資額", labelEn: "FY2026 IT investment", sub: "前年比+3.9%", subEn: "+3.9% YoY", color: "#3b82f6" },
          { value: "82%", label: "DX予算計上企業", labelEn: "Companies with DX budget", sub: "AI予算計上: 70%", subEn: "With AI budget: 70%", color: "#10b981" },
          { value: "7%", label: "崖を完全に克服", labelEn: "Fully overcame the DX cliff", sub: "4割が課題残存", subEn: "40% still have issues", color: "#ef4444" },
          { value: "79万人", label: "2030年 IT人材不足", labelEn: "IT talent shortage by 2030", sub: "最大シナリオ", subEn: "Maximum scenario", color: "#f59e0b" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] text-foreground/50 mt-1"><T ja={s.label} en={s.labelEn} /></div>
            <div className="text-[9px] text-foreground/35"><T ja={s.sub} en={s.subEn} /></div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl border border-brief-border bg-brief-card">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
          <T ja="DX成果の日米独比較" en="DX Results: Japan vs. US vs. Germany" />
        </div>
        <div className="space-y-2">
          {[
            { country: "米国", countryEn: "USA", pct: 83, color: "#3b82f6" },
            { country: "ドイツ", countryEn: "Germany", pct: 82, color: "#10b981" },
            { country: "日本", countryEn: "Japan", pct: 58, color: "#ef4444" },
          ].map((c) => (
            <div key={c.country} className="flex items-center gap-3">
              <div className="w-12 text-xs text-foreground/60 text-right flex-shrink-0">
                <T ja={c.country} en={c.countryEn} />
              </div>
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
          <T
            ja={`※ DXで「成果が出ている」と回答した企業の割合（IPA「DX動向2025」）`}
            en={`* Share of companies reporting DX results (IPA "DX Trends 2025")`}
          />
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
    { name: "レガシーシステム", nameEn: "Legacy systems", desc: "MES/SCADAが20年以上稼働、クラウド非対応", descEn: "MES/SCADA running 20+ years, not cloud-compatible", severity: "critical", color: "#ef4444" },
    { name: "データサイロ化", nameEn: "Data silos", desc: "CAD/MES/QMS/SCMが部門ごとに分断", descEn: "CAD/MES/QMS/SCM fragmented by department", severity: "critical", color: "#ef4444" },
    { name: "OT/IT統合", nameEn: "OT/IT integration", desc: "工場系と情報系のネットワーク分離", descEn: "Factory (OT) and information (IT) networks are isolated", severity: "high", color: "#f59e0b" },
    { name: "人材不足", nameEn: "Talent shortage", desc: "製造現場のデジタル人材が圧倒的に不足", descEn: "Critical shortage of digital talent on the factory floor", severity: "high", color: "#f59e0b" },
  ];

  return (
    <div role="img" aria-label="Manufacturing DX challenge map" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="製造業DXの課題マップ" en="Manufacturing DX Challenge Map" />
      </div>
      <div className="space-y-2">
        {challenges.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${c.color}06`, borderLeft: `3px solid ${c.color}` }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50"><T ja={c.desc} en={c.descEn} /></div>
            </div>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ backgroundColor: `${c.color}15`, color: c.color }}
            >
              {c.severity === "critical"
                ? <T ja="深刻" en="Critical" />
                : <T ja="重大" en="Serious" />}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1"><T ja="処方箋" en="Prescription" /></div>
        <div className="text-[10px] text-foreground/60">
          <T
            ja="全面刷新ではなく「段階的接続」— OTデータをクラウドに集約 → AI分析で予知保全・品質予測"
            en={`"Gradual integration" rather than full overhaul — aggregate OT data to the cloud → AI-driven predictive maintenance and quality forecasting`}
          />
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
    <div role="img" aria-label="Construction industry DX status and challenges" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="建設業DXの現状" en="Construction Industry DX Status" />
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "約60%", label: "業務の半分以上が紙", labelEn: "More than half of tasks paper-based", color: "#ef4444" },
          { value: "99%", label: "中小企業の割合", labelEn: "Share of SMEs in sector", color: "#f59e0b" },
          { value: "1.5倍", label: "ICTで生産性向上", labelEn: "Productivity gain with ICT", color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-foreground/50 mt-1"><T ja={s.label} en={s.labelEn} /></div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">
          <T ja="DXを阻む3つの壁" en="Three Walls Blocking DX" />
        </div>
        <div className="space-y-1.5">
          {[
            { label: "紙文化", labelEn: "Paper culture", desc: "図面・日報・検査記録が紙ベース、FAX依存", descEn: "Drawings, daily reports, and inspection records are paper-based; fax-dependent" },
            { label: "多重下請け", labelEn: "Multi-tier subcontracting", desc: "元請→一次→二次…でデータ共有が困難", descEn: "Data sharing is difficult across prime → tier-1 → tier-2 … contractors" },
            { label: "2024年問題", labelEn: "2024 labor reform", desc: "時間外労働規制で人手不足がさらに深刻化", descEn: "Overtime restrictions exacerbate the labor shortage further" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 pl-2" style={{ borderLeft: "2px solid #f59e0b40" }}>
              <div>
                <div className="text-[10px] font-semibold text-[#f59e0b]"><T ja={item.label} en={item.labelEn} /></div>
                <div className="text-[9px] text-foreground/50"><T ja={item.desc} en={item.descEn} /></div>
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
    <div role="img" aria-label="Healthcare DX progress and challenges" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="医療DXの進捗と課題" en="Healthcare DX Progress & Challenges" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-xs font-bold text-[#3b82f6] mb-2"><T ja="電子カルテ普及率" en="Electronic Health Record Adoption Rate" /></div>
          <div className="space-y-1.5">
            {[
              { label: "大病院（400床以上）", labelEn: "Large hospitals (400+ beds)", value: "90%超", valueEn: "90%+" },
              { label: "一般病院", labelEn: "General hospitals", value: "約60%", valueEn: "~60%" },
              { label: "診療所", labelEn: "Clinics", value: "約50%", valueEn: "~50%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[10px] text-foreground/60"><T ja={item.label} en={item.labelEn} /></span>
                <span className="text-[10px] font-bold text-[#3b82f6]"><T ja={item.value} en={item.valueEn} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#ef4444]/5 border border-[#ef4444]/15">
          <div className="text-xs font-bold text-[#ef4444] mb-2"><T ja="課題" en="Challenges" /></div>
          <div className="space-y-1.5">
            {[
              { ja: "ベンダー間のデータ形式が不統一", en: "Non-standardized data formats across vendors" },
              { ja: "セキュリティ規制とデジタル化の両立", en: "Balancing security compliance with digitalization" },
              { ja: "中小医療機関のIT投資余力不足", en: "Insufficient IT investment capacity at small clinics" },
            ].map((item) => (
              <div key={item.ja} className="flex items-start gap-1.5">
                <span className="text-[#ef4444] text-[10px] mt-0.5">{"\u25CF"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1"><T ja="処方箋" en="Prescription" /></div>
        <div className="text-[10px] text-foreground/60">
          <T
            ja="全国医療情報プラットフォーム構築 + HL7 FHIR標準規格の採用義務化"
            en="Build a nationwide medical information platform + mandate HL7 FHIR standard adoption"
          />
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
    <div role="img" aria-label="Logistics DX structural challenges and supply chain" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="物流DXの構造的課題" en="Structural Challenges of Logistics DX" />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { value: "36%", label: "2030年に運べなくなる荷物", labelEn: "Freight that cannot be delivered by 2030", color: "#ef4444" },
          { value: "40%→15%", label: "空車率改善（プラットフォーム活用時）", labelEn: "Empty-vehicle rate improvement (with platform use)", color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] text-foreground/50 mt-1"><T ja={s.label} en={s.labelEn} /></div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03] mb-3">
        <div className="text-[10px] font-medium text-foreground/55 mb-2">
          <T ja="サプライチェーン全体のDXが必要" en="DX Needed Across the Entire Supply Chain" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { label: "荷主", labelEn: "Shippers", desc: "発注デジタル化", descEn: "Digital ordering" },
            { label: "物流企業", labelEn: "Logistics firms", desc: "配車AI・ルート最適化", descEn: "AI dispatch & route optimization" },
            { label: "倉庫", labelEn: "Warehouses", desc: "自動化・ロボット", descEn: "Automation & robotics" },
            { label: "ラストワンマイル", labelEn: "Last mile", desc: "再配達削減", descEn: "Reduce redeliveries" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className="text-center">
                <div className="text-[10px] font-semibold text-[#8b5cf6]"><T ja={s.label} en={s.labelEn} /></div>
                <div className="text-[9px] text-foreground/40"><T ja={s.desc} en={s.descEn} /></div>
              </div>
              {i < 3 && <div className="text-foreground/20 text-sm">{"\u2192"}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
        <div className="text-xs font-bold text-[#3b82f6] mb-1"><T ja="成功事例" en="Success story" /></div>
        <div className="text-[10px] text-foreground/60">
          <T
            ja="SGホールディングス — DX銘柄2025グランプリ。AI配送ルート最適化、自動仕分けロボット、再配達率削減を実現"
            en="SG Holdings — DX Stock Grand Prix 2025. Achieved AI delivery route optimization, automated sorting robots, and reduced redelivery rates."
          />
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
    <div role="img" aria-label="Financial services DX current status and challenges" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="金融DXの現在地" en="Where Financial Services DX Stands" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/15">
          <div className="text-xs font-bold text-[#3b82f6] mb-2"><T ja="DX先進業界としての実績" en="Track record as a DX-advanced sector" /></div>
          <div className="space-y-1.5">
            {[
              { ja: "DX推進指標で業界トップスコア", en: "Top industry score on DX promotion index" },
              { ja: "メガバンク：数千億円規模のIT投資", en: "Mega-banks: IT investment in the hundreds of billions" },
              { ja: "オープンAPI導入努力義務", en: "Best-effort obligation to adopt open APIs" },
              { ja: "フィンテック企業との連携拡大", en: "Expanding partnerships with fintech companies" },
            ].map((item) => (
              <div key={item.ja} className="flex items-start gap-1.5">
                <span className="text-[#3b82f6] text-[10px] mt-0.5">{"\u25B2"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/15">
          <div className="text-xs font-bold text-[#f59e0b] mb-2"><T ja="「次の壁」" en={`"The Next Wall"`} /></div>
          <div className="space-y-1.5">
            {[
              { ja: "IT投資の7〜8割が維持運用に消費", en: "70–80% of IT spend goes to maintenance" },
              { ja: "レガシー基幹の刷新が進まない", en: "Legacy core system renewal stalls" },
              { ja: "PayPay等フィンテックの市場侵食", en: "Market erosion by PayPay and other fintechs" },
              { ja: "BaaS・組込み型金融への対応", en: "Adapting to BaaS and embedded finance" },
            ].map((item) => (
              <div key={item.ja} className="flex items-start gap-1.5">
                <span className="text-[#f59e0b] text-[10px] mt-0.5">{"\u25BC"}</span>
                <span className="text-[10px] text-foreground/60"><T ja={item.ja} en={item.en} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-foreground/[0.03]">
        <div className="text-[10px] font-medium text-foreground/55 mb-1"><T ja="IT投資配分の課題" en="IT Investment Allocation Challenge" /></div>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="h-5 bg-foreground/[0.04] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#ef4444]/20 border-r-2 border-[#ef4444]" style={{ width: "75%" }}>
                <span className="text-[9px] font-bold text-[#ef4444] pl-2 leading-5">
                  <T ja="維持運用 75%" en="Maintenance 75%" />
                </span>
              </div>
              <div className="h-full bg-[#10b981]/20 border-r-2 border-[#10b981]" style={{ width: "25%" }}>
                <span className="text-[9px] font-bold text-[#10b981] pl-1 leading-5">
                  <T ja="新規 25%" en="New 25%" />
                </span>
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
    <div role="img" aria-label="Retail DX key metrics and e-commerce penetration" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="小売DXのキーワード" en="Key Metrics in Retail DX" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { label: "EC化率", labelEn: "E-commerce penetration", value: "9.78%", valueEn: "9.78%", sub: "先進国では低水準", subEn: "Low vs. peer economies", color: "#3b82f6" },
          { label: "リテールメディア", labelEn: "Retail media market", value: "6,066億円", valueEn: "¥606.6B", sub: "2025年 前年比+29%", subEn: "+29% YoY in 2025", color: "#10b981" },
          { label: "ID-POS統合", labelEn: "ID-POS integration", value: "大手の一部", valueEn: "Some large players", sub: "中小は未着手", subEn: "SMEs yet to start", color: "#f59e0b" },
          { label: "OMO実施率", labelEn: "OMO implementation rate", value: "54%", valueEn: "54%", sub: "EC事業者の8割が注目", subEn: "80% of e-commerce firms watching", color: "#8b5cf6" },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
            <div className="text-lg font-bold" style={{ color: s.color }}>
              <T ja={s.value} en={s.valueEn} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-1"><T ja={s.label} en={s.labelEn} /></div>
            <div className="text-[9px] text-foreground/35"><T ja={s.sub} en={s.subEn} /></div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/15">
        <div className="text-xs font-bold text-[#10b981] mb-1"><T ja="処方箋" en="Prescription" /></div>
        <div className="text-[10px] text-foreground/60">
          <T
            ja="CDP（顧客データ基盤）でID-POS・EC・アプリのデータ統合 → パーソナライゼーション + リテールメディア基盤を同時構築"
            en="Integrate ID-POS, e-commerce, and app data via CDP (Customer Data Platform) → build personalization and retail media infrastructure simultaneously"
          />
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
    { num: "1", name: "経営者のコミットメント", nameEn: "Executive commitment", desc: "DXを「IT部門の仕事」ではなく「経営戦略」に", descEn: 'Make DX a "management strategy," not just "IT\'s job"', color: "#ef4444" },
    { num: "2", name: "内製化の推進", nameEn: "Promoting in-house development", desc: "日本のIT人材28%がユーザー企業（米国72%）", descEn: "Only 28% of Japan's IT talent is in user companies (vs. 72% in the US)", color: "#3b82f6" },
    { num: "3", name: "レガシーの段階的刷新", nameEn: "Phased legacy modernization", desc: "API連携・マイクロサービス・SaaS移行", descEn: "API integration, microservices, SaaS migration", color: "#10b981" },
    { num: "4", name: "データ基盤の統合", nameEn: "Unified data infrastructure", desc: "サイロ解消 + データガバナンスの整備", descEn: "Break down silos + establish data governance", color: "#8b5cf6" },
    { num: "5", name: "小さく始めて速く回す", nameEn: "Start small, iterate fast", desc: "PoC→検証→展開のアジャイルサイクル", descEn: "Agile cycle: PoC → validation → rollout", color: "#f59e0b" },
  ];

  return (
    <div role="img" aria-label="Five common conditions for DX success" className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-4">
        <T ja="DX成功の5つの共通条件" en="5 Common Conditions for DX Success" />
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
              <div className="text-xs font-bold" style={{ color: c.color }}><T ja={c.name} en={c.nameEn} /></div>
              <div className="text-[10px] text-foreground/50"><T ja={c.desc} en={c.descEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.03] text-center">
        <div className="text-[10px] font-medium text-foreground/55">
          <T
            ja="失敗企業の64%は「業務フロー整理を後回しにしてITツールを先に導入」"
            en="64% of failed DX initiatives introduced IT tools before addressing business process reform"
          />
        </div>
      </div>
    </div>
  );
}
