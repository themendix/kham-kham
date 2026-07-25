interface ProgressBarProps {
  /** 0-100 */
  percent: number;
  /** Couleur de la barre remplie (classe Tailwind bg-*) */
  fillClassName?: string;
}

/** Barre de progression néo-brutaliste : piste crème, contour noir, remplissage plat */
export function ProgressBar({ percent, fillClassName = "bg-gold" }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-ink bg-cream">
      <div className={`h-full ${fillClassName}`} style={{ width: `${clamped}%` }} />
    </div>
  );
}
