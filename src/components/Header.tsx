"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const categories = [
  { label: "Politics", href: "/politics", color: "hover:text-[#e53e3e]" },
  { label: "Economy", href: "/economy", color: "hover:text-[#b9770e]" },
  { label: "Industry", href: "/industry", color: "hover:text-[#1e8449]" },
];

export function Header() {
  return (
    <header className="bg-background border-b border-brief-rule sticky top-0 z-40">
      {/* Utility bar */}
      <div className="border-b border-brief-rule bg-background">
        <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-between text-[10px] text-foreground/50 uppercase tracking-[2px] font-medium">
          <span className="hidden sm:inline">Politics · Economy · Industry · Trends</span>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://x.com/thebrief_info"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="Follow us on X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col items-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo className="items-center" />
        </Link>

        {/* Category navigation */}
        <nav className="w-full flex justify-center gap-10 mt-5 border-t border-brief-rule pt-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`nav-link text-[11px] tracking-[2.5px] uppercase font-medium text-foreground/60 ${cat.color} transition-colors`}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
