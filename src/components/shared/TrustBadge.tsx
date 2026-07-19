import { BadgeCheck, ShieldCheck, Truck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  className?: string;
}

const badges = [
  { icon: BadgeCheck, label: "Receta artesanal" },
  { icon: ShieldCheck, label: "Queso costeño" },
  { icon: Clock, label: "Listos en minutos" },
  { icon: Truck, label: "Entrega coordinada" },
];

export function TrustBadge({ className }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3 sm:gap-6",
        className,
      )}
    >
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-sm"
        >
          <badge.icon className="h-4 w-4 text-amber-600" />
          {badge.label}
        </div>
      ))}
    </div>
  );
}
