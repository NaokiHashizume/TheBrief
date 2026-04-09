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
   1. UNIX/Linux Timeline
   ───────────────────────────────────────────── */
export function UnixLinuxTimelineDiagram() {
  const events = [
    { year: "1969", label: "UNIX誕生", labelEn: "UNIX Born", desc: "ベル研・トンプソン&リッチー", descEn: "Bell Labs — Thompson & Ritchie", color: "bg-amber-500/20 border-amber-500/30" },
    { year: "1973", label: "C言語移植", labelEn: "Rewritten in C", desc: "移植性の革命", descEn: "The portability revolution", color: "bg-amber-500/20 border-amber-500/30" },
    { year: "1977", label: "BSD誕生", labelEn: "BSD Created", desc: "カリフォルニア大学バークレー校", descEn: "UC Berkeley", color: "bg-orange-500/15 border-orange-500/25" },
    { year: "1983", label: "GNU Project", labelEn: "GNU Project", desc: "リチャード・ストールマン", descEn: "Richard Stallman", color: "bg-green-500/15 border-green-500/25" },
    { year: "1991", label: "Linux 0.01", labelEn: "Linux 0.01", desc: "リーナス・トーバルズ公開", descEn: "Linus Torvalds releases", color: "bg-blue-500/20 border-blue-500/30" },
    { year: "1994", label: "Linux 1.0", labelEn: "Linux 1.0", desc: "GPLライセンスで正式リリース", descEn: "Official GPL release", color: "bg-blue-500/20 border-blue-500/30" },
    { year: "2004", label: "Ubuntu登場", labelEn: "Ubuntu Arrives", desc: "デスクトップLinux普及期", descEn: "Desktop Linux era begins", color: "bg-purple-500/15 border-purple-500/25" },
    { year: "2008", label: "Android公開", labelEn: "Android Released", desc: "Linuxがスマホを支配", descEn: "Linux conquers smartphones", color: "bg-green-500/20 border-green-500/30" },
    { year: "2017", label: "Top500全てLinux", labelEn: "Top500 = 100% Linux", desc: "スパコン完全制覇", descEn: "Supercomputers 100% Linux", color: "bg-blue-500/20 border-blue-500/30" },
    { year: "2026", label: "Linux 7.0?", labelEn: "Linux 7.0?", desc: "6.xシリーズ完結、次世代へ", descEn: "6.x complete, next gen", color: "bg-blue-500/25 border-blue-500/35" },
  ];

  return (
    <DiagramCard label="UNIX/Linux 系統図・タイムライン" labelEn="UNIX/Linux Family Tree & Timeline">
      <div className="mt-3 space-y-0">
        {events.map((ev, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-[52px] text-right text-[11px] font-bold tabular-nums text-foreground/40 pt-2.5">{ev.year}</div>
            </div>
            <div className="flex flex-col items-center flex-shrink-0 mt-1">
              <div className={`w-2.5 h-2.5 rounded-full border-2 mt-1.5 ${ev.color}`} />
              {i < events.length - 1 && <div className="w-px h-full min-h-[20px] bg-foreground/[0.06] mt-0.5" />}
            </div>
            <div className={`mb-3 px-3 py-2 rounded-xl border flex-1 ${ev.color}`}>
              <div className="text-[12px] font-semibold text-foreground/70"><T ja={ev.label} en={ev.labelEn} /></div>
              <div className="text-[10px] text-foreground/40 mt-0.5"><T ja={ev.desc} en={ev.descEn} /></div>
            </div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   2. UNIX vs Linux Comparison Table
   ───────────────────────────────────────────── */
export function UnixLinuxComparisonDiagram() {
  const rows = [
    { item: "起源", itemEn: "Origin", unix: "1969年 ベル研究所", unixEn: "1969, Bell Labs", linux: "1991年 個人プロジェクト", linuxEn: "1991, personal project" },
    { item: "ライセンス", itemEn: "License", unix: "商用（各社独自）", unixEn: "Commercial (proprietary)", linux: "GPL（オープンソース）", linuxEn: "GPL (open source)" },
    { item: "商標", itemEn: "Trademark", unix: "The Open Group 認定", unixEn: "The Open Group certified", linux: "認定なし（POSIX互換）", linuxEn: "No cert (POSIX-compatible)" },
    { item: "ソースコード", itemEn: "Source Code", unix: "非公開（原則）", unixEn: "Closed (generally)", linux: "完全公開", linuxEn: "Fully open" },
    { item: "費用", itemEn: "Cost", unix: "有償ライセンス必須", unixEn: "Paid license required", linux: "無料（商用サポートは有償）", linuxEn: "Free (paid support optional)" },
    { item: "主要実装", itemEn: "Major Implementations", unix: "macOS / Solaris / AIX", unixEn: "macOS / Solaris / AIX", linux: "Ubuntu / RHEL / Debian", linuxEn: "Ubuntu / RHEL / Debian" },
    { item: "カーネル", itemEn: "Kernel", unix: "各社独自設計", unixEn: "Proprietary per vendor", linux: "Linuxカーネル（共通）", linuxEn: "Linux kernel (shared)" },
    { item: "コミュニティ", itemEn: "Community", unix: "企業主導", unixEn: "Corporate-led", linux: "世界中の開発者", linuxEn: "Developers worldwide" },
  ];

  return (
    <DiagramCard label="UNIX vs Linux — 徹底比較" labelEn="UNIX vs Linux — Full Comparison">
      <div className="overflow-x-auto mt-3">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              <th className="text-[10px] text-foreground/30 font-semibold py-2 px-2 text-left w-[90px] tracking-wide">
                <T ja="項目" en="Item" />
              </th>
              <th className="text-[10px] text-amber-400/60 font-semibold py-2 px-3 text-left tracking-wide">UNIX</th>
              <th className="text-[10px] text-blue-400/60 font-semibold py-2 px-3 text-left tracking-wide">Linux</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-2.5 px-2 text-[10px] font-semibold text-foreground/40">
                  <T ja={row.item} en={row.itemEn} />
                </td>
                <td className="py-2.5 px-3 text-[11px] text-foreground/55">
                  <T ja={row.unix} en={row.unixEn} />
                </td>
                <td className="py-2.5 px-3 text-[11px] text-foreground/55">
                  <T ja={row.linux} en={row.linuxEn} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center">
        <T ja="技術的にはLinuxはUNIXではないが、POSIX互換により「UNIXライク」として機能する" en="Technically Linux is not UNIX, but POSIX compatibility makes it function as 'UNIX-like'" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   3. Linux Market Share Stats Banner
   ───────────────────────────────────────────── */
export function LinuxShareStatsDiagram() {
  const stats = [
    { value: "90%+", label: "クラウドワークロード", labelEn: "Cloud Workloads", sub: "AWS / Azure / GCP", subEn: "AWS / Azure / GCP" },
    { value: "72.8%", label: "モバイルOS", labelEn: "Mobile OS (Android)", sub: "Android経由・2025年", subEn: "via Android, 2025" },
    { value: "100%", label: "世界Top500 スパコン", labelEn: "World Top500 Supercomputers", sub: "2017年以降", subEn: "since 2017" },
    { value: "75%+", label: "Webサーバー", labelEn: "Web Servers", sub: "世界のWebトラフィック", subEn: "Global web traffic" },
  ];

  const sectors = [
    { label: "デスクトップ", labelEn: "Desktop", pct: 3, color: "bg-foreground/20" },
    { label: "クラウド", labelEn: "Cloud", pct: 90, color: "bg-blue-500/50" },
    { label: "スマートフォン", labelEn: "Smartphone", pct: 73, color: "bg-green-500/50" },
    { label: "サーバー", labelEn: "Server", pct: 75, color: "bg-purple-500/50" },
    { label: "スパコン", labelEn: "Supercomputer", pct: 100, color: "bg-amber-500/50" },
  ];

  return (
    <DiagramCard label="Linuxのユースケース別シェア統計" labelEn="Linux Market Share by Use Case">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        {stats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} labelEn={s.labelEn} sub={s.sub} subEn={s.subEn} />
        ))}
      </div>
      <div className="mt-5">
        <div className="text-[10px] text-foreground/35 font-medium mb-3 tracking-wide">
          <T ja="分野別Linuxシェア" en="Linux Share by Domain" />
        </div>
        <div className="space-y-2.5">
          {sectors.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[90px] text-[10px] text-foreground/50 text-right flex-shrink-0">
                <T ja={s.label} en={s.labelEn} />
              </div>
              <div className="flex-1 h-5 bg-foreground/[0.03] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${s.color} transition-all`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <div className="w-[36px] text-[11px] font-bold tabular-nums text-foreground/55 flex-shrink-0">
                {s.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 text-[9px] text-foreground/25 text-center">
        <T ja="出典: commandlinux.com, statcounter, Linux Foundation 2025年データ" en="Sources: commandlinux.com, statcounter, Linux Foundation 2025 data" />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   4. Linux Distribution Comparison
   ───────────────────────────────────────────── */
export function LinuxDistroComparisonDiagram() {
  const distros = [
    {
      name: "Ubuntu",
      vendor: "Canonical",
      family: "Debian系",
      familyEn: "Debian family",
      useCase: "クラウド・開発・デスクトップ",
      useCaseEn: "Cloud, Dev, Desktop",
      support: "5年 / Pro: 10年",
      supportEn: "5yr / Pro: 10yr",
      share: "33.9%",
      color: "border-orange-400/30 bg-orange-400/[0.04]",
    },
    {
      name: "RHEL",
      vendor: "Red Hat (IBM)",
      family: "Red Hat系",
      familyEn: "Red Hat family",
      useCase: "エンタープライズ・金融・官公庁",
      useCaseEn: "Enterprise, Finance, Gov",
      support: "10年（延長あり）",
      supportEn: "10yr (extendable)",
      share: "43.1%*",
      color: "border-red-400/30 bg-red-400/[0.04]",
    },
    {
      name: "Debian",
      vendor: "コミュニティ",
      family: "Debian系（本家）",
      familyEn: "Debian (original)",
      useCase: "長期安定サーバー",
      useCaseEn: "Long-term stable server",
      support: "3〜5年",
      supportEn: "3–5yr",
      share: "—",
      color: "border-blue-400/30 bg-blue-400/[0.04]",
    },
    {
      name: "Fedora",
      vendor: "Red Hat (OSS)",
      family: "Red Hat系",
      familyEn: "Red Hat family",
      useCase: "開発・最新技術検証",
      useCaseEn: "Dev, Cutting-edge R&D",
      support: "約13ヶ月",
      supportEn: "~13 months",
      share: "—",
      color: "border-blue-500/30 bg-blue-500/[0.04]",
    },
    {
      name: "AlmaLinux",
      vendor: "AlmaLinux OS Foundation",
      family: "RHEL互換",
      familyEn: "RHEL-compatible",
      useCase: "CentOS代替・企業サーバー",
      useCaseEn: "CentOS replacement",
      support: "10年",
      supportEn: "10yr",
      share: "—",
      color: "border-purple-400/30 bg-purple-400/[0.04]",
    },
  ];

  const headers = [
    { ja: "ディストロ", en: "Distro" },
    { ja: "ファミリー", en: "Family" },
    { ja: "主な用途", en: "Primary Use" },
    { ja: "サポート期間", en: "Support" },
    { ja: "市場シェア", en: "Market Share" },
  ];

  return (
    <DiagramCard label="主要Linuxディストリビューション比較" labelEn="Major Linux Distribution Comparison">
      <div className="overflow-x-auto mt-3">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr className="border-b border-foreground/[0.06]">
              {headers.map((h) => (
                <th key={h.ja} className="text-[10px] text-foreground/30 font-semibold py-2.5 px-2.5 first:pl-0 text-left tracking-wide">
                  <T ja={h.ja} en={h.en} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {distros.map((d, i) => (
              <tr key={i} className="border-b border-foreground/[0.03] last:border-0">
                <td className="py-3 pr-3 first:pl-0">
                  <div className={`inline-flex px-2 py-0.5 rounded-md border text-[12px] font-bold text-foreground/70 ${d.color}`}>
                    {d.name}
                  </div>
                  <div className="text-[9px] text-foreground/30 mt-0.5">{d.vendor}</div>
                </td>
                <td className="py-3 px-2.5 text-[11px] text-foreground/50">
                  <T ja={d.family} en={d.familyEn} />
                </td>
                <td className="py-3 px-2.5 text-[11px] text-foreground/50">
                  <T ja={d.useCase} en={d.useCaseEn} />
                </td>
                <td className="py-3 px-2.5 text-[11px] tabular-nums text-foreground/50">
                  <T ja={d.support} en={d.supportEn} />
                </td>
                <td className="py-3 pl-2.5 text-[12px] font-bold tabular-nums text-foreground/60">{d.share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-[9px] text-foreground/25">
        <T ja="* RHELの43.1%はエンタープライズLinuxサーバー市場での割合。一般ディプロイメントシェアはUbuntu 33.9%が最大。" en="* RHEL 43.1% is share of enterprise Linux server market. For general deployments, Ubuntu leads at 33.9%." />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   5. Linux Kernel Architecture
   ───────────────────────────────────────────── */
export function LinuxKernelArchitectureDiagram() {
  const layers = [
    {
      name: "ユーザー空間 (User Space)",
      nameEn: "User Space",
      items: ["シェル (bash/zsh)", "アプリケーション", "システムライブラリ (glibc)"],
      itemsEn: ["Shell (bash/zsh)", "Applications", "System Libraries (glibc)"],
      color: "bg-green-500/[0.06] border-green-500/15",
      labelColor: "text-green-400/60",
    },
    {
      name: "システムコール インターフェース",
      nameEn: "System Call Interface",
      items: ["POSIX API", "open() / read() / write() / fork()"],
      itemsEn: ["POSIX API", "open() / read() / write() / fork()"],
      color: "bg-blue-500/[0.05] border-blue-500/15",
      labelColor: "text-blue-400/60",
    },
    {
      name: "Linuxカーネル (Kernel Space)",
      nameEn: "Linux Kernel (Kernel Space)",
      items: ["プロセス管理", "メモリ管理", "ファイルシステム", "ネットワークスタック", "デバイスドライバ（C + Rust）"],
      itemsEn: ["Process management", "Memory management", "File system", "Network stack", "Device drivers (C + Rust)"],
      color: "bg-purple-500/[0.06] border-purple-500/15",
      labelColor: "text-purple-400/60",
    },
    {
      name: "ハードウェア抽象化レイヤー (HAL)",
      nameEn: "Hardware Abstraction Layer (HAL)",
      items: ["x86 / ARM / RISC-V / MIPS / PowerPC"],
      itemsEn: ["x86 / ARM / RISC-V / MIPS / PowerPC"],
      color: "bg-amber-500/[0.05] border-amber-500/15",
      labelColor: "text-amber-400/60",
    },
    {
      name: "ハードウェア (Hardware)",
      nameEn: "Hardware",
      items: ["CPU / RAM / ストレージ / ネットワーク / GPU"],
      itemsEn: ["CPU / RAM / Storage / Network / GPU"],
      color: "bg-foreground/[0.03] border-foreground/10",
      labelColor: "text-foreground/40",
    },
  ];

  const stats = [
    { value: "4,000万行", valueEn: "40M lines", label: "カーネルコード", labelEn: "kernel code", sub: "2025年初頭", subEn: "early 2025" },
    { value: "2,134人", valueEn: "2,134 devs", label: "6.18への貢献者", labelEn: "contributors to 6.18", sub: "新記録", subEn: "new record" },
    { value: "1,780+社", valueEn: "1,780+ orgs", label: "貢献企業数", labelEn: "contributing organizations", sub: "2025年", subEn: "2025" },
    { value: "Rust", valueEn: "Rust", label: "新言語採用", labelEn: "new language adopted", sub: "メモリ安全", subEn: "memory safety" },
  ];

  return (
    <DiagramCard label="Linuxカーネル アーキテクチャ" labelEn="Linux Kernel Architecture">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 mb-5">
        {stats.map((s, i) => (
          <StatCard key={i} value={s.value} label={s.label} labelEn={s.labelEn} sub={s.sub} subEn={s.subEn} />
        ))}
      </div>
      <div className="text-[10px] text-foreground/35 font-medium mb-3 tracking-wide">
        <T ja="レイヤー構造（上位 → 下位）" en="Layer Structure (top → bottom)" />
      </div>
      <div className="space-y-1.5">
        {layers.map((layer, i) => (
          <div key={i} className={`p-3.5 rounded-xl border ${layer.color}`}>
            <div className={`text-[10px] font-bold tracking-wide mb-1.5 ${layer.labelColor}`}>
              <T ja={layer.name} en={layer.nameEn} />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item, j) => (
                <span key={j} className="text-[10px] text-foreground/50 px-2 py-0.5 rounded-md bg-foreground/[0.03] border border-foreground/[0.04]">
                  <T ja={item} en={layer.itemsEn[j]} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px] text-foreground/20 font-medium">
        <span><T ja="ユーザー" en="User" /></span>
        <div className="flex-1 mx-3 h-px bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5" />
        <span><T ja="ハードウェア" en="Hardware" /></span>
      </div>
    </DiagramCard>
  );
}
