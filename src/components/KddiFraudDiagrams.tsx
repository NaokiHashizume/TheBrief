"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img">
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
          {label}
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">{label}</div>
      {sub && <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   1. 不正の規模 — 主要数値バナー
   ───────────────────────────────────────────── */
export function KddiFraudScaleDiagram() {
  return (
    <DiagramCard label={<T ja="不正の規模 — 主要指標" en="Scale of Fraud — Key Metrics" />}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="2,461億円" label={<T ja="累計売上過大計上額" en="Cumulative overstated revenue" />} sub={<T ja="2018年8月〜2025年12月" en="Aug 2018 – Dec 2025" />} />
        <StatCard value="99.7%" label={<T ja="架空取引の割合" en="Share of fictitious transactions" />} sub={<T ja="広告代理事業の売上高" en="Of ad agency revenue" />} />
        <StatCard value="329億円" label={<T ja="外部資金流出額" en="External cash outflow" />} sub={<T ja="循環取引による損失" en="Losses from round-trip transactions" />} />
        <StatCard value="約7年" label={<T ja="不正継続期間" en="Duration of fraud" />} sub={<T ja="2018年8月〜2025年12月" en="Aug 2018 – Dec 2025" />} />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="650億円" label={<T ja="のれん減損損失" en="Goodwill impairment" />} />
        <StatCard value="500億円" label={<T ja="純利益下方修正" en="Net profit downward revision" />} />
        <StatCard value="2,700億円" label={<T ja="売上高下方修正" en="Revenue downward revision" />} />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   2. 架空循環取引の仕組み — フロー図
   ───────────────────────────────────────────── */
export function KddiFraudMechanismDiagram() {
  const steps = [
    { num: "01", label: "架空発注", labelEn: "Fictitious order", detail: "実在しない広告案件の発注書を作成", detailEn: "Order documents created for non-existent ad campaigns", color: "#ef4444" },
    { num: "02", label: "上流代理店", labelEn: "Upstream agency", detail: "架空の広告枠を「仕入れ」として計上", detailEn: "Phantom ad inventory recorded as purchases", color: "#f97316" },
    { num: "03", label: "G-Plan/BIGLOBE", labelEn: "G-Plan/BIGLOBE", detail: "仲介手数料を売上として計上", detailEn: "Intermediary fees booked as revenue", color: "#3b82f6" },
    { num: "04", label: "下流代理店", labelEn: "Downstream agency", detail: "架空の成果報酬を「売上」として計上", detailEn: "Fictitious performance fees recorded as sales", color: "#f97316" },
    { num: "05", label: "資金循環", labelEn: "Cash circulation", detail: "支払いサイトの差を利用して資金を回転", detailEn: "Payment-cycle gaps exploited to keep cash flowing", color: "#ef4444" },
  ];

  return (
    <DiagramCard label={<T ja="架空循環取引のスキーム" en="Round-Trip Transaction Scheme" />}>
      <div className="mt-3 space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold tabular-nums" style={{ backgroundColor: `${step.color}10`, color: step.color }}>
              {step.num}
            </div>
            <div className="flex-1 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
              <div className="text-[12px] font-bold text-foreground/70"><T ja={step.label} en={step.labelEn} /></div>
              <div className="text-[11px] text-foreground/40 mt-0.5"><T ja={step.detail} en={step.detailEn} /></div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 w-4 text-center text-foreground/15 text-lg">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#ef4444]/[0.04] border border-[#ef4444]/10">
        <div className="text-[11px] text-[#ef4444]/60 font-medium">
          <T
            ja="悪循環の構造：取引金額は循環するたびに雪だるま式に膨張。グループファイナンス（社内融資）が初期資金として投入され、不正の規模拡大を助長した。"
            en="A vicious cycle: transaction amounts snowballed with each round. Intra-group financing (internal loans) provided seed funding and fueled the expansion of fraud."
          />
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   3. なぜ見過ごされたか — 構造的要因マトリクス
   ───────────────────────────────────────────── */
export function KddiFraudFailuresDiagram() {
  const failures = [
    { category: "人的要因", categoryEn: "Human factors", issue: "業務の属人化", issueEn: "Key-person dependency", detail: "A氏に広告代理事業を「丸投げ」、職務分離の欠如", detailEn: "Ad agency business fully delegated to one person; no segregation of duties", severity: "致命的", severityEn: "Fatal" },
    { category: "プロセス", categoryEn: "Process", issue: "実在性確認の欠如", issueEn: "No existence verification", detail: "書面の整合性のみで承認、広告配信実績の裏付けなし", detailEn: "Approvals based on document consistency alone; no verification of actual ad delivery", severity: "致命的", severityEn: "Fatal" },
    { category: "財務管理", categoryEn: "Financial controls", issue: "キャッシュフロー監視の空白", issueEn: "Cash-flow monitoring blind spot", detail: "売上・利益は管理するもCFの異常検知なし", detailEn: "Revenue and profit monitored, but no anomaly detection on cash flows", severity: "重大", severityEn: "Serious" },
    { category: "与信管理", categoryEn: "Credit management", issue: "取引先審査の形骸化", issueEn: "Hollow counterparty screening", detail: "実態の乏しい企業が取引チェーンに存在", detailEn: "Shell-like entities present throughout the transaction chain", severity: "重大", severityEn: "Serious" },
    { category: "内部監査", categoryEn: "Internal audit", issue: "形式的な監査", issueEn: "Superficial audits", detail: "取引実態に踏み込んだ検証が行われず", detailEn: "No deep-dive verification of actual transaction substance", severity: "重大", severityEn: "Serious" },
    { category: "グループ管理", categoryEn: "Group governance", issue: "子会社への「放任」", issueEn: "Hands-off subsidiary oversight", detail: "親会社KDDIの子会社管理体制の不備", detailEn: "Deficient subsidiary management framework at parent company KDDI", severity: "構造的", severityEn: "Structural" },
  ];

  const severityColor: Record<string, string> = {
    "致命的": "#ef4444",
    "重大": "#f97316",
    "構造的": "#8b5cf6",
  };

  return (
    <DiagramCard label={<T ja="7年間見過ごされた構造的要因" en="Structural Failures That Went Undetected for 7 Years" />}>
      <div className="mt-3 space-y-2">
        {failures.map((f, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="flex-shrink-0 mt-0.5">
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${severityColor[f.severity]}10`,
                  color: severityColor[f.severity],
                }}
              >
                <T ja={f.severity} en={f.severityEn} />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/30 font-medium"><T ja={f.category} en={f.categoryEn} /></span>
                <span className="text-[12px] font-bold text-foreground/70"><T ja={f.issue} en={f.issueEn} /></span>
              </div>
              <div className="text-[11px] text-foreground/40 mt-0.5"><T ja={f.detail} en={f.detailEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   4. 財務インパクト — 比較表
   ───────────────────────────────────────────── */
export function KddiFraudFinancialDiagram() {
  const rows = [
    { item: "連結売上高（予想）", itemEn: "Consolidated revenue (forecast)", before: "6兆3,300億円", after: "6兆600億円", diff: "▲2,700億円" },
    { item: "連結純利益（予想）", itemEn: "Consolidated net profit (forecast)", before: "7,480億円", after: "6,980億円", diff: "▲500億円" },
    { item: "のれん減損損失", itemEn: "Goodwill impairment", before: "—", after: "約650億円", diff: "—" },
    { item: "外部資金流出", itemEn: "External cash outflow", before: "—", after: "329億円", diff: "—" },
  ];

  return (
    <DiagramCard label={<T ja="2026年3月期 業績予想修正" en="FY2026 March Earnings Forecast Revision" />}>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2.5 pr-3 font-semibold text-foreground/50"><T ja="項目" en="Item" /></th>
              <th className="text-right py-2.5 px-3 font-semibold text-foreground/50"><T ja="修正前" en="Before" /></th>
              <th className="text-right py-2.5 px-3 font-semibold text-foreground/50"><T ja="修正後" en="After" /></th>
              <th className="text-right py-2.5 pl-3 font-semibold text-[#ef4444]/60"><T ja="増減" en="Change" /></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-foreground/[0.03]">
                <td className="py-2.5 pr-3 text-foreground/60 font-medium"><T ja={r.item} en={r.itemEn} /></td>
                <td className="py-2.5 px-3 text-right text-foreground/50 tabular-nums">{r.before}</td>
                <td className="py-2.5 px-3 text-right text-foreground/70 tabular-nums font-semibold">{r.after}</td>
                <td className="py-2.5 pl-3 text-right text-[#ef4444]/70 tabular-nums font-semibold">{r.diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
        <div className="text-[11px] text-foreground/40">
          <T
            ja="株価影響：発表翌営業日に前日比141円安（2,582.5円）。ただし通信本業の堅調さから限定的な下落にとどまった。"
            en="Stock impact: fell ¥141 on the next business day (to ¥2,582.5), but losses were contained given the resilience of the core telecoms business."
          />
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5. 処分一覧 — 経営責任
   ───────────────────────────────────────────── */
export function KddiFraudAccountabilityDiagram() {
  const actions = [
    { who: "A氏（主導者）", whoEn: "Person A (ringleader)", role: "ジー・プラン ソリューション営業ビジネス部長", roleEn: "G-Plan, Head of Solution Sales Business Dept.", action: "懲戒解雇", actionEn: "Disciplinary dismissal", level: "最重" },
    { who: "B氏（加担者）", whoEn: "Person B (accomplice)", role: "ジー・プラン 社員", roleEn: "G-Plan employee", action: "懲戒解雇", actionEn: "Disciplinary dismissal", level: "最重" },
    { who: "ビッグローブ社長ほか", whoEn: "BIGLOBE president et al.", role: "子会社役員 6名", roleEn: "6 subsidiary executives", action: "引責辞任", actionEn: "Resigned to take responsibility", level: "重" },
    { who: "髙橋誠 会長", whoEn: "Makoto Takahashi, Chairman", role: "KDDI 取締役会長", roleEn: "KDDI Chairman of the Board", action: "月例報酬30%×3カ月返納", actionEn: "30% of monthly pay returned × 3 months", level: "中" },
    { who: "松田浩路 社長CEO", whoEn: "Hiroji Matsuda, President & CEO", role: "KDDI 代表取締役社長", roleEn: "KDDI President & Representative Director", action: "月例報酬30%×3カ月返納", actionEn: "30% of monthly pay returned × 3 months", level: "中" },
    { who: "その他取締役 6名", whoEn: "6 other directors", role: "KDDI 経営陣", roleEn: "KDDI management", action: "月例報酬返納（一部）", actionEn: "Partial monthly pay returned", level: "軽" },
  ];

  const levelColor: Record<string, string> = {
    "最重": "#ef4444",
    "重": "#f97316",
    "中": "#eab308",
    "軽": "#6b7280",
  };

  return (
    <DiagramCard label={<T ja="処分・経営責任の一覧" en="Disciplinary Actions and Executive Accountability" />}>
      <div className="mt-3 space-y-2">
        {actions.map((a, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div
              className="flex-shrink-0 w-2 h-8 rounded-full"
              style={{ backgroundColor: levelColor[a.level] }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] font-bold text-foreground/70"><T ja={a.who} en={a.whoEn} /></span>
                <span className="text-[10px] text-foreground/30"><T ja={a.role} en={a.roleEn} /></span>
              </div>
              <div className="text-[11px] text-foreground/50 mt-0.5 font-medium"><T ja={a.action} en={a.actionEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   6. 再発防止策 — 施策一覧
   ───────────────────────────────────────────── */
export function KddiFraudPreventionDiagram() {
  const measures = [
    { icon: "🔍", title: "取引先・与信管理の見直し", titleEn: "Counterparty and credit management review", detail: "信用調査基準の厳格化と定期モニタリング体制の構築", detailEn: "Tighter credit screening standards and a regular monitoring framework" },
    { icon: "📋", title: "内部監査体制の強化", titleEn: "Internal audit strengthening", detail: "子会社含む監査の頻度・深度拡大、サブスタンティブテスト導入", detailEn: "More frequent and deeper audits including subsidiaries; substantive testing introduced" },
    { icon: "💰", title: "グループファイナンス審議強化", titleEn: "Group financing approval controls", detail: "申請・審議・実行の各段階で複数承認者による牽制機能", detailEn: "Multiple approvers required at each stage: application, review, and execution" },
    { icon: "📢", title: "内部通報制度の再整備", titleEn: "Internal whistleblowing system overhaul", detail: "グループ全体での認知向上・利用促進・通報者保護の実効化", detailEn: "Group-wide awareness, promotion of use, and effective whistleblower protection" },
    { icon: "🏛️", title: "ガバナンス強化対策会議", titleEn: "Governance reform committee", detail: "全社横断的な会議体を新設し子会社管理の枠組みを再構築", detailEn: "Cross-functional council established to rebuild subsidiary management framework" },
    { icon: "📚", title: "不正リスク教育プログラム", titleEn: "Fraud risk education program", detail: "KDDIフィロソフィの浸透活動と不正リスク対応の教育導入", detailEn: "Promotion of KDDI Philosophy and introduction of fraud risk training" },
  ];

  return (
    <DiagramCard label={<T ja="再発防止策 — 6つの柱" en="Recurrence Prevention — 6 Pillars" />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {measures.map((m, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base">{m.icon}</span>
              <span className="text-[12px] font-bold text-foreground/70"><T ja={m.title} en={m.titleEn} /></span>
            </div>
            <div className="text-[11px] text-foreground/40 leading-relaxed"><T ja={m.detail} en={m.detailEn} /></div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
