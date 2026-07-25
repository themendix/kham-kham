import { CATEGORIES } from "@/data/categories";

interface MasteryRadarProps {
  /** Score 0-100 par catégorie */
  masteryByCategory: Record<string, number>;
}

const CENTER = { x: 110, y: 105 };
const RADIUS = 78;
const RING_FRACTIONS = [0.33, 0.66, 1];

function point(index: number, radius: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  return { x: CENTER.x + radius * Math.cos(angle), y: CENTER.y + radius * Math.sin(angle) };
}

/**
 * Hexagone de maîtrise par matière — version simple/placeholder.
 * Un axe par catégorie (dans l'ordre de src/data/categories.ts), rempli
 * selon le score de maîtrise 0-100 de l'utilisateur.
 */
export function MasteryRadar({ masteryByCategory }: MasteryRadarProps) {
  const total = CATEGORIES.length;

  const gridPolygons = RING_FRACTIONS.map((fraction) =>
    CATEGORIES.map((_, i) => {
      const p = point(i, RADIUS * fraction, total);
      return `${p.x},${p.y}`;
    }).join(" "),
  );

  const axisLines = CATEGORIES.map((_, i) => point(i, RADIUS, total));

  const dataPolygon = CATEGORIES.map((cat, i) => {
    const score = masteryByCategory[cat.id] ?? 0;
    const p = point(i, RADIUS * (score / 100), total);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 220 210" width="220" height="210" className="mx-auto">
      {gridPolygons.map((points, i) => (
        <polygon key={i} points={points} fill="none" stroke="#c9bfa8" strokeWidth={1.5} />
      ))}
      {axisLines.map((p, i) => (
        <line key={i} x1={CENTER.x} y1={CENTER.y} x2={p.x} y2={p.y} stroke="#c9bfa8" strokeWidth={1.5} />
      ))}
      <polygon points={dataPolygon} fill="rgba(226,76,43,0.35)" stroke="#E24C2B" strokeWidth={2.5} />
      {CATEGORIES.map((cat, i) => {
        const p = point(i, RADIUS + 16, total);
        return (
          <text key={cat.id} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={15}>
            {cat.emoji}
          </text>
        );
      })}
    </svg>
  );
}
