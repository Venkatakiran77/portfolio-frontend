// src/components/ui/Card.jsx

import { forwardRef } from "react";
import { cn } from "@/utils/cn.js";

export const Card = forwardRef(function Card(
  { hoverable = false, padding = "md", className = "", children, ...rest },
  ref,
) {
  const paddingMap = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl backdrop-blur-sm",
        "transition-all duration-300",
        hoverable && "hover:-translate-y-1",
        paddingMap[padding],
        className,
      )}
      style={{
        background: "var(--color-bg-elevated)",
        border: "1px solid var(--color-border-default)",
        boxShadow: hoverable
          ? "var(--shadow-card-hover)"
          : "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        if (!hoverable) return;

        e.currentTarget.style.borderColor = "rgba(124,106,239,0.35)";
        e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        if (!hoverable) return;

        e.currentTarget.style.borderColor = "var(--color-border-default)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Card;
