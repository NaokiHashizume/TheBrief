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
   Internet Scale Stats
   ───────────────────────────────────────────── */
export function InternetScaleDiagram() {
  return (
    <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard value="60億+" label="インターネットユーザー" sub="世界人口の約75%" />
      <StatCard value="300億+" label="接続デバイス数" sub="IoT含む" />
      <StatCard value="10万+" label="AS（自律システム）" sub="ネットワークの集合体" />
      <StatCard value="5,350万" label="日本のBB契約数" sub="固定ブロードバンド" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TCP/IP 4-Layer Stack
   ───────────────────────────────────────────── */
export function TcpIpLayerDiagram() {
  const layers = [
    { name: "アプリケーション層", nameEn: "Application", examples: "HTTP, SMTP, DNS, FTP", num: 4 },
    { name: "トランスポート層", nameEn: "Transport", examples: "TCP, UDP", num: 3 },
    { name: "インターネット層", nameEn: "Internet", examples: "IP (v4/v6), ICMP", num: 2 },
    { name: "ネットワークインターフェース層", nameEn: "Network Interface", examples: "Ethernet, Wi-Fi, 光ファイバー", num: 1 },
  ];

  return (
    <DiagramCard label="TCP/IP Reference Model">
      <div className="space-y-1.5 mt-3">
        {layers.map((layer, i) => {
          const opacity = 1 - i * 0.15;
          return (
            <div
              key={i}
              className="relative flex items-center gap-4 p-4 rounded-xl border border-foreground/[0.04] bg-foreground/[0.01]"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-foreground/50 bg-foreground/[0.04] flex-shrink-0 tabular-nums"
              >
                {layer.num}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-foreground/75">{layer.name}</div>
                <div className="text-[10px] text-foreground/25 font-medium tracking-wide">{layer.nameEn}</div>
                <div className="mt-0.5 text-[11px] text-foreground/40">{layer.examples}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] text-foreground/20 font-medium">
        <span>User-facing</span>
        <div className="flex-1 mx-3 h-px bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5" />
        <span>Hardware</span>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Packet Journey Flow
   ───────────────────────────────────────────── */
export function PacketJourneyDiagram() {
  const steps = [
    { label: "ブラウザ", detail: "URLを入力" },
    { label: "DNS", detail: "名前→IP変換" },
    { label: "パケット化", detail: "データを分割" },
    { label: "ルーター", detail: "自宅から送出" },
    { label: "ISP", detail: "プロバイダ網" },
    { label: "海底ケーブル", detail: "太平洋横断" },
    { label: "データセンター", detail: "目的サーバー" },
    { label: "レスポンス", detail: "データ返送" },
  ];

  return (
    <DiagramCard label="パケットの旅 — ブラウザからサーバーまで">
      {/* Desktop */}
      <div className="hidden sm:flex items-start gap-0 mt-3 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[82px]">
              <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center text-[11px] font-bold tabular-nums text-foreground/35">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-foreground/60 text-center leading-tight">
                {step.label}
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/30 text-center leading-tight">
                {step.detail}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-4 mx-0.5 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/15"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="sm:hidden space-y-0 mt-3">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2">
              <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/35 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="text-[11px] font-semibold text-foreground/60">{step.label}</div>
                <div className="text-[10px] text-foreground/30">{step.detail}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-3.5 h-3 border-l border-foreground/[0.06]" />
            )}
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   DNS Hierarchy
   ───────────────────────────────────────────── */
export function DnsHierarchyDiagram() {
  return (
    <DiagramCard label="DNS の階層構造">
      <div className="flex flex-col items-center gap-0 mt-3">
        {/* Root */}
        <div className="px-6 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center">
          <div className="text-sm font-bold text-foreground/60">. (ルート)</div>
          <div className="text-[9px] text-foreground/30 mt-0.5">Root Servers — 世界13系統</div>
        </div>
        <div className="h-5 border-l border-dashed border-foreground/10" />
        {/* TLD */}
        <div className="flex flex-wrap justify-center gap-2">
          {[".com", ".jp", ".info", ".org", ".net"].map((tld) => (
            <div key={tld} className="px-3.5 py-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.05] text-center">
              <div className="text-xs font-bold text-foreground/55 tabular-nums">{tld}</div>
              <div className="text-[8px] text-foreground/25 mt-0.5">TLD</div>
            </div>
          ))}
        </div>
        <div className="h-5 border-l border-dashed border-foreground/10" />
        {/* Authoritative */}
        <div className="flex flex-wrap justify-center gap-2">
          {["thebrief.info", "google.com", "example.jp"].map((domain) => (
            <div key={domain} className="px-3.5 py-2 rounded-lg bg-foreground/[0.02] border border-foreground/[0.05] text-center">
              <div className="text-xs font-bold text-foreground/55">{domain}</div>
              <div className="text-[8px] text-foreground/25 mt-0.5">権威DNS</div>
            </div>
          ))}
        </div>
        <div className="h-5 border-l border-dashed border-foreground/10" />
        {/* Result */}
        <div className="px-6 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center">
          <div className="text-sm font-bold text-foreground/60 tabular-nums">104.21.32.1</div>
          <div className="text-[9px] text-foreground/30 mt-0.5">IPアドレスを返却</div>
        </div>
      </div>
      <div className="mt-4 text-[9px] text-foreground/25 text-center font-medium">
        名前解決は通常 数十ミリ秒で完了
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Submarine Cable
   ───────────────────────────────────────────── */
export function SubmarineCableDiagram() {
  return (
    <DiagramCard label="海底ケーブルの構造と規模">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="600+" label="本のケーブル" sub="2026年現在" />
        <StatCard value="150万" label="km 超の総延長" sub="地球37周分" />
        <StatCard value="99%" label="の国際通信" sub="海底ケーブル経由" />
        <StatCard value="数百" label="Tbps / 本" sub="最新世代の容量" />
      </div>
      {/* Cable cross-section */}
      <div className="mt-5">
        <div className="text-[10px] text-foreground/35 font-medium mb-3 tracking-wide">断面構造</div>
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {[
            { label: "光ファイバー", desc: "データ伝送" },
            { label: "銅管", desc: "給電用" },
            { label: "アルミ防水層", desc: "水分遮断" },
            { label: "鋼線アーマー", desc: "強度保護" },
            { label: "ポリエチレン", desc: "最外層" },
          ].map((layer, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-foreground/[0.03] border border-foreground/[0.08] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/35">
                  {i + 1}
                </div>
                <div className="text-[9px] font-medium mt-1 text-center whitespace-nowrap text-foreground/50">{layer.label}</div>
                <div className="text-[8px] text-foreground/25 text-center whitespace-nowrap">{layer.desc}</div>
              </div>
              {i < 4 && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/10 mb-5 flex-shrink-0"><path d="M5 12h14"/></svg>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Japan landing points */}
      <div className="mt-4 p-3.5 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04]">
        <div className="text-[10px] font-semibold text-foreground/40 mb-2 tracking-wide">日本の主要陸揚げ地点</div>
        <div className="flex flex-wrap gap-1.5">
          {["千倉（千葉県）", "志摩（三重県）", "北九州", "二宮（神奈川県）", "豊橋（愛知県）"].map((p) => (
            <span key={p} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
              {p}
            </span>
          ))}
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5G / IOWN / 6G Comparison
   ───────────────────────────────────────────── */
export function MobileGenerationDiagram() {
  const specs = [
    { gen: "4G LTE", speed: "1 Gbps", latency: "10 ms", density: "10万台/km²", year: "2010〜" },
    { gen: "5G", speed: "20 Gbps", latency: "1 ms", density: "100万台/km²", year: "2020〜" },
    { gen: "IOWN", speed: "125倍*", latency: "1/200*", density: "—", year: "2025〜" },
    { gen: "6G", speed: "1 Tbps", latency: "0.1 ms", density: "1000万台/km²", year: "2030〜" },
  ];

  return (
    <DiagramCard label="通信世代の比較">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              {["世代", "最大速度", "遅延", "接続密度", "時期"].map((h) => (
                <th key={h} className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 first:pl-0 tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map((s, i) => (
              <tr key={s.gen} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pr-3 first:pl-0">
                  <span className="text-[13px] font-bold text-foreground/65">{s.gen}</span>
                </td>
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">{s.speed}</td>
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">{s.latency}</td>
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">{s.density}</td>
                <td className="py-3 pl-3 text-[10px] text-foreground/30 font-medium">{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/25">
        * IOWN は従来ネットワークとの比較値。電力消費 1/100 が目標。
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Security Layers
   ───────────────────────────────────────────── */
export function SecurityLayersDiagram() {
  const layers = [
    { name: "耐量子暗号 (PQC)", desc: "量子コンピュータ時代に備える次世代暗号" },
    { name: "ゼロトラスト", desc: "すべてのアクセスを検証・認証" },
    { name: "WAF / IDS / IPS", desc: "不正アクセスの検知と防御" },
    { name: "TLS / HTTPS", desc: "通信の暗号化（ページ読み込みの95%+）" },
    { name: "ファイアウォール", desc: "ネットワーク境界の防御壁" },
  ];

  return (
    <DiagramCard label="多層防御 — ネットワークセキュリティ">
      <div className="space-y-1.5 mt-3">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3.5 rounded-xl bg-foreground/[0.01] border border-foreground/[0.04]"
          >
            <div className="w-8 h-8 rounded-lg bg-foreground/[0.03] border border-foreground/[0.05] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/30 flex-shrink-0">
              {i + 1}
            </div>
            <div>
              <div className="text-[12px] font-semibold text-foreground/60">{layer.name}</div>
              <div className="text-[10px] text-foreground/35">{layer.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center font-medium">
        外部からの攻撃は複数の防御層を通過しなければならない
      </div>
    </DiagramCard>
  );
}
