import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/** Vrai si l'utilisateur a demandé de réduire les animations (préférence système) */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handleChange = () => setReduced(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}
