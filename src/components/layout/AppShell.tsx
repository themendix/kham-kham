import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { PwaUpdateToast } from "@/components/features/PwaUpdateToast";
import { preloadAllSubjectContent } from "@/data/courseContent";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

interface AppShellProps {
  children: ReactNode;
}

/** `requestIdleCallback` avec repli `setTimeout` (Safari) : laisse le premier rendu et les
 * ressources critiques (images visibles, police) passer devant sur un réseau contraint. */
function whenIdle(callback: () => void): void {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 200);
  }
}

/**
 * Attend l'événement `load` avant même de considérer une tâche de fond : `requestIdleCallback`
 * garantit seulement que le thread principal est libre à l'instant T, pas que le travail lancé
 * (ici, l'évaluation de ~367 Ko de JS générant des centaines d'objets `Course`) ne rivalisera
 * pas avec un rendu encore en cours. Mesuré : sans cette attente, ce préchargement pouvait
 * retarder le LCP d'environ 1 seconde (contention du thread principal juste après le premier
 * rendu). En repoussant après `load`, il s'exécute une fois la peinture initiale déjà stabilisée.
 */
function whenIdleAfterLoad(callback: () => void): void {
  if (document.readyState === "complete") {
    whenIdle(callback);
  } else {
    window.addEventListener("load", () => whenIdle(callback), { once: true });
  }
}

/**
 * Ossature responsive de l'application : header pleine largeur, navigation
 * en sidebar sur desktop (md+), navigation en barre basse fixe sur mobile.
 * Le contenu est centré dans une colonne de lecture confortable, sans
 * cadre de type téléphone — l'app se comporte comme un vrai site web.
 */
export function AppShell({ children }: AppShellProps) {
  // Rend le retour arrière à sa position de lecture, et remonte en haut sur une navigation
  // normale. Monté ici, au-dessus des routes, pour n'exister qu'en un seul exemplaire.
  useScrollRestoration();

  // Le bandeau ne s'affiche que sur les écrans d'interface de premier niveau (accueil des
  // onglets) — dès qu'on entre dans un cours/une leçon ou une partie de quiz, il disparaît :
  // ces écrans ont leur propre en-tête, le bandeau Sankofa/streak y est redondant.
  const { pathname } = useLocation();
  const TOP_LEVEL_SCREENS = ["/", "/biblio", "/quiz", "/profil", "/profil/quiz", "/favoris"];
  const showTopBar = TOP_LEVEL_SCREENS.includes(pathname);

  // Précharge en tâche de fond, une seule fois pour toute l'application, le contenu complet du
  // catalogue (Histoire + Géographie) : le rend disponible en mémoire (`useCatalogContent`) pour
  // la recherche en texte intégral, le Défi du jour et le fil Home, sans jamais bloquer le
  // premier rendu. Voir docs/ARCHITECTURE.md § Découpage du bundle.
  useEffect(() => {
    whenIdleAfterLoad(() => {
      preloadAllSubjectContent();
    });
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {showTopBar && <TopBar />}
      <div className="mx-auto flex w-full max-w-6xl gap-8 px-4 pb-28 pt-4 sm:px-6 md:gap-10 md:pb-12 md:pt-8 lg:px-8">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <BottomNav />
      <PwaUpdateToast />
    </div>
  );
}
