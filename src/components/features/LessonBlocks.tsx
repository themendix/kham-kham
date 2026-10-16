import { NativeBox, NativeListItem, NativeParagraph, NativeSpan, NativeStrong } from "@/native/elements";
import { Fragment } from "react";
import { Check, Lightbulb } from "@/native/icons";
import type { LessonBlock, SubjectColor } from "@/types";
import type { ARetenirBlock } from "@/lib/lessonBlocks";
import { parseInline } from "@/lib/lessonBlocks";
import { SUBJECT_BG, SUBJECT_DEEP, SUBJECT_DEEP_BG } from "@/lib/subjectStyles";
import { getLessonImage } from "@/lib/lessonImages";
import { LessonFigure } from "./LessonFigure";
/**
 * Rend un texte portant le balisage `**gras**` (§ 5 de la charte). `boldClassName` permet
 * d'adapter la couleur du gras au fond du bloc qui l'affiche — `text-ink` (par défaut) est
 * invisible sur le fond sombre inversé de `aRetenir`.
 */
function Inline({ text, boldClassName = "text-ink" }: {
    text: string;
    boldClassName?: string;
}) {
    return (<>
      {parseInline(text).map((segment, i) => segment.bold ? (<NativeStrong key={i} className={`font-bold ${boldClassName}`}>
            {segment.text}
          </NativeStrong>) : (<Fragment key={i}>{segment.text}</Fragment>))}
    </>);
}
/** Un jalon du fil : point plein sur le trait pointillé, à gauche du contenu du bloc. */
function ThreadDot({ children, reading = false }: {
    children: React.ReactNode;
    reading?: boolean;
}) {
    return (<NativeBox className="relative">
      <NativeSpan className={reading ? "absolute -left-[20px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-ink bg-primary" : "absolute -left-[22px] top-1 h-[11px] w-[11px] rounded-full border-2 border-ink bg-primary"}/>
      {children}
    </NativeBox>);
}
interface LessonBlocksProps {
    blocks: LessonBlock[];
    accent: SubjectColor;
    /** `reading` : page de leçon Histoire, avec espacement adapté au téléphone. */
    density?: "full" | "compact" | "reading";
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
    const reading = density === "reading";
    const RetentionItem = reading ? NativeBox : NativeListItem;
    const aRetenir = blocks.find((b): b is ARetenirBlock => b.type === "aRetenir");
    const threadBlocks = blocks.filter((b) => b.type !== "aRetenir");
    const deep = SUBJECT_DEEP[accent];
    return (<NativeBox className={compact || reading ? "flex flex-col gap-2.5" : "flex flex-col gap-3.5"}>
      <NativeBox className={`flex flex-col border-l-[2.5px] border-dotted border-ink/25 ${reading ? "gap-2.5 pl-[14px]" : compact ? "gap-2.5 pl-[18px]" : "gap-[13px] pl-[22px]"}`}>
        {threadBlocks.map((block, i) => {
            switch (block.type) {
                case "paragraphe":
                    return (<ThreadDot key={i} reading={reading}>
                  <NativeParagraph className={`${reading ? "text-[15px] leading-[21px]" : compact ? "text-[14px] leading-relaxed" : "text-[15.5px] leading-relaxed"} font-medium text-ink-muted`}>
                    <Inline text={block.text}/>
                  </NativeParagraph>
                </ThreadDot>);
                case "leSavaisTu":
                    // Reste hors fil : aparté visuellement détachée, légèrement inclinée (inchangé).
                    return (<NativeBox key={i} className={`flex flex-row gap-2.5 rounded-card border-[2.5px] border-ink bg-gold/30 ${reading ? "p-2.5" : compact ? "p-3 -rotate-[0.6deg]" : "p-3.5 -rotate-[0.6deg]"}`}>
                  <NativeBox className={`grid ${reading ? "h-6 w-6" : "h-7 w-7"} shrink-0 place-items-center rounded-full border-2 border-ink bg-card`}>
                    <Lightbulb className="h-3.5 w-3.5"/>
                  </NativeBox>
                  <NativeBox className={reading ? "min-w-0 flex-1" : ""}>
                    <NativeBox className="font-heading text-xs uppercase tracking-wide text-ink">
                      Le savais-tu ?
                    </NativeBox>
                    <NativeParagraph className={`mt-1 text-[13.5px] font-medium ${reading ? "leading-[18px]" : "leading-relaxed"} text-ink`}>
                      <Inline text={block.text}/>
                    </NativeParagraph>
                  </NativeBox>
                </NativeBox>);
                case "chiffreCle":
                    return (<ThreadDot key={i} reading={reading}>
                  <NativeBox className={`rounded-[18px] border-[2.5px] border-ink ${reading ? "px-3 py-2" : "p-[13px_16px]"} shadow-sm ${SUBJECT_DEEP_BG[accent]}`}>
                    <NativeBox className={`font-heading ${reading ? "text-[24px] leading-[30px]" : "text-[34px] leading-none"} font-extrabold text-ink`}>
                      {block.valeur}
                    </NativeBox>
                    <NativeBox className={`${reading ? "mt-0.5 leading-[18px]" : "mt-1.5"} text-[13.5px] font-semibold text-ink`}>
                      {block.legende}
                    </NativeBox>
                  </NativeBox>
                </ThreadDot>);
                case "citation":
                    return (<ThreadDot key={i} reading={reading}>
                  <NativeBox className={reading ? "border-l-[3px] border-ink pl-2.5" : "border-l-[5px] border-ink pl-4"}>
                    <NativeParagraph className={`${reading ? "text-[14px] leading-[20px]" : "text-[15.5px]"} italic text-ink`}>{block.texte}</NativeParagraph>
                    <NativeBox className={`${reading ? "mt-1" : "mt-1.5"} font-heading text-[13px] font-bold text-ink`}>
                      {block.auteur}
                    </NativeBox>
                    {block.date && <NativeBox className="text-[12px] text-ink-faint">{block.date}</NativeBox>}
                  </NativeBox>
                </ThreadDot>);
                case "frise":
                    return (<ThreadDot key={i} reading={reading}>
                  <NativeBox className={`flex flex-col ${reading ? "gap-2" : "gap-3"} border-l-[2.5px] border-ink/25 pl-4`}>
                    {block.evenements.map((evenement, j) => (<NativeBox key={j} className="flex items-start gap-2.5">
                        <NativeSpan className={`-ml-[27px] shrink-0 rounded-full border-[2px] border-ink ${reading ? "max-w-[110px] px-1.5 py-0.5 text-[11px]" : "px-2 py-0.5 text-[12px]"} font-heading font-bold text-ink ${SUBJECT_BG[accent]}`}>
                          {evenement.date}
                        </NativeSpan>
                        <NativeSpan className={`${reading ? "min-w-0 flex-1 leading-[19px]" : ""} pt-0.5 text-[14px] font-medium text-ink-muted`}>
                          {evenement.texte}
                        </NativeSpan>
                      </NativeBox>))}
                    {block.unite && (<NativeBox className="text-[11px] font-semibold text-ink-faint">{block.unite}</NativeBox>)}
                  </NativeBox>
                </ThreadDot>);
                case "reperes":
                    return (<ThreadDot key={i} reading={reading}>
                  <NativeBox className="grid grid-cols-2 gap-2.5">
                    {block.items.map((item, j) => (<NativeBox key={j} className="rounded-[12px] border-[2px] border-ink bg-card p-3">
                        <NativeBox className="font-heading text-[11px] uppercase tracking-wide text-ink-faint">
                          {item.label}
                        </NativeBox>
                        <NativeBox className="text-[15px] font-bold text-ink">{item.valeur}</NativeBox>
                      </NativeBox>))}
                  </NativeBox>
                </ThreadDot>);
                case "image": {
                    // Résolue par convention de nommage, jamais référencée dans les données (§ 4.8).
                    const image = getLessonImage(imageKey);
                    return (<ThreadDot key={i} reading={reading}>
                  <LessonFigure key={imageKey} block={block} image={image} compact={compact} reading={reading}/>
                </ThreadDot>);
                }
            }
        })}
      </NativeBox>

      {aRetenir && (<NativeBox className={`rounded-card border-[2.5px] border-ink bg-ink shadow-sm ${reading ? "p-2.5" : compact ? "p-3" : "p-3.5"}`}>
          <NativeBox className="flex items-center gap-2">
            <NativeSpan className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-cream/30" style={reading ? { backgroundColor: deep } : { background: deep }} aria-hidden>
              <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3}/>
            </NativeSpan>
            <NativeBox className="leading-tight">
              {!reading && <NativeBox className="font-heading text-[10px] font-bold uppercase tracking-wide text-cream/60">
                Maintenant que tu sais pourquoi
              </NativeBox>}
              <NativeBox className="font-heading text-[13.5px] font-extrabold text-cream">
                Ce que tu retiens
              </NativeBox>
            </NativeBox>
          </NativeBox>
          <NativeBox className={reading ? "mt-1.5 flex flex-col gap-1" : "mt-2.5 flex flex-col gap-1.5"}>
            {aRetenir.points.map((point, j) => (<RetentionItem key={j} className={`flex flex-row items-start gap-2 text-[13.5px] font-medium ${reading ? "leading-[18px]" : "leading-snug"} text-cream`}>
                <NativeSpan className="mt-[6px] h-[7px] w-[7px] shrink-0" style={reading ? { backgroundColor: deep } : { background: deep }} aria-hidden/>
                <NativeSpan className={reading ? "min-w-0 flex-1" : ""}>
                  <Inline text={point} boldClassName="text-cream"/>
                </NativeSpan>
              </RetentionItem>))}
          </NativeBox>
        </NativeBox>)}
    </NativeBox>);
}
