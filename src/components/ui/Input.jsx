// src/components/ui/Input.jsx

import { forwardRef, useId } from "react";
import { cn } from "@/utils/cn.js";

export const Input = forwardRef(function Input(
  {
    label,
    error,
    icon = null,
    className = "",
    containerClassName = "",
    ...rest
  },
  ref,
) {
  const id = useId();

  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium"
          style={{
            color: "var(--color-text-secondary)",
          }}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2"
            style={{
              color: "var(--color-text-tertiary)",
            }}
          >
            {icon}
          </span>
        )}

        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300",
            icon && "pl-10",
            className,
          )}
          style={{
            background: "var(--color-bg-elevated)",
            border: error
              ? "1px solid var(--color-error)"
              : "1px solid var(--color-border-default)",
            color: "var(--color-text-primary)",
            boxShadow: "var(--shadow-inner)",
          }}
          onFocus={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = "var(--color-accent-primary)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow)";
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = "var(--color-border-default)";
              e.currentTarget.style.boxShadow = "var(--shadow-inner)";
            }
          }}
          {...rest}
        />
      </div>

      {error && (
        <span
          id={`${id}-error`}
          className="text-xs"
          style={{
            color: "var(--color-error)",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
