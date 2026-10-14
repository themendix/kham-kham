import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useStore, type StoreApi } from "zustand";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { createAppStore, type AppState } from "@/store/useAppStore";
import { progressTestEnvironment } from "@/store/progressTestEnvironment";
import { CourseDetailScreen } from "./CourseDetailScreen";
import { QuizPartieScreen } from "./QuizPartieScreen";
import { QUIZ_KEYS_BY_TERRITORY } from "@/data/quizKeys.generated";
import type { GameOutcome } from "@/lib/quizGame";
import type { QuizEntry } from "@/types";

const injected = vi.hoisted(() => ({
  store: undefined as unknown as StoreApi<AppState>,
  finishExternal: undefined as AppState["finishQuizGame"] | undefined,
}));
vi.mock("@/store/useAppStore", async (original) => ({
  ...await original<typeof import("@/store/useAppStore")>(),
  useAppStore: Object.assign((selector: (s: AppState) => unknown) => {
    const selected = useStore(injected.store, selector);
    return selected === injected.store.getState().finishQuizGame && injected.finishExternal ? injected.finishExternal : selected;
  }, { getState: () => injected.store.getState() }),
}));
vi.mock("@/data/courseContent", () => ({
  getCachedFullCourse: () => ({ id: "course-perso-voix-plumes-afrique", categoryId: "perso", title: "Cours test", description: "", emoji: "", xp: 50, lessons: [{ id: "lesson-perso-pionniers-nobel", title: "Leçon test", blocks: [] }], quiz: [] }),
  getFullCourse: vi.fn(),
}));
// Inspect the route's reward props independently from animations and presentation.
vi.mock("@/components/features/LearningDoneCard", () => ({
  LearningDoneCard: (props: { newRank: string; newLevel: number; rankedUp: boolean; levelUp: boolean; subject: { level: number } }) => <div data-testid="outcome">{JSON.stringify(props)}</div>,
}));
vi.mock("@/components/features/QuizGamePlayer", () => ({
  QuizGamePlayer: (props: { onFinish: (outcome: GameOutcome, missed: QuizEntry[]) => Promise<unknown> }) => <button onClick={() => { void props.onFinish({ mode: "blitz", correctCount: 0, bestStreak: 0, fastAnswers: 0, remainingLives: 3 }, []); }}>Terminer la partie test</button>,
}));
vi.mock("@/components/features/QuizGameOutcome", () => ({
  QuizGameOutcome: (props: { stars: number; previousRecord: number }) => <div data-testid="quiz-outcome">{JSON.stringify({ stars: props.stars, previousRecord: props.previousRecord })}</div>,
}));
let root: Root;
let container: HTMLDivElement;
beforeEach(() => {
  injected.finishExternal = undefined;
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", { configurable: true, value: vi.fn() });
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); vi.unstubAllGlobals(); vi.restoreAllMocks(); });

it("la célébration de A reste liée au commit de A après gain et refresh externe de B", async () => {
  const { environment } = progressTestEnvironment();
  const a = createAppStore(environment);
  const b = createAppStore(environment);
  injected.store = a;
  await a.getState().retryPersistence();
  await act(async () => root.render(<MemoryRouter initialEntries={["/cours/course-perso-voix-plumes-afrique"]}><Routes><Route path="/cours/:courseId" element={<CourseDetailScreen />} /></Routes></MemoryRouter>));
  const next = [...container.querySelectorAll("button")].find((btn) => btn.textContent?.includes("J'ai terminé"));
  expect(next).toBeDefined();
  await act(async () => { next!.click(); });
  const before = container.querySelector('[data-testid="outcome"]')?.textContent;
  expect(before).toBeTruthy();
  await act(async () => {
    await b.getState().addXp(10000);
    await a.getState().refreshPersistence();
  });
  expect(a.getState().progress.xp).toBe(10060);
  expect(a.getState().progress.rank).not.toBe("Curieux");
  expect(container.querySelector('[data-testid="outcome"]')?.textContent).toBe(before);
});

it("les étoiles de fin A utilisent son résultat confirmé quand getState a déjà reçu la partie B", async () => {
  const { environment } = progressTestEnvironment();
  const a = createAppStore(environment);
  const b = createAppStore(environment);
  injected.store = a;
  await a.getState().retryPersistence();
  injected.finishExternal = async (args) => {
    const ownResult = await a.getState().finishQuizGame(args);
    // B finishes before the route's continuation: A's live memory is already newer.
    await b.getState().recordQuizAnswer(QUIZ_KEYS_BY_TERRITORY.ouest[0], true, "b:0");
    await b.getState().finishQuizGame({ gameId: "b", cauris: 0, record: { territoryId: "ouest", mode: "blitz", score: 12 } });
    await a.getState().refreshPersistence();
    return ownResult;
  };
  await act(async () => root.render(<MemoryRouter initialEntries={["/quiz/ouest/blitz"]}><Routes><Route path="/quiz/:territoryId/:mode" element={<QuizPartieScreen />} /></Routes></MemoryRouter>));
  await act(async () => { container.querySelector<HTMLButtonElement>("button:last-child")!.click(); });
  expect(a.getState().progress.quizGame.records.ouest.blitz).toBe(12);
  expect(container.querySelector('[data-testid="quiz-outcome"]')?.textContent).toBe('{"stars":0,"previousRecord":0}');
});
