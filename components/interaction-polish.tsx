"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelectors = [
  "main > section:not(.hero) > .section-kicker",
  "main > section:not(.hero) h2",
  "main > section:not(.hero) > .impact-heading",
  "main > section:not(.hero) > .split-heading",
  "main > section:not(.hero) > .approach-heading",
  "main > section:not(.hero) > .places-inner",
  "main > section:not(.hero) > .trust-grid",
  ".metric-card",
  ".program-feature",
  ".program-secondary",
  ".story-entry",
  ".approach-step",
  ".pathway",
  ".accountability-item",
  ".involvement-row",
].join(",");

export function InteractionPolish() {
  const pathname = usePathname();

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors),
    );
    let observer: IntersectionObserver | undefined;

    if (!motionPreference.matches && "IntersectionObserver" in window) {
      document.documentElement.classList.add("motion-ready");
      revealTargets.forEach((element) => {
        element.dataset.reveal = "";
        const siblingIndex = Array.from(element.parentElement?.children ?? []).indexOf(element);
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(Math.max(siblingIndex, 0), 5) * 80}ms`,
        );
      });

      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute("data-revealed", "");
            currentObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
      );
      revealTargets.forEach((element) => observer?.observe(element));
    } else {
      revealTargets.forEach((element) => element.setAttribute("data-revealed", ""));
    }

    function handleMotionChange() {
      if (motionPreference.matches) {
        observer?.disconnect();
        document.documentElement.classList.remove("motion-ready");
        revealTargets.forEach((element) => {
          delete element.dataset.reveal;
          element.removeAttribute("data-revealed");
          element.style.removeProperty("--reveal-delay");
        });
      }
    }

    motionPreference.addEventListener("change", handleMotionChange);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", handleMotionChange);
      document.documentElement.classList.remove("motion-ready");
      revealTargets.forEach((element) => {
        delete element.dataset.reveal;
        element.removeAttribute("data-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
