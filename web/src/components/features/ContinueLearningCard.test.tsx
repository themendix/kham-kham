import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter, useLocation } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Category, CourseMeta } from "@/types";
import { ContinueLearningCard } from "./ContinueLearningCard";

const fixtures = vi.hoisted(() => ({
  cover: true,
  getImage: vi.fn(),
  getPosition: vi.fn(),
}));
vi.mock("@/lib/courseImages", () => ({
  getCourseImage: (id: string) => { fixtures.getImage(id); return fixtures.cover ? { src: "/course-800w.webp", srcSet: "/course-400w.webp 400w, /course-800w.webp 800w" } : undefined; },
  getCourseImagePosition: (id: string) => { fixtures.getPosition(id); return "right"; },
  OBJECT_POSITION: { left: "object-left", right: "object-right", center: "object-center" },
}));
const course: CourseMeta = { id: "course-histoire-koush", categoryId: "histoire", title: "Le royaume de Koush et Méroé", description: "", emoji: "🏛️", xp: 50, lessons: [{ id: "shared" }, { id: "second" }, { id: "third" }, { id: "fourth" }, { id: "fifth" }], quizCount: 5 };
const category: Category = { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" };
let root: Root;
let container: HTMLDivElement;
beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  fixtures.cover = true;
  fixtures.getImage.mockClear();
  fixtures.getPosition.mockClear();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); });
function Location() { return <output>{useLocation().pathname}</output>; }
function renderCard(resumed: boolean, completedLessonIds: string[] = [], current: CourseMeta | null = course, currentCategory: Category | null = category) {
  act(() => root.render(<MemoryRouter><ContinueLearningCard course={current} category={currentCategory} resumed={resumed} completedLessonIds={completedLessonIds} /><Location /></MemoryRouter>));
}

describe("carte Home de reprise réelle", () => {
  it("reprend à la première leçon non lue, avec couverture de cours et un seul lien vers le cours", () => {
    const completed = [`${course.id}:shared`];
    const before = JSON.stringify(completed);
    renderCard(true, completed);
    expect(container.querySelector("h2")?.textContent).toBe("Reprendre l’apprentissage");
    expect(container.textContent).toContain("Leçon 2 / 5 · Histoire");
    expect(container.textContent).toContain("Lire la leçon");
    expect(fixtures.getImage).toHaveBeenCalledWith(course.id);
    expect(fixtures.getPosition).toHaveBeenCalledWith(course.id);
    expect(container.querySelector("img")?.getAttribute("srcset")).toContain("400w");
    expect(container.querySelectorAll("a")).toHaveLength(1);
    expect(container.querySelectorAll("button")).toHaveLength(0);
    const link = container.querySelector("a")!;
    expect(link.getAttribute("href")).toBe(`/cours/${course.id}`);
    act(() => link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, button: 0 })));
    expect(container.querySelector("output")?.textContent).toBe(`/cours/${course.id}`);
    expect(JSON.stringify(completed)).toBe(before);
  });
  it("ne confond pas un ID de leçon d’un autre cours avec une leçon déjà validée", () => {
    renderCard(true, ["autre-cours:shared"]);
    expect(container.textContent).toContain("Leçon 1 / 5 · Histoire");
  });
  it("reprend au début quand toutes les leçons sont lues mais le cours reste inachevé", () => {
    renderCard(true, course.lessons.map((lesson) => `${course.id}:${lesson.id}`));
    expect(container.textContent).toContain("Leçon 1 / 5 · Histoire");
  });
  it("sans couverture garde une reprise lisible et sa destination, sans image inventée", () => {
    fixtures.cover = false;
    renderCard(true);
    expect(container.querySelector("img")).toBeNull();
    expect(container.textContent).toContain(course.title);
    expect(container.textContent).toContain(course.emoji);
    expect(container.textContent).toContain("Lire la leçon");
    expect(container.querySelector("a")?.getAttribute("href")).toBe(`/cours/${course.id}`);
  });
  it("le cours conseillé jamais ouvert conserve Commencer, sans fausse section reprise", () => {
    renderCard(false);
    expect(container.textContent).toContain("Commencer →");
    expect(container.querySelector("h2")).toBeNull();
    expect(container.textContent).not.toContain("Lire la leçon");
    expect(container.querySelector("a")?.getAttribute("href")).toBe(`/cours/${course.id}`);
  });
  it("catalogue terminé ou catégorie absente conserve le lien Biblio", () => {
    renderCard(false, [], null, null);
    expect(container.textContent).toContain("Tu as tout terminé, bravo !");
    expect(container.querySelector("a")?.getAttribute("href")).toBe("/biblio");
    renderCard(true, [], course, null);
    expect(container.querySelector("a")?.getAttribute("href")).toBe("/biblio");
  });
});
