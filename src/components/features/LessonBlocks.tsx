import { Fragment } from "react";
import { Check, Lightbulb } from "lucide-react";
import type { LessonBlock, SubjectColor } from "@/types";
import type { ARetenirBlock } from "@/lib/lessonBlocks";
import { parseInline } from "@/lib/lessonBlocks";
import { SUBJECT_BG, SUBJECT_DEEP, SUBJECT_DEEP_BG } from "@/lib/subjectStyles";
import { getLessonImage } from "@/lib/lessonImages";

/**
 * Rend un texte portant le balisage `**gras**` (§ 5 de la charte). `boldClassName` permet
 * d'adapter la couleur du gras au fond du bloc qui l'affiche — `text-ink` (par défaut) est
 * invisible sur le fond sombre inversé de `aRetenir`.
 */
function Inline({ text, boldClassName = "text-ink" }: { text: string; boldClassName?: string }) {
  return (
    <>
      {parseInline(text).map((segment, i) =>
        segment.bold ? (
          <strong key={i} className={`font-bold ${boldClassName}`}>
            {segment.text}
          </strong>
        ) : (
          <Fragment key={i}>{segment.text}</Fragment>
        ),
      )}
    </>
  );
}

/** Un jalon du fil : point plein sur le trait pointillé, à gauche du contenu du bloc. */
function ThreadDot({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute -left-[22px] top-1 h-[11px] w-[11px] rounded-full border-2 border-ink bg-primary" />
      {children}
    </div>
  );
}

interface LessonBlocksProps {
  blocks: LessonBlock[];
  accent: SubjectColor;
  /** `full` (page de cours) ou `compact` (« À la une », fil Home, favoris) — mêmes blocs, même sémantique. */
  density?: "full" | "compact";
  /**
   * Identifiant du porteur des blocs (id de leçon, ou id de carte pour le fil Home). Sert
   * uniquement à résoudre la photo du bloc `image` par convention de nommage
   * (`src/lib/lessonImages.ts`). Absent ou sans fichier correspondant : le bloc `image` retombe
   * sur son cadre vide, sans casser la leçon.
   */
  imageKey?: string;
}

/**
 * Moteur de rendu unique d'une leçon (docs/CHARTE-LECONS.md § 4 et § 10.2, principe P6).
 * Un seul composant pour les quatre sites d'affichage d'une leçon : page de cours, « À la une »,
 * fil Home, favoris. Aucune divergence tolérée entre ces sites.
 *
 * Les blocs s'enchaînent le long d'un fil pointillé, façon jalons d'une histoire (handoff « Refonte
 * de l'écran de leçon »). `leSavaisTu` reste une aparté détachée du fil (pas de jalon). `aRetenir`
 * est toujours rendu en dernier, en conclusion sur fond inversé, quelle que soit sa position dans
 * `blocks` — seules les données déterminent son contenu, jamais son rang d'affichage.
 */
export function LessonBlocks({ blocks, accent, density = "full", imageKey }: LessonBlocksProps) {
  const compact = density === "compact";
  const aRetenir = blocks.find((b): b is ARetenirBlock => b.type === "aRetenir");
  const threadBlocks = blocks.filter((b) => b.type !== "aRetenir");
  const deep = SUBJECT_DEEP[accent];

  return (
    <div className={compact ? "flex flex-col gap-2.5" : "flex flex-col gap-3.5"}>
      <div
        className={`flex flex-col border-l-[2.5px] border-dotted border-ink/25 ${compact ? "gap-2.5 pl-[18px]" : "gap-[13px] pl-[22px]"}`}
      >
        {threadBlocks.map((block, i) => {
          switch (block.type) {
            case "paragraphe":
              return (
                <ThreadDot key={i}>
                  <p
                    className={`${compact ? "text-[14px]" : "text-[15.5px]"} font-medium leading-relaxed text-ink-muted`}
                  >
                    <Inline text={block.text} />
                  </p>
                </ThreadDot>
              );

            case "leSavaisTu":
              // Reste hors fil : aparté visuellement détachée, légèrement inclinée (inchangé).
              return (
                <div
                  key={i}
                  className={`flex gap-2.5 rounded-card border-[2.5px] border-ink bg-gold/30 -rotate-[0.6deg] ${compact ? "p-3" : "p-3.5"}`}
                >
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-card">
                    <Lightbulb className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs uppercase tracking-wide text-ink">Le savais-tu ?</div>
                    <p className="mt-1 text-[13.5px] font-medium leading-relaxed text-ink">
                      <Inline text={block.text} />
                    </p>
                  </div>
                </div>
              );

            case "chiffreCle":
              return (
                <ThreadDot key={i}>
                  <div className={`rounded-[18px] border-[2.5px] border-ink p-[13px_16px] shadow-sm ${SUBJECT_DEEP_BG[accent]}`}>
                    <div className="font-heading text-[34px] font-extrabold leading-none text-ink">
                      {block.valeur}
                    </div>
                    <div className="mt-1.5 text-[13.5px] font-semibold text-ink">{block.legende}</div>
                  </div>
                </ThreadDot>
              );

            case "citation":
              return (
                <ThreadDot key={i}>
                  <blockquote className="border-l-[5px] border-ink pl-4">
                    <p className="text-[15.5px] italic text-ink">{block.texte}</p>
                    <div className="mt-1.5 font-heading text-[13px] font-bold text-ink">{block.auteur}</div>
                    {block.date && <div className="text-[12px] text-ink-faint">{block.date}</div>}
                  </blockquote>
                </ThreadDot>
              );

            case "frise":
              return (
                <ThreadDot key={i}>
                  <div className="flex flex-col gap-3 border-l-[2.5px] border-ink/25 pl-4">
                    {block.evenements.map((evenement, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span
                          className={`-ml-[27px] shrink-0 rounded-full border-[2px] border-ink px-2 py-0.5 font-heading text-[12px] font-bold text-ink ${SUBJECT_BG[accent]}`}
                        >
                          {evenement.date}
                        </span>
                        <span className="pt-0.5 text-[14px] font-medium text-ink-muted">{evenement.texte}</span>
                      </div>
                    ))}
                    {block.unite && <div className="text-[11px] font-semibold text-ink-faint">{block.unite}</div>}
                  </div>
                </ThreadDot>
              );

            case "reperes":
              return (
                <ThreadDot key={i}>
                  <div className="grid grid-cols-2 gap-2.5">
                    {block.items.map((item, j) => (
                      <div key={j} className="rounded-[12px] border-[2px] border-ink bg-card p-3">
                        <div className="font-heading text-[11px] uppercase tracking-wide text-ink-faint">
                          {item.label}
                        </div>
                        <div className="text-[15px] font-bold text-ink">{item.valeur}</div>
                      </div>
                    ))}
                  </div>
                </ThreadDot>
              );

            case "image": {
              // Résolue par convention de nommage, jamais référencée dans les données (§ 4.8).
              const image = getLessonImage(imageKey);
              return (
                <ThreadDot key={i}>
                  <figure className="overflow-hidden rounded-card border-[2.5px] border-ink bg-card shadow-sm">
                    {/* L'image remplit tout le cadre, sans bande visible (`object-cover`). La
                        hauteur reste plafonnée : au-delà, l'image est recadrée plutôt que
                        lettreboxée. Le plafond est calé pour qu'un format paysage courant (jusqu'au
                        4:3) passe entier — seuls les portraits nettement verticaux sont rognés, par
                        le bas (`object-top`), là où se trouve le moins souvent le sujet. */}
                    {image ? (
                      <img
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes={compact ? "(min-width: 768px) 420px, 100vw" : "(min-width: 768px) 620px, 100vw"}
                        alt={block.alt}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-cover object-top ${compact ? "max-h-[280px]" : "max-h-[480px]"}`}
                      />
                    ) : (
                      <div className={`w-full bg-cream ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`} />
                    )}
                    {(block.legende || block.credit) && (
                      <figcaption
                        className={`border-t-[2.5px] border-ink bg-card ${compact ? "px-3 py-2" : "px-4 py-2.5"}`}
                      >
                        {block.legende && (
                          <div
                            className={`font-medium leading-snug text-ink ${compact ? "text-[12.5px]" : "text-[13.5px]"}`}
                          >
                            {block.legende}
                          </div>
                        )}
                        {block.credit && (
                          <div className="mt-0.5 text-[11px] leading-snug text-ink-faint">{block.credit}</div>
                        )}
                      </figcaption>
                    )}
                  </figure>
                </ThreadDot>
              );
            }
          }
        })}
      </div>

      {aRetenir && (
        <div className={`rounded-card border-[2.5px] border-ink bg-ink shadow-sm ${compact ? "p-3" : "p-3.5"}`}>
          <div className="flex items-center gap-2">
            <span
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-cream/30"
              style={{ background: deep }}
              aria-hidden
            >
              <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
            </span>
            <div className="leading-tight">
              <div className="font-heading text-[10px] font-bold uppercase tracking-wide text-cream/60">
                Maintenant que tu sais pourquoi
              </div>
              <div className="font-heading text-[13.5px] font-extrabold text-cream">Ce que tu retiens</div>
            </div>
          </div>
          <ul className="mt-2.5 flex flex-col gap-1.5">
            {aRetenir.points.map((point, j) => (
              <li key={j} className="flex items-start gap-2 text-[13.5px] font-medium leading-snug text-cream">
                <span className="mt-[6px] h-[7px] w-[7px] shrink-0" style={{ background: deep }} aria-hidden />
                <span>
                  <Inline text={point} boldClassName="text-cream" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
