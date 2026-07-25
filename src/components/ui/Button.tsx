import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-card text-ink",
  ghost: "bg-cream text-ink",
};

/** Bouton néo-brutaliste : contour épais, ombre nette, effet d'appui au clic */
export function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink
        px-6 py-3 font-heading text-[15px] font-bold shadow-sm
        transition-transform active:translate-y-[3px] active:shadow-none
        ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
