"use client";

import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { COMPARISON } from "@/lib/constants";

export function WhyUs() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="por-que-elegirnos" className="relative overflow-hidden bg-stone-900 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.15),transparent_40%)]" />
      <Container>
        <SectionHeader
          eyebrow="Por qué elegirnos"
          title="No son palitos de queso comunes"
          description="Comparamos lo que ofrecemos con las opciones tradicionales del mercado para que notes la diferencia desde el primer bocado."
          className="text-white"
          titleClassName="text-white"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-stone-700 bg-stone-800/50 backdrop-blur-sm"
        >
          <div className="hidden border-b border-stone-700 bg-stone-800 p-5 text-sm font-bold uppercase tracking-wider text-stone-400 sm:grid sm:grid-cols-3">
            <div>Característica</div>
            <div className="text-center text-amber-400">Nosotros</div>
            <div className="text-center">Opciones tradicionales</div>
          </div>
          <div className="divide-y divide-stone-700">
            {COMPARISON.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col gap-3 p-5 transition-colors hover:bg-stone-700/30 sm:grid sm:grid-cols-3 sm:items-center sm:gap-0"
              >
                <div className="font-medium text-stone-200">{row.feature}</div>
                <div className="flex items-center justify-between gap-3 sm:justify-center">
                  <span className="text-xs uppercase tracking-wider text-amber-400 sm:hidden">Nosotros</span>
                  <Status value={row.us} highlight />
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-center">
                  <span className="text-xs uppercase tracking-wider text-stone-400 sm:hidden">Opciones tradicionales</span>
                  <Status value={row.others} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              <Check className="h-4 w-4" />
            </div>
            Sí incluye
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-700 text-stone-400">
              <Minus className="h-4 w-4" />
            </div>
            Parcial
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-red-400">
              <X className="h-4 w-4" />
            </div>
            No incluye
          </div>
        </div>
      </Container>
    </section>
  );
}

function Status({
  value,
  highlight = false,
}: {
  value: boolean | "partial";
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          highlight ? "bg-green-500/20 text-green-400" : "bg-stone-700 text-stone-400"
        }`}
      >
        <Check className="h-5 w-5" />
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-700 text-stone-400">
        <Minus className="h-5 w-5" />
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400">
      <X className="h-5 w-5" />
    </div>
  );
}
