import { useEffect, useState } from "react";

type Status = "pending" | "ready" | "error" | "absent";

/** Cache synchrone au retour, erreur récupérable et rejet des réponses d'une ancienne adresse. */
export function useContentResource<T>(
  key: string | null,
  getCached: (key: string) => T | undefined,
  load: (key: string) => Promise<T | null | undefined>,
) {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<{ key: string | null; status: Status; value: T | null }>({
    key: null,
    status: "pending",
    value: null,
  });
  const cached = key ? getCached(key) : undefined;
  useEffect(() => {
    if (!key || getCached(key) !== undefined) return;
    let cancelled = false;
    setState({ key, status: "pending", value: null });
    Promise.resolve()
      .then(() => load(key))
      .then(
        (value) => {
          if (!cancelled)
            setState({ key, status: value ? "ready" : "absent", value: value ?? null });
        },
        () => {
          if (!cancelled) setState({ key, status: "error", value: null });
        },
      );
    return () => {
      cancelled = true;
    };
  }, [key, attempt, getCached, load]);

  const current =
    cached !== undefined
      ? { status: "ready" as const, value: cached }
      : !key
        ? { status: "absent" as const, value: null }
        : state.key === key
          ? state
          : { status: "pending" as const, value: null };
  return { ...current, retry: () => setAttempt((n) => n + 1) };
}
