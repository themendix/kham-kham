import type { Parcours } from "@/types";

/** Parcours de l'onglet Collections : relient thématiquement 2 cours de matières différentes. */
export const PARCOURS: Parcours[] = [
  {
    id: "parcours-racines-civilisations",
    title: "Racines : les civilisations africaines",
    description: "Des grands empires du Sahel aux griots qui en ont transmis la mémoire.",
    emoji: "🏺",
    courseIds: ["course-histoire-05-empire-du-ghana", "course-trad-griots-sagesses"],
    xpReward: 120,
  },
  {
    id: "parcours-voix-et-sons",
    title: "Voix et sons du continent",
    description: "Écrivains et musiciens qui ont porté la culture africaine sur la scène mondiale.",
    emoji: "🎤",
    courseIds: ["course-perso-voix-plumes-afrique", "course-arts-rythmes-continent"],
    xpReward: 140,
  },
  {
    id: "parcours-afrique-aujourdhui-toujours",
    title: "L'Afrique d'aujourd'hui et de toujours",
    description: "Du Sahara aux hubs technologiques : un continent entre grands espaces et innovation.",
    emoji: "🌍",
    courseIds: ["course-geographie-01-algerie", "course-actu-afrique-qui-innove"],
    xpReward: 140,
  },
];
