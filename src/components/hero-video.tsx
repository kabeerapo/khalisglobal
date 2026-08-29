import { useRef } from "react";
import { useLazyVideo } from "@/lib/use-lazy-video";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useLazyVideo(ref, { src: "/khalis-office.mp4", mode: "autoplay" });

  return (
    <figure id="video" className="relative">
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-mist">
        <video
          ref={ref}
          className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          poster="/poster-office.webp"
          muted
          loop
          playsInline
          preload="none"
          aria-label="Khalis Typing Center office — Emirates ID, typing, PRO and business setup"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Office film · Emirates ID · Typing · PRO · Partner with Khalis
      </figcaption>
    </figure>
  );
}
