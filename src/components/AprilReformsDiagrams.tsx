"use client";

/* ────────────────────────────────────────────────────────────
   April 2026 Reforms — Diagrams
   ──────────────────────────────────────────────────────────── */

const POLITICS = "#ef4444";

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-10 p-6 rounded-2xl border border-brief-border bg-brief-card"
      role="img"
      aria-label={title}
    >
      <figcaption className="mb-5">
        <div className="text-[10px] tracking-[2.5px] uppercase font-bold text-brief-red/60 mb-1">
          Figure
        </div>
        <div className="font-serif text-[15px] font-bold text-foreground">{title}</div>
        {subtitle && (
          <div className="text-[11px] text-foreground/50 mt-1">{subtitle}</div>
        )}
      </figcaption>
      {children}
    </figure>
  );
}

/* ── 1. Overview: 7 reforms timeline ── */
export function AprilReformsOverviewDiagram() {
  const items = [
    { num: "①", label: "共同親権", area: "民法", color: POLITICS },
    { num: "②", label: "自転車青切符", area: "道路交通法", color: "#f97316" },
    { num: "③", label: "130万円の壁", area: "社会保険", color: "#ca8a04" },
    { num: "④", label: "子ども・子育て支援金", area: "社会保険", color: "#16a34a" },
    { num: "⑤", label: "在職老齢年金", area: "年金", color: "#0d9488" },
    { num: "⑥", label: "たばこ税・防衛特別法人税", area: "税制", color: "#2563eb" },
    { num: "⑦", label: "GX-ETS", area: "環境", color: "#7c3aed" },
  ];
  return (
    <Card title="2026年4月、同時施行された7つの大改正">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <div
            key={it.num}
            className="flex items-center p-3 rounded-lg border border-brief-border"
            style={{ backgroundColor: `${it.color}08` }}
          >
            <div
              className="text-[20px] font-bold tabular-nums w-8"
              style={{ color: it.color }}
            >
              {it.num}
            </div>
            <div className="flex-1 ml-2">
              <div className="text-[13px] font-bold text-foreground">{it.label}</div>
              <div className="text-[10px] text-foreground/50 mt-0.5">{it.area}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-foreground/45 text-right">
        施行日：原則2026年4月1日（一部、事業年度開始日基準）
      </div>
    </Card>
  );
}

/* ── 2. Joint custody before/after ── */
export function AprilReformsJointCustodyDiagram() {
  return (
    <Card title="共同親権 ― 1898年以来、約128年ぶりの選択肢">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-brief-border bg-foreground/[0.02]">
          <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 font-bold mb-2">
            ～ 2026年3月
          </div>
          <div className="font-bold text-foreground mb-2">単独親権のみ</div>
          <ul className="text-[12px] text-foreground/70 space-y-1.5 leading-relaxed">
            <li>・離婚後はどちらか一方のみ</li>
            <li>・もう一方は親権を失う</li>
            <li>・面会交流は努力義務</li>
            <li>・養育費の取り立てが困難</li>
          </ul>
        </div>
        <div
          className="p-4 rounded-lg border-2"
          style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
        >
          <div
            className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
            style={{ color: POLITICS }}
          >
            2026年4月～
          </div>
          <div className="font-bold text-foreground mb-2">共同親権を選択可能</div>
          <ul className="text-[12px] text-foreground/70 space-y-1.5 leading-relaxed">
            <li>・父母双方が親権を持つ選択肢</li>
            <li>・DV事案は単独親権を維持</li>
            <li>・「監護者」と「親権」が分離</li>
            <li>・養育費の優先弁済権を強化</li>
          </ul>
        </div>
      </div>
      <div
        className="mt-4 p-3 rounded-lg text-[11px] leading-relaxed"
        style={{ backgroundColor: `${POLITICS}08`, color: "rgba(0,0,0,0.7)" }}
      >
        <strong>対象規模：</strong>日本では年間 約18万組が離婚し、約20万人の子どもが影響を受ける。施行前に離婚した家庭でも家裁に申立可能。
      </div>
    </Card>
  );
}

/* ── 3. Bicycle ticket fines table ── */
export function AprilReformsBicycleDiagram() {
  const fines = [
    { v: "信号無視", f: "6,000円", risk: "高" },
    { v: "一時不停止", f: "5,000円", risk: "中" },
    { v: "携帯電話使用（ながら運転）", f: "12,000円", risk: "最高" },
    { v: "傘さし運転", f: "6,000円", risk: "高" },
    { v: "歩道通行違反", f: "6,000円", risk: "中" },
    { v: "並進・二人乗り", f: "3,000円", risk: "低" },
  ];
  return (
    <Card title="自転車「青切符」 ― 主な違反と反則金（16歳以上が対象）">
      <div className="overflow-hidden rounded-lg border border-brief-border">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="bg-foreground/[0.04] text-foreground/55">
              <th className="text-left py-2 px-3 font-semibold">違反内容</th>
              <th className="text-right py-2 px-3 font-semibold tabular-nums">反則金</th>
              <th className="text-center py-2 px-3 font-semibold">危険度</th>
            </tr>
          </thead>
          <tbody>
            {fines.map((row, i) => (
              <tr
                key={row.v}
                className={i % 2 === 1 ? "bg-foreground/[0.015]" : ""}
              >
                <td className="py-2 px-3 text-foreground/80">{row.v}</td>
                <td
                  className="py-2 px-3 text-right tabular-nums font-semibold"
                  style={{ color: POLITICS }}
                >
                  {row.f}
                </td>
                <td className="py-2 px-3 text-center text-foreground/60">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[10px] text-foreground/45">
        反則金を期日までに納付すれば刑事手続には進まない。納付しない場合は赤切符（刑事手続）に移行。
      </div>
    </Card>
  );
}

/* ── 4. 130 man yen wall ── */
export function AprilReformsHyakuSanjuDiagram() {
  return (
    <Card title="130万円の壁 ― 「実績ベース」から「労働契約ベース」へ">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-foreground/[0.02] border border-brief-border">
            <div className="text-[10px] tracking-[2px] uppercase font-bold text-foreground/40 mb-2">
              旧ルール
            </div>
            <div className="font-bold text-foreground mb-1">実績年収で判定</div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              繁忙期の残業代が乗ると、契約は120万円の予定でも実績135万円となり、扶養を外される。
            </div>
          </div>
          <div
            className="p-4 rounded-lg border-2"
            style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
          >
            <div
              className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
              style={{ color: POLITICS }}
            >
              新ルール（2026年4月～）
            </div>
            <div className="font-bold text-foreground mb-1">労働契約上の所定賃金で判定</div>
            <div className="text-[11px] text-foreground/60 leading-relaxed">
              所定賃金が130万円未満なら、突発的な残業で実績が超過しても扶養を継続できる。
            </div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
          <strong className="text-foreground">対象：</strong>従業員50人以下の企業に勤めるパート・アルバイト約1,500万人。51人以上の企業は引き続き「週20時間・月8.8万円」の社会保険適用拡大ルールが優先される。
        </div>
      </div>
    </Card>
  );
}

/* ── 5. Childcare support fund ── */
export function AprilReformsChildcareFundDiagram() {
  const tiers = [
    { year: "2026年度", amt: "月 250〜450円", scale: 30 },
    { year: "2027年度", amt: "月 350〜650円", scale: 60 },
    { year: "2028年度", amt: "月 450〜850円", scale: 100 },
  ];
  return (
    <Card title="子ども・子育て支援金 ― 段階的に引き上げ">
      <div className="space-y-3">
        {tiers.map((t) => (
          <div key={t.year} className="flex items-center">
            <div className="w-24 text-[12px] font-bold text-foreground/70">{t.year}</div>
            <div className="flex-1 ml-3">
              <div className="h-7 rounded-lg bg-foreground/[0.04] relative overflow-hidden">
                <div
                  className="h-full rounded-lg flex items-center justify-end pr-3"
                  style={{
                    width: `${t.scale}%`,
                    backgroundColor: `${POLITICS}25`,
                  }}
                >
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: POLITICS }}
                  >
                    {t.amt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/55 leading-relaxed">
        被用者保険加入者1人あたりの月額目安。所得階層により幅があり、財源規模は2028年度に約 <strong className="text-foreground">1兆円</strong> に達する見込み。
      </div>
    </Card>
  );
}

/* ── 6. Pension threshold ── */
export function AprilReformsPensionDiagram() {
  return (
    <Card title="在職老齢年金 ― 支給停止基準額の引き上げ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg bg-foreground/[0.02] border border-brief-border text-center">
          <div className="text-[10px] tracking-[2px] uppercase font-bold text-foreground/40 mb-2">
            ～ 2026年3月
          </div>
          <div className="text-[32px] font-bold tabular-nums text-foreground/70">
            50<span className="text-[16px]">万円</span>
          </div>
          <div className="text-[11px] text-foreground/55 mt-1">
            賃金＋年金 月額
          </div>
        </div>
        <div
          className="p-5 rounded-lg border-2 text-center"
          style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
        >
          <div
            className="text-[10px] tracking-[2px] uppercase font-bold mb-2"
            style={{ color: POLITICS }}
          >
            2026年4月～
          </div>
          <div
            className="text-[32px] font-bold tabular-nums"
            style={{ color: POLITICS }}
          >
            62<span className="text-[16px]">万円</span>
          </div>
          <div className="text-[11px] text-foreground/55 mt-1">
            「働き損」の解消
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
        基準額を超えた分の <strong className="text-foreground">半額</strong> が年金から差し引かれる仕組みは維持。月収40万円・年金20万円のケースで、改正前は <strong className="text-foreground">5万円カット</strong>、改正後は <strong className="text-foreground">カットなし</strong>。
      </div>
    </Card>
  );
}

/* ── 7. Defense tax sources ── */
export function AprilReformsDefenseTaxDiagram() {
  const sources = [
    { name: "歳出改革", amt: "0.3兆円", color: "#94a3b8", w: 30 },
    { name: "決算剰余金", amt: "0.7兆円", color: "#64748b", w: 70 },
    { name: "防衛特別法人税", amt: "0.7兆円", color: POLITICS, w: 70 },
    { name: "たばこ税", amt: "0.2兆円", color: "#dc2626", w: 20 },
  ];
  return (
    <Card title="防衛費1兆円の恒久財源 ― 内訳">
      <div className="space-y-2.5">
        {sources.map((s) => (
          <div key={s.name} className="flex items-center">
            <div className="w-32 text-[12px] text-foreground/75">{s.name}</div>
            <div className="flex-1">
              <div className="h-6 rounded bg-foreground/[0.04] relative overflow-hidden">
                <div
                  className="h-full flex items-center pr-2 justify-end"
                  style={{ width: `${s.w}%`, backgroundColor: `${s.color}30` }}
                >
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: s.color }}
                  >
                    {s.amt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-foreground/55 leading-relaxed">
        当初検討された <strong className="text-foreground">所得税の付加税（防衛特別所得税）</strong> は導入時期を先送り。たばこ税・法人税で先行する設計となった。
      </div>
    </Card>
  );
}

/* ── 8. GX-ETS scope ── */
export function AprilReformsGXETSDiagram() {
  return (
    <Card title="GX-ETS ― 制度全体像と段階スケジュール">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 rounded-lg border border-brief-border bg-brief-card text-center">
            <div className="text-[10px] uppercase font-bold text-foreground/40">2026</div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1">算定・報告</div>
            <div className="text-[10px] text-foreground/55 mt-1">CO2排出量を計測し第三者検証</div>
          </div>
          <div
            className="p-3 rounded-lg border-2 text-center"
            style={{ borderColor: `${POLITICS}40`, backgroundColor: `${POLITICS}08` }}
          >
            <div
              className="text-[10px] uppercase font-bold"
              style={{ color: POLITICS }}
            >
              2027
            </div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1">排出枠割当</div>
            <div className="text-[10px] text-foreground/55 mt-1">2026実績ベースで初の義務枠</div>
          </div>
          <div className="p-3 rounded-lg border border-brief-border bg-brief-card text-center">
            <div className="text-[10px] uppercase font-bold text-foreground/40">2028～</div>
            <div className="text-[12px] font-bold text-foreground/80 mt-1">市場取引</div>
            <div className="text-[10px] text-foreground/55 mt-1">超過分は購入、不足は罰則</div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.025] text-[11px] text-foreground/65 leading-relaxed">
          <strong className="text-foreground">対象企業：</strong>直近3年平均で年間 <strong className="text-foreground">10万トン以上</strong> のCO2を排出する約 <strong className="text-foreground">300〜400社</strong>。電力・鉄鋼・化学・セメント・紙パルプ・自動車・半導体などエネルギー多消費産業のほぼすべてをカバー。
        </div>
      </div>
    </Card>
  );
}
