"use client";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${label}`}>
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
  label: string;
  sub?: string;
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
    <DiagramCard label="不正の規模 — 主要指標">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="2,461億円" label="累計売上過大計上額" sub="2018年8月〜2025年12月" />
        <StatCard value="99.7%" label="架空取引の割合" sub="広告代理事業の売上高" />
        <StatCard value="329億円" label="外部資金流出額" sub="循環取引による損失" />
        <StatCard value="約7年" label="不正継続期間" sub="2018年8月〜2025年12月" />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <StatCard value="650億円" label="のれん減損損失" />
        <StatCard value="500億円" label="純利益下方修正" />
        <StatCard value="2,700億円" label="売上高下方修正" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   2. 架空循環取引の仕組み — フロー図
   ───────────────────────────────────────────── */
export function KddiFraudMechanismDiagram() {
  const steps = [
    { num: "01", label: "架空発注", detail: "実在しない広告案件の発注書を作成", color: "#ef4444" },
    { num: "02", label: "上流代理店", detail: "架空の広告枠を「仕入れ」として計上", color: "#f97316" },
    { num: "03", label: "G-Plan/BIGLOBE", detail: "仲介手数料を売上として計上", color: "#3b82f6" },
    { num: "04", label: "下流代理店", detail: "架空の成果報酬を「売上」として計上", color: "#f97316" },
    { num: "05", label: "資金循環", detail: "支払いサイトの差を利用して資金を回転", color: "#ef4444" },
  ];

  return (
    <DiagramCard label="架空循環取引のスキーム">
      <div className="mt-3 space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold tabular-nums" style={{ backgroundColor: `${step.color}10`, color: step.color }}>
              {step.num}
            </div>
            <div className="flex-1 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
              <div className="text-[12px] font-bold text-foreground/70">{step.label}</div>
              <div className="text-[11px] text-foreground/40 mt-0.5">{step.detail}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 w-4 text-center text-foreground/15 text-lg">↓</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-[#ef4444]/[0.04] border border-[#ef4444]/10">
        <div className="text-[11px] text-[#ef4444]/60 font-medium">
          悪循環の構造：取引金額は循環するたびに雪だるま式に膨張。グループファイナンス（社内融資）が初期資金として投入され、不正の規模拡大を助長した。
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
    { category: "人的要因", issue: "業務の属人化", detail: "A氏に広告代理事業を「丸投げ」、職務分離の欠如", severity: "致命的" },
    { category: "プロセス", issue: "実在性確認の欠如", detail: "書面の整合性のみで承認、広告配信実績の裏付けなし", severity: "致命的" },
    { category: "財務管理", issue: "キャッシュフロー監視の空白", detail: "売上・利益は管理するもCFの異常検知なし", severity: "重大" },
    { category: "与信管理", issue: "取引先審査の形骸化", detail: "実態の乏しい企業が取引チェーンに存在", severity: "重大" },
    { category: "内部監査", issue: "形式的な監査", detail: "取引実態に踏み込んだ検証が行われず", severity: "重大" },
    { category: "グループ管理", issue: "子会社への「放任」", detail: "親会社KDDIの子会社管理体制の不備", severity: "構造的" },
  ];

  const severityColor: Record<string, string> = {
    "致命的": "#ef4444",
    "重大": "#f97316",
    "構造的": "#8b5cf6",
  };

  return (
    <DiagramCard label="7年間見過ごされた構造的要因">
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
                {f.severity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-foreground/30 font-medium">{f.category}</span>
                <span className="text-[12px] font-bold text-foreground/70">{f.issue}</span>
              </div>
              <div className="text-[11px] text-foreground/40 mt-0.5">{f.detail}</div>
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
    { item: "連結売上高（予想）", before: "6兆3,300億円", after: "6兆600億円", diff: "▲2,700億円" },
    { item: "連結純利益（予想）", before: "7,480億円", after: "6,980億円", diff: "▲500億円" },
    { item: "のれん減損損失", before: "—", after: "約650億円", diff: "—" },
    { item: "外部資金流出", before: "—", after: "329億円", diff: "—" },
  ];

  return (
    <DiagramCard label="2026年3月期 業績予想修正">
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-left py-2.5 pr-3 font-semibold text-foreground/50">項目</th>
              <th className="text-right py-2.5 px-3 font-semibold text-foreground/50">修正前</th>
              <th className="text-right py-2.5 px-3 font-semibold text-foreground/50">修正後</th>
              <th className="text-right py-2.5 pl-3 font-semibold text-[#ef4444]/60">増減</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-foreground/[0.03]">
                <td className="py-2.5 pr-3 text-foreground/60 font-medium">{r.item}</td>
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
          株価影響：発表翌営業日に前日比141円安（2,582.5円）。ただし通信本業の堅調さから限定的な下落にとどまった。
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
    { who: "A氏（主導者）", role: "ジー・プラン ソリューション営業ビジネス部長", action: "懲戒解雇", level: "最重" },
    { who: "B氏（加担者）", role: "ジー・プラン 社員", action: "懲戒解雇", level: "最重" },
    { who: "ビッグローブ社長ほか", role: "子会社役員 6名", action: "引責辞任", level: "重" },
    { who: "髙橋誠 会長", role: "KDDI 取締役会長", action: "月例報酬30%×3カ月返納", level: "中" },
    { who: "松田浩路 社長CEO", role: "KDDI 代表取締役社長", action: "月例報酬30%×3カ月返納", level: "中" },
    { who: "その他取締役 6名", role: "KDDI 経営陣", action: "月例報酬返納（一部）", level: "軽" },
  ];

  const levelColor: Record<string, string> = {
    "最重": "#ef4444",
    "重": "#f97316",
    "中": "#eab308",
    "軽": "#6b7280",
  };

  return (
    <DiagramCard label="処分・経営責任の一覧">
      <div className="mt-3 space-y-2">
        {actions.map((a, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div
              className="flex-shrink-0 w-2 h-8 rounded-full"
              style={{ backgroundColor: levelColor[a.level] }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] font-bold text-foreground/70">{a.who}</span>
                <span className="text-[10px] text-foreground/30">{a.role}</span>
              </div>
              <div className="text-[11px] text-foreground/50 mt-0.5 font-medium">{a.action}</div>
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
    { icon: "🔍", title: "取引先・与信管理の見直し", detail: "信用調査基準の厳格化と定期モニタリング体制の構築" },
    { icon: "📋", title: "内部監査体制の強化", detail: "子会社含む監査の頻度・深度拡大、サブスタンティブテスト導入" },
    { icon: "💰", title: "グループファイナンス審議強化", detail: "申請・審議・実行の各段階で複数承認者による牽制機能" },
    { icon: "📢", title: "内部通報制度の再整備", detail: "グループ全体での認知向上・利用促進・通報者保護の実効化" },
    { icon: "🏛️", title: "ガバナンス強化対策会議", detail: "全社横断的な会議体を新設し子会社管理の枠組みを再構築" },
    { icon: "📚", title: "不正リスク教育プログラム", detail: "KDDIフィロソフィの浸透活動と不正リスク対応の教育導入" },
  ];

  return (
    <DiagramCard label="再発防止策 — 6つの柱">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {measures.map((m, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-base">{m.icon}</span>
              <span className="text-[12px] font-bold text-foreground/70">{m.title}</span>
            </div>
            <div className="text-[11px] text-foreground/40 leading-relaxed">{m.detail}</div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
