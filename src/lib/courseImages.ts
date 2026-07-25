const files = import.meta.glob("@/assets/cours/**/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const imagesByCourseId: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => {
    const name = path.split("/").pop()!.replace(/\.webp$/, "");
    return [name, url];
  }),
);

/** Résout l'illustration d'un cours par convention de nommage (id de cours = nom de fichier), ou `undefined` si absente */
export function getCourseImage(courseId: string): string | undefined {
  return imagesByCourseId[courseId];
}

// Dans ce lot d'illustrations, le drapeau national est presque toujours à droite,
// sauf pour ce sous-ensemble (Afrique centrale/grands lacs) où il est à gauche.
const LEFT_FLAG_COURSE_IDS = new Set([
  "course-geographie-26-congo-brazzaville",
  "course-geographie-27-rd-congo",
  "course-geographie-28-gabon",
  "course-geographie-29-guinee-equatoriale",
  "course-geographie-30-sao-tome-et-principe",
  "course-geographie-31-tchad",
  "course-geographie-32-burundi",
  "course-geographie-33-comores",
  "course-geographie-34-djibouti",
  "course-geographie-35-erythree",
]);

/** Côté vers lequel cadrer l'illustration (object-position) pour garder le drapeau visible au recadrage `object-cover`. */
export function getCourseImagePosition(courseId: string): "left" | "right" {
  return LEFT_FLAG_COURSE_IDS.has(courseId) ? "left" : "right";
}
