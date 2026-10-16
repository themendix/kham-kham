import type { ProgressEnvironment } from "./progressPersistence";

/** Deterministic storage and FIFO exclusion, injected only by tests. */
export function progressTestEnvironment() {
  const values = new Map<string, string>();
  const writes: string[] = [];
  let tail = Promise.resolve();
  let locked = false;
  let readFailure = false;
  let writeFailure = false;
  const environment: ProgressEnvironment = {
    storage: {
      getItem(key) { if (readFailure) throw new Error("read failed"); return values.get(key) ?? null; },
      setItem(key, value) { if (!locked) throw new Error("write without lock"); if (writeFailure) throw new Error("write failed"); writes.push(key); values.set(key, value); },
    },
    exclusive<T>(operation: () => T | Promise<T>): Promise<T> {
      const result = tail.then(async () => { locked = true; try { return await operation(); } finally { locked = false; } });
      tail = result.then(() => {}, () => {});
      return result;
    },
  };
  return { environment, values, writes, failRead: (fail: boolean) => { readFailure = fail; }, failWrite: (fail: boolean) => { writeFailure = fail; } };
}
