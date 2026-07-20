import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mx-auto max-w-3xl", aligns[align], className)}>
      {eyebrow && (
        <span className="relative mb-4 inline-block">
          <span className="relative z-10 inline-block -rotate-1 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-amber-700">
            {eyebrow}
          </span>
          <svg
            className="absolute -bottom-1.5 left-1/2 h-2 w-16 -translate-x-1/2 text-amber-400/70"
            viewBox="0 0 64 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M1 5 Q16 1 32 5 T63 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
