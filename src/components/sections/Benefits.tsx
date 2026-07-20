"use client";

import { motion } from "framer-motion";
import {
  Timer,
  Sunrise,
  Coffee,
  PartyPopper,
  DoorOpen,
  Briefcase,
  Utensils,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BENEFITS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Timer,
  Sunrise,
  Coffee,
  PartyPopper,
  DoorOpen,
  Briefcase,
  Utensils,
  Heart,
};

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-white py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Beneficios"
          title="Más que un snack, una solución para tu día a día"
          description="Diseñamos cada bandeja pensando en personas ocupadas que no quieren renunciar al sabor ni a la calidad."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  });

  const Icon = iconMap[benefit.icon] || Heart;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-3xl border border-stone-100 bg-stone-50/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-100/50 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-400 text-white shadow-lg shadow-amber-600/20 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-stone-900">{benefit.title}</h3>
        <p className="mt-2 text-stone-600 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.div>
  );
}
