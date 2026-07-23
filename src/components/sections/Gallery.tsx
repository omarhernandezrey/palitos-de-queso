"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { PremiumPlaceholder } from "@/components/shared/PremiumPlaceholder";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GALLERY_IMAGES } from "@/lib/constants";

const GRID_POSITIONS = [
  "col-start-1 row-start-1 row-span-2",
  "col-start-1 row-start-3 row-span-2",
  "col-start-2 row-start-1 row-span-2",
  "col-start-3 row-start-1 row-span-2",
  "col-start-2 row-start-3",
  "col-start-3 row-start-3",
  "col-start-2 row-start-4",
  "col-start-3 row-start-4",
];

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-gradient-to-b from-orange-50 to-white py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Galería"
          title="Cada imagen cuenta una historia de sabor"
          description="Fotos reales de nuestros palitos: del congelador al aceite y a la mesa. Así se ve la textura crujiente por fuera y el interior cremoso que nos caracteriza."
        />

        <div className="mt-16 grid grid-cols-3 auto-rows-[110px] gap-2 sm:auto-rows-[160px] lg:auto-rows-[190px]">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem
              key={image.alt}
              image={image}
              index={index}
              position={GRID_POSITIONS[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function GalleryItem({
  image,
  index,
  position,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
  position: string;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg sm:rounded-3xl ${position}`}
    >
      {image.image ? (
        <Image
          src={image.image}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <PremiumPlaceholder
          alt={image.alt}
          label={image.label}
          variant={index % 2 === 0 ? "warm" : "cream"}
          icon={index % 3 === 0 ? "🧀" : index % 3 === 1 ? "📸" : "🍽️"}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 transition-transform duration-300 group-hover:translate-y-0 sm:p-5">
        <p className="text-xs font-bold text-white drop-shadow-md sm:text-lg">{image.label}</p>
        <p className="hidden text-sm text-white/80 sm:block">{image.alt}</p>
      </div>
    </motion.div>
  );
}
