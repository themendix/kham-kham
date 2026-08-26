import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Fait monter un nombre de 0 jusqu'à `target`, pour les scores et les cauris de fin de partie.
 *
 * Un résultat qui s'inscrit d'un coup se lit ; un résultat qui monte se *regarde*. C'est la
 * différence entre annoncer un score et le célébrer — le seul endroit de l'application où ce
 * genre d'emphase est mérité.
 *
 * Respecte `prefers-reduced-motion` : la valeur finale est alors affichée immédiatement.
 */
export function useCountUp(target: number, durationMs = 900, delayMs = 0): number {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (reducedMotion || target <= 0) {
      setValue(target);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const timeout = window.setTimeout(() => {
      const step = (timestamp: number) => {
        start ??= timestamp;
        const progress = Math.min(1, (timestamp - start) / durationMs);
        // Sortie amortie : la montée ralentit en approchant du résultat plutôt que de s'arrêter net.
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, durationMs, delayMs, reducedMotion]);

  return value;
}
