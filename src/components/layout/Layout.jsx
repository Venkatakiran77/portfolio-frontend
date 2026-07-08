// src/components/layout/Layout.jsx
import { ScrollProgressBar } from "@/components/navigation/ScrollProgressBar.jsx";
import { CursorGlow } from "@/components/layout/CursorGlow.jsx";
import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/layout/Footer.jsx";
import { ScrollToTop } from "@/components/navigation/ScrollToTop.jsx";
import { CommandPalette } from "@/components/navigation/CommandPalette.jsx";

/**
 * Layout — global page shell. Wraps every route's content (via children or
 * an Outlet, depending on how AppRouter.jsx, Step 76, is structured).
 */
export function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">{children}</main>

      <Footer />
      <ScrollToTop />
      <CommandPalette />
    </div>
  );
}

export default Layout;
