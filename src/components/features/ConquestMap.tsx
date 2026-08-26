import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { TerritoryId } from "@/lib/territories";
import type { TerritoryConquest } from "@/lib/conquest";
import {
  AFRICA_COUNTRIES,
  AFRICA_MAP_VIEWBOX,
  AFRICA_TERRITORY_ANCHORS,
} from "@/data/africaMap.generated";

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
 * Le Baobab n'y figure pas : il n'a pas de géographie, c'est tout son propos.
 *
 * **Accessibilité** : la carte est décorative (`aria-hidden`). Les régions restent cliquables au
 * pointeur par commodité, mais la liste de territoires qui la suit est le contrôle réel — elle est
 * accessible au clavier et aux lecteurs d'écran.
 */
interface ConquestMapProps {
  conquests: Record<string, TerritoryConquest>;
  onSelect: (territoryId: TerritoryId) => void;
}

const TERRITORY_FILL: Record<string, string> = {
  nord: "var(--color-gold)",
  ouest: "var(--color-primary)",
  centrale: "var(--color-success)",
  est: "var(--color-indigo)",
  australe: "var(--color-flame)",
};

const TERRITORY_EMOJI: Record<string, string> = {
  nord: "🕌",
  ouest: "🥁",
  centrale: "🌳",
  est: "⛰️",
  australe: "💎",
};

/**
 * Plancher volontairement haut : en dessous d'environ 0,3 les cinq teintes se ressemblent toutes
 * et la carte cesse de dire *quel* territoire on regarde. Or c'est son premier travail — la
 * progression, elle, est aussi donnée par les étoiles et les barres de la liste. La teinte reste
 * donc lisible même sur un territoire vierge.
 */
function fillOpacity(ratio: number): number {
  return 0.32 + Math.min(1, Math.max(0, ratio)) * 0.63;
}

export function ConquestMap({ conquests, onSelect }: ConquestMapProps) {
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

  return (
    <svg
      viewBox={AFRICA_MAP_VIEWBOX}
      className="h-auto w-full max-w-[460px]"
      aria-hidden="true"
      focusable="false"
    >
      {byTerritory.map(([territoryId, countries], groupIndex) => {
        const ratio = conquests[territoryId]?.masteryRatio ?? 0;
        const delay = reducedMotion ? 0 : groupIndex * 110;
        return (
          <g
            key={territoryId}
            onClick={() => onSelect(territoryId as TerritoryId)}
            className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
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
                stroke="var(--color-ink)"
                strokeWidth={1.6}
                strokeLinejoin="round"
              >
                <title>{country.name}</title>
              </path>
            ))}
          </g>
        );
      })}

      {byTerritory.map(([territoryId]) => {
        const anchor = AFRICA_TERRITORY_ANCHORS[territoryId];
        const conquest = conquests[territoryId];
        if (!anchor) return null;
        return (
          <g
            key={`label-${territoryId}`}
            onClick={() => onSelect(territoryId as TerritoryId)}
            className="cursor-pointer"
            style={{
              opacity: revealed ? 1 : 0,
              transition: reducedMotion ? undefined : "opacity 420ms ease-out 500ms",
            }}
          >
            <circle
              cx={anchor.x}
              cy={anchor.y}
              r={30}
              fill="var(--color-card)"
              stroke="var(--color-ink)"
              strokeWidth={3}
            />
            <text x={anchor.x} y={anchor.y - 4} textAnchor="middle" dominantBaseline="middle" fontSize="26">
              {TERRITORY_EMOJI[territoryId]}
            </text>
            <text
              x={anchor.x}
              y={anchor.y + 16}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="13"
              fill="var(--color-ink)"
            >
              {"★".repeat(conquest?.stars ?? 0)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
