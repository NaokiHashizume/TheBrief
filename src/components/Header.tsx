"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const industries = [
  { label: "AI / Technology", href: "/category/industry/ai" },
  { label: "Semiconductors", href: "/category/industry/semiconductors" },
  { label: "Automotive / Mobility", href: "/category/industry/automotive" },
  { label: "Pharma / Healthcare", href: "/category/industry/pharma" },
  { label: "Finance / Fintech", href: "/category/industry/finance" },
  { label: "Energy", href: "/category/industry/energy" },
  { label: "Real Estate", href: "/category/industry/real-estate" },
  { label: "Media / Entertainment", href: "/category/industry/media" },
  { label: "Retail / E-Commerce", href: "/category/industry/retail" },
];

const categories = [
  { label: "Politics", href: "/politics" },
  { label: "Economy", href: "/economy" },
  { label: "Industry", href: "/category/industry", hasDropdown: true },
  { label: "Lifestyle", href: "/category/lifestyle" },
  { label: "Opinion", href: "/category/opinion" },
  { label: "University", href: "/category/university" },
];

function IndustryDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 mt-1 py-2 bg-white dark:bg-brief-dark border border-brief-border dark:border-white/10 rounded-lg shadow-lg z-50 min-w-[220px]"
    >
      <Link
        href="/category/industry"
        onClick={onClose}
        className="block px-4 py-2 text-xs tracking-wider uppercase text-foreground/70 font-medium hover:bg-foreground/5 hover:text-brief-red transition-colors"
      >
        All Industries
      </Link>
      <div className="h-px bg-brief-border dark:bg-white/10 my-1" />
      {industries.map((ind) => (
        <Link
          key={ind.href}
          href={ind.href}
          onClick={onClose}
          className="block px-4 py-2 text-xs tracking-wider uppercase text-foreground/50 hover:bg-foreground/5 hover:text-brief-red transition-colors"
        >
          {ind.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="border-b border-brief-border dark:border-white/10">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://x.com/thebrief_info"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Follow us on X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center gap-6 py-3 text-[11px] tracking-[2px] uppercase text-foreground/50 whitespace-nowrap">
          {categories.map((cat) => (
            <li key={cat.href} className="relative">
              {cat.hasDropdown ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                  {cat.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <IndustryDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)} />
                </button>
              ) : (
                <Link
                  href={cat.href}
                  className="hover:text-foreground transition-colors"
                >
                  {cat.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
