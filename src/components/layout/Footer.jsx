// src/components/layout/Footer.jsx
import { Heart, Coffee, ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config.js";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-xs text-[var(--color-text-tertiary)] sm:flex-row sm:justify-between">
        <p>
          © {year} {portfolioConfig.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5">
          Built with
          <Heart size={13} className="fill-red-500 text-red-500" />
          and lots of
          <Coffee size={13} className="text-[var(--color-accent-start)]" />
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-start)] transition-colors"
        >
          Back to Top
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
