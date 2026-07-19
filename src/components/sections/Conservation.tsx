"use client";

import { motion } from "framer-motion";
import { ThermometerSnowflake, Calendar, AlertCircle } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { PremiumPlaceholder } from "@/components/shared/PremiumPlaceholder";
import { PRODUCT } from "@/lib/constants";

const tips = [
  {
    icon: ThermometerSnowflake,
    title: "Siempre congelados",
    description:
      "Mantén los palitos de queso en el congelador hasta el momento de prepararlos. La cadena de frío es clave.",
  },
  {
    icon: Calendar,
    title: "Duración prolongada",
    description: `Manteniendo la cadena de frío, pueden durar aproximadamente ${PRODUCT.shelfLife.toLowerCase()}.`,
  },
  {
    icon: AlertCircle,
    title: "No descongelar",
    description:
      "No es necesario descongelarlos. De hecho, van directo al aceite caliente para obtener la mejor textura.",
  },
];

export function Conservation() {
  return (
    <section id="conservacion" className="relative bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              align="left"
              eyebrow="Conservación"
              title="Calidad que se mantiene congelada"
              description="Nuestros palitos de queso están pensados para que siempre tengas algo delicioso a la mano, sin preocuparte por la caducidad inmediata."
            />

            <div className="mt-10 space-y-5">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 rounded-2xl border border-stone-100 bg-stone-50 p-5 transition-colors hover:bg-amber-50/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <tip.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">{tip.title}</h3>
                    <p className="mt-1 text-stone-600 leading-relaxed">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-[2.5rem] shadow-premium">
              <PremiumPlaceholder
                alt="Palitos de queso almacenados correctamente en el congelador"
                label="Conservación ideal en congelador"
                variant="cream"
                icon="❄️"
                className="absolute inset-0"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-amber-600 px-6 py-4 text-white shadow-xl"
            >
              <p className="text-3xl font-bold">6-12</p>
              <p className="text-sm opacity-90">meses congelados</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
