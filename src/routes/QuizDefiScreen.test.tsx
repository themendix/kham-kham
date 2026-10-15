import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createAppStore } from "@/store/useAppStore";
import { progressTestEnvironment } from "@/store/progressTestEnvironment";
import type { QuizEntry } from "@/types";
import type { GameOutcome } from "@/lib/quizGame";
import { QuizDefiScreen } from "./QuizDefiScreen";

const fixtures = vi.hoisted(() => ({ store: null as ReturnType<typeof createAppStore> | null }));
vi.mock("@/store/useAppStore", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/store/useAppStore")>();
  return { ...original, useAppStore: Object.assign(
    (selector: Parameters<typeof original.useAppStore>[0]) => fixtures.store!(selector),
    { getState: () => fixtures.store!.getState() },
  ) };
});
vi.mock("@/components/features/QuizGamePlayer", () => ({
  QuizGamePlayer: ({ gameId, questions, onFinish }: { gameId: string; questions: QuizEntry[]; onFinish: (outcome: GameOutcome, missed: QuizEntry[]) => Promise<void> }) => (
    <div data-game={gameId} data-questions={questions.map((q) => q.key).join(",")}>
      <button onClick={() => void onFinish({ mode: "defi", correctCount: 0, bestStreak: 0, fastAnswers: 0, remainingLives: 0 }, [])}>Terminer à 0/5</button>
    </div>
  ),
}));
vi.mock("@/components/features/QuizGameOutcome", () => ({
  QuizGameOutcome: ({ xpBonus }: { xpBonus: number }) => <output>Résultat : {xpBonus} XP</output>,
}));
let root: Root;
let container: HTMLDivElement;
const zero = { courseId: "defi-quotidien", score: 0, total: 5, date: "2026-03-30T23:59:59Z" };
beforeEach(async () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 2, 30, 23, 59, 59));
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  fixtures.store = createAppStore(progressTestEnvironment().environment);
  await fixtures.store.getState().retryPersistence();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); vi.useRealTimers(); });
async function render() { await act(async () => root.render(<MemoryRouter><QuizDefiScreen /></MemoryRouter>)); }
async function midnight() { await act(async () => { vi.advanceTimersByTime(1000); }); }

describe("défi ouvert pendant le changement de jour", () => {
  it("un écran verrouillé se débloque à minuit et ouvre la partie du nouveau jour", async () => {
    await fixtures.store!.getState().finishDailyChallenge("yesterday", zero, 0);
    await render();
    expect(container.textContent).toContain("Défi déjà relevé");
    await midnight();
    expect(container.querySelector("[data-game]")).not.toBeNull();
    expect(container.textContent).not.toContain("Défi déjà relevé");
    expect(fixtures.store!.getState().progress.xp).toBe(30);
  });
  it("une partie active garde identifiant et questions, puis paie le jour de fin même à 0/5", async () => {
    await render();
    const game = container.querySelector("[data-game]")!;
    const id = game.getAttribute("data-game");
    const questions = game.getAttribute("data-questions");
    await midnight();
    expect(container.querySelector("[data-game]")?.getAttribute("data-game")).toBe(id);
    expect(container.querySelector("[data-game]")?.getAttribute("data-questions")).toBe(questions);
    await act(async () => container.querySelector("[data-game] button")!.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    expect(container.textContent).toContain("Résultat : 30 XP");
    expect(fixtures.store!.getState().progress.daily).toMatchObject({ date: "2026-03-31", challengeDone: true });
  });
  it("un résultat d'hier est remplacé au nouveau jour, sans redonner sa récompense", async () => {
    await render();
    const id = container.querySelector("[data-game]")!.getAttribute("data-game");
    await act(async () => container.querySelector("[data-game] button")!.dispatchEvent(new MouseEvent("click", { bubbles: true })));
    expect(container.textContent).toContain("Résultat : 30 XP");
    await midnight();
    expect(container.querySelector("[data-game]")?.getAttribute("data-game")).not.toBe(id);
    expect(container.textContent).not.toContain("Résultat :");
    expect(fixtures.store!.getState().progress.xp).toBe(30);
  });
});
