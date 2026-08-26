import { Lottie } from "lottie-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function LottiePlayer({
  src,
  className,
  loop = true,
  label,
}: {
  src: string;
  className?: string;
  loop?: boolean;
  label?: string;
}) {
  const [ready, setReady] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    setReady(true);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!ready) {
    return (
      <div
        className={cn("bg-ink/5", className)}
        aria-hidden={!label}
        aria-label={label}
      />
    );
  }

  return (
    <Lottie
      src={src}
      loop={loop && !reduce}
      autoplay={!reduce}
      className={className}
      aria-hidden={!label}
      aria-label={label}
    />
  );
}
