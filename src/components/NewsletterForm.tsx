"use client";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`flex ${compact ? "flex-row gap-2" : "flex-col gap-2"}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@example.com"
        className="flex-1 px-3 py-2.5 text-sm border border-brief-border dark:border-white/10 rounded-lg bg-transparent focus:outline-none focus:border-brief-red"
      />
      <button
        type="submit"
        className="px-4 py-2.5 text-sm font-medium bg-brief-dark dark:bg-white text-white dark:text-brief-dark rounded-lg hover:opacity-80 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  );
}
