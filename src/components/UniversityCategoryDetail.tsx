import type { UniversityCategory } from "@/lib/university";
import { getUniversityCounts } from "@/lib/university";

export function UniversityCategoryDetail({ category }: { category: UniversityCategory }) {
  const counts = getUniversityCounts(category);

  return (
    <div className="space-y-6">
      <section
        className="rounded-[28px] border p-6 md:p-8"
        style={{
          borderColor: `${category.color}33`,
          background: `linear-gradient(135deg, ${category.color}14, rgba(15,23,42,0.02))`,
        }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
              style={{
                color: category.color,
                borderColor: `${category.color}33`,
                backgroundColor: `${category.color}12`,
              }}
            >
              Discipline Detail
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold md:text-5xl">{category.label}</h1>
            <p className="mt-2 text-base font-medium" style={{ color: category.color }}>
              {category.desc}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/70 md:text-[15px]">
              {category.lead}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <div className="text-2xl font-bold tabular-nums">{counts.subCount}</div>
              <div className="text-[11px] uppercase tracking-[2px] text-foreground/45">Subfields</div>
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-background/80 px-4 py-3">
              <div className="text-2xl font-bold tabular-nums">{counts.itemCount}</div>
              <div className="text-[11px] uppercase tracking-[2px] text-foreground/45">Topics</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {category.subs.map((sub) => (
          <article
            key={sub.name}
            className="rounded-[24px] border border-brief-border bg-brief-card p-5 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div
                  className="text-[10px] font-bold uppercase tracking-[2.6px]"
                  style={{ color: category.color }}
                >
                  Subfield
                </div>
                <h2 className="mt-2 font-serif text-2xl font-bold">{sub.name}</h2>
              </div>
              <div
                className="rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{
                  backgroundColor: `${category.color}14`,
                  color: category.color,
                }}
              >
                {sub.items.length}科目
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {sub.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1.5 text-xs font-medium"
                  style={{
                    borderColor: `${category.color}33`,
                    backgroundColor: `${category.color}12`,
                    color: category.color,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
