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

export function IeepaRulingTimelineDiagram() {
  const events = [
    { date: "2025年4月", event: "トランプ政権がIEEPA根拠の「相互関税」を発動" },
    { date: "2025年5月〜", event: "90日間停止・一部継続と関税率が激変" },
    { date: "2026年4月上旬", event: "米連邦控訴裁判所「IEEPAに関税賦課権限なし」と判決" },
    { date: "2026年4月20日", event: "CBPが関税還付処理を開始（還付総額試算1,660億ドル）" },
    { date: "2026年4月下旬", event: "トランプ政権が最高裁へ上訴・還付停止仮処分申請" },
  ];
  return (
    <DiagramCard title="IEEPA関税判決 経緯タイムライン">
      <div className="space-y-0">
        {events.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#b9770e] mt-1.5" />
              {i < events.length - 1 && <div className="w-px flex-1 bg-foreground/[0.06] my-1" />}
            </div>
            <div className="pb-4">
              <p className="text-[11px] font-bold text-[#b9770e]">{e.date}</p>
              <p className="text-[12px] text-foreground/65">{e.event}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function IeepaJapanImpactDiagram() {
  return (
    <DiagramCard title="日本企業 — 還付対象の可能性がある分野">
      <div className="space-y-2">
        {[
          { sector: "電子部品・半導体", detail: "中国経由で米国輸出したデバイス類（IEEPA対象分）", likely: "対象可能性あり" },
          { sector: "鉄鋼・アルミ", detail: "Section 232（別法令）のため今回判決は非適用", likely: "対象外" },
          { sector: "自動車部品", detail: "中国製部品組込み製品の取り扱いは個別審査が必要", likely: "要確認" },
        ].map((item) => (
          <div key={item.sector} className="rounded-lg border border-foreground/[0.05] p-3 flex items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-semibold text-foreground">{item.sector}</p>
              <p className="mt-0.5 text-[11px] text-foreground/50">{item.detail}</p>
            </div>
            <span className={`flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${item.likely === "対象外" ? "bg-foreground/[0.05] text-foreground/40" : item.likely === "要確認" ? "bg-[#f59e0b]/10 text-[#f59e0b]" : "bg-[#22c55e]/10 text-[#22c55e]"}`}>{item.likely}</span>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function IeepaLegalProcessDiagram() {
  return (
    <DiagramCard title="法廷闘争の行方 — スケジュール予測">
      <div className="grid grid-cols-2 gap-3">
        {[
          { phase: "現在〜2026年秋", status: "還付処理継続中・仮処分審理中", note: "実務上の混乱が継続" },
          { phase: "2026年秋〜冬", status: "最高裁審理開始", note: "口頭弁論・書面提出" },
          { phase: "2027年前半", status: "最高裁判決", note: "IEEPA課税権限の最終判断" },
          { phase: "判決後", status: "還付確定 or 追徴確定", note: "企業の会計処理が確定" },
        ].map((p) => (
          <div key={p.phase} className="rounded-xl border border-foreground/[0.06] p-3">
            <p className="text-[11px] font-bold text-[#b9770e]">{p.phase}</p>
            <p className="text-[12px] font-semibold text-foreground mt-1">{p.status}</p>
            <p className="text-[11px] text-foreground/45 mt-0.5">{p.note}</p>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

export function IeepaStrategicViewDiagram() {
  return (
    <DiagramCard title="日本企業へのアクション推奨">
      <div className="space-y-2">
        {[
          { action: "法務・税務チームで還付対象確認", detail: "費用対効果が合えばCBPへの還付申請準備を開始" },
          { action: "価格フレキシビリティの確保", detail: "短期的な関税変動を前提にした契約体制への移行" },
          { action: "米国内製造・調達シフトの長期検討", detail: "判決結果に関わらず政治環境の不確実性は継続" },
        ].map((item, i) => (
          <div key={i} className="flex gap-3 rounded-xl border border-foreground/[0.06] p-4">
            <span className="text-[18px] font-black text-foreground/15">{i + 1}</span>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{item.action}</p>
              <p className="mt-0.5 text-[12px] text-foreground/55">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}
