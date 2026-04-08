"use client";

/* ─────────────────────────────────────────────
   HormuzFinanceDiagrams — ホルムズ危機と日本金融市場
   ───────────────────────────────────────────── */

/* 1. 危機タイムライン */
export function HormuzFinanceOverviewDiagram() {
  const events = [
    { date: "2026年2月末", label: "米・イスラエルがイラン攻撃", note: "ホルムズ海峡が事実上封鎖", color: "#ef4444" },
    { date: "2026年3月2日", label: "イラン、正式に封鎖宣言", note: "世界の海上保険が通過停止", color: "#ef4444" },
    { date: "2026年3月8日", label: "ブレント原油100ドル突破", note: "WTI先物が急騰開始", color: "#f97316" },
    { date: "2026年3月初旬", label: "2,190隻超が足止め", note: "日本関係船舶約44〜45隻が湾内に滞留", color: "#f97316" },
    { date: "2026年4月3日", label: "商船三井「ソハール」通過", note: "日本関係船で初の脱出成功", color: "#d97706" },
    { date: "2026年4月7日", label: "米・イラン2週間停戦合意", note: "パキスタン仲介。日経平均トリプル高", color: "#16a34a" },
    { date: "2026年4月8日", label: "日経+2,879円（56,308円）", note: "歴代3位の上昇幅。WTI95ドル割れ", color: "#16a34a" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ホルムズ危機タイムライン（封鎖〜停戦）"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Timeline
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        ホルムズ危機の経緯 — 封鎖から停戦合意まで（2026年2月〜4月）
      </div>

      <div className="relative">
        <div className="absolute left-[6px] top-2 bottom-2 w-[2px] bg-foreground/[0.06] rounded" />
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className="w-3.5 h-3.5 rounded-full mt-0.5 shrink-0 relative z-10 border-2 border-brief-card"
                style={{ backgroundColor: e.color }}
              />
              <div className="flex-1 pb-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-[10px] tabular-nums text-foreground/40 font-medium">{e.date}</span>
                  <span className="text-[13px] font-semibold text-foreground/85">{e.label}</span>
                </div>
                <p className="text-[11px] text-foreground/50 mt-0.5 leading-relaxed">{e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Bloomberg, 日経新聞, 時事通信 (2026-04-08)
      </div>
    </div>
  );
}

/* 2. 原油価格推移チャート */
export function HormuzFinanceOilDiagram() {
  const dataPoints = [
    { label: "2月中旬", wti: 74, brent: 78 },
    { label: "2月末\n封鎖開始", wti: 85, brent: 90 },
    { label: "3月8日", wti: 95, brent: 100 },
    { label: "3月中旬", wti: 105, brent: 110 },
    { label: "3月末\nピーク", wti: 113, brent: 126 },
    { label: "4月3日", wti: 108, brent: 115 },
    { label: "4月7日\n停戦合意", wti: 96, brent: 101 },
    { label: "4月8日", wti: 94, brent: 99 },
  ];

  const maxVal = 140;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ホルムズ危機期間中の原油価格推移チャート"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Crude Oil Price
      </div>
      <div className="text-xs text-foreground/50 mb-4">
        WTI・ブレント原油価格推移（2026年2月〜4月、USD/バレル）
      </div>

      <div className="flex gap-4 mb-4 text-[9px]">
        <span className="flex items-center gap-1.5 text-foreground/60">
          <span className="w-3 h-2.5 rounded-sm" style={{ backgroundColor: "#d97706" }} />
          WTI
        </span>
        <span className="flex items-center gap-1.5 text-foreground/60">
          <span className="w-3 h-2.5 rounded-sm" style={{ backgroundColor: "#d97706", opacity: 0.4 }} />
          ブレント
        </span>
      </div>

      <div className="space-y-2">
        {dataPoints.map((d, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[9px] text-foreground/40 w-20 shrink-0 leading-tight">{d.label.replace("\n", " ")}</span>
              <div className="flex-1 space-y-0.5">
                <div className="h-3.5 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded flex items-center justify-end pr-1.5"
                    style={{ width: `${(d.wti / maxVal) * 100}%`, backgroundColor: "#d97706" }}
                  >
                    <span className="text-[8px] font-bold text-white tabular-nums">${d.wti}</span>
                  </div>
                </div>
                <div className="h-3 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{ width: `${(d.brent / maxVal) * 100}%`, backgroundColor: "#d97706", opacity: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg border" style={{ backgroundColor: "#d97706" + "08", borderColor: "#d97706" + "20" }}>
        <div className="text-[10px] font-bold mb-0.5" style={{ color: "#d97706" }}>ピーク価格（3月末）</div>
        <div className="text-[11px] text-foreground/70">
          WTI <strong>$113.85</strong> ／ ブレント <strong>$126</strong>（約52年ぶりの高騰水準）
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: EBC Financial Group, NLI Research, Trading Economics (2026-04)
      </div>
    </div>
  );
}

/* 3. 日経平均の動き */
export function HormuzFinanceNikkeiDiagram() {
  const phases = [
    {
      phase: "封鎖前",
      nikkei: "〜53,000円台",
      change: "—",
      color: "#94a3b8",
      note: "2026年2月中旬水準",
    },
    {
      phase: "封鎖ショック",
      nikkei: "48,000〜50,000円",
      change: "▼約10%",
      color: "#ef4444",
      note: "原油高・円安による企業収益悪化懸念",
    },
    {
      phase: "乱高下期",
      nikkei: "49,000〜52,000円",
      change: "±不安定",
      color: "#f97316",
      note: "地政学リスク×ショートカバーが交錯",
    },
    {
      phase: "停戦合意翌日",
      nikkei: "56,308円",
      change: "▲+2,879円",
      color: "#16a34a",
      note: "歴代3位の上昇幅。売り方の踏み上げが加速",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ホルムズ危機期間中の日経平均の動き"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Nikkei 225
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        危機フェーズ別の日経平均推移（2026年2月〜4月8日）
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {phases.map((p, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: p.color, backgroundColor: p.color + "08" }}
          >
            <div className="text-[10px] font-bold text-foreground/50 tracking-wide mb-1">{p.phase}</div>
            <div className="text-[15px] font-bold tabular-nums" style={{ color: p.color }}>
              {p.nikkei}
            </div>
            <div className="text-[12px] font-semibold mt-0.5" style={{ color: p.color }}>
              {p.change}
            </div>
            <p className="text-[10px] text-foreground/45 mt-1.5 leading-relaxed">{p.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg border" style={{ backgroundColor: "#16a34a" + "06", borderColor: "#16a34a" + "20" }}>
        <div className="text-[10px] font-bold mb-0.5 text-green-600">歴代3位の上昇幅の構造</div>
        <div className="text-[10px] text-foreground/65 leading-relaxed">
          停戦発表→先物急騰→売り方ショートカバー→現物買い→指数急騰 という連鎖。「実態の改善」ではなく「ポジション整理」が主因。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: Bloomberg Japan, 外為どっとコム (2026-04-08)
      </div>
    </div>
  );
}

/* 4. 日本のエネルギー輸入依存度 */
export function HormuzFinanceEnergyDiagram() {
  const oilSources = [
    { country: "サウジアラビア", pct: 38, color: "#d97706" },
    { country: "UAE", pct: 26, color: "#f59e0b" },
    { country: "クウェート", pct: 9, color: "#fbbf24" },
    { country: "カタール", pct: 8, color: "#fcd34d" },
    { country: "その他中東", pct: 12, color: "#fde68a" },
    { country: "非中東", pct: 7, color: "#94a3b8" },
  ];

  const lngSources = [
    { country: "オーストラリア", pct: 39.7, color: "#3b82f6" },
    { country: "マレーシア", pct: 14.8, color: "#60a5fa" },
    { country: "ロシア", pct: 8.9, color: "#93c5fd" },
    { country: "カタール（ホルムズ経由）", pct: 5.3, color: "#d97706" },
    { country: "オマーン（ホルムズ経由）", pct: 4.5, color: "#f59e0b" },
    { country: "その他", pct: 26.8, color: "#94a3b8" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="日本のエネルギー輸入依存度グラフ"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Energy Dependency
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        日本のエネルギー輸入依存度 — 原油は中東93.5%依存、LNGは多角化済み（2025年実績）
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="text-[11px] font-bold text-foreground/70 mb-3">
            原油輸入先（中東依存度: <span style={{ color: "#d97706" }}>93.5%</span>）
          </div>
          <div className="space-y-1.5">
            {oilSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <div className="w-full h-5 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded flex items-center justify-end pr-1.5"
                    style={{ width: `${s.pct}%`, backgroundColor: s.color }}
                  >
                    <span className="text-[8px] font-bold text-white tabular-nums">{s.pct}%</span>
                  </div>
                </div>
                <span className="text-[9px] text-foreground/50 w-24 shrink-0">{s.country}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-bold text-foreground/70 mb-3">
            LNG輸入先（ホルムズ依存度: <span style={{ color: "#d97706" }}>6.3%</span>）
          </div>
          <div className="space-y-1.5">
            {lngSources.map((s) => (
              <div key={s.country} className="flex items-center gap-2">
                <div className="w-full h-5 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded flex items-center justify-end pr-1.5"
                    style={{ width: `${Math.min(s.pct * 2.5, 100)}%`, backgroundColor: s.color }}
                  >
                    <span className="text-[8px] font-bold text-white tabular-nums">{s.pct}%</span>
                  </div>
                </div>
                <span className="text-[9px] text-foreground/50 w-36 shrink-0 leading-tight">{s.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg border" style={{ backgroundColor: "#d97706" + "08", borderColor: "#d97706" + "20" }}>
        <div className="text-[10px] font-bold mb-0.5" style={{ color: "#d97706" }}>エネルギー輸入依存度（総合）</div>
        <div className="text-[11px] text-foreground/70">
          日本のエネルギー自給率は約<strong>12〜13%</strong>（2024年）。残る約87%を輸入に依存。石油備蓄（国家146日分＋民間101日分）は確保も、長期封鎖には限界あり。
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 資源エネルギー庁, JETRO (2026-03), NRI (2026-04-06)
      </div>
    </div>
  );
}

/* 5. 産業別への影響マトリクス */
export function HormuzFinanceImpactDiagram() {
  const sectors = [
    {
      name: "電力・ガス",
      impact: "甚大",
      impactLevel: 5,
      reason: "燃料費調整制度で電気・ガス料金に直撃。家庭向け電気代が数千〜数万円/月増の試算も",
      color: "#ef4444",
    },
    {
      name: "石油・化学",
      impact: "甚大",
      impactLevel: 5,
      reason: "ナフサ価格急騰。プラスチック・合成繊維・農薬の原材料コスト増が連鎖",
      color: "#ef4444",
    },
    {
      name: "海運・輸送",
      impact: "大",
      impactLevel: 4,
      reason: "喜望峰迂回でコスト倍増・リードタイム3〜4週間延長。保険料急騰",
      color: "#f97316",
    },
    {
      name: "航空",
      impact: "大",
      impactLevel: 4,
      reason: "ジェット燃料高騰で運航コスト急増。中東路線の一部迂回・運休も",
      color: "#f97316",
    },
    {
      name: "自動車",
      impact: "中",
      impactLevel: 3,
      reason: "部品輸送コスト増・樹脂材料高で製造原価上昇。EV移行加速の好機でもある",
      color: "#d97706",
    },
    {
      name: "食品・消費財",
      impact: "中",
      impactLevel: 3,
      reason: "物流・包装材・農業用肥料コスト上昇。食品インフレが家計を直撃",
      color: "#d97706",
    },
    {
      name: "金融・保険",
      impact: "小〜中",
      impactLevel: 2,
      reason: "海上保険の引受停止で新たなリスク商品需要。金利上昇期待で銀行株は恩恵も",
      color: "#16a34a",
    },
    {
      name: "半導体・電子",
      impact: "軽微",
      impactLevel: 1,
      reason: "直接的な中東依存は低いが、製造装置の物流遅延やエネルギーコスト増の影響あり",
      color: "#94a3b8",
    },
  ];

  const impactLabels = ["軽微", "小〜中", "中", "大", "甚大"];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ホルムズ危機の産業別影響マトリクス"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Industry Impact
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        ホルムズ危機による産業別影響度マトリクス
      </div>

      <div className="space-y-3">
        {sectors.map((s) => (
          <div key={s.name} className="flex gap-3 items-start">
            <div className="w-24 shrink-0">
              <div className="text-[11px] font-semibold text-foreground/80">{s.name}</div>
              <div className="text-[9px] font-bold mt-0.5" style={{ color: s.color }}>{s.impact}</div>
            </div>
            <div className="flex-1">
              <div className="flex gap-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <div
                    key={lvl}
                    className={`h-2 flex-1 rounded-sm ${lvl > s.impactLevel ? "bg-foreground/[0.05]" : ""}`}
                    style={lvl <= s.impactLevel ? {
                      backgroundColor: s.color,
                      opacity: 0.4 + (lvl / 5) * 0.6,
                    } : undefined}
                  />
                ))}
              </div>
              <p className="text-[10px] text-foreground/50 leading-relaxed">{s.reason}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-[9px] text-foreground/40">
        {impactLabels.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-foreground/20" />
            Lv{i + 1}: {l}
          </span>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        出典: 三菱UFJ銀行経済調査室, 野村総合研究所, 資源エネルギー庁 (2026-03〜04)
      </div>
    </div>
  );
}

/* 6. 今後のリスクシナリオ比較 */
export function HormuzFinanceRiskDiagram() {
  const scenarios = [
    {
      name: "楽観シナリオ",
      nameEn: "Bull Case",
      prob: "25%",
      condition: "2週間交渉で恒久停戦成立、ホルムズ完全開通",
      oil: "$85〜90",
      nikkei: "57,000〜59,000円",
      yen: "145〜148円/ドル",
      risk: "イランが核開発を再開するリスクが残る",
      color: "#16a34a",
    },
    {
      name: "基本シナリオ",
      nameEn: "Base Case",
      prob: "50%",
      condition: "停戦延長・部分開通。3〜6カ月かけて正常化",
      oil: "$90〜105",
      nikkei: "53,000〜57,000円",
      yen: "148〜155円/ドル",
      risk: "港湾渋滞・保険再開の遅れで物流コスト高止まり",
      color: "#d97706",
    },
    {
      name: "悲観シナリオ",
      nameEn: "Bear Case",
      prob: "25%",
      condition: "停戦決裂、再封鎖または戦線拡大",
      oil: "$120〜140",
      nikkei: "46,000〜50,000円",
      yen: "155〜165円/ドル",
      risk: "第3次オイルショック相当。スタグフレーション懸念",
      color: "#ef4444",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="ホルムズ危機 今後のリスクシナリオ比較"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Risk Scenarios
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        停戦合意後の3シナリオ比較（2026年4月〜2027年）
      </div>

      <div className="space-y-4">
        {scenarios.map((s) => (
          <div
            key={s.name}
            className="p-4 rounded-lg border-l-[3px]"
            style={{ borderLeftColor: s.color, backgroundColor: s.color + "06" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[13px] font-bold text-foreground/85">{s.name}</span>
                <span className="text-[10px] text-foreground/40 ml-2">{s.nameEn}</span>
              </div>
              <span
                className="text-[12px] font-bold tabular-nums px-2 py-0.5 rounded-md text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.prob}
              </span>
            </div>
            <p className="text-[11px] text-foreground/65 mb-3 leading-relaxed">{s.condition}</p>
            <div className="grid grid-cols-3 gap-2 mb-2">
              {[
                { label: "WTI原油", val: s.oil },
                { label: "日経平均", val: s.nikkei },
                { label: "ドル円", val: s.yen },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-[9px] text-foreground/40 mb-0.5">{m.label}</div>
                  <div className="text-[11px] font-bold tabular-nums" style={{ color: s.color }}>
                    {m.val}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-foreground/50 border-t border-foreground/[0.04] pt-2 mt-1">
              ⚠ {s.risk}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[9px] text-foreground/35">
        出典: Pictet, ニッセイ基礎研究所, EBC Financial Group アナリスト予測を基に編集部試算 (2026-04)
      </div>
    </div>
  );
}
