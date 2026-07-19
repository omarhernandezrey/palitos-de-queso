"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { RatingStars } from "@/components/shared/RatingStars";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative bg-gradient-to-b from-white to-orange-50 py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen quienes ya los probaron"
          description="Cada comentario es una historia real de alguien que descubrió la practicidad y el sabor de nuestros palitos de queso."
        />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-stone-500"
        >
          Basado en más de 128 reseñas de clientes satisfechos en Bogotá.
        </motion.div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-6 break-inside-avoid rounded-3xl border border-stone-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Quote className="h-8 w-8 text-amber-200" />
      <p className="mt-4 text-stone-700 leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</p>
      <div className="mt-5 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-yellow-400 text-sm font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-stone-900">{testimonial.name}</p>
          <p className="text-sm text-stone-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-4">
        <RatingStars rating={testimonial.rating} size="sm" />
      </div>
    </motion.div>
  );
}
