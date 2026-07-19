"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function RatingStars({
  rating = 5,
  maxRating = 5,
  size = "md",
  showLabel = false,
  className,
}: RatingStarsProps) {
  const sizes = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`Calificación: ${rating} de ${maxRating}`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizes[size],
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-stone-200 text-stone-200",
          )}
        />
      ))}
      {showLabel && (
        <span className="ml-2 text-sm font-semibold text-stone-700">
          {rating.toFixed(1)}/5
        </span>
      )}
    </div>
  );
}
