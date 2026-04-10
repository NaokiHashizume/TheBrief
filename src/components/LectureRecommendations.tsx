"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lecture } from "@/lib/lectures";
import type { UniversityCategory } from "@/lib/university";

type Props = {
  candidates: Lecture[];
  categories: UniversityCategory[];
};

export function LectureRecommendations({ candidates, categories }: Props) {
  const [picks, setPicks] = useState<Lecture[]>([]);

  useEffect(() => {
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    setPicks(shuffled.slice(0, 2));
  }, [candidates]);

  if (picks.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="text-[10px] font-bold uppercase tracking-[2.8px] text-foreground/45 mb-4">
        Next Lecture
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {picks.map((rec) => {
          const recCategory = categories.find((c) => c.id === rec.category);
          const recAccent = recCategory?.color ?? "#6366f1";
          return (
            <Link
              key={rec.slug}
              href={`/university/${rec.category}/${rec.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-brief-border bg-brief-card p-4 hover:border-foreground/20 transition-all duration-200"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-bold uppercase tracking-[1.5px]"
                style={{ backgroundColor: `${recAccent}15`, color: recAccent }}
              >
                {rec.badge.split(" ").slice(-1)[0]}
              </div>
              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[2px] text-foreground/40 mb-0.5">
                  {recCategory?.label ?? rec.category}
                </div>
                <div
                  className="font-serif font-bold text-[15px] leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ color: recAccent }}
                >
                  {rec.title}
                </div>
                <div className="text-[11px] text-foreground/50 mt-1 leading-relaxed line-clamp-2">
                  {rec.subtitle}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
