import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  /**
   * "sm" : compact — bulle de la visite guidée.
   * "lg" : pilule pleine largeur, plus haute, libellé plus grand — pied de page de la séquence de fin de cours.
   */
  size?: Size;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-card text-ink",
  ghost: "bg-cream text-ink",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "w-full px-6 py-3.5 text-[15px] sm:py-4 sm:text-base",
};

/** Bouton néo-brutaliste : contour épais, ombre nette, effet d'appui au clic */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink
        font-heading font-bold shadow-sm
        transition-transform active:translate-y-[3px] active:shadow-none
        disabled:cursor-not-allowed disabled:opacity-40 disabled:active:translate-y-0 disabled:active:shadow-sm
        ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
