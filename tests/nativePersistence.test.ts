import { describe, expect, it } from "vitest";
import { createAppStore } from "@/store/useAppStore";
import { createSerializedProgressEnvironment } from "@/platform/serializedProgress";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { XP_PER_LESSON } from "@/lib/gamification";
describe("native serialized progress", () => {
  it("keeps concurrent writes from two stores and credits a lesson only once", async () => {
    const data = new Map<string, string>();
    const environment = createSerializedProgressEnvironment({ getItem: (key) => data.get(key) ?? null, setItem: (key, value) => { data.set(key, value); } });
    const a = createAppStore(environment), b = createAppStore(environment);
    await Promise.all([a.getState().retryPersistence(), b.getState().retryPersistence()]);
    const course = COURSE_INDEX[0];
    await Promise.all([a.getState().setFavoriteCourse(COURSE_INDEX[0].id, true), b.getState().setFavoriteCourse(COURSE_INDEX[1].id, true)]);
    await Promise.all([a.getState().completeLesson(course.id, course.lessons[0].id), b.getState().completeLesson(course.id, course.lessons[0].id)]);
    await a.getState().refreshPersistence();
    expect(a.getState().progress.favoriteCourseIds).toEqual(expect.arrayContaining([COURSE_INDEX[0].id, COURSE_INDEX[1].id]));
    expect(a.getState().progress.totalLessonsLearned).toBe(1);
    expect(a.getState().progress.xp).toBe(XP_PER_LESSON);
  });
  it("releases the writer after a failed transaction", async () => {
    const environment = createSerializedProgressEnvironment({ getItem: () => null, setItem: () => {} });
    await expect(environment.exclusive(() => { throw new Error("failed write"); })).rejects.toThrow("failed write");
    await expect(environment.exclusive(() => "saved")).resolves.toBe("saved");
  });
});
