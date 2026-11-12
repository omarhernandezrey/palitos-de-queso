"use client";

import { motion } from "framer-motion";
import { Boxes, PackagePlus, UtensilsCrossed, Percent, type LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PROMOTIONS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  PackagePlus,
  UtensilsCrossed,
  Percent,
};

export function Promotions() {
  return (
    <section id="promociones" className="relative bg-amber-50/40 py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Promociones"
          title="Combos y descuentos para disfrutar más"
          description="Aprovecha nuestros combos y escríbenos por WhatsApp para confirmar disponibilidad y coordinar la entrega."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMOTIONS.map((promo, index) => (
            <PromotionCard key={promo.title} promo={promo} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PromotionCard({
  promo,
  index,
}: {
  promo: (typeof PROMOTIONS)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  });

  const Icon = iconMap[promo.icon] || Boxes;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-yellow-400 text-white shadow-lg shadow-amber-600/20 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          {promo.savings}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-stone-900">{promo.title}</h3>
      <p className="mt-2 flex-1 text-stone-600 leading-relaxed">{promo.description}</p>

      <span className="mt-4 block text-2xl font-bold text-amber-600">{promo.price}</span>

      <WhatsAppButton
        variant="inline"
        label="Pedir este combo"
        message={promo.whatsappMessage}
        className="mt-5 w-full justify-center"
      />
    </motion.div>
  );
}
