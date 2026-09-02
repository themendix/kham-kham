import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getTerritory, type TerritoryId } from "@/lib/territories";
import type { TerritoryConquest } from "@/lib/conquest";
import { AFRICA_COUNTRIES, AFRICA_MAP_VIEWBOX } from "@/data/africaMap.generated";

/**
 * Carte de conquête : le tracé réel de l'Afrique, pays par pays, coloré par territoire et rempli
 * à proportion de la maîtrise.
 *
 * Géométrie dérivée de Natural Earth (domaine public) en **projection azimutale équivalente de
 * Lambert** — voir `scripts/generate-africa-map.mjs`. Les frontières nationales restent visibles :
 * dans une application qui consacre 54 fiches aux pays africains, pouvoir les distinguer sur la
 * carte est une qualité, pas du bruit.
 *
 * Les cinq teintes viennent de la palette existante (or, terre, vert savane, indigo, flamme) : la
 * **teinte** dit le territoire, l'**opacité** dit la maîtrise. Aucun token n'a été ajouté.
 *
 * Les cinq territoires du module y sont tous tracés : depuis la dissolution du Baobab, la zone
 * transversale sans géographie, la carte couvre l'intégralité du catalogue.
 *
 * **La carte est le sélecteur de territoire** : taper une région la sélectionne et met à jour le
 * panneau de détail sous la carte (elle ne lance aucune partie — ce sont les boutons Blitz et
 * Survie du panneau qui le font). La région sélectionnée se distingue par son contour, rouge et
 * épais au lieu du liseré d'encre habituel : c'est le seul marqueur de sélection.
 *
 * **Accessibilité** : chaque territoire est un groupe focalisable au clavier (`role="button"`,
 * `aria-pressed`), annoncé avec son nom et sa maîtrise. La carte n'est donc plus décorative — elle
 * a remplacé la liste de territoires qui lui servait de contrôle accessible. Le focus clavier suit
 * le tracé du territoire (classe `sankofa-territoire`, `src/styles/index.css`) et non sa boîte
 * englobante : le contour rectangulaire par défaut encadrait un pays au milieu de la carte.
 */
interface ConquestMapProps {
  conquests: Record<string, TerritoryConquest>;
  /** Territoire sélectionné : contour rouge sur la carte, contenu du panneau de détail */
  selectedId: TerritoryId;
  onSelect: (territoryId: TerritoryId) => void;
}

const TERRITORY_FILL: Record<string, string> = {
  nord: "var(--color-gold)",
  ouest: "var(--color-primary)",
  centrale: "var(--color-success)",
  est: "var(--color-indigo)",
  australe: "var(--color-flame)",
};

/**
 * Plancher volontairement haut : en dessous d'environ 0,3 les cinq teintes se ressemblent toutes
 * et la carte cesse de dire *quel* territoire on regarde. Or c'est son premier travail — la
 * progression, elle, est aussi donnée par les étoiles et la barre du panneau de détail. La teinte
 * reste donc lisible même sur un territoire vierge.
 */
function fillOpacity(ratio: number): number {
  return 0.32 + Math.min(1, Math.max(0, ratio)) * 0.63;
}

export function ConquestMap({ conquests, selectedId, onSelect }: ConquestMapProps) {
  const reducedMotion = useReducedMotion();
  // Les territoires se remplissent au montage, du plus vide au plus maîtrisé : la carte se
  // « colore » sous les yeux au lieu d'apparaître déjà faite. Deux frames d'attente, sinon le
  // navigateur peint directement l'état final et la transition ne se voit pas.
  const [revealed, setRevealed] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setRevealed(true);
      return;
    }
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setRevealed(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [reducedMotion]);

  const byTerritory = useMemo(() => {
    const groups = new Map<string, typeof AFRICA_COUNTRIES>();
    for (const country of AFRICA_COUNTRIES) {
      const group = groups.get(country.territoryId) ?? [];
      group.push(country);
      groups.set(country.territoryId, group);
    }
    return [...groups.entries()];
  }, []);

  // Le territoire sélectionné est dessiné en dernier : en SVG, l'ordre du document est l'ordre de
  // peinture, et sans ça le contour rouge se ferait recouvrir par le liseré d'encre des régions
  // voisines. Le délai d'apparition, lui, reste celui de l'ordre d'origine — la cascade de
  // remplissage ne doit pas se réorganiser à chaque clic.
  const revealDelays = useMemo(
    () => new Map(byTerritory.map(([territoryId], index) => [territoryId, index * 110])),
    [byTerritory],
  );
  const painted = useMemo(
    () =>
      [...byTerritory].sort(
        (a, b) => Number(a[0] === selectedId) - Number(b[0] === selectedId),
      ),
    [byTerritory, selectedId],
  );

  return (
    <svg
      viewBox={AFRICA_MAP_VIEWBOX}
      className="h-auto w-full"
      role="group"
      aria-label="Carte de conquête : choisis un territoire"
    >
      {painted.map(([territoryId, countries]) => {
        const conquest = conquests[territoryId];
        const ratio = conquest?.masteryRatio ?? 0;
        const delay = reducedMotion ? 0 : (revealDelays.get(territoryId) ?? 0);
        const isSelected = territoryId === selectedId;
        const territory = getTerritory(territoryId as TerritoryId);
        return (
          <g
            key={territoryId}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            aria-label={`${territory?.name ?? territoryId} — ${conquest?.mastered ?? 0} question${(conquest?.mastered ?? 0) > 1 ? "s" : ""} acquise${(conquest?.mastered ?? 0) > 1 ? "s" : ""} sur ${conquest?.total ?? 0}`}
            onClick={() => onSelect(territoryId as TerritoryId)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              onSelect(territoryId as TerritoryId);
            }}
            className="sankofa-territoire cursor-pointer transition-opacity duration-200 hover:opacity-70"
          >
            {countries.map((country) => (
              <path
                key={country.iso}
                d={country.d}
                fill={TERRITORY_FILL[territoryId]}
                fillOpacity={revealed ? fillOpacity(ratio) : fillOpacity(0)}
                style={{
                  transition: reducedMotion
                    ? undefined
                    : `fill-opacity 850ms ease-out ${delay}ms`,
                }}
                stroke={isSelected ? "var(--color-primary)" : "var(--color-ink)"}
                strokeWidth={isSelected ? 3.2 : 1.6}
                strokeLinejoin="round"
              >
                <title>{country.name}</title>
              </path>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
