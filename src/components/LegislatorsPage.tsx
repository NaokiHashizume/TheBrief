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

      {/* Desktop: individual bars */}
      <div className="hidden md:flex items-center gap-3 flex-shrink-0">
        <ScoreBar label="質疑" value={leg.metrics.legislation} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="SNS" value={leg.metrics.socialMedia} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="メディア" value={leg.metrics.mediaPresence} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
        <ScoreBar label="委員会" value={leg.metrics.committee} color={isTop ? "bg-brief-red/60" : "bg-amber-500/60"} />
      </div>
      {/* Mobile: compact bar */}
      <div className="flex md:hidden items-center gap-2 flex-shrink-0">
        <div className="w-20">
          <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden flex">
            <div className={`h-full ${isTop ? "bg-brief-red/60" : "bg-amber-500/60"}`} style={{ width: `${(leg.metrics.legislation + leg.metrics.socialMedia + leg.metrics.mediaPresence + leg.metrics.committee) / 4}%` }} />
          </div>
        </div>
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

      <details className="mb-8 text-sm">
        <summary className="text-xs text-foreground/40 cursor-pointer hover:text-foreground/60 transition-colors">
          採点方法について ▸
        </summary>
        <div className="mt-3 p-4 bg-foreground/[0.03] rounded-lg text-xs text-foreground/40 leading-relaxed space-y-2">
          <p>スコアは以下の4項目を各25点満点（計100点）で評価しています：</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><span className="text-foreground/60 font-medium">質疑（25点）</span>：国会での質問回数・質問の質。本会議・委員会での発言時間を基準に算出。</li>
            <li><span className="text-foreground/60 font-medium">SNS（25点）</span>：X（旧Twitter）のフォロワー数・投稿頻度・政策に関する情報発信の質。</li>
            <li><span className="text-foreground/60 font-medium">メディア（25点）</span>：テレビ・新聞・ネットメディアへの出演回数と報道露出。</li>
            <li><span className="text-foreground/60 font-medium">委員会（25点）</span>：所属委員会への出席率と委員会での発言回数。</li>
          </ul>
          <p className="text-foreground/30">※閣僚は答弁側に立つため質疑スコアが低くなります。データは2026年3月時点。</p>
        </div>
      </details>

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

const INITIAL_SHOW = 20;

function ChamberMemberList({ members, label }: { members: Legislator[]; label: string }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? members : members.slice(0, INITIAL_SHOW);
  const hasMore = members.length > INITIAL_SHOW;

  return (
    <>
      <div className="px-5 py-2.5 bg-foreground/[0.02] flex items-center gap-2">
        <span className="text-xs font-bold text-foreground/50">{label}</span>
        <span className="text-[10px] text-foreground/25">{members.length}名</span>
      </div>
      <div className="divide-y divide-brief-border dark:divide-white/5">
        {visible.map((leg) => (
          <MemberRow key={leg.nameEn} leg={leg} />
        ))}
      </div>
      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full px-5 py-3 text-xs text-foreground/40 hover:text-foreground/60 hover:bg-foreground/[0.02] transition-colors text-center"
        >
          残り{members.length - INITIAL_SHOW}名を表示 ▾
        </button>
      )}
    </>
  );
}

function MemberRow({ leg, partyColors }: { leg: Legislator; partyColors?: Record<string, string> }) {
  return (
    <div className="px-5 py-3 flex items-center gap-4">
      <div className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-serif font-bold text-foreground/30">
          {leg.name.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {partyColors && (
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: partyColors[leg.party] || "#999" }}
            />
          )}
          <span className="font-medium text-sm">{leg.name}</span>
          <span className="text-xs text-foreground/25">{leg.nameEn}</span>
          {partyColors && (
            <span className="text-[9px] tracking-wider uppercase px-1.5 py-0.5 bg-foreground/5 rounded-full text-foreground/35">
              {leg.chamber === "house" ? "衆" : "参"}
            </span>
          )}
        </div>
        <div className="text-xs text-foreground/35 mt-0.5">
          {partyColors && <span style={{ color: partyColors[leg.party] || "#999" }}>{leg.party} · </span>}
          {leg.role}
        </div>
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
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = searchQuery.length > 0
    ? legislators.filter((leg) => {
        const q = searchQuery.toLowerCase();
        return leg.name.toLowerCase().includes(q) || leg.nameEn.toLowerCase().includes(q);
      })
    : [];

  const handlePartyClick = (party: string) => {
    setSelectedParty(selectedParty === party ? null : party);
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

      {/* 議員検索 */}
      <div className="mb-6">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/25">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="議員名で検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-foreground/[0.03] border border-brief-border dark:border-white/5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-brief-red/50 transition-colors"
          />
        </div>
      </div>

      {searchQuery.length > 0 ? (
        <div className="border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
          <div className="px-5 py-3 text-xs text-foreground/40">
            「{searchQuery}」の検索結果: {searchResults.length}件
          </div>
          {searchResults.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-foreground/30">
              該当する議員が見つかりません
            </div>
          ) : (
            <div className="divide-y divide-brief-border dark:divide-white/5">
              {searchResults.map((leg) => (
                <MemberRow key={leg.nameEn} leg={leg} partyColors={partyColors} />
              ))}
            </div>
          )}
        </div>
      ) : (
      <div className="space-y-4">
        {partyOrder.map((party) => {
          const info = partyInfoMap.get(party);
          if (!info) return null;
          const houseMembers = legislators.filter((l) => l.party === party && l.chamber === "house");
          const councilMembers = legislators.filter((l) => l.party === party && l.chamber === "council");
          const isOpen = selectedParty === party;

          return (
            <div key={party}>
              <PartyCard
                party={info}
                memberCount={{ house: houseMembers.length, council: councilMembers.length }}
                isSelected={isOpen}
                onClick={() => handlePartyClick(party)}
              />

              {/* Inline accordion: members appear directly below the card */}
              {isOpen && (
                <div className="mt-1 border border-brief-border dark:border-white/5 rounded-xl overflow-hidden"
                  style={{ borderTop: `3px solid ${partyColors[party] || "#999"}` }}>

                  {/* 衆議院 */}
                  {houseMembers.length > 0 && (
                    <ChamberMemberList members={houseMembers} label="衆議院" />
                  )}

                  {/* 参議院 */}
                  {councilMembers.length > 0 && (
                    <div className="border-t border-brief-border dark:border-white/5">
                      <ChamberMemberList members={councilMembers} label="参議院" />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
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
