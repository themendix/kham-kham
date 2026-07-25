import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProgressBarProps {
  /** 0-100 */
  percent: number;
  /** Couleur de la barre remplie (classe Tailwind bg-*) */
  fillClassName?: string;
  /** Pourcentage de départ ; si omis, égal à `percent` (donc pas d'animation) */
  from?: number;
  /** Anime la transition de `from` vers `percent` */
  animated?: boolean;
  /** Durée de la transition (ms) */
  durationMs?: number;
  /** Délai avant le début de la transition (ms), pour laisser l'œil voir le point de départ */
  delayMs?: number;
}

/** Barre de progression néo-brutaliste : piste crème, contour noir, remplissage plat */
export function ProgressBar({
  percent,
  fillClassName = "bg-gold",
  from,
  animated = false,
  durationMs = 900,
  delayMs = 300,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  const startClamped = Math.max(0, Math.min(100, from ?? percent));
  const reducedMotion = useReducedMotion();
  const shouldAnimate = animated && !reducedMotion && startClamped !== clamped;

  const [width, setWidth] = useState(shouldAnimate ? startClamped : clamped);

  useEffect(() => {
    if (!shouldAnimate) {
      setWidth(clamped);
      return;
    }
    // Repart du point de départ, laisse le navigateur le peindre, puis bascule
    // vers la valeur finale au frame suivant (sinon la transition est écrasée
    // et la barre saute directement au résultat).
    setWidth(startClamped);
    let raf1 = 0;
    let raf2 = 0;
    const timeout = window.setTimeout(() => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setWidth(clamped));
      });
    }, delayMs);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [clamped, startClamped, shouldAnimate, delayMs]);

  return (
    <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-ink bg-cream">
      <div
        className={`h-full ${fillClassName}`}
        style={{
          width: `${width}%`,
          transition: shouldAnimate ? `width ${durationMs}ms ease-out` : undefined,
        }}
      />
    </div>
  );
}
