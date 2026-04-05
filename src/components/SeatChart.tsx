"use client";

import type { PartySeats } from "@/lib/politics";

export function SeatChart({
  parties,
  total,
  title,
}: {
  parties: PartySeats[];
  total: number;
  title: string;
}) {
  const majority = Math.ceil(total / 2);

  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-serif text-xl font-bold">{title}</h3>
        <span className="text-xs text-foreground/45">定数 {total} / 過半数 {majority}</span>
      </div>

      {/* Proportional bar */}
      <div className="flex h-8 rounded-lg overflow-hidden mb-4">
        {parties.map((party) => (
          <div
            key={party.nameEn}
            style={{
              width: `${(party.seats / total) * 100}%`,
              backgroundColor: party.color,
            }}
            className="relative group"
            title={`${party.name}: ${party.seats}議席`}
          >
            {party.seats / total > 0.06 && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-medium">
                {party.seats}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Majority line indicator */}
      <div className="relative h-1 mb-6">
        <div
          className="absolute top-0 h-4 border-l-2 border-dashed border-foreground/20"
          style={{ left: "50%" }}
        />
        <span
          className="absolute text-[9px] text-foreground/45 tracking-wider uppercase"
          style={{ left: "50%", transform: "translateX(-50%)", top: "16px" }}
        >
          Majority
        </span>
      </div>

      {/* Party list */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {parties.map((party) => (
          <div key={party.nameEn} className="flex items-center gap-2.5 py-2">
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: party.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{party.name}</div>
              <div className="text-[10px] text-foreground/50">{party.nameEn}</div>
            </div>
            <span className="text-sm font-bold tabular-nums">{party.seats}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoalitionIndicator({
  parties,
  total,
}: {
  parties: PartySeats[];
  total: number;
}) {
  const majority = Math.ceil(total / 2);
  const supermajority = Math.ceil((total * 2) / 3);
  const ldp = parties.find((p) => p.nameEn === "LDP")?.seats || 0;
  const hasMajority = ldp >= majority;
  const hasSupermajority = ldp >= supermajority;

  return (
    <div className={`mt-4 p-4 rounded-lg border ${hasMajority ? "border-blue-200 bg-blue-50" : "border-red-200 bg-red-50"}`}>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs tracking-wider uppercase text-foreground/55">与党（自由民主党）</span>
          <div className="text-lg font-bold mt-0.5">
            {ldp}議席
          </div>
        </div>
        <div className="flex items-center gap-2">
          {hasSupermajority && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              2/3超
            </span>
          )}
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${hasMajority ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>
            {hasMajority ? "過半数確保" : "過半数割れ"}
          </span>
        </div>
      </div>
    </div>
  );
}
