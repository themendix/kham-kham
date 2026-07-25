import type { ReactNode } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";

interface AppShellProps {
  children: ReactNode;
}

/**
 * Ossature responsive de l'application : header pleine largeur, navigation
 * en sidebar sur desktop (md+), navigation en barre basse fixe sur mobile.
 * Le contenu est centré dans une colonne de lecture confortable, sans
 * cadre de type téléphone — l'app se comporte comme un vrai site web.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-cream">
      <TopBar />
      <div className="mx-auto flex w-full max-w-6xl gap-8 px-4 pb-28 pt-4 sm:px-6 md:gap-10 md:pb-12 md:pt-8 lg:px-8">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
