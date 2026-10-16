import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useCivilDay } from "./useCivilDay";

let root: Root;
let container: HTMLDivElement;
function Clock() { return <output>{useCivilDay()}</output>; }
beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 2, 28, 23, 59, 59));
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
  act(() => root.render(<Clock />));
});
afterEach(() => { act(() => root.unmount()); container.remove(); vi.useRealTimers(); });

describe("horloge de l'interface", () => {
  it("actualise au minuit local et recalcule le suivant à travers le changement d'heure", () => {
    act(() => vi.advanceTimersByTime(1000));
    expect(container.textContent).toBe("2026-03-29");
    const untilNext = new Date(2026, 2, 30).getTime() - Date.now();
    act(() => vi.advanceTimersByTime(untilNext));
    expect(container.textContent).toBe("2026-03-30");
    expect(vi.getTimerCount()).toBe(1);
  });
  it("rattrape une suspension et un recul d'horloge au retour sur la page", () => {
    vi.setSystemTime(new Date(2026, 3, 2, 10));
    act(() => window.dispatchEvent(new Event("pageshow")));
    expect(container.textContent).toBe("2026-04-02");
    vi.setSystemTime(new Date(2026, 3, 1, 10));
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(container.textContent).toBe("2026-04-01");
    expect(vi.getTimerCount()).toBe(1);
  });
  it("retire son minuteur et ses écouteurs au démontage", () => {
    act(() => root.render(null));
    expect(vi.getTimerCount()).toBe(0);
    act(() => window.dispatchEvent(new Event("pageshow")));
    expect(vi.getTimerCount()).toBe(0);
  });
});
