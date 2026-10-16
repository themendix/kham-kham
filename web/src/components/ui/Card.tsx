import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** shadow-card = ombre large (cartes principales), shadow-sm = ombre discrète (blocs secondaires) */
  shadow?: "card" | "sm";
}

/** Bloc de base du design system : fond blanc, contour noir épais, ombre nette sans flou */
export function Card({ children, shadow = "card", className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-card border-[3px] border-ink bg-card ${
        shadow === "card" ? "shadow-card" : "shadow-sm"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
