import { useEffect, type RefObject } from "react";

type LazyVideoOptions = {
  src: string;
  mode: "autoplay" | "manual";
  /** Wait for idle so a poster/LCP image can paint first. */
  deferUntilIdle?: boolean;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function prefersSaveData() {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return Boolean(conn?.saveData);
}

function whenIdle(fn: () => void, timeout = 600) {
  const ric = window.requestIdleCallback?.bind(window);
  if (ric) {
    const id = ric(fn, { timeout });
    return () => window.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(fn, 180);
  return () => window.clearTimeout(id);
}

export function useLazyVideo(
  ref: RefObject<HTMLVideoElement | null>,
  { src, mode, deferUntilIdle = false }: LazyVideoOptions,
) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = prefersReducedMotion();
    const saveData = prefersSaveData();
    let attached = false;
    let visible = false;
    let cancelIdle: (() => void) | undefined;

    const playIfAllowed = () => {
      if (!visible || mode !== "autoplay" || reduced || saveData) return;
      if (video.readyState < 2) {
        video.addEventListener("canplay", playIfAllowed, { once: true });
        return;
      }
      void video.play().catch(() => {
        /* Autoplay can be blocked until a gesture; poster stays visible. */
      });
    };

    const attach = () => {
      if (attached || video.getAttribute("src") === src) {
        attached = true;
        return;
      }
      attached = true;
      video.src = src;
      video.preload = mode === "autoplay" ? "auto" : "metadata";
      video.load();
    };

    const onEnter = () => {
      visible = true;
      if (mode === "autoplay" && (reduced || saveData)) return;
      const run = () => {
        attach();
        playIfAllowed();
      };
      if (deferUntilIdle && !attached) {
        cancelIdle = whenIdle(run);
        return;
      }
      run();
    };

    const onLeave = () => {
      visible = false;
      if (mode === "autoplay") video.pause();
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onEnter();
          else onLeave();
        }
      },
      {
        rootMargin: mode === "autoplay" ? "0px" : "280px 0px",
        threshold: mode === "autoplay" ? 0.25 : 0.01,
      },
    );

    io.observe(video);

    return () => {
      cancelIdle?.();
      video.removeEventListener("canplay", playIfAllowed);
      io.disconnect();
      video.pause();
    };
  }, [src, mode, deferUntilIdle, ref]);
}
