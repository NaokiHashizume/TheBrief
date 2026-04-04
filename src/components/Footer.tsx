import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-brief-border dark:border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-xs text-foreground/40 leading-relaxed">
              Politics · Economy · Industry · Trends
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="/category/politics" className="hover:text-foreground transition-colors">Politics</a></li>
              <li><a href="/category/economy" className="hover:text-foreground transition-colors">Economy</a></li>
              <li><a href="/category/industry" className="hover:text-foreground transition-colors">Industry</a></li>
              <li><a href="/category/tech" className="hover:text-foreground transition-colors">Tech & AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
              More
            </h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="/category/lifestyle" className="hover:text-foreground transition-colors">Lifestyle</a></li>
              <li><a href="/category/opinion" className="hover:text-foreground transition-colors">Opinion</a></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[2px] uppercase text-foreground/40 mb-3">
              Newsletter
            </h4>
            <p className="text-sm text-foreground/60 mb-3">
              毎朝、厳選ニュースをお届け。
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brief-border dark:border-white/10 text-center text-xs text-foreground/30">
          &copy; {new Date().getFullYear()} The Brief. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
