"use client";

import { T } from "@/components/T";

/* ─────────────────────────────────────────────
   AI Agent Market 2026 Diagrams
   ───────────────────────────────────────────── */

export function AiAgentMarketScaleDiagram() {
  const data = [
    { year: "2024", value: 52, color: "#94a3b8" },
    { year: "2025", value: 76, color: "#64748b" },
    { year: "2026", value: 109, color: "#8b5cf6" },
    { year: "2027*", value: 157, color: "#7c3aed" },
    { year: "2030*", value: 503, color: "#6d28d9" },
  ];
  const max = 503;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Global AI agent market size growth chart"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="グローバルAIエージェント市場規模推移" en="Global AI Agent Market Size Growth" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="億ドル単位 / CAGR 45.8% / *予測値" en="In $100M / CAGR 45.8% / *Projected" />
      </div>

      <div className="flex items-end gap-2 h-36">
        {data.map((d) => (
          <div key={d.year} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[9px] font-bold" style={{ color: d.color }}>
              ${d.value}B
            </span>
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${(d.value / max) * 100}%`,
                minHeight: "6px",
                backgroundColor: d.color,
                opacity: d.year.includes("*") ? 0.6 : 1,
              }}
            />
            <span className="text-[9px] text-foreground/50">{d.year}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: "本番稼働企業", labelEn: "Enterprises live", value: "51%", color: "#8b5cf6" },
          { label: "スケールアップ中", labelEn: "Scaling up", value: "23%", color: "#3b82f6" },
          { label: "年3ROI", labelEn: "Year-3 ROI", value: "+124%", color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="p-2.5 rounded-lg bg-foreground/[0.03] text-center">
            <div className="text-[15px] font-bold" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-[9px] text-foreground/50 mt-0.5">
              <T ja={s.label} en={s.labelEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: ringly.io / demandsage.com / onereach.ai (2026)" en="Source: ringly.io / demandsage.com / onereach.ai (2026)" />
      </div>
    </div>
  );
}

export function AiAgentUseCasesDiagram() {
  const cases = [
    {
      company: "ヒースロー空港",
      companyEn: "Heathrow Airport",
      agent: "Hallie (Agentforce)",
      result: "顧客対応70%自動化",
      resultEn: "70% customer inquiries automated",
      color: "#10b981",
    },
    {
      company: "Microsoft 365",
      companyEn: "Microsoft 365",
      agent: "Copilot",
      result: "30万人規模展開",
      resultEn: "300K-person enterprise deployment",
      color: "#3b82f6",
    },
    {
      company: "NVIDIA GTC 2026",
      companyEn: "NVIDIA GTC 2026",
      agent: "Agent Platform",
      result: "17社が採用発表",
      resultEn: "17 enterprises announced adoption",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI agent enterprise use case examples"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年 注目導入事例" en="2026 Notable Enterprise AI Agent Cases" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="「エージェント常駐」の具体的な成果" en="Concrete results from always-on AI agents" />
      </div>

      <div className="space-y-3">
        {cases.map((c) => (
          <div
            key={c.company}
            className="p-4 rounded-lg"
            style={{ borderLeft: `3px solid ${c.color}`, backgroundColor: `${c.color}08` }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <div className="text-[12px] font-bold text-foreground/80">
                  <T ja={c.company} en={c.companyEn} />
                </div>
                <div className="text-[10px] text-foreground/45 mt-0.5">{c.agent}</div>
              </div>
              <div
                className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${c.color}20`, color: c.color }}
              >
                <T ja={c.result} en={c.resultEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Salesforce / Microsoft / NVIDIA 各社発表 (2026)" en="Source: Salesforce / Microsoft / NVIDIA announcements (2026)" />
      </div>
    </div>
  );
}

export function AiAgentEnterpriseRoadmapDiagram() {
  const domains = [
    { domain: "営業支援", domainEn: "Sales Support", tasks: "リード評価・メール生成・次アクション提案", tasksEn: "Lead scoring, email drafting, next-action suggestions", pct: 2026, color: "#10b981" },
    { domain: "IT運用", domainEn: "IT Ops", tasks: "チケット分類・初期対応・ルーティング", tasksEn: "Ticket classification, initial response, routing", pct: 2026, color: "#3b82f6" },
    { domain: "財務処理", domainEn: "Finance", tasks: "請求書照合・承認ワークフロー・異常検知", tasksEn: "Invoice matching, approval workflow, anomaly detection", pct: 2026, color: "#f59e0b" },
    { domain: "HR", domainEn: "HR", tasks: "面接スケジューリング・オンボーディング案内", tasksEn: "Interview scheduling, onboarding guidance", pct: 2026, color: "#8b5cf6" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Enterprise AI agent deployment roadmap by domain"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="2026年末：企業アプリの40%にエージェント組み込み予測" en="By End 2026: 40% of Enterprise Apps to Include AI Agents" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="業務領域別の浸透状況（2025: 5%未満 → 2026末: 40%予測）" en="Penetration by domain (2025: below 5% → End 2026: 40% projected)" />
      </div>

      <div className="space-y-2.5">
        {domains.map((d) => (
          <div key={d.domain} className="p-3 rounded-lg bg-foreground/[0.02] border border-foreground/[0.04]">
            <div className="flex items-start justify-between gap-2 mb-1.5 flex-wrap">
              <span className="text-[11px] font-bold" style={{ color: d.color }}>
                <T ja={d.domain} en={d.domainEn} />
              </span>
              <span className="text-[8px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: `${d.color}15`, color: d.color }}>
                2026
              </span>
            </div>
            <div className="text-[10px] text-foreground/55">
              <T ja={d.tasks} en={d.tasksEn} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-[#8b5cf6]/[0.06] border border-[#8b5cf6]/15">
        <div className="text-[10px] text-[#8b5cf6] font-semibold mb-1">Gartner 予測</div>
        <div className="text-[11px] text-foreground/65">
          <T
            ja="2025年末の5%未満から2026年末までに40%へ。マネジャー層の意思決定支援へと拡張。"
            en="From below 5% at end-2025 to 40% by end-2026. Expanding into manager-level decision support."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Gartner 2026予測 (2026-04)" en="Source: Gartner 2026 forecast (April 2026)" />
      </div>
    </div>
  );
}

export function AiAgentVendorRiskDiagram() {
  const vendors = [
    { name: "Salesforce Agentforce", lock: 88, color: "#10b981" },
    { name: "Microsoft Copilot", lock: 85, color: "#3b82f6" },
    { name: "NVIDIA Agent Toolkit", lock: 72, color: "#f59e0b" },
    { name: "OpenAI Agents SDK", lock: 60, color: "#ec4899" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI agent vendor lock-in risk assessment"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="ベンダーロックインリスク評価" en="Vendor Lock-in Risk Assessment" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="スイッチングコストの相対的な高さ（100=移行コスト最大）" en="Relative switching cost (100 = highest migration cost)" />
      </div>

      <div className="space-y-4">
        {vendors.map((v) => (
          <div key={v.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium text-foreground/70">{v.name}</span>
              <span className="text-[11px] font-bold" style={{ color: v.color }}>
                {v.lock} / 100
              </span>
            </div>
            <div className="h-4 bg-foreground/[0.05] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${v.lock}%`, backgroundColor: v.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-red-500/[0.06] border border-red-500/15">
        <div className="text-[10px] text-red-500 font-semibold mb-1">
          <T ja="クラウドより深刻なロックイン" en="Lock-in More Serious Than Cloud" />
        </div>
        <div className="text-[11px] text-foreground/60">
          <T
            ja="社内データ・業務フロー・System Prompt・承認ポリシーが複雑に絡み合い、移行コストは当初導入コストを上回る可能性がある。"
            en="Internal data, workflows, system prompts, and approval policies intertwine, making migration costs potentially exceed initial deployment costs."
          />
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: EnterpriseAI Landscape / The Brief編集部分析 (2026-04)" en="Source: EnterpriseAI Landscape / The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}

export function AiAgentJapanMarketDiagram() {
  const data = [
    { year: "2024", value: 2.5, color: "#94a3b8" },
    { year: "2026*", value: 6.1, color: "#8b5cf6" },
    { year: "2028*", value: 12.4, color: "#7c3aed" },
    { year: "2030*", value: 24.3, color: "#6d28d9" },
  ];
  const max = 24.3;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Japan AI agent market growth forecast"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="日本AIエージェント市場予測" en="Japan AI Agent Market Forecast" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="億ドル単位 / CAGR 46.3% / *予測値" en="In $100M / CAGR 46.3% / *Projected" />
      </div>

      <div className="flex items-end gap-3 h-28 mb-4">
        {data.map((d) => (
          <div key={d.year} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[9px] font-bold" style={{ color: d.color }}>
              ${d.value}B
            </span>
            <div
              className="w-full rounded-t"
              style={{
                height: `${(d.value / max) * 100}%`,
                minHeight: "6px",
                backgroundColor: d.color,
                opacity: d.year.includes("*") ? 0.7 : 1,
              }}
            />
            <span className="text-[9px] text-foreground/50">{d.year}</span>
          </div>
        ))}
      </div>

      <div className="text-[10px] font-semibold text-foreground/50 mb-2">
        <T ja="主要活用領域と導入障壁" en="Key Use Cases and Adoption Barriers" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-foreground/[0.03]">
          <div className="text-[9px] text-foreground/40 mb-1.5">
            <T ja="活用領域" en="Use Cases" />
          </div>
          {["製造業・設備監視", "金融・ローン審査", "ヘルスケア・カルテ"].map((item) => (
            <div key={item} className="text-[10px] text-foreground/60 flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] flex-shrink-0" />
              <T ja={item} en={item} />
            </div>
          ))}
        </div>
        <div className="p-2.5 rounded-lg bg-red-500/[0.04]">
          <div className="text-[9px] text-red-400/70 mb-1.5">
            <T ja="導入障壁" en="Barriers" />
          </div>
          <div className="text-[11px] font-bold text-red-400 mb-1">51%</div>
          <div className="text-[10px] text-foreground/55">
            <T ja="情報漏洩リスクを懸念" en="Concerned about data leak risks" />
          </div>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: Grand View Research / SB OAI Japan (2026)" en="Source: Grand View Research / SB OAI Japan (2026)" />
      </div>
    </div>
  );
}

export function AiAgentSuccessFactorsDiagram() {
  const factors = [
    { rank: "1", item: "業務オーナーの明確化", itemEn: "Clear business ownership", desc: "「誰が・何を・どの基準で管理するか」を設計", descEn: "Design 'who, what, and by what standard to manage'", color: "#10b981" },
    { rank: "2", item: "エラー修正フローの定義", itemEn: "Defined error correction flow", desc: "エージェント誤処理時の人間介入プロセス", descEn: "Human intervention process for agent errors", color: "#3b82f6" },
    { rank: "3", item: "コンプライアンス確認体制", itemEn: "Compliance verification system", desc: "人間確認の省略によるリスクを事前設計", descEn: "Pre-designed risk management for skipping human checks", color: "#f59e0b" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI agent deployment success factors"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="エージェント導入成功の3条件" en="3 Conditions for Successful Agent Deployment" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="McKinsey 2026年3月レポートより——成果を上げた企業の共通点" en="From McKinsey March 2026 report — common traits of successful companies" />
      </div>

      <div className="space-y-3">
        {factors.map((f) => (
          <div
            key={f.rank}
            className="flex gap-3 p-3.5 rounded-lg"
            style={{ borderLeft: `3px solid ${f.color}`, backgroundColor: `${f.color}06` }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 mt-0.5"
              style={{ backgroundColor: `${f.color}20`, color: f.color }}
            >
              {f.rank}
            </div>
            <div>
              <div className="text-[12px] font-bold text-foreground/80 mb-0.5">
                <T ja={f.item} en={f.itemEn} />
              </div>
              <div className="text-[10px] text-foreground/55">
                <T ja={f.desc} en={f.descEn} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: McKinsey Global Institute (2026-03)" en="Source: McKinsey Global Institute (March 2026)" />
      </div>
    </div>
  );
}

export function AiAgentFutureOutlookDiagram() {
  const dimensions = [
    { label: "標準化プロセス", labelEn: "Standardized processes", agent: 90, human: 10, color: "#10b981" },
    { label: "データ分析・レポート", labelEn: "Data analysis & reporting", agent: 75, human: 25, color: "#8b5cf6" },
    { label: "顧客対応（標準）", labelEn: "Standard customer service", agent: 70, human: 30, color: "#3b82f6" },
    { label: "交渉・折衝", labelEn: "Negotiation", agent: 20, human: 80, color: "#f59e0b" },
    { label: "倫理的判断", labelEn: "Ethical judgment", agent: 10, human: 90, color: "#ec4899" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="AI vs human optimal task allocation matrix"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        <T ja="エージェント vs 人間：最適タスク配分マトリクス" en="Agent vs Human: Optimal Task Allocation Matrix" />
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        <T ja="「何を自動化すべきか」の判断基準" en="Framework for deciding 'what should be automated'" />
      </div>

      <div className="space-y-2.5">
        {dimensions.map((d) => (
          <div key={d.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-foreground/65">
                <T ja={d.label} en={d.labelEn} />
              </span>
              <div className="flex items-center gap-2 text-[9px]">
                <span style={{ color: d.color }}>AI {d.agent}%</span>
                <span className="text-foreground/40">|</span>
                <span className="text-foreground/50">人 {d.human}%</span>
              </div>
            </div>
            <div className="h-3 bg-foreground/[0.05] rounded-full overflow-hidden flex">
              <div
                className="h-full rounded-l-full"
                style={{ width: `${d.agent}%`, backgroundColor: d.color }}
              />
              <div
                className="h-full flex-1 bg-foreground/20 rounded-r-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-[9px]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#10b981]" />
          <span className="text-foreground/50"><T ja="エージェント担当" en="Agent-handled" /></span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-foreground/20" />
          <span className="text-foreground/50"><T ja="人間担当" en="Human-handled" /></span>
        </div>
      </div>

      <div className="mt-3 text-[9px] text-foreground/35">
        <T ja="出典: The Brief編集部分析 (2026-04)" en="Source: The Brief editorial analysis (April 2026)" />
      </div>
    </div>
  );
}
