"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumPlaceholder } from "./PremiumPlaceholder";

interface VideoPlayerProps {
  title: string;
  description: string;
  youtubeId: string;
  thumbnailLabel: string;
  videoSrc?: string;
  className?: string;
}

export function VideoPlayer({
  title,
  description,
  youtubeId,
  thumbnailLabel,
  videoSrc,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isPlaceholder = !videoSrc && youtubeId.startsWith("PLACEHOLDER");

  const handlePlay = () => {
    if (isPlaceholder) return;
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-stone-100 shadow-premium",
        className,
      )}
    >
      <div className="relative aspect-video w-full">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            title={title}
            controls={isPlaying}
            className="absolute inset-0 h-full w-full"
          />
        )}
        {(!isPlaying || isPlaceholder) && (
          <>
            {!videoSrc && (
              <PremiumPlaceholder
                alt={`Miniatura del video: ${title}`}
                label={thumbnailLabel}
                variant="dark"
                icon="🎬"
                className="absolute inset-0"
              />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-6 text-center transition-colors group-hover:bg-black/40">
              <button
                type="button"
                onClick={handlePlay}
                disabled={isPlaceholder}
                aria-label={isPlaceholder ? `Video próximamente: ${title}` : `Reproducir ${title}`}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-amber-600 shadow-lg transition-transform duration-300 hover:scale-110 focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-4 disabled:opacity-60"
              >
                <Play className="h-8 w-8 fill-current" />
              </button>
              <h3 className="mt-5 text-xl font-bold text-white drop-shadow-md">{title}</h3>
              <p className="mt-1 max-w-md text-sm text-white/90 drop-shadow">{description}</p>
              {isPlaceholder && (
                <span className="mt-3 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Próximamente
                </span>
              )}
            </div>
          </>
        )}
        {isPlaying && !videoSrc && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        )}
      </div>
    </div>
  );
}
