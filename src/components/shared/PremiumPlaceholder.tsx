"use client";

import { cn } from "@/lib/utils";

interface PremiumPlaceholderProps {
  alt: string;
  label?: string;
  className?: string;
  icon?: string;
  variant?: "warm" | "cream" | "dark" | "whatsapp";
}

const gradients = {
  warm: "from-amber-600 via-amber-500 to-yellow-400",
  cream: "from-orange-50 via-amber-50 to-yellow-50",
  dark: "from-stone-900 via-stone-800 to-stone-700",
  whatsapp: "from-emerald-600 via-green-500 to-emerald-400",
};

const textColors = {
  warm: "text-white",
  cream: "text-amber-700",
  dark: "text-white",
  whatsapp: "text-white",
};

export function PremiumPlaceholder({
  alt,
  label,
  className,
  icon = "🧀",
  variant = "warm",
}: PremiumPlaceholderProps) {
  return (
    <div
      aria-label={alt}
      role="img"
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br",
        gradients[variant],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
      <span className="relative z-10 text-6xl drop-shadow-lg">{icon}</span>
      {label && (
        <span
          className={cn(
            "relative z-10 mt-4 max-w-[80%] text-center text-lg font-semibold",
            textColors[variant],
          )}
        >
          {label}
        </span>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}
