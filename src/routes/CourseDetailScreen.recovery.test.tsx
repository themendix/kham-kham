import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createContentLoader } from "@/data/courseContent";
import { createAppStore } from "@/store/useAppStore";
import { progressTestEnvironment } from "@/store/progressTestEnvironment";
import type { Course } from "@/types";
import { CourseDetailScreen } from "./CourseDetailScreen";

const fixtures = vi.hoisted(() => ({
  loader: null as ReturnType<typeof createContentLoader> | null,
  store: null as ReturnType<typeof createAppStore> | null,
}));
vi.mock("@/data/courseContent", async (importOriginal) => ({
  ...await importOriginal<typeof import("@/data/courseContent")>(),
  getFullCourse: (id: string) => fixtures.loader!.getFullCourse(id),
  getCachedFullCourse: (id: string) => fixtures.loader!.getCachedFullCourse(id),
}));
vi.mock("@/store/useAppStore", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/store/useAppStore")>();
  return { ...original, useAppStore: Object.assign(
    (selector: Parameters<typeof original.useAppStore>[0]) => fixtures.store!(selector),
    { getState: () => fixtures.store!.getState() },
  ) };
});

const course: Course = { id: "course-histoire-01-egypte-antique", categoryId: "histoire", title: "Cours retrouvé", description: "", emoji: "", xp: 50, lessons: [{ id: "course-histoire-01-egypte-antique-lesson-1", title: "Leçon retrouvée", blocks: [{ type: "paragraphe", text: "Le contenu est de nouveau disponible." }] }], quiz: [] };
let root: Root;
let container: HTMLDivElement;
const load = vi.fn<() => Promise<Course[]>>();
beforeEach(async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  load.mockReset();
  fixtures.loader = createContentLoader({ histoire: load });
  fixtures.store = createAppStore(progressTestEnvironment().environment);
  await fixtures.store.getState().retryPersistence();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); vi.restoreAllMocks(); });
async function render(id = course.id) {
  await act(async () => root.render(<MemoryRouter initialEntries={[`/cours/${id}`]}><Routes><Route path="/cours/:courseId" element={<CourseDetailScreen />} /></Routes></MemoryRouter>));
}

describe("cours — échec, récupération et absence", () => {
  it("affiche l'erreur puis relance réellement le chargement sans attribuer d'XP", async () => {
    load.mockRejectedValueOnce(new Error("réseau")).mockResolvedValue([course]);
    await render();
    expect(container.querySelector('[role="alert"]')?.textContent).toContain("n’a pas pu être chargé");
    expect(container.textContent).not.toContain("Chargement…");
    expect(container.querySelector('a[href="/biblio"]')).not.toBeNull();
    await act(async () => [...container.querySelectorAll("button")].find((b) => b.textContent === "Réessayer")!.click());
    expect(load).toHaveBeenCalledTimes(2);
    expect(container.textContent).toContain("Leçon retrouvée");
    expect(container.querySelector('[role="alert"]')).toBeNull();
    expect(fixtures.store!.getState().progress.xp).toBe(0);
    expect(fixtures.store!.getState().progress.completedLessonIds).toEqual([]);
  });

  it("affiche un cours déjà en cache dès le premier rendu, sans écran intermédiaire", async () => {
    load.mockResolvedValue([course]);
    await fixtures.loader!.getFullCourse(course.id);
    act(() => root.render(<MemoryRouter initialEntries={[`/cours/${course.id}`]}><Routes><Route path="/cours/:courseId" element={<CourseDetailScreen />} /></Routes></MemoryRouter>));
    expect(container.textContent).toContain("Leçon retrouvée");
    expect(container.textContent).not.toContain("Chargement…");
    expect(load).toHaveBeenCalledOnce();
    await act(async () => {});
  });

  it("une adresse inconnue ou un cours absent du module ne reste pas en chargement", async () => {
    load.mockResolvedValue([]);
    await render("inconnu");
    expect(container.textContent).toContain("cours est introuvable");
    expect(load).not.toHaveBeenCalled();
    act(() => root.unmount());
    root = createRoot(container);
    await render();
    expect(container.textContent).toContain("cours est introuvable");
    expect(container.textContent).not.toContain("Chargement…");
  });
});
