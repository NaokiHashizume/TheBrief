"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const categories = [
  { label: "Politics", href: "/politics" },
  { label: "Economy", href: "/economy" },
  { label: "Industry", href: "/industry" },
];

export function Header() {
  return (
    <header className="border-b border-brief-border bg-brief-card">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://x.com/thebrief_info"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
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
        <ul className="flex items-center gap-6 py-3 text-[11px] tracking-[2px] uppercase text-foreground/60 whitespace-nowrap">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className="hover:text-foreground rounded-lg px-3 py-1 -mx-3 hover:bg-foreground/5 transition-all"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
