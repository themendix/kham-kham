/**
 * Génère `src/data/africaMap.generated.ts` : le tracé réel de l'Afrique, pays par pays, groupé
 * par territoire du module Quiz.
 *
 * Source : Natural Earth (`ne_50m_admin_0_countries`), **domaine public**, téléchargé à la
 * demande — aucune dépendance ajoutée au projet, aucun fichier de 3 Mo commité. Le résultat, lui,
 * est un fichier TypeScript de chemins SVG committé et versionné.
 *
 * Usage : npm run gen:map (manuel, nécessite un accès réseau — volontairement hors du `build`
 * et de la CI : la géographie de l'Afrique ne change pas à chaque commit).
 *
 * Projection **azimutale équivalente de Lambert**, centrée sur le continent. Ce n'est pas un
 * détail technique : Mercator étire l'Afrique d'environ 30 % en hauteur et minore sa taille réelle,
 * distorsion que la critique panafricaine dénonce de longue date. Une application qui enseigne
 * l'histoire africaine ne peut pas dessiner l'Afrique dans la projection qui la déforme. Lambert
 * conserve les aires : l'Afrique y a sa vraie proportion.
 *
 * Les tracés sont simplifiés (Douglas-Peucker) puis arrondis, pour tenir dans un poids raisonnable
 * sans perdre la silhouette.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson";

/** Largeur du dessin ; la hauteur en découle, la projection fixant le rapport. */
const WIDTH = 800;
/** Tolérance de simplification, en unités de sortie. Au-delà, la silhouette se dégrade visiblement. */
const SIMPLIFY_TOLERANCE = 0.7;
/** Sous cette aire (en unités de sortie au carré), un îlot est invisible : on le jette. */
const MIN_RING_AREA = 1.2;

/**
 * Rattachement des pays aux territoires, aligné sur la taxonomie de l'application
 * (`src/lib/geographieRegions.ts`) : la Mauritanie et le Soudan sont en Afrique du Nord.
 */
const COUNTRY_TERRITORY = {
  nord: ["DZA", "EGY", "LBY", "MAR", "MRT", "SDN", "TUN", "ESH"],
  ouest: ["BEN", "BFA", "CIV", "GMB", "GHA", "GIN", "GNB", "LBR", "MLI", "NER", "NGA", "SEN", "SLE", "TGO"],
  centrale: ["AGO", "CMR", "CAF", "COG", "COD", "GAB", "GNQ", "STP", "TCD"],
  est: ["BDI", "COM", "DJI", "ERI", "ETH", "KEN", "MDG", "UGA", "RWA", "SOM", "SOL", "SSD", "TZA"],
  australe: ["ZAF", "BWA", "SWZ", "LSO", "MWI", "MOZ", "NAM", "ZMB", "ZWE"],
};

/**
 * Exclus du **tracé** seulement : Cap-Vert, Maurice et Seychelles sont trop au large pour tenir
 * dans un cadrage lisible du continent (les inclure écrase l'Afrique sur un tiers de l'image).
 * Ils restent pleinement dans leur territoire côté jeu — le Cap-Vert appartient à l'Ouest, Maurice
 * et les Seychelles à l'Est.
 */
const EXCLUDED_FROM_MAP = new Set(["CPV", "MUS", "SYC"]);

/**
 * Cadre géographique du continent. Plusieurs pays traînent des dépendances très lointaines dans
 * Natural Earth — l'Afrique du Sud possède les îles du Prince-Édouard, à 46° S, à des milliers de
 * kilomètres au sud du Cap. Sans ce filtre, un point invisible étire la boîte englobante et laisse
 * un grand vide sous la carte.
 */
const MAP_BOUNDS = { minLon: -20, maxLon: 53, minLat: -36, maxLat: 38 };

/** Un anneau entièrement hors cadre est une dépendance lointaine : on le jette. */
function isWithinBounds(ring) {
  return ring.some(
    ([lon, lat]) =>
      lon >= MAP_BOUNDS.minLon &&
      lon <= MAP_BOUNDS.maxLon &&
      lat >= MAP_BOUNDS.minLat &&
      lat <= MAP_BOUNDS.maxLat,
  );
}

const TERRITORY_OF = new Map();
for (const [territoryId, isoCodes] of Object.entries(COUNTRY_TERRITORY)) {
  for (const iso of isoCodes) TERRITORY_OF.set(iso, territoryId);
}

/** Centre de projection : milieu du continent (Nigeria/Tchad), pour minimiser la déformation aux bords. */
const CENTER_LON = 17;
const CENTER_LAT = 3;

const toRad = (deg) => (deg * Math.PI) / 180;

/**
 * Projection azimutale équivalente de Lambert. Conserve les aires : la surface relative de chaque
 * pays est exacte, contrairement à Mercator.
 */
function project([lon, lat]) {
  const phi = toRad(lat);
  const lambda = toRad(lon) - toRad(CENTER_LON);
  const phi1 = toRad(CENTER_LAT);
  const cosC = Math.sin(phi1) * Math.sin(phi) + Math.cos(phi1) * Math.cos(phi) * Math.cos(lambda);
  const k = Math.sqrt(2 / (1 + cosC));
  return [
    k * Math.cos(phi) * Math.sin(lambda),
    k * (Math.cos(phi1) * Math.sin(phi) - Math.sin(phi1) * Math.cos(phi) * Math.cos(lambda)),
  ];
}

/** Distance d'un point au segment ab, au carré. */
function segmentDistanceSq(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  if (dx === 0 && dy === 0) return (p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2;
  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  t = Math.max(0, Math.min(1, t));
  return (p[0] - (a[0] + t * dx)) ** 2 + (p[1] - (a[1] + t * dy)) ** 2;
}

/** Douglas-Peucker itératif (pas de récursion : certains anneaux comptent des milliers de points). */
function simplify(points, tolerance) {
  if (points.length < 3) return points;
  const toleranceSq = tolerance * tolerance;
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length > 0) {
    const [first, last] = stack.pop();
    let maxDistSq = 0;
    let index = -1;
    for (let i = first + 1; i < last; i++) {
      const distSq = segmentDistanceSq(points[i], points[first], points[last]);
      if (distSq > maxDistSq) {
        maxDistSq = distSq;
        index = i;
      }
    }
    if (index !== -1 && maxDistSq > toleranceSq) {
      keep[index] = 1;
      stack.push([first, index], [index, last]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

/** Aire algébrique d'un anneau (formule du lacet), en valeur absolue. */
function ringArea(points) {
  let sum = 0;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    sum += (points[j][0] + points[i][0]) * (points[j][1] - points[i][1]);
  }
  return Math.abs(sum / 2);
}

const response = await fetch(SOURCE);
if (!response.ok) throw new Error(`Téléchargement Natural Earth impossible : HTTP ${response.status}`);
const geojson = await response.json();

/** Code ISO exploitable : Natural Earth met "-99" sur les territoires non reconnus (Somaliland). */
function isoOf(properties) {
  if (properties.ISO_A3 && properties.ISO_A3 !== "-99") return properties.ISO_A3;
  if (properties.ADMIN === "Somaliland") return "SOL";
  return properties.ADM0_A3 ?? properties.ADMIN;
}

const features = geojson.features.filter((f) => {
  const iso = isoOf(f.properties);
  return TERRITORY_OF.has(iso) && !EXCLUDED_FROM_MAP.has(iso);
});

const missing = [...TERRITORY_OF.keys()].filter(
  (iso) => !EXCLUDED_FROM_MAP.has(iso) && !features.some((f) => isoOf(f.properties) === iso),
);
if (missing.length > 0) throw new Error(`Pays introuvables dans la source : ${missing.join(", ")}`);

// Anneaux projetés, puis cadrage commun à toute la carte.
const shapes = features.map((feature) => {
  const polygons =
    feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  return {
    iso: isoOf(feature.properties),
    name: feature.properties.ADMIN,
    territoryId: TERRITORY_OF.get(isoOf(feature.properties)),
    // Seul l'anneau extérieur de chaque polygone est conservé : à cette échelle, les enclaves
    // (Lesotho dans l'Afrique du Sud) sont déjà dessinées par le pays qui les porte.
    rings: polygons
      .map((polygon) => polygon[0])
      .filter(isWithinBounds)
      .map((ring) => ring.map(project)),
  };
});

const inFrame = shapes.filter((shape) => shape.rings.length > 0);
if (inFrame.length !== shapes.length) {
  const dropped = shapes.filter((s) => s.rings.length === 0).map((s) => s.iso);
  console.log(`  (hors cadre, ignorés : ${dropped.join(", ")})`);
}

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const shape of inFrame) {
  for (const ring of shape.rings) {
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const scale = WIDTH / (maxX - minX);
const height = Math.round((maxY - minY) * scale);
const toCanvas = ([x, y]) => [(x - minX) * scale, (maxY - y) * scale];
const round = (n) => Math.round(n * 10) / 10;

function ringToPath(ring) {
  return (
    ring.map(([x, y], i) => `${i === 0 ? "M" : "L"}${round(x)} ${round(y)}`).join("") + "Z"
  );
}

const countries = [];
const labelAnchors = {};

for (const shape of inFrame) {
  const rings = shape.rings
    .map((ring) => simplify(ring.map(toCanvas), SIMPLIFY_TOLERANCE))
    .filter((ring) => ring.length >= 4);
  if (rings.length === 0) continue;

  // On garde toujours le plus grand anneau, même sous le seuil : un pays ne doit jamais disparaître.
  const areas = rings.map(ringArea);
  const largest = areas.indexOf(Math.max(...areas));
  const kept = rings.filter((_, i) => i === largest || areas[i] >= MIN_RING_AREA);

  countries.push({
    iso: shape.iso,
    name: shape.name,
    territoryId: shape.territoryId,
    d: kept.map(ringToPath).join(""),
  });

  // Point d'ancrage du territoire : centroïde pondéré par l'aire des pays qui le composent.
  const ring = rings[largest];
  const centroid = ring.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);
  const weight = areas[largest];
  const anchor = (labelAnchors[shape.territoryId] ??= { x: 0, y: 0, weight: 0 });
  anchor.x += (centroid[0] / ring.length) * weight;
  anchor.y += (centroid[1] / ring.length) * weight;
  anchor.weight += weight;
}

const anchors = Object.fromEntries(
  Object.entries(labelAnchors).map(([id, a]) => [id, { x: round(a.x / a.weight), y: round(a.y / a.weight) }]),
);

const output = `/**
 * Fichier généré — ne pas éditer à la main. Régénérer via \`npm run gen:map\`.
 *
 * Tracé de l'Afrique dérivé de Natural Earth (ne_50m_admin_0_countries), **domaine public**,
 * projeté en Mercator et simplifié. ${countries.length} pays, groupés par territoire du module Quiz.
 * Cap-Vert, Maurice et Seychelles sont absents du tracé (trop au large pour un cadrage lisible)
 * mais appartiennent bien à leur territoire côté jeu — voir scripts/generate-africa-map.mjs.
 */
import type { TerritoryId } from "@/lib/territories";

export interface AfricaCountryShape {
  iso: string;
  name: string;
  territoryId: TerritoryId;
  /** Attribut \`d\` d'un \`<path>\` SVG */
  d: string;
}

export const AFRICA_MAP_VIEWBOX = "0 0 ${WIDTH} ${height}";

/** Point d'ancrage de l'étiquette de chaque territoire (centroïde pondéré par l'aire). */
export const AFRICA_TERRITORY_ANCHORS: Record<string, { x: number; y: number }> = ${JSON.stringify(anchors, null, 2)};

export const AFRICA_COUNTRIES: AfricaCountryShape[] = ${JSON.stringify(countries, null, 2)};
`;

const target = join(ROOT, "src", "data", "africaMap.generated.ts");
writeFileSync(target, output);

const byTerritory = countries.reduce((acc, c) => ({ ...acc, [c.territoryId]: (acc[c.territoryId] ?? 0) + 1 }), {});
console.log(`✓ Carte générée : ${countries.length} pays, viewBox 0 0 ${WIDTH} ${height}`);
console.log(`  Par territoire : ${Object.entries(byTerritory).map(([t, n]) => `${t} ${n}`).join(", ")}`);
console.log(`  Poids : ${(Buffer.byteLength(output) / 1024).toFixed(1)} Ko`);
