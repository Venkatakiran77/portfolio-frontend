// src/components/navigation/Navbar.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress.js";
import { useIsMobile } from "@/hooks/useMediaQuery.js";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll.js";
import { ThemeToggleButton } from "@/components/buttons/ThemeToggleButton.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { NAV_ITEMS } from "@/constants/nav.js";
import { portfolioConfig } from "@/config/portfolio.config.js";
import { cn } from "@/utils/cn.js";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useIsMobile();

  const sectionIds = NAV_ITEMS.map((link) => link.id);

  const { activeSection } = useScrollProgress({
    sectionIds,
  });

  useLockBodyScroll(isDrawerOpen);

  const handleLinkClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsDrawerOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = portfolioConfig.resume.filePath;
    link.download = portfolioConfig.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className="
      sticky top-0 z-40
      border-b
      backdrop-blur-xl
      transition-all duration-300
    "
      style={{
        borderColor: "var(--color-border-default)",
        background: "var(--color-bg-overlay)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-primary-hover))",
            }}
          >
            {portfolioConfig.initials || "VK"}
          </span>

          <span className="flex flex-col leading-tight">
            <span
              className="text-sm font-semibold"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {portfolioConfig.name}
            </span>

            <span
              className="text-xs"
              style={{
                color: "var(--color-text-tertiary)",
              }}
            >
              {portfolioConfig.title}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300",
                    activeSection === link.id
                      ? ""
                      : "hover:opacity-100 opacity-80",
                  )}
                  style={{
                    color:
                      activeSection === link.id
                        ? "var(--color-accent-primary)"
                        : "var(--color-text-secondary)",
                  }}
                >
                  {link.label}
                </button>

                {activeSection === link.id && (
                  <motion.span
                    layoutId="navUnderline"
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: "var(--color-accent-primary)",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Right */}
        <div className="flex items-center gap-3">
          {!isMobile && <ThemeToggleButton />}

          {!isMobile && (
            <Button
              variant="secondary"
              size="sm"
              iconLeft={<Download size={14} />}
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          )}

          {isMobile && (
            <button
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobile && isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="fixed right-0 top-0 z-50 h-full w-72 p-6"
              style={{
                background: "var(--color-bg-secondary)",
                borderLeft: "1px solid var(--color-border-default)",
              }}
            >
              <button
                aria-label="Close menu"
                onClick={() => setIsDrawerOpen(false)}
                className="mb-8"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                <X size={24} />
              </button>

              <ul className="flex flex-col gap-6">
                {NAV_ITEMS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-lg font-medium transition-colors duration-300"
                      style={{
                        color:
                          activeSection === link.id
                            ? "var(--color-accent-primary)"
                            : "var(--color-text-secondary)",
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-3">
                <ThemeToggleButton />

                <Button
                  variant="secondary"
                  size="sm"
                  iconLeft={<Download size={14} />}
                  onClick={handleDownloadCV}
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
