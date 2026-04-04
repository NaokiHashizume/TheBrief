"use client";

import type { Legislator } from "@/lib/politics";

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function LegislatorsByParty({
  legislators,
  partyOrder,
  partyColors,
}: {
  legislators: Legislator[];
  partyOrder: string[];
  partyColors: Record<string, string>;
}) {
  const grouped = new Map<string, Legislator[]>();
  for (const leg of legislators) {
    const list = grouped.get(leg.party) || [];
    list.push(leg);
    grouped.set(leg.party, list);
  }

  return (
    <div className="space-y-8">
      {partyOrder.map((party) => {
        const members = grouped.get(party);
        if (!members || members.length === 0) return null;
        const color = partyColors[party] || "#999";

        return (
          <div key={party} className="border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
            {/* Party header */}
            <div className="px-5 py-3 flex items-center gap-3" style={{ borderLeft: `4px solid ${color}` }}>
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <h3 className="font-serif font-bold text-lg">{party}</h3>
            </div>

            {/* Members */}
            <div className="divide-y divide-brief-border dark:divide-white/5">
              {members.map((leg) => (
                <div key={leg.nameEn} className="px-5 py-4 flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-serif font-bold text-foreground/30">
                      {leg.name.charAt(0)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{leg.name}</span>
                      <span className="text-xs text-foreground/30">{leg.nameEn}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-foreground/40">{leg.role}</span>
                      <span className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 bg-foreground/5 rounded-full text-foreground/35">
                        {leg.chamber === "house" ? "衆" : "参"}
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {leg.x && (
                      <a
                        href={leg.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors"
                        aria-label={`${leg.name} on X`}
                      >
                        <XIcon />
                      </a>
                    )}
                    {leg.website && (
                      <a
                        href={leg.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors"
                        aria-label={`${leg.name} website`}
                      >
                        <WebIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
