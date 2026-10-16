import { Link } from "react-router-dom";
import type { Category } from "@/types";
import { SUBJECT_BG } from "@/lib/subjectStyles";

interface ThemeExplorerProps {
  categories: Category[];
}

/** Rangée de pastilles par matière, chacune ouvrant le tableau de bord de sa matière */
export function ThemeExplorer({ categories }: ThemeExplorerProps) {
  return (
    <div className="scrollbar-none flex gap-3 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/biblio/${category.id}`}
          className={`flex shrink-0 items-center gap-2 rounded-full border-[2.5px] border-ink px-4 py-2.5 font-heading text-sm font-bold shadow-sm transition-transform active:translate-y-[3px] active:shadow-none ${SUBJECT_BG[category.color]}`}
        >
          <span className="text-lg">{category.emoji}</span>
          {category.name}
        </Link>
      ))}
    </div>
  );
}
