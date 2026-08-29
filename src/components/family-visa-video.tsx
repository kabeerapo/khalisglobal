import { useRef } from "react";
import { useLazyVideo } from "@/lib/use-lazy-video";

export function FamilyVisaVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useLazyVideo(ref, { src: "/khalis-family-visa.mp4", mode: "manual" });

  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-mist">
        <video
          ref={ref}
          className="aspect-[9/16] w-full bg-ink object-cover"
          poster="/poster-family.webp"
          controls
          playsInline
          preload="none"
          aria-label="Khalis family visa services — bring your family to the UAE"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Family visa · 59 seconds · sound on
      </figcaption>
    </figure>
  );
}
