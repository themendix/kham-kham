/**
 * Génération des déclinaisons du logo Sankofa.
 *
 * Source  : brand/logos.png (ou brand/logo-sankofa.png / .svg si présent — voir brand/LISEZ-MOI.md)
 * Sorties : public/favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png,
 *           icon-192.png, icon-512.png, icon-maskable-512.png, og-image.png, favicon.svg
 *
 * Usage : npm run icons
 *
 * Le fichier source est traité automatiquement :
 *  1. détourage du fond blanc par remplissage par diffusion depuis les bords (le logo fourni
 *     est une capture sur fond blanc, déjà mise en forme d'icône à coins arrondis — un simple
 *     rognage ligne/colonne laisserait du blanc résiduel dans ces coins) puis recadrage sur
 *     le rectangle englobant du motif ;
 *  2. mise au carré sur le fond sombre de l'icône (le système d'exploitation appliquera
 *     ensuite son propre masque d'arrondi) ;
 *  3. rééchantillonnage Lanczos vers chaque taille cible.
 *
 * Ne jamais retoucher les fichiers de public/ à la main : ils sont regénérés par ce script.
 */

import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRAND = join(ROOT, "brand");
const PUBLIC = join(ROOT, "public");

/** Fond de l'icône, échantillonné sur le logo fourni. */
const DARK = { r: 17, g: 22, b: 25 };
/** Or du motif, échantillonné sur le logo fourni — utilisé pour le texte de l'image de partage. */
const GOLD = "#E6BE64";
/** Seuil au-delà duquel un pixel est considéré comme faisant partie du fond blanc à détourer. */
const WHITE_THRESHOLD = 235;
/**
 * Le bord entre le fond blanc et l'icône est anti-crénelé : une fine bande de gris neutre
 * (canaux quasi égaux) reste sous `WHITE_THRESHOLD` sans appartenir au motif doré, qui lui
 * est nettement saturé (rouge ≫ bleu). `GRAY_MIN_BRIGHTNESS` capture cette bande sans mordre
 * sur l'or ; `GRAY_MAX_CHANNEL_SPREAD` exclut tout pixel suffisamment saturé pour être du motif.
 */
const GRAY_MIN_BRIGHTNESS = 140;
const GRAY_MAX_CHANNEL_SPREAD = 12;

/** Sources acceptées, par ordre de préférence : un vecteur donne toujours un meilleur rendu. */
const CANDIDATES = ["logo-sankofa.svg", "logo-sankofa.png", "logos.svg", "logos.png"];

function resolveSource() {
  for (const name of CANDIDATES) {
    const path = join(BRAND, name);
    if (existsSync(path)) return path;
  }
  throw new Error(
    `Aucun fichier source trouvé dans brand/. Attendu : ${CANDIDATES.join(", ")}. Voir brand/LISEZ-MOI.md.`,
  );
}

/**
 * Détoure le fond blanc par remplissage par diffusion depuis les bords (et non un simple
 * rognage ligne/colonne) : la source est déjà une icône à coins arrondis sur fond blanc,
 * donc les coins du blanc restent à l'intérieur du rectangle englobant du motif — un
 * `trim()` classique s'arrête dès qu'il rencontre le bord droit du carré arrondi et laisse
 * ces coins blancs intacts. Le remplissage par diffusion ne touche que le blanc connecté
 * aux bords de l'image, donc ne mord jamais sur le motif doré lui-même.
 */
async function keyOutBackground(sourcePath) {
  const { data, info } = await sharp(sourcePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const isBackground = (x, y) => {
    const i = (y * width + x) * channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) return true;
    const spread = Math.max(r, g, b) - Math.min(r, g, b);
    return r >= GRAY_MIN_BRIGHTNESS && spread <= GRAY_MAX_CHANNEL_SPREAD;
  };

  const visited = new Uint8Array(width * height);
  const stack = [];
  const seed = (x, y) => {
    const p = y * width + x;
    if (!visited[p] && isBackground(x, y)) {
      visited[p] = 1;
      stack.push(p);
    }
  };
  for (let x = 0; x < width; x++) {
    seed(x, 0);
    seed(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    seed(0, y);
    seed(width - 1, y);
  }

  let minX = width, maxX = -1, minY = height, maxY = -1;
  while (stack.length) {
    const p = stack.pop();
    const x = p % width;
    const y = (p / width) | 0;
    data[p * channels + 3] = 0;
    const neighbours = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    for (const [nx, ny] of neighbours) {
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const np = ny * width + nx;
      if (!visited[np] && isBackground(nx, ny)) {
        visited[np] = 1;
        stack.push(np);
      }
    }
  }
  // Rectangle englobant du motif restant (pixels non détourés) : sert au recadrage.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (data[p * channels + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  return {
    buffer: sharp(data, { raw: { width, height, channels } }).png().toBuffer(),
    bbox: { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 },
  };
}

/**
 * Détoure le fond blanc (y compris dans les coins arrondis de la source), recadre sur
 * le motif, et renvoie un carré plein sur fond sombre, prêt à être rééchantillonné.
 */
async function buildSquare(sourcePath) {
  const { buffer, bbox } = await keyOutBackground(sourcePath);
  const trimmed = await sharp(await buffer).extract(bbox).toBuffer();

  const side = Math.max(bbox.width, bbox.height);

  // Mise au carré sur fond sombre : le détourage par diffusion a déjà rendu transparents
  // le fond blanc ET les coins arrondis de la source, donc le fond sombre s'y substitue
  // proprement ; le système d'exploitation appliquera ensuite son propre masque d'icône.
  return sharp({
    create: { width: side, height: side, channels: 4, background: { ...DARK, alpha: 1 } },
  })
    .composite([
      {
        input: trimmed,
        left: Math.round((side - bbox.width) / 2),
        top: Math.round((side - bbox.height) / 2),
      },
    ])
    .png()
    .toBuffer();
}

/** Icône carrée à la taille demandée. */
async function emitIcon(square, size, filename) {
  await sharp(square)
    .resize(size, size, { kernel: sharp.kernel.lanczos3, fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(join(PUBLIC, filename));
  console.log(`  ✓ ${filename} (${size}×${size})`);
}

/**
 * Icône « maskable » Android : le motif est réduit à 80 % pour tenir dans la zone
 * sûre, sinon le masque circulaire d'Android rogne le logo.
 */
async function emitMaskable(square, size, filename) {
  const inner = Math.round(size * 0.8);
  const logo = await sharp(square).resize(inner, inner, { kernel: sharp.kernel.lanczos3 }).toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: { ...DARK, alpha: 1 } },
  })
    .composite([{ input: logo, left: Math.round((size - inner) / 2), top: Math.round((size - inner) / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(join(PUBLIC, filename));
  console.log(`  ✓ ${filename} (${size}×${size}, zone sûre 80 %)`);
}

/** Image d'aperçu de partage : logo + nom + accroche, sur le fond sombre de la marque. */
async function emitOgImage(square, filename) {
  const W = 1200;
  const H = 630;
  const logoSize = 300;

  const logo = await sharp(square).resize(logoSize, logoSize, { kernel: sharp.kernel.lanczos3 }).toBuffer();

  const text = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .titre { font-family: Poppins, 'Segoe UI', Inter, sans-serif; font-weight: 800; font-size: 92px; fill: ${GOLD}; }
        .accroche { font-family: Inter, 'Segoe UI', sans-serif; font-weight: 500; font-size: 34px; fill: #F6EEDD; }
      </style>
      <text class="titre" x="560" y="300">Sankofa</text>
      <text class="accroche" x="565" y="360">Retourne chercher le savoir</text>
      <text class="accroche" x="565" y="410">Culture générale africaine</text>
    </svg>`);

  await sharp({
    create: { width: W, height: H, channels: 4, background: { ...DARK, alpha: 1 } },
  })
    .composite([
      { input: logo, left: 190, top: Math.round((H - logoSize) / 2) },
      { input: text, left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(PUBLIC, filename));
  console.log(`  ✓ ${filename} (${W}×${H})`);
}

/**
 * Favicon vectoriel : le logo étant fourni en matriciel, on encapsule un PNG 256×256
 * dans un conteneur SVG. Si un vrai vecteur est déposé dans brand/, il est copié tel quel.
 */
async function emitFaviconSvg(square, sourcePath) {
  if (sourcePath.endsWith(".svg")) {
    await writeFile(join(PUBLIC, "favicon.svg"), await readFile(sourcePath));
    console.log("  ✓ favicon.svg (vecteur source copié)");
    return;
  }
  const png = await sharp(square).resize(256, 256, { kernel: sharp.kernel.lanczos3 }).png().toBuffer();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="256" height="256">
  <image width="256" height="256" xlink:href="data:image/png;base64,${png.toString("base64")}"/>
</svg>`;
  await writeFile(join(PUBLIC, "favicon.svg"), svg);
  console.log("  ✓ favicon.svg (PNG 256 encapsulé — remplacer par un vrai vecteur si disponible)");
}

async function main() {
  const sourcePath = resolveSource();
  const meta = await sharp(sourcePath).metadata();
  console.log(`Source : ${sourcePath.replace(ROOT, ".")} (${meta.width}×${meta.height})`);

  if (meta.format !== "svg" && Math.min(meta.width, meta.height) < 512) {
    console.warn(
      `\n  ⚠  Source de faible résolution (${meta.width}×${meta.height}).\n` +
        `     icon-512 et og-image seront agrandis, donc légèrement flous.\n` +
        `     Dépose une version ≥ 1024×1024 (ou un SVG) dans brand/ et relance : npm run icons\n`,
    );
  }

  await mkdir(PUBLIC, { recursive: true });
  const square = await buildSquare(sourcePath);

  console.log("\nGénération :");
  await emitIcon(square, 16, "favicon-16x16.png");
  await emitIcon(square, 32, "favicon-32x32.png");
  await emitIcon(square, 180, "apple-touch-icon.png");
  await emitIcon(square, 192, "icon-192.png");
  await emitIcon(square, 512, "icon-512.png");
  await emitMaskable(square, 512, "icon-maskable-512.png");
  await emitOgImage(square, "og-image.png");
  await emitFaviconSvg(square, sourcePath);

  console.log("\nTerminé. Vérifie le rendu de public/favicon-16x16.png : à 16 px, les détails fins du motif peuvent se brouiller.");
}

main().catch((error) => {
  console.error(`\n✗ Échec de la génération : ${error.message}`);
  process.exit(1);
});
