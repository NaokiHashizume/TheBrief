"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  labelJa,
  labelEn,
  children,
}: {
  labelJa: string;
  labelEn: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${labelJa}`}>
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#64748b]/40 font-semibold">
          <T ja={labelJa} en={labelEn} />
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

/* ─── Small stat card ─── */
function StatCard({
  value,
  labelJa,
  labelEn,
  subJa,
  subEn,
}: {
  value: string;
  labelJa: string;
  labelEn: string;
  subJa?: string;
  subEn?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">
        <T ja={labelJa} en={labelEn} />
      </div>
      {subJa && (
        <div className="text-[9px] text-foreground/25 mt-0.5">
          <T ja={subJa} en={subEn ?? subJa} />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Redevelopment Map — 主要再開発エリアマップ
   ───────────────────────────────────────────── */
export function RedevelopmentMapDiagram() {
  return (
    <DiagramCard labelJa="日本の主要再開発エリア — 2026年進行中" labelEn="Japan's major redevelopment areas — in progress 2026">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="50+" labelJa="東京都心の大規模案件" labelEn="Large-scale projects in central Tokyo" subJa="千代田・中央・港・渋谷・新宿" subEn="Chiyoda / Chuo / Minato / Shibuya / Shinjuku" />
        <StatCard value="10兆円+" labelJa="全国の総投資額" labelEn="Total nationwide investment" subJa="主要プロジェクト合計" subEn="Combined major projects" />
        <StatCard value="119万㎡" labelJa="2025年オフィス供給" labelEn="2025 office supply" subJa="東京都心 過去最大" subEn="Central Tokyo, record high" />
        <StatCard value="4都市" labelJa="同時進行の再開発" labelEn="Cities redeveloping in parallel" subJa="東京・大阪・名古屋・福岡" subEn="Tokyo / Osaka / Nagoya / Fukuoka" />
      </div>
      {/* City overview */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            <T ja="東京" en="Tokyo" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65"><T ja="品川・八重洲・日本橋・虎ノ門・渋谷" en="Shinagawa / Yaesu / Nihonbashi / Toranomon / Shibuya" /></div>
            <div className="text-[10px] text-foreground/35 mt-0.5"><T ja="高輪GWC全面開業、トーチタワー建設中、渋谷スクランブルスクエアII期" en="Takanawa Gateway City fully opens, Torch Tower under construction, Shibuya Scramble Square Phase II" /></div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            <T ja="大阪" en="Osaka" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65"><T ja="うめきた2期・夢洲・御堂筋・難波" en="Umekita Phase 2 / Yumeshima / Midosuji / Namba" /></div>
            <div className="text-[10px] text-foreground/35 mt-0.5"><T ja="グラングリーン大阪拡張、万博跡地IR着工、スーパーシティ構想" en="Grand Green Osaka expansion, IR groundbreaking on Expo site, Super City initiative" /></div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            <T ja="名古屋" en="Nagoya" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65"><T ja="名駅地区・名鉄再開発・駅前広場" en="Meieki district / Meitetsu redevelopment / station plaza" /></div>
            <div className="text-[10px] text-foreground/35 mt-0.5"><T ja="名鉄百貨店解体着工、駅4線化計画、リニア開業準備" en="Meitetsu Department Store demolition begins, four-track station plan, preparing for Linear Shinkansen" /></div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            <T ja="福岡" en="Fukuoka" />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65"><T ja="天神・博多駅周辺" en="Tenjin / Hakata Station area" /></div>
            <div className="text-[10px] text-foreground/35 mt-0.5"><T ja="天神ビッグバン終盤戦（93棟申請）、博多コネクティッド進行中" en="Tenjin Big Bang final stretch (93 buildings filed), Hakata Connected underway" /></div>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Tokyo Projects — 東京の主要プロジェクト一覧
   ───────────────────────────────────────────── */
export function TokyoProjectsDiagram() {
  const projects = [
    { name: "高輪ゲートウェイシティ", nameEn: "Takanawa Gateway City", area: "品川", areaEn: "Shinagawa", height: "—", floors: "30F", totalArea: "84.5万㎡", cost: "約5,800億円", costEn: "~¥580B", completion: "2026年3月", completionEn: "Mar 2026" },
    { name: "トーチタワー", nameEn: "Torch Tower", area: "日本橋", areaEn: "Nihonbashi", height: "385m", floors: "62F", totalArea: "54.4万㎡", cost: "約4,600億円", costEn: "~¥460B", completion: "2028年度", completionEn: "FY2028" },
    { name: "麻布台ヒルズ", nameEn: "Azabudai Hills", area: "虎ノ門", areaEn: "Toranomon", height: "325m", floors: "64F", totalArea: "86.2万㎡", cost: "約6,400億円", costEn: "~¥640B", completion: "完成済", completionEn: "Completed" },
    { name: "渋谷スクランブルスクエアII期", nameEn: "Shibuya Scramble Square Phase II", area: "渋谷", areaEn: "Shibuya", height: "—", floors: "—", totalArea: "—", cost: "—", costEn: "—", completion: "2027年度", completionEn: "FY2027" },
    { name: "日本橋一丁目中地区", nameEn: "Nihonbashi 1-chome Central District", area: "日本橋", areaEn: "Nihonbashi", height: "284m", floors: "52F", totalArea: "38.0万㎡", cost: "—", costEn: "—", completion: "2026年3月", completionEn: "Mar 2026" },
  ];

  return (
    <DiagramCard labelJa="東京の主要再開発プロジェクト" labelEn="Major redevelopment projects in Tokyo">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[580px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-0 pr-3 tracking-wide"><T ja="プロジェクト" en="Project" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="エリア" en="Area" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="高さ" en="Height" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="延床面積" en="Gross floor area" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide"><T ja="事業費" en="Project cost" /></th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-3 tracking-wide"><T ja="竣工" en="Completion" /></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pl-0 pr-3">
                  <span className="text-[12px] font-bold text-foreground/65"><T ja={p.name} en={p.nameEn} /></span>
                </td>
                <td className="py-3 px-3 text-[11px] text-foreground/45"><T ja={p.area} en={p.areaEn} /></td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50">{p.height}</td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50">{p.totalArea}</td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50"><T ja={p.cost} en={p.costEn} /></td>
                <td className="py-3 pl-3 text-[10px] text-foreground/35 font-medium"><T ja={p.completion} en={p.completionEn} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Osaka/Nagoya/Fukuoka Projects
   ───────────────────────────────────────────── */
export function OsakaProjectsDiagram() {
  const projects = [
    { city: "大阪", cityEn: "Osaka", name: "グラングリーン大阪（うめきた2期）", nameEn: "Grand Green Osaka (Umekita Phase 2)", scale: "約9.1ha", scaleEn: "~9.1 ha", status: "先行開業済・段階拡大中", statusEn: "Partially open, expanding in phases", target: "2027年全体完成", targetEn: "Full completion 2027" },
    { city: "大阪", cityEn: "Osaka", name: "大阪IR（夢洲）", nameEn: "Osaka IR (Yumeshima)", scale: "約50ha（跡地全体）", scaleEn: "~50 ha (entire site)", status: "2025年夏着工", statusEn: "Broke ground summer 2025", target: "2030年夏開業", targetEn: "Open summer 2030" },
    { city: "名古屋", cityEn: "Nagoya", name: "名鉄名古屋駅地区再開発", nameEn: "Meitetsu Nagoya Station area redevelopment", scale: "南北約400m", scaleEn: "~400m north–south", status: "2026年度解体着工", statusEn: "Demolition begins FY2026", target: "2033年度1期竣工", targetEn: "Phase 1 completion FY2033" },
    { city: "名古屋", cityEn: "Nagoya", name: "名古屋駅西側駅前広場", nameEn: "Nagoya Station west plaza", scale: "—", scaleEn: "—", status: "段階整備中", statusEn: "Phased development underway", target: "リニア開業時完成", targetEn: "Completion at Linear Shinkansen opening" },
    { city: "福岡", cityEn: "Fukuoka", name: "天神ビッグバン", nameEn: "Tenjin Big Bang", scale: "天神エリア全域", scaleEn: "Entire Tenjin district", status: "74棟竣工済", statusEn: "74 buildings completed", target: "2026年末期限", targetEn: "Deadline end of 2026" },
    { city: "福岡", cityEn: "Fukuoka", name: "博多コネクティッド", nameEn: "Hakata Connected", scale: "博多駅周辺", scaleEn: "Hakata Station area", status: "進行中", statusEn: "In progress", target: "2028年以降順次", targetEn: "Sequential completions from 2028" },
  ];

  return (
    <DiagramCard labelJa="大阪・名古屋・福岡の主要プロジェクト" labelEn="Major projects in Osaka, Nagoya and Fukuoka">
      <div className="space-y-2 mt-3">
        {projects.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
            <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.06] flex items-center justify-center text-[10px] font-bold text-[#64748b]/70 flex-shrink-0">
              <T ja={p.city} en={p.cityEn} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[12px] font-semibold text-foreground/65"><T ja={p.name} en={p.nameEn} /></div>
              <div className="flex flex-wrap items-center mt-1">
                <span className="text-[10px] text-foreground/35 mr-3"><T ja={p.scale} en={p.scaleEn} /></span>
                <span className="text-[10px] text-foreground/35 mr-3"><T ja={p.status} en={p.statusEn} /></span>
                <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#64748b]/[0.06] text-[#64748b]/60 font-medium"><T ja={p.target} en={p.targetEn} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Investment Scale — 投資規模の比較
   ───────────────────────────────────────────── */
export function InvestmentScaleDiagram() {
  const data = [
    { name: "麻布台ヒルズ", nameEn: "Azabudai Hills", cost: 6400, barWidth: "100%" },
    { name: "高輪ゲートウェイシティ", nameEn: "Takanawa Gateway City", cost: 5800, barWidth: "91%" },
    { name: "名鉄名古屋駅再開発", nameEn: "Meitetsu Nagoya Station redevelopment", cost: 5400, barWidth: "84%" },
    { name: "TOKYO TORCH", nameEn: "TOKYO TORCH", cost: 4600, barWidth: "72%" },
    { name: "グラングリーン大阪", nameEn: "Grand Green Osaka", cost: 3200, barWidth: "50%" },
    { name: "渋谷駅周辺再開発", nameEn: "Shibuya Station area redevelopment", cost: 2700, barWidth: "42%" },
  ];

  return (
    <DiagramCard labelJa="主要プロジェクト投資規模の比較（億円）" labelEn="Investment scale of major projects (¥100M)">
      <div className="space-y-3 mt-4">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-foreground/60"><T ja={d.name} en={d.nameEn} /></span>
              <span className="text-[11px] tabular-nums font-bold text-foreground/50">
                <T ja={`${d.cost.toLocaleString()}億円`} en={`¥${d.cost.toLocaleString()}00M`} />
              </span>
            </div>
            <div className="h-3 rounded-full bg-foreground/[0.04] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#64748b]/25"
                style={{ width: d.barWidth }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[9px] text-foreground/25 text-center">
        <T ja="※ 公表されている事業費ベース。一部推計を含む" en="* Based on disclosed project costs; includes some estimates" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Timeline — 完成スケジュール
   ───────────────────────────────────────────── */
export function TimelineDiagram() {
  const events = [
    { year: "2025", event: "高輪GWC街開き / グラングリーン大阪先行開業 / 麻布台ヒルズ全施設完成", eventEn: "Takanawa Gateway City town opening / Grand Green Osaka partial opening / Azabudai Hills fully complete" },
    { year: "2026", event: "高輪GWC全面開業 / 名鉄名古屋駅解体着工 / 天神ビッグバン期限", eventEn: "Takanawa Gateway City full opening / Meitetsu Nagoya Station demolition begins / Tenjin Big Bang deadline" },
    { year: "2027", event: "渋谷スクランブルスクエアII期竣工", eventEn: "Shibuya Scramble Square Phase II completed" },
    { year: "2028", event: "トーチタワー竣工（日本一385m）", eventEn: "Torch Tower completed (Japan's tallest at 385m)" },
    { year: "2030", event: "大阪IR開業 / グラングリーン大阪全体完成", eventEn: "Osaka IR opens / Grand Green Osaka fully complete" },
    { year: "2033", event: "名鉄名古屋駅1期竣工", eventEn: "Meitetsu Nagoya Station Phase 1 completed" },
    { year: "2040s", event: "名鉄名古屋駅2期完成（4線化）", eventEn: "Meitetsu Nagoya Station Phase 2 completed (four-track)" },
  ];

  return (
    <DiagramCard labelJa="主要プロジェクト完成スケジュール" labelEn="Completion schedule of major projects">
      <div className="mt-3">
        {/* Desktop */}
        <div className="hidden sm:block">
          {events.map((e, i) => (
            <div key={i} className="flex items-start">
              <div className="flex flex-col items-center mr-4 flex-shrink-0">
                <div className="w-14 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center text-[11px] font-bold tabular-nums text-foreground/50">
                  {e.year}
                </div>
                {i < events.length - 1 && (
                  <div className="h-6 border-l border-dashed border-foreground/10" />
                )}
              </div>
              <div className="pt-1.5 pb-4 text-[12px] text-foreground/55 leading-relaxed">
                <T ja={e.event} en={e.eventEn} />
              </div>
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="sm:hidden space-y-0">
          {events.map((e, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 py-2.5">
                <div className="w-12 h-7 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/45 flex-shrink-0">
                  {e.year}
                </div>
                <div className="text-[11px] text-foreground/55 leading-relaxed"><T ja={e.event} en={e.eventEn} /></div>
              </div>
              {i < events.length - 1 && (
                <div className="ml-5 h-3 border-l border-foreground/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Economic Impact — 経済効果
   ───────────────────────────────────────────── */
export function EconomicImpactDiagram() {
  return (
    <DiagramCard labelJa="再開発の経済効果" labelEn="Economic impact of redevelopment">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="73兆円" labelJa="建設投資見通し" labelEn="Construction investment outlook" subJa="2025年度 名目値" subEn="FY2025 nominal" />
        <StatCard value="15万人" labelJa="高輪GWC就業人口" labelEn="Takanawa GWC working population" subJa="完成後の見込み" subEn="Projected at completion" />
        <StatCard value="93棟" labelJa="天神ビッグバン申請数" labelEn="Tenjin Big Bang filings" subJa="目標30棟を大幅超過" subEn="Far exceeding 30-building target" />
        <StatCard value="30〜40%" labelJa="周辺地価上昇率" labelEn="Nearby land-price increase" subJa="麻布台ヒルズ周辺" subEn="Around Azabudai Hills" />
      </div>
      {/* Impact categories */}
      <div className="mt-5 space-y-1.5">
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            1
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60"><T ja="建設投資効果" en="Construction investment effect" /></div>
            <div className="text-[10px] text-foreground/35"><T ja="数十万人規模の雇用創出、関連産業への波及効果" en="Hundreds of thousands of jobs created and ripple effects across related industries" /></div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            2
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60"><T ja="不動産市場への影響" en="Impact on real estate markets" /></div>
            <div className="text-[10px] text-foreground/35"><T ja="周辺地価上昇、オフィス供給増による空室率変動リスク" en="Rising nearby land prices and vacancy-rate volatility risk from added office supply" /></div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            3
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60"><T ja="スマートシティ化" en="Smart-city transformation" /></div>
            <div className="text-[10px] text-foreground/35"><T ja="自動運転・ロボット配送・データ連携基盤の社会実装" en="Social deployment of autonomous driving, robot delivery and data-sharing platforms" /></div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            4
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60"><T ja="課題" en="Challenges" /></div>
            <div className="text-[10px] text-foreground/35"><T ja="コミュニティ分断、建設コスト高騰、人手不足" en="Community fragmentation, soaring construction costs and labor shortages" /></div>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}
