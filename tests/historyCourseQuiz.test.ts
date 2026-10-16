import { act, createElement, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CourseDetailScreen } from "../src/screens/CourseDetailScreen";
import { HistoryLearningDone } from "../src/components/features/HistoryLearningDone";
import { HistoryLevelUp } from "../src/components/features/HistoryLevelUp";
import type { SubjectProgress } from "../src/lib/subjectProgress";

const fixture = vi.hoisted(() => {
  const before = { completedCourseIds: [], completedLessonIds: [], startedCourseIds: [], completedParcoursIds: [], rank: "Curieux", level: 1, streak: { lastActiveDate: null } };
  const after = { ...before, completedCourseIds: ["histoire-test"], streak: { lastActiveDate: "2026-10-16" } };
  return {
    before, after,
    course: { id: "histoire-test", categoryId: "histoire", title: "La bataille d’Adoua", xp: 50, lessons: [{ id: "lesson-1", title: "Adoua", blocks: [] }], quiz: [
      { id: "q1", question: "Quelle puissance ?", options: ["L’Italie", "La France"], correctIndex: 0, explanation: "L’Italie voulait coloniser l’Éthiopie." },
      { id: "q2", question: "Quel empereur ?", options: ["Ménélik II", "Ezana"], correctIndex: 0, explanation: "Ménélik II a mené la résistance." },
    ] },
    navigate: vi.fn(), record: vi.fn(), scroll: vi.fn(), setLast: vi.fn(), finish: vi.fn(), reducedMotion: true,
  };
});

// Render native primitives as DOM controls to exercise the real quiz and route handlers.
vi.mock("react-native", async () => {
  const { createElement: h } = await import("react");
  type Props = { children?: ReactNode | ((state: { pressed: boolean }) => ReactNode); style?: Record<string, unknown> | Record<string, unknown>[]; accessibilityRole?: string; accessibilityLabel?: string; accessibilityState?: { disabled?: boolean; checked?: boolean }; accessibilityLiveRegion?: string; onPress?: () => void; disabled?: boolean };
  const View = (p: Props) => {
    const style = Object.assign({}, ...(Array.isArray(p.style) ? p.style : [p.style]));
    return h("div", { role: p.accessibilityRole, "aria-label": p.accessibilityLabel, "aria-live": p.accessibilityLiveRegion, ...(style.width !== undefined ? { style: { width: style.width } } : {}) }, p.children as ReactNode);
  };
  type Done = (result: { finished: boolean }) => void;
  type Animation = { start: (done?: Done) => void; stop: () => void };
  class Value {
    constructor(public value: number) {}
    setValue(value: number) { this.value = value; }
    interpolate() { return this.value; }
  }
  const timing = (value: Value | null, config: { duration?: number; toValue?: number }): Animation => {
    let timer: ReturnType<typeof setTimeout>;
    return { start(done) { timer = setTimeout(() => { if (value) value.setValue(config.toValue!); done?.({ finished: true }); }, config.duration ?? 400); }, stop() { clearTimeout(timer); } };
  };
  const sequence = (steps: Animation[]): Animation => {
    let stopped = false;
    return { start(done) {
      stopped = false;
      let index = 0;
      const next = () => { if (stopped) return; if (index === steps.length) { done?.({ finished: true }); return; } steps[index++].start(next); };
      next();
    }, stop() { stopped = true; steps.forEach((step) => step.stop()); } };
  };
  const parallel = (steps: Animation[]): Animation => {
    let stopped = false;
    return { start(done) {
      stopped = false;
      let remaining = steps.length;
      steps.forEach((step) => step.start(() => { if (!stopped && --remaining === 0) done?.({ finished: true }); }));
    }, stop() { stopped = true; steps.forEach((step) => step.stop()); } };
  };
  return {
    View, Text: (p: Props) => h("span", null, p.children as ReactNode),
    Pressable: (p: Props) => h("button", { onClick: p.onPress, disabled: p.disabled, role: p.accessibilityRole, "aria-label": p.accessibilityLabel, "aria-checked": p.accessibilityState?.checked }, typeof p.children === "function" ? p.children({ pressed: false }) : p.children),
    StyleSheet: { create: (styles: unknown) => styles },
    useWindowDimensions: () => ({ width: 390, height: 844, fontScale: 1 }),
    Animated: { View, Value, timing, spring: timing, delay: (duration: number) => timing(null, { duration }), sequence, parallel, createAnimatedComponent: (component: unknown) => component },
    Easing: { cubic: (t: number) => t ** 3, quad: (t: number) => t ** 2, out: (easing: unknown) => easing },
  };
});
vi.mock("react-native-svg", () => ({ default: (p: { children: ReactNode }) => createElement("div", null, p.children), Circle: () => null }));
vi.mock("lucide-react-native", () => ({ ArrowLeft: () => null, ArrowRight: () => null, Check: () => null, Landmark: () => null, RotateCcw: () => null, Sparkles: () => null, Star: () => null, Trophy: () => null, X: () => null }));
vi.mock("@/components/features/HomeUi", () => ({
  HomeText: (p: { children: ReactNode }) => createElement("span", null, p.children),
  homeColors: { cream: "#f6eedd", ink: "#1e1b18", gold: "#f2b705", card: "#fff", muted: "#5c554b", success: "#2e8b57", primaryText: "#b53d22" },
}));
vi.mock("@/native/elements", () => {
  const Box = (p: { children: ReactNode }) => createElement("div", null, p.children);
  return { NativeBox: Box, NativeH1: Box, NativeH2: Box, NativeParagraph: Box, NativeSpan: Box, NativeImage: () => null, NativeButton: (p: { children: ReactNode; onClick: () => void }) => createElement("button", { onClick: p.onClick }, p.children) };
});
vi.mock("@/native/icons", () => ({ ArrowLeft: () => null, ArrowRight: () => null, Check: () => null }));
vi.mock("@/hooks/useReducedMotion", () => ({ useReducedMotion: () => fixture.reducedMotion }));
vi.mock("@/native/router", () => ({ useNavigate: () => fixture.navigate, useParams: () => ({ courseId: fixture.course.id }), useNavigationType: () => "PUSH", Link: (p: { children: ReactNode }) => p.children }));
vi.mock("@/native/scroll", () => ({ scrollToTop: () => fixture.scroll() }));
vi.mock("@/data/courseContent", () => ({ getCachedFullCourse: () => fixture.course, getFullCourse: async () => fixture.course }));
vi.mock("@/data/coursesIndex.generated", () => ({ COURSE_INDEX: [fixture.course, { id: "old-1", categoryId: "histoire", xp: 50 }, { id: "old-2", categoryId: "histoire", xp: 50 }] }));
vi.mock("@/data/categories", () => ({ getCategory: () => ({ id: "histoire", name: "Histoire", color: "histoire" }) }));
vi.mock("@/data/parcours", () => ({ PARCOURS: [] }));
vi.mock("@/store/useAppStore", () => ({ useAppStore: (selector: (state: unknown) => unknown) => selector({ progress: fixture.before, finishLearning: fixture.finish, recordQuizResult: fixture.record, setLastCourse: fixture.setLast, completeLesson: vi.fn() }) }));
vi.mock("@/components/features/LessonViewer", () => ({ LessonViewer: (p: { onNext: () => void }) => createElement("button", { onClick: p.onNext }, "Terminer les leçons") }));
vi.mock("@/components/features/CollectionProgressCard", () => ({ CollectionProgressCard: () => null }));
vi.mock("@/components/features/QuizOutcomeCard", () => ({ QuizOutcomeCard: () => null }));
vi.mock("@/components/features/StreakCelebration", () => ({ StreakCelebration: () => createElement("div", null, "Série quotidienne") }));
vi.mock("@/components/features/ContentLoadError", () => ({ ContentLoadError: () => null }));
vi.mock("@/components/ui/Card", () => ({ Card: () => null }));
vi.mock("@/components/ui/Button", () => ({ Button: () => null }));
vi.mock("@/components/ui/ProgressBar", () => ({ ProgressBar: () => null }));
vi.mock("@/components/features/QuizOptions", () => ({ QuizOptions: () => null }));

let root: Root;
let container: HTMLDivElement;
function button(text: string) {
  const found = [...container.querySelectorAll("button")].find((b) => b.textContent?.includes(text));
  if (!found) throw new Error(`Bouton absent : ${text}`);
  return found;
}
async function click(text: string) { await act(async () => button(text).click()); }
async function startQuiz() {
  await act(async () => root.render(createElement(CourseDetailScreen)));
  await click("Terminer les leçons");
  await click("Passer au quiz");
}
async function finishQuiz() {
  await click("L’Italie");
  await click("Question suivante");
  await click("Ezana");
  await click("Voir mon résultat");
}
beforeEach(() => {
  vi.clearAllMocks();
  fixture.reducedMotion = true;
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  fixture.finish.mockResolvedValue({ before: fixture.before, progress: fixture.after });
  fixture.record.mockResolvedValue(undefined);
  fixture.setLast.mockResolvedValue(undefined);
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); vi.useRealTimers(); vi.unstubAllGlobals(); });

describe("quiz de fin de cours d’Histoire", () => {
  it("affiche la récompense confirmée et revient aux cours depuis le nouvel écran de fin", async () => {
    await act(async () => root.render(createElement(CourseDetailScreen)));
    await click("Terminer les leçons");
    expect(container.textContent).toContain("Cours terminé !");
    expect(container.textContent).toContain("+50 XP");
    expect(container.textContent).toContain("1 / 3 cours");
    expect(container.textContent).toContain("Encore 2 cours pour atteindre le niveau 2.");
    await click("Retour aux cours d’Histoire");
    expect(fixture.navigate).toHaveBeenCalledWith("/biblio/histoire");
  });

  it("ne présente aucun nouveau gain d’XP en révision", async () => {
    fixture.finish.mockResolvedValue({ before: fixture.after, progress: fixture.after });
    await act(async () => root.render(createElement(CourseDetailScreen)));
    await click("Terminer les leçons");
    expect(container.textContent).toContain("Révision");
    expect(container.textContent).toContain("ont déjà été gagnés");
    expect(container.textContent).not.toContain("+50 XP");
    await click("Retour au cours");
    expect(container.textContent).toContain("Terminer les leçons");
  });

  it("remplit le niveau atteint et conserve la célébration avant le quiz", async () => {
    fixture.finish.mockResolvedValue({ before: { ...fixture.before, completedCourseIds: ["old-1", "old-2"] }, progress: { ...fixture.after, completedCourseIds: ["old-1", "old-2", fixture.course.id] } });
    await act(async () => root.render(createElement(CourseDetailScreen)));
    await click("Terminer les leçons");
    expect(container.textContent).toContain("3 / 3 cours");
    expect(container.textContent).toContain("Niveau 2 atteint !");
    expect(container.querySelector<HTMLElement>('[role="progressbar"] > div')?.style.width).toBe("100%");
    await click("Continuer");
    expect(container.textContent).toContain("supérieur !");
    expect(container.textContent).toContain("Tu progresses en Histoire !");
    await click("Passer au quiz");
    expect(container.textContent).toContain("À toi de jouer");
  });

  it("corrige immédiatement, verrouille le choix et enregistre le score réel avant le résultat", async () => {
    await startQuiz();
    expect(container.textContent).toContain("À toi de jouer");
    expect(container.textContent).not.toContain("Question suivante");
    await click("L’Italie");
    expect(container.textContent).toContain("Bonne réponse !");
    expect(container.textContent).toContain(fixture.course.quiz[0].explanation);
    expect(button("La France").disabled).toBe(true);
    await click("La France");
    await click("Question suivante");
    expect(container.textContent).toContain("2 / 2");
    await click("Ezana");
    expect(container.textContent).toContain("Pas tout à fait");
    expect(button("Ménélik II").getAttribute("aria-label")).toContain("bonne réponse");
    await click("Voir mon résultat");
    expect(fixture.record).toHaveBeenCalledWith(expect.objectContaining({ courseId: fixture.course.id, score: 1, total: 2 }), expect.stringMatching(/^result:/));
    expect(container.textContent).toContain("1 / 2");
    expect(container.textContent).not.toContain("Retour à l’accueil");
    await click("Retour aux cours d’Histoire");
    // The daily streak advanced too: the result button must still open History directly.
    expect(fixture.navigate).toHaveBeenCalledWith("/biblio/histoire");
  });

  it("reprend un quiz vierge avec un nouvel identifiant quand on le refait", async () => {
    await startQuiz();
    await finishQuiz();
    const firstId = fixture.record.mock.calls[0][1];
    await click("Refaire le quiz");
    expect(container.textContent).toContain("1 / 2");
    expect(container.textContent).not.toContain("Bonne réponse !");
    expect(button("L’Italie").disabled).toBe(false);
    await finishQuiz();
    expect(fixture.record).toHaveBeenCalledTimes(2);
    expect(fixture.record.mock.calls[1][1]).not.toBe(firstId);
    expect(fixture.record.mock.calls[1][0].score).toBe(1);
  });

  it("attend la sauvegarde et permet de réessayer sans compter deux fois le résultat", async () => {
    let reject!: (error: Error) => void;
    fixture.record.mockReturnValueOnce(new Promise<void>((_resolve, fail) => { reject = fail; }));
    await startQuiz();
    await finishQuiz();
    expect(button("Enregistrement").disabled).toBe(true);
    expect(container.textContent).not.toContain("Refaire le quiz");
    await act(async () => reject(new Error("hors ligne")));
    expect(container.textContent).toContain("n’a pas pu être enregistré");
    await click("Réessayer");
    expect(fixture.record).toHaveBeenCalledTimes(2);
    expect(fixture.record.mock.calls[1][1]).toBe(fixture.record.mock.calls[0][1]);
    expect(container.textContent).toContain("Refaire le quiz");
  });

  it("revient à la lecture via le bouton supérieur et donne un nouvel essai après relecture", async () => {
    await startQuiz();
    await finishQuiz();
    const firstId = fixture.record.mock.calls[0][1];
    await click("Retour au cours");
    expect(container.textContent).toContain("Terminer les leçons");
    await click("Terminer les leçons");
    await click("Passer au quiz");
    await finishQuiz();
    expect(fixture.record.mock.calls[1][1]).not.toBe(firstId);
  });
});

describe("célébration du nouveau niveau Histoire", () => {
  function renderLevel() {
    const onPrimary = vi.fn();
    const onSecondary = vi.fn();
    act(() => root.render(createElement(HistoryLevelUp, { fromLevel: 4, toLevel: 5, primaryLabel: "Passer au quiz →", onPrimary, onSecondary })));
    return { onPrimary, onSecondary };
  }

  it("révèle le nouveau niveau avant de rendre les boutons utilisables", async () => {
    fixture.reducedMotion = false;
    vi.useFakeTimers();
    const { onPrimary, onSecondary } = renderLevel();
    expect(container.textContent).toContain("Un nouveau cap se prépare");
    expect(button("Passer au quiz").disabled).toBe(true);
    await click("Passer au quiz");
    expect(onPrimary).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(900));
    expect(container.textContent).toContain("Niveau 5 débloqué !");
    expect(button("Passer au quiz").disabled).toBe(true);
    act(() => vi.advanceTimersByTime(900));
    expect(container.textContent).toContain("Tu progresses en Histoire !");
    expect(button("Passer au quiz").disabled).toBe(false);
    await click("Passer au quiz");
    await click("Retour aux cours d’Histoire");
    expect(onPrimary).toHaveBeenCalledTimes(1);
    expect(onSecondary).toHaveBeenCalledTimes(1);
  });

  it("laisse les actions immédiatement disponibles si les animations sont réduites", () => {
    vi.useFakeTimers();
    renderLevel();
    expect(container.textContent).toContain("Tu progresses en Histoire !");
    expect(button("Passer au quiz").disabled).toBe(false);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("arrête les animations si on quitte l’écran pendant les confettis", () => {
    fixture.reducedMotion = false;
    vi.useFakeTimers();
    renderLevel();
    act(() => vi.advanceTimersByTime(1000));
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    act(() => root.render(null));
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe("remplissage de la barre Histoire", () => {
  function renderProgress(beforeCount: number, afterCount: number, revision = false) {
    const subject = (count: number): SubjectProgress => ({ totalCount: 40, completedCount: count, startedCount: 0, xp: count * 50, level: Math.floor(count / 3) + 1, progressPct: (count % 3) / 3 * 100, coursesIntoLevel: count % 3 });
    act(() => root.render(createElement(HistoryLearningDone, { courseTitle: "Adoua", xpDisplayed: 50, isRevision: revision, subject: subject(afterCount), subjectBefore: subject(beforeCount), rankedUp: false, newRank: "Curieux", levelUp: false, newLevel: 1, primaryLabel: "Passer au quiz", onPrimary: vi.fn() })));
  }
  const fill = () => Number.parseFloat(container.querySelector<HTMLElement>('[role="progressbar"] > div')!.style.width);
  function prepareAnimation() {
    fixture.reducedMotion = false;
    vi.useFakeTimers();
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => setTimeout(() => callback(performance.now()), 16));
    vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));
  }
  it.each([[0, 1, 100 / 3], [1, 2, 200 / 3], [2, 3, 100]])("anime le passage de %i à %i cours jusqu’à la bonne valeur", (before, after, target) => {
    prepareAnimation();
    renderProgress(before, after);
    const initial = fill();
    expect(initial).toBeCloseTo((before % 3) / 3 * 100);
    act(() => vi.advanceTimersByTime(700));
    expect(fill()).toBeGreaterThan(initial);
    expect(fill()).toBeLessThan(target);
    act(() => vi.advanceTimersByTime(700));
    expect(fill()).toBeCloseTo(target);
  });
  it("garde la progression stable en révision", () => {
    prepareAnimation();
    renderProgress(1, 1, true);
    expect(fill()).toBeCloseTo(100 / 3);
    expect(vi.getTimerCount()).toBe(0);
  });
  it("affiche directement la valeur finale avec la réduction des animations", () => {
    vi.useFakeTimers();
    renderProgress(0, 1);
    expect(fill()).toBeCloseTo(100 / 3);
    expect(vi.getTimerCount()).toBe(0);
  });
});
