"use client";

/* ─────────────────────────────────────────────
   TCP/IP 4-Layer Stack Diagram
   ───────────────────────────────────────────── */
export function TcpIpLayerDiagram() {
  const layers = [
    { name: "アプリケーション層", nameEn: "Application", examples: "HTTP, SMTP, DNS, FTP", color: "#3b82f6" },
    { name: "トランスポート層", nameEn: "Transport", examples: "TCP, UDP", color: "#8b5cf6" },
    { name: "インターネット層", nameEn: "Internet", examples: "IP (v4/v6), ICMP", color: "#f59e0b" },
    { name: "ネットワークインターフェース層", nameEn: "Network Interface", examples: "Ethernet, Wi-Fi, 光ファイバー", color: "#10b981" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        TCP/IP Reference Model
      </div>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors"
            style={{ backgroundColor: `${layer.color}08`, borderLeft: `3px solid ${layer.color}` }}
          >
            {/* Layer number */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: layer.color }}
            >
              {4 - i}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold">{layer.name}</div>
              <div className="text-[10px] text-foreground/50">{layer.nameEn}</div>
              <div className="mt-0.5 text-[11px] text-foreground/55">
                {layer.examples}
              </div>
            </div>
            {/* Arrow between layers */}
            {i < layers.length - 1 && (
              <div className="absolute -bottom-2.5 left-7 text-foreground/20 text-xs z-10">↕</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] text-foreground/45">
        <span>← ユーザーに近い</span>
        <span>ハードウェアに近い →</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Packet Journey Flow Diagram
   ───────────────────────────────────────────── */
export function PacketJourneyDiagram() {
  const steps = [
    { icon: "🖥", label: "ブラウザ", detail: "URLを入力" },
    { icon: "📖", label: "DNS", detail: "名前→IPアドレス変換" },
    { icon: "📦", label: "パケット化", detail: "データを小分けに" },
    { icon: "🏠", label: "ルーター", detail: "自宅から送出" },
    { icon: "🏢", label: "ISP", detail: "プロバイダのネットワーク" },
    { icon: "🌊", label: "海底ケーブル", detail: "太平洋横断" },
    { icon: "🖧", label: "データセンター", detail: "目的地のサーバー" },
    { icon: "📄", label: "レスポンス", detail: "ページデータを返送" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card overflow-x-auto">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        パケットの旅 — ブラウザからサーバーまで
      </div>
      {/* Desktop: horizontal flow */}
      <div className="hidden sm:flex items-start gap-0 min-w-[700px]">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center w-[80px]">
              <div className="w-12 h-12 rounded-xl bg-foreground/[0.04] border border-brief-border flex items-center justify-center text-xl">
                {step.icon}
              </div>
              <div className="mt-1.5 text-[10px] font-semibold text-center leading-tight">
                {step.label}
              </div>
              <div className="mt-0.5 text-[9px] text-foreground/50 text-center leading-tight">
                {step.detail}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-5 mx-0.5 text-foreground/25 text-[10px] flex-shrink-0">→</div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: vertical flow */}
      <div className="sm:hidden space-y-1">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-1.5">
              <div className="w-9 h-9 rounded-lg bg-foreground/[0.04] border border-brief-border flex items-center justify-center text-base flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <div className="text-xs font-semibold">{step.label}</div>
                <div className="text-[10px] text-foreground/45">{step.detail}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-4 text-foreground/20 text-[10px]">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DNS Hierarchy Diagram
   ───────────────────────────────────────────── */
export function DnsHierarchyDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        DNS の階層構造
      </div>
      <div className="flex flex-col items-center gap-1">
        {/* Root */}
        <div className="px-5 py-2.5 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 text-center">
          <div className="text-sm font-bold text-[#ef4444]">. (ルート)</div>
          <div className="text-[9px] text-foreground/45">Root Servers（世界13系統）</div>
        </div>
        <div className="text-foreground/20">│</div>
        {/* TLD */}
        <div className="flex flex-wrap justify-center gap-2">
          {[".com", ".jp", ".info", ".org", ".net"].map((tld) => (
            <div key={tld} className="px-3 py-1.5 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-center">
              <div className="text-xs font-bold text-[#f59e0b]">{tld}</div>
              <div className="text-[8px] text-foreground/50">TLD</div>
            </div>
          ))}
        </div>
        <div className="text-foreground/20">│</div>
        {/* Authoritative */}
        <div className="flex flex-wrap justify-center gap-2">
          {["thebrief.info", "google.com", "example.jp"].map((domain) => (
            <div key={domain} className="px-3 py-1.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-center">
              <div className="text-xs font-bold text-[#3b82f6]">{domain}</div>
              <div className="text-[8px] text-foreground/50">権威DNS</div>
            </div>
          ))}
        </div>
        <div className="text-foreground/20">│</div>
        {/* Result */}
        <div className="px-5 py-2.5 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 text-center">
          <div className="text-sm font-bold text-[#10b981]">104.21.32.1</div>
          <div className="text-[9px] text-foreground/45">IPアドレスを返却</div>
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/45 text-center">
        ドメイン名 → IPアドレスへの名前解決は通常 数十ミリ秒で完了
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Submarine Cable Illustration
   ───────────────────────────────────────────── */
export function SubmarineCableDiagram() {
  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        海底ケーブルの構造と規模
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-2xl font-bold text-[#3b82f6]">600+</div>
          <div className="text-[10px] text-foreground/50 mt-1">本のケーブル</div>
          <div className="text-[9px] text-foreground/45">2026年現在</div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-2xl font-bold text-[#8b5cf6]">150万</div>
          <div className="text-[10px] text-foreground/50 mt-1">km 超の総延長</div>
          <div className="text-[9px] text-foreground/45">地球37周分</div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-2xl font-bold text-[#f59e0b]">99%</div>
          <div className="text-[10px] text-foreground/50 mt-1">の国際通信</div>
          <div className="text-[9px] text-foreground/45">衛星ではなくケーブル</div>
        </div>
        <div className="p-3 rounded-lg bg-foreground/[0.03] text-center">
          <div className="text-2xl font-bold text-[#10b981]">数百</div>
          <div className="text-[10px] text-foreground/50 mt-1">Tbps の伝送容量</div>
          <div className="text-[9px] text-foreground/45">最新世代1本あたり</div>
        </div>
      </div>
      {/* Cable cross-section */}
      <div className="mt-5">
        <div className="text-[10px] text-foreground/45 font-medium mb-2">海底ケーブルの断面構造</div>
        <div className="flex items-center gap-2 overflow-x-auto py-2">
          {[
            { label: "光ファイバー", color: "#ef4444", desc: "データを伝送" },
            { label: "銅管", color: "#f59e0b", desc: "給電用" },
            { label: "アルミ防水層", color: "#94a3b8", desc: "水分遮断" },
            { label: "鋼線アーマー", color: "#64748b", desc: "強度・保護" },
            { label: "ポリエチレン外装", color: "#1e293b", desc: "最外層" },
          ].map((layer, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[8px] text-white font-bold"
                  style={{ borderColor: layer.color, backgroundColor: `${layer.color}30` }}
                >
                  {i + 1}
                </div>
                <div className="text-[9px] font-medium mt-1 text-center whitespace-nowrap">{layer.label}</div>
                <div className="text-[8px] text-foreground/45 text-center whitespace-nowrap">{layer.desc}</div>
              </div>
              {i < 4 && <div className="text-foreground/15 text-xs mb-5">→</div>}
            </div>
          ))}
        </div>
      </div>
      {/* Japan landing points */}
      <div className="mt-4 p-3 rounded-lg bg-[#3b82f6]/5 border border-[#3b82f6]/10">
        <div className="text-[10px] font-medium text-[#3b82f6]/80 mb-1">🇯🇵 日本の主要陸揚げ地点</div>
        <div className="flex flex-wrap gap-2">
          {["千倉（千葉県）", "志摩（三重県）", "北九州", "二宮（神奈川県）", "豊橋（愛知県）"].map((p) => (
            <span key={p} className="text-[10px] text-foreground/55 px-2 py-0.5 bg-foreground/[0.04] rounded">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5G / IOWN / 6G Comparison
   ───────────────────────────────────────────── */
export function MobileGenerationDiagram() {
  const specs = [
    { gen: "4G LTE", speed: "1 Gbps", latency: "10 ms", density: "10万台/km²", color: "#94a3b8", year: "2010〜" },
    { gen: "5G", speed: "20 Gbps", latency: "1 ms", density: "100万台/km²", color: "#3b82f6", year: "2020〜" },
    { gen: "IOWN", speed: "125倍*", latency: "1/200*", density: "—", color: "#8b5cf6", year: "2025〜" },
    { gen: "6G", speed: "1 Tbps", latency: "0.1 ms", density: "1000万台/km²", color: "#10b981", year: "2030〜" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        通信世代の比較
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[500px]">
          <thead>
            <tr className="border-b border-brief-border">
              <th className="text-[10px] text-foreground/45 font-medium py-2 pr-3">世代</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3">最大速度</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3">遅延</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 px-3">接続密度</th>
              <th className="text-[10px] text-foreground/45 font-medium py-2 pl-3">時期</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((s) => (
              <tr key={s.gen} className="border-b border-brief-border/50 last:border-0">
                <td className="py-2.5 pr-3">
                  <span className="text-sm font-bold" style={{ color: s.color }}>
                    {s.gen}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-xs tabular-nums">{s.speed}</td>
                <td className="py-2.5 px-3 text-xs tabular-nums">{s.latency}</td>
                <td className="py-2.5 px-3 text-xs tabular-nums">{s.density}</td>
                <td className="py-2.5 pl-3 text-[10px] text-foreground/45">{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/45">
        * IOWN は従来のネットワークとの比較値。電力消費は1/100を目標。
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Security Layers Diagram
   ───────────────────────────────────────────── */
export function SecurityLayersDiagram() {
  const layers = [
    { name: "耐量子暗号 (PQC)", desc: "量子コンピュータ時代に備える次世代暗号", color: "#ef4444", icon: "🔮" },
    { name: "ゼロトラスト", desc: "すべてのアクセスを検証・認証", color: "#f59e0b", icon: "🔐" },
    { name: "WAF / IDS / IPS", desc: "不正アクセスの検知と防御", color: "#3b82f6", icon: "🛡" },
    { name: "TLS / HTTPS", desc: "通信の暗号化（ページ読み込みの95%+）", color: "#8b5cf6", icon: "🔒" },
    { name: "ファイアウォール", desc: "ネットワーク境界の防御壁", color: "#10b981", icon: "🧱" },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card">
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/50 mb-4">
        多層防御 — ネットワークセキュリティの構造
      </div>
      <div className="space-y-2">
        {layers.map((layer, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: `${layer.color}06`, borderLeft: `3px solid ${layer.color}` }}
          >
            <span className="text-xl flex-shrink-0">{layer.icon}</span>
            <div>
              <div className="text-xs font-semibold" style={{ color: layer.color }}>
                {layer.name}
              </div>
              <div className="text-[10px] text-foreground/50">{layer.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/45 text-center">
        外部からの攻撃は複数の防御層を通過しなければならない
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Internet Scale Stats Banner
   ───────────────────────────────────────────── */
export function InternetScaleDiagram() {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#3b82f6]">60億+</div>
        <div className="text-[10px] text-foreground/50 mt-1">インターネットユーザー</div>
        <div className="text-[9px] text-foreground/45">世界人口の約75%</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#8b5cf6]">300億+</div>
        <div className="text-[10px] text-foreground/50 mt-1">接続デバイス数</div>
        <div className="text-[9px] text-foreground/45">IoT含む</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#f59e0b]">10万+</div>
        <div className="text-[10px] text-foreground/50 mt-1">AS（自律システム）</div>
        <div className="text-[9px] text-foreground/45">ネットワークの集合体</div>
      </div>
      <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
        <div className="text-2xl font-bold text-[#10b981]">5,350万</div>
        <div className="text-[10px] text-foreground/50 mt-1">日本のBB契約数</div>
        <div className="text-[9px] text-foreground/45">固定ブロードバンド</div>
      </div>
    </div>
  );
}
