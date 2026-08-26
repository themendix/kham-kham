/**
 * Rattachement explicite d'une question de quiz à la leçon qui en donne la réponse.
 *
 * Sert le module Quiz : quand l'utilisateur se trompe, la correction déplie sur place la leçon
 * concernée, et l'écran de fin de partie liste toutes les leçons des questions ratées. C'est ce
 * qui fait de l'échec une porte d'entrée dans le catalogue plutôt qu'une sanction.
 *
 * **Cette table ne contient que les exceptions.** Quand un cours a autant de questions que de
 * leçons (78 cours sur 136 : toute l'Histoire, 30 Personnalités, 8 Découverte — le quiz y suit
 * l'ordre des leçons, une question par leçon), `scripts/generate-quiz-index.ts` dérive le
 * rattachement par position et rien n'est à déclarer ici.
 *
 * Restent les cours **non alignés**, à rattacher à la main :
 * - les 54 fiches Géographie (3 leçons, 5 questions) — le rattachement se lit dans le contenu,
 *   les 7 rubriques d'origine ayant été regroupées en 3 leçons ;
 * - 4 cours hérités (3 leçons, 4 questions).
 *
 * Une question non rattachée n'est jamais bloquante : le module renvoie alors vers le **cours**
 * au lieu de la leçon (dégradation propre). La règle 22 de `npm run validate` en tient le compte.
 *
 * Clé = clé de question (`${courseId}:${questionId}`), valeur = id de leçon du même cours.
 */
export const QUIZ_LESSON_MAP: Record<string, string> = {
  // Géographie et cours hérités : à remplir dans un lot dédié.
};
