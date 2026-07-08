import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@/styles/tailwind.css";
import "@/styles/globals.css";

// Locate the mounting root element in index.html
const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Critical Initialization Failure: Target container '#root' was not found in the DOM. Ensure index.html contains a <div id=\"root\"></div> element.",
  );
}

// Create the concurrent React 19 root
const root = createRoot(container);

// Render the application wrapped in StrictMode to surface potential side-effects or rendering bugs
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
