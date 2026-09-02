/**
 * Territoires du module Quiz : le découpage de jeu du catalogue.
 *
 * Cinq territoires géographiques, et cinq seulement : les régions déjà utilisées par la Biblio
 * (voir `geographieRegions.ts`).
 *
 * Une sixième zone transversale, **Le Baobab**, a existé jusqu'à ce que la carte de conquête
 * devienne le seul sélecteur de territoire. Sans géographie, elle n'avait aucun tracé sur la
 * carte, donc plus aucune porte d'entrée : 100 questions (15 % du catalogue) vivaient dans un
 * territoire que personne ne pouvait taper. Ses questions ont été réparties une par une dans les
 * cinq régions — voir `src/data/questionTerritories.ts` pour la méthode et les arbitrages.
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
import { QUESTION_TERRITORIES } from "@/data/questionTerritories";

export type TerritoryId = "nord" | "ouest" | "centrale" | "est" | "australe";

export interface Territory {
  id: TerritoryId;
  name: string;
  emoji: string;
  /** Phrase d'accroche affichée sur la carte de conquête */
  tagline: string;
  /** Région Géographie correspondante — chaque territoire en a une depuis la dissolution du Baobab */
  region: GeographieRegion;
}

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
];

export const TERRITORY_IDS: TerritoryId[] = TERRITORIES.map((t) => t.id);

const TERRITORY_BY_REGION = new Map<GeographieRegion, TerritoryId>(
  TERRITORIES.map((t) => [t.region, t.id]),
);

export function getTerritory(id: TerritoryId): Territory | undefined {
  return TERRITORIES.find((t) => t.id === id);
}

/**
 * Territoires auxquels un cours appartient — normalement au moins un.
 *
 * Les fiches Géographie dérivent leur territoire de leur numéro d'ordre (aucun tag à maintenir) ;
 * les autres matières sont rattachées explicitement par `COURSE_TERRITORIES`. Un **tableau vide**
 * y signifie désormais « rattaché question par question » (`QUESTION_TERRITORIES`) et non plus
 * « transversal » : la zone transversale n'existe plus.
 *
 * Rend donc `[]` pour ces cours-là — c'est `getQuestionTerritories` qui tranche, question par
 * question. Un cours absent de la table est une erreur de contenu, attrapée par la règle 21 du
 * validateur (`npm run validate`) ; à l'exécution on avertit en console sans lever, même parti
 * pris que `getCourseOrWarn`.
 */
export function getCourseTerritories(courseId: string, categoryId: string): TerritoryId[] {
  if (categoryId === "geo") {
    const region = getGeographieRegion(courseId);
    const territoryId = region ? TERRITORY_BY_REGION.get(region) : undefined;
    if (territoryId) return [territoryId];
    console.warn(`[territoires] Fiche Géographie sans région dérivable : ${courseId}`);
    return [];
  }

  const tagged = COURSE_TERRITORIES[courseId];
  if (tagged === undefined) {
    console.warn(`[territoires] Cours non rattaché à un territoire : ${courseId}`);
    return [];
  }
  return tagged;
}

/**
 * Territoires d'une **question**, seule granularité qui fasse foi pour le module Quiz.
 *
 * Le rattachement de la question prime sur celui de son cours : un cours qui traverse plusieurs
 * régions (les cinq musiques de « Rythmes du continent », les quatre étoffes de « Tissus et
 * parures ») répartit ses questions au lieu de les entasser au même endroit — ou pire, de se
 * taguer en multi-territoire, ce qui ferait compter une même question dans plusieurs territoires.
 *
 * `key` suit la convention `${courseId}:${questionId}`, la même que `completedLessonIds` et
 * `QUIZ_LESSON_MAP`.
 */
export function getQuestionTerritories(
  key: string,
  courseId: string,
  categoryId: string,
): TerritoryId[] {
  const declared = QUESTION_TERRITORIES[key];
  if (declared) return [declared];
  return getCourseTerritories(courseId, categoryId);
}
