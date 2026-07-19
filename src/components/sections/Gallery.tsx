"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { PremiumPlaceholder } from "@/components/shared/PremiumPlaceholder";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-gradient-to-b from-orange-50 to-white py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Galería"
          title="Cada imagen cuenta una historia de sabor"
          description="Espacios preparados para fotografía gastronómica profesional. Próximamente actualizaremos con las fotografías reales del producto."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem key={image.alt} image={image} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function GalleryItem({
  image,
  index,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const isLarge = index === 0 || index === 5;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-3xl shadow-lg ${
        isLarge ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <div className={`relative ${isLarge ? "aspect-square" : "aspect-[4/3]"} w-full`}>
        <PremiumPlaceholder
          alt={image.alt}
          label={image.label}
          variant={index % 2 === 0 ? "warm" : "cream"}
          icon={index % 3 === 0 ? "🧀" : index % 3 === 1 ? "📸" : "🍽️"}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-lg font-bold text-white drop-shadow-md">{image.label}</p>
          <p className="text-sm text-white/80">{image.alt}</p>
        </div>
      </div>
    </motion.div>
  );
}
