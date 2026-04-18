"use client";

const TEAL = "#14b8a6";
const AMBER = "#f59e0b";
const RED = "#ef4444";
const BLUE = "#3b82f6";

function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <figure
      role="img"
      aria-label={title}
      className="my-8 p-6 rounded-2xl border border-brief-border bg-brief-card"
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold">Figure</div>
        <h3 className="text-[15px] font-bold text-foreground/90 mt-1">{title}</h3>
      </figcaption>
      {children}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   nisa-account-growth
   NISA口座数と買付額推移
   ───────────────────────────────────────────── */
export function NisaAccountGrowthDiagram() {
  const metrics = [
    { label: "NISA口座総数（2025年3月末）", value: "2,646万件", color: TEAL },
    { label: "累計新規買付額（2024年1月〜2025年6月）", value: "約63.1兆円", color: AMBER },
    { label: "成長投資枠（累計比率）", value: "71%", color: BLUE },
    { label: "つみたて投資枠（累計比率）", value: "29%", color: "#6b7280" },
  ];

  return (
    <Card title="新NISA「元年」の主要数値（金融庁・日本証券業協会）">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {metrics.map((m, i) => (
          <div key={i} className="p-3 rounded-xl border border-brief-border bg-foreground/[0.015] text-center">
            <div className="text-[20px] font-bold" style={{ color: m.color }}>{m.value}</div>
            <div className="text-[10px] text-foreground/50 mt-0.5 leading-tight">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg" style={{ background: `${AMBER}08`, borderLeft: `3px solid ${AMBER}40` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: AMBER }}>背景：</span>
          「資産運用立国」という政府主導より、「年金だけでは老後を生きられない」という危機感がボトムアップで口座開設を牽引。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   nisa-user-demographics
   NISA利用者の属性
   ───────────────────────────────────────────── */
export function NisaUserDemographicsDiagram() {
  const incomeGroups = [
    { label: "年収300万円未満", pct: 39.3, color: TEAL },
    { label: "年収300〜500万円未満", pct: 26.5, color: AMBER },
    { label: "年収500万円以上", pct: 34.2, color: "#6b7280" },
  ];

  return (
    <Card title="NISA利用者の属性分布（金融庁 利用状況調査）">
      <div className="space-y-3 mb-5">
        {incomeGroups.map((g, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-foreground/70">{g.label}</span>
              <span className="font-bold" style={{ color: g.color }}>{g.pct}%</span>
            </div>
            <div className="h-3 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${g.pct}%`,
                  background: `linear-gradient(90deg, ${g.color}80, ${g.color})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[18px] font-bold" style={{ color: TEAL }}>40%超</div>
          <div className="text-[10px] text-foreground/50">20・30代の利用率</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[18px] font-bold" style={{ color: AMBER }}>約25%</div>
          <div className="text-[10px] text-foreground/50">30代の口座保有率</div>
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   nisa-investment-allocation
   成長投資枠 vs つみたて投資枠
   ───────────────────────────────────────────── */
export function NisaInvestmentAllocationDiagram() {
  return (
    <Card title="成長投資枠71% vs つみたて投資枠29%——政策目標との乖離">
      <div className="mb-5">
        <div className="flex items-center mb-2">
          <div className="text-[12px] text-foreground/60 w-28">成長投資枠</div>
          <div className="flex-1 h-6 rounded-l-full overflow-hidden" style={{ background: `${BLUE}20` }}>
            <div
              className="h-full rounded-l-full flex items-center justify-end pr-2"
              style={{ width: "71%", background: `linear-gradient(90deg, ${BLUE}60, ${BLUE})` }}
            >
              <span className="text-[11px] font-bold text-white">71%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-[12px] text-foreground/60 w-28">つみたて投資枠</div>
          <div className="flex-1 h-6 rounded-l-full overflow-hidden" style={{ background: `${TEAL}20` }}>
            <div
              className="h-full rounded-l-full flex items-center justify-end pr-2"
              style={{ width: "29%", background: `linear-gradient(90deg, ${TEAL}60, ${TEAL})` }}
            >
              <span className="text-[11px] font-bold text-white">29%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-bold text-foreground/55 mb-1">この乖離が示すもの</p>
        {[
          "高所得・中高年層が成長投資枠で大型・一括投資を実施",
          "政府目標「長期積立型の資産形成」より株式集中傾向が優勢",
          "金融庁がつみたて枠の活用促進追加施策を検討中",
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: AMBER }} />
            <p className="text-[12px] text-foreground/60">{s}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   nisa-barrier-analysis
   投資未着手層の障壁
   ───────────────────────────────────────────── */
export function NisaBarrierAnalysisDiagram() {
  const barriers = [
    { reason: "元本割れリスクが怖い", pct: 48.2, color: RED },
    { reason: "何に投資すればいいかわからない", pct: 42.7, color: AMBER },
    { reason: "まとまったお金がない", pct: 37.1, color: BLUE },
  ];

  return (
    <Card title="「NISAを知っているが利用していない」20〜30代の理由（日経新聞 2025年4月）">
      <div className="space-y-3 mb-5">
        {barriers.map((b, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-foreground/70">{b.reason}</span>
              <span className="font-bold" style={{ color: b.color }}>{b.pct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${b.pct}%`, background: `linear-gradient(90deg, ${b.color}60, ${b.color})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg border" style={{ borderColor: `${RED}30`, background: `${RED}06` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: RED }}>警戒点：</span>
          「NISA怖い→保険型積立（変額・外貨建て保険）」へ誘導されるケースが増加。手数料高・期待リターン低のリスクがある。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   nisa-advanced-investors
   NISA卒業層の動向
   ───────────────────────────────────────────── */
export function NisaAdvancedInvestorsDiagram() {
  const moves = [
    { action: "株式集中投資", detail: "テスラ・NVIDIA・国内高配当株へ", color: TEAL },
    { action: "オルタナ投資", detail: "ウイスキー樽・アート・クラファン不動産", color: AMBER },
    { action: "米国ETF強化", detail: "VOO・QQQ等の購入増。NISA枠外で運用", color: BLUE },
  ];

  return (
    <Card title="「NISA卒業層」の投資行動（2〜3年利用後に積極化）">
      <div className="space-y-3">
        {moves.map((m, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-brief-border">
            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: m.color }} />
            <div>
              <span className="text-[13px] font-bold text-foreground/85">{m.action}</span>
              <p className="text-[11px] text-foreground/55 mt-0.5">{m.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ background: `${TEAL}08`, borderLeft: `3px solid ${TEAL}30` }}>
        <p className="text-[12px] text-foreground/65">
          「NISA枠はドルコスト平均、枠外は米国個別株」という運用設計が定着しつつある。新たな懸念：集中投資・オルタナのリスク管理不足。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   nisa-strategic-view
   政策的含意
   ───────────────────────────────────────────── */
export function NisaStrategicViewDiagram() {
  const implications = [
    { no: "①", text: "NISA普及の「成功」をそのまま政策成果として喧伝するのは一面的" },
    { no: "②", text: "本質的課題は「年金制度の持続可能性・受給水準への信頼回復」" },
    { no: "③", text: "「自己責任で老後を何とかしなさい」というメッセージとして解釈されるリスク" },
  ];

  return (
    <Card title="「資産運用立国」の本当の課題——年金制度への不信任票の集積">
      <div className="p-4 rounded-xl border border-brief-border bg-foreground/[0.015] mb-4">
        <p className="text-[13px] font-bold text-foreground/80 mb-2">2,646万件のNISA口座の本当の動機</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 p-2 rounded-lg text-center" style={{ background: `${RED}10` }}>
            <p className="text-[11px] text-foreground/60">表の動機</p>
            <p className="text-[12px] font-bold" style={{ color: RED }}>資産運用立国</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/30"><path d="M9 18l6-6-6-6" /></svg>
          <div className="flex-1 p-2 rounded-lg text-center" style={{ background: `${AMBER}10` }}>
            <p className="text-[11px] text-foreground/60">実態の動機</p>
            <p className="text-[12px] font-bold" style={{ color: AMBER }}>老後への自衛</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {implications.map((imp, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[12px] font-bold flex-shrink-0" style={{ color: TEAL }}>{imp.no}</span>
            <p className="text-[12px] text-foreground/65">{imp.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
