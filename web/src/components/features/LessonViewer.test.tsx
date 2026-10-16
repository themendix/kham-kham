import { act, StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Lesson } from "@/types";
import { LessonViewer } from "@/components/features/LessonViewer";

const lessons: Lesson[] = [
  { id: "lesson-1", title: "Première leçon", blocks: [] },
  { id: "lesson-2", title: "Deuxième leçon", blocks: [] },
];

let container: HTMLDivElement;
let root: Root;
const scrollIntoView = vi.fn();
const originalScrollIntoView = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "scrollIntoView");

beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    configurable: true,
    value: scrollIntoView,
  });
  scrollIntoView.mockClear();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  if (originalScrollIntoView) {
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", originalScrollIntoView);
  } else {
    Reflect.deleteProperty(HTMLElement.prototype, "scrollIntoView");
  }
});

function renderReading(index: number, courseId = "course-1", preserveInitialScroll = false) {
  act(() => {
    root.render(
      <StrictMode>
        <LessonViewer
          courseId={courseId}
          lesson={lessons[index]}
          lessonIndex={index}
          totalLessons={lessons.length}
          accentColor="histoire"
          onPrev={() => renderReading(index - 1, courseId, preserveInitialScroll)}
          onNext={() => renderReading(index + 1, courseId, preserveInitialScroll)}
          nextLabel="Suivant"
          preserveInitialScroll={preserveInitialScroll}
        />
      </StrictMode>,
    );
  });
}

describe("LessonViewer : position de lecture", () => {
  it("focalise le titre rendu sur suivant/précédent et ignore un simple nouveau rendu", () => {
    renderReading(0);
    expect(document.activeElement?.textContent).toBe("Première leçon");
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    renderReading(0);
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    act(() => container.querySelectorAll("button")[1].click());
    expect(document.activeElement?.textContent).toBe("Deuxième leçon");
    act(() => container.querySelectorAll("button")[0].click());
    expect(document.activeElement?.textContent).toBe("Première leçon");
    expect(scrollIntoView).toHaveBeenCalledTimes(3);
    expect(scrollIntoView).toHaveBeenLastCalledWith({ block: "start", behavior: "instant" });
  });

  it("distingue deux cours réutilisant le même identifiant de leçon", () => {
    renderReading(0);
    renderReading(0, "course-2");
    expect(scrollIntoView).toHaveBeenCalledTimes(2);
    expect(document.activeElement).toBe(container.querySelector("h2"));
  });

  it("préserve la restauration POP initiale puis focalise la pagination", () => {
    renderReading(0, "course-1", true);
    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(document.activeElement).not.toBe(container.querySelector("h2"));
    act(() => container.querySelectorAll("button")[1].click());
    expect(document.activeElement?.textContent).toBe("Deuxième leçon");
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });
});
