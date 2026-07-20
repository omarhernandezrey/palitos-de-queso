"use client";

import { motion } from "framer-motion";
import { Snowflake, Flame, ChefHat, Utensils } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PRODUCT } from "@/lib/constants";

const iconMap = [
  Snowflake,
  Flame,
  ChefHat,
  Utensils,
];

export function Preparation() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="preparacion" className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Preparación"
          title="Listos en minutos, sin descongelar"
          description="Olvídate de planear con anticipación. Nuestros palitos de queso van directo del congelador al aceite caliente."
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
            {PRODUCT.preparation.map((step, index) => {
              const Icon = iconMap[index] || Utensils;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative ${isEven ? "lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                >
                  <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-400 text-white shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white shadow-lg lg:flex ${isEven ? '-right-4' : '-left-4'}">
                    {step.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-amber-100 bg-white p-8 text-center shadow-lg"
        >
          <p className="text-xl font-bold text-stone-900">
            No necesitan descongelarse
          </p>
          <p className="mt-2 text-stone-600">
            Esa es la magia de la preparación. Del congelador directo al aceite caliente. En pocos
            minutos tienes un pasabocas o desayuno espectacular.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
