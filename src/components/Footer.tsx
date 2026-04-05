import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-brief-border bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-xs text-foreground/55 leading-relaxed">
              Politics · Economy · Industry · Trends
            </p>
            <a
              href="https://x.com/thebrief_info"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @thebrief_info on X"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-foreground/55 hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @thebrief_info
            </a>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/55 mb-3">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/politics" className="hover:text-foreground transition-colors">Politics</a></li>
              <li><a href="/economy" className="hover:text-foreground transition-colors">Economy</a></li>
              <li><a href="/industry" className="hover:text-foreground transition-colors">Industry</a></li>
              <li><span className="text-foreground/45 cursor-default">University</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/55 mb-3">
              More
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><span className="text-foreground/45 cursor-default">Lifestyle</span></li>
              <li><span className="text-foreground/45 cursor-default">Opinion</span></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/55 mb-3">
              Newsletter
            </h4>
            <p className="text-sm text-foreground/70 mb-3">
              毎朝、厳選ニュースをお届け。
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brief-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/45">
          <span>&copy; {new Date().getFullYear()} The Brief. All rights reserved.</span>
          <a href="/privacy" className="hover:text-foreground/60 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
