"use client";

/* ─────────────────────────────────────────────
   GLP-1 Obesity Drug Revolution Diagrams
   Color: #0891b2 (pharma cyan)
   ───────────────────────────────────────────── */

const C = "#0891b2";

/* 1. GLP-1作用メカニズム図 */
export function Glp1RevMechanismDiagram() {
  const pathways = [
    { organ: "脳（視床下部）", action: "満腹シグナルを増幅、食事の報酬回路を減弱", icon: "🧠", color: "#7c3aed" },
    { organ: "胃", action: "胃排出速度を遅延させ満腹感を持続", icon: "🫁", color: "#0891b2" },
    { organ: "膵臓", action: "インスリン分泌促進、グルカゴン抑制", icon: "🔬", color: "#0e7490" },
    { organ: "脂肪組織", action: "（GIP経路）脂肪燃焼・代謝活性を増強", icon: "🔥", color: "#f59e0b" },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬の作用メカニズム — 4つの標的臓器"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        GLP-1薬の作用メカニズム — 多臓器アプローチ
      </div>
      <div className="relative">
        {/* Central pill */}
        <div className="text-center mb-4">
          <div
            className="inline-block px-4 py-2 rounded-full text-[11px] font-bold text-white"
            style={{ backgroundColor: C }}
          >
            GLP-1受容体作動薬
          </div>
        </div>
        {/* Arrows & targets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pathways.map((p) => (
            <div
              key={p.organ}
              className="flex items-start gap-3 p-3 rounded-lg"
              style={{ backgroundColor: `${p.color}08`, borderLeft: `3px solid ${p.color}` }}
            >
              <div className="text-lg flex-shrink-0 mt-0.5">{p.icon}</div>
              <div>
                <div className="text-[11px] font-bold" style={{ color: p.color }}>{p.organ}</div>
                <div className="text-[10px] text-foreground/60 leading-relaxed mt-0.5">{p.action}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
          <div className="flex flex-wrap items-center gap-4 text-[10px] text-foreground/60">
            <span><strong className="font-semibold" style={{ color: "#0891b2" }}>結果</strong>：カロリー摂取21%減（KPMG調査）</span>
            <span><strong className="font-semibold" style={{ color: "#0e7490" }}>結果</strong>：食料品支出5.3%減（コーネル大学 2025年）</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. 市場規模推移タイムライン */
export function Glp1RevMarketDiagram() {
  const timeline = [
    { year: "2024", size: "$138億", sub: "肥満症薬市場", note: "ウゴービ米国上市2年目" },
    { year: "2025", size: "$663億", sub: "GLP-1全体市場", note: "セマグルチド関連 $346億" },
    { year: "2026", size: "$739億", sub: "予測", note: "経口薬登場・メディケアカバー開始" },
    { year: "2030", size: "$488億", sub: "肥満症薬のみ", note: "米国3,000万人服用見込み" },
    { year: "2033", size: "$1,853億", sub: "GLP-1全体予測", note: "CAGR 12.4%（Grand View Research）" },
  ];

  const maxVal = 1853;
  const getWidth = (v: string) => {
    const num = parseFloat(v.replace(/[^0-9.]/g, ""));
    return `${Math.max((num / maxVal) * 100, 8)}%`;
  };

  return (
    <div
      role="img"
      aria-label="GLP-1薬市場規模の推移と予測"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        GLP-1薬グローバル市場規模推移（2024-2033年）
      </div>
      <div className="space-y-3">
        {timeline.map((t) => (
          <div key={t.year} className="flex items-center gap-3">
            <div className="text-[11px] font-bold tabular-nums w-10 text-foreground/60">{t.year}</div>
            <div className="flex-1">
              <div
                className="h-7 rounded-md flex items-center px-2"
                style={{
                  width: getWidth(t.size),
                  backgroundColor: `${C}15`,
                  borderLeft: `3px solid ${C}`,
                }}
              >
                <span className="text-[11px] font-bold" style={{ color: C }}>{t.size}</span>
              </div>
              <div className="text-[9px] text-foreground/45 mt-0.5">{t.sub} — {t.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04] text-center">
          <div className="text-[11px] font-bold" style={{ color: C }}>57%</div>
          <div className="text-[9px] text-foreground/50 mt-0.5">イーライリリーの米国処方シェア（2025Q3）</div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04] text-center">
          <div className="text-[11px] font-bold" style={{ color: "#0e7490" }}>-5〜13%</div>
          <div className="text-[9px] text-foreground/50 mt-0.5">ノボノルディスク2026年売上見通し</div>
        </div>
      </div>
    </div>
  );
}

/* 3. 食品業界への影響 — カテゴリ別変動 */
export function Glp1RevFoodImpactDiagram() {
  const categories = [
    { name: "スナック菓子", change: -10, color: "#ef4444" },
    { name: "菓子パン・クッキー", change: -9, color: "#ef4444" },
    { name: "清涼飲料", change: -8, color: "#f97316" },
    { name: "ファストフード外食", change: -8, color: "#f97316" },
    { name: "食料品全体", change: -5.3, color: "#f59e0b" },
    { name: "栄養バー", change: 4, color: "#10b981" },
    { name: "生鮮果物", change: 5, color: "#10b981" },
    { name: "ヨーグルト", change: 7, color: "#059669" },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬によるカテゴリ別食品支出の変動"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        GLP-1薬ユーザーの食品カテゴリ別支出変動（コーネル大学 2025年）
      </div>
      <div className="space-y-1.5">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-2">
            <div className="text-[11px] text-foreground/60 w-28 sm:w-32 text-right flex-shrink-0">{c.name}</div>
            <div className="flex-1 flex items-center h-6 relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10" />
              {c.change < 0 ? (
                <div className="flex justify-end w-1/2">
                  <div
                    className="h-5 rounded-l-sm flex items-center justify-end px-1.5"
                    style={{
                      width: `${Math.abs(c.change) * 8}%`,
                      backgroundColor: `${c.color}20`,
                      borderRight: `2px solid ${c.color}`,
                    }}
                  >
                    <span className="text-[10px] font-bold tabular-nums" style={{ color: c.color }}>{c.change}%</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div
                    className="h-5 rounded-r-sm flex items-center px-1.5"
                    style={{
                      width: `${c.change * 8}%`,
                      backgroundColor: `${c.color}20`,
                      borderLeft: `2px solid ${c.color}`,
                    }}
                  >
                    <span className="text-[10px] font-bold tabular-nums" style={{ color: c.color }}>+{c.change}%</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[9px] text-foreground/40 px-28 sm:px-32">
        <span>減少</span>
        <span>増加</span>
      </div>
      <div className="mt-3 p-2 rounded-lg bg-amber-500/5 border border-amber-500/15">
        <div className="text-[10px] text-foreground/60">
          米国GLP-1利用世帯：2023年末 <strong className="font-semibold text-foreground/80">11%</strong> → 2024年半ば <strong className="font-semibold text-foreground/80">16%超</strong>。2030年には<strong className="font-semibold text-foreground/80">3,000万人超</strong>が服用見込み（J.P.モルガン推計）
        </div>
      </div>
    </div>
  );
}

/* 4. 保険適用 日米欧比較表 */
export function Glp1RevInsuranceDiagram() {
  const models = [
    {
      region: "米国",
      approach: "市場主導・拡大志向",
      coverage: "メディケア（2026年4月〜）、雇用主保険49%カバー",
      cost: "保険なし: $900-1,300/月、TrumpRx: $50/月",
      users: "2026年: 1,000万人 → 2030年: 3,000万人",
      color: "#2563eb",
    },
    {
      region: "欧州（英国）",
      approach: "費用対効果重視",
      coverage: "NICE基準に基づくBMI・合併症要件",
      cost: "NHS負担（ICER分析で対象を選別）",
      users: "推定160万人以上が使用中",
      color: "#059669",
    },
    {
      region: "日本",
      approach: "厳格管理・財政防衛",
      coverage: "BMI≥35 or BMI≥27+合併症2つ以上+専門施設",
      cost: "自己負担3割 ≈ 2,700円/週（約11,000円/月）",
      users: "潜在600万人中、実処方はごく一部",
      color: "#dc2626",
    },
  ];

  return (
    <div
      role="img"
      aria-label="日米欧のGLP-1薬保険適用モデル比較"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        日米欧 GLP-1薬保険適用モデル比較
      </div>
      <div className="space-y-3">
        {models.map((m) => (
          <div
            key={m.region}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${m.color}06`, borderLeft: `3px solid ${m.color}` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-[12px] font-bold" style={{ color: m.color }}>{m.region}</div>
              <span
                className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${m.color}15`, color: m.color }}
              >
                {m.approach}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
              <div>
                <div className="text-foreground/40 mb-0.5">保険カバー</div>
                <div className="text-foreground/70">{m.coverage}</div>
              </div>
              <div>
                <div className="text-foreground/40 mb-0.5">患者負担</div>
                <div className="text-foreground/70">{m.cost}</div>
              </div>
              <div>
                <div className="text-foreground/40 mb-0.5">利用者規模</div>
                <div className="text-foreground/70">{m.users}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 5. 副作用リスクプロファイル */
export function Glp1RevSideEffectsDiagram() {
  const effects = [
    { category: "消化器症状", items: ["悪心・嘔吐", "下痢・便秘"], severity: "高頻度・軽〜中等度", freq: "30-50%", color: "#f59e0b" },
    { category: "胆嚢・膵臓", items: ["胆嚢障害", "急性膵炎"], severity: "稀・重篤", freq: "<1%", color: "#ef4444" },
    { category: "筋骨格系（長期）", items: ["骨粗鬆症リスク上昇", "サルコペニア"], severity: "新知見・要経過観察", freq: "5年データ蓄積中", color: "#dc2626" },
    { category: "リバウンド", items: ["中止後の体重回復", "1年以内中止率20-50%"], severity: "構造的", freq: "ほぼ普遍的", color: "#7c3aed" },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬の副作用リスクプロファイル"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        副作用・長期リスク プロファイル（2026年最新）
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-foreground/[0.08]">
              <th className="text-left py-2 text-foreground/40 font-medium">カテゴリ</th>
              <th className="text-left py-2 text-foreground/40 font-medium">主な症状</th>
              <th className="text-left py-2 text-foreground/40 font-medium">重症度</th>
              <th className="text-right py-2 text-foreground/40 font-medium">頻度</th>
            </tr>
          </thead>
          <tbody>
            {effects.map((e) => (
              <tr key={e.category} className="border-b border-foreground/[0.04]">
                <td className="py-2 font-semibold" style={{ color: e.color }}>{e.category}</td>
                <td className="py-2 text-foreground/65">{e.items.join("、")}</td>
                <td className="py-2 text-foreground/55">{e.severity}</td>
                <td className="py-2 text-right font-bold tabular-nums" style={{ color: e.color }}>{e.freq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 p-2 rounded-lg bg-violet-500/5 border border-violet-500/15">
        <div className="text-[10px] text-foreground/60">
          <strong className="text-violet-600 font-semibold">2026年 Nature誌</strong>：GLP1R/GIPR遺伝子変異が体重減少効果・副作用発現率の個人差に関連。プレシジョン・メディシンへの道が開かれつつある
        </div>
      </div>
    </div>
  );
}

/* 6. 影響を受ける業界マトリクス */
export function Glp1RevIndustryMapDiagram() {
  const sectors = [
    { name: "製薬（GLP-1関連）", impact: "正", magnitude: "極大", detail: "2033年 $1,853億市場", color: "#059669" },
    { name: "フィットネス・ウェルネス", impact: "正", magnitude: "大", detail: "薬＋運動の併用ニーズ拡大", color: "#10b981" },
    { name: "健康志向食品", impact: "正", magnitude: "中", detail: "高タンパク・栄養バー成長", color: "#34d399" },
    { name: "アパレル", impact: "正（短期）", magnitude: "小", detail: "体型変化に伴う買い替え需要", color: "#6ee7b7" },
    { name: "スナック・菓子", impact: "負", magnitude: "大", detail: "支出10%減（コーネル大学）", color: "#ef4444" },
    { name: "清涼飲料", impact: "負", magnitude: "大", detail: "高カロリー飲料の構造的減少", color: "#f87171" },
    { name: "ファストフード", impact: "負", magnitude: "大", detail: "外食支出8%減", color: "#f97316" },
    { name: "肥満関連医療機器", impact: "負", magnitude: "中", detail: "バリアトリック手術・CPAP縮小", color: "#fb923c" },
    { name: "医療保険財政", impact: "不確実", magnitude: "極大", detail: "薬剤費増 vs 疾病予防の相殺", color: "#8b5cf6" },
    { name: "生命保険", impact: "不確実", magnitude: "中", detail: "肥満関連死亡リスク低下→保険料圧力", color: "#a78bfa" },
  ];

  const impactIcons: Record<string, string> = { "正": "+", "正（短期）": "+", "負": "-", "不確実": "?" };
  const impactBg: Record<string, string> = { "正": "#05966920", "正（短期）": "#05966915", "負": "#ef444420", "不確実": "#8b5cf620" };

  return (
    <div
      role="img"
      aria-label="GLP-1薬の影響を受ける業界マップ"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        産業横断インパクトマップ — GLP-1薬の波及効果
      </div>
      <div className="space-y-1.5">
        {sectors.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2 p-2 rounded-lg"
            style={{ backgroundColor: `${s.color}06` }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
              style={{ backgroundColor: impactBg[s.impact], color: s.color }}
            >
              {impactIcons[s.impact]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-foreground/80">{s.name}</span>
                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                  {s.magnitude}
                </span>
              </div>
              <div className="text-[9px] text-foreground/50">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 7. 日米欧規制比較テーブル（コンパクト版） */
export function Glp1RevRegulationDiagram() {
  return (
    <div
      role="img"
      aria-label="日米欧のGLP-1規制モデル比較"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div className="text-[10px] tracking-[2px] uppercase mb-4" style={{ color: `${C}99` }}>
        3つの規制モデルが示す問い
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "米国", q: "どこまでアクセスを広げるか", stat: "3,000万人（2030年）", color: "#2563eb" },
          { label: "欧州", q: "費用対効果をどう測るか", stat: "160万人以上", color: "#059669" },
          { label: "日本", q: "皆保険の持続性をどう守るか", stat: "潜在600万人", color: "#dc2626" },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-lg text-center" style={{ backgroundColor: `${m.color}06`, borderTop: `3px solid ${m.color}` }}>
            <div className="text-[12px] font-bold" style={{ color: m.color }}>{m.label}</div>
            <div className="text-[10px] text-foreground/60 mt-1 leading-relaxed">{m.q}</div>
            <div className="text-[11px] font-bold mt-2 tabular-nums" style={{ color: m.color }}>{m.stat}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[10px] text-foreground/55 text-center italic">
          「誰に・いつ・どこまで・誰の費用で使うのか」—— この答え方が今後10年の医療費構造と産業構造を規定する
        </div>
      </div>
    </div>
  );
}
