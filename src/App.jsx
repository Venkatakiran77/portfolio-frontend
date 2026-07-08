// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/router/AppRouter.jsx";
import Layout from "@/components/layout/Layout.jsx";
import CursorGlow from "@/components/layout/CursorGlow.jsx";
// Import the ThemeProvider wrapper
import { ThemeProvider } from "@/hooks/useTheme.jsx";

/**
 * Root Application Component
 */
export function App() {
  return (
    // Step 1: Wrap everything at the absolute highest level inside the ThemeProvider
    <ThemeProvider>
      <BrowserRouter>
        {/* Interactive radial background layer tracking the user's cursor */}
        <CursorGlow />

        {/* Global layout component wrapping all views with consistent Navbar, Footer, and Grid lines */}
        <Layout>
          {/* Core routing tree rendering components based on the active browser path */}
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
