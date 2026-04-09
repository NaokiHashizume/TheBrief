"use client";

/* ─────────────────────────────────────────────
   GLP-1 Japan Obesity Drug Diagrams
   Color: #0891b2 (pharma cyan)
   ───────────────────────────────────────────── */

const C = "#0891b2";

/* 1. GLP-1薬の概要 — 薬剤比較 */
export function Glp1OverviewDiagram() {
  const drugs = [
    {
      brand: "オゼンピック",
      generic: "セマグルチド",
      company: "ノボ ノルディスク",
      indication: "2型糖尿病",
      insurance: "保険適用",
      note: "週1回皮下注",
      color: "#0891b2",
    },
    {
      brand: "ウゴービ",
      generic: "セマグルチド",
      company: "ノボ ノルディスク",
      indication: "肥満症",
      insurance: "条件付き保険適用",
      note: "2023年11月承認・保険収載",
      color: "#06b6d4",
    },
    {
      brand: "マンジャロ",
      generic: "チルゼパチド",
      company: "イーライリリー",
      indication: "2型糖尿病",
      insurance: "保険適用",
      note: "GIP/GLP-1二重作動",
      color: "#0e7490",
    },
    {
      brand: "ゼップバウンド",
      generic: "チルゼパチド",
      company: "イーライリリー",
      indication: "肥満症",
      insurance: "条件付き保険適用",
      note: "2025年4月発売開始",
      color: "#155e75",
    },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬の主要4製品比較"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4"
        style={{ color: `${C}99` }}
      >
        主要GLP-1系薬剤 — 日本上市状況（2026年4月）
      </div>
      <div className="space-y-2">
        {drugs.map((d) => (
          <div
            key={d.brand}
            className="flex flex-wrap sm:flex-nowrap items-start gap-3 p-3 rounded-lg"
            style={{
              backgroundColor: `${d.color}08`,
              borderLeft: `3px solid ${d.color}`,
            }}
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold" style={{ color: d.color }}>
                {d.brand}
                <span className="ml-2 text-[10px] font-normal text-foreground/50">
                  （{d.generic}）
                </span>
              </div>
              <div className="text-[10px] text-foreground/50 mt-0.5">
                {d.company} / {d.indication}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${d.color}15`,
                  color: d.color,
                }}
              >
                {d.insurance}
              </div>
              <div className="text-[9px] text-foreground/40 mt-1">{d.note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div
          className="text-[10px] font-semibold mb-1"
          style={{ color: `${C}99` }}
        >
          メカニズムの違い
        </div>
        <div className="flex gap-4 text-[10px] text-foreground/60">
          <span>
            <span className="font-semibold" style={{ color: "#0891b2" }}>
              GLP-1単独
            </span>
            ：食欲抑制・インスリン分泌促進
          </span>
          <span>
            <span className="font-semibold" style={{ color: "#155e75" }}>
              GIP+GLP-1
            </span>
            ：両経路で脂肪燃焼・体重減少を増強
          </span>
        </div>
      </div>
    </div>
  );
}

/* 2. 臨床データ — 体重減少率・心血管アウトカム */
export function Glp1ClinicalDataDiagram() {
  const trials = [
    {
      name: "STEP 1（ウゴービ）",
      drug: "セマグルチド 2.4mg",
      weightLoss: "-14.9%",
      duration: "68週",
      highlight: "SELECT試験で心血管イベント20%減",
      color: "#0891b2",
    },
    {
      name: "SURMOUNT-1（マンジャロ）",
      drug: "チルゼパチド 15mg",
      weightLoss: "-20.9%",
      duration: "72週",
      highlight: "単一薬剤で最大クラスの減量効果",
      color: "#0e7490",
    },
    {
      name: "SURMOUNT-5（直接比較）",
      drug: "チルゼパチド vs セマグルチド",
      weightLoss: "-20.2% vs -13.7%",
      duration: "72週",
      highlight: "差分6.5%pt / 副作用中断率はセマが多い",
      color: "#155e75",
    },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬の主要臨床試験データ"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4"
        style={{ color: `${C}99` }}
      >
        主要臨床試験データ — 体重減少率・心血管アウトカム
      </div>
      <div className="space-y-3">
        {trials.map((t) => (
          <div key={t.name} className="p-3 rounded-lg" style={{ backgroundColor: `${t.color}06` }}>
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <div className="text-[11px] font-bold" style={{ color: t.color }}>
                  {t.name}
                </div>
                <div className="text-[10px] text-foreground/50">{t.drug} / {t.duration}</div>
              </div>
              <div
                className="text-xl font-bold tabular-nums"
                style={{ color: t.color }}
              >
                {t.weightLoss}
              </div>
            </div>
            <div className="mt-2 text-[10px] text-foreground/60 border-t border-foreground/[0.04] pt-2">
              {t.highlight}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04] text-center">
          <div className="text-xs font-bold" style={{ color: C }}>-20%</div>
          <div className="text-[9px] text-foreground/50 mt-0.5">
            チルゼパチド最大減量率
          </div>
        </div>
        <div className="p-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04] text-center">
          <div className="text-xs font-bold" style={{ color: "#0e7490" }}>20%減</div>
          <div className="text-[9px] text-foreground/50 mt-0.5">
            SELECT試験 心血管イベント抑制
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. 日本市場 — 肥満有病率・潜在患者数 */
export function Glp1JapanMarketDiagram() {
  const stats = [
    { label: "肥満（BMI≥25）成人", value: "約28%", sub: "約2,800万人（2024年推計）", color: "#0891b2" },
    { label: "高度肥満（BMI≥35）", value: "約3%", sub: "約270万人 保険適用上限", color: "#0e7490" },
    { label: "BMI≥27+合併症2つ以上", value: "推定600万人", sub: "ウゴービ保険適用の対象", color: "#06b6d4" },
    { label: "肥満症治療薬市場（2030年）", value: "380億円", sub: "年率20%超の成長予測", color: "#155e75" },
  ];

  return (
    <div
      role="img"
      aria-label="日本の肥満有病率と市場規模"
      className="my-6 grid grid-cols-2 gap-3"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="p-3 rounded-xl border border-brief-border bg-brief-card text-center"
        >
          <div
            className="text-xl sm:text-2xl font-bold tabular-nums"
            style={{ color: s.color }}
          >
            {s.value}
          </div>
          <div className="text-[10px] text-foreground/60 mt-1 font-medium">
            {s.label}
          </div>
          <div className="text-[9px] text-foreground/40 mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

/* 4. 保険適用条件と財政インパクト */
export function Glp1InsuranceDiagram() {
  const conditions = [
    "高血圧・脂質異常症・2型糖尿病のいずれかを合併",
    "BMI≥35（高度肥満）　または　BMI≥27かつ肥満関連健康障害を2つ以上",
    "食事・運動療法を一定期間実施しても効果不十分",
    "最適使用推進ガイドラインを満たす専門施設での処方",
  ];

  return (
    <div
      role="img"
      aria-label="ウゴービ・ゼップバウンドの保険適用条件と財政インパクト"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4"
        style={{ color: `${C}99` }}
      >
        保険適用条件（ウゴービ・ゼップバウンド共通）
      </div>
      <div className="space-y-2 mb-5">
        {conditions.map((c, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5"
              style={{ backgroundColor: `${C}15`, color: C }}
            >
              {i + 1}
            </div>
            <div className="text-[12px] text-foreground/75">{c}</div>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-lg border"
        style={{ borderColor: `${C}20`, backgroundColor: `${C}05` }}
      >
        <div className="text-[10px] font-bold mb-2" style={{ color: C }}>
          財政インパクト試算
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
          <div className="text-center">
            <div className="font-semibold text-foreground/70">薬価（ゼップバウンド）</div>
            <div className="font-bold" style={{ color: C }}>約9,000円/週</div>
            <div className="text-foreground/45">自己負担3割 ≈ 2,700円</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground/70">年間薬剤費（公費）</div>
            <div className="font-bold" style={{ color: "#0e7490" }}>≈27万円/人</div>
            <div className="text-foreground/45">保険者負担分</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground/70">600万人が受療した場合</div>
            <div className="font-bold text-red-500">≈16兆円</div>
            <div className="text-foreground/45">現行医療費の14%相当</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. リスク — 副作用・供給不足・個人輸入 */
export function Glp1RisksDiagram() {
  const risks = [
    {
      category: "医学的リスク",
      items: [
        "悪心・嘔吐・下痢（消化器症状）：服用初期に多い",
        "膵炎・胆嚢炎：稀だが重篤（使用中止の適応）",
        "筋肉量・骨密度の低下（サルコペニアリスク）",
        "服用中止後1年で減量体重の多くがリバウンド",
      ],
      color: "#ef4444",
    },
    {
      category: "アクセス・供給リスク",
      items: [
        "専門施設要件により大半のクリニックで処方不可",
        "発売直後から在庫不足・予約待ちが常態化",
        "自由診療では月5〜10万円超のコストが壁",
        "個人輸入品：保管状態・成分の真正性に重大な不確実性",
      ],
      color: "#f59e0b",
    },
  ];

  return (
    <div
      role="img"
      aria-label="GLP-1薬の主要リスク — 医学・アクセス・供給"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4"
        style={{ color: `${C}99` }}
      >
        主要リスクマトリクス
      </div>
      <div className="space-y-4">
        {risks.map((r) => (
          <div key={r.category}>
            <div
              className="text-[11px] font-bold mb-2 px-2 py-1 rounded"
              style={{ backgroundColor: `${r.color}10`, color: r.color }}
            >
              {r.category}
            </div>
            <ul className="space-y-1">
              {r.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px] text-foreground/70">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/15">
        <div className="text-[10px] font-bold text-amber-600 mb-1">
          中止後リバウンドの実態（SURMOUNT試験 延長相）
        </div>
        <div className="text-[11px] text-foreground/65">
          36週の投与で<strong>-20.9%</strong>減量 → 中止後52週で<strong>+14%</strong>のリバウンド。
          「慢性疾患として長期投与」が前提でなければ効果を維持できない。
        </div>
      </div>
    </div>
  );
}

/* 6. 構造的インパクト — 製薬・食品・医療保険 */
export function Glp1FutureDiagram() {
  const sectors = [
    {
      sector: "製薬業界",
      impact: "GLP-1薬の世界市場は2035年に660億ドル超へ。ノボ・イーライリリーの2強が席巻するなか、国内勢は後発バイオシミラー開発に活路",
      outlook: "機会",
      color: "#0891b2",
    },
    {
      sector: "食品・飲食業界",
      impact: "食欲抑制効果で「食べる量」が構造的に減少。スナック・清涼飲料・外食大手のボリューム需要に長期的な下押し圧力",
      outlook: "逆風",
      color: "#f59e0b",
    },
    {
      sector: "医療保険財政",
      impact: "潜在患者数600万人への普及は最大16兆円規模の薬剤費増。一方、肥満起因の心血管・糖尿病医療費削減効果との相殺試算が急務",
      outlook: "不確実",
      color: "#8b5cf6",
    },
    {
      sector: "経口GLP-1の次波",
      impact: "イーライリリーのオルフォグリプロン（経口）が2026年内に世界申請予定。注射への心理的障壁が消え、患者層が劇的に拡大する可能性",
      outlook: "変革点",
      color: "#06b6d4",
    },
  ];

  const outcomeColors: Record<string, string> = {
    機会: "#10b981",
    逆風: "#ef4444",
    不確実: "#8b5cf6",
    変革点: "#0891b2",
  };

  return (
    <div
      role="img"
      aria-label="GLP-1薬が日本社会・産業に与える構造的インパクト"
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
    >
      <div
        className="text-[10px] tracking-[2px] uppercase mb-4"
        style={{ color: `${C}99` }}
      >
        セクター別 構造的インパクト予測
      </div>
      <div className="space-y-3">
        {sectors.map((s) => (
          <div
            key={s.sector}
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${s.color}06`, borderLeft: `3px solid ${s.color}` }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-[11px] font-bold" style={{ color: s.color }}>
                {s.sector}
              </div>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${outcomeColors[s.outlook]}15`,
                  color: outcomeColors[s.outlook],
                }}
              >
                {s.outlook}
              </span>
            </div>
            <div className="text-[11px] text-foreground/65 leading-relaxed">
              {s.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
