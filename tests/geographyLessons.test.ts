import { act, createElement, forwardRef, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GEOGRAPHIE_COURSES } from "../src/data/courses/geographie";
import { stripInlineMarkers } from "../src/lib/lessonBlocks";
import { LessonViewer } from "../src/components/features/LessonViewer";
import { QUIZ_LESSON_MAP } from "../src/data/quizLessonMap";
import { QUIZ_INDEX } from "../src/data/quizIndex.generated";
import { COURSE_INDEX } from "../src/data/coursesIndex.generated";

const fixture = vi.hoisted(() => ({ scroll: vi.fn(), announce: vi.fn(), width: 390, height: 844, fontScale: 1, next: vi.fn(), prev: vi.fn(), layouts: new Map<string, (event: { nativeEvent: { layout: { x: number; y: number; width: number; height: number } } }) => void>() }));
vi.mock("react-native", () => {
  type Props = { children?: ReactNode | ((state: { pressed: boolean }) => ReactNode); style?: unknown; testID?: string; onLayout?: (event: { nativeEvent: { layout: { x: number; y: number; width: number; height: number } } }) => void; accessibilityRole?: string; accessibilityLabel?: string; accessibilityValue?: { now: number }; accessibilityState?: { disabled?: boolean }; disabled?: boolean; onPress?: () => void };
  const flatten = (value: unknown): Record<string, unknown> => Array.isArray(value) ? Object.assign({}, ...value.map(flatten)) : value && typeof value === "object" ? value as Record<string, unknown> : {};
  const styleProps = (value: unknown, view: boolean) => ({ "data-native-style": JSON.stringify({ ...(view ? { display: "flex", flexDirection: "column" } : {}), ...flatten(value) }) });
  return {
    View: (p: Props) => {
      if (p.testID && p.onLayout) fixture.layouts.set(p.testID, p.onLayout);
      return createElement("div", { ...styleProps(p.style, true), "data-testid": p.testID, role: p.accessibilityRole, "aria-label": p.accessibilityLabel, "aria-valuenow": p.accessibilityValue?.now }, p.children as ReactNode);
    },
    Text: (p: Props) => createElement("span", styleProps(p.style, false), p.children as ReactNode),
    Pressable: (p: Props) => {
      if (typeof p.style === "function") throw new Error("NativeWind drops functional inline styles");
      return createElement("button", { ...styleProps(p.style, true), "aria-label": p.accessibilityLabel, disabled: p.disabled, onClick: p.onPress }, typeof p.children === "function" ? p.children({ pressed: false }) : p.children);
    },
    StyleSheet: { create: (styles: unknown) => styles },
    AccessibilityInfo: { announceForAccessibility: fixture.announce },
    useWindowDimensions: () => ({ width: fixture.width, height: fixture.height, fontScale: fixture.fontScale }),
  };
});
vi.mock("lucide-react-native", () => {
  const icon = (p: { size?: number; color?: string }) => createElement("svg", { width: p.size ?? 24, height: p.size ?? 24, viewBox: "0 0 24 24" }, createElement("circle", { cx: 12, cy: 12, r: 9, fill: "none", stroke: p.color ?? "#1e1b18", strokeWidth: 2 }));
  return { ArrowLeft: icon, ArrowRight: icon, Building2: icon, Check: icon, Coins: icon, Compass: icon, Flag: icon, Landmark: icon, Lightbulb: icon, Users: icon };
});
vi.mock("@/components/features/HomeUi", () => ({
  HomeText: function PreviewHomeText(p: { children: ReactNode; heading?: boolean; style?: unknown; accessibilityRole?: string }) {
    const styles = Array.isArray(p.style) ? p.style : [p.style];
    return createElement("span", { role: p.accessibilityRole, "data-native-style": JSON.stringify(Object.assign({ fontFamily: p.heading ? "PoppinsExtraBold" : "Inter", fontSize: p.heading ? 15 : 13, lineHeight: p.heading ? 22 : 20, color: "#1e1b18" }, ...styles.filter(Boolean))) }, p.children);
  },
  homeColors: { cream: "#f6eedd", ink: "#1e1b18", card: "#ffffff" },
}));
vi.mock("@/native/elements", () => {
  const Box = forwardRef(function PreviewNativeBox(p: { children: ReactNode }, _ref) { return createElement("div", null, p.children); });
  return { NativeBox: Box, NativeH2: Box };
});
vi.mock("@/native/scroll", () => ({ scrollToTop: fixture.scroll }));
vi.mock("@/components/features/LessonBlocks", () => ({ LessonBlocks: () => createElement("div", { "data-testid": "legacy-blocks" }, "Autres blocs") }));
vi.mock("@/components/features/LessonProgressPips", () => ({ LessonProgressPips: () => null }));
vi.mock("@/components/features/EditorialLessonContent", () => ({ EditorialLessonContent: () => createElement("div", { "data-testid": "history-reading" }, "Lecture histoire") }));
vi.mock("@/components/ui/Card", () => ({ Card: (p: { children: ReactNode }) => createElement("div", { "data-testid": "legacy-card" }, p.children) }));
vi.mock("@/components/ui/Button", () => ({ Button: (p: { children: ReactNode }) => createElement("button", null, p.children) }));

const course = GEOGRAPHIE_COURSES.find((entry) => entry.id === "course-geographie-20-senegal")!;
let root: Root;
let container: HTMLDivElement;
function props(index = 0, preserveInitialScroll = false) {
  return { courseId: course.id, lesson: course.lessons[index], lessonIndex: index, totalLessons: 3, accentColor: "geo" as const, preserveInitialScroll, onPrev: fixture.prev, onNext: fixture.next, nextLabel: index === 2 ? "J'ai terminé ✓" : "Suivant →", isLastLesson: index === 2 };
}
beforeEach(() => {
  fixture.width = 390;
  fixture.height = 844;
  fixture.fontScale = 1;
  vi.clearAllMocks();
  fixture.layouts.clear();
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); vi.unstubAllGlobals(); });

describe("Géographie : modèle validé au Sénégal", () => {
  it.each(GEOGRAPHIE_COURSES)("$title : identité correcte et repères uniquement en première leçon", async (entry) => {
    expect(entry.lessons).toHaveLength(3);
    expect(COURSE_INDEX.find(meta => meta.id === entry.id)?.lessons.map(lesson => lesson.id)).toEqual(entry.lessons.map(lesson => lesson.id));
    for (const [index, lesson] of entry.lessons.entries()) {
      await act(async () => root.render(createElement(LessonViewer, { ...props(index), courseId: entry.id, lesson })));
      expect(container.textContent).toContain(entry.title);
      expect(container.textContent).toContain(entry.emoji);
      expect(container.textContent).not.toContain(`Leçon ${index + 1} / 3`);
      expect(container.querySelector('[data-testid="legacy-card"]')).toBeNull();
      expect(container.textContent).toContain(lesson.title);
      const facts = lesson.blocks.find(block => block.type === "reperes");
      const hero = container.querySelector('[data-testid="geography-key-facts"]');
      if (index === 0) {
        expect(facts?.items).toHaveLength(4);
        expect(hero).not.toBeNull();
        for (const item of facts!.items) expect(hero!.textContent).toContain(item.valeur);
        const opening = lesson.blocks.find(block => block.type === "paragraphe")!;
        expect(container.textContent!.indexOf("Les repères essentiels")).toBeLessThan(container.textContent!.indexOf(stripInlineMarkers(opening.text)));
      } else {
        expect(facts).toBeUndefined();
        expect(hero).toBeNull();
      }
      for (const block of lesson.blocks) {
        if (block.type === "paragraphe" || block.type === "leSavaisTu") expect(container.textContent).toContain(stripInlineMarkers(block.text));
        if (block.type === "aRetenir") for (const point of block.points) expect(container.textContent).toContain(stripInlineMarkers(point));
        if (block.type === "chiffreCle") expect(container.textContent).toContain(block.valeur);
      }
      const sheet = JSON.parse(container.querySelector('[data-testid="geography-lesson-sheet"]')!.getAttribute("data-native-style")!);
      expect(sheet.width).toBe("100%");
      expect(sheet.flexShrink).toBe(0);
      expect(sheet.height).toBeUndefined();
      expect(sheet.maxHeight).toBeUndefined();
      expect(sheet.overflow).not.toBe("hidden");
      const words = lesson.blocks.flatMap(block => {
        if (block.type === "paragraphe" || block.type === "leSavaisTu") return [block.text];
        if (block.type === "aRetenir") return block.points;
        if (block.type === "reperes") return block.items.map(item => `${item.label} ${item.valeur}`);
        if (block.type === "chiffreCle") return [block.valeur, block.legende];
        return [];
      }).join(" ");
      expect(stripInlineMarkers(words).trim().split(/\s+/).length).toBeLessThanOrEqual(140);
    }
  });

  it("synchronise les quiz de géographie et leurs liens vers les leçons", () => {
    for (const entry of GEOGRAPHIE_COURSES) for (const question of entry.quiz) {
      const key = `${entry.id}:${question.id}`;
      const indexed = QUIZ_INDEX.find(item => item.key === key)!;
      expect(indexed, key).toBeDefined();
      expect(indexed.question, key).toBe(question.question);
      expect(indexed.options, key).toEqual(question.options);
      expect(indexed.correctIndex, key).toBe(question.correctIndex);
      expect(indexed.explanation, key).toBe(question.explanation);
      expect(indexed.lessonId, key).toBe(QUIZ_LESSON_MAP[key]);
      expect(entry.lessons.some(lesson => lesson.id === indexed.lessonId), key).toBe(true);
      if (/monnaie/i.test(question.question)) expect(indexed.lessonId, key).toBe(entry.lessons[0].id);
    }
  });

  it.each([0, 1, 2])("préserve tous les textes et les repères de la leçon %s", async (index) => {
    await act(async () => root.render(createElement(LessonViewer, props(index))));
    expect(container.textContent).toContain(course.lessons[index].title);
    expect(container.textContent).not.toContain(`Leçon ${index + 1} / 3`);
    for (const block of course.lessons[index].blocks) {
      if (block.type === "paragraphe" || block.type === "leSavaisTu") expect(container.textContent).toContain(stripInlineMarkers(block.text));
      if (block.type === "chiffreCle") { expect(container.textContent).toContain(block.valeur); expect(container.textContent).toContain(block.legende); }
      if (block.type === "reperes") for (const item of block.items) { expect(container.textContent).toContain(item.label); expect(container.textContent).toContain(item.valeur); }
      if (block.type === "aRetenir") for (const point of block.points) expect(container.textContent).toContain(stripInlineMarkers(point));
    }
    expect(container.textContent!.indexOf("Le savais-tu ?")).toBeLessThan(container.textContent!.indexOf("Ce que tu retiens"));
    expect(container.querySelector('[role="progressbar"]')?.getAttribute("aria-valuenow")).toBe(String(index + 1));
    expect(container.querySelector('[data-testid="legacy-card"]')).toBeNull();
  });

  it("conserve les actions précédente, suivante et fin de cours", async () => {
    await act(async () => root.render(createElement(LessonViewer, props())));
    const prev = () => container.querySelector<HTMLButtonElement>('button[aria-label="Leçon précédente"]')!;
    expect(prev().disabled).toBe(true);
    await act(async () => container.querySelector<HTMLButtonElement>('button[aria-label="Suivant →"]')!.click());
    expect(fixture.next).toHaveBeenCalledOnce();
    await act(async () => root.render(createElement(LessonViewer, props(1))));
    await act(async () => prev().click());
    expect(fixture.prev).toHaveBeenCalledOnce();
    await act(async () => root.render(createElement(LessonViewer, props(2))));
    await act(async () => container.querySelector<HTMLButtonElement>('button[aria-label="J\'ai terminé ✓"]')!.click());
    expect(fixture.next).toHaveBeenCalledTimes(2);
  });

  it("préserve le retour arrière et remonte en haut à la leçon suivante", async () => {
    await act(async () => root.render(createElement(LessonViewer, props(0, true))));
    expect(fixture.scroll).not.toHaveBeenCalled();
    await act(async () => root.render(createElement(LessonViewer, props(1, true))));
    expect(fixture.scroll).toHaveBeenCalledOnce();
    expect(fixture.announce).toHaveBeenLastCalledWith(course.lessons[1].title);
  });

  it("préserve les autres matières", async () => {
    await act(async () => root.render(createElement(LessonViewer, { ...props(), courseId: "course-perso-01", accentColor: "perso" })));
    expect(container.querySelector('[data-testid="legacy-card"]')).not.toBeNull();
    await act(async () => root.render(createElement(LessonViewer, { ...props(), courseId: "course-histoire-01-egypte-antique", accentColor: "histoire" })));
    expect(container.querySelector('[data-testid="history-reading"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="legacy-card"]')).toBeNull();
  });

  it("garde tout le contenu avec une taille de texte agrandie et un écran plus court", async () => {
    fixture.height = 667;
    fixture.fontScale = 1.8;
    await act(async () => root.render(createElement(LessonViewer, props(2))));
    expect(container.textContent).toContain("Saint-Louis");
    expect(container.textContent).toContain("J'ai terminé");
  });

  it("réunit les quatre repères dès la première leçon, sans répétition ensuite", async () => {
    await act(async () => root.render(createElement(LessonViewer, props(0))));
    const facts = container.querySelector('[data-testid="geography-key-facts"]')!;
    expect(facts.textContent).toContain("Les repères essentiels");
    for (const value of ["Dakar", "Franc CFA (XOF)", "République", "20 août 1960"]) expect(facts.textContent).toContain(value);
    expect(container.textContent!.indexOf("Les repères essentiels")).toBeLessThan(container.textContent!.indexOf("Sur la façade atlantique"));
    for (const index of [1, 2]) {
      await act(async () => root.render(createElement(LessonViewer, props(index))));
      expect(container.querySelector('[data-testid="geography-key-facts"]')).toBeNull();
    }
  });

  it("agrandit le cadre jusqu'au bas réel des boutons sans couper le contenu", async () => {
    await act(async () => root.render(createElement(LessonViewer, props(2))));
    const footer = fixture.layouts.get("geography-lesson-navigation")!;
    // Reproduce a long wrapped lesson whose footer would otherwise overflow its card.
    await act(async () => footer({ nativeEvent: { layout: { x: 12, y: 1000, width: 330, height: 52 } } }));
    const sheet = container.querySelector('[data-testid="geography-lesson-sheet"]')!;
    const style = JSON.parse(sheet.getAttribute("data-native-style")!);
    expect(style.minHeight).toBeGreaterThanOrEqual(1064);
    expect(style.width).toBe("100%");
    expect(style.flexShrink).toBe(0);
    expect(style.maxHeight).toBeUndefined();
    expect(style.overflow).not.toBe("hidden");
    // A different lesson must not inherit the former lesson's oversized minimum.
    await act(async () => root.render(createElement(LessonViewer, props(0))));
    const nextStyle = JSON.parse(container.querySelector('[data-testid="geography-lesson-sheet"]')!.getAttribute("data-native-style")!);
    expect(nextStyle.minHeight).toBeUndefined();
  });
});
