import { useEffect, useRef } from "react";

/**
 * Observes all [data-reveal] and [data-reveal-stagger] elements inside the
 * given container (defaults to document) and adds the `is-visible` class once
 * they enter the viewport. Each element animates once.
 */
export function useScrollReveal(containerRef?: React.RefObject<Element | null>) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const root = containerRef?.current ?? document;

    const targets = root.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]",
    );

    if (targets.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            observerRef.current?.unobserve(target);

            // Clean up attributes after transition completes to restore native styling/transitions
            setTimeout(() => {
              target.classList.remove("is-visible");
              target.removeAttribute("data-reveal");
              target.removeAttribute("data-reveal-stagger");
            }, 1000);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observerRef.current!.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
