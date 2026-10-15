import { useEffect, useState } from "react";
import { localDayKey } from "@/lib/calendar";

/** Suit le prochain minuit local et rattrape une suspension ou un changement de fuseau. */
export function useCivilDay(): string {
  const [day, setDay] = useState(() => localDayKey());
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => {
      clearTimeout(timer);
      const now = new Date();
      setDay(localDayKey(now));
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      timer = setTimeout(refresh, midnight.getTime() - now.getTime());
    };
    const visible = () => { if (document.visibilityState === "visible") refresh(); };
    refresh();
    document.addEventListener("visibilitychange", visible);
    window.addEventListener("pageshow", refresh);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", visible);
      window.removeEventListener("pageshow", refresh);
    };
  }, []);
  return day;
}
