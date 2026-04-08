"use client";

import { T } from "@/components/T";

/* ─── Shared diagram wrapper ─── */
function DiagramCard({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-8 rounded-2xl border border-foreground/[0.05] bg-gradient-to-br from-foreground/[0.015] to-transparent overflow-hidden" role="img">
      <div className="px-5 sm:px-6 pt-5 pb-1">
        <div className="text-[10px] tracking-[2.5px] uppercase text-[#3b82f6]/40 font-semibold">
          {label}
        </div>
      </div>
      <div className="px-5 sm:px-6 pb-6">{children}</div>
    </figure>
  );
}

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
      <div className="text-xl sm:text-2xl font-bold text-foreground/70 tabular-nums">
        {value}
      </div>
      <div className="text-[10px] text-foreground/40 mt-1 font-medium">{label}</div>
      {sub && <div className="text-[9px] text-foreground/25 mt-0.5">{sub}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Telecom Overview — 3-step concept
   ───────────────────────────────────────────── */
export function TelecomOverviewDiagram() {
  const steps = [
    { label: "変換", labelEn: "Encode", detail: "音声・映像をデジタル信号（0/1）に変換", detailEn: "Convert voice and video into digital signals (0/1)", num: "01" },
    { label: "伝送", labelEn: "Transmit", detail: "電波・光・ケーブルで信号を運ぶ", detailEn: "Carry signals via radio waves, fiber, or cable", num: "02" },
    { label: "復元", labelEn: "Decode", detail: "受信側で元の音声・映像に戻す", detailEn: "Reconstruct the original voice and video on the receiver side", num: "03" },
  ];

  const bandwidths = [
    { label: "通話（高音質）", labelEn: "Voice call (HD)", value: "64 Kbps" },
    { label: "音楽ストリーミング", labelEn: "Music streaming", value: "320 Kbps" },
    { label: "HD動画", labelEn: "HD video", value: "5 Mbps" },
    { label: "4K動画", labelEn: "4K video", value: "25 Mbps" },
  ];

  return (
    <DiagramCard label={<T ja="通信の基本原理 — 3つのステップ" en="How Telecom Works — The 3 Steps" />}>
      <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-0 flex-1">
            <div className="flex-1 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/[0.04] text-center">
              <div className="text-[28px] font-bold text-foreground/[0.06] tabular-nums leading-none font-serif mb-1">
                {step.num}
              </div>
              <div className="text-[13px] font-bold text-foreground/60"><T ja={step.label} en={step.labelEn} /></div>
              <div className="mt-1 text-[10px] text-foreground/35 leading-relaxed"><T ja={step.detail} en={step.detailEn} /></div>
            </div>
            {i < steps.length - 1 && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden sm:block text-foreground/15 mx-1 flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {bandwidths.map((item) => (
          <div key={item.label} className="p-2.5 rounded-lg bg-foreground/[0.015] border border-foreground/[0.03] text-center">
            <div className="text-[12px] font-bold text-foreground/55 tabular-nums">{item.value}</div>
            <div className="text-[9px] text-foreground/30 mt-0.5"><T ja={item.label} en={item.labelEn} /></div>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Spectrum Bands
   ───────────────────────────────────────────── */
export function SpectrumBandsDiagram() {
  const bands = [
    { range: "700–900 MHz", name: "プラチナバンド", nameEn: "Platinum band", use: "4G基盤・広域カバー", useEn: "4G backbone, wide-area coverage", reach: "数十km", reachEn: "tens of km", speed: "低〜中", speedEn: "Low–Mid", width: "100%" },
    { range: "3.5–4.5 GHz", name: "Sub6", nameEn: "Sub-6", use: "5G主力帯域", useEn: "5G primary band", reach: "数km", reachEn: "several km", speed: "中〜高", speedEn: "Mid–High", width: "65%" },
    { range: "28 GHz", name: "ミリ波", nameEn: "mmWave", use: "超高速・密集エリア", useEn: "Ultra-high speed, dense areas", reach: "数百m", reachEn: "several hundred m", speed: "超高速", speedEn: "Ultra-high", width: "30%" },
  ];

  return (
    <DiagramCard label={<T ja="携帯電話の周波数帯域" en="Mobile Spectrum Bands" />}>
      <div className="space-y-4 mt-3">
        {bands.map((band) => (
          <div key={band.range}>
            <div className="flex items-baseline justify-between mb-1.5">
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-bold text-foreground/60 tabular-nums">
                  {band.range}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-md bg-foreground/[0.03] border border-foreground/[0.04] text-foreground/40 font-medium">
                  <T ja={band.name} en={band.nameEn} />
                </span>
              </div>
              <span className="text-[10px] text-foreground/25 hidden sm:block"><T ja={band.use} en={band.useEn} /></span>
            </div>
            <div className="h-2 rounded-full bg-foreground/[0.03] overflow-hidden">
              <div
                className="h-full rounded-full bg-foreground/[0.08]"
                style={{ width: band.width }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-foreground/25 mt-1">
              <span><T ja="到達距離" en="Reach" />: <T ja={band.reach} en={band.reachEn} /></span>
              <span><T ja="速度" en="Speed" />: <T ja={band.speed} en={band.speedEn} /></span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 p-3 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04]">
        <div className="text-[10px] font-semibold text-foreground/35 mb-1 tracking-wide"><T ja="基本法則" en="Rule of thumb" /></div>
        <div className="flex items-center gap-4 text-[10px] text-foreground/30">
          <span><T ja="低周波 = 広範囲・低速" en="Low freq = wide range, slower" /></span>
          <div className="flex-1 h-px bg-foreground/[0.05]" />
          <span><T ja="高周波 = 狭範囲・高速" en="High freq = narrow range, faster" /></span>
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Modulation Types
   ───────────────────────────────────────────── */
export function ModulationTypesDiagram() {
  const types = [
    {
      name: "AM",
      full: "振幅変調",
      fullEn: "Amplitude Modulation",
      nameEn: "Amplitude modulation",
      desc: "波の高さを変えてデータを表現",
      descEn: "Encodes data by varying the wave's amplitude",
      example: "AMラジオ",
      exampleEn: "AM radio",
      path: "M0,18 Q10,4 20,18 Q30,32 40,18 Q50,10 60,18 Q70,26 80,18 Q90,4 100,18 Q110,32 120,18",
    },
    {
      name: "FM",
      full: "周波数変調",
      fullEn: "Frequency Modulation",
      nameEn: "Frequency modulation",
      desc: "波の速さを変えてデータを表現",
      descEn: "Encodes data by varying the wave's frequency",
      example: "FMラジオ",
      exampleEn: "FM radio",
      path: "M0,18 Q5,4 10,18 Q15,32 20,18 Q25,4 30,18 Q35,32 40,18 Q50,4 60,18 Q70,32 80,18 Q85,4 90,18 Q95,32 100,18 Q105,4 110,18 Q115,32 120,18",
    },
    {
      name: "PM",
      full: "位相変調",
      fullEn: "Phase Modulation",
      nameEn: "Phase modulation",
      desc: "波のタイミングをずらしてデータを表現",
      descEn: "Encodes data by shifting the wave's phase",
      example: "デジタル通信",
      exampleEn: "Digital communications",
      path: "M0,18 Q10,4 20,18 Q30,32 40,18 Q50,32 60,18 Q70,4 80,18 Q90,32 100,18 Q110,4 120,18",
    },
  ];

  return (
    <DiagramCard label={<T ja="変調方式の比較" en="Modulation Schemes Compared" />}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
        {types.map((t) => (
          <div
            key={t.name}
            className="p-4 rounded-xl bg-foreground/[0.01] border border-foreground/[0.05]"
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[15px] font-bold text-foreground/55">{t.name}</span>
              <span className="text-[10px] text-foreground/30 font-medium"><T ja={t.full} en={t.fullEn} /></span>
            </div>
            <div className="text-[8px] text-foreground/20 font-medium tracking-wide mb-3"><T ja={t.nameEn} en={t.fullEn} /></div>
            {/* Wave SVG */}
            <div className="flex justify-center mb-3">
              <svg width="120" height="36" viewBox="0 0 120 36">
                <path d={t.path} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/15" />
              </svg>
            </div>
            <div className="text-[10px] text-foreground/40"><T ja={t.desc} en={t.descEn} /></div>
            <div className="text-[9px] text-foreground/25 mt-1"><T ja="例" en="Example" />: <T ja={t.example} en={t.exampleEn} /></div>
          </div>
        ))}
      </div>
      {/* QAM / OFDM */}
      <div className="mt-4 p-4 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04]">
        <div className="text-[10px] font-semibold text-foreground/40 tracking-wide mb-2"><T ja="5G時代の変調技術" en="Modulation in the 5G era" /></div>
        <div className="flex flex-col sm:flex-row gap-4 text-[11px] text-foreground/40">
          <div className="flex-1">
            <span className="font-semibold text-foreground/55">256QAM</span>
            <span className="text-foreground/30"><T ja=" — 振幅+位相を組み合わせ、1回の変化で8ビット送信" en=" — Combines amplitude and phase to send 8 bits per symbol" /></span>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-foreground/55">OFDM</span>
            <span className="text-foreground/30"><T ja=" — 複数の搬送波を束ね、帯域効率を最大化" en=" — Bundles multiple subcarriers to maximize spectral efficiency" /></span>
          </div>
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Fiber Optic Structure
   ───────────────────────────────────────────── */
export function FiberOpticDiagram() {
  const fibers = [
    { type: "シングルモード", typeEn: "Single-mode", core: "約9μm", coreEn: "~9 μm", use: "長距離（数十〜数百km）", useEn: "Long-haul (tens to hundreds of km)", note: "光が1つの経路のみ進む", noteEn: "Light travels along a single path" },
    { type: "マルチモード", typeEn: "Multi-mode", core: "約50μm", coreEn: "~50 μm", use: "短距離（DC内部など）", useEn: "Short-reach (inside data centers, etc.)", note: "複数の経路で光が進む", noteEn: "Light travels along multiple paths" },
  ];

  return (
    <DiagramCard label={<T ja="光ファイバーの構造と種類" en="Optical Fiber Structure and Types" />}>
      {/* Cross-section */}
      <div className="flex items-center justify-center my-6">
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-foreground/[0.08] flex items-center justify-center bg-foreground/[0.01]">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-foreground/[0.1] flex items-center justify-center bg-foreground/[0.015]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground/[0.06] border border-foreground/[0.12] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
              </div>
            </div>
          </div>
          {/* Labels */}
          <div className="absolute top-1 -right-16 sm:-right-20 text-[9px]">
            <div className="text-foreground/40 font-semibold"><T ja="被覆" en="Coating" /></div>
            <div className="text-foreground/20 tabular-nums">250 μm</div>
          </div>
          <div className="absolute top-9 sm:top-10 -right-20 sm:-right-24 text-[9px]">
            <div className="text-foreground/40 font-semibold"><T ja="クラッド" en="Cladding" /></div>
            <div className="text-foreground/20 tabular-nums">125 μm</div>
          </div>
          <div className="absolute top-16 sm:top-20 -right-16 sm:-right-20 text-[9px]">
            <div className="text-foreground/40 font-semibold"><T ja="コア" en="Core" /></div>
            <div className="text-foreground/20 tabular-nums">9 μm</div>
          </div>
        </div>
      </div>
      {/* Types comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fibers.map((f) => (
          <div key={f.type} className="p-4 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04]">
            <div className="text-[12px] font-bold text-foreground/55 mb-2"><T ja={f.type} en={f.typeEn} /></div>
            <div className="space-y-1 text-[10px] text-foreground/35">
              <div><T ja="コア径" en="Core diameter" />: <span className="font-semibold text-foreground/50"><T ja={f.core} en={f.coreEn} /></span></div>
              <div><T ja="用途" en="Use" />: <span className="font-semibold text-foreground/50"><T ja={f.use} en={f.useEn} /></span></div>
              <div><T ja={f.note} en={f.noteEn} /></div>
            </div>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <StatCard value="4,105万" label={<T ja="FTTH契約数" en="FTTH subscriptions" />} />
        <StatCard value="57.9%" label={<T ja="NTT東西シェア" en="NTT East/West share" />} />
        <StatCard value="111.7万" label={<T ja="10Gbps契約" en="10 Gbps subscriptions" />} />
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Cell Network
   ───────────────────────────────────────────── */
export function CellNetworkDiagram() {
  const carriers = [
    { name: "NTTドコモ", nameEn: "NTT Docomo", share: 39.7 },
    { name: "KDDI（au）", nameEn: "KDDI (au)", share: 31.3 },
    { name: "ソフトバンク", nameEn: "SoftBank", share: 24.8 },
    { name: "楽天モバイル", nameEn: "Rakuten Mobile", share: 4.2 },
  ];

  return (
    <DiagramCard label={<T ja="セルラーネットワークの仕組み" en="How a Cellular Network Works" />}>
      {/* Hexagonal cells concept — clean grid */}
      <div className="flex items-center justify-center my-4">
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => {
            const isCenter = i === 4;
            const isActive = i === 3;
            return (
              <div
                key={i}
                className={`w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl border flex flex-col items-center justify-center ${
                  isCenter
                    ? "border-foreground/15 bg-foreground/[0.04]"
                    : isActive
                    ? "border-foreground/10 bg-foreground/[0.02]"
                    : "border-foreground/[0.05] bg-foreground/[0.01]"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={isCenter ? "text-foreground/40" : isActive ? "text-foreground/25" : "text-foreground/15"}>
                  {isActive ? (
                    <><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></>
                  ) : (
                    <><path d="M4.18 12.25a8 8 0 0 1 15.64 0"/><path d="M7.34 9.25a5 5 0 0 1 9.32 0"/><circle cx="12" cy="15" r="1"/></>
                  )}
                </svg>
                <div className="text-[7px] text-foreground/25 mt-0.5 font-medium">
                  {isCenter ? <T ja="現在" en="Current" /> : isActive ? <T ja="移動中" en="Moving" /> : <T ja="セル" en="Cell" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Handover */}
      <div className="p-4 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04] mb-4">
        <div className="text-[11px] font-semibold text-foreground/45 mb-2.5 tracking-wide"><T ja="ハンドオーバー" en="Handover" /></div>
        <div className="flex items-center gap-2 text-[10px] text-foreground/40 overflow-x-auto">
          <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-foreground/[0.04] border border-foreground/[0.06] font-medium"><T ja="セルA" en="Cell A" /></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/15 flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span className="flex-shrink-0 text-foreground/25 text-[9px]"><T ja="電波弱" en="Weak signal" /></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/15 flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-foreground/[0.06] border border-foreground/[0.08] font-semibold text-foreground/50"><T ja="切替" en="Switch" /></span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/15 flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-foreground/[0.04] border border-foreground/[0.06] font-medium"><T ja="セルB" en="Cell B" /></span>
        </div>
      </div>
      {/* Carrier shares */}
      <div className="text-[10px] font-semibold text-foreground/35 mb-3 tracking-wide"><T ja="日本4キャリア — 市場シェア（2025年9月末）" en="Japan's 4 Carriers — Market Share (end of Sep 2025)" /></div>
      <div className="space-y-2">
        {carriers.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <span className="text-[10px] w-24 flex-shrink-0 text-foreground/45 font-medium"><T ja={c.name} en={c.nameEn} /></span>
            <div className="flex-1 h-2.5 rounded-full bg-foreground/[0.03] overflow-hidden">
              <div
                className="h-full rounded-full bg-foreground/[0.1]"
                style={{ width: `${c.share * 2.5}%` }}
              />
            </div>
            <span className="text-[11px] font-bold tabular-nums w-12 text-right text-foreground/45">
              {c.share}%
            </span>
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Satellite Types
   ───────────────────────────────────────────── */
export function SatelliteTypesDiagram() {
  const types = [
    { name: "GEO（静止軌道）", nameEn: "GEO (geostationary)", altitude: "36,000 km", latency: "500ms+", count: "3機で地球カバー", countEn: "3 satellites cover Earth", example: "BS/CS放送", exampleEn: "BS/CS broadcasting" },
    { name: "MEO（中軌道）", nameEn: "MEO (medium orbit)", altitude: "2,000–36,000 km", latency: "100–200ms", count: "数十機", countEn: "Dozens", example: "GPS", exampleEn: "GPS" },
    { name: "LEO（低軌道）", nameEn: "LEO (low orbit)", altitude: "200–2,000 km", latency: "20–50ms", count: "数千機", countEn: "Thousands", example: "Starlink", exampleEn: "Starlink" },
  ];

  const starlinkSpecs = [
    { k: "衛星数", kEn: "Satellites", v: "約7,900機", vEn: "~7,900" },
    { k: "高度", kEn: "Altitude", v: "550 km", vEn: "550 km" },
    { k: "遅延", kEn: "Latency", v: "20–50 ms", vEn: "20–50 ms" },
    { k: "速度", kEn: "Speed", v: "最大220 Mbps", vEn: "Up to 220 Mbps" },
  ];

  return (
    <DiagramCard label={<T ja="通信衛星の種類と特徴" en="Communication Satellite Types and Characteristics" />}>
      {/* Timeline */}
      <div className="relative mt-3 ml-3">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/10 via-foreground/6 to-transparent" />
        {types.map((t) => (
          <div key={t.name} className="relative flex items-start gap-5 mb-7 last:mb-0 pl-5">
            <div className="absolute left-[-3px] top-1 w-[7px] h-[7px] rounded-full bg-foreground/15 border-2 border-background" />
            <div className="flex-1">
              <div className="flex items-center gap-2.5 flex-wrap mb-1">
                <span className="text-[13px] font-bold text-foreground/55"><T ja={t.name} en={t.nameEn} /></span>
                <span className="text-[9px] px-2 py-0.5 rounded-md bg-foreground/[0.03] border border-foreground/[0.04] text-foreground/30 font-medium tabular-nums">
                  <T ja="高度" en="Altitude" /> {t.altitude}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-[10px]">
                <div>
                  <span className="text-foreground/25"><T ja="遅延 " en="Latency " /></span>
                  <span className="text-foreground/45 font-medium">{t.latency}</span>
                </div>
                <div>
                  <span className="text-foreground/25"><T ja="機数 " en="Count " /></span>
                  <span className="text-foreground/45 font-medium"><T ja={t.count} en={t.countEn} /></span>
                </div>
                <div>
                  <span className="text-foreground/25"><T ja="例 " en="Example " /></span>
                  <span className="text-foreground/45 font-medium"><T ja={t.example} en={t.exampleEn} /></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Starlink */}
      <div className="mt-2 p-4 rounded-xl bg-foreground/[0.015] border border-foreground/[0.04]">
        <div className="flex items-center gap-2.5 mb-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/35">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <span className="text-[12px] font-bold text-foreground/50">Starlink（SpaceX）</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px]">
          {starlinkSpecs.map((s) => (
            <div key={s.k}>
              <span className="text-foreground/25"><T ja={s.k} en={s.kEn} />: </span>
              <span className="font-semibold text-foreground/50"><T ja={s.v} en={s.vEn} /></span>
            </div>
          ))}
        </div>
      </div>
    </DiagramCard>
  );
}

/* ─────────────────────────────────────────────
   Japan Infrastructure Overview
   ───────────────────────────────────────────── */
export function JapanInfraDiagram() {
  const layers = [
    {
      name: "固定通信",
      nameEn: "Fixed-line",
      sub: "光ファイバー",
      subEn: "Fiber optic",
      stats: [
        { label: "FTTH契約", labelEn: "FTTH subs", value: "4,105万" },
        { label: "10Gbps", labelEn: "10 Gbps", value: "111.7万" },
      ],
    },
    {
      name: "移動通信",
      nameEn: "Mobile",
      sub: "5G / 4G",
      subEn: "5G / 4G",
      stats: [
        { label: "5Gカバー率", labelEn: "5G coverage", value: "98.4%" },
        { label: "契約回線", labelEn: "Subscriptions", value: "約2億" },
      ],
    },
    {
      name: "衛星通信",
      nameEn: "Satellite",
      sub: "LEO",
      subEn: "LEO",
      stats: [
        { label: "参入キャリア", labelEn: "Carriers", value: "4社" },
        { label: "目標", labelEn: "Goal", value: "圏外ゼロ" },
      ],
    },
  ];

  return (
    <DiagramCard label={<T ja="日本の通信インフラ — 3層構造" en="Japan's Telecom Infrastructure — Three Layers" />}>
      <div className="space-y-2.5 mt-3">
        {layers.map((layer) => (
          <div
            key={layer.name}
            className="p-4 rounded-xl bg-foreground/[0.01] border border-foreground/[0.05]"
          >
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-[13px] font-bold text-foreground/55"><T ja={layer.name} en={layer.nameEn} /></span>
              <span className="text-[10px] text-foreground/25 font-medium"><T ja={layer.sub} en={layer.subEn} /></span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {layer.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-[10px] text-foreground/25 font-medium"><T ja={stat.label} en={stat.labelEn} /></span>
                  <span className="text-[14px] font-bold text-foreground/55 tabular-nums">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[9px] text-foreground/20 text-center font-medium">
        <T ja="3層が相互補完 — いつでも・どこでも・高速に接続" en="Three layers complement each other — always-on, everywhere, high-speed connectivity" />
      </div>
    </DiagramCard>
  );
}
