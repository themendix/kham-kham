import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

// Chaque route est chargée à la demande (`React.lazy`) : la navigation vers un onglet ne
// paie que le code de cet onglet, pas celui des huit autres. Complète le découpage du
// catalogue (`src/data/courseContent.ts`) — voir docs/ARCHITECTURE.md § Découpage du bundle.
const HomeScreen = lazy(() => import("@/routes/HomeScreen").then((m) => ({ default: m.HomeScreen })));
const BiblioScreen = lazy(() => import("@/routes/BiblioScreen").then((m) => ({ default: m.BiblioScreen })));
const CollectionsScreen = lazy(() =>
  import("@/routes/CollectionsScreen").then((m) => ({ default: m.CollectionsScreen })),
);
const ProfilScreen = lazy(() => import("@/routes/ProfilScreen").then((m) => ({ default: m.ProfilScreen })));
const CourseDetailScreen = lazy(() =>
  import("@/routes/CourseDetailScreen").then((m) => ({ default: m.CourseDetailScreen })),
);
const CategoryScreen = lazy(() => import("@/routes/CategoryScreen").then((m) => ({ default: m.CategoryScreen })));
const DailyChallengeScreen = lazy(() =>
  import("@/routes/DailyChallengeScreen").then((m) => ({ default: m.DailyChallengeScreen })),
);
const FavorisScreen = lazy(() => import("@/routes/FavorisScreen").then((m) => ({ default: m.FavorisScreen })));
const QuizHistoryScreen = lazy(() =>
  import("@/routes/QuizHistoryScreen").then((m) => ({ default: m.QuizHistoryScreen })),
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
          <Route path="/collections" element={<CollectionsScreen />} />
          <Route path="/profil" element={<ProfilScreen />} />
          <Route path="/cours/:courseId" element={<CourseDetailScreen />} />
          <Route path="/defi" element={<DailyChallengeScreen />} />
          <Route path="/favoris" element={<FavorisScreen />} />
          <Route path="/quiz" element={<QuizHistoryScreen />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
