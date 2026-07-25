import { NavLink } from "react-router-dom";
import { Home, BookOpen, Layers, User } from "lucide-react";

const TABS = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/biblio", label: "Biblio", icon: BookOpen, end: false },
  { to: "/collections", label: "Collections", icon: Layers, end: false },
  { to: "/profil", label: "Profil", icon: User, end: false },
];

/** Navigation principale sur desktop (colonne fixe à gauche), masquée sur mobile */
export function Sidebar() {
  return (
    <aside className="sticky top-6 hidden h-fit w-56 shrink-0 flex-col gap-2 md:flex">
      {TABS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-2xl border-[2.5px] px-4 py-3 font-heading text-sm font-bold transition-colors ${
              isActive
                ? "border-ink bg-histoire text-ink shadow-sm"
                : "border-transparent text-[#8a8071] hover:border-ink hover:bg-card"
            }`
          }
        >
          <Icon className="h-5 w-5" />
          {label}
        </NavLink>
      ))}
    </aside>
  );
}
