import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createAppStore } from "@/store/useAppStore";
import { progressTestEnvironment } from "@/store/progressTestEnvironment";
import { hasSeenOnboarding } from "@/lib/onboarding";
import { Onboarding } from "./Onboarding";

const fixtures = vi.hoisted(() => ({
  store: null as ReturnType<typeof createAppStore> | null,
}));
vi.mock("@/store/useAppStore", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/store/useAppStore")>();
  return {
    ...original,
    useAppStore: (selector: Parameters<typeof original.useAppStore>[0]) => fixtures.store!(selector),
  };
});

let root: Root;
let container: HTMLDivElement;
let env: ReturnType<typeof progressTestEnvironment>;
const onClose = vi.fn();

beforeEach(async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  localStorage.clear();
  onClose.mockClear();
  env = progressTestEnvironment();
  fixtures.store = createAppStore(env.environment);
  await fixtures.store.getState().retryPersistence();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

function render() {
  act(() => root.render(<Onboarding onClose={onClose} />));
}
function button(label: string) {
  const found = [...container.querySelectorAll("button")].find((b) => b.textContent?.includes(label));
  if (!found) throw new Error(`Bouton absent : ${label}`);
  return found;
}
async function click(label: string) {
  await act(async () => button(label).click());
}
async function showPreferences() {
  await click("Continuer");
  await click("Continuer");
}
async function reloadPreferences() {
  const reloaded = createAppStore(env.environment);
  await reloaded.getState().retryPersistence();
  return reloaded.getState().progress.preferredCategoryIds;
}

describe("Onboarding — préférences conservées et sauvegarde explicite", () => {
  it("préremplit le rejeu et Passer préserve les préférences malgré une sélection modifiée", async () => {
    await fixtures.store!.getState().setPreferredCategories(["histoire", "geo"]);
    render();
    await showPreferences();
    expect(button("Histoire").getAttribute("aria-pressed")).toBe("true");
    expect(button("Géographie").getAttribute("aria-pressed")).toBe("true");
    await click("Histoire");
    await click("Découverte");
    await click("Passer");
    expect(onClose).toHaveBeenCalledOnce();
    expect(hasSeenOnboarding()).toBe(true);
    expect(await reloadPreferences()).toEqual(["histoire", "geo"]);
  });

  it("Passer au premier écran d'un rejeu ne modifie pas les préférences", async () => {
    await fixtures.store!.getState().setPreferredCategories(["perso"]);
    render();
    await click("Passer");
    expect(await reloadPreferences()).toEqual(["perso"]);
  });

  it("un nouvel utilisateur peut passer sans sauvegarde de progression disponible", async () => {
    env.failWrite(true);
    render();
    await click("Passer");
    expect(onClose).toHaveBeenCalledOnce();
    expect(hasSeenOnboarding()).toBe(true);
    expect(fixtures.store!.getState().progress.preferredCategoryIds).toEqual([]);
  });

  it("la validation remplace explicitement la sélection précédente", async () => {
    await fixtures.store!.getState().setPreferredCategories(["histoire"]);
    render();
    await showPreferences();
    await click("Histoire");
    await click("Découverte");
    await click("C'est parti !");
    expect(onClose).toHaveBeenCalledOnce();
    expect(await reloadPreferences()).toEqual(["decouverte"]);
  });

  it("la validation autorise une sélection volontairement vide", async () => {
    await fixtures.store!.getState().setPreferredCategories(["histoire"]);
    render();
    await showPreferences();
    await click("Histoire");
    await click("C'est parti !");
    expect(onClose).toHaveBeenCalledOnce();
    expect(await reloadPreferences()).toEqual([]);
  });

  it("attend la sauvegarde et bloque les doubles validations et Passer pendant l'écriture", async () => {
    let release!: () => void;
    const gate = new Promise<void>((resolve) => { release = resolve; });
    const save = fixtures.store!.getState().setPreferredCategories;
    const saveSpy = vi.spyOn(fixtures.store!.getState(), "setPreferredCategories")
      .mockImplementation(async (ids) => { await gate; return save(ids); });
    render();
    await showPreferences();
    await click("Histoire");
    await act(async () => {
      button("C'est parti !").click();
      button("C'est parti !").click();
      button("Passer").click();
    });
    expect(saveSpy).toHaveBeenCalledOnce();
    expect(onClose).not.toHaveBeenCalled();
    expect(hasSeenOnboarding()).toBe(false);
    expect([...container.querySelectorAll("button")].every((b) => b.disabled)).toBe(true);
    await act(async () => { release(); });
    expect(onClose).toHaveBeenCalledOnce();
    expect(await reloadPreferences()).toEqual(["histoire"]);
  });

  it("une erreur conserve l'écran et les acquis, puis permet de réessayer", async () => {
    await fixtures.store!.getState().setPreferredCategories(["histoire"]);
    render();
    await showPreferences();
    await click("Histoire");
    await click("Géographie");
    env.failWrite(true);
    await click("C'est parti !");
    expect(onClose).not.toHaveBeenCalled();
    expect(hasSeenOnboarding()).toBe(false);
    expect(container.querySelector('[role="alert"]')).not.toBeNull();
    expect(fixtures.store!.getState().progress.preferredCategoryIds).toEqual(["histoire"]);
    env.failWrite(false);
    await click("C'est parti !");
    expect(onClose).toHaveBeenCalledOnce();
    expect(hasSeenOnboarding()).toBe(true);
    expect(await reloadPreferences()).toEqual(["geo"]);
  });
});
