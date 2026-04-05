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
        className="flex-1 px-3 py-2.5 text-sm border border-brief-border rounded-xl bg-white focus:outline-none focus:border-brief-red"
      />
      <button
        type="submit"
        className="px-4 py-2.5 text-sm font-medium bg-brief-red text-white rounded-xl hover:opacity-80 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  );
}
