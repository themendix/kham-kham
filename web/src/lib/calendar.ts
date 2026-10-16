/** Clé du jour civil dans le fuseau du navigateur, sans conversion UTC. */
export function localDayKey(date: Date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/** Arithmétique de dates civiles : UTC sert seulement à représenter les clés sans fuseau. */
export function addDayKey(day: string, days: number): string {
  const [year, month, date] = day.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, date + days));
  return next.toISOString().slice(0, 10);
}

export function weekStartKey(day: string): string {
  const weekday = new Date(`${day}T12:00:00Z`).getUTCDay();
  return addDayKey(day, -((weekday + 6) % 7));
}

export function civilDaysBetween(from: string, to: string): number {
  return Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / 86_400_000);
}
