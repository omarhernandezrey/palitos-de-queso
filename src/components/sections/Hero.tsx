"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppButton, CallButton } from "@/components/shared/WhatsAppButton";
import { TrustBadge } from "@/components/shared/TrustBadge";
import { BRAND, PRODUCT } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white pt-32 pb-20 lg:pt-44 lg:pb-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.08),transparent_40%)]" />

      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {/* div1 — announcement badge, full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 col-span-2 lg:col-span-5"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              <span className="flex h-2 w-2 rounded-full bg-amber-600" />
              Entregas coordinadas en Bogotá
            </div>
          </motion.div>

          {/* div3 — title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 col-span-2 mt-4 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mt-0"
          >
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-stone-900 sm:text-5xl lg:text-6xl">
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
          </motion.div>

          {/* div4 — description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10 col-span-2 mt-4 lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:mt-0"
          >
            <p className="text-lg leading-relaxed text-stone-600 sm:text-xl">
              Palitos de queso artesanales congelados, elaborados con queso costeño y una tradición
              de Montería. Crujientes por fuera, suaves por dentro.
            </p>
          </motion.div>

          {/* div5 — price card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 col-span-2 mt-4 lg:col-span-2 lg:col-start-1 lg:row-start-4 lg:mt-0"
          >
            <div className="w-fit rounded-2xl bg-white px-5 py-3 shadow-sm">
              <span className="block text-2xl font-bold text-amber-600">{BRAND.price}</span>
              <span className="text-sm font-semibold text-stone-500">
                Bandeja de {PRODUCT.quantity} unidades
              </span>
            </div>
          </motion.div>

          {/* div6 — WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 mt-4 lg:col-start-1 lg:row-start-5 lg:mt-0"
          >
            <WhatsAppButton
              variant="hero"
              label="Quiero mis palitos"
              shortLabel="Pedir ahora"
              className="w-full justify-center"
            />
          </motion.div>

          {/* div7 — Call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-4 lg:col-start-2 lg:row-start-5 lg:mt-0"
          >
            <CallButton variant="secondary" label="Llamar ahora" className="w-full justify-center" />
          </motion.div>

          {/* div2 — image, tall right block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative col-span-2 mt-8 grid min-h-[300px] lg:col-span-3 lg:col-start-3 lg:row-span-4 lg:row-start-2 lg:mt-0 lg:min-h-[360px]"
          >
            <div className="col-start-1 row-start-1 h-full w-full">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="Palitos de queso artesanales dorados y crujientes"
                fill
                priority
                className="object-contain"
              />
            </div>

          </motion.div>
        </div>

        <TrustBadge className="relative z-10 mt-10 grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-4" />
      </Container>
    </section>
  );
}
