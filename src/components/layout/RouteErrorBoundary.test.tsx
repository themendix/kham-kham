import { act } from "react";
import { createRoot } from "react-dom/client";
import { expect, it, vi } from "vitest";
import { RouteErrorBoundary } from "./RouteErrorBoundary";

it("une route en échec garde une issue et un changement de route permet de repartir", () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  const report = vi.spyOn(console, "error").mockImplementation(() => {});
  const expectedError = (event: ErrorEvent) => { if (event.error?.message === "module indisponible") event.preventDefault(); };
  window.addEventListener("error", expectedError);
  const container = document.createElement("div");
  document.body.append(container);
  const root = createRoot(container);
  function Broken(): never { throw new Error("module indisponible"); }
  try {
    act(() => root.render(<RouteErrorBoundary key="broken"><Broken /></RouteErrorBoundary>));
    expect(container.querySelector('[role="alert"]')?.textContent).toContain("page n’a pas pu être affichée");
    expect(container.querySelector('a[href="/"]')).not.toBeNull();
    act(() => root.render(<RouteErrorBoundary key="home"><h1>Accueil</h1></RouteErrorBoundary>));
    expect(container.textContent).toBe("Accueil");
  } finally { act(() => root.unmount()); container.remove(); report.mockRestore(); window.removeEventListener("error", expectedError); }
});
