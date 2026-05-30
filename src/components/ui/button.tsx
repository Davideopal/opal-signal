import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]",
        variant === "primary" && "bg-[var(--accent)] text-[#061014] hover:bg-[#9af1ff]",
        variant === "secondary" &&
          "border border-[var(--line)] bg-transparent text-[var(--text)] hover:border-[var(--accent)]",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
