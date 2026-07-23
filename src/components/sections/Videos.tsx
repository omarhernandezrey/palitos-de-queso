"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/shared/SectionHeader";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { WaveDivider } from "@/components/shared/WaveDivider";
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
          description="Mira cómo nuestros palitos de queso van del congelador al aceite, sin descongelar."
        />

        <div ref={ref} className="mt-16">
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <VideoPlayer
                title={video.title}
                description={video.description}
                thumbnailLabel={video.thumbnail}
                videoSrc={video.videoSrc}
              />
            </motion.div>
          ))}
        </div>
      </Container>
      <WaveDivider fill="#1c1917" />
    </section>
  );
}
