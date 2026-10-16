import type { UserProgress } from "@/types";
import { addDayKey, localDayKey, weekStartKey } from "@/lib/calendar";
import { normalizeQuestionStat } from "@/lib/quizReview";

/** Migration v10→v11 additive : aucune XP versée, aucune ancienne date de succès inventée. */
export function migrateCalendar(progress: UserProgress, paidDays: string[], now: Date = new Date()): UserProgress {
  if (progress.calendar) return progress;
  const today = localDayKey(now);
  const utcToday = now.toISOString().slice(0, 10);
  const legacyDailyDate = progress.daily.date;
  const legacyLastActiveDate = progress.streak.lastActiveDate;
  const currentDaily = legacyDailyDate === utcToday || legacyDailyDate === today;
  // Le bonus versé dans la journée UTC encore en cours bloque aussi sa journée locale de transition.
  if ((paidDays.includes(utcToday) || (currentDaily && progress.daily.challengeDone)) && !paidDays.includes(today)) {
    paidDays.push(today);
  }
  // Cette ancre est une tolérance de transition, pas une réécriture de l'activité historique.
  const anchor = today > utcToday && legacyLastActiveDate
    ? legacyLastActiveDate === utcToday ? today : legacyLastActiveDate === addDayKey(utcToday, -1) ? addDayKey(today, -1) : undefined
    : undefined;
  return {
    ...progress,
    calendar: { version: 1, legacyDailyDate, legacyLastActiveDate },
    daily: currentDaily ? { ...progress.daily, date: today, challengeDone: progress.daily.challengeDone || paidDays.includes(today) } : progress.daily,
    streak: {
      ...progress.streak,
      ...(legacyLastActiveDate ? { weekStartDate: weekStartKey(legacyLastActiveDate) } : {}),
      ...(anchor ? { calendarAnchorDate: anchor } : {}),
    },
    quizGame: {
      ...progress.quizGame,
      questions: Object.fromEntries(Object.entries(progress.quizGame.questions).map(([key, stat]) => [key, normalizeQuestionStat(stat)])),
    },
  };
}
