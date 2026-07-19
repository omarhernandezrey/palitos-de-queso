"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppButton, CallButton } from "@/components/shared/WhatsAppButton";
import { TrustBadge } from "@/components/shared/TrustBadge";
import { PremiumPlaceholder } from "@/components/shared/PremiumPlaceholder";
import { BRAND, PRODUCT } from "@/lib/constants";

const highlights = [
  "Receta familiar tradicional",
  "Queso costeño auténtico",
  "Listos en minutos",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-32 pb-20 lg:pt-44 lg:pb-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.08),transparent_40%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              <span className="flex h-2 w-2 rounded-full bg-amber-600" />
              Entregas coordinadas en Bogotá
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-stone-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              El sabor de una
              <span className="relative mx-2 inline-block text-amber-600">
                receta familiar
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-amber-400"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8 Q50 0 100 8 T200 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              en tu congelador
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              Palitos de queso artesanales congelados, elaborados con queso costeño y una tradición
              de Montería. Crujientes por fuera, suaves por dentro. La solución perfecta para
              familias ocupadas en Bogotá.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton variant="hero" label="Quiero mis palitos" />
              <CallButton variant="secondary" label="Llamar ahora" />
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-stone-700">
              <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
                <span className="block text-2xl text-amber-600">{BRAND.price}</span>
                <span className="text-stone-500">Bandeja de {PRODUCT.quantity} unidades</span>
              </div>
              <div className="flex flex-col gap-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <TrustBadge />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-premium sm:aspect-square lg:aspect-[4/5]">
              <PremiumPlaceholder
                alt="Palitos de queso artesanales dorados y crujientes"
                label="Fotografía gastronómica premium"
                variant="warm"
                icon="🧀"
                className="absolute inset-0"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-4 top-12 rounded-2xl bg-white p-4 shadow-lg sm:-left-8 lg:-left-12"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Sin descongelar</p>
                  <p className="text-xs text-stone-500">Del congelador al aceite</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 right-4 rounded-2xl bg-stone-900 px-5 py-4 text-white shadow-xl sm:-bottom-6 sm:right-6"
            >
              <p className="text-sm font-medium text-stone-300">Calificación de clientes</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-2xl font-bold">4.9</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-stone-400">(128+)</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
