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

export function NaphthaPriceContextDiagram() {
  return (
    <DiagramCard title="国産ナフサ価格の急騰（前月比比較）">
      <div className="flex items-end gap-6 justify-center">
        <div className="text-center">
          <div className="rounded-lg bg-foreground/[0.06] px-4 py-3 mb-2">
            <p className="text-[28px] font-black tabular-nums text-foreground/60">¥87,917</p>
            <p className="text-[11px] text-foreground/40">円/KL</p>
          </div>
          <p className="text-[12px] text-foreground/50">2026年5月前半入着</p>
        </div>
        <div className="text-center text-[24px] font-black text-[#ef4444] mb-6">→</div>
        <div className="text-center">
          <div className="rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 px-4 py-3 mb-2">
            <p className="text-[28px] font-black tabular-nums text-[#ef4444]">¥122,058</p>
            <p className="text-[11px] text-[#ef4444]/60">円/KL</p>
          </div>
          <p className="text-[12px] text-foreground/50">2026年6月前半入着</p>
        </div>
      </div>
      <div className="mt-4 text-center rounded-xl bg-[#ef4444]/5 p-3">
        <p className="text-[20px] font-black text-[#ef4444]">前月比 +38.8%（+¥34,141/KL）</p>
        <p className="text-[12px] text-foreground/50 mt-1">中東危機長期化による原油高＋円安のダブルインパクト</p>
      </div>
    </DiagramCard>
  );
}

export function NaphthaIndustryImpactDiagram() {
  const layers = [
    { layer: "第1層（直接影響）", companies: "三菱ケミカル・住友化学・三井化学・旭化成・東ソー", impact: "エチレンセンター製造コスト即時上昇" },
    { layer: "第2層（連鎖影響）", companies: "汎用樹脂・合成繊維メーカー", impact: "エチレン・プロピレン購入コスト上昇" },
    { layer: "第3層（最終影響）", companies: "プラスチック加工品・包装材メーカー", impact: "原材料コスト増が最終製品価格に波及" },
  ];
  return (
    <DiagramCard title="石化バリューチェーンへの影響連鎖">
      <div className="space-y-2">
        {layers.map((l) => (
          <div key={l.layer} className="rounded-xl border border-foreground/[0.06] p-4">
            <p className="text-[12px] font-bold text-[#f97316]">{l.layer}</p>
            <p className="mt-1 text-[12px] text-foreground/65">{l.companies}</p>
            <p className="mt-1 text-[11px] text-foreground/45">{l.impact}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function NaphthaPriceTransferDiagram() {
  return (
    <DiagramCard title="価格転嫁の現実 — 企業規模別の差">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[#22c55e]/20 p-4">
          <p className="text-[12px] font-semibold text-[#22c55e]">大手・中堅企業</p>
          <p className="mt-2 text-[12px] text-foreground/60">原料価格連動条項で自動転嫁。ただし1〜3ヶ月のタイムラグで一時的に利益圧迫</p>
        </div>
        <div className="rounded-xl border border-[#ef4444]/20 p-4">
          <p className="text-[12px] font-semibold text-[#ef4444]">中小・零細加工業者</p>
          <p className="mt-2 text-[12px] text-foreground/60">発注元からの値上げ交渉拒否に苦しむ。急騰への即時転嫁は困難</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] text-foreground/50 bg-foreground/[0.03] rounded-lg p-3">2026年7〜9月期決算に大きく影響。「価格転嫁完了のタイムライン」が決算注目点</p>
    </DiagramCard>
  );
}

export function NaphthaAlternativesDiagram() {
  return (
    <DiagramCard title="代替原料・省ナフサ技術への動き">
      <div className="space-y-2">
        {[
          { name: "天然ガス系原料（エタン・プロパン）", detail: "米国産シェールガス由来のエタンクラッカー。コスト低・CO2減。三菱ケミカルが拡大中", status: "商業化済み" },
          { name: "バイオ原料", detail: "植物由来バイオエチレン。ナフサ原料の2〜3倍コストが課題", status: "普及段階" },
          { name: "ケミカルリサイクル", detail: "廃プラを化学分解してナフサ相当油を回収。商業化段階に近い", status: "開発段階" },
        ].map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-2 rounded-lg border border-foreground/[0.05] p-3">
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-foreground">{item.name}</p>
              <p className="mt-0.5 text-[11px] text-foreground/50">{item.detail}</p>
            </div>
            <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-foreground/[0.06] text-foreground/50">{item.status}</span>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function NaphthaStrategicViewDiagram() {
  return (
    <DiagramCard title="日本石化業界の構造的課題">
      <div className="space-y-2">
        {[
          { issue: "原料調達の地理的集中リスク", detail: "中東産ナフサ依存→ホルムズリスクが直撃" },
          { issue: "汎用品からの脱却の遅さ", detail: "中国・韓国との価格競争で構造的に不利" },
          { issue: "設備老朽化と集約遅れ", detail: "高度成長期建設のエチレンセンターの更新コスト" },
        ].map((c) => (
          <div key={c.issue} className="flex gap-2 items-start rounded-lg border border-foreground/[0.05] p-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#f97316] mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-[12px] font-semibold text-foreground">{c.issue}</p>
              <p className="text-[11px] text-foreground/50">{c.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
