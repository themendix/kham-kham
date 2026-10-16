import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, createElement, useLayoutEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { useContentResource } from "../src/hooks/useContentResource";

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
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

describe("chargement des leçons", () => {
  it("affiche le cours si le préchargement termine entre le rendu et l'effet", async () => {
    const cache = new Map<string, string>();
    const getCached = (key: string) => cache.get(key);
    const load = vi.fn(async () => "cours chargé");
    function Lesson() {
      const resource = useContentResource("histoire", getCached, load);
      useLayoutEffect(() => { cache.set("histoire", "cours préchargé"); }, []);
      return createElement("p", null, `${resource.status}:${resource.value ?? ""}`);
    }
    await act(async () => root.render(createElement(Lesson)));
    expect(container.textContent).toBe("ready:cours préchargé");
    expect(load).not.toHaveBeenCalled();
  });

  it("affiche immédiatement un cours en cache sans le recharger", async () => {
    const getCached = () => "cours en cache";
    const load = vi.fn(async () => "cours distant");
    function Lesson() {
      const resource = useContentResource("histoire", getCached, load);
      return createElement("p", null, `${resource.status}:${resource.value}`);
    }
    await act(async () => root.render(createElement(Lesson)));
    expect(container.textContent).toBe("ready:cours en cache");
    expect(load).not.toHaveBeenCalled();
  });

  it("permet de réessayer après une erreur de chargement", async () => {
    const getCached = () => undefined;
    const load = vi.fn<() => Promise<string>>().mockRejectedValueOnce(new Error("hors ligne")).mockResolvedValueOnce("cours chargé");
    let retry: () => void;
    function Lesson() {
      const resource = useContentResource("histoire", getCached, load);
      retry = resource.retry;
      return createElement("p", null, `${resource.status}:${resource.value ?? ""}`);
    }
    await act(async () => root.render(createElement(Lesson)));
    expect(container.textContent).toBe("error:");
    await act(async () => retry());
    expect(container.textContent).toBe("ready:cours chargé");
    expect(load).toHaveBeenCalledTimes(2);
  });
});
