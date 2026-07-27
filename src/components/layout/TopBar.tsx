import { Flame } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

/** Barre supérieure fixe : logo Sankofa + compteur de streak */
export function TopBar() {
  const streakCount = useAppStore((s) => s.progress.streak.count);

  return (
    <header className="sticky top-0 z-10 border-b-[3px] border-ink bg-cream">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-heading text-[22px] font-extrabold">
          {/* Logo servi depuis public/ : les déclinaisons sont générées par `npm run icons` (voir brand/LISEZ-MOI.md) */}
          <img
            src="/icon-192.png"
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className="h-8 w-8 rounded-xl border-[2.5px] border-ink object-cover shadow-sm"
          />
          Sankofa
        </div>
        <div className="flex items-center gap-1.5 rounded-full border-[2.5px] border-ink bg-card px-3.5 py-1.5 font-heading text-sm font-extrabold shadow-sm">
          <Flame className="h-4 w-4 text-flame" fill="currentColor" />
          {streakCount} {streakCount > 1 ? "JOURS" : "JOUR"}
        </div>
      </div>
    </header>
  );
}
