import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface OutroLayoutProps {
  /** Contenu de l'écran (visuel + texte) — chaque écran décide de son propre ordre interne */
  children: ReactNode;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

/**
 * Mise en page commune des écrans de la séquence de fin de cours : plein écran (pas de `Card`
 * englobante), colonne centrée, pied de page à boutons pleine largeur juste après le contenu.
 *
 * Volontairement **pas** de centrage vertical par flexbox (`justify-center`) ni de pied de page
 * `sticky` : sur un petit mobile réel, un contenu plus haut que le viewport (ex. `LearningDoneCard`
 * avec vignette + titre + bloc matière) se retrouvait en partie rendu au-dessus du haut de la
 * page, donc invisible et inatteignable au scroll (le centrage flex pousse l'excédent des deux
 * côtés, mais il n'y a rien au-dessus du bouton "Retour" vers quoi scroller). Un simple
 * enchaînement de haut en bas est robuste quelle que soit la hauteur du contenu ou du viewport.
 * Composant purement présentationnel : aucun accès au store.
 */
export function OutroLayout({
  children,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: OutroLayoutProps) {
  return (
    <div className="flex flex-col items-center px-4 pb-6 pt-6 text-center sm:pt-10">
      <div className="w-full max-w-sm">
        {children}
        <div className="mt-7 flex flex-col gap-3">
          <Button variant="primary" size="lg" onClick={onPrimary}>
            {primaryLabel}
          </Button>
          {secondaryLabel && onSecondary && (
            <Button variant="secondary" size="lg" onClick={onSecondary}>
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
