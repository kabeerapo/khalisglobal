import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }
      void video.play().catch(() => {
        /* Autoplay can be blocked until a gesture; poster stays visible. */
      });
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <figure id="video" className="relative">
      <div className="overflow-hidden rounded-2xl border border-gold/25 bg-ink gold-ring gold-bevel">
        <video
          ref={ref}
          className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
          src="/khalis-hero.mp4"
          poster="/poster-hero.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Khalis Typing Center office tour — Emirates ID, typing and PRO services"
        />
      </div>
      <figcaption className="mt-3 text-sm text-paper/65">
        Office tour · Emirates ID · Typing · PRO services
      </figcaption>
    </figure>
  );
}
