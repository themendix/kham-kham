import { describe, expect, it, vi } from "vitest";
import { createContentLoader } from "./courseContent";
import type { Course, CourseMeta } from "@/types";

const course: Course = { id: "cours", categoryId: "histoire", title: "Cours", description: "", emoji: "", xp: 50, lessons: [{ id: "lecon", title: "Leçon", blocks: [] }], quiz: [] };
const catalog: CourseMeta[] = [{ ...course, quizCount: 0 }];

describe("chargement et récupération des matières", () => {
  it("réessaie une promesse de catalogue rejetée, garde les matières déjà chargées et partage les requêtes", async () => {
    const history = vi.fn<() => Promise<Course[]>>().mockRejectedValueOnce(new Error("hors ligne")).mockResolvedValue([course]);
    const geography = vi.fn<() => Promise<Course[]>>().mockResolvedValue([]);
    const loader = createContentLoader({ histoire: history, geo: geography }, catalog);
    await expect(loader.preloadAllSubjectContent()).rejects.toThrow("hors ligne");
    expect(loader.getCachedCatalogContent()).toBeUndefined();
    const [all, requested] = await Promise.all([loader.preloadAllSubjectContent(), loader.getFullCourse(course.id)]);
    expect(all).toEqual([course]);
    expect(requested).toBe(course);
    expect(history).toHaveBeenCalledTimes(2);
    expect(geography).toHaveBeenCalledOnce();
    expect(loader.getCachedFullLessonRef("cours:lecon")).toEqual({ course, lesson: course.lessons[0] });
    expect(loader.getCachedCatalogContent()).toEqual([course]);
  });

  it("distingue une absence de contenu d'une erreur et ne charge pas une adresse inconnue", async () => {
    const load = vi.fn<() => Promise<Course[]>>().mockResolvedValue([]);
    const loader = createContentLoader({ histoire: load }, catalog);
    expect(await loader.getFullCourse("inconnu")).toBeUndefined();
    expect(await loader.getFullLessonRef("invalide")).toBeNull();
    expect(load).not.toHaveBeenCalled();
    expect(await loader.getFullCourse("cours")).toBeUndefined();
    expect(await loader.getFullLessonRef("cours:absente")).toBeNull();
  });

  it("une exception synchrone de chargement ne laisse pas de requête bloquée", async () => {
    const load = vi.fn<() => Promise<Course[]>>().mockImplementationOnce(() => { throw new Error("module indisponible"); }).mockResolvedValue([course]);
    const loader = createContentLoader({ histoire: load }, catalog);
    await expect(loader.getFullCourse("cours")).rejects.toThrow();
    expect(await loader.getFullCourse("cours")).toBe(course);
    expect(load).toHaveBeenCalledTimes(2);
  });
});
