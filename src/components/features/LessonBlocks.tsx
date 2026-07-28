import { Fragment } from "react";
import { Lightbulb } from "lucide-react";
import type { LessonBlock, SubjectColor } from "@/types";
import { parseInline } from "@/lib/lessonBlocks";
import { SUBJECT_BG } from "@/lib/subjectStyles";

/** Rend un texte portant le balisage `**gras**` (§ 5 de la charte). */
function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((segment, i) =>
        segment.bold ? (
          <strong key={i} className="font-bold text-ink">
            {segment.text}
          </strong>
        ) : (
          <Fragment key={i}>{segment.text}</Fragment>
        ),
      )}
    </>
  );
}

interface LessonBlocksProps {
  blocks: LessonBlock[];
  accent: SubjectColor;
  /** `full` (page de cours) ou `compact` (« À la une », fil Home, favoris) — mêmes blocs, même sémantique. */
  density?: "full" | "compact";
}

/**
 * Moteur de rendu unique d'une leçon (docs/CHARTE-LECONS.md § 4 et § 10.2, principe P6).
 * Un seul composant pour les quatre sites d'affichage d'une leçon : page de cours, « À la une »,
 * fil Home, favoris. Aucune divergence tolérée entre ces sites.
 */
export function LessonBlocks({ blocks, accent, density = "full" }: LessonBlocksProps) {
  const compact = density === "compact";

  return (
    <div className={compact ? "flex flex-col gap-2.5" : "flex flex-col gap-3.5"}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraphe":
            return (
              <p
                key={i}
                className={`${compact ? "text-[14px]" : "text-[15.5px]"} font-medium leading-relaxed text-ink-muted`}
              >
                <Inline text={block.text} />
              </p>
            );

          case "aRetenir":
            return (
              <div
                key={i}
                className={`rounded-card border-[2.5px] border-ink shadow-sm ${SUBJECT_BG[accent]} ${compact ? "p-3" : "p-4"}`}
              >
                <div className="font-heading text-xs font-bold uppercase tracking-wide text-ink">À retenir</div>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {block.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13.5px] font-medium leading-snug text-ink">
                      <span className="mt-[6px] h-2 w-2 shrink-0 bg-ink" aria-hidden />
                      <span>
                        <Inline text={point} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "leSavaisTu":
            return (
              <div key={i} className="flex gap-2.5 rounded-card border-[2.5px] border-ink bg-gold/30 p-3.5">
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
              <div key={i} className="rounded-card border-[2.5px] border-ink bg-card p-4 shadow-sm">
                <div className="font-heading text-[34px] font-extrabold leading-none text-primary">
                  {block.valeur}
                </div>
                <div className="mt-1.5 text-[13px] font-medium text-ink-faint">{block.legende}</div>
              </div>
            );

          case "citation":
            return (
              <blockquote key={i} className="border-l-[5px] border-ink pl-4">
                <p className="text-[15.5px] italic text-ink">{block.texte}</p>
                <div className="mt-1.5 font-heading text-[13px] font-bold text-ink">{block.auteur}</div>
                {block.date && <div className="text-[12px] text-ink-faint">{block.date}</div>}
              </blockquote>
            );

          case "frise":
            return (
              <div key={i} className="flex flex-col gap-3 border-l-[2.5px] border-ink/25 pl-4">
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
            );

          case "reperes":
            return (
              <div key={i} className="grid grid-cols-2 gap-2.5">
                {block.items.map((item, j) => (
                  <div key={j} className="rounded-[12px] border-[2px] border-ink bg-card p-3">
                    <div className="font-heading text-[11px] uppercase tracking-wide text-ink-faint">
                      {item.label}
                    </div>
                    <div className="text-[15px] font-bold text-ink">{item.valeur}</div>
                  </div>
                ))}
              </div>
            );

          case "image":
            return (
              <figure key={i}>
                <div className="aspect-[4/3] w-full rounded-[16px] border-[2.5px] border-ink bg-cream shadow-sm" />
                {block.legende && <figcaption className="mt-1.5 text-[12.5px] text-ink-faint">{block.legende}</figcaption>}
                {block.credit && <div className="text-[11px] text-ink-faint">{block.credit}</div>}
              </figure>
            );
        }
      })}
    </div>
  );
}
