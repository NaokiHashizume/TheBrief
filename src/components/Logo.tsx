export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <span className="font-serif text-[11px] font-bold tracking-[5px] text-foreground/40 uppercase leading-none">
        The
      </span>
      <svg
        viewBox="0 0 300 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[36px] w-auto"
        aria-label="Brief"
      >
        <text x="0" y="62" fontFamily="'Playfair Display', serif" fontSize="68" fontWeight="900" className="fill-foreground">B</text>
        <text x="46" y="62" fontFamily="'Playfair Display', serif" fontSize="68" fontWeight="900" className="fill-foreground">r</text>
        <text x="78" y="62" fontFamily="'Playfair Display', serif" fontSize="68" fontWeight="900" className="fill-foreground">ı</text>
        <circle cx="90" cy="8" r="7" fill="#d94f3d" />
        <text x="100" y="62" fontFamily="'Playfair Display', serif" fontSize="68" fontWeight="900" className="fill-foreground">ef</text>
      </svg>
    </div>
  );
}

export function LogoIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-label="The Brief">
      <text x="2" y="30" fontFamily="'Playfair Display', serif" fontSize="32" fontWeight="900" className="fill-foreground">B</text>
      <circle cx="30" cy="5" r="5" fill="#d94f3d" />
    </svg>
  );
}
