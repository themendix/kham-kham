/**
 * Modèle de blocs typés d'une leçon (docs/CHARTE-LECONS.md § 3-5).
 * `Lesson.blocks`/`SwipeCard.blocks` sont réexportés depuis `src/types/index.ts`.
 */

export interface ParagrapheBlock {
  type: "paragraphe";
  /** Balisage inline `**gras**` autorisé (§ 5). */
  text: string;
}

/** Ancre mémorielle de fin de leçon. Obligatoire, une seule par leçon (charte). */
export interface ARetenirBlock {
  type: "aRetenir";
  /** 2 à 3 puces, 14 mots maximum chacune. Balisage inline autorisé. */
  points: string[];
}

/** Anecdote surprenante. Optionnelle, une seule par leçon, toujours en dernier bloc. */
export interface LeSavaisTuBlock {
  type: "leSavaisTu";
  text: string;
}

/** Un nombre isolé, mis en scène. Aucun balisage inline. */
export interface ChiffreCleBlock {
  type: "chiffreCle";
  /** Le nombre et son unité, tel qu'affiché : "2,38 M km²", "3100 av. J.-C.", "80 %" */
  valeur: string;
  /** Ce que le nombre signifie, 10 mots maximum. */
  legende: string;
}

/** Parole rapportée, proverbe, devise. Aucun balisage inline. */
export interface CitationBlock {
  type: "citation";
  texte: string;
  auteur: string;
  /** Année ou période, affichée en petit sous l'auteur. Facultatif. */
  date?: string;
}

/** Suite chronologique. 3 à 5 événements. Aucun balisage inline. */
export interface FriseBlock {
  type: "frise";
  evenements: { date: string; texte: string }[];
  /** Mention commune à toutes les dates ("av. J.-C."), affichée une seule fois sous la frise. */
  unite?: string;
}

/** Grille de repères factuels (capitale, monnaie, population…). 2 à 6 entrées. Aucun balisage inline. */
export interface ReperesBlock {
  type: "reperes";
  items: { label: string; valeur: string }[];
}

/**
 * Illustration intra-leçon. Le fichier n'est pas référencé ici : il est résolu par convention
 * (`src/assets/lecons/<courseId>-<lessonId>-{400w,800w}.webp`), comme les bannières de cours
 * (`src/lib/courseImages.ts`). Déclaré, non utilisé (docs/CHARTE-LECONS.md § 4.8).
 */
export interface ImageBlock {
  type: "image";
  alt: string;
  /** Légende visible sous l'image. 12 mots maximum. */
  legende?: string;
  /** Attribution. Obligatoire pour toute image non produite pour le projet. */
  credit?: string;
}

/** Bloc élémentaire d'une leçon. Union discriminée sur `type`. Catalogue fermé à 8 membres. */
export type LessonBlock =
  | ParagrapheBlock
  | ARetenirBlock
  | LeSavaisTuBlock
  | ChiffreCleBlock
  | CitationBlock
  | FriseBlock
  | ReperesBlock
  | ImageBlock;

export interface InlineSegment {
  text: string;
  bold: boolean;
}

const BOLD_RE = /\*\*(.+?)\*\*/g;

/** Découpe un texte portant le balisage `**gras**` en segments gras/plats, dans l'ordre. */
export function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(BOLD_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) segments.push({ text: text.slice(lastIndex, index), bold: false });
    segments.push({ text: match[1], bold: true });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex), bold: false });
  return segments;
}

/** Retire le balisage `**gras**` d'un texte, ne conserve que le contenu visible. */
export function stripInlineMarkers(text: string): string {
  return text.replace(BOLD_RE, "$1");
}

/**
 * Concatène tout le texte visible d'une leçon, balisage inline retiré. Partagée par la
 * recherche (`src/lib/search.ts`), le validateur (`scripts/validate-content.ts`, règles 11
 * et 16) et le contrôle de non-régression de la conversion mécanique.
 */
export function lessonPlainText(blocks: LessonBlock[]): string {
  const parts: string[] = [];
  for (const block of blocks) {
    switch (block.type) {
      case "paragraphe":
        parts.push(stripInlineMarkers(block.text));
        break;
      case "aRetenir":
        for (const point of block.points) parts.push(stripInlineMarkers(point));
        break;
      case "leSavaisTu":
        parts.push(stripInlineMarkers(block.text));
        break;
      case "chiffreCle":
        parts.push(block.valeur, block.legende);
        break;
      case "citation":
        parts.push(block.texte, block.auteur);
        if (block.date) parts.push(block.date);
        break;
      case "frise":
        for (const evenement of block.evenements) parts.push(evenement.date, evenement.texte);
        if (block.unite) parts.push(block.unite);
        break;
      case "reperes":
        for (const item of block.items) parts.push(item.label, item.valeur);
        break;
      case "image":
        parts.push(block.alt);
        if (block.legende) parts.push(block.legende);
        if (block.credit) parts.push(block.credit);
        break;
    }
  }
  return parts
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Nombre de mots visibles d'une leçon. Base de la règle 11 du validateur (budget de mots). */
export function lessonWordCount(blocks: LessonBlock[]): number {
  const text = lessonPlainText(blocks);
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}
