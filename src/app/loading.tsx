export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="animate-pulse space-y-8">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-12 bg-foreground/5 rounded" />
          <div className="h-3 w-3 bg-foreground/5 rounded" />
          <div className="h-3 w-16 bg-foreground/5 rounded" />
        </div>

        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="h-8 w-3/4 bg-foreground/5 rounded" />
          <div className="h-4 w-1/2 bg-foreground/5 rounded" />
        </div>

        {/* Content skeleton */}
        <div className="space-y-4 pt-4">
          <div className="h-4 w-full bg-foreground/5 rounded" />
          <div className="h-4 w-5/6 bg-foreground/5 rounded" />
          <div className="h-4 w-4/5 bg-foreground/5 rounded" />
          <div className="h-4 w-full bg-foreground/5 rounded" />
          <div className="h-4 w-3/4 bg-foreground/5 rounded" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-brief-border p-5 space-y-3">
              <div className="h-3 w-16 bg-foreground/5 rounded" />
              <div className="h-5 w-3/4 bg-foreground/5 rounded" />
              <div className="h-3 w-full bg-foreground/5 rounded" />
              <div className="h-3 w-2/3 bg-foreground/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
