"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="text-[80px] font-serif font-bold leading-none text-foreground/10 select-none">
        Error
      </div>

      <h1 className="font-serif text-2xl md:text-3xl font-bold mt-4 mb-4">
        Something went wrong
      </h1>

      <p className="text-sm text-foreground/60 mb-8 max-w-md mx-auto leading-relaxed">
        予期しないエラーが発生しました。再度お試しください。
      </p>

      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
        Retry
      </button>
    </div>
  );
}
