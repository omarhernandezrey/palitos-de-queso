"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Repeat, Flame, UtensilsCrossed } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";

const points = [
  {
    icon: Repeat,
    title: "Mismo proceso, mismo sabor",
    description: "Se preparan igual que los palitos de queso: congelados, sin necesidad de descongelar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Relleno de salchicha",
    description: "Un centro jugoso de salchicha envuelto en nuestra masa artesanal de queso.",
  },
  {
    icon: Flame,
    title: "Listos en minutos",
    description: "Del congelador directo al aceite caliente hasta dorar. Un pasabocas diferente para sorprender.",
  },
];

export function Medallones() {
  return (
    <section id="medallones" className="relative bg-stone-50 py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {/* div1 — full-width header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-5"
          >
            <SectionHeader
              eyebrow="Nuevo producto"
              title="Medallones de queso con salchicha"
              description="La misma calidad artesanal de nuestros palitos de queso, ahora con un relleno de salchicha jugosa en el centro. También congelados, también sin descongelar."
              className="mx-auto max-w-3xl"
            />
          </motion.div>

          {/* div5 — big photo, tall left block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative col-span-2 mt-4 min-h-[200px] overflow-hidden rounded-[2rem] shadow-premium lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-3 lg:mt-0 lg:min-h-[220px]"
          >
            <Image
              src="/images/medallones1.jpeg"
              alt="Medallones de queso con salchicha recién fritos"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* div2, div3, div4 — point cards, right column */}
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mt-4 flex flex-col gap-3 rounded-2xl border border-stone-100 bg-white p-5 transition-colors hover:bg-amber-50/50 sm:flex-row sm:gap-5 lg:col-span-3 lg:col-start-3 lg:mt-0 ${
                index === 2 ? "col-span-2" : ""
              } ${index === 0 ? "lg:row-start-3" : index === 1 ? "lg:row-start-4" : "lg:row-start-5"}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">{point.title}</h3>
                <p className="mt-1 text-stone-600 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}

          {/* div6, div7 — small photos below the big one */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-premium lg:col-start-1 lg:row-start-5"
          >
            <Image
              src="/images/medallones2.jpeg"
              alt="Medallones de queso con salchicha servidos"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-premium lg:col-start-2 lg:row-start-5"
          >
            <Image
              src="/images/medallones3.jpeg"
              alt="Medallones de queso con salchicha crudos y congelados en bandeja"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
