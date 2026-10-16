/** Traduction des libellés du SVG documentaire, sans modifier son tracé. */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
const replacements = {
  "Hannibal&apos;s route": "Parcours d’Hannibal", "of Invasion ": "vers l’Italie",
  "(Third century B.C.)": "(IIIe siècle av. J.-C.)", "Major Battles": "Batailles",
  "Sardinia": "Sardaigne", "Corsica": "Corse", "Sicily": "Sicile",
  "S     P     A     I     N": "E   S   P   A   G   N   E",
  "G     A     U     L": "G   A   U   L   E", " I   T   A   L   Y": " I   T   A   L   I   E",
  "Loire river": "Loire", "Rhine": "Rhin", "Po river": "Pô", "Pyrenees": "Pyrénées",
  "Alps": "Alpes", "Tyrrhenian Sea": "Mer Tyrrhénienne", "Ionian": "Mer", "Sea": "Ionienne",
  "Adriatic Sea": "Mer Adriatique", "L. Trasimene": "L. Trasimène", "Cartagena": "Carthagène",
  "Saguntum": "Sagonte", "Tiber": "Tibre", "Cannae": "Cannes", "Capua": "Capoue",
  "Tarentum": "Tarente", "Utica": "Utique", "Croton": "Crotone",
};
let svg = await readFile(join(process.env.TEMP, 'kham-hannibal-original.svg'), 'utf8');
svg = svg.replace(/(<tspan\b[^>]*>)([^<]*)(<\/tspan>)/g, (_, before, text, after) => before + (replacements[text] ?? text) + after);
await mkdir('docs/visuels-histoire', { recursive: true });
await writeFile('docs/visuels-histoire/hannibal-fr.svg', svg);
const path = 'docs/histoire-visuels-lot-01.json';
const manifest = JSON.parse(await readFile(path, 'utf8'));
const entry = manifest.entries.find(e => e.key === '04-3');
const result = await sharp(Buffer.from(svg)).resize(1200).webp({ quality: 82 }).toFile(entry.asset);
entry.adaptation = 'Traduction des libellés en français ; tracé inchangé. Source SVG conservée dans docs/visuels-histoire/hannibal-fr.svg.';
entry.output = { width: result.width, height: result.height, bytes: result.size };
await writeFile(path, JSON.stringify(manifest, null, 2) + '\n');
