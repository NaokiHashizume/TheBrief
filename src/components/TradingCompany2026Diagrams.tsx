"use client";

const ACCENT = "#7c3aed";

function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">
          Figure
        </div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

// Figure 1: 純利益比較（資源依存度別）
export function TradingProfitComparisonDiagram() {
  const rows = [
    { name: "三菱商事", fy25: 9640, fy26e: 9200, resourceRatio: 45, note: "資源45%" },
    { name: "三井物産", fy25: 8803, fy26e: 8200, resourceRatio: 55, note: "資源55%" },
    { name: "伊藤忠商事", fy25: 8002, fy26e: 9000, resourceRatio: 28, note: "非資源72%" },
    { name: "住友商事", fy25: 4632, fy26e: 4800, resourceRatio: 35, note: "資源35%" },
    { name: "丸紅", fy25: 4180, fy26e: 4500, resourceRatio: 30, note: "資源30%" },
  ];
  const max = 10000;
  return (
    <Card title="5大商社 純利益比較 FY2025実績 vs FY2026予想（億円）">
      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[12px] font-semibold text-foreground/80 w-24">{r.name}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: r.resourceRatio > 40 ? `${ACCENT}15` : `#16a34a15`,
                  color: r.resourceRatio > 40 ? ACCENT : "#16a34a",
                }}
              >
                {r.note}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-foreground/40 w-12">FY25実</span>
                  <div className="flex-1 h-4 bg-foreground/[0.04] rounded overflow-hidden">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(r.fy25 / max) * 100}%`,
                        background: `${ACCENT}60`,
                      }}
                    />
                  </div>
                  <span className="text-[11px] text-foreground/60 w-14 text-right">
                    {r.fy25.toLocaleString()}億
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-foreground/40 w-12">FY26予</span>
                  <div className="flex-1 h-4 bg-foreground/[0.04] rounded overflow-hidden">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(r.fy26e / max) * 100}%`,
                        background: ACCENT,
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-foreground/80 w-14 text-right">
                    {r.fy26e.toLocaleString()}億
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] text-foreground/40">
        ※FY26は各社公表の通期見通しおよびアナリスト予想ベース。伊藤忠のみ2期連続過去最高益見込み。
      </p>
    </Card>
  );
}

// Figure 2: AI・デジタル投資マップ
export function TradingAiInvestmentDiagram() {
  const companies = [
    {
      name: "三菱商事",
      color: `${ACCENT}`,
      initiatives: [
        "500億円規模CVCファンド設立（生成AI・バイオ）",
        "管理職昇格にAI資格を必須化",
        "データセンター4,000億円規模へ拡大",
        "ローソン×KDDI デジタル共創",
      ],
    },
    {
      name: "三井物産",
      color: "#2563eb",
      initiatives: [
        "データセンター5,000億円投資（2030年）",
        "DC資産1兆円規模へ引き上げ",
        "生成AI活用・事業開発を本格化",
        "ESG評価AIスタートアップ支援",
      ],
    },
    {
      name: "伊藤忠商事",
      color: "#16a34a",
      initiatives: [
        "シリコンバレーに生成AI投資新会社",
        "「み・と・ま」SCMデータサービス展開",
        "15億円/社 コスト削減実績",
        "ファミマAI発注 全国展開",
      ],
    },
  ];
  return (
    <Card title="主要3商社のAI・デジタル戦略マップ（2025–2026）">
      <div className="space-y-4">
        {companies.map((c, i) => (
          <div key={i} className="p-4 rounded-xl bg-foreground/[0.03] border border-brief-border">
            <div
              className="text-[13px] font-bold mb-3"
              style={{ color: c.color }}
            >
              {c.name}
            </div>
            <ul className="space-y-1.5">
              {c.initiatives.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px] text-foreground/70">
                  <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white" style={{ background: c.color }}>
                    {j + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Figure 3: エネルギーポートフォリオ（ホルムズ危機対応含む）
export function TradingEnergyPortfolioDiagram() {
  const segments = [
    {
      label: "LNG権益",
      mitsubishi: "1,500万トン/年（カナダ・マレーシア含む）",
      mitsui: "600万トン/年（米・カタール・豪・UAE）",
      itochu: "豪州LNGプロジェクト参画",
      risk: "中",
      color: "#f59e0b",
    },
    {
      label: "再エネ",
      mitsubishi: "洋上風力・CCS",
      mitsui: "グリーンアンモニア・再エネ",
      itochu: "SAF・水素・リサイクル",
      risk: "低",
      color: "#16a34a",
    },
    {
      label: "水素・アンモニア",
      mitsubishi: "CCS付き水素・アンモニア",
      mitsui: "グリーンアンモニア",
      itochu: "水素サプライチェーン",
      risk: "低",
      color: "#0ea5e9",
    },
  ];
  return (
    <Card title="エネルギーポートフォリオ — LNG・再エネ・水素の三層構造（2026）">
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-left py-2 pr-3 text-foreground/50 font-medium w-20">セグメント</th>
              <th className="text-left py-2 pr-3 text-foreground/50 font-medium">三菱商事</th>
              <th className="text-left py-2 pr-3 text-foreground/50 font-medium">三井物産</th>
              <th className="text-left py-2 font-medium text-foreground/50">伊藤忠</th>
            </tr>
          </thead>
          <tbody>
            {segments.map((s, i) => (
              <tr key={i} className="border-b border-brief-border/50 last:border-0">
                <td className="py-3 pr-3">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-white font-semibold text-[10px]"
                    style={{ background: s.color }}
                  >
                    {s.label}
                  </span>
                </td>
                <td className="py-3 pr-3 text-foreground/70">{s.mitsubishi}</td>
                <td className="py-3 pr-3 text-foreground/70">{s.mitsui}</td>
                <td className="py-3 text-foreground/70">{s.itochu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
        <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
          ホルムズ危機（2026年）の教訓: LNGの日本向け輸入依存度は6.3%だがカタール分が停止。
          LNG権益を売却した商社とそうでない商社の差が鮮明に。
        </p>
      </div>
    </Card>
  );
}

// Figure 4: バフェット・外国人投資家評価
export function TradingBuffettDiagram() {
  const data = [
    { name: "三菱商事", foreign: 40, per: 9.2, yield: 3.1 },
    { name: "三井物産", foreign: 40, per: 8.8, yield: 3.5 },
    { name: "伊藤忠商事", foreign: 38, per: 11.2, yield: 3.2 },
    { name: "住友商事", foreign: 30, per: 8.4, yield: 3.8 },
    { name: "丸紅", foreign: 29, per: 7.9, yield: 4.1 },
  ];
  return (
    <Card title="バフェット効果と外国人投資家評価（2026年4月時点）">
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[12px] font-semibold text-foreground/80 w-24 flex-shrink-0">{d.name}</span>
            <div className="flex-1 grid grid-cols-3 gap-2">
              <div>
                <div className="text-[9px] text-foreground/40 mb-1">外国人比率</div>
                <div className="h-2 bg-foreground/[0.06] rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{ width: `${d.foreign}%`, background: ACCENT }}
                  />
                </div>
                <div className="text-[11px] font-bold mt-0.5" style={{ color: ACCENT }}>{d.foreign}%</div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40 mb-1">予想PER</div>
                <div className="text-[14px] font-bold text-foreground/80">{d.per}x</div>
              </div>
              <div>
                <div className="text-[9px] text-foreground/40 mb-1">配当利回り</div>
                <div className="text-[14px] font-bold text-foreground/80">{d.yield}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-brief-border text-[11px] text-foreground/60">
        <p>
          バフェット氏は2025年5月の株主総会で「商社株は超長期の投資。50年売却を考えない」と発言。
          2026年1月のCEO交代後もグレッグ・アベル新CEOが関係継続を表明。
        </p>
      </div>
    </Card>
  );
}

// Figure 5: グローバル投資マップ
export function TradingGlobalDiagram() {
  const regions = [
    {
      name: "北米",
      focus: "LNG輸出、エネルギートランジション、AI・データ投資",
      companies: ["三菱（カナダLNG）", "三井（米LNG）", "伊藤忠（シリコンバレーAI）"],
      color: "#2563eb",
    },
    {
      name: "中東・カタール",
      focus: "LNG権益（ホルムズ危機で不可抗力宣言）",
      companies: ["三井（QatarEnergy）", "三菱（UAE・オマーン）"],
      color: "#f59e0b",
      alert: true,
    },
    {
      name: "豪州・東南アジア",
      focus: "鉄鉱石、LNG、再エネ、ヘルスケア",
      companies: ["三井（VALE権益、IHH）", "三菱（マレーシアLNG延長）"],
      color: "#16a34a",
    },
    {
      name: "インド・グローバルサウス",
      focus: "インフラ、農業、電力、次世代市場",
      companies: ["伊藤忠（インフラ）", "丸紅（電力・穀物）", "住友（ニッケル）"],
      color: ACCENT,
    },
  ];
  return (
    <Card title="5大商社のグローバル投資マップ — 地政学対応2026">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {regions.map((r, i) => (
          <div
            key={i}
            className="p-3 rounded-xl border"
            style={{
              borderColor: r.alert ? "#ef444440" : "var(--brief-border)",
              background: r.alert ? "#ef444408" : "transparent",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ background: r.color }}
              >
                {r.name}
              </span>
              {r.alert && (
                <span className="text-[9px] text-red-500 font-bold">危機中</span>
              )}
            </div>
            <p className="text-[11px] text-foreground/70 mb-2">{r.focus}</p>
            <div className="flex flex-wrap gap-1">
              {r.companies.map((c, j) => (
                <span key={j} className="text-[9px] px-1.5 py-0.5 rounded bg-foreground/[0.05] text-foreground/60">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Figure 6: 変容の先 — 2030年に向けた戦略シナリオ
export function TradingFutureDiagram() {
  const scenarios = [
    {
      label: "資源×デジタル融合型",
      description: "LNG・鉄鉱石権益を維持しながらデータ・AIで付加価値を高める",
      companies: "三菱商事・三井物産",
      probability: 75,
      color: ACCENT,
    },
    {
      label: "非資源特化型",
      description: "消費者接点・生活消費財・DXサービスで安定成長",
      companies: "伊藤忠商事",
      probability: 85,
      color: "#16a34a",
    },
    {
      label: "エネルギートランジション先行",
      description: "再エネ・水素・CCS投資を加速し脱炭素先行企業へ",
      companies: "丸紅・住友商事",
      probability: 55,
      color: "#0ea5e9",
    },
  ];
  const keyMetrics = [
    { label: "5社合計純利益(FY2026予)", value: "3.2兆円超" },
    { label: "5社合計投資計画(中計累計)", value: "12兆円超" },
    { label: "株主還元総額(年間)", value: "1兆円超" },
    { label: "バークシャー保有比率", value: "各社9%台" },
  ];
  return (
    <Card title="2030年シナリオ — 「資源×デジタル」融合への道">
      <div className="space-y-3 mb-6">
        {scenarios.map((s, i) => (
          <div key={i} className="p-3 rounded-xl bg-foreground/[0.03] border border-brief-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-bold" style={{ color: s.color }}>
                {s.label}
              </span>
              <span className="text-[10px] text-foreground/50">{s.companies}</span>
            </div>
            <p className="text-[11px] text-foreground/70 mb-2">{s.description}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-foreground/[0.06] rounded overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{ width: `${s.probability}%`, background: s.color }}
                />
              </div>
              <span className="text-[10px] font-bold" style={{ color: s.color }}>
                {s.probability}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {keyMetrics.map((m, i) => (
          <div key={i} className="p-3 rounded-xl bg-foreground/[0.03]">
            <div className="text-[9px] text-foreground/40 mb-1">{m.label}</div>
            <div className="text-[15px] font-bold" style={{ color: ACCENT }}>{m.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
