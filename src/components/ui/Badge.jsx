// src/components/ui/Badge.jsx

import { cn } from "@/utils/cn.js";

const VARIANT_STYLES = {
  default: "border text-[var(--color-text-secondary)]",

  accent: "border text-[var(--color-accent-primary)]",

  success:
    "border border-[var(--color-success)]/25 bg-[var(--color-success-muted)] text-[var(--color-success)]",

  outline: "border bg-transparent text-[var(--color-text-secondary)]",
};

export function Badge({
  variant = "default",
  icon = null,
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const style = {};

  switch (variant) {
    case "default":
      style.background = "var(--color-bg-elevated)";
      style.borderColor = "var(--color-border-default)";
      break;

    case "accent":
      style.background = "var(--color-accent-primary-muted)";
      style.borderColor = "rgba(124,106,239,0.35)";
      break;

    case "outline":
      style.borderColor = "var(--color-border-default)";
      break;

    default:
      break;
  }

  return (
    <span
      style={style}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-all duration-300",
        VARIANT_STYLES[variant],
        className,
      )}
      {...rest}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      )}

      {icon}

      {children}
    </span>
  );
}

export default Badge;
