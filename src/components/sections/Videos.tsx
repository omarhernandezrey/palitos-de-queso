"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VIDEOS } from "@/lib/constants";

export function Videos() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="videos" className="relative bg-white py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Videos"
          title="Mira lo fácil que es disfrutarlos"
          description="Espacios preparados para videos de preparación, fritura, sirviendo y testimonios de clientes. Reemplaza los IDs de YouTube cuando tengas el material."
        />

        <div ref={ref} className="mt-16 grid gap-6 md:grid-cols-2">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VideoPlayer
                title={video.title}
                description={video.description}
                youtubeId={video.youtubeId}
                thumbnailLabel={video.thumbnail}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
