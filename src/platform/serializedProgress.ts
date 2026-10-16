import type { ProgressEnvironment } from "@/store/progressPersistence";
/** One writer shared by every store using this environment. Failed writes release the queue. */
export function createSerializedProgressEnvironment(storage: ProgressEnvironment["storage"]): ProgressEnvironment {
  let queue: Promise<unknown> = Promise.resolve();
  return { storage, exclusive: <T,>(operation: () => T | Promise<T>): Promise<T> => {
    const result = queue.then(operation);
    queue = result.catch(() => undefined);
    return result;
  } };
}
