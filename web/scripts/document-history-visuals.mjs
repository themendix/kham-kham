import { readFile, writeFile } from 'node:fs/promises';
import ts from 'typescript';
const exports = {};
new Function('exports', ts.transpile(await readFile('src/data/courses/histoire.ts', 'utf8'), { module: ts.ModuleKind.CommonJS }))(exports);
const courses = exports.HISTOIRE_COURSES.slice(0, 10);
const manifest = JSON.parse(await readFile('docs/histoire-visuels-lot-01.json', 'utf8'));
const escape = s => (s ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
let report = '# Histoire — visuels du lot 01\n\n';
report += 'Cours 01 à 10 : 50 leçons lues et recherchées, 47 illustrées (dont le pilote Narmer), 3 recherches sans résultat réutilisable et suffisamment pertinent.\n\n';
report += 'Un visuel par leçon. Les photographies anciennes et actuelles, les objets originaux et les illustrations modernes sont distingués dans les légendes. Les cartes et documents utilisent `fit: "contain"` pour préserver leur intégralité, dans les cadres et hauteurs existants. Les images sont converties en WebP avec variantes 400w et 800w ; les crédits donnent accès à la source et à la licence lorsqu’elle est fournie. Les textes ont été resserrés pour respecter les budgets de lecture, sans changer les quiz.\n\n';
report += 'Certaines cartes comportent des noms en anglais. Les routes phéniciennes sont en français ; les libellés du parcours d’Hannibal ont été traduits, avec le SVG adapté conservé dans [visuels-histoire/hannibal-fr.svg](visuels-histoire/hannibal-fr.svg). Les limites des anciens royaumes sont indicatives.\n\n';
report += 'Les métadonnées des sources, licences, dimensions et choix sont archivées dans [histoire-visuels-lot-01.json](histoire-visuels-lot-01.json).\n\n';
let registry = '\n## Histoire — lot 01, cours 01 à 10\n\n';
registry += 'Voir le [compte rendu des choix](HISTOIRE-VISUELS-LOT-01.md). Le pilote Narmer figure déjà dans le registre. Tous les fichiers ci-dessous ont été redimensionnés et convertis en WebP ; variantes 400w et 800w.\n\n';
registry += '| Leçon / fichier | Sujet et pertinence | Source | Auteur | Licence | Dimensions WebP |\n|---|---|---|---|---|---|\n';
for (const [ci, course] of courses.entries()) {
  report += `## ${String(ci + 1).padStart(2, '0')} — ${course.title}\n\n| Leçon | Visuel retenu | Pourquoi | Source / licence |\n|---|---|---|---|\n`;
  for (const [li, lesson] of course.lessons.entries()) {
    const entry = manifest.entries.find(e => e.key === String(ci + 1).padStart(2, '0') + '-' + (li + 1));
    if (entry.missing) {
      report += `| ${escape(lesson.title)} | Recherche sans visuel intégré | ${escape(entry.missing)} | — |\n`;
    } else if (entry.existing) {
      report += `| ${escape(lesson.title)} | Palette de Narmer, deux faces | ${escape(entry.reason)} | [Commons](https://commons.wikimedia.org/wiki/File:Narmer_Palette.jpg), domaine public |\n`;
    } else {
      const author = entry.author || entry.source.author;
      report += `| ${escape(lesson.title)} | ${escape(entry.legende)} | ${escape(entry.reason)} | [Source](${entry.source.page}), ${escape(entry.source.license)} |\n`;
      registry += `| \`${lesson.id}.webp\` | ${escape(entry.legende)} ${entry.adaptation ? 'Libellés traduits en français.' : ''} | [Commons](${entry.source.page}) | ${escape(author)} | ${entry.source.licenseUrl ? `[${escape(entry.source.license)}](${entry.source.licenseUrl})` : escape(entry.source.license)} | ${entry.output.width} × ${entry.output.height} |\n`;
    }
  }
  report += '\n';
}
report += '## Vérification\n\nContrôle visuel des fichiers sur planches contact ; vérification des sources et licences ; génération des variantes ; validation des blocs et budgets de texte ; contrôle TypeScript et compilation Vite. Le rendu des pages dans un navigateur n’a pas été vérifié dans cette session.\n';
await writeFile('docs/HISTOIRE-VISUELS-LOT-01.md', report);
const path = 'docs/IMAGES-LECONS.md';
let content = await readFile(path, 'utf8');
content = content.split('\n## Histoire — lot 01, cours 01 à 10')[0];
await writeFile(path, content.trimEnd() + '\n' + registry);
