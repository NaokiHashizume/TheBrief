"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";
import { sampleStories } from "@/lib/stories";
import { StoryCardCompact } from "./StoryTimeline";

const featureIcons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="6" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="18" r="2" /><line x1="6.5" y1="7.5" x2="10.5" y2="10.5" /><line x1="13.5" y1="13.5" x2="17.5" y2="16.5" /></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.5" y1="7.5" x2="15.5" y2="16.5" /><line x1="15.5" y1="7.5" x2="8.5" y2="16.5" /></svg>,
];

const categoryMeta = [
  { key: "Politics", titleKey: "cat.politics.title" as const, descKey: "cat.politics.desc" as const, href: "/politics", color: "#e53e3e" },
  { key: "Economy", titleKey: "cat.economy.title" as const, descKey: "cat.economy.desc" as const, href: "/economy", color: "#3182ce" },
  { key: "Industry", titleKey: "cat.industry.title" as const, descKey: "cat.industry.desc" as const, href: "/industry", color: "#38a169" },
  { key: "Lifestyle", titleKey: "cat.lifestyle.title" as const, descKey: "cat.lifestyle.desc" as const, href: "#", color: "#d69e2e", comingSoon: true },
  { key: "Opinion", titleKey: "cat.opinion.title" as const, descKey: "cat.opinion.desc" as const, href: "#", color: "#805ad5", comingSoon: true },
  { key: "University", titleKey: "cat.university.title" as const, descKey: "cat.university.desc" as const, href: "#", color: "#00b5d8", comingSoon: true },
];

export function HomeContent() {
  const { locale, t } = useLanguage();

  const features = [
    { titleKey: "feature.1.title" as const, descKey: "feature.1.desc" as const, titleEn: "Storylines" },
    { titleKey: "feature.2.title" as const, descKey: "feature.2.desc" as const, titleEn: "Clear & Simple" },
    { titleKey: "feature.3.title" as const, descKey: "feature.3.desc" as const, titleEn: "Connected" },
  ];

  return (
    <div>
      {/* ━━━ Hero ━━━ */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <Logo className="items-center scale-150" />
        </div>

        <h1 className="mt-10 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-normal">
          {locale === "ja" ? (
            <>
              日本の政治・経済・業界情報・生活を
              <br className="hidden md:block" />
              もっと<span className="text-foreground font-bold">分かりやすく</span>、
              <span className="text-foreground font-bold">繋がりを持って</span>伝える。
            </>
          ) : (
            <>
              Japanese politics, economy, and industry —
              <br className="hidden md:block" />
              explained <span className="text-foreground font-bold">clearly</span>,{" "}
              connected <span className="text-foreground font-bold">meaningfully</span>.
            </>
          )}
        </h1>

        <p className="mt-4 text-sm text-foreground/50 leading-relaxed max-w-xl mx-auto">
          {locale === "ja"
            ? "ニュースは「点」ではなく「線」で理解する。The Briefは、出来事の背景・因果・影響を繋いで伝える日本語メディアです。"
            : "News understood as storylines, not isolated events. The Brief connects context, causes, and consequences in Japanese media."}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-xl hover:bg-brief-red/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            {t("hero.cta.politics")}
          </Link>
          <a
            href="#about"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-xl hover:bg-foreground/5 transition-all"
          >
            {t("hero.cta.about")}
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ What makes The Brief different ━━━ */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">{t("features.subtitle")}</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.titleEn} className="text-center md:text-left bg-brief-card border border-brief-border rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brief-red/10 text-brief-red mb-4">
                {featureIcons[i]}
              </div>
              <h3 className="font-serif text-lg font-bold">{t(f.titleKey)}</h3>
              <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">{f.titleEn}</span>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                {t(f.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Visual: point vs line */}
        <div className="mt-16 p-8 bg-brief-card border border-brief-border rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-foreground/45">{t("visual.traditional")}</span>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/10" />
              </div>
              <p className="mt-3 text-sm text-foreground/50">{t("visual.traditional.desc")}</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-brief-red">The Brief</span>
              <div className="mt-3 flex items-center gap-0">
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-foreground/20" />
                <div className="w-12 h-0.5 bg-foreground/10" />
                <div className="w-3 h-3 rounded-full bg-brief-red" />
              </div>
              <p className="mt-3 text-sm text-foreground/60">{t("visual.brief.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ Categories ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">{t("categories.subtitle")}</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            {t("categories.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryMeta.map((cat) => {
            const isComingSoon = "comingSoon" in cat && cat.comingSoon;
            const inner = (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                  <h3 className="font-serif font-bold text-lg">{cat.key}</h3>
                  <span className="text-xs text-foreground/45">{t(cat.titleKey)}</span>
                  {isComingSoon && (
                    <span className="text-[9px] tracking-wider uppercase text-foreground/45 border border-foreground/10 px-1.5 py-0.5 rounded">
                      {t("coming_soon")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground/55 leading-relaxed pl-5">
                  {t(cat.descKey)}
                </p>
              </>
            );
            return isComingSoon ? (
              <div key={cat.key} className="group p-5 rounded-xl bg-brief-card border border-brief-border transition-all opacity-40 shadow-sm">
                {inner}
              </div>
            ) : (
              <Link key={cat.key} href={cat.href} className="group p-5 rounded-xl bg-brief-card border border-brief-border hover:border-foreground/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ Storylines preview ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">{t("storylines.subtitle")}</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            {t("storylines.title")}
          </h2>
          <p className="mt-3 text-sm text-foreground/55 max-w-lg mx-auto">
            {t("storylines.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStories.map((story) => (
            <StoryCardCompact key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border" />
      </div>

      {/* ━━━ CTA ━━━ */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          {t("cta.title")}
        </h2>
        <p className="mt-4 text-sm text-foreground/55 leading-relaxed max-w-lg mx-auto">
          {t("cta.desc")}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-xl hover:bg-brief-red/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            {t("cta.start")}
          </Link>
          <a
            href="https://x.com/thebrief_info"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-brief-card border border-brief-border text-sm font-medium rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow @thebrief_info
          </a>
        </div>
      </section>
    </div>
  );
}
