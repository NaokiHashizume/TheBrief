"use client";

import { useState } from "react";
import type { Legislator, RankedLegislator } from "@/lib/politics";
import type { PartyInfo } from "@/lib/partyInfo";

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

/* ────────── Ranking Section ────────── */

function RankingCard({
  leg,
  variant,
}: {
  leg: RankedLegislator;
  variant: "top" | "bottom";
}) {
  const isTop = variant === "top";

  return (
    <div
      className="flex items-center gap-4 p-4 border border-brief-border dark:border-white/5 rounded-xl hover:bg-foreground/[0.02] transition-colors"
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg ${
        isTop && leg.rank <= 3
          ? "bg-brief-red/10 text-brief-red"
          : !isTop
            ? "bg-amber-500/10 text-amber-500"
            : "bg-foreground/5 text-foreground/30"
      }`}>
        {leg.rank}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold">{leg.name}</span>
          <span className="text-xs text-foreground/30">{leg.nameEn}</span>
          <span className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 bg-foreground/5 rounded-full text-foreground/35">
            {leg.chamber === "house" ? "衆" : "参"}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs" style={{ color: leg.partyColor }}>{leg.party}</span>
          <span className="text-xs text-foreground/30">· {leg.role}</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
        <ScoreBar label="質疑" value={leg.metrics.legislation} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="SNS" value={leg.metrics.socialMedia} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="メディア" value={leg.metrics.mediaPresence} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="委員会" value={leg.metrics.committee} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
      </div>

      <div className="text-right flex-shrink-0 ml-2">
        <div className={`text-lg font-bold tabular-nums ${!isTop ? "text-amber-500" : ""}`}>{leg.score}</div>
        <div className="text-[9px] text-foreground/25 uppercase tracking-wider">Score</div>
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        {leg.x && (
          <a href={leg.x} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors">
            <XIcon />
          </a>
        )}
        {leg.website && (
          <a href={leg.website} target="_blank" rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors">
            <WebIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function RankingSection({
  rankingTop,
  rankingBottom,
}: {
  rankingTop: RankedLegislator[];
  rankingBottom: RankedLegislator[];
}) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold">議員活動ランキング</h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">
            Legislator Activity Ranking
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
      </div>

      <p className="text-sm text-foreground/40 mb-8">
        国会質疑・法案提出・委員会出席・SNS発信力・メディア露出を総合的に評価したランキングです。
      </p>

      {/* Top 5 */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brief-red">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <h3 className="font-serif text-lg font-bold">上位 5</h3>
          <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">Top 5</span>
        </div>
        <div className="space-y-3">
          {rankingTop.map((leg) => (
            <RankingCard key={leg.nameEn} leg={leg} variant="top" />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-[10px] text-foreground/20 tracking-wider uppercase">· · ·</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Bottom 5 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <h3 className="font-serif text-lg font-bold">下位 5</h3>
          <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">Bottom 5</span>
        </div>
        <p className="text-xs text-foreground/30 mb-4">
          ※大臣・党役職者は答弁側のため質疑回数が低くなる傾向があります。閣僚在任中の議員は評価対象外としています。
        </p>
        <div className="space-y-3">
          {rankingBottom.map((leg) => (
            <RankingCard key={leg.nameEn} leg={leg} variant="bottom" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreBar({ label, value, color = "bg-brief-red/60" }: { label: string; value: number; color?: string }) {
  return (
    <div className="w-16">
      <div className="text-[8px] text-foreground/25 mb-0.5">{label}</div>
      <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ────────── Party Card ────────── */

function PartyCard({
  party,
  memberCount,
  isSelected,
  onClick,
}: {
  party: PartyInfo;
  memberCount: { house: number; council: number };
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
        isSelected
          ? "border-current bg-current/[0.03]"
          : "border-brief-border dark:border-white/5 hover:border-foreground/15 dark:hover:border-white/15"
      }`}
      style={isSelected ? { borderColor: party.color, color: party.color } : {}}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-sm flex-shrink-0"
            style={{ backgroundColor: party.color }}
          />
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">{party.name}</h3>
            <span className="text-[9px] tracking-[1.5px] uppercase text-foreground/25">{party.nameEn}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xs text-foreground/30">
            衆 <span className="font-bold text-foreground/60 tabular-nums">{memberCount.house}</span>
            <span className="mx-1">·</span>
            参 <span className="font-bold text-foreground/60 tabular-nums">{memberCount.council}</span>
          </div>
        </div>
      </div>

      {/* Leader & Founded */}
      <div className="flex items-center gap-3 mb-3 text-xs text-foreground/40">
        <span>代表: <span className="text-foreground/60 font-medium">{party.leader}</span></span>
        <span className="text-foreground/15">|</span>
        <span>設立: {party.founded}</span>
      </div>

      {/* Philosophy */}
      <p className="text-sm text-foreground/50 leading-relaxed mb-4">
        {party.philosophy}
      </p>

      {/* Key Policies */}
      <div className="flex flex-wrap gap-1.5">
        {party.policies.map((policy) => (
          <span
            key={policy}
            className="text-[10px] px-2 py-1 rounded-md bg-foreground/[0.04] text-foreground/45 leading-none"
          >
            {policy}
          </span>
        ))}
      </div>

      {/* Expand indicator */}
      <div className="mt-4 flex items-center gap-1 text-xs" style={{ color: party.color }}>
        <span className={`font-medium transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
          {isSelected ? "議員一覧を表示中" : "議員一覧を見る"}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform ${isSelected ? "rotate-90" : ""}`}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  );
}

/* ────────── Party Browser Section ────────── */

function PartyBrowser({
  legislators,
  partyOrder,
  partyColors,
  partyInfoList,
}: {
  legislators: Legislator[];
  partyOrder: string[];
  partyColors: Record<string, string>;
  partyInfoList: PartyInfo[];
}) {
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [selectedChamber, setSelectedChamber] = useState<"house" | "council" | null>(null);

  const filtered = legislators.filter(
    (l) => l.party === selectedParty && l.chamber === selectedChamber
  );

  const handlePartyClick = (party: string) => {
    if (selectedParty === party) {
      setSelectedParty(null);
      setSelectedChamber(null);
    } else {
      setSelectedParty(party);
      setSelectedChamber(null);
    }
  };

  const partyInfoMap = new Map(partyInfoList.map((p) => [p.name, p]));

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold">政党別議員一覧</h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">
            Browse by Party
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
      </div>

      {/* Party Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {partyOrder.map((party) => {
          const info = partyInfoMap.get(party);
          if (!info) return null;
          const houseCount = legislators.filter((l) => l.party === party && l.chamber === "house").length;
          const councilCount = legislators.filter((l) => l.party === party && l.chamber === "council").length;
          return (
            <PartyCard
              key={party}
              party={info}
              memberCount={{ house: houseCount, council: councilCount }}
              isSelected={selectedParty === party}
              onClick={() => handlePartyClick(party)}
            />
          );
        })}
      </div>

      {/* Chamber selection */}
      {selectedParty && !selectedChamber && (
        <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
          <p className="text-sm text-foreground/40 mb-4">
            <span className="font-bold text-foreground">{selectedParty}</span> の議員を表示する院を選んでください
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedChamber("house")}
              className="flex-1 p-4 rounded-xl border border-brief-border dark:border-white/5 hover:border-foreground/20 dark:hover:border-white/20 transition-all text-left"
            >
              <div className="font-serif font-bold text-lg">衆議院</div>
              <div className="text-xs text-foreground/30 mt-0.5">House of Representatives</div>
              <div className="text-xs text-foreground/40 mt-2">
                {legislators.filter((l) => l.party === selectedParty && l.chamber === "house").length}名
              </div>
            </button>
            <button
              onClick={() => setSelectedChamber("council")}
              className="flex-1 p-4 rounded-xl border border-brief-border dark:border-white/5 hover:border-foreground/20 dark:hover:border-white/20 transition-all text-left"
            >
              <div className="font-serif font-bold text-lg">参議院</div>
              <div className="text-xs text-foreground/30 mt-0.5">House of Councillors</div>
              <div className="text-xs text-foreground/40 mt-2">
                {legislators.filter((l) => l.party === selectedParty && l.chamber === "council").length}名
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Member list */}
      {selectedParty && selectedChamber && (
        <div className="border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
          {/* Header */}
          <div
            className="px-5 py-3 flex items-center justify-between"
            style={{ borderLeft: `4px solid ${partyColors[selectedParty] || "#999"}` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: partyColors[selectedParty] || "#999" }}
              />
              <h3 className="font-serif font-bold text-lg">{selectedParty}</h3>
              <span className="text-xs text-foreground/30">
                {selectedChamber === "house" ? "衆議院" : "参議院"}
              </span>
              <span className="text-xs text-foreground/20">
                {filtered.length}名
              </span>
            </div>
            <button
              onClick={() => setSelectedChamber(null)}
              className="text-xs text-foreground/40 hover:text-foreground transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              院を変更
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-foreground/30">
              該当する議員データがありません
            </div>
          ) : (
            <div className="divide-y divide-brief-border dark:divide-white/5">
              {filtered.map((leg) => (
                <div key={leg.nameEn} className="px-5 py-3 flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-serif font-bold text-foreground/30">
                      {leg.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{leg.name}</span>
                      <span className="text-xs text-foreground/25">{leg.nameEn}</span>
                    </div>
                    <div className="text-xs text-foreground/35 mt-0.5">{leg.role}</div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    {leg.x && (
                      <a href={leg.x} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors">
                        <XIcon />
                      </a>
                    )}
                    {leg.website && (
                      <a href={leg.website} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-full hover:bg-foreground/5 text-foreground/30 hover:text-foreground transition-colors">
                        <WebIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* ────────── Main Export ────────── */

export function LegislatorsPageContent({
  rankingTop,
  rankingBottom,
  legislators,
  partyOrder,
  partyColors,
  partyInfoList,
}: {
  rankingTop: RankedLegislator[];
  rankingBottom: RankedLegislator[];
  legislators: Legislator[];
  partyOrder: string[];
  partyColors: Record<string, string>;
  partyInfoList: PartyInfo[];
}) {
  return (
    <div className="space-y-16">
      <RankingSection rankingTop={rankingTop} rankingBottom={rankingBottom} />
      <PartyBrowser
        legislators={legislators}
        partyOrder={partyOrder}
        partyColors={partyColors}
        partyInfoList={partyInfoList}
      />
    </div>
  );
}
