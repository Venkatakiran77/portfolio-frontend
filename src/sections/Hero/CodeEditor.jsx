// src/sections/Hero/CodeEditor.jsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce.js";

const LANGUAGES = ["JavaScript", "TypeScript", "Python", "Java"];

const CODE_LINES = [
  { num: 1, content: <>const developer = {"{"}</> },
  {
    num: 2,
    content: (
      <>
        {" "}
        name: <span className="text-emerald-400">"Venkata Kiran"</span>,
      </>
    ),
  },
  {
    num: 3,
    content: (
      <>
        {" "}
        role: <span className="text-emerald-400">"Full Stack Developer"</span>,
      </>
    ),
  },
  {
    num: 4,
    content: (
      <>
        {" "}
        experience: <span className="text-emerald-400">"2+ years"</span>,
      </>
    ),
  },
  {
    num: 5,
    content: (
      <>
        {" "}
        passion:{" "}
        <span className="text-emerald-400">
          "Building impactful digital solutions"
        </span>
        ,
      </>
    ),
  },
  {
    num: 6,
    content: (
      <>
        {" "}
        skills: [<span className="text-emerald-400">"React"</span>,{" "}
        <span className="text-emerald-400">"Node.js"</span>,{" "}
        <span className="text-emerald-400">"Spring Boot"</span>,{" "}
        <span className="text-emerald-400">"SQL"</span>
        ],
      </>
    ),
  },
  {
    num: 7,
    content: (
      <>
        {" "}
        focus:{" "}
        <span className="text-emerald-400">
          "Clean Code, Performance, User Experience"
        </span>
        ,
      </>
    ),
  },
  {
    num: 8,
    content: (
      <>
        {" "}
        currently:{" "}
        <span className="text-emerald-400">"Open to new opportunities"</span>,
      </>
    ),
  },
  { num: 9, content: <>{"}"};</> },
  { num: 10, content: <>&nbsp;</> },
  {
    num: 11,
    content: (
      <>
        <span className="text-purple-400">function</span>{" "}
        <span className="text-blue-400">buildImpact</span>() {"{"}
      </>
    ),
  },
  {
    num: 12,
    content: (
      <>
        {" "}
        <span className="text-purple-400">return</span>{" "}
        <span className="text-emerald-400">
          "Code + Creativity + Purpose = Impact 🚀"
        </span>
        ;
      </>
    ),
  },
  { num: 13, content: <>{"}"}</> },
  { num: 14, content: <>&nbsp;</> },
  {
    num: 24,
    content: (
      <>
        <span className="text-[var(--color-text-tertiary)]">
          // Let's build something amazing together!
        </span>
      </>
    ),
  },
];

export function CodeEditor() {
  const [ref, isInView] = useInViewOnce({ threshold: 0.2 });

  const [activeLang, setActiveLang] = useState("JavaScript");
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (visibleLines >= CODE_LINES.length) return;

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 55);

    return () => clearTimeout(timeout);
  }, [isInView, visibleLines]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl shadow-2xl"
      style={{
        background: "var(--color-bg-elevated)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>

        <div className="flex items-center gap-4 text-xs">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              style={{
                color:
                  lang === activeLang
                    ? "var(--color-accent-primary)"
                    : "var(--color-text-tertiary)",
              }}
              className="font-medium transition-colors duration-200 hover:text-[var(--color-text-secondary)]"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Code */}
      <div className="max-h-[400px] overflow-y-auto p-5 font-mono text-[13px] leading-relaxed">
        {CODE_LINES.slice(0, visibleLines).map((line) => (
          <div key={line.num} className="flex gap-4">
            <span
              className="w-6 flex-shrink-0 select-none"
              style={{
                color: "var(--color-text-tertiary)",
                opacity: 0.45,
              }}
            >
              {line.num}
            </span>

            <span
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {line.content}
            </span>
          </div>
        ))}

        {visibleLines < CODE_LINES.length && (
          <span
            className="ml-10 inline-block h-4 w-[2px] animate-pulse"
            style={{
              background: "var(--color-accent-primary)",
            }}
          />
        )}
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 text-xs font-medium"
        style={{
          borderTop: "1px solid var(--color-border-default)",
          color: "var(--color-accent-primary)",
        }}
      >
        → Ready to create impact
      </div>
    </motion.div>
  );
}

export default CodeEditor;
