/**
 * Territoires du module Quiz : le découpage de jeu du catalogue.
 *
 * Cinq territoires géographiques (les régions déjà utilisées par la Biblio, voir
 * `geographieRegions.ts`) plus une zone transversale, **Le Baobab**, qui recueille tout ce qui
 * ne se rattache à aucune région : les sujets panafricains (indépendances, panafricanisme,
 * conférence de Berlin), la diaspora (Toussaint Louverture, Sojourner Truth) et l'ensemble de la
 * matière Découverte, fourre-tout revendiqué qui n'a volontairement pas de géographie.
 *
 * Un territoire mélange les quatre matières : l'Afrique de l'Ouest sert aussi bien une question
 * de géographie sur le Sénégal qu'une question d'histoire sur l'empire du Ghana ou une question
 * sur Cheikh Anta Diop. C'est le principe du module — relier les savoirs par le lieu, ce que les
 * parcours de l'ancien onglet Collections ne faisaient que sur 6 cours.
 *
 * Module pur : aucune dépendance au store.
 */
import type { GeographieRegion } from "@/lib/geographieRegions";
import { getGeographieRegion } from "@/lib/geographieRegions";
import { COURSE_TERRITORIES } from "@/data/courseTerritories";

export type TerritoryId = "nord" | "ouest" | "centrale" | "est" | "australe" | "baobab";

export interface Territory {
  id: TerritoryId;
  name: string;
  emoji: string;
  /** Phrase d'accroche affichée sur la carte de conquête */
  tagline: string;
  /** Région Géographie correspondante, `null` pour la zone transversale */
  region: GeographieRegion | null;
}

/** Zone transversale : sujets panafricains, diaspora et matière Découverte */
export const TRANSVERSAL_TERRITORY_ID: TerritoryId = "baobab";

export const TERRITORIES: Territory[] = [
  {
    id: "nord",
    name: "Afrique du Nord",
    emoji: "🕌",
    tagline: "Du Nil au Maghreb, entre Méditerranée et Sahara.",
    region: "Afrique du Nord",
  },
  {
    id: "ouest",
    name: "Afrique de l'Ouest",
    emoji: "🥁",
    tagline: "Terre des grands empires du Sahel et du golfe de Guinée.",
    region: "Afrique de l'Ouest",
  },
  {
    id: "centrale",
    name: "Afrique centrale",
    emoji: "🌳",
    tagline: "Le bassin du Congo et les royaumes de la forêt.",
    region: "Afrique centrale",
  },
  {
    id: "est",
    name: "Afrique de l'Est",
    emoji: "⛰️",
    tagline: "Hauts plateaux, Grands Lacs et côte de l'océan Indien.",
    region: "Afrique de l'Est",
  },
  {
    id: "australe",
    name: "Afrique australe",
    emoji: "💎",
    tagline: "Des ruines du Grand Zimbabwe au cap de Bonne-Espérance.",
    region: "Afrique australe",
  },
  {
    id: "baobab",
    name: "Le Baobab",
    emoji: "🌍",
    tagline: "L'arbre à palabres : les savoirs qui traversent tout le continent.",
    region: null,
  },
];

export const TERRITORY_IDS: TerritoryId[] = TERRITORIES.map((t) => t.id);

const TERRITORY_BY_REGION = new Map<GeographieRegion, TerritoryId>(
  TERRITORIES.filter((t): t is Territory & { region: GeographieRegion } => t.region !== null).map(
    (t) => [t.region, t.id],
  ),
);

export function getTerritory(id: TerritoryId): Territory | undefined {
  return TERRITORIES.find((t) => t.id === id);
}

/**
 * Territoires auxquels un cours appartient — toujours au moins un.
 *
 * Les fiches Géographie dérivent leur territoire de leur numéro d'ordre (aucun tag à maintenir) ;
 * les autres matières sont rattachées explicitement par `COURSE_TERRITORIES`, où un tableau vide
 * signifie « transversal » et renvoie donc sur Le Baobab. Un cours absent de la table est une
 * erreur de contenu, attrapée par la règle 21 du validateur (`npm run validate`) : à l'exécution
 * on le verse dans Le Baobab plutôt que de le rendre injouable, avec un avertissement console —
 * même parti pris que `getCourseOrWarn`.
 */
export function getCourseTerritories(courseId: string, categoryId: string): TerritoryId[] {
  if (categoryId === "geo") {
    const region = getGeographieRegion(courseId);
    const territoryId = region ? TERRITORY_BY_REGION.get(region) : undefined;
    if (territoryId) return [territoryId];
    console.warn(`[territoires] Fiche Géographie sans région dérivable : ${courseId}`);
    return [TRANSVERSAL_TERRITORY_ID];
  }

  const tagged = COURSE_TERRITORIES[courseId];
  if (tagged === undefined) {
    console.warn(`[territoires] Cours non rattaché à un territoire : ${courseId}`);
    return [TRANSVERSAL_TERRITORY_ID];
  }
  return tagged.length > 0 ? tagged : [TRANSVERSAL_TERRITORY_ID];
}
