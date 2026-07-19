"use client";

import { motion } from "framer-motion";
import { Heart, Users, ChefHat, Award } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { PremiumPlaceholder } from "@/components/shared/PremiumPlaceholder";

const values = [
  {
    icon: Heart,
    title: "Receta familiar",
    description: "Una tradición de Montería que se comparte con amor desde la cocina de la suegra.",
  },
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
  {
    icon: Users,
    title: "Hecho para Bogotá",
    description: "Pensado para el ritmo acelerado de la ciudad, sin perder la calidad del hogar.",
  },
];

export function Story() {
  return (
    <section id="historia" className="relative bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-premium">
              <PremiumPlaceholder
                alt="Historia familiar de la receta de palitos de queso"
                label="Una receta que une generaciones"
                variant="warm"
                icon="👩‍🍳"
                className="absolute inset-0"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-xl"
            >
              <p className="text-2xl font-bold text-stone-900">Montería</p>
              <p className="text-sm text-stone-500">Origen de la receta</p>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Nuestra historia"
              title="Una receta que nació en el corazón de una familia"
              description="Todo comenzó con una receta familiar de Montería, enseñada con paciencia y cariño por la suegra. Una preparación diferente a la mayoría de opciones comerciales, con un sabor que solo se logra cuando se hace con dedicación."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-stone-100 bg-stone-50 p-5 transition-colors hover:bg-amber-50/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-stone-900">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
