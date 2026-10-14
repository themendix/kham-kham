import { describe, expect, it } from "vitest";
import { createAppStore, migrate } from "./useAppStore";
import { LEGACY_PROGRESS_KEY, PROGRESS_KEY, ProgressError, browserProgressEnvironment } from "./progressPersistence";
import { progressTestEnvironment } from "./progressTestEnvironment";
import { toISODate } from "@/lib/gamification";

const question = "course-histoire-05-empire-du-ghana:quiz-histoire-05-1";
const result = { courseId: "defi-quotidien", score: 0, total: 5, date: "2026-10-12T10:00:00.000Z" };
const legacy = (progress = migrate(undefined).progress, version = 10) => JSON.stringify({ version, state: { progress } });
const pair = () => {
  const fake = progressTestEnvironment();
  return { ...fake, a: createAppStore(fake.environment), b: createAppStore(fake.environment) };
};

describe("progression coordonnée — deux clients sans événement storage", () => {
  it("préserve ajout puis retrait d’un favori malgré les réponses d’un onglet ancien et un reload", async () => {
    const { a, b, environment } = pair();
    await Promise.all([a.getState().retryPersistence(), b.getState().retryPersistence()]);
    await a.getState().setFavoriteCourse("favori", true);
    expect(b.getState().progress.favoriteCourseIds).toEqual([]);
    await b.getState().recordQuizAnswer(question, true, "b:0");
    expect(b.getState().progress.favoriteCourseIds).toEqual(["favori"]);
    await a.getState().setFavoriteCourse("favori", false);
    await b.getState().recordQuizAnswer(question, true, "b:1");
    const reload = createAppStore(environment);
    await reload.getState().retryPersistence();
    expect(reload.getState().progress.favoriteCourseIds).toEqual([]);
    expect(reload.getState().progress.quizGame.questions[question].correct).toBe(2);
    expect(reload.getState().progress.xp).toBe(5);
  });
  it("additionne les gains indépendants et conserve les autres champs sous concurrence", async () => {
    const { a, b } = pair();
    await Promise.all([a.getState().addXp(17), b.getState().addXp(23), a.getState().setPreferredCategories(["histoire"]), b.getState().dismissCourse("dismiss")]);
    await a.getState().retryPersistence();
    expect(a.getState().progress.xp).toBe(40);
    expect(a.getState().progress.preferredCategoryIds).toEqual(["histoire"]);
    expect(a.getState().progress.dismissedCourseIds).toEqual(["dismiss"]);
  });
  it("capture l’intention favori au geste, avant la file d’attente", async () => {
    const { a, b } = pair();
    await Promise.all([a.getState().toggleFavoriteCourse("cours"), b.getState().toggleFavoriteCourse("cours")]);
    expect(b.getState().progress.favoriteCourseIds).toEqual(["cours"]);
    await Promise.all([a.getState().toggleFavoriteCourse("cours"), b.getState().toggleFavoriteCourse("cours")]);
    expect(b.getState().progress.favoriteCourseIds).toEqual([]);
  });
  it("déduplique une réponse stable et distingue deux réponses réelles", async () => {
    const { a, b } = pair();
    await Promise.all([a.getState().recordQuizAnswer(question, true, "partie:0"), b.getState().recordQuizAnswer(question, true, "partie:0")]);
    await b.getState().recordQuizAnswer(question, true, "partie:1");
    expect(b.getState().progress.quizGame.questions[question].correct).toBe(2);
    expect(b.getState().progress.xp).toBe(5);
  });
  it("fin quotidienne atomique : deux parties concurrentes, callback rejoué, paiement unique et réponses conservées", async () => {
    const { a, b, writes } = pair();
    await a.getState().recordQuizAnswer(question, false, "answer");
    const beforeWrites = writes.length;
    const outcomes = await Promise.all([a.getState().finishDailyChallenge("game-a", result, 12), b.getState().finishDailyChallenge("game-b", result, 15)]);
    const retry = await a.getState().finishDailyChallenge("game-a", result, 12);
    expect(outcomes.map((r) => r.xpCredited)).toEqual([30, 0]);
    expect(outcomes.map((r) => r.caurisCredited)).toEqual([12, 0]);
    expect(retry.alreadyApplied).toBe(true);
    expect(retry.xpCredited).toBe(0);
    expect(a.getState().progress.quizResults).toHaveLength(1);
    expect(a.getState().progress.quizGame.gamesPlayed).toBe(1);
    expect(a.getState().progress.quizGame.cauris).toBe(12);
    expect(a.getState().progress.quizGame.questions[question].wrong).toBe(1);
    expect(a.getState().progress.daily).toMatchObject({ date: toISODate(new Date()), challengeDone: true, xpEarned: 30 });
    expect(writes.length - beforeWrites).toBe(2); // No six separate reward snapshots.
  });
  it("déduplique fin territoriale et résultat sans confondre deux tentatives", async () => {
    const { a, b } = pair();
    const game = { gameId: "partie", cauris: 7, record: { territoryId: "ouest" as const, mode: "blitz" as const, score: 2 }, activity: true };
    await Promise.all([a.getState().finishQuizGame(game), b.getState().finishQuizGame(game)]);
    await Promise.all([a.getState().recordQuizResult(result, "result:1"), b.getState().recordQuizResult(result, "result:1")]);
    await b.getState().recordQuizResult(result, "result:2");
    expect(b.getState().progress.quizResults).toHaveLength(2);
    expect(b.getState().progress.quizGame.gamesPlayed).toBe(1);
    expect(b.getState().progress.quizGame.cauris).toBe(7);
  });
  it("retourne un before/after autoritatif pour fin leçon/cours et garde l’idempotence", async () => {
    const { a, b } = pair();
    const results = await Promise.all([a.getState().finishLearning("course-perso-voix-plumes-afrique", "lesson-perso-pionniers-nobel", 50), b.getState().finishLearning("course-perso-voix-plumes-afrique", "lesson-perso-pionniers-nobel", 50)]);
    expect(results.map((r) => r.xpCredited)).toEqual([60, 0]);
    expect(results[1].before.completedCourseIds).toContain("course-perso-voix-plumes-afrique");
    expect(b.getState().progress.totalLessonsLearned).toBe(1);
  });
});

describe("import/hydration — aucune voie secondaire d’écriture", () => {
  it("importe v10 exactement une fois sans rattrapage rétroactif, original intact", async () => {
    const { a, b, values, writes } = pair();
    const progress = migrate(undefined).progress;
    progress.xp = 123;
    progress.completedCourseIds = ["course-histoire-05-empire-du-ghana", "course-trad-griots-sagesses"];
    const blob = legacy(progress);
    values.set(LEGACY_PROGRESS_KEY, blob);
    await Promise.all([a.getState().retryPersistence(), b.getState().retryPersistence()]);
    expect(a.getState().progress).toEqual(progress);
    expect(b.getState().progress).toEqual(progress);
    expect(writes).toEqual([PROGRESS_KEY]);
    expect(values.get(LEGACY_PROGRESS_KEY)).toBe(blob);
    await b.persist.rehydrate();
    expect(writes).toEqual([PROGRESS_KEY]);
  });
  it("importe une migration historique sous verrou puis résiste aux écritures d’un ancien client", async () => {
    const { a, b, values } = pair();
    values.set(LEGACY_PROGRESS_KEY, JSON.stringify({ version: 1, state: { progress: { xp: 10, favoriteIds: ["course-histoire-05-empire-du-ghana"] } } }));
    await Promise.all([a.getState().retryPersistence(), b.getState().addXp(7)]);
    values.set(LEGACY_PROGRESS_KEY, legacy()); // Noncooperating legacy client.
    await a.getState().retryPersistence();
    expect(a.getState().progress.xp).toBe(17);
    expect(a.getState().progress.favoriteCourseIds).toEqual(["course-histoire-05-empire-du-ghana"]);
  });
  it("refuse setState, clearStorage et setOptions, persist et refresh ne republient pas un snapshot", async () => {
    const { a, writes } = pair();
    await a.getState().retryPersistence();
    expect(() => a.setState({ progress: migrate(undefined).progress })).toThrow();
    expect(() => a.persist.clearStorage()).toThrow();
    expect(() => a.persist.setOptions({ name: LEGACY_PROGRESS_KEY })).toThrow();
    await a.persist.rehydrate();
    await a.getState().retryPersistence();
    expect(writes).toEqual([PROGRESS_KEY]);
  });
  it("un refresh sans canonique reste en lecture seule et ne fait aucun import/écho", async () => {
    const { a, values, writes } = pair();
    values.set(LEGACY_PROGRESS_KEY, legacy({ ...migrate(undefined).progress, xp: 21 }));
    await a.getState().refreshPersistence();
    expect(a.getState().progress.xp).toBe(21);
    expect(writes).toEqual([]);
    expect(values.has(PROGRESS_KEY)).toBe(false);
  });
});

describe("échecs conservateurs et reprise", () => {
  for (const [name, blob] of [
    ["JSON tronqué", "{"],
    ["version future", JSON.stringify({ version: 11, state: { progress: migrate(undefined).progress } })],
    ["champ numérique invalide", legacy({ ...migrate(undefined).progress, xp: -1 })],
    ["champ imbriqué invalide", legacy({ ...migrate(undefined).progress, quizGame: { cauris: 0, gamesPlayed: 0, records: {}, questions: { q: { correct: 1, wrong: 0, box: 4, dueDate: null } } } })],
  ]) it(`conserve sans écriture : ${name}`, async () => {
    const { a, values, writes } = pair();
    values.set(LEGACY_PROGRESS_KEY, blob);
    await expect(a.getState().addXp(5)).rejects.toThrow();
    expect(values.get(LEGACY_PROGRESS_KEY)).toBe(blob);
    expect(values.has(PROGRESS_KEY)).toBe(false);
    expect(writes).toEqual([]);
    expect(a.getState().progress.xp).toBe(0);
    expect(a.getState().hydrated).toBe(false);
  });
  it("refuse métadonnées canoniques invalides sans remplacer le blob", async () => {
    const { a, values, writes } = pair();
    const blob = JSON.stringify({ version: 10, state: { progress: migrate(undefined).progress }, metadata: { protocol: 2 } });
    values.set(PROGRESS_KEY, blob);
    await expect(a.getState().retryPersistence()).rejects.toThrow();
    expect(values.get(PROGRESS_KEY)).toBe(blob);
    expect(writes).toEqual([]);
  });
  it("échec écriture : pas de succès mémoire, même événement réessayé une seule fois après libération du verrou", async () => {
    const { a, b, values, failWrite } = pair();
    await a.getState().retryPersistence();
    const before = values.get(PROGRESS_KEY);
    failWrite(true);
    await expect(a.getState().finishDailyChallenge("same", result, 10)).rejects.toThrow();
    expect(a.getState().progress.xp).toBe(0);
    expect(a.getState().progress.daily.challengeDone).toBe(false);
    expect(values.get(PROGRESS_KEY)).toBe(before);
    failWrite(false);
    await b.getState().addXp(2); // Subsequent lock holder proceeds.
    await a.getState().finishDailyChallenge("same", result, 10);
    expect(a.getState().progress.xp).toBe(32);
    expect(a.getState().saving).toBe(0);
    expect(a.getState().persistenceError).toBeNull();
  });
  it("échec lecture : garde la mémoire confirmée et reprend sans effacement", async () => {
    const { a, failRead } = pair();
    await a.getState().addXp(9);
    failRead(true);
    await expect(a.getState().addXp(8)).rejects.toThrow();
    expect(a.getState().progress.xp).toBe(9);
    failRead(false);
    await a.getState().addXp(8);
    expect(a.getState().progress.xp).toBe(17);
  });
  it("sans exclusion : consultation des acquis seulement, aucune importation ni mutation", async () => {
    const { environment, values, writes } = progressTestEnvironment();
    values.set(LEGACY_PROGRESS_KEY, legacy({ ...migrate(undefined).progress, xp: 42 }));
    const a = createAppStore({ ...environment, exclusive: async () => { throw new ProgressError("unavailable"); } });
    await expect(a.getState().retryPersistence()).rejects.toThrow();
    expect(a.getState().progress.xp).toBe(42);
    expect(a.getState().hydrated).toBe(true);
    expect(a.getState().persistenceReadonly).toBe(true);
    await expect(a.getState().addXp(5)).rejects.toThrow();
    expect(a.getState().progress.xp).toBe(42);
    expect(writes).toEqual([]);
  });
  it("quota au premier import : consulte le legacy intact, puis réessaie l’import sûr", async () => {
    const { environment, values, writes, failWrite } = progressTestEnvironment();
    const blob = legacy({ ...migrate(undefined).progress, xp: 42 });
    values.set(LEGACY_PROGRESS_KEY, blob);
    failWrite(true);
    const a = createAppStore(environment);
    await expect(a.getState().retryPersistence()).rejects.toThrow();
    expect(a.getState().progress.xp).toBe(42);
    expect(a.getState().hydrated).toBe(true);
    expect(a.getState().persistenceReadonly).toBe(true);
    expect(values.get(LEGACY_PROGRESS_KEY)).toBe(blob);
    expect(writes).toEqual([]);
    failWrite(false);
    await a.getState().retryPersistence();
    expect(a.getState().persistenceReadonly).toBe(false);
    expect(a.getState().persistenceError).toBeNull();
    expect(a.getState().progress.xp).toBe(42);
    expect(writes).toEqual([PROGRESS_KEY]);
  });
  it("environnement navigateur sans API sûre échoue fermé", async () => {
    await expect(browserProgressEnvironment().exclusive(() => 1)).rejects.toThrow();
  });
});
