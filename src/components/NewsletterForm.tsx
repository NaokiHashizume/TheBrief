"use client";

export function NewsletterForm({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <form
      className={`flex ${compact ? "flex-row" : "flex-col gap-2"}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@example.com"
        className={`flex-1 px-4 py-3 text-sm focus:outline-none transition-colors ${
          dark
            ? "bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-brief-red"
            : "border border-brief-border bg-brief-card text-foreground placeholder-foreground/40 rounded-l-lg focus:border-brief-red"
        } ${!compact ? "rounded-lg" : ""}`}
      />
      <button
        type="submit"
        className={`px-5 py-3 text-xs font-bold uppercase tracking-[2px] bg-brief-red text-white hover:bg-brief-red/90 transition-colors ${
          !compact ? "rounded-lg" : dark ? "" : "rounded-r-lg"
        }`}
      >
        Subscribe
      </button>
    </form>
  );
}
