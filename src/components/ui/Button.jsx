// src/components/ui/Button.jsx

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn.js";

const VARIANT_STYLES = {
  primary: "text-white border border-transparent shadow-lg hover:shadow-xl",

  secondary: "bg-transparent border transition-all duration-300",

  ghost: "bg-transparent border border-transparent transition-all duration-300",

  danger:
    "bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20",
};

const SIZE_STYLES = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3.5 gap-2.5",
};

export const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    isLoading = false,
    iconLeft = null,
    iconRight = null,
    fullWidth = false,
    disabled = false,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || isLoading;

  const style = {};

  switch (variant) {
    case "primary":
      style.background =
        "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-primary-hover))";
      style.boxShadow = "var(--shadow-glow)";
      style.color = "#ffffff";
      break;

    case "secondary":
      style.border = "1px solid var(--color-border-default)";
      style.color = "var(--color-text-primary)";
      style.background = "transparent";
      break;

    case "ghost":
      style.color = "var(--color-text-secondary)";
      style.background = "transparent";
      break;

    default:
      break;
  }

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      style={style}
      onMouseEnter={(e) => {
        if (variant === "secondary") {
          e.currentTarget.style.borderColor = "var(--color-accent-primary)";
          e.currentTarget.style.color = "var(--color-accent-primary)";
        }

        if (variant === "ghost") {
          e.currentTarget.style.color = "var(--color-text-primary)";
          e.currentTarget.style.background = "var(--color-bg-secondary)";
        }

        if (variant === "primary") {
          e.currentTarget.style.boxShadow = "var(--shadow-glow-strong)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "secondary") {
          e.currentTarget.style.borderColor = "var(--color-border-default)";
          e.currentTarget.style.color = "var(--color-text-primary)";
        }

        if (variant === "ghost") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--color-text-secondary)";
        }

        if (variant === "primary") {
          e.currentTarget.style.boxShadow = "var(--shadow-glow)";
        }
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        SIZE_STYLES[size],
        VARIANT_STYLES[variant],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={size === "lg" ? 20 : 16} />
      ) : (
        iconLeft
      )}

      <span>{children}</span>

      {!isLoading && iconRight}
    </button>
  );
});

export default Button;
