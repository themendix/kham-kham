import { NativeAnchor, NativeBox, NativeImage } from "@/native/elements";
import { useState } from "react";
import { Image as NativeImageAsset, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { imageAssets } from "@/native/imageAssets";
import type { ImageBlock } from "@/lib/lessonBlocks";
import type { LessonImageSet } from "@/lib/lessonImages";
export function LessonFigureCaption({ block, reading = false }: {
    block: ImageBlock;
    reading?: boolean;
}) {
    // La notice complète reste dans les données ; la lecture affiche l'auteur et la source.
    const credit = reading ? block.credit?.split(",").map((part) => part.trim())
        .filter((part) => !/^(?:CC(?:0|\s+BY)\b|domaine public\b|WebP\b|OGL\b)/i.test(part)).join(", ") : block.credit;
    if (!block.legende && !credit)
        return null;
    return (<NativeBox className={reading ? "mt-1 px-0.5" : "mt-3 px-0.5"}>
      {block.legende && (<NativeBox className="text-[12px] font-medium leading-snug text-ink">{block.legende}</NativeBox>)}
      {credit && (<NativeBox className="mt-0.5 text-[11px] leading-snug text-ink-faint">
          {block.sourceUrl ? (<NativeAnchor href={block.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {credit}
            </NativeAnchor>) : (credit)}
          {!reading && block.licenseUrl && (<>
              {" "}
              ·{" "}
              <NativeAnchor href={block.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Licence
              </NativeAnchor>
            </>)}
        </NativeBox>)}
    </NativeBox>);
}
/** Cadre aux proportions de la photo : portrait vertical, paysage horizontal. */
export function LessonFigure({ block, image, compact, reading = false, }: {
    block: ImageBlock;
    image: LessonImageSet | undefined;
    compact: boolean;
    reading?: boolean;
}) {
    const { width: windowWidth, height } = useWindowDimensions();
    const [availableWidth, setAvailableWidth] = useState(0);
    const source = image ? imageAssets[image.src] : undefined;
    const intrinsic = source ? NativeImageAsset.resolveAssetSource(source) : undefined;
    const sourceWidth = intrinsic?.width || 16;
    const sourceHeight = intrinsic?.height || 9;
    const portrait = sourceHeight > sourceWidth;
    const maxHeight = Math.min(portrait ? 232 : 176, Math.max(portrait ? 144 : 96, height * (portrait ? 0.26 : 0.18)));
    const border = 5;
    const scale = Math.min(Math.max(1, (availableWidth || windowWidth - 84) - border) / sourceWidth, maxHeight / sourceHeight);
    const photoWidth = sourceWidth * scale;
    const photoHeight = sourceHeight * scale;
    return (<View style={{ alignSelf: "stretch" }} onLayout={({ nativeEvent }) => setAvailableWidth(nativeEvent.layout.width)}>
      <NativeBox className={`${reading && source ? "" : "w-full "}overflow-hidden rounded-card border-[2.5px] border-ink bg-card shadow-sm`} style={reading && source ? { alignSelf: "center", width: photoWidth + border, height: photoHeight + border } : undefined}>
        {reading ? (
          source ? <Image source={source} accessibilityLabel={block.alt} accessible contentFit="cover" style={{ width: photoWidth, height: photoHeight }}/>
            : <NativeBox className="w-full bg-cream" style={{ height: maxHeight }}/>
        ) : image ? (<NativeImage src={image.src} srcSet={image.srcSet} sizes={compact ? "(min-width: 768px) 420px, 100vw" : "(min-width: 768px) 620px, 100vw"} alt={block.alt} loading="lazy" decoding="async" className="block h-auto w-full"/>) : (<NativeBox className={`w-full bg-cream ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}/>)}
      </NativeBox>
      <LessonFigureCaption block={block} reading={reading}/>
    </View>);
}
