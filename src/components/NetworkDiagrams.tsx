"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  labelEn,
  children,
}: {
  label: string;
  labelEn: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img" aria-label={`図表: ${label}`}>
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
          <T ja={label} en={labelEn} />
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
  labelEn,
  sub,
  subEn,
}: {
  value: string;
  label: string;
  labelEn: string;
  sub?: string;
  subEn?: string;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium"><T ja={label} en={labelEn} /></div>
      {sub && subEn && (
        <div className="text-[9px] text-foreground/25 mt-0.5"><T ja={sub} en={subEn} /></div>
      )}
      {sub && !subEn && (
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
      <StatCard value="60億+" label="インターネットユーザー" labelEn="Internet Users" sub="世界人口の約75%" subEn="~75% of world population" />
      <StatCard value="300億+" label="接続デバイス数" labelEn="Connected Devices" sub="IoT含む" subEn="Including IoT" />
      <StatCard value="10万+" label="AS（自律システム）" labelEn="AS (Autonomous Systems)" sub="ネットワークの集合体" subEn="Collection of networks" />
      <StatCard value="5,350万" label="日本のBB契約数" labelEn="Japan Broadband Subscriptions" sub="固定ブロードバンド" subEn="Fixed broadband" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TCP/IP 4-Layer Stack
   ───────────────────────────────────────────── */
export function TcpIpLayerDiagram() {
  const layers = [
    { name: "アプリケーション層", nameEn: "Application Layer", nameShort: "Application", examples: "HTTP, SMTP, DNS, FTP", num: 4 },
    { name: "トランスポート層", nameEn: "Transport Layer", nameShort: "Transport", examples: "TCP, UDP", num: 3 },
    { name: "インターネット層", nameEn: "Internet Layer", nameShort: "Internet", examples: "IP (v4/v6), ICMP", num: 2 },
    { name: "ネットワークインターフェース層", nameEn: "Network Interface Layer", nameShort: "Network Interface", examples: "Ethernet, Wi-Fi, 光ファイバー", examplesEn: "Ethernet, Wi-Fi, Fiber optic", num: 1 },
  ];

  return (
    <DiagramCard label="TCP/IP Reference Model" labelEn="TCP/IP Reference Model">
      <div className="space-y-1.5 mt-3">
        {layers.map((layer, i) => {
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
                <div className="text-[13px] font-semibold text-foreground/75"><T ja={layer.name} en={layer.nameEn} /></div>
                <div className="text-[10px] text-foreground/25 font-medium tracking-wide">{layer.nameShort}</div>
                <div className="mt-0.5 text-[11px] text-foreground/40">
                  {layer.examplesEn ? <T ja={layer.examples} en={layer.examplesEn} /> : layer.examples}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] text-foreground/20 font-medium">
        <span><T ja="ユーザー側" en="User side" /></span>
        <div className="flex-1 mx-3 h-px bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5" />
        <span><T ja="ハードウェア側" en="Hardware side" /></span>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Packet Journey Flow
   ───────────────────────────────────────────── */
export function PacketJourneyDiagram() {
  const steps = [
    { label: "ブラウザ", labelEn: "Browser", detail: "URLを入力", detailEn: "Enter URL" },
    { label: "DNS", labelEn: "DNS", detail: "名前→IP変換", detailEn: "Name → IP lookup" },
    { label: "パケット化", labelEn: "Packetize", detail: "データを分割", detailEn: "Split data" },
    { label: "ルーター", labelEn: "Router", detail: "自宅から送出", detailEn: "Sent from home" },
    { label: "ISP", labelEn: "ISP", detail: "プロバイダ網", detailEn: "Provider network" },
    { label: "海底ケーブル", labelEn: "Submarine Cable", detail: "太平洋横断", detailEn: "Trans-Pacific" },
    { label: "データセンター", labelEn: "Data Center", detail: "目的サーバー", detailEn: "Destination server" },
    { label: "レスポンス", labelEn: "Response", detail: "データ返送", detailEn: "Data returned" },
  ];

  return (
    <DiagramCard label="パケットの旅 — ブラウザからサーバーまで" labelEn="A Packet's Journey — From Browser to Server">
      {/* Desktop */}
      <div className="hidden sm:flex items-start gap-0 mt-3 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[82px]">
              <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] flex items-center justify-center text-[11px] font-bold tabular-nums text-foreground/35">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-foreground/60 text-center leading-tight">
                <T ja={step.label} en={step.labelEn} />
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/30 text-center leading-tight">
                <T ja={step.detail} en={step.detailEn} />
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
                <div className="text-[11px] font-semibold text-foreground/60"><T ja={step.label} en={step.labelEn} /></div>
                <div className="text-[10px] text-foreground/30"><T ja={step.detail} en={step.detailEn} /></div>
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
  const landingPoints = [
    { ja: "千倉（千葉県）", en: "Chikura (Chiba)" },
    { ja: "志摩（三重県）", en: "Shima (Mie)" },
    { ja: "北九州", en: "Kitakyushu" },
    { ja: "二宮（神奈川県）", en: "Ninomiya (Kanagawa)" },
    { ja: "豊橋（愛知県）", en: "Toyohashi (Aichi)" },
  ];

  return (
    <DiagramCard label="DNS の階層構造" labelEn="DNS Hierarchy">
      <div className="flex flex-col items-center gap-0 mt-3">
        {/* Root */}
        <div className="px-6 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center">
          <div className="text-sm font-bold text-foreground/60">. (<T ja="ルート" en="Root" />)</div>
          <div className="text-[9px] text-foreground/30 mt-0.5"><T ja="ルートサーバー — 世界13系統" en="Root servers — 13 systems worldwide" /></div>
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
              <div className="text-[8px] text-foreground/25 mt-0.5"><T ja="権威DNS" en="Authoritative DNS" /></div>
            </div>
          ))}
        </div>
        <div className="h-5 border-l border-dashed border-foreground/10" />
        {/* Result */}
        <div className="px-6 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] text-center">
          <div className="text-sm font-bold text-foreground/60 tabular-nums">104.21.32.1</div>
          <div className="text-[9px] text-foreground/30 mt-0.5"><T ja="IPアドレスを返却" en="Returns IP address" /></div>
        </div>
      </div>
      <div className="mt-4 text-[9px] text-foreground/25 text-center font-medium">
        <T ja="名前解決は通常 数十ミリ秒で完了" en="Name resolution typically completes in tens of milliseconds" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Submarine Cable
   ───────────────────────────────────────────── */
export function SubmarineCableDiagram() {
  const cableLayers = [
    { label: "光ファイバー", labelEn: "Fiber optic", desc: "データ伝送", descEn: "Data transmission" },
    { label: "銅管", labelEn: "Copper tube", desc: "給電用", descEn: "Power supply" },
    { label: "アルミ防水層", labelEn: "Aluminum barrier", desc: "水分遮断", descEn: "Water barrier" },
    { label: "鋼線アーマー", labelEn: "Steel wire armor", desc: "強度保護", descEn: "Strength protection" },
    { label: "ポリエチレン", labelEn: "Polyethylene", desc: "最外層", descEn: "Outermost layer" },
  ];

  const landingPoints = [
    { ja: "千倉（千葉県）", en: "Chikura (Chiba)" },
    { ja: "志摩（三重県）", en: "Shima (Mie)" },
    { ja: "北九州", en: "Kitakyushu" },
    { ja: "二宮（神奈川県）", en: "Ninomiya (Kanagawa)" },
    { ja: "豊橋（愛知県）", en: "Toyohashi (Aichi)" },
  ];

  return (
    <DiagramCard label="海底ケーブルの構造と規模" labelEn="Submarine Cable Structure & Scale">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        <StatCard value="600+" label="本のケーブル" labelEn="cables" sub="2026年現在" subEn="as of 2026" />
        <StatCard value="150万" label="km 超の総延長" labelEn="km+ total length" sub="地球37周分" subEn="37 laps around the Earth" />
        <StatCard value="99%" label="の国際通信" labelEn="of international traffic" sub="海底ケーブル経由" subEn="via submarine cables" />
        <StatCard value="数百" label="Tbps / 本" labelEn="Tbps / cable" sub="最新世代の容量" subEn="latest-generation capacity" />
      </div>
      {/* Cable cross-section */}
      <div className="mt-5">
        <div className="text-[10px] text-foreground/35 font-medium mb-3 tracking-wide"><T ja="断面構造" en="Cross-section Structure" /></div>
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {cableLayers.map((layer, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-foreground/[0.03] border border-foreground/[0.08] flex items-center justify-center text-[10px] font-bold tabular-nums text-foreground/35">
                  {i + 1}
                </div>
                <div className="text-[9px] font-medium mt-1 text-center whitespace-nowrap text-foreground/50"><T ja={layer.label} en={layer.labelEn} /></div>
                <div className="text-[8px] text-foreground/25 text-center whitespace-nowrap"><T ja={layer.desc} en={layer.descEn} /></div>
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
        <div className="text-[10px] font-semibold text-foreground/40 mb-2 tracking-wide"><T ja="日本の主要陸揚げ地点" en="Japan's Major Cable Landing Stations" /></div>
        <div className="flex flex-wrap gap-1.5">
          {landingPoints.map((p) => (
            <span key={p.ja} className="text-[10px] text-foreground/45 px-2.5 py-1 bg-foreground/[0.025] rounded-md border border-foreground/[0.04]">
              <T ja={p.ja} en={p.en} />
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
    { gen: "4G LTE", speed: "1 Gbps", latency: "10 ms", density: "10万台/km²", densityEn: "100K devices/km²", year: "2010〜", yearEn: "2010–" },
    { gen: "5G", speed: "20 Gbps", latency: "1 ms", density: "100万台/km²", densityEn: "1M devices/km²", year: "2020〜", yearEn: "2020–" },
    { gen: "IOWN", speed: "125倍*", speedEn: "125x*", latency: "1/200*", density: "—", densityEn: "—", year: "2025〜", yearEn: "2025–" },
    { gen: "6G", speed: "1 Tbps", latency: "0.1 ms", density: "1000万台/km²", densityEn: "10M devices/km²", year: "2030〜", yearEn: "2030–" },
  ];

  const headers = [
    { ja: "世代", en: "Generation" },
    { ja: "最大速度", en: "Max Speed" },
    { ja: "遅延", en: "Latency" },
    { ja: "接続密度", en: "Connection Density" },
    { ja: "時期", en: "Era" },
  ];

  return (
    <DiagramCard label="通信世代の比較" labelEn="Mobile Generation Comparison">
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left min-w-[480px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              {headers.map((h) => (
                <th key={h.ja} className="text-[10px] text-foreground/30 font-semibold py-2.5 px-3 first:pl-0 tracking-wide">
                  <T ja={h.ja} en={h.en} />
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
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">
                  {s.speedEn ? <T ja={s.speed} en={s.speedEn} /> : s.speed}
                </td>
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">{s.latency}</td>
                <td className="py-3 px-3 text-[12px] tabular-nums text-foreground/50">
                  <T ja={s.density} en={s.densityEn} />
                </td>
                <td className="py-3 pl-3 text-[10px] text-foreground/30 font-medium">
                  <T ja={s.year} en={s.yearEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/25">
        <T ja="* IOWN は従来ネットワークとの比較値。電力消費 1/100 が目標。" en="* IOWN values are relative to conventional networks. Target: 1/100 power consumption." />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Security Layers
   ───────────────────────────────────────────── */
export function SecurityLayersDiagram() {
  const layers = [
    { name: "耐量子暗号 (PQC)", nameEn: "Post-Quantum Cryptography (PQC)", desc: "量子コンピュータ時代に備える次世代暗号", descEn: "Next-generation encryption for the quantum computing era" },
    { name: "ゼロトラスト", nameEn: "Zero Trust", desc: "すべてのアクセスを検証・認証", descEn: "Verify and authenticate every access request" },
    { name: "WAF / IDS / IPS", nameEn: "WAF / IDS / IPS", desc: "不正アクセスの検知と防御", descEn: "Detection and defense against unauthorized access" },
    { name: "TLS / HTTPS", nameEn: "TLS / HTTPS", desc: "通信の暗号化（ページ読み込みの95%+）", descEn: "Encrypted communications (95%+ of page loads)" },
    { name: "ファイアウォール", nameEn: "Firewall", desc: "ネットワーク境界の防御壁", descEn: "Defensive barrier at the network perimeter" },
  ];

  return (
    <DiagramCard label="多層防御 — ネットワークセキュリティ" labelEn="Defense in Depth — Network Security">
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
              <div className="text-[12px] font-semibold text-foreground/60"><T ja={layer.name} en={layer.nameEn} /></div>
              <div className="text-[10px] text-foreground/35"><T ja={layer.desc} en={layer.descEn} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center font-medium">
        <T ja="外部からの攻撃は複数の防御層を通過しなければならない" en="External attacks must pass through multiple layers of defense" />
      </div>
    </DiagramCard>
  );
}
