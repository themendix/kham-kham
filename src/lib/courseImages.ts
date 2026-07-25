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
