"use client";

import { useState } from "react";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  cabinet,
  legislators,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";
import { LegislatorsByParty } from "@/components/LegislatorsByParty";

type Section = "diet" | "cabinet" | "legislators" | null;

const sections = [
  {
    id: "diet" as const,
    title: "国会",
    titleEn: "National Diet",
    description: "衆議院・参議院の政党別議席数",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h1" />
        <path d="M14 10h1" />
        <path d="M9 14h1" />
        <path d="M14 14h1" />
      </svg>
    ),
  },
  {
    id: "cabinet" as const,
    title: "内閣",
    titleEn: "Cabinet",
    description: "内閣総理大臣・各大臣の顔ぶれ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "legislators" as const,
    title: "議員",
    titleEn: "Legislators",
    description: "各政党の主要議員一覧",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const partyOrder = [
  "自由民主党",
  "中道改革連合",
  "日本維新の会",
  "国民民主党",
  "参政党",
  "チームみらい",
  "日本共産党",
  "れいわ新選組",
];

function buildPartyColors() {
  const colors: Record<string, string> = {};
  for (const p of [...houseOfRepresentatives, ...houseOfCouncillors]) {
    colors[p.name] = p.color;
  }
  return colors;
}

export function PoliticsContent() {
  const [active, setActive] = useState<Section>(null);
  const partyColors = buildPartyColors();

  return (
    <>
      {/* Section selector cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {sections.map((sec) => {
          const isActive = active === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActive(isActive ? null : sec.id)}
              className={`group text-left p-6 rounded-xl border transition-all duration-200 ${
                isActive
                  ? "border-brief-red bg-brief-red/5 dark:bg-brief-red/10"
                  : "border-brief-border dark:border-white/5 hover:border-foreground/20 dark:hover:border-white/20 hover:bg-foreground/[0.02]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`transition-colors ${isActive ? "text-brief-red" : "text-foreground/25 group-hover:text-foreground/40"}`}>
                  {sec.icon}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 text-foreground/20 ${isActive ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <h2 className="font-serif text-xl font-bold mt-4">{sec.title}</h2>
              <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">{sec.titleEn}</span>
              <p className="text-sm text-foreground/40 mt-2">{sec.description}</p>
            </button>
          );
        })}
      </div>

      {/* Content area */}
      {active === "diet" && <DietSection />}
      {active === "cabinet" && <CabinetSection />}
      {active === "legislators" && (
        <LegislatorsSection partyColors={partyColors} />
      )}

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-foreground/[0.03] rounded-lg text-xs text-foreground/35 leading-relaxed">
        ※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。
      </div>
    </>
  );
}

function SectionTitle({ title, titleEn }: { title: string; titleEn: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div>
        <h2 className="font-serif text-2xl font-bold">{title}</h2>
        <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">{titleEn}</span>
      </div>
      <div className="flex-1 h-px bg-brief-border dark:bg-white/10" />
    </div>
  );
}

function DietSection() {
  return (
    <div className="mt-8">
      <SectionTitle title="国会" titleEn="National Diet" />

      <h3 className="font-serif text-lg font-bold mb-3 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
        衆議院
        <span className="text-xs font-normal text-foreground/30">House of Representatives</span>
      </h3>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      <h3 className="font-serif text-lg font-bold mb-3 mt-10 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
        参議院
        <span className="text-xs font-normal text-foreground/30">House of Councillors</span>
      </h3>
      <div className="p-6 border border-brief-border dark:border-white/5 rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>
    </div>
  );
}

function CabinetSection() {
  return (
    <div className="mt-8">
      <SectionTitle title="内閣" titleEn="Cabinet" />

      <div className="border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 bg-foreground/[0.03]">
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/35">
            {cabinet[0].positionEn}
          </span>
          <div className="mt-1 flex items-baseline gap-3">
            <h3 className="font-serif text-2xl font-bold">{cabinet[0].name}</h3>
            <span className="text-sm text-foreground/40">{cabinet[0].nameEn}</span>
          </div>
          <span className="text-xs text-foreground/35">{cabinet[0].party}</span>
          {cabinet[0].note && (
            <span className="ml-2 text-xs text-brief-red">{cabinet[0].note}</span>
          )}
        </div>

        <div className="divide-y divide-brief-border dark:divide-white/5">
          {cabinet.slice(1).map((member) => (
            <div key={member.positionEn} className="px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-foreground/35 mb-0.5">{member.position}</div>
                <div className="font-medium">{member.name}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-foreground/30">{member.nameEn}</div>
                <div className="text-xs text-foreground/25">{member.party}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LegislatorsSection({ partyColors }: { partyColors: Record<string, string> }) {
  return (
    <div className="mt-8">
      <SectionTitle title="議員" titleEn="Legislators" />
      <p className="text-sm text-foreground/40 mb-6">
        各政党の主要議員一覧。ウェブサイト・SNSへのリンク付き。
      </p>
      <LegislatorsByParty
        legislators={legislators}
        partyOrder={partyOrder}
        partyColors={partyColors}
      />
    </div>
  );
}
