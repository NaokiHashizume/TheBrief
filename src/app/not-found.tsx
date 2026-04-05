import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="text-[120px] font-serif font-bold leading-none text-foreground/10 select-none">
        404
      </div>

      <h1 className="font-serif text-2xl md:text-3xl font-bold mt-4 mb-4">
        Page Not Found
      </h1>

      <p className="text-sm text-foreground/60 mb-8 max-w-md mx-auto leading-relaxed">
        お探しのページは見つかりませんでした。URLが正しいかご確認ください。
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Home
        </Link>
        <Link
          href="/politics"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-brief-border text-sm font-medium rounded-lg hover:bg-foreground/5 transition-colors"
        >
          Politics
        </Link>
        <Link
          href="/economy"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-brief-border text-sm font-medium rounded-lg hover:bg-foreground/5 transition-colors"
        >
          Economy
        </Link>
      </div>
    </div>
  );
}
