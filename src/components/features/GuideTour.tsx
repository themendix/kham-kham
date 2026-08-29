import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { markGuideSeen } from "@/lib/guide";

interface Step {
  /** Écran sur lequel l'étape se joue — la visite y navigue toute seule */
  route: string;
  /** Sélecteur CSS de l'élément réel mis en avant */
  selector: string;
  title: string;
  text: string;
}

// Deux façons de désigner une cible, aucune n'ajoute de balisage là où l'app en a déjà :
// les onglets par leur `href` (`NavLink` rend un `<a href>`, et les chemins de routes sont déjà
// un contrat stable), les matières de la Biblio par l'`id` que leur section porte pour l'ancrage
// « Explore par thème ». Seuls le fil du Home et l'écran Quiz ont reçu des `data-guide`.
const STEPS: Step[] = [
  {
    route: "/",
    selector: '[data-guide="feed-card"]',
    title: "Le fil de découverte",
    text: "Chaque carte est un cours du catalogue. À toi de dire s'il t'intéresse.",
  },
  {
    route: "/",
    selector: '[data-guide="pass"]',
    title: "Pas intéressé",
    text: "Le cours quitte le fil et ne te sera plus proposé. C'est définitif.",
  },
  {
    route: "/",
    selector: '[data-guide="keep"]',
    title: "Intéressé",
    text: "Le cours part dans tes favoris, tu le retrouves depuis ton profil.",
  },
  {
    route: "/",
    selector: 'a[href="/biblio"]',
    title: "Biblio",
    text: "Tout le catalogue, rangé par matière. Allons-y voir.",
  },
  {
    route: "/biblio",
    selector: "#histoire",
    title: "Histoire",
    text: "Les royaumes anciens, les empires, la colonisation et les indépendances.",
  },
  {
    route: "/biblio",
    selector: "#geo",
    title: "Géographie",
    text: "Une fiche par pays du continent, groupée par région.",
  },
  {
    route: "/biblio",
    selector: "#perso",
    title: "Personnalités",
    text: "Les figures qui ont marqué l'Afrique, un portrait par cours.",
  },
  {
    route: "/biblio",
    selector: "#decouverte",
    title: "Découverte",
    text: "Arts, sociétés, savoirs : ce qui traverse toutes les autres matières.",
  },
  {
    route: "/biblio",
    selector: 'a[href="/quiz"]',
    title: "Quiz",
    text: "C'est là que tu ancres ce que tu as lu. Voyons comment.",
  },
  {
    route: "/quiz",
    selector: '[data-guide="carte-conquete"]',
    title: "La carte de conquête",
    text: "Chaque territoire se colore à mesure que tu maîtrises ses questions, et rapporte jusqu'à trois étoiles.",
  },
  {
    route: "/quiz",
    selector: '[data-guide="territoire"]',
    title: "Blitz et Survie",
    text: "Blitz : le plus de bonnes réponses en 60 secondes. Survie : trois vies, la difficulté monte. Une erreur ouvre la leçon sur place.",
  },
  {
    route: "/quiz",
    selector: 'a[href="/quiz/defi"]',
    title: "Le défi du jour",
    text: "Cinq questions par jour, tirées en priorité de ce que tu as déjà raté.",
  },
  {
    route: "/quiz",
    selector: 'a[href="/profil"]',
    title: "Profil",
    text: "Ton niveau, ta série de jours et tes statistiques de progression.",
  },
];

/** Bande réservée à la pastille de flèche entre le bord de la cible et celui de la bulle */
const ARROW_BAND = 34;
/** Marge minimale gardée entre la bulle et les bords du viewport */
const EDGE = 12;
/** Hauteur du header collant, sous lequel une cible ne doit pas venir se loger */
const HEADER_SAFE = 84;
/** Délai laissé à un écran chargé à la demande (`React.lazy`) pour rendre la cible de l'étape */
const TARGET_TIMEOUT_MS = 4000;
/** Touches qui feraient défiler la page sous la cible pendant une étape */
const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

/**
 * BottomNav (mobile) et Sidebar (desktop) rendent tous deux le même lien : les deux sont dans le
 * DOM, un seul est affiché. On retient donc le premier élément qui occupe réellement l'écran.
 */
function findVisible(selector: string): HTMLElement | null {
  const found = Array.from(document.querySelectorAll<HTMLElement>(selector));
  return found.find((el) => el.getBoundingClientRect().width > 0) ?? null;
}

/** Vrai si l'élément (ou un de ses parents) est en position fixe — barres de navigation */
function isPinned(el: HTMLElement): boolean {
  for (let node: HTMLElement | null = el; node; node = node.parentElement) {
    if (getComputedStyle(node).position === "fixed") return true;
  }
  return false;
}

/**
 * Amène la cible sous le header, une seule fois à l'ouverture de l'étape. `block: "start"` plutôt
 * que `"center"` : centrer une section haute (une matière entière de la Biblio) en pousse le titre
 * hors de l'écran, et laisse moins de place à la bulle en dessous.
 */
function bringIntoView(target: HTMLElement): void {
  // Une barre de navigation ne défile pas avec la page : la faire défiler ne déplacerait que le
  // contenu derrière elle, en éloignant les autres cibles pour rien.
  if (isPinned(target)) return;
  const previous = target.style.scrollMarginTop;
  target.style.scrollMarginTop = `${HEADER_SAFE}px`;
  target.scrollIntoView({ block: "start" });
  target.style.scrollMarginTop = previous;
}

/**
 * Recolle la bulle et la flèche sur la cible, à partir de leurs positions réelles à cet instant.
 * Écrit directement dans le DOM (aucun état React) : appelée à chaque image, elle ne peut pas
 * afficher une position périmée, quelle que soit la raison du déplacement de la cible — image qui
 * finit de charger, écran chargé à la demande qui s'insère, mise en page qui se réajuste.
 */
function glue(target: HTMLElement, bubble: HTMLElement, arrow: HTMLElement): void {
  const t = target.getBoundingClientRect();
  const b = bubble.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const need = ARROW_BAND + b.height + EDGE;

  // Côté le plus dégagé. Si aucun des deux ne tient (cible qui remplit l'écran), la bulle se pose
  // au bord opposé au gros de la cible plutôt que sur elle.
  const below = vh - t.bottom >= need;
  const above = !below && t.top >= need;
  const anchored = below
    ? t.bottom + ARROW_BAND
    : above
      ? t.top - ARROW_BAND - b.height
      : vh - t.bottom > t.top
        ? vh - b.height - EDGE
        : EDGE;
  // Bornée au viewport : une cible qui se retrouve hors de l'écran emmènerait sinon la bulle avec
  // elle et le guide deviendrait illisible. `Math.max` en dernier pour qu'une bulle plus haute que
  // l'écran débordant par le bas garde au moins son début lisible.
  const top = Math.max(EDGE, Math.min(anchored, vh - b.height - EDGE));

  const left = Math.min(Math.max(EDGE, t.left + t.width / 2 - b.width / 2), vw - b.width - EDGE);
  bubble.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
  bubble.style.opacity = "1";

  // La flèche est le seul lien visuel avec la cible : on la cache plutôt que de la laisser pointer
  // dans le vide quand la cible sort de l'écran ou que la bulle a dû se poser au bord.
  const pointing = (below || above) && t.bottom > 0 && t.top < vh;
  arrow.style.opacity = pointing ? "1" : "0";
  if (!pointing) return;
  const a = arrow.getBoundingClientRect();
  const ax = Math.min(Math.max(EDGE, t.left + t.width / 2 - a.width / 2), vw - a.width - EDGE);
  const ay = (below ? t.bottom : t.top - ARROW_BAND) + (ARROW_BAND - a.height) / 2;
  arrow.style.transform = `translate(${Math.round(ax)}px, ${Math.round(ay)}px) rotate(${
    below ? 0 : 180
  }deg)`;
}

interface GuideTourProps {
  /** Appelé à la sortie de la visite, qu'elle soit terminée ou passée */
  onClose: () => void;
}

/**
 * Visite guidée de l'application : désigne un élément réel à la fois (flèche + bulle collée à
 * lui), plutôt qu'un écran d'accueil que personne ne relie ensuite aux boutons. L'app reste
 * affichée en clair — ni voile ni cadre autour de la cible.
 *
 * Le placement n'est pas mesuré une fois puis conservé : une boucle `requestAnimationFrame` le
 * recalcule tant que l'étape dure. C'est ce qui rend la bulle solidaire de ce qu'elle montre, même
 * quand la mise en page bouge d'elle-même (écran chargé à la demande, image qui arrive).
 *
 * Pendant une étape, l'écran est verrouillé : ni clic, ni glissement, ni défilement. C'est la
 * visite qui amène la cible en vue, et l'attention n'a nulle part d'autre où aller.
 *
 * Elle traverse l'accueil, la Biblio et le Quiz en naviguant elle-même d'un écran à l'autre — elle
 * est donc montée au-dessus des routes (`App`), sans quoi elle disparaîtrait à la première
 * navigation.
 */
export function GuideTour({ onClose }: GuideTourProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [step, setStep] = useState(0);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const current = STEPS[step];

  const finish = useCallback(() => {
    markGuideSeen();
    onClose();
    // La visite se termine là où elle a commencé : elle a pu emmener l'utilisateur sur la Biblio
    // ou le Quiz, le laisser en plan sur l'écran de la dernière étape serait déroutant.
    navigate("/");
  }, [onClose, navigate]);

  const next = useCallback(() => {
    if (step + 1 < STEPS.length) setStep(step + 1);
    else finish();
  }, [step, finish]);

  useEffect(() => {
    // Repart invisible, avant même de savoir si l'écran est le bon : sinon la bulle resterait
    // affichée sur la cible de l'étape précédente pendant tout le changement d'écran, puis
    // sauterait d'un coup — c'est le décalage le plus visible qu'avait la visite.
    if (bubbleRef.current) bubbleRef.current.style.opacity = "0";
    if (arrowRef.current) arrowRef.current.style.opacity = "0";

    if (pathname !== current.route) {
      navigate(current.route);
      return; // l'effet est relancé par le changement de `pathname`
    }

    let raf = 0;
    let target: HTMLElement | null = null;
    const deadline = Date.now() + TARGET_TIMEOUT_MS;

    function tick() {
      raf = requestAnimationFrame(tick);

      // Cible pas encore rendue (chunk `React.lazy` en vol), ou retirée du DOM depuis : on la
      // cherche à chaque image, puis on saute l'étape plutôt que de parler d'un élément absent.
      if (!target?.isConnected) {
        target = findVisible(current.selector);
        if (!target) {
          if (Date.now() > deadline) {
            cancelAnimationFrame(raf);
            next();
          }
          return;
        }
        bringIntoView(target);
        return; // la cible vient peut-être d'entrer dans le viewport : on colle à l'image suivante
      }

      if (bubbleRef.current && arrowRef.current) {
        glue(target, bubbleRef.current, arrowRef.current);
      }
    }

    tick();
    return () => cancelAnimationFrame(raf);
  }, [current.route, current.selector, pathname, navigate, next]);

  // `preventScroll` : le navigateur ramène un élément focalisé dans le viewport, ce qui
  // annulerait le défilement que `bringIntoView` vient de faire vers la cible.
  useEffect(() => {
    bubbleRef.current?.focus({ preventScroll: true });
  }, [step]);

  // Verrouillage de l'écran : la molette et les touches de défilement sont neutralisées ici, les
  // clics et le tactile par le voile (`touch-none`). `Tab` reste enfermé dans la bulle, sans quoi le
  // focus irait réveiller des boutons de l'app que la visite vient justement de figer.
  useEffect(() => {
    function onWheel(e: WheelEvent) {
      e.preventDefault();
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        finish();
        return;
      }
      const focusables = bubbleRef.current?.querySelectorAll<HTMLElement>("button");
      if (e.key === "Tab" && focusables?.length) {
        e.preventDefault();
        const items = Array.from(focusables);
        const at = items.indexOf(document.activeElement as HTMLElement);
        items[(at + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus();
        return;
      }
      // Espace actionne un bouton focalisé ; partout ailleurs il ferait défiler la page.
      const activates = e.key === " " && document.activeElement instanceof HTMLButtonElement;
      if (SCROLL_KEYS.has(e.key) && !activates) e.preventDefault();
    }
    // `passive: false` : sans ça le navigateur ignore le `preventDefault` d'un écouteur de molette.
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [finish]);

  const isLast = step === STEPS.length - 1;

  return (
    <>
      {/*
        Absorbe tout ce qui viendrait de l'app : clics, glissement de carte, défilement tactile
        (`touch-none`). Pendant une étape, la seule chose qui répond est la bulle.
      */}
      <div className="fixed inset-0 z-40 touch-none" />

      {/*
        Position et opacité écrites par `glue`, jamais par React : le rendu ne pose que le style
        de base, sinon chaque re-rendu écraserait le placement de la boucle.
      */}
      <div
        ref={arrowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[55] rounded-full bg-ink p-1.5 text-cream opacity-0"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={3} />
      </div>

      <div
        ref={bubbleRef}
        role="dialog"
        aria-modal="true"
        aria-label="Guide de découverte"
        tabIndex={-1}
        className="fixed left-0 top-0 z-[60] w-[min(19rem,calc(100vw-1.5rem))] touch-none rounded-card border-[3px] border-ink bg-card p-3 opacity-0 shadow-card"
      >
        <p className="font-heading text-[11px] font-bold uppercase tracking-wide text-ink-faint">
          Étape {step + 1} / {STEPS.length}
        </p>
        <h2 className="mt-0.5 font-heading text-lg font-extrabold">{current.title}</h2>
        <p className="mt-1 text-sm font-medium leading-snug text-ink-muted">
          {current.text}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            onClick={finish}
            className="font-heading text-xs font-bold text-ink-faint underline underline-offset-2"
          >
            Passer le guide
          </button>
          <Button onClick={next} size="sm">
            {isLast ? "C'est parti" : "Suivant"}
          </Button>
        </div>
      </div>
    </>
  );
}
