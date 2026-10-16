import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES } from "../src/data/courses";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "reference/source-manifest.json"), "utf8")) as { source_commit: string; files: { path: string; sha256: string; sha256Lf?: string }[] };
const adapters = new Set(["src/data/courseMeta.ts", "src/data/courses.ts"]);
const failures: string[] = [];
let preserved = 0;
for (const file of manifest.files) {
  if (adapters.has(file.path)) continue;
  const target = resolve(root, file.path);
  const content = existsSync(target) ? readFileSync(target) : null;
  const matchesOriginal = content !== null && createHash("sha256").update(content).digest("hex") === file.sha256;
  // Git may convert CRLF to LF. The alternate digest comes from the preserved web original.
  const matchesLf = content !== null && file.sha256Lf !== undefined && createHash("sha256").update(content.toString("utf8").replace(/\r\n/g, "\n")).digest("hex") === file.sha256Lf;
  if (!matchesOriginal && !matchesLf) failures.push(file.path);
  else preserved++;
}
const imageCode = readFileSync(resolve(root, "src/native/imageAssets.ts"), "utf8");
for (const match of imageCode.matchAll(/require\("([^"]+)"\)/g)) if (!existsSync(resolve(root, "src/native", match[1]))) failures.push(match[1]);
const result = { sourceCommit: manifest.source_commit, preservedFiles: preserved, courses: COURSES.length, lessons: COURSES.reduce((n, course) => n + course.lessons.length, 0), questions: COURSES.reduce((n, course) => n + course.quiz.length, 0), failures };
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
