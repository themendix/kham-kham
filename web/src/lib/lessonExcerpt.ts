/**
 * Extrait de leçon affiché dans la correction d'une mauvaise réponse (module Quiz).
 *
 * Le module ne se contente plus d'annoncer « voici la bonne réponse » : il montre sur place les
 * deux ou trois phrases du cours qui l'expliquent, avec un renvoi vers le cours complet. C'est la
 * même intention que `LessonReveal` (l'échec est une porte d'entrée vers le contenu), mais servie
 * d'emblée et en une bouchée, pendant une partie où l'on n'a pas le temps de déplier une leçon
 * entière.
 *
 * Le passage n'est pas pris au hasard : on privilégie le paragraphe qui **cite la bonne réponse**,
 * puisque c'est lui qui répond à la question ratée. À défaut, le premier paragraphe de la leçon.
 *
 * Module pur, sans dépendance au store ni à React.
 */
import { stripInlineMarkers, type LessonBlock } from "@/lib/lessonBlocks";
import { normalizeSearchText } from "@/lib/search";

/** Nombre de phrases retenues, et longueur au-delà de laquelle on s'arrête même en milieu de compte. */
const MAX_SENTENCES = 3;
const MAX_CHARS = 300;

/**
 * Découpe en phrases.
 *
 * Deux garde-fous contre les abréviations, omniprésentes dans le catalogue (« av. J.-C. »,
 * « M. Diop ») : on ne coupe que **devant** une majuscule, un chiffre ou un guillemet ouvrant, et
 * seulement **après** un point qui clôt un mot d'au moins trois lettres ou un nombre. « av. » et
 * « J.-C. » échouent aux deux, une phrase entière y satisfait.
 */
const SENTENCE_BOUNDARY = /(?<=(?:[A-Za-zÀ-ÿ]{3,}|\d|[»"’)])\.|[!?…])\s+(?=[«"A-ZÀ-ÖØ-Þ0-9])/u;

export interface LessonExcerptOptions {
  /** Texte dont la présence désigne le paragraphe le plus pertinent (la bonne réponse à la question ratée). */
  around?: string;
  maxSentences?: number;
}

/**
 * Deux à trois phrases de la leçon, sans balisage inline. Chaîne vide si la leçon ne contient
 * aucun paragraphe (cas théorique : la charte en impose au moins un).
 */
export function lessonExcerpt(blocks: LessonBlock[], options: LessonExcerptOptions = {}): string {
  const { around, maxSentences = MAX_SENTENCES } = options;

  const paragraphs = blocks
    .filter((block): block is Extract<LessonBlock, { type: "paragraphe" }> => block.type === "paragraphe")
    .map((block) => stripInlineMarkers(block.text).replace(/\s+/g, " ").trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return "";

  const needle = around ? normalizeSearchText(around.trim()) : "";
  const chosen =
    (needle ? paragraphs.find((p) => normalizeSearchText(p).includes(needle)) : undefined) ??
    paragraphs[0];

  const sentences = chosen.split(SENTENCE_BOUNDARY);
  const kept: string[] = [];
  for (const sentence of sentences) {
    if (kept.length >= maxSentences) break;
    // On garde toujours la première phrase, même longue : mieux vaut une phrase entière un peu
    // longue qu'un extrait vide.
    if (kept.length > 0 && kept.join(" ").length + sentence.length > MAX_CHARS) break;
    kept.push(sentence);
  }
  return kept.join(" ").trim();
}
