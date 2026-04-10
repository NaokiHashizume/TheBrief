"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   1. Timeline Diagram (2023–2026)
   ───────────────────────────────────────────── */
export function IsraelWarTimelineDiagram() {
  const events = [
    { date: "2023.10.07", label: "ハマス奇襲攻撃", labelEn: "Hamas surprise attack", detail: "死者1,200人・人質251人", detailEn: "1,200 killed, 251 taken hostage", color: "#ef4444" },
    { date: "2023.10.27", label: "地上侵攻開始", labelEn: "Ground invasion begins", detail: "イスラエル軍ガザ北部制圧", detailEn: "IDF enters northern Gaza", color: "#f97316" },
    { date: "2024.11", label: "ICC逮捕状発付", labelEn: "ICC arrest warrant issued", detail: "ネタニヤフ・ガランツ", detailEn: "Netanyahu & Gallant", color: "#8b5cf6" },
    { date: "2025.01.19", label: "第1次停戦発効", labelEn: "1st ceasefire takes effect", detail: "42日間の予定", detailEn: "Planned for 42 days", color: "#10b981" },
    { date: "2025.03.18", label: "イスラエルが停戦破棄", labelEn: "Israel breaks ceasefire", detail: "攻撃を再開", detailEn: "Resumes offensive", color: "#ef4444" },
    { date: "2025.06", label: "極右閣僚制裁", labelEn: "Far-right ministers sanctioned", detail: "英・豪・加・NZ・ノルウェー", detailEn: "UK, Australia, Canada, NZ, Norway", color: "#f59e0b" },
    { date: "2025.10.10", label: "第2次停戦発効", labelEn: "2nd ceasefire takes effect", detail: "部分的な実施にとどまる", detailEn: "Partial implementation only", color: "#10b981" },
    { date: "2026.01", label: "最後の人質遺体返還", labelEn: "Last hostage remains returned", detail: "人質問題に一区切り", detailEn: "Hostage issue reaches milestone", color: "#3b82f6" },
    { date: "2026.04", label: "武装解除交渉膠着", labelEn: "Disarmament talks stall", detail: "フェーズ2協議が停滞", detailEn: "Phase 2 negotiations stuck", color: "#94a3b8" },
  ];

  return (
    <div role="img" aria-label="Timeline of Israel-Gaza war key events 2023–2026" className="my-6 relative">
      <div className="absolute left-[56px] top-0 bottom-0 w-px bg-brief-border" />
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-[48px] text-[9px] tabular-nums text-foreground/50 text-right flex-shrink-0 pt-0.5 leading-tight">
              {e.date}
            </div>
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 border-2 border-background relative z-10"
              style={{ backgroundColor: e.color }}
            />
            <div className="min-w-0">
              <div className="text-xs font-bold" style={{ color: e.color }}>
                <T ja={e.label} en={e.labelEn} />
              </div>
              <div className="text-[10px] text-foreground/55">
                <T ja={e.detail} en={e.detailEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. Netanyahu Legal Issues Diagram
   ───────────────────────────────────────────── */
export function IsraelNetanyahuLegalDiagram() {
  const cases = [
    {
      id: "Case 1000",
      title: "ケース1000",
      titleEn: "Case 1000",
      crime: "詐欺・背任",
      crimeEn: "Fraud & breach of trust",
      desc: "ハリウッド・プロデューサー等から約70万シェケルの贈り物",
      descEn: "~₪700K in gifts from Hollywood producer & Australian billionaire",
      color: "#ef4444",
    },
    {
      id: "Case 2000",
      title: "ケース2000",
      titleEn: "Case 2000",
      crime: "詐欺・背任",
      crimeEn: "Fraud & breach of trust",
      desc: "競合紙規制の見返りに好意的報道を交渉",
      descEn: "Negotiated favorable coverage in exchange for limiting rival newspaper",
      color: "#f97316",
    },
    {
      id: "Case 4000",
      title: "ケース4000",
      titleEn: "Case 4000",
      crime: "収賄・詐欺・背任",
      crimeEn: "Bribery, fraud & breach of trust",
      desc: "通信会社に18億シェケル相当の便宜、見返りにニュースサイト操作",
      descEn: "~₪1.8B in regulatory benefits to telecom firm in exchange for media manipulation",
      color: "#8b5cf6",
    },
  ];

  return (
    <div role="img" aria-label="Netanyahu's three criminal cases and war continuation dynamics" className="my-6 space-y-3">
      <div className="grid grid-cols-1 gap-2">
        {cases.map((c) => (
          <div key={c.id} className="p-3 rounded-xl border border-brief-border bg-brief-card flex items-start gap-3">
            <div className="flex-shrink-0 w-16 text-center">
              <div className="text-[10px] font-bold rounded px-1 py-0.5 mb-1" style={{ color: c.color, background: `${c.color}18` }}>
                {c.id}
              </div>
              <div className="text-[9px] font-bold" style={{ color: c.color }}>
                <T ja={c.crime} en={c.crimeEn} />
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-foreground/80 mb-0.5">
                <T ja={c.title} en={c.titleEn} />
              </div>
              <div className="text-[10px] text-foreground/55 leading-relaxed">
                <T ja={c.desc} en={c.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl border border-dashed border-[#ef4444]/30 bg-[#ef4444]/5">
        <div className="text-[10px] font-bold text-[#ef4444] mb-1">
          <T ja="構造的ジレンマ" en="Structural Dilemma" />
        </div>
        <div className="text-[10px] text-foreground/60 leading-relaxed">
          <T
            ja="首相在任中は連立が維持される限り政権は続く。停戦・連立崩壊 → 選挙 → 首相失職 → ICC引き渡し圧力という連鎖が、戦争継続への動機を生む"
            en="As long as the coalition holds, Netanyahu stays PM. Ceasefire → coalition collapse → election → loss of office → ICC extradition pressure forms a chain that incentivizes war continuation"
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. Coalition Structure — 5 Walls to Ceasefire
   ───────────────────────────────────────────── */
export function IsraelCoalitionStructureDiagram() {
  const walls = [
    { num: "①", label: "ネタニヤフの法的リスク", labelEn: "Netanyahu's legal risk", detail: "停戦→政権失職→ICC圧力", detailEn: "Ceasefire → loss of power → ICC pressure", color: "#ef4444" },
    { num: "②", label: "極右連立の拒否権", labelEn: "Far-right coalition veto", detail: "スモトリッチ離脱で過半数割れ", detailEn: "Smotrich departure breaks majority", color: "#f97316" },
    { num: "③", label: "ハマスの武装解除拒否", labelEn: "Hamas refuses disarmament", detail: "撤退保証なしに交渉せず", detailEn: "No talks without withdrawal guarantee", color: "#8b5cf6" },
    { num: "④", label: "米国の軍事支援継続", labelEn: "Continued US military support", detail: "外交保護+武器供与の両立", detailEn: "Diplomatic shield + weapons supply", color: "#3b82f6" },
    { num: "⑤", label: "地域化した紛争構造", labelEn: "Regionalized conflict structure", detail: "イラン・フーシー・ヒズボラの絡み合い", detailEn: "Iran-Houthi-Hezbollah entanglement", color: "#f59e0b" },
  ];

  return (
    <div role="img" aria-label="5 structural walls preventing ceasefire in Gaza" className="my-6 space-y-2">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
        <T ja="停戦を阻む5つの壁" en="5 Walls Blocking Ceasefire" />
      </div>
      {walls.map((w) => (
        <div key={w.num} className="flex items-center gap-3 p-3 rounded-xl border border-brief-border bg-brief-card">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: `${w.color}20`, color: w.color }}
          >
            {w.num}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-bold text-foreground/85">
              <T ja={w.label} en={w.labelEn} />
            </div>
            <div className="text-[10px] text-foreground/50 mt-0.5">
              <T ja={w.detail} en={w.detailEn} />
            </div>
          </div>
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: w.color }} />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. Casualties & Impact Statistics
   ───────────────────────────────────────────── */
export function IsraelWarCasualtiesDiagram() {
  const stats = [
    { label: "確認死者数", labelEn: "Confirmed deaths", value: "7万人超", valueEn: "70,000+", sub: "ガザ保健省発表（2026年初頭）", subEn: "Gaza Health Ministry (early 2026)", color: "#ef4444" },
    { label: "推計超過死亡", labelEn: "Estimated excess deaths", value: "18.6万人", valueEn: "186,000+", sub: "ランセット誌推計（病気・栄養失調含む）", subEn: "The Lancet estimate (incl. disease & malnutrition)", color: "#f97316" },
    { label: "死者に占める民間人", labelEn: "Share of civilian deaths", value: "80%以上", valueEn: "80%+", sub: "イスラエル軍機密データ（英報道）", subEn: "Based on IDF classified data (UK press)", color: "#8b5cf6" },
    { label: "死者に占める子ども", labelEn: "Share of child deaths", value: "44%", valueEn: "44%", sub: "確認された死者の内訳", subEn: "Of confirmed fatalities", color: "#f59e0b" },
    { label: "再建コスト試算", labelEn: "Estimated reconstruction cost", value: "$350〜400億", valueEn: "$35–40B", sub: "完了まで14〜16年（国連推計）", subEn: "14–16 years to complete (UN estimate)", color: "#3b82f6" },
    { label: "機能停止した病院", labelEn: "Non-functional hospitals", value: "90%以上", valueEn: "90%+", sub: "ガザ全病院のうち", subEn: "Of all hospitals in Gaza", color: "#10b981" },
  ];

  return (
    <div role="img" aria-label="Gaza war casualty and destruction statistics" className="my-6 grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="p-3 rounded-xl border border-brief-border bg-brief-card">
          <div className="text-[9px] text-foreground/50 mb-1">
            <T ja={s.label} en={s.labelEn} />
          </div>
          <div className="text-xl font-black tabular-nums" style={{ color: s.color }}>
            <T ja={s.value} en={s.valueEn} />
          </div>
          <div className="text-[9px] text-foreground/45 mt-1 leading-tight">
            <T ja={s.sub} en={s.subEn} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. Regional Players Matrix
   ───────────────────────────────────────────── */
export function IsraelRegionalPlayersDiagram() {
  const players = [
    { name: "米国", nameEn: "United States", stance: "イスラエル支持", stanceEn: "Pro-Israel", detail: "武器供与継続・外交保護", detailEn: "Arms supply + diplomatic shield", color: "#3b82f6", icon: "🇺🇸" },
    { name: "イラン", nameEn: "Iran", stance: "ハマス支援", stanceEn: "Hamas backer", detail: "「抵抗の枢軸」支援・核開発継続", detailEn: "Axis of Resistance support, nuclear program", color: "#ef4444", icon: "🇮🇷" },
    { name: "カタール", nameEn: "Qatar", stance: "調停者", stanceEn: "Mediator", detail: "停戦交渉の仲介役", detailEn: "Ceasefire negotiation broker", color: "#10b981", icon: "🇶🇦" },
    { name: "エジプト", nameEn: "Egypt", stance: "調停者", stanceEn: "Mediator", detail: "ラファ国境管理・難民流入阻止", detailEn: "Rafah crossing control, blocking refugees", color: "#10b981", icon: "🇪🇬" },
    { name: "サウジ", nameEn: "Saudi Arabia", stance: "停戦求める", stanceEn: "Seeks ceasefire", detail: "正常化交渉を停止・パレスチナ国家を条件化", detailEn: "Froze normalization, conditions on Palestinian state", color: "#f59e0b", icon: "🇸🇦" },
    { name: "フーシー派", nameEn: "Houthis (Yemen)", stance: "対イスラエル攻撃", stanceEn: "Anti-Israel attacks", detail: "紅海で船舶攻撃・日本経済にも波及", detailEn: "Red Sea attacks, impact on global supply chains", color: "#8b5cf6", icon: "🇾🇪" },
  ];

  return (
    <div role="img" aria-label="Regional players matrix and their positions on the Gaza war" className="my-6 space-y-2">
      {players.map((p) => (
        <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl border border-brief-border bg-brief-card">
          <div className="text-lg flex-shrink-0">{p.icon}</div>
          <div className="w-14 flex-shrink-0">
            <div className="text-xs font-bold text-foreground/80">
              <T ja={p.name} en={p.nameEn} />
            </div>
          </div>
          <div
            className="text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ color: p.color, background: `${p.color}18` }}
          >
            <T ja={p.stance} en={p.stanceEn} />
          </div>
          <div className="text-[9px] text-foreground/50 min-w-0">
            <T ja={p.detail} en={p.detailEn} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. Japan Economic Impact Diagram
   ───────────────────────────────────────────── */
export function IsraelJapanImpactDiagram() {
  const impacts = [
    {
      category: "原油・エネルギー",
      categoryEn: "Oil & Energy",
      risk: "ホルムズ封鎖リスク",
      riskEn: "Hormuz blockade risk",
      figure: "原油+140$/bbl・GDP▲3%",
      figureEn: "Oil +$140/bbl, GDP −3%",
      level: "高",
      levelEn: "HIGH",
      color: "#ef4444",
    },
    {
      category: "LNG供給",
      categoryEn: "LNG Supply",
      risk: "イスラエル産ガス輸出不安定化",
      riskEn: "Instability in Israeli gas exports",
      figure: "エジプトLNG停止が波及",
      figureEn: "Egypt LNG exports disrupted",
      level: "中",
      levelEn: "MED",
      color: "#f59e0b",
    },
    {
      category: "サプライチェーン",
      categoryEn: "Supply Chain",
      risk: "紅海回避ルートの長期化",
      riskEn: "Prolonged Red Sea detour",
      figure: "輸送コスト・リードタイム増",
      figureEn: "Higher logistics costs & lead times",
      level: "中",
      levelEn: "MED",
      color: "#f59e0b",
    },
    {
      category: "金融・円相場",
      categoryEn: "Finance & Yen",
      risk: "リスクオフによる円高圧力",
      riskEn: "Risk-off JPY appreciation pressure",
      figure: "地政学リスク上昇時に円高",
      figureEn: "JPY strengthens on escalation",
      level: "低",
      levelEn: "LOW",
      color: "#3b82f6",
    },
  ];

  return (
    <div role="img" aria-label="Impact of Israel-Gaza war on Japan's economy and energy supply" className="my-6 space-y-2">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-3">
        <T ja="日本への経済的影響" en="Economic Impact on Japan" />
      </div>
      {impacts.map((item) => (
        <div key={item.category} className="p-3 rounded-xl border border-brief-border bg-brief-card flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xs font-bold text-foreground/80">
                <T ja={item.category} en={item.categoryEn} />
              </div>
              <div
                className="text-[9px] font-black px-1.5 py-0.5 rounded"
                style={{ color: item.color, background: `${item.color}20` }}
              >
                <T ja={item.level} en={item.levelEn} />
              </div>
            </div>
            <div className="text-[10px] text-foreground/60 mb-0.5">
              <T ja={item.risk} en={item.riskEn} />
            </div>
            <div className="text-[10px] font-bold" style={{ color: item.color }}>
              <T ja={item.figure} en={item.figureEn} />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-2 p-3 rounded-xl border border-dashed border-[#f59e0b]/30 bg-[#f59e0b]/5 text-[10px] text-foreground/60">
        <T
          ja="出典: 日本総研「イスラエル・イラン紛争は原油価格を押し上げ」・笹川平和財団IINA「ガザ情勢が及ぼすエネルギー供給への地政学的影響」"
          en="Sources: Japan Research Institute; Sasakawa Peace Foundation IINA geopolitical energy analysis"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   7. War Scenarios Diagram
   ───────────────────────────────────────────── */
export function IsraelWarScenariosDiagram() {
  const scenarios = [
    { id: "A", label: "段階的停戦・統治移行", labelEn: "Gradual ceasefire & governance transition", prob: "中", probEn: "MED", probColor: "#f59e0b", detail: "ガザ国家移行委員会が機能、ハマス排除の暫定統治", detailEn: "Transitional committee functions; Hamas excluded from governance" },
    { id: "B", label: "ネタニヤフ失脚・政権交代", labelEn: "Netanyahu falls; new government", prob: "低〜中", probEn: "LOW-MED", probColor: "#3b82f6", detail: "2026年10月総選挙が鍵、新政権が本格停戦交渉へ", detailEn: "October 2026 election key; new government pursues full ceasefire" },
    { id: "C", label: "長期低強度紛争の固定化", labelEn: "Frozen low-intensity conflict", prob: "高", probEn: "HIGH", probColor: "#ef4444", detail: "形式上の停戦下でイスラエルがガザを事実上占領継続", detailEn: "Formal ceasefire masks continued de facto occupation" },
    { id: "D", label: "地域戦争への拡大", labelEn: "Regional escalation", prob: "低〜中", probEn: "LOW-MED", probColor: "#8b5cf6", detail: "イラン核施設攻撃・ホルムズ海峡封鎖リスク", detailEn: "Iranian nuclear strike; Hormuz blockade risk" },
    { id: "E", label: "二国家解決への道", labelEn: "Two-state solution path", prob: "極めて低", probEn: "VERY LOW", probColor: "#64748b", detail: "トランプはパレスチナ国家を拒否、2026年は非現実的", detailEn: "Trump rejects Palestinian state; unrealistic in 2026" },
  ];

  return (
    <div role="img" aria-label="Five scenarios for how the Israel-Gaza war might end" className="my-6 space-y-2">
      {scenarios.map((s) => (
        <div key={s.id} className="flex items-start gap-3 p-3 rounded-xl border border-brief-border bg-brief-card">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 text-white"
            style={{ backgroundColor: s.probColor }}
          >
            {s.id}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <div className="text-xs font-bold text-foreground/85">
                <T ja={s.label} en={s.labelEn} />
              </div>
              <div
                className="text-[9px] font-black px-1.5 py-0.5 rounded"
                style={{ color: s.probColor, background: `${s.probColor}18` }}
              >
                <T ja={s.prob} en={s.probEn} />
              </div>
            </div>
            <div className="text-[10px] text-foreground/55">
              <T ja={s.detail} en={s.detailEn} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
