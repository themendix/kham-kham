// Independent Geography artwork: Natural Earth public-domain boundaries, orthographic projection.
// Usage: node scripts/generate-geography-map.mjs path/to/ne_50m_admin_0_countries.geojson
import { readFile, writeFile } from "node:fs/promises";

const source = process.argv[2];
if (!source) throw new Error("Provide the Natural Earth 50m countries GeoJSON file.");
const { features } = JSON.parse(await readFile(source, "utf8"));
const regions = {
  nord: "DZA EGY LBY MAR MRT SDN TUN ESH",
  ouest: "BEN BFA CPV CIV GMB GHA GIN GNB LBR MLI NER NGA SEN SLE TGO",
  centrale: "AGO CMR CAF COG COD GAB GNQ STP TCD",
  est: "BDI COM DJI ERI ETH KEN MDG MUS UGA RWA SYC SOM SSD TZA",
  australe: "ZAF BWA SWZ LSO MWI MOZ NAM ZMB ZWE",
};
const byIso = new Map(Object.entries(regions).flatMap(([region, codes]) => codes.split(" ").map((iso) => [iso, region])));
// Orthographic centre 15° E, 4° N gives the rounded silhouette of the approved mockup.
const radians = Math.PI / 180;
const project = ([longitude, latitude]) => {
  const lon = (longitude - 15) * radians;
  const lat = latitude * radians;
  const centre = 4 * radians;
  return [Math.cos(lat) * Math.sin(lon), Math.cos(centre) * Math.sin(lat) - Math.sin(centre) * Math.cos(lat) * Math.cos(lon)];
};
const countries = features.flatMap((feature) => {
  const props = feature.properties;
  let iso = props.ISO_A3_EH;
  // Natural Earth's Somaliland is painted with Somalia, matching the course catalogue.
  if (props.ADM0_A3 === "SOL") iso = "SOM";
  const region = byIso.get(iso);
  if (!region) return [];
  const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  // Exclude remote sub-Antarctic dependencies, which otherwise shrink the mainland.
  return [{ iso, region, rings: polygons.flatMap((polygon) => polygon.filter((ring) => ring.some(([, latitude]) => latitude > -36)).map((ring) => ring.map(project))) }];
});
// Match the reference's framing on the mainland and Madagascar; distant archipelagos
// stay accessible through their region's course list.
const offshore = new Set(["CPV", "MUS", "SYC", "COM", "STP"]);
const artwork = countries.filter((country) => !offshore.has(country.iso));
const points = artwork.flatMap((country) => country.rings.flat());
const minX = Math.min(...points.map(([x]) => x));
const maxY = Math.max(...points.map(([, y]) => y));
const minY = Math.min(...points.map(([, y]) => y));
const scale = 600 / (maxY - minY);
const position = ([x, y]) => [Math.round((280 + (x - minX) * scale) * 10) / 10, Math.round((22 + (maxY - y) * scale) * 10) / 10];

// Keep shared borders intact; remove only points which round to the same screen coordinate.
const paths = artwork.map(({ iso, region, rings }) => ({
  iso,
  region,
  d: rings.map((ring) => {
    const projected = ring.map(position).filter((point, index, all) => index === 0 || point.toString() !== all[index - 1].toString());
    return `M${projected.map((point) => point.join(",")).join("L")}Z`;
  }).join(""),
}));
const missing = [...byIso.keys()].filter((iso) => !countries.some((country) => country.iso === iso));
if (missing.length) throw new Error(`Missing geography: ${missing.join(", ")}`);
const credits = `/**
 * Dedicated Geography map, created for the regional selector mockup.
 * Source: Natural Earth 1:50m, public domain.
 * https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson
 * Orthographic projection centred at 15° E / 4° N. No dependency on the Quiz map.
 * Regenerate with scripts/generate-geography-map.mjs and the source GeoJSON.
 */\n`;
await writeFile(new URL("../src/data/geographyMap.generated.ts", import.meta.url), credits +
  'export type GeographyMapRegionId = "nord" | "ouest" | "centrale" | "est" | "australe";\n' +
  'export const GEOGRAPHY_MAP_VIEWBOX = "0 0 1000 680";\n' +
  `export const GEOGRAPHY_REGION_ANCHORS = ${JSON.stringify(Object.fromEntries(Object.entries({ nord: [-5, 31], ouest: [-10, 10], centrale: [12, -2], est: [37, -5], australe: [24, -29] }).map(([region, point]) => [region, position(project(point))])), null, 2)};\n` +
  `export const GEOGRAPHY_MAP_COUNTRIES: { iso: string; region: GeographyMapRegionId; d: string }[] = ${JSON.stringify(paths, null, 2)};\n`);
console.log(`Created independent Geography map: ${paths.length} shapes; all 54 course countries checked.`);
