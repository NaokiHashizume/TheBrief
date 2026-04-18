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
   wage-spring-2026-overview
   春闘賃上げ率の推移
   ───────────────────────────────────────────── */
export function WageSpring2026OverviewDiagram() {
  const data = [
    { year: "2021年", rate: 1.85, highlight: false },
    { year: "2022年", rate: 2.20, highlight: false },
    { year: "2023年", rate: 3.58, highlight: false },
    { year: "2024年", rate: 5.10, highlight: false },
    { year: "2025年", rate: 5.17, highlight: false },
    { year: "2026年", rate: 5.26, highlight: true },
  ];
  const maxRate = 6;

  return (
    <Card title="春闘賃上げ率の推移（定期昇給込み・連合集計）">
      <div className="space-y-2">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-0.5">
              <span className={d.highlight ? "font-bold text-foreground/90" : "text-foreground/65"}>{d.year}</span>
              <span className="font-bold" style={{ color: d.highlight ? TEAL : "inherit" }}>{d.rate}%</span>
            </div>
            <div className="h-3 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(d.rate / maxRate) * 100}%`,
                  background: d.highlight
                    ? `linear-gradient(90deg, ${TEAL}80, ${TEAL})`
                    : `linear-gradient(90deg, #6b728060, #6b7280)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[18px] font-bold" style={{ color: TEAL }}>5.26%</div>
          <div className="text-[10px] text-foreground/50">2026年第1回集計（3/27）</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[18px] font-bold" style={{ color: AMBER }}>5.05%</div>
          <div className="text-[10px] text-foreground/50">中小企業（300人未満）</div>
        </div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   wage-real-vs-nominal
   名目賃金 vs 実質賃金
   ───────────────────────────────────────────── */
export function WageRealVsNominalDiagram() {
  return (
    <Card title="「名目5%賃上げ」と「実質購買力」の乖離">
      <div className="space-y-3 mb-4">
        <div className="p-3 rounded-xl border border-brief-border">
          <div className="flex items-center justify-between text-[12px] mb-1">
            <span className="text-foreground/65">名目賃上げ率（2026年春闘）</span>
            <span className="font-bold" style={{ color: TEAL }}>+5.26%</span>
          </div>
          <div className="h-3 rounded-full bg-brief-border overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "87.7%", background: `linear-gradient(90deg, ${TEAL}80, ${TEAL})` }} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-[11px] text-foreground/50">
            <span>マイナス：消費者物価上昇</span>
            <span className="font-bold" style={{ color: RED }}>▲3.2%</span>
          </div>
        </div>
        <div className="p-3 rounded-xl border" style={{ borderColor: `${AMBER}30`, background: `${AMBER}06` }}>
          <div className="flex items-center justify-between text-[12px] mb-1">
            <span className="text-foreground/65">実質賃上げ効果（概算）</span>
            <span className="font-bold" style={{ color: AMBER }}>約+1.8%〜2%</span>
          </div>
          <div className="h-3 rounded-full bg-brief-border overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "30%", background: `linear-gradient(90deg, ${AMBER}80, ${AMBER})` }} />
          </div>
        </div>
      </div>
      <div className="p-3 rounded-lg border" style={{ borderColor: `${RED}30`, background: `${RED}06` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: RED }}>さらに：</span>
          社会保険料引き上げ（介護・健康保険料の段階的増加）を考慮すると、手取りベースでは実質マイナスの世帯も存在。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   wage-sme-reality
   中小企業5%の実態（組合加盟企業のみ）
   ───────────────────────────────────────────── */
export function WageSmeRealityDiagram() {
  return (
    <Card title="「中小5%超」という数字の注釈——組合加盟企業のみのデータ">
      <div className="mb-4">
        <div className="flex items-center gap-3 p-4 rounded-xl border border-brief-border">
          <div className="flex-1">
            <div className="text-[11px] text-foreground/50 mb-1">労働組合の組織率（2025年厚労省）</div>
            <div className="text-[28px] font-bold" style={{ color: TEAL }}>16.3%</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-[11px] text-foreground/50 mb-1">春闘集計外の労働者</div>
            <div className="text-[28px] font-bold" style={{ color: RED }}>約84%</div>
          </div>
        </div>
      </div>
      <div className="h-4 rounded-full overflow-hidden bg-brief-border mb-3">
        <div className="h-full float-left" style={{ width: "16.3%", background: TEAL }} />
      </div>
      <div className="flex items-center gap-3 text-[11px] mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: TEAL }} />
          <span className="text-foreground/65">組合加盟（春闘集計に反映）16.3%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-brief-border" />
          <span className="text-foreground/65">非組合（集計外）83.7%</span>
        </div>
      </div>
      <div className="p-3 rounded-lg" style={{ background: `${AMBER}08`, borderLeft: `3px solid ${AMBER}30` }}>
        <p className="text-[12px] text-foreground/65">
          より現実を反映した指標は厚労省「毎月勤労統計」。実質賃金は2023年から断続的マイナスが続き、2026年前半にようやくプラス転換の見通し。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   wage-sme-cost-transfer
   価格転嫁の格差
   ───────────────────────────────────────────── */
export function WageSmeCostTransferDiagram() {
  const transferRates = [
    { label: "コスト全般の転嫁率", rate: 49.7, color: AMBER },
    { label: "労務費の転嫁率", rate: 44.7, color: AMBER },
    { label: "全くコスト転嫁できていない中小企業", rate: 20, color: RED },
  ];

  return (
    <Card title="価格転嫁の格差——転嫁できない中小が「防衛的賃上げ」へ（経産省調査）">
      <div className="space-y-3 mb-4">
        {transferRates.map((t, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-[12px] mb-1">
              <span className="text-foreground/70">{t.label}</span>
              <span className="font-bold" style={{ color: t.color }}>{t.rate}%</span>
            </div>
            <div className="h-3 rounded-full bg-brief-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${t.rate}%`, background: `linear-gradient(90deg, ${t.color}60, ${t.color})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl border border-brief-border">
        <div className="flex items-center justify-between text-[12px] mb-1">
          <span className="text-foreground/65">総人件費が増加すると見込む企業（帝国データバンク）</span>
          <span className="font-bold" style={{ color: TEAL }}>73.9%</span>
        </div>
        <div className="text-[10px] text-foreground/45">2016年調査開始以降最高水準</div>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   wage-irregular-workers
   非正規労働者への波及
   ───────────────────────────────────────────── */
export function WageIrregularWorkersDiagram() {
  return (
    <Card title="非正規労働者2,124万人——春闘の「外側」にいる36.6%">
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[22px] font-bold" style={{ color: RED }}>2,124万人</div>
          <div className="text-[10px] text-foreground/50">非正規労働者数（2025年）</div>
          <div className="text-[11px] font-bold text-foreground/65 mt-0.5">全就業者の36.6%</div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border text-center">
          <div className="text-[22px] font-bold" style={{ color: TEAL }}>1,055円</div>
          <div className="text-[10px] text-foreground/50">最低賃金（2025年度全国加重平均）</div>
          <div className="text-[11px] font-bold text-foreground/65 mt-0.5">前年比+50円</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { label: "コンビニ・小売パート時給", value: "1,100〜1,200円台（地域差あり）" },
          { label: "介護・保育職（政府補助）", value: "月3〜4万円程度の追加引き上げ" },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-lg border border-brief-border text-[12px]">
            <span className="text-foreground/65">{s.label}</span>
            <span className="font-bold text-foreground/80">{s.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 rounded-lg" style={{ background: `${AMBER}08`, borderLeft: `3px solid ${AMBER}30` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: AMBER }}>副作用：</span>
          最低賃金上昇→総人件費維持のためシフト削減という逆説。零細サービス業で観察されるパターン。
        </p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   wage-strategic-view
   真の評価指標とは
   ───────────────────────────────────────────── */
export function WageStrategicViewDiagram() {
  const metrics = [
    { current: "春闘平均値", better: "中央値と最下位層の賃金変化", color: TEAL },
    { current: "名目賃金上昇率", better: "実質購買力の変化", color: AMBER },
    { current: "大企業組合の賃上げ率", better: "非正規・零細企業の時給・月収変化", color: BLUE },
  ];

  return (
    <Card title="評価指標の転換——「5%」より「誰が豊かになったか」を問う">
      <div className="space-y-3 mb-4">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px]">
            <div className="flex-1 p-2 rounded-lg text-center" style={{ background: `${RED}08`, border: `1px solid ${RED}20` }}>
              <p className="text-foreground/50 text-[10px]">現在の指標</p>
              <p className="font-bold text-foreground/75">{m.current}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-foreground/30"><path d="M9 18l6-6-6-6" /></svg>
            <div className="flex-1 p-2 rounded-lg text-center" style={{ background: `${m.color}08`, border: `1px solid ${m.color}25` }}>
              <p className="text-foreground/50 text-[10px]">本来の指標</p>
              <p className="font-bold" style={{ color: m.color }}>{m.better}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg" style={{ background: `${TEAL}08`, borderLeft: `3px solid ${TEAL}30` }}>
        <p className="text-[12px] text-foreground/65">
          <span className="font-bold" style={{ color: TEAL }}>構造的課題：</span>
          「強い企業から弱い企業への価格転嫁の連鎖」が中小→零細→非正規まで届く仕組みの構築が不可欠。春闘5%はその構造改革が途半ばの証拠。
        </p>
      </div>
    </Card>
  );
}
