import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

// Chaque route est chargée à la demande (`React.lazy`) : la navigation vers un onglet ne
// paie que le code de cet onglet, pas celui des huit autres. Complète le découpage du
// catalogue (`src/data/courseContent.ts`) — voir docs/ARCHITECTURE.md § Découpage du bundle.
const HomeScreen = lazy(() => import("@/routes/HomeScreen").then((m) => ({ default: m.HomeScreen })));
const BiblioScreen = lazy(() => import("@/routes/BiblioScreen").then((m) => ({ default: m.BiblioScreen })));
const ProfilScreen = lazy(() => import("@/routes/ProfilScreen").then((m) => ({ default: m.ProfilScreen })));
const CourseDetailScreen = lazy(() =>
  import("@/routes/CourseDetailScreen").then((m) => ({ default: m.CourseDetailScreen })),
);
const CategoryScreen = lazy(() => import("@/routes/CategoryScreen").then((m) => ({ default: m.CategoryScreen })));
const FavorisScreen = lazy(() => import("@/routes/FavorisScreen").then((m) => ({ default: m.FavorisScreen })));
const QuizHistoryScreen = lazy(() =>
  import("@/routes/QuizHistoryScreen").then((m) => ({ default: m.QuizHistoryScreen })),
);
const JeuScreen = lazy(() => import("@/routes/JeuScreen").then((m) => ({ default: m.JeuScreen })));
const JeuPartieScreen = lazy(() =>
  import("@/routes/JeuPartieScreen").then((m) => ({ default: m.JeuPartieScreen })),
);
const JeuDefiScreen = lazy(() =>
  import("@/routes/JeuDefiScreen").then((m) => ({ default: m.JeuDefiScreen })),
);

function RouteLoadingFallback() {
  return (
    <div className="flex justify-center py-16">
      <p className="font-medium text-ink-faint">Chargement…</p>
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/biblio" element={<BiblioScreen />} />
          <Route path="/biblio/:categoryId" element={<CategoryScreen />} />
          {/* Collections a été remplacé par le module Quiz : ses 3 parcours y vivent
              désormais comme « quêtes ». L'ancienne route reste en redirection. */}
          <Route path="/collections" element={<Navigate to="/jeu" replace />} />
          <Route path="/profil" element={<ProfilScreen />} />
          <Route path="/cours/:courseId" element={<CourseDetailScreen />} />
          {/* Le Défi du jour a été absorbé par le module Quiz. L'ancienne route reste en
              redirection : elle a pu être mise en favori ou ouverte depuis une PWA installée. */}
          <Route path="/defi" element={<Navigate to="/jeu/defi" replace />} />
          <Route path="/favoris" element={<FavorisScreen />} />
          <Route path="/quiz" element={<QuizHistoryScreen />} />
          <Route path="/jeu" element={<JeuScreen />} />
          <Route path="/jeu/defi" element={<JeuDefiScreen />} />
          <Route path="/jeu/:territoryId/:mode" element={<JeuPartieScreen />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
