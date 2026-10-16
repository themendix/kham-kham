import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Position de défilement de chaque entrée d'historique, mémorisée par `location.key` (identifiant
 * propre à l'entrée, et non à l'adresse : deux passages successifs sur /biblio ont deux clés
 * distinctes et donc deux positions distinctes). Volontairement au niveau du module, hors de
 * React : la table doit survivre au démontage de l'écran qu'elle décrit.
 */
const positions = new Map<string, number>();

/**
 * Nombre de trames pendant lesquelles on retente la restauration. L'écran restauré peut être
 * plus court que la position visée le temps qu'il finisse de se monter — le navigateur borne
 * alors le défilement au bas de page et une seule tentative échouerait silencieusement.
 */
const RESTORE_FRAMES = 30;

/**
 * Restaure la position de défilement au retour arrière (et à l'avance), et remonte en haut de
 * page sur une navigation normale.
 *
 * React Router démonte entièrement l'écran quitté : sans ça, revenir d'un cours vers une Biblio
 * qu'on avait fait défiler renvoyait en haut de la liste, ce qui rend le retour indiscernable
 * d'un rechargement. `<ScrollRestoration>` de React Router ne s'applique qu'aux routeurs de
 * données (`createBrowserRouter`), que l'app n'utilise pas — d'où cette implémentation.
 *
 * À monter une seule fois, au-dessus des routes (`AppShell`).
 */
export function useScrollRestoration(): void {
  const location = useLocation();
  const navigationType = useNavigationType();
  const keyRef = useRef(location.key);
  // Pendant une restauration, les `scrollTo` que l'on déclenche nous-mêmes ne doivent pas être
  // pris pour un défilement de l'utilisateur : sur un écran encore trop court, ils écriraient
  // une position bornée par-dessus la position réelle qu'on cherche justement à rejoindre.
  const restoringRef = useRef(false);

  useEffect(() => {
    // Le navigateur tente sa propre restauration sur une page dont le contenu n'est pas encore
    // rendu au moment du retour : elle échoue et entre en conflit avec la nôtre.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const onScroll = () => {
      if (restoringRef.current) return;
      positions.set(keyRef.current, window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    keyRef.current = location.key;

    const target = navigationType === "POP" ? (positions.get(location.key) ?? 0) : 0;
    if (target === 0) {
      window.scrollTo(0, 0);
      return;
    }

    restoringRef.current = true;
    let frame = 0;
    let raf = 0;
    const tryScroll = () => {
      window.scrollTo(0, target);
      if (Math.abs(window.scrollY - target) > 1 && frame++ < RESTORE_FRAMES) {
        raf = requestAnimationFrame(tryScroll);
      } else {
        restoringRef.current = false;
      }
    };
    tryScroll();

    return () => {
      cancelAnimationFrame(raf);
      restoringRef.current = false;
    };
  }, [location.key, navigationType]);
}
