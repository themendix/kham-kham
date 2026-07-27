import { NavLink } from "react-router-dom";
import { Home, BookOpen, Layers, User } from "lucide-react";

const TABS = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/biblio", label: "Biblio", icon: BookOpen, end: false },
  { to: "/collections", label: "Collections", icon: Layers, end: false },
  { to: "/profil", label: "Profil", icon: User, end: false },
];

/** Barre de navigation à 4 onglets, fixée en bas du viewport — mobile uniquement (masquée sur desktop, remplacée par la Sidebar) */
export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around border-t-[3px] border-ink bg-cream px-1.5 pb-3.5 pt-2.5 md:hidden">
      {TABS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 rounded-2xl px-3.5 py-1.5 font-heading text-[11px] font-bold ${
              isActive ? "border-[2.5px] border-ink bg-histoire text-ink" : "text-ink-faint"
            }`
          }
        >
          <Icon className="h-5 w-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
