"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ThermometerSnowflake, Calendar, AlertCircle } from "lucide-react";
import { Container } from "@/components/shared/SectionHeader";
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
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {/* div1 — eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 text-center lg:col-span-5 lg:row-start-1"
          >
            <span className="relative mb-4 inline-block">
              <span className="relative z-10 inline-block -rotate-1 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-amber-700">
                Conservación
              </span>
              <svg
                className="absolute -bottom-1.5 left-1/2 h-2 w-16 -translate-x-1/2 text-amber-400/70"
                viewBox="0 0 64 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M1 5 Q16 1 32 5 T63 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.div>

          {/* div2 — title + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="col-span-2 text-center lg:col-span-5 lg:row-start-2"
          >
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              Calidad que se mantiene congelada
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              Nuestros palitos de queso están pensados para que siempre tengas algo delicioso a la
              mano, sin preocuparte por la caducidad inmediata.
            </p>
          </motion.div>

          {/* div3, div4, div5 — tip cards, stacked left column */}
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className={`flex flex-col gap-3 rounded-2xl border border-stone-100 bg-stone-50 p-5 transition-colors hover:bg-amber-50/50 sm:flex-row sm:gap-5 lg:col-span-2 lg:col-start-1 ${
                index === 2 ? "col-span-2" : ""
              } ${index === 0 ? "lg:row-start-3" : index === 1 ? "lg:row-start-4" : "lg:row-start-5"}`}
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

          {/* div6 — image, tall right block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative col-span-2 min-h-[260px] lg:col-span-3 lg:col-start-3 lg:row-span-3 lg:row-start-3 lg:min-h-[320px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-premium">
              <Image
                src="/images/conservación-ideal-en-congelador.jpeg"
                alt="Palitos de queso almacenados correctamente en el congelador"
                fill
                className="object-cover"
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
