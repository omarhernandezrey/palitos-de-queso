"use client";

import { motion } from "framer-motion";
import { Heart, ChefHat, Award, MapPin } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";

const heritage = [
  {
    title: "Receta familiar",
    description: "Tradición de Montería compartida con amor desde la cocina de la suegra.",
  },
  {
    title: "Hecho para Bogotá",
    description: "Pensado para el ritmo acelerado de la ciudad, sin perder la calidad del hogar.",
  },
];

const process = [
  {
    icon: ChefHat,
    title: "Preparación artesanal",
    description: "Cada bandeja se elabora con cuidado, sin procesos industriales masivos.",
  },
  {
    icon: Award,
    title: "Ingredientes diferenciadores",
    description: "Queso costeño y harina Élite para congelados que garantizan sabor y textura.",
  },
];

export function Story() {
  return (
    <section id="historia" className="relative bg-white py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {/* div1 — full-width header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-5 lg:col-start-1 lg:row-start-1"
          >
            <SectionHeader
              eyebrow="Nuestra historia"
              title="Una receta que nació en el corazón de una familia"
              description="Todo comenzó con una receta familiar de Montería, enseñada con paciencia y cariño por la suegra. Una preparación diferente a la mayoría de opciones comerciales, con un sabor que solo se logra cuando se hace con dedicación."
              className="mx-auto max-w-3xl"
            />
          </motion.div>

          {/* div8 — tall video, left column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative col-span-2 min-h-[220px] overflow-hidden rounded-[2.5rem] shadow-premium lg:col-span-2 lg:col-start-1 lg:row-span-4 lg:row-start-2 lg:min-h-[280px]"
          >
            <video
              src="/videos/receta-generaciones.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          {/* div2 — Montería origin stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative col-span-2 flex flex-col justify-center overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 p-6 lg:col-span-3 lg:col-start-3 lg:row-start-2 lg:p-8"
          >
            <MapPin className="absolute -right-4 -top-4 h-28 w-28 text-amber-600/10 sm:h-36 sm:w-36" strokeWidth={1.5} />
            <p className="relative font-heading text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl">Montería</p>
            <p className="relative mt-2 text-base font-medium text-stone-500 sm:text-lg">Origen de la receta</p>
          </motion.div>

          {/* div3 — heritage values, combined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-2 grid grid-cols-2 gap-6 rounded-2xl border border-stone-100 bg-stone-50 p-6 lg:col-span-3 lg:col-start-3 lg:row-start-3 lg:p-8"
          >
            {heritage.map((item) => (
              <div key={item.title} className="flex flex-col justify-center gap-2">
                <Heart className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-bold text-stone-900 lg:text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600 lg:text-base">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {process.map((item, index) => (
            <ProcessCell key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
      <WaveDivider fill="#1c1917" />
    </section>
  );
}

function ProcessCell({
  item,
  index,
}: {
  item: (typeof process)[0];
  index: number;
}) {
  const row = index === 0 ? "lg:row-start-4" : "lg:row-start-5";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className={`flex min-h-[96px] items-center justify-center rounded-2xl bg-amber-100 text-amber-700 lg:col-start-3 ${row}`}
      >
        <item.icon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
        className={`flex flex-col justify-center rounded-2xl border border-stone-100 bg-stone-50 p-5 lg:col-span-2 lg:col-start-4 lg:p-6 ${row}`}
      >
        <h3 className="text-lg font-bold text-stone-900 lg:text-xl">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600 lg:text-base">{item.description}</p>
      </motion.div>
    </>
  );
}
