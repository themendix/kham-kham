import { act, StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { QuizEntry } from "@/types";
import { QuizGamePlayer } from "./QuizGamePlayer";
import { QuizPlayer } from "./QuizPlayer";

const question: QuizEntry = { key: "course:q", courseId: "course", categoryId: "histoire", lessonId: null, territories: [], question: "Question ?", options: ["Réponse A", "Réponse B"], correctIndex: 0, explanation: "Explication." };
let root: Root;
let container: HTMLDivElement;
beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => { act(() => root.unmount()); container.remove(); vi.unstubAllGlobals(); });
const button = (text: string) => {
  const found = [...container.querySelectorAll("button")].find((b) => b.textContent?.includes(text));
  if (!found) throw new Error(`Missing button ${text}`);
  return found;
};
const click = async (text: string) => { await act(async () => { button(text).click(); }); };
function deferred() {
  let resolve!: () => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<void>((ok, fail) => { resolve = ok; reject = fail; });
  return { promise, resolve, reject };
}

describe("quiz — attente de sauvegarde et réessai", () => {
  it("ne permet pas suivant/fin avant réponse confirmée, et garde un ID stable sur retry", async () => {
    const first = deferred();
    const onAnswer = vi.fn().mockReturnValueOnce(first.promise).mockResolvedValue(undefined);
    const onFinish = vi.fn().mockResolvedValue(undefined);
    act(() => root.render(<StrictMode><QuizGamePlayer gameId="partie" questions={[question, { ...question, key: "course:q2", question: "Deuxième ?" }]} mode="defi" onAnswer={onAnswer} onFinish={onFinish} /></StrictMode>));
    await click("Réponse A");
    expect(button("Question suivante").disabled).toBe(true);
    expect(container.textContent).toContain("0 bonne réponse");
    await act(async () => { first.reject(new Error("save failed")); });
    expect(button("Question suivante").disabled).toBe(true);
    expect(container.textContent).toContain("Question ?");
    await click("Réessayer");
    expect(onAnswer.mock.calls).toEqual([["course:q", true, "partie:0"], ["course:q", true, "partie:0"]]);
    expect(container.textContent).toContain("1 bonne réponse");
    await click("Question suivante");
    expect(container.textContent).toContain("Deuxième ?");
    expect(onFinish).not.toHaveBeenCalled();
  });
  it("fin en échec reste réessayable, aucun double appel pendant pending", async () => {
    const first = deferred();
    const onFinish = vi.fn().mockReturnValueOnce(first.promise).mockResolvedValue(undefined);
    const onAnswer = vi.fn().mockResolvedValue(undefined);
    act(() => root.render(<QuizGamePlayer gameId="partie" questions={[question]} mode="defi" onAnswer={onAnswer} onFinish={onFinish} />));
    await click("Réponse A");
    await click("Voir mon résultat");
    await click("Voir mon résultat");
    expect(onFinish).toHaveBeenCalledTimes(1);
    await act(async () => { first.reject(new Error("save failed")); });
    await click("Réessayer");
    expect(onFinish).toHaveBeenCalledTimes(2);
    expect(onFinish.mock.calls[0]).toEqual(onFinish.mock.calls[1]);
    await click("Voir mon résultat");
    expect(onFinish).toHaveBeenCalledTimes(2);
  });
  it("quiz cours : résultat/navigation attendus, échec réessayable et single-flight", async () => {
    const first = deferred();
    const onFinish = vi.fn().mockReturnValueOnce(first.promise).mockResolvedValue(undefined);
    act(() => root.render(<QuizPlayer questions={[{ ...question, id: "q" }]} accentColor="histoire" onFinish={onFinish} />));
    await click("Réponse A");
    await click("Voir mon résultat");
    expect(button("Voir mon résultat").disabled).toBe(true);
    await act(async () => { first.reject(new Error("save failed")); });
    await click("Réessayer");
    expect(onFinish.mock.calls).toEqual([[1, 1], [1, 1]]);
    await click("Voir mon résultat");
    expect(onFinish).toHaveBeenCalledTimes(2);
  });
});
