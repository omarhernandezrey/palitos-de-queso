"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/WhatsAppButton";
import { RatingStars } from "@/components/shared/RatingStars";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-900 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_50%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-300">
              <Sparkles className="h-4 w-4" />
              Bandeja de 20 unidades · $15.000 COP
            </span>
            <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Ten siempre algo delicioso listo en tu congelador
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-300">
              No esperes más para probar el sabor de una receta familiar tradicional. Escribe por
              WhatsApp, coordina tu entrega en Bogotá y disfruta de palitos de queso que conquistan
              desde el primer bocado.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton variant="cta" label="Pedir mi bandeja ahora" />
              <CallButton variant="outline" label="Prefiero llamar" />
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-stone-400 sm:flex-row">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>Entrega coordinada y honesta</span>
              </div>
              <div className="hidden h-4 w-px bg-stone-700 sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Listos en minutos</span>
              </div>
              <div className="hidden h-4 w-px bg-stone-700 sm:block" />
              <div className="flex items-center gap-2">
                <RatingStars rating={5} size="sm" />
                <span>4.9/5 de calificación</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
