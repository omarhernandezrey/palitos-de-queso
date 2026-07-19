"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="preguntas" className="relative bg-white py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          description="Resolvemos las dudas más comunes para que tomes tu decisión con total confianza."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <Accordion className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-stone-100"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-stone-900 hover:text-amber-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-stone-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
