/**
 * Génère les illustrations de cours à partir d'un document de prompts Markdown, via l'API
 * Gemini (Nano Banana), et les écrit directement au nom attendu par `getCourseImage`.
 *
 * Source  : docs/contenu <matière>/PROMPTS-IMAGES-<matière>.md
 *           Chaque prompt y est déclaré par un titre `#### Cours NN — <Titre> · `<fichier>.webp``
 *           suivi d'une ligne de citation `> <prompt en anglais>`.
 * Sorties : src/assets/cours/<matière>/<courseId>.webp (pleine résolution, ~1200 px de large)
 *
 * Le nom du fichier de sortie est lu dans le document, jamais recalculé : c'est ce qui garantit
 * qu'il correspond exactement à l'id du cours (`getCourseImage` résout l'image par ce nom, et une
 * faute de slug se traduit par une carte sans image, sans aucune erreur visible).
 *
 * Usage :
 *   GEMINI_API_KEY=... npm run images:generate                  # les 30, en sautant celles déjà générées
 *   GEMINI_API_KEY=... npm run images:generate -- --force       # régénère tout
 *   GEMINI_API_KEY=... npm run images:generate -- --only 07,13  # refait seulement ces cours
 *   npm run images:generate -- --dry-run                        # vérifie le parsing, aucun appel réseau
 *
 * Options : --prompts <chemin> --out <dossier> --model <nom> --concurrency <n> --only <NN,NN>
 *           --force --dry-run --width <px> --quality <1-100> --aspect <W:H>
 *
 * Après exécution : `npm run images:variants` (variantes 400w/800w), puis `npm run validate`.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const DEFAULTS = {
  prompts: join(ROOT, "docs", "contenu personnalites", "PROMPTS-IMAGES-personnalites.md"),
  out: join(ROOT, "src", "assets", "cours", "personnalites"),
  model: "gemini-3.1-flash-image",
  concurrency: 4,
  width: 1200,
  quality: 82,
  // `CourseCard` affiche l'illustration dans un en-tête de 150 px de haut sur une carte large
  // de ~150 à 350 px, en `object-cover` : une image qui n'est pas au bon ratio est rognée, et
  // le sujet peut sortir du cadre. On normalise donc toutes les sorties au même rapport, en
  // recadrant au centre — cohérent avec le « main subject centred » de chaque prompt.
  aspect: "3:2",
  endpoint: "https://generativelanguage.googleapis.com/v1beta/interactions",
  maxAttempts: 4,
};

// ---------------------------------------------------------------- arguments

function parseArgs(argv) {
  const options = { ...DEFAULTS, only: null, force: false, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = () => argv[++i];
    if (arg === "--force") options.force = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--prompts") options.prompts = resolve(next());
    else if (arg === "--out") options.out = resolve(next());
    else if (arg === "--model") options.model = next();
    else if (arg === "--concurrency") options.concurrency = Number(next());
    else if (arg === "--width") options.width = Number(next());
    else if (arg === "--quality") options.quality = Number(next());
    else if (arg === "--aspect") options.aspect = next();
    else if (arg === "--only") options.only = new Set(next().split(",").map((n) => n.trim().padStart(2, "0")));
    else {
      console.error(`Option inconnue : ${arg}`);
      process.exit(1);
    }
  }
  return options;
}

// ---------------------------------------------------------------- extraction des prompts

/**
 * Extrait les couples (numéro, nom de fichier, prompt) du document Markdown.
 * Le nom de fichier vient du titre, le prompt de la ligne de citation qui suit.
 */
function extractPrompts(markdown) {
  const jobs = [];
  const lines = markdown.split("\n");
  const heading = /^#### Cours (\d{2}) — (.+?) · `([A-Za-z0-9._-]+\.webp)`\s*$/;

  for (let i = 0; i < lines.length; i++) {
    const match = heading.exec(lines[i]);
    if (!match) continue;
    const [, number, title, filename] = match;

    let j = i + 1;
    while (j < lines.length && lines[j].trim() === "") j++;
    const quote = lines[j]?.match(/^>\s?(.+)$/);
    if (!quote) {
      throw new Error(`Cours ${number} : aucune ligne de prompt « > … » après le titre (ligne ${i + 1}).`);
    }
    jobs.push({ number, title, filename, prompt: quote[1].trim() });
  }
  return jobs;
}

// ---------------------------------------------------------------- appel API

/** Cherche récursivement, dans la réponse JSON, la première charge utile d'image en base64. */
function findImageData(node) {
  if (!node || typeof node !== "object") return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = findImageData(item);
      if (found) return found;
    }
    return null;
  }
  const mime = node.mimeType ?? node.mime_type;
  if (typeof node.data === "string" && node.data.length > 512) {
    if (!mime || String(mime).startsWith("image/")) return node.data;
  }
  for (const value of Object.values(node)) {
    const found = findImageData(value);
    if (found) return found;
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function requestImage(prompt, options, apiKey) {
  let lastError;
  for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
    let response;
    try {
      response = await fetch(options.endpoint, {
        method: "POST",
        headers: { "x-goog-api-key": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({ model: options.model, input: [{ type: "text", text: prompt }] }),
      });
    } catch (networkError) {
      lastError = networkError;
      await sleep(2 ** attempt * 1000);
      continue;
    }

    if (response.ok) {
      const payload = await response.json();
      const data = findImageData(payload);
      if (data) return Buffer.from(data, "base64");
      // Réponse 200 sans image : refus du modèle (filtre de contenu) ou réponse purement
      // textuelle. Inutile de réessayer, le prompt lui-même est en cause.
      const excerpt = JSON.stringify(payload).slice(0, 400);
      throw new Error(`réponse sans image (probable refus du modèle) — ${excerpt}`);
    }

    const body = await response.text();
    // 429 = quota, 5xx = incident passager : on réessaie. Le reste est définitif.
    if (response.status !== 429 && response.status < 500) {
      throw new Error(`HTTP ${response.status} — ${body.slice(0, 300)}`);
    }
    lastError = new Error(`HTTP ${response.status} — ${body.slice(0, 200)}`);
    await sleep(2 ** attempt * 1000);
  }
  throw lastError;
}

// ---------------------------------------------------------------- exécution

async function runJob(job, options, apiKey) {
  const target = join(options.out, job.filename);

  if (!options.force && existsSync(target)) {
    return { ...job, status: "skipped", detail: "déjà présente" };
  }
  if (options.dryRun) {
    return { ...job, status: "dry-run", detail: `${job.prompt.length} caractères de prompt` };
  }

  try {
    // Import paresseux : `sharp` est un binaire natif propre à la plateforme. Le charger ici
    // plutôt qu'en tête de fichier permet à `--dry-run` de tourner partout, même là où le
    // binaire de la plateforme courante n'est pas installé.
    const { default: sharp } = await import("sharp");
    const raw = await requestImage(job.prompt, options, apiKey);

    // Recadrage au ratio cible, centré : le modèle ne respecte pas toujours le « about 3:2 »
    // du prompt, et `CourseCard` rogne en `object-cover`. Normaliser ici évite d'avoir à
    // reprendre les images une par une dans un éditeur.
    const [ratioW, ratioH] = options.aspect.split(":").map(Number);
    const height = Math.round((options.width * ratioH) / ratioW);
    const buffer = await sharp(raw)
      .resize({ width: options.width, height, fit: "cover", position: "centre" })
      .webp({ quality: options.quality })
      .toBuffer();
    await writeFile(target, buffer);
    return { ...job, status: "ok", detail: `${options.width}×${height} (${options.aspect})` };
  } catch (error) {
    return { ...job, status: "failed", detail: error.message };
  }
}

/** Exécute les tâches avec un pool de concurrence fixe (pas de rafale sur l'API). */
async function runPool(jobs, limit, worker) {
  const results = new Array(jobs.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, jobs.length) }, async () => {
    while (cursor < jobs.length) {
      const index = cursor++;
      results[index] = await worker(jobs[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const apiKey = process.env.GEMINI_API_KEY;

  if (!options.dryRun && !apiKey) {
    console.error("GEMINI_API_KEY absente de l'environnement.");
    console.error("Windows (PowerShell) :  $env:GEMINI_API_KEY=\"votre-clé\"");
    console.error("macOS / Linux        :  export GEMINI_API_KEY=votre-clé");
    console.error("Ou lance d'abord `npm run images:generate -- --dry-run` pour vérifier le parsing.");
    process.exit(1);
  }

  const markdown = await readFile(options.prompts, "utf8");
  let jobs = extractPrompts(markdown);
  if (jobs.length === 0) {
    console.error(`Aucun prompt trouvé dans ${options.prompts}.`);
    process.exit(1);
  }
  if (options.only) jobs = jobs.filter((job) => options.only.has(job.number));

  await mkdir(options.out, { recursive: true });

  console.log(`Prompts   : ${options.prompts}`);
  console.log(`Sortie    : ${options.out}`);
  console.log(`Modèle    : ${options.model}${options.dryRun ? "  (dry-run, aucun appel réseau)" : ""}`);
  console.log(`À traiter : ${jobs.length} image(s), ${options.concurrency} en parallèle\n`);

  const results = await runPool(jobs, options.concurrency, async (job) => {
    const result = await runJob(job, options, apiKey);
    const mark = { ok: "✔", skipped: "·", "dry-run": "→", failed: "✗" }[result.status];
    console.log(`${mark} ${job.number} ${job.filename.padEnd(42)} ${result.detail}`);
    return result;
  });

  const tally = (status) => results.filter((r) => r.status === status).length;
  console.log(
    `\n${tally("ok")} générée(s), ${tally("skipped")} ignorée(s), ` +
      `${tally("dry-run")} simulée(s), ${tally("failed")} en échec.`,
  );

  const failed = results.filter((r) => r.status === "failed");
  if (failed.length > 0) {
    console.log(`\nÀ relancer :  npm run images:generate -- --only ${failed.map((f) => f.number).join(",")}`);
    process.exitCode = 1;
    return;
  }
  if (tally("ok") > 0) {
    console.log("\nÉtapes suivantes :");
    console.log("  1. Vérifie chaque image — aucun visage humain reconnaissable, aucun texte parasite.");
    console.log("  2. npm run images:variants");
    console.log("  3. npm run validate");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
