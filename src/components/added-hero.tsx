import { useRef } from "react";
import { useLazyVideo } from "@/lib/use-lazy-video";

export function AddedHeroBackdrop() {
  const ref = useRef<HTMLVideoElement>(null);
  useLazyVideo(ref, { src: "/added-hero.mp4", mode: "autoplay", deferUntilIdle: true });

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <div className="hero-parallax absolute inset-0">
        <img
          src="/added-hero.webp"
          alt=""
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/added-hero.webp"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/30 to-transparent" />
    </div>
  );
}
