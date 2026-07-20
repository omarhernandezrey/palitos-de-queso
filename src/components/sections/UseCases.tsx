"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Sunrise,
  Cake,
  Users,
  Building2,
  DoorOpen,
  Backpack,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { USE_CASES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Baby,
  Sunrise,
  Cake,
  Users,
  Building2,
  DoorOpen,
  Backpack,
  GraduationCap,
};

export function UseCases() {
  return (
    <section id="usos" className="relative overflow-hidden bg-stone-900 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.12),transparent_40%)]" />
      <Container>
        <SectionHeader
          eyebrow="Casos de uso"
          title="Perfectos para cada momento del día"
          description="Desde el desayuno de los niños hasta la reunión de oficina, nuestros palitos de queso se adaptan a tu ritmo de vida."
          className="text-white"
          titleClassName="text-white"
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {USE_CASES.map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>
      </Container>
      <WaveDivider fill="#ffffff" />
    </section>
  );
}

function UseCaseCard({
  useCase,
  index,
}: {
  useCase: (typeof USE_CASES)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const Icon = iconMap[useCase.icon] || DoorOpen;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative overflow-hidden rounded-3xl border border-stone-700 bg-stone-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-stone-800"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-600/10 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 transition-colors group-hover:bg-amber-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-bold">{useCase.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-400">{useCase.description}</p>
      </div>
    </motion.div>
  );
}
