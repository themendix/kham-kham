import type { ImageBlock } from "@/lib/lessonBlocks";
import type { LessonImageSet } from "@/lib/lessonImages";

function Caption({ block }: { block: ImageBlock }) {
  if (!block.legende && !block.credit) return null;
  return (
    <figcaption className="mt-3 px-0.5">
      {block.legende && (
        <div className="text-[12px] font-medium leading-snug text-ink">{block.legende}</div>
      )}
      {block.credit && (
        <div className="mt-0.5 text-[11px] leading-snug text-ink-faint">
          {block.sourceUrl ? (
            <a
              href={block.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {block.credit}
            </a>
          ) : (
            block.credit
          )}
          {block.licenseUrl && (
            <>
              {" "}
              ·{" "}
              <a
                href={block.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Licence
              </a>
            </>
          )}
        </div>
      )}
    </figcaption>
  );
}

/** Illustration non interactive, pleine largeur, avec légende et crédits. */
export function LessonFigure({
  block,
  image,
  compact,
}: {
  block: ImageBlock;
  image: LessonImageSet | undefined;
  compact: boolean;
}) {
  return (
    <figure>
      <div className="w-full overflow-hidden rounded-card border-[2.5px] border-ink bg-card shadow-sm">
        {image ? (
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={
              compact ? "(min-width: 768px) 420px, 100vw" : "(min-width: 768px) 620px, 100vw"
            }
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        ) : (
          <div className={`w-full bg-cream ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`} />
        )}
      </div>
      <Caption block={block} />
    </figure>
  );
}
