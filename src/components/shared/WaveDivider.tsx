import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fill: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ fill, flip = false, className }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 -bottom-px overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-20"
      >
        <path
          d="M0 40 C 240 90 480 0 720 20 C 960 40 1200 90 1440 30 L1440 80 L0 80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
