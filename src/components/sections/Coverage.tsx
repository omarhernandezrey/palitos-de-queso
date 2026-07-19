"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, Handshake, Clock } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: MessageSquare,
    title: "Escríbenos por WhatsApp",
    description: "Nos dices cuántas bandejas quieres y tu zona de Bogotá.",
  },
  {
    icon: MapPin,
    title: "Coordinamos el punto",
    description: "Definimos una estación de TransMilenio o un punto cercano según tu ubicación.",
  },
  {
    icon: Clock,
    title: "Acordamos el horario",
    description: "Ajustamos la entrega a tu disponibilidad, incluso si sales del trabajo.",
  },
  {
    icon: Handshake,
    title: "Recibes tu pedido",
    description: "Llegas, recibes y disfrutas de tus palitos de queso artesanales.",
  },
];

export function Coverage() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="cobertura" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.08),transparent_40%)]" />
      <Container>
        <SectionHeader
          eyebrow="Cobertura"
          title="Entregas coordinadas en Bogotá"
          description="No prometemos domicilios a todas partes. En cambio, ofrecemos honestidad, flexibilidad y un proceso simple para que recibas tu pedido."
        />

        <div ref={ref} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-3xl bg-white p-7 shadow-lg shadow-stone-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-400 text-white shadow-lg">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-lg"
        >
          <div className="flex items-center justify-center gap-3 text-amber-600">
            <MapPin className="h-6 w-6" />
            <h3 className="text-xl font-bold">Bogotá, Colombia</h3>
          </div>
          <p className="mt-3 text-stone-600">
            Las entregas se realizan únicamente en Bogotá, coordinando previamente por WhatsApp.
            Nos encontramos en estaciones de TransMilenio o acordamos un punto cercano según tu
            ubicación y horario.
          </p>
          <div className="mt-6">
            <WhatsAppButton variant="inline" label="Coordinar mi entrega" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
