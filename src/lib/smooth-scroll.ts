import { useEffect, type RefObject } from "react";

let raf = 0;

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function headerOffset() {
  const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n : 80;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function scrollToHash(hash: string, instant = false) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!(el instanceof HTMLElement)) return false;

  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset());
  cancelAnimationFrame(raf);

  const finish = () => {
    document.documentElement.classList.remove("js-scrolling");
    if (!el.hasAttribute("tabindex")) el.tabIndex = -1;
    el.focus({ preventScroll: true });
  };

  if (instant || prefersReducedMotion()) {
    window.scrollTo(0, top);
    finish();
    return true;
  }

  const start = window.scrollY;
  const dist = top - start;
  if (Math.abs(dist) < 2) {
    finish();
    return true;
  }

  const duration = Math.min(720, Math.max(380, Math.abs(dist) * 0.28));
  const t0 = performance.now();
  document.documentElement.classList.add("js-scrolling");

  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, start + dist * easeOutCubic(p));
    if (p < 1) {
      raf = requestAnimationFrame(step);
      return;
    }
    finish();
  };

  raf = requestAnimationFrame(step);
  return true;
}

export function useScrollProgressFallback(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const supported =
      typeof CSS !== "undefined" &&
      (CSS.supports("animation-timeline: scroll()") ||
        CSS.supports("animation-timeline", "scroll()"));
    if (supported) return;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}
