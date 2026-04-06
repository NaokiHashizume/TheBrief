"use client";

/* ─────────────────────────────────────────────
   US-Iran Timeline Diagram
   ───────────────────────────────────────────── */
export function USIranTimelineDiagram() {
  const events = [
    { year: "1953", label: "CIA coup in Iran", detail: "Operation Ajax overthrows PM Mossadegh, restores Shah", severity: "critical" },
    { year: "1979", label: "Islamic Revolution", detail: "Shah overthrown; Ayatollah Khomeini establishes theocracy", severity: "critical" },
    { year: "1979-81", label: "Hostage Crisis", detail: "444 days — 52 US diplomats held at Tehran embassy", severity: "critical" },
    { year: "1980-88", label: "Iran-Iraq War", detail: "US backs Iraq; ~1M casualties; chemical weapons used", severity: "high" },
    { year: "2002", label: "Nuclear program revealed", detail: "NCRI exposes secret enrichment facilities at Natanz", severity: "high" },
    { year: "2015", label: "JCPOA signed", detail: "P5+1 nuclear deal — Iran limits enrichment for sanctions relief", severity: "response" },
    { year: "2018", label: "Trump exits JCPOA", detail: "\"Maximum pressure\" campaign; reimposed all US sanctions", severity: "critical" },
    { year: "2020", label: "Soleimani killed", detail: "US drone strike on IRGC-QF commander at Baghdad airport", severity: "critical" },
    { year: "2025", label: "Snapback sanctions", detail: "UN sanctions restored Sep 2025; JCPOA effectively dead", severity: "high" },
    { year: "2026", label: "US-Israel strikes on Iran", detail: "Operation Epic Fury — massive air campaign begins Feb 28", severity: "critical" },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Vertical timeline of US-Iran relations from 1953 CIA coup to 2026 military strikes"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        US-Iran Relations Timeline
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Seven decades of confrontation — key turning points
      </div>

      {/* Legend */}
      <div className="flex flex-wrap mb-5 text-[9px] text-foreground/50">
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-1.5" />
          Critical
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-1.5" />
          High impact
        </span>
        <span className="flex items-center mr-4 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] mr-1.5" />
          Response / diplomacy
        </span>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-foreground/10" />

        <div>
          {events.map((event, i) => {
            const color =
              severityColor[event.severity as keyof typeof severityColor];
            return (
              <div key={i} className={`relative pl-8 ${i > 0 ? "mt-3" : ""}`}>
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ backgroundColor: color.bg }}
                >
                  <span className="text-white text-[8px] font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex items-baseline flex-wrap">
                  <span
                    className="text-xs font-bold tabular-nums mr-2"
                    style={{ color: color.text }}
                  >
                    {event.year}
                  </span>
                  <span className="text-sm font-semibold">{event.label}</span>
                </div>
                <div className="text-[11px] text-foreground/50 mt-0.5">
                  {event.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sanctions Architecture Diagram
   ───────────────────────────────────────────── */
export function SanctionsArchitectureDiagram() {
  const pillars = [
    {
      name: "US Unilateral",
      color: "#dc2626",
      bgColor: "#dc262610",
      targets: ["OFAC / Treasury-led", "Energy sector", "Banking & finance", "IRGC designated as FTO"],
    },
    {
      name: "UN Security Council",
      color: "#3b82f6",
      bgColor: "#3b82f610",
      targets: ["6 rounds (2006-2010)", "Arms embargo + travel bans", "Snapped back Sep 2025", "JCPOA sunset Oct 2025"],
    },
    {
      name: "EU Sanctions",
      color: "#8b5cf6",
      bgColor: "#8b5cf610",
      targets: ["Aligned with UN framework", "Oil import ban (Jul 2012)", "Insurance & reinsurance ban", "Central Bank of Iran targeted"],
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Three-pillar sanctions architecture diagram showing US, UN, and EU sanctions on Iran"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Iran Sanctions Architecture
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Three pillars of the international sanctions regime
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {pillars.map((p, idx) => (
          <div
            key={p.name}
            className={`p-4 rounded-lg border ${idx > 0 ? "mt-3 sm:mt-0 sm:ml-3" : ""}`}
            style={{
              borderColor: `${p.color}30`,
              backgroundColor: p.bgColor,
            }}
          >
            <div
              className="text-xs font-bold mb-3"
              style={{ color: p.color }}
            >
              {p.name}
            </div>
            <div>
              {p.targets.map((t, ti) => (
                <div key={t} className={`flex items-start ${ti > 0 ? "mt-1.5" : ""}`}>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-[11px] text-foreground/60 leading-tight">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SWIFT callout */}
      <div className="mt-4 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
        <div className="text-[10px] font-medium text-red-600 dark:text-red-400">
          SWIFT Disconnect — March 2012
        </div>
        <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">
          Iranian banks cut off from SWIFT network — first time in history a country was disconnected from global financial messaging. Described as a &quot;financial nuclear weapon.&quot;
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Iran Economic Impact Diagram
   ───────────────────────────────────────────── */
export function IranEconomicImpactDiagram() {
  const stats = [
    {
      label: "GDP",
      before: "$600B",
      after: "$356B",
      change: "▼41%",
      color: "#dc2626",
    },
    {
      label: "Oil Exports",
      before: "2.2M bpd",
      after: "0.7M bpd",
      change: "▼68%",
      color: "#dc2626",
    },
    {
      label: "Frozen Assets",
      before: "",
      after: "$100-120B",
      change: "Held abroad",
      color: "#f59e0b",
    },
    {
      label: "Inflation",
      before: "",
      after: "60%",
      change: "Peak rate",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Iran economic impact statistics showing GDP decline, oil export losses, frozen assets, and inflation"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Iran Economic Impact
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Cumulative toll of sanctions and isolation
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s, idx) => (
          <div
            key={s.label}
            className={`p-4 rounded-lg ${idx === 1 ? "ml-3" : ""} ${idx === 2 ? "mt-3 sm:mt-0 sm:ml-3" : ""} ${idx === 3 ? "mt-3 ml-3 sm:mt-0" : ""}`}
            style={{
              borderLeft: `3px solid ${s.color}`,
              backgroundColor: `${s.color}08`,
            }}
          >
            <div className="text-[9px] text-foreground/40 uppercase">
              {s.label}
            </div>
            {s.before && (
              <div className="text-[10px] text-foreground/40 mt-1 line-through">
                {s.before}
              </div>
            )}
            <div className="text-lg font-bold tabular-nums mt-0.5">
              {s.after}
            </div>
            <div
              className="text-[10px] font-medium mt-1"
              style={{ color: s.color }}
            >
              {s.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Iran Oil Exports Diagram
   ───────────────────────────────────────────── */
export function IranOilExportsDiagram() {
  const exports = [
    { year: "2011", bpd: 2.2, label: "2.2M", note: "Pre-sanctions peak" },
    { year: "2013", bpd: 0.7, label: "0.7M", note: "Obama-era sanctions bite" },
    { year: "2016", bpd: 2.0, label: "2.0M", note: "Post-JCPOA recovery" },
    { year: "2019", bpd: 0.4, label: "0.4M", note: "Trump max pressure" },
    { year: "2024", bpd: 1.5, label: "1.5M", note: "Biden lax enforcement" },
    { year: "Sep 2025", bpd: 2.13, label: "2.13M", note: "Pre-war peak" },
  ];

  const maxBpd = 2.5;

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Horizontal bar chart of Iran oil exports from 2011 to September 2025"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Iran Oil Exports Over Time
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Million barrels per day (bpd) — sanctions impact cycle
      </div>

      <div>
        {exports.map((e, i) => {
          const pct = (e.bpd / maxBpd) * 100;
          const barColor = e.bpd >= 1.5 ? "#f59e0b" : "#dc2626";
          return (
            <div key={e.year} className={i > 0 ? "mt-2.5" : ""}>
              <div className="flex items-center">
                <span className="text-[10px] text-foreground/60 w-16 flex-shrink-0 text-right tabular-nums font-medium mr-2">
                  {e.year}
                </span>
                <div className="flex-1 h-5 bg-foreground/[0.03] rounded overflow-hidden">
                  <div
                    className="h-full rounded transition-all flex items-center justify-end pr-2"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: barColor,
                      opacity: 0.75,
                    }}
                  >
                    <span className="text-white text-[9px] font-bold">
                      {e.label}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[9px] text-foreground/35 ml-[72px] mt-0.5">
                {e.note}
              </div>
            </div>
          );
        })}
      </div>

      {/* China note */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] text-[10px] text-foreground/50 leading-relaxed">
        <span className="font-semibold">China factor:</span> By 2024-25, China bought ~90% of Iran&apos;s oil exports via &quot;dark fleet&quot; tankers and ship-to-ship transfers, undermining US sanctions enforcement.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Nuclear Negotiations Diagram
   ───────────────────────────────────────────── */
export function NuclearNegotiationsDiagram() {
  const events = [
    { date: "Jul 2015", label: "JCPOA signed", detail: "P5+1 nuclear deal — Iran caps enrichment at 3.67%", severity: "response" },
    { date: "May 2018", label: "US withdrawal", detail: "Trump exits JCPOA; \"maximum pressure\" begins", severity: "critical" },
    { date: "Apr-Jun 2025", label: "Muscat talks", detail: "Secret US-Iran back-channel via Oman; no breakthrough", severity: "response" },
    { date: "Jun 2025", label: "War begins", detail: "Military escalation ends diplomatic track", severity: "critical" },
    { date: "Aug 2025", label: "Snapback triggered", detail: "UK triggers UN snapback mechanism; all UN sanctions restored", severity: "high" },
    { date: "Oct 2025", label: "JCPOA expires", detail: "UN SC Res. 2231 sunset — deal formally dead", severity: "critical" },
    { date: "Feb 2026", label: "Final talks fail", detail: "Last-ditch diplomacy collapses; strikes begin weeks later", severity: "critical" },
  ];

  const severityColor = {
    critical: { bg: "#dc2626", text: "#dc2626" },
    high: { bg: "#f59e0b", text: "#f59e0b" },
    response: { bg: "#3b82f6", text: "#3b82f6" },
  };

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Timeline of nuclear negotiations from JCPOA signing in 2015 to final talks failing in February 2026"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Nuclear Negotiations Timeline
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        From JCPOA to collapse — the diplomatic arc
      </div>

      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-foreground/10" />

        <div>
          {events.map((event, i) => {
            const color =
              severityColor[event.severity as keyof typeof severityColor];
            return (
              <div key={i} className={`relative pl-8 ${i > 0 ? "mt-3" : ""}`}>
                <div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-background flex items-center justify-center"
                  style={{ backgroundColor: color.bg }}
                >
                  <span className="text-white text-[8px] font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="flex items-baseline flex-wrap">
                  <span
                    className="text-xs font-bold tabular-nums mr-2"
                    style={{ color: color.text }}
                  >
                    {event.date}
                  </span>
                  <span className="text-sm font-semibold">{event.label}</span>
                </div>
                <div className="text-[11px] text-foreground/50 mt-0.5">
                  {event.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Protests and War Diagram
   ───────────────────────────────────────────── */
export function ProtestsAndWarDiagram() {
  const protests = [
    { label: "Inflation at 60%", detail: "Food & fuel prices soaring under sanctions" },
    { label: "200+ cities", detail: "Nationwide protests spread across provinces" },
    { label: "Dec 28 protests erupt", detail: "Triggered by economic collapse and war toll" },
    { label: "Jan 8-9 crackdown", detail: "Regime deploys IRGC; mass arrests and internet blackout" },
  ];

  const warEvents = [
    { label: "Feb 28 — Operation Epic Fury", detail: "US-Israel joint air campaign begins" },
    { label: "Khamenei killed", detail: "Supreme Leader dies in leadership bunker strike" },
    { label: "Hormuz Strait closed", detail: "IRGC declares blockade; global oil prices spike" },
    { label: "Regime fragmentation", detail: "IRGC factions compete for control; chain of command breaks" },
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Two-column diagram comparing domestic protests and military war events in Iran"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Domestic Crisis &amp; War
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Internal unrest collides with external military campaign
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Protests column */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#f59e0b30", backgroundColor: "#f59e0b10" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#f59e0b" }}>
            Domestic Protests
          </div>
          <div>
            {protests.map((item, i) => (
              <div key={item.label} className={`flex items-start ${i > 0 ? "mt-2.5" : ""}`}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                  style={{ backgroundColor: "#f59e0b" }}
                />
                <div>
                  <div className="text-[11px] font-medium leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* War column */}
        <div
          className="p-4 rounded-lg border mt-3 sm:mt-0 sm:ml-4"
          style={{ borderColor: "#dc262630", backgroundColor: "#dc262610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#dc2626" }}>
            Military War
          </div>
          <div>
            {warEvents.map((item, i) => (
              <div key={item.label} className={`flex items-start ${i > 0 ? "mt-2.5" : ""}`}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 mr-2"
                  style={{ backgroundColor: "#dc2626" }}
                />
                <div>
                  <div className="text-[11px] font-medium leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[9px] text-foreground/40 mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Ceasefire Conditions Diagram
   ───────────────────────────────────────────── */
export function CeasefireConditionsDiagram() {
  const iranConditions = [
    "Immediate end to all airstrikes",
    "Full lifting of UN & US sanctions",
    "Withdrawal of naval forces from Persian Gulf",
    "Recognition of Iran\u2019s regional security role",
    "Reparations for civilian infrastructure damage",
  ];

  const usConditions = [
    "Complete nuclear program dismantlement",
    "IRGC disarmament & disbandment",
    "End support for regional proxies (Hezbollah, Houthis)",
    "Reopen Strait of Hormuz unconditionally",
    "International inspectors with full access",
  ];

  return (
    <div
      className="my-6 p-4 sm:p-6 rounded-xl border border-brief-border bg-brief-card"
      role="img"
      aria-label="Two-column comparison of Iran and US ceasefire conditions with current status"
    >
      <div className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-1">
        Ceasefire Negotiations
      </div>
      <div className="text-xs text-foreground/50 mb-5">
        Iran&apos;s 5 conditions vs. US key demands
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Iran conditions */}
        <div
          className="p-4 rounded-lg border"
          style={{ borderColor: "#dc262630", backgroundColor: "#dc262610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#dc2626" }}>
            Iran&apos;s 5 Conditions
          </div>
          <div>
            {iranConditions.map((cond, i) => (
              <div key={i} className={`flex items-start ${i > 0 ? "mt-2" : ""}`}>
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mr-2"
                  style={{ backgroundColor: "#dc2626" }}
                >
                  {i + 1}
                </span>
                <span className="text-[11px] text-foreground/60 leading-tight mt-0.5">
                  {cond}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* US demands */}
        <div
          className="p-4 rounded-lg border mt-3 sm:mt-0 sm:ml-4"
          style={{ borderColor: "#3b82f630", backgroundColor: "#3b82f610" }}
        >
          <div className="text-xs font-bold mb-3" style={{ color: "#3b82f6" }}>
            US Key Demands
          </div>
          <div>
            {usConditions.map((demand, i) => (
              <div key={i} className={`flex items-start ${i > 0 ? "mt-2" : ""}`}>
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mr-2"
                  style={{ backgroundColor: "#3b82f6" }}
                >
                  {i + 1}
                </span>
                <span className="text-[11px] text-foreground/60 leading-tight mt-0.5">
                  {demand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status callout */}
      <div className="mt-4 p-3 rounded-lg bg-foreground/[0.02] border border-brief-border">
        <div className="text-[10px] font-medium text-foreground/60 mb-1.5">
          Current Status
        </div>
        <div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-2" />
            <span className="text-[11px] text-foreground/55">
              45-day ceasefire talks underway via Omani mediation
            </span>
          </div>
          <div className="flex items-center mt-1.5">
            <span className="w-2 h-2 rounded-full bg-[#dc2626] mr-2" />
            <span className="text-[11px] text-foreground/55">
              Apr 5 ultimatum rejected by Iran — talks at impasse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
