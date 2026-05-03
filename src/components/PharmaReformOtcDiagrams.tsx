"use client";
import React from "react";

function DiagramCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={title} className="my-8 rounded-2xl border border-brief-border bg-brief-card p-6">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2px] text-foreground/40">{title}</p>
      {children}
    </div>
  );
}

export function PharmaReformOverviewDiagram() {
  return (
    <DiagramCard title="改正薬機法 主な変更点（2026年5月1日施行）">
      <div className="space-y-3">
        {[
          { title: "対象成分 6→8に拡大", detail: "デキストロメトルファン・ジフェンヒドラミンを追加", badge: "拡大", color: "#f97316" },
          { title: "「努力義務」→「法的義務」へ格上げ", detail: "違反時は業務停止命令等の罰則が適用される", badge: "強化", color: "#ef4444" },
          { title: "対面・テレビ電話販売の義務化", detail: "セルフレジ・無人販売は禁止。EC購入もビデオ通話必須", badge: "新設", color: "#059669" },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 rounded-xl border border-foreground/[0.06] p-4">
            <span className="flex-shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: item.color }}>{item.badge}</span>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{item.title}</p>
              <p className="mt-0.5 text-[12px] text-foreground/55">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function PharmaReformProductsDiagram() {
  const ingredients = [
    { name: "エフェドリン", products: "鼻炎薬・総合感冒薬" },
    { name: "コデイン", products: "咳止め・総合感冒薬" },
    { name: "ジヒドロコデイン", products: "咳止め薬" },
    { name: "ブロムワレリル尿素", products: "鎮静・睡眠補助" },
    { name: "プソイドエフェドリン", products: "鼻炎薬・充血除去薬" },
    { name: "メチルエフェドリン", products: "気管支拡張薬・喘息薬" },
    { name: "デキストロメトルファン ★新", products: "咳止め薬（ブロン等）" },
    { name: "ジフェンヒドラミン ★新", products: "睡眠改善薬（ドリエル等）" },
  ];
  return (
    <DiagramCard title="指定濫用防止医薬品 8成分（★は2026年5月追加）">
      <div className="grid grid-cols-2 gap-2">
        {ingredients.map((ing) => (
          <div key={ing.name} className={`rounded-lg border p-2.5 ${ing.name.includes("★") ? "border-[#059669]/30 bg-[#059669]/[0.04]" : "border-foreground/[0.05]"}`}>
            <p className={`text-[12px] font-semibold ${ing.name.includes("★") ? "text-[#059669]" : "text-foreground"}`}>{ing.name}</p>
            <p className="text-[11px] text-foreground/45">{ing.products}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function PharmaReformSalesMethodDiagram() {
  return (
    <DiagramCard title="改正後の販売方法 — 旧・新比較">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-foreground/[0.08] p-4">
          <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider">改正前（〜2026/4/30）</p>
          <div className="mt-2 space-y-1 text-[12px] text-foreground/60">
            <p>✓ セルフレジ販売可（努力義務のみ）</p>
            <p>✓ EC無人購入可</p>
            <p>✓ 記録保存は任意</p>
          </div>
        </div>
        <div className="rounded-xl border border-[#059669]/30 bg-[#059669]/[0.03] p-4">
          <p className="text-[11px] font-bold text-[#059669] uppercase tracking-wider">改正後（2026/5/1〜）</p>
          <div className="mt-2 space-y-1 text-[12px] text-foreground/70">
            <p>✗ セルフレジ販売禁止</p>
            <p>✗ EC無人購入禁止（ビデオ通話必須）</p>
            <p>✓ 購入者確認・記録保存が義務</p>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}

export function PharmaReformComplianceDiagram() {
  return (
    <DiagramCard title="違反リスクと行政対応の変化">
      <div className="space-y-2">
        {[
          { phase: "改正前", risk: "省令通知ベースの努力義務。重大ケース以外は「指導・勧告」が中心" },
          { phase: "改正後", risk: "薬機法本体に明記。都道府県が直接「改善命令・業務停止命令」を発動できる根拠が明確化" },
        ].map((item) => (
          <div key={item.phase} className="rounded-xl border border-foreground/[0.06] p-4">
            <p className="text-[12px] font-bold text-[#059669]">{item.phase}</p>
            <p className="mt-1 text-[12px] text-foreground/60">{item.risk}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-foreground/50 bg-foreground/[0.03] rounded-lg p-3">初動は段階的指導が中心だが「知らなかった」では通用しない法的根拠が整備された</p>
    </DiagramCard>
  );
}

export function PharmaReformStrategicDiagram() {
  return (
    <DiagramCard title="事業者別 今すぐ対応すべきアクション">
      <div className="space-y-2">
        {[
          { entity: "ドラッグストア", action: "POSシステム・棚割り反映、スタッフ研修、対面確認オペレーション設計" },
          { entity: "コンビニ", action: "深夜・ワンオペ時の対応フロー設計（販売時間帯の限定も選択肢）" },
          { entity: "ECサイト", action: "ビデオ通話フローの実装コスト試算→対応か取り扱い停止かを早急に判断" },
          { entity: "全事業者共通", action: "消費者への変更告知コミュニケーション（「面倒になった」印象の最小化）" },
        ].map((item) => (
          <div key={item.entity} className="flex gap-3 rounded-lg border border-foreground/[0.05] p-3">
            <span className="flex-shrink-0 text-[11px] font-bold text-white bg-[#059669] rounded-md px-2 py-0.5 h-fit">{item.entity}</span>
            <p className="text-[12px] text-foreground/65">{item.action}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
