import { useEffect, useState } from "react";
import { AppState } from "react-native";
import { localDayKey } from "@/lib/calendar";
export function useCivilDay(): string {
  const [day, setDay] = useState(() => localDayKey());
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const refresh = () => {
      clearTimeout(timer); const now = new Date(); setDay(localDayKey(now));
      const midnight = new Date(now); midnight.setHours(24, 0, 0, 0);
      timer = setTimeout(refresh, Math.max(1000, midnight.getTime() - now.getTime()));
    };
    refresh();
    const subscription = AppState.addEventListener("change", (state) => { if (state === "active") refresh(); });
    return () => { clearTimeout(timer); subscription.remove(); };
  }, []);
  return day;
}
