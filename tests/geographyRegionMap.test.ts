import { act, createElement, type CSSProperties, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CategoryScreen } from "../src/screens/CategoryScreen";
import { COURSE_INDEX } from "../src/data/coursesIndex.generated";
import { GEOGRAPHY_MAP_COUNTRIES } from "../src/data/geographyMap.generated";
import { getGeographieRegion } from "../src/lib/geographieRegions";

const fixture = vi.hoisted(() => ({ categoryId: "geo", fontScale: 1, startedCourseIds: [] as string[], completedCourseIds: [] as string[], toggleFavorite: vi.fn(async () => {}), navigate: vi.fn() }));
vi.mock("react-native", () => {
  type Props = { children?: ReactNode | ((state: { pressed: boolean }) => ReactNode); style?: unknown; onPress?: () => void; accessibilityLabel?: string; accessibilityState?: { selected?: boolean } };
  // NativeWind processes inline declarations as objects: a style callback loses its fields.
  // Preserve native layout styles in this harness so this regression is observable.
  const flatten = (value: unknown): Record<string, unknown> => Array.isArray(value)
    ? Object.assign({}, ...value.map(flatten))
    : value && typeof value === "object" ? value as Record<string, unknown> : {};
  const layout = (value: unknown) => Object.fromEntries(Object.entries(flatten(value)).filter(([key]) => ["position", "left", "top", "width", "height", "minHeight", "aspectRatio", "borderWidth", "borderRadius", "backgroundColor", "flexDirection", "alignItems", "justifyContent", "overflow"].includes(key))) as CSSProperties;
  return {
    View: (p: Props) => createElement("div", { style: layout(p.style) }, p.children as ReactNode),
    Pressable: (p: Props) => createElement("button", { style: layout(p.style), onClick: p.onPress, "aria-label": p.accessibilityLabel, "aria-pressed": p.accessibilityState?.selected }, typeof p.children === "function" ? p.children({ pressed: false }) : p.children),
    StyleSheet: { create: (styles: unknown) => styles },
    useWindowDimensions: () => ({ width: 390, height: 844, fontScale: fixture.fontScale }),
  };
});
vi.mock("react-native-svg", () => ({
  default: (p: { children: ReactNode }) => createElement("svg", null, p.children),
  Path: (p: { d: string; fill: string; onPress?: () => void }) => createElement("path", { d: p.d, fill: p.fill, onClick: p.onPress, "data-interactive": p.onPress ? "true" : undefined }),
  Line: () => null, Circle: () => null,
}));
vi.mock("lucide-react-native", () => ({ ArrowLeft: () => null, ChevronRight: () => null, Flame: () => null }));
vi.mock("@/components/features/HomeUi", () => ({
  HomeText: (p: { children: ReactNode }) => createElement("span", null, p.children),
  homeColors: { ink: "#1e1b18", card: "#fff", muted: "#5c554b", primaryText: "#b53d22" },
}));
vi.mock("@/native/elements", () => {
  const Box = (p: { children: ReactNode }) => createElement("div", null, p.children);
  return {
    NativeBox: Box, NativeH1: Box, NativeParagraph: Box, NativeSpan: Box,
    NativeButton: (p: { children: ReactNode; onClick: () => void }) => createElement("button", { onClick: p.onClick }, p.children),
    NativeAnchor: (p: { children: ReactNode }) => createElement("a", null, p.children),
  };
});
vi.mock("@/native/icons", () => ({ ArrowLeft: () => null }));
vi.mock("@/native/router", () => ({ useNavigate: () => fixture.navigate, useParams: () => ({ categoryId: fixture.categoryId }) }));
vi.mock("@/store/useAppStore", () => ({
  useAppStore: (selector: (state: unknown) => unknown) => selector({
    progress: { completedCourseIds: fixture.completedCourseIds, completedLessonIds: [], startedCourseIds: fixture.startedCourseIds, favoriteCourseIds: [], quizResults: [] },
    toggleFavoriteCourse: fixture.toggleFavorite,
  }),
}));
vi.mock("@/components/features/CoursePhotoCard", () => ({
  CoursePhotoCard: (p: { course: { id: string; title: string }; onToggleFavorite: () => void }) => createElement("article", { "data-course": p.course.id }, p.course.title, createElement("button", { onClick: p.onToggleFavorite }, "Favori")),
}));
vi.mock("@/components/features/HistorySubjectHeader", () => ({ HistorySubjectHeader: () => createElement("h1", null, "Histoire") }));
vi.mock("@/components/ui/Badge", () => ({ Badge: () => null }));

let root: Root;
let container: HTMLDivElement;
const shownCourses = () => [...container.querySelectorAll("article")].map((card) => card.getAttribute("data-course"));
async function click(label: string) {
  const button = [...container.querySelectorAll("button")].find((item) => item.getAttribute("aria-label") === label || item.textContent === label);
  if (!button) throw new Error(`Missing button: ${label}`);
  await act(async () => button.click());
}
beforeEach(() => {
  fixture.categoryId = "geo";
  fixture.fontScale = 1;
  fixture.startedCourseIds = [];
  fixture.completedCourseIds = [];
  vi.clearAllMocks();
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  vi.unstubAllGlobals();
});

describe("Geography regional map", () => {
  it("keeps labels over the map and retains button layout through NativeWind's inline-style handling", async () => {
    await act(async () => root.render(createElement(CategoryScreen)));
    for (const region of ["Afrique du Nord", "Afrique de l'Ouest", "Afrique centrale", "Afrique de l'Est", "Afrique australe"]) {
      const label = container.querySelector<HTMLButtonElement>(`button[aria-label="${region}"]`)!;
      expect(label.style.position).toBe("absolute");
      expect(label.style.left).toMatch(/%$/);
      expect(label.style.top).toMatch(/%$/);
      expect(label.style.backgroundColor).not.toBe("");
      expect(label.parentElement?.querySelector(":scope > svg")).not.toBeNull();
      expect(label.parentElement?.style.position).toBe("relative");
    }
    const filter = container.querySelector<HTMLButtonElement>('button[aria-label="Tout : 15 cours"]')!;
    expect(filter.style.borderWidth).toBe("2px");
    expect(filter.style.borderRadius).toBe("999px");
    expect(filter.style.backgroundColor).not.toBe("");
    const seeAll = container.querySelector<HTMLButtonElement>(`button[aria-label="Voir tous les pays : Afrique de l'Ouest"]`)!;
    expect(seeAll.style.minHeight).toBe("44px");
  });

  it("opens on the four countries from the mockup and shows every country's course on request", async () => {
    await act(async () => root.render(createElement(CategoryScreen)));
    expect(shownCourses()).toEqual(["course-geographie-20-senegal", "course-geographie-17-mali", "course-geographie-11-cote-divoire", "course-geographie-13-ghana"]);
    expect(container.textContent).toContain("Choisis une région pour explorer ses pays");
    expect(container.textContent).not.toContain("Ta progression");
    expect(container.textContent).not.toContain("Index A-Z");
    expect(container.textContent).not.toContain("Sankofa");
    expect(container.textContent).toContain("Tout · 15");
    expect(container.textContent).toContain("En cours · 0");
    expect(container.textContent).toContain("Terminé · 0");
    let count = 0;
    for (const region of ["Afrique du Nord", "Afrique de l'Ouest", "Afrique centrale", "Afrique de l'Est", "Afrique australe"] as const) {
      await click(region);
      expect(shownCourses()).toHaveLength(4);
      await click(`Voir tous les pays : ${region}`);
      const expected = COURSE_INDEX.filter((course) => course.categoryId === "geo" && getGeographieRegion(course.id) === region).map((course) => course.id);
      expect(shownCourses().sort()).toEqual(expected.sort());
      count += shownCourses().length;
      expect(container.querySelector(`button[aria-label="${region}"]`)?.getAttribute("aria-pressed")).toBe("true");
    }
    expect(count).toBe(54);
  });

  it("also selects a region by tapping its drawing, including the island courses", async () => {
    await act(async () => root.render(createElement(CategoryScreen)));
    const shape = GEOGRAPHY_MAP_COUNTRIES.find((country) => country.iso === "MDG")!;
    const path = [...container.querySelectorAll('path[data-interactive="true"]')].find((element) => element.getAttribute("d") === shape.d)!;
    await act(async () => path.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    await click("Voir tous les pays : Afrique de l'Est");
    expect(shownCourses()).toContain("course-geographie-38-madagascar");
    expect(shownCourses()).toContain("course-geographie-42-seychelles");
    expect(shownCourses()).not.toContain("course-geographie-20-senegal");
    expect(path.getAttribute("fill")).toBe("#fa501b");
  });

  it("expands and collapses the list, resets the preview after selection, and keeps favorites and back navigation", async () => {
    await act(async () => root.render(createElement(CategoryScreen)));
    await click("Voir tous les pays : Afrique de l'Ouest");
    expect(shownCourses()).toHaveLength(15);
    await click("Réduire la liste des pays");
    expect(shownCourses()).toHaveLength(4);
    await click("Afrique du Nord");
    expect(shownCourses()).toHaveLength(4);
    await click("Voir tous les pays : Afrique du Nord");
    expect(shownCourses()).toHaveLength(7);
    await click("Favori");
    expect(fixture.toggleFavorite).toHaveBeenCalledWith(expect.stringMatching(/^course-geographie-/));
    await click("Afrique de l'Ouest");
    expect(shownCourses()).toHaveLength(4);
    await click("Retour à la bibliothèque");
    expect(fixture.navigate).toHaveBeenCalledWith("/biblio");
  });

  it("keeps region controls available with larger text and leaves History unchanged", async () => {
    fixture.fontScale = 1.7;
    await act(async () => root.render(createElement(CategoryScreen)));
    await click("Afrique australe");
    await click("Voir tous les pays : Afrique australe");
    expect(shownCourses()).toHaveLength(9);
    fixture.categoryId = "histoire";
    await act(async () => root.render(createElement(CategoryScreen)));
    expect(container.querySelector("svg")).toBeNull();
    expect(container.querySelector("h1")?.textContent).toBe("Histoire");
    expect(shownCourses().every((id) => id?.startsWith("course-histoire-"))).toBe(true);
  });

  it("filters started and completed countries from real progress and shows a clear empty state", async () => {
    fixture.startedCourseIds = ["course-geographie-20-senegal"];
    fixture.completedCourseIds = ["course-geographie-17-mali"];
    await act(async () => root.render(createElement(CategoryScreen)));
    expect(container.textContent).toContain("À faire · 13");
    await click("En cours : 1 cours");
    expect(shownCourses()).toEqual(["course-geographie-20-senegal"]);
    await click("Terminé : 1 cours");
    expect(shownCourses()).toEqual(["course-geographie-17-mali"]);
    await click("Afrique du Nord");
    expect(shownCourses()).toHaveLength(0);
    expect(container.textContent).toContain("Aucun cours terminé dans cette région");
    await click("Tout : 7 cours");
    expect(shownCourses()).toHaveLength(4);
  });
});
