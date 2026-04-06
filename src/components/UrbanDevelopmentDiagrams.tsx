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
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#64748b]/40 font-semibold">
          {label}
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

/* ─── Small stat card ─── */
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
      {sub && (
        <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Redevelopment Map — 主要再開発エリアマップ
   ───────────────────────────────────────────── */
export function RedevelopmentMapDiagram() {
  return (
    <DiagramCard label="日本の主要再開発エリア — 2026年進行中">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="50+" label="東京都心の大規模案件" sub="千代田・中央・港・渋谷・新宿" />
        <StatCard value="10兆円+" label="全国の総投資額" sub="主要プロジェクト合計" />
        <StatCard value="119万㎡" label="2025年オフィス供給" sub="東京都心 過去最大" />
        <StatCard value="4都市" label="同時進行の再開発" sub="東京・大阪・名古屋・福岡" />
      </div>
      {/* City overview */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            東京
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65">品川・八重洲・日本橋・虎ノ門・渋谷</div>
            <div className="text-[10px] text-foreground/35 mt-0.5">高輪GWC全面開業、トーチタワー建設中、渋谷スクランブルスクエアII期</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            大阪
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65">うめきた2期・夢洲・御堂筋・難波</div>
            <div className="text-[10px] text-foreground/35 mt-0.5">グラングリーン大阪拡張、万博跡地IR着工、スーパーシティ構想</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            名古屋
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65">名駅地区・名鉄再開発・駅前広場</div>
            <div className="text-[10px] text-foreground/35 mt-0.5">名鉄百貨店解体着工、駅4線化計画、リニア開業準備</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.08] flex items-center justify-center text-[11px] font-bold text-[#64748b] flex-shrink-0">
            福岡
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-foreground/65">天神・博多駅周辺</div>
            <div className="text-[10px] text-foreground/35 mt-0.5">天神ビッグバン終盤戦（93棟申請）、博多コネクティッド進行中</div>
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
    { name: "高輪ゲートウェイシティ", area: "品川", height: "—", floors: "30F", totalArea: "84.5万㎡", cost: "約5,800億円", completion: "2026年3月" },
    { name: "トーチタワー", area: "日本橋", height: "385m", floors: "62F", totalArea: "54.4万㎡", cost: "約4,600億円", completion: "2028年度" },
    { name: "麻布台ヒルズ", area: "虎ノ門", height: "325m", floors: "64F", totalArea: "86.2万㎡", cost: "約6,400億円", completion: "完成済" },
    { name: "渋谷スクランブルスクエアII期", area: "渋谷", height: "—", floors: "—", totalArea: "—", cost: "—", completion: "2027年度" },
    { name: "日本橋一丁目中地区", area: "日本橋", height: "284m", floors: "52F", totalArea: "38.0万㎡", cost: "—", completion: "2026年3月" },
  ];

  return (
    <DiagramCard label="東京の主要再開発プロジェクト">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[580px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-0 pr-3 tracking-wide">プロジェクト</th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">エリア</th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">高さ</th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">延床面積</th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 tracking-wide">事業費</th>
              <th className="text-[10px] text-foreground/30 font-semibold py-2.5 pl-3 tracking-wide">竣工</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pl-0 pr-3">
                  <span className="text-[12px] font-bold text-foreground/65">{p.name}</span>
                </td>
                <td className="py-3 px-3 text-[11px] text-foreground/45">{p.area}</td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50">{p.height}</td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50">{p.totalArea}</td>
                <td className="py-3 px-3 text-[11px] tabular-nums text-foreground/50">{p.cost}</td>
                <td className="py-3 pl-3 text-[10px] text-foreground/35 font-medium">{p.completion}</td>
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
    { city: "大阪", name: "グラングリーン大阪（うめきた2期）", scale: "約9.1ha", status: "先行開業済・段階拡大中", target: "2027年全体完成" },
    { city: "大阪", name: "大阪IR（夢洲）", scale: "約50ha（跡地全体）", status: "2025年夏着工", target: "2030年夏開業" },
    { city: "名古屋", name: "名鉄名古屋駅地区再開発", scale: "南北約400m", status: "2026年度解体着工", target: "2033年度1期竣工" },
    { city: "名古屋", name: "名古屋駅西側駅前広場", scale: "—", status: "段階整備中", target: "リニア開業時完成" },
    { city: "福岡", name: "天神ビッグバン", scale: "天神エリア全域", status: "74棟竣工済", target: "2026年末期限" },
    { city: "福岡", name: "博多コネクティッド", scale: "博多駅周辺", status: "進行中", target: "2028年以降順次" },
  ];

  return (
    <DiagramCard label="大阪・名古屋・福岡の主要プロジェクト">
      <div className="space-y-2 mt-3">
        {projects.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
            <div className="w-10 h-10 rounded-lg bg-[#64748b]/[0.06] flex items-center justify-center text-[10px] font-bold text-[#64748b]/70 flex-shrink-0">
              {p.city}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[12px] font-semibold text-foreground/65">{p.name}</div>
              <div className="flex flex-wrap items-center mt-1">
                <span className="text-[10px] text-foreground/35 mr-3">{p.scale}</span>
                <span className="text-[10px] text-foreground/35 mr-3">{p.status}</span>
                <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#64748b]/[0.06] text-[#64748b]/60 font-medium">{p.target}</span>
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
    { name: "麻布台ヒルズ", cost: 6400, barWidth: "100%" },
    { name: "高輪ゲートウェイシティ", cost: 5800, barWidth: "91%" },
    { name: "名鉄名古屋駅再開発", cost: 5400, barWidth: "84%" },
    { name: "TOKYO TORCH", cost: 4600, barWidth: "72%" },
    { name: "グラングリーン大阪", cost: 3200, barWidth: "50%" },
    { name: "渋谷駅周辺再開発", cost: 2700, barWidth: "42%" },
  ];

  return (
    <DiagramCard label="主要プロジェクト投資規模の比較（億円）">
      <div className="space-y-3 mt-4">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-foreground/60">{d.name}</span>
              <span className="text-[11px] tabular-nums font-bold text-foreground/50">{d.cost.toLocaleString()}億円</span>
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
        ※ 公表されている事業費ベース。一部推計を含む
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Timeline — 完成スケジュール
   ───────────────────────────────────────────── */
export function TimelineDiagram() {
  const events = [
    { year: "2025", event: "高輪GWC街開き / グラングリーン大阪先行開業 / 麻布台ヒルズ全施設完成" },
    { year: "2026", event: "高輪GWC全面開業 / 名鉄名古屋駅解体着工 / 天神ビッグバン期限" },
    { year: "2027", event: "渋谷スクランブルスクエアII期竣工" },
    { year: "2028", event: "トーチタワー竣工（日本一385m）" },
    { year: "2030", event: "大阪IR開業 / グラングリーン大阪全体完成" },
    { year: "2033", event: "名鉄名古屋駅1期竣工" },
    { year: "2040s", event: "名鉄名古屋駅2期完成（4線化）" },
  ];

  return (
    <DiagramCard label="主要プロジェクト完成スケジュール">
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
                {e.event}
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
                <div className="text-[11px] text-foreground/55 leading-relaxed">{e.event}</div>
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
    <DiagramCard label="再開発の経済効果">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="73兆円" label="建設投資見通し" sub="2025年度 名目値" />
        <StatCard value="15万人" label="高輪GWC就業人口" sub="完成後の見込み" />
        <StatCard value="93棟" label="天神ビッグバン申請数" sub="目標30棟を大幅超過" />
        <StatCard value="30〜40%" label="周辺地価上昇率" sub="麻布台ヒルズ周辺" />
      </div>
      {/* Impact categories */}
      <div className="mt-5 space-y-1.5">
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            1
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60">建設投資効果</div>
            <div className="text-[10px] text-foreground/35">数十万人規模の雇用創出、関連産業への波及効果</div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            2
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60">不動産市場への影響</div>
            <div className="text-[10px] text-foreground/35">周辺地価上昇、オフィス供給増による空室率変動リスク</div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            3
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60">スマートシティ化</div>
            <div className="text-[10px] text-foreground/35">自動運転・ロボット配送・データ連携基盤の社会実装</div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]">
          <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
            4
          </div>
          <div>
            <div className="text-[12px] font-semibold text-foreground/60">課題</div>
            <div className="text-[10px] text-foreground/35">コミュニティ分断、建設コスト高騰、人手不足</div>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}
