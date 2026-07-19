"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-offset-4";

  const variants = {
    primary:
      "gradient-brand text-white shadow-brand hover:shadow-2xl hover:shadow-amber-500/30 focus-visible:ring-amber-400",
    secondary:
      "bg-amber-50 text-amber-700 hover:bg-amber-100 focus-visible:ring-amber-400",
    outline:
      "border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white focus-visible:ring-amber-400",
    white:
      "bg-white text-amber-700 shadow-lg hover:bg-stone-50 hover:shadow-xl focus-visible:ring-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "hover:-translate-y-0.5",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
