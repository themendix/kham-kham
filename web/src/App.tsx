import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate, useParams, useSearchParams, useLocation } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { useAppStore } from "@/store/useAppStore";
import { shouldShowOnboarding } from "@/lib/onboarding";
import { NotFoundScreen } from "@/routes/NotFoundScreen";
import { RouteErrorBoundary } from "@/components/layout/RouteErrorBoundary";

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
const QuizScreen = lazy(() => import("@/routes/QuizScreen").then((m) => ({ default: m.QuizScreen })));
const QuizPartieScreen = lazy(() =>
  import("@/routes/QuizPartieScreen").then((m) => ({ default: m.QuizPartieScreen })),
);
const QuizDefiScreen = lazy(() =>
  import("@/routes/QuizDefiScreen").then((m) => ({ default: m.QuizDefiScreen })),
);

function RouteLoadingFallback() {
  return (
    <div className="flex justify-center py-16">
      <p className="font-medium text-ink-faint">Chargement…</p>
    </div>
  );
}

/**
 * Reporte les paramètres de l'ancienne adresse `/jeu/:territoryId/:mode` vers `/quiz/...`.
 * `<Navigate>` ne sait pas le faire seul : sa cible est une chaîne figée.
 */
function JeuRedirect() {
  const { territoryId, mode } = useParams();
  return <Navigate to={`/quiz/${territoryId}/${mode}`} replace />;
}

const Onboarding = lazy(() =>
  import("@/components/features/Onboarding").then((m) => ({ default: m.Onboarding })),
);

/**
 * Décide si l'onboarding doit s'afficher, et le monte au-dessus des routes : contrairement à
 * l'ancienne visite guidée, il ne navigue plus d'écran en écran (3 étapes statiques), mais reste
 * monté ici pour garder le même point d'entrée (`?onboarding=1` depuis le Profil).
 */
function OnboardingHost() {
  const [searchParams] = useSearchParams();
  // Verrouillé une fois pour toutes au montage (pas d'abonnement au store) : réévaluer la
  // condition à chaque navigation ferait réapparaître l'onboarding dès qu'un champ qu'il écrit
  // (`preferredCategoryIds`) change l'état qui a servi à le déclencher.
  const [active, setActive] = useState(() => shouldShowOnboarding(useAppStore.getState().progress));

  const replay = searchParams.get("onboarding") === "1";
  useEffect(() => {
    if (replay) setActive(true);
  }, [replay]);

  if (!active) return null;
  return (
    <Suspense fallback={null}>
      <Onboarding onClose={() => setActive(false)} />
    </Suspense>
  );
}

export default function App() {
  const location = useLocation();
  const hydrated = useAppStore((s) => s.hydrated);
  const saving = useAppStore((s) => s.saving);
  const error = useAppStore((s) => s.persistenceError);
  const readonly = useAppStore((s) => s.persistenceReadonly);
  const retry = useAppStore((s) => s.retryPersistence);
  useEffect(() => { void retry().catch(() => {}); }, [retry]);
  const notice = error && (
    <div role="alert" className="mb-4 rounded-card border-[3px] border-ink bg-cream p-4">
      <p className="font-medium">{error}</p>
      <button className="mt-2 font-bold underline" disabled={saving > 0} onClick={() => { void retry().catch(() => {}); }}>Réessayer la sauvegarde</button>
    </div>
  );
  if (!hydrated) return <AppShell>{notice}<RouteLoadingFallback /></AppShell>;
  return (
    <AppShell>
      {notice}
      {saving > 0 && <p role="status" className="pointer-events-none fixed bottom-24 right-4 z-40 rounded-full border-2 border-ink bg-card px-3 py-2 text-sm font-medium text-ink-muted shadow-sm md:bottom-4">Sauvegarde…</p>}
      <fieldset disabled={saving > 0 || readonly} className="m-0 min-w-0 border-0 p-0">
      <RouteErrorBoundary key={location.pathname}>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/biblio" element={<BiblioScreen />} />
          <Route path="/biblio/:categoryId" element={<CategoryScreen />} />
          {/* Collections a été remplacé par le module Quiz : ses 3 parcours y vivent
              désormais comme « quêtes ». L'ancienne route reste en redirection. */}
          <Route path="/collections" element={<Navigate to="/quiz" replace />} />
          <Route path="/profil" element={<ProfilScreen />} />
          <Route path="/cours/:courseId" element={<CourseDetailScreen />} />
          {/* Le Défi du jour a été absorbé par le module Quiz. L'ancienne route reste en
              redirection : elle a pu être mise en favori ou ouverte depuis une PWA installée. */}
          <Route path="/defi" element={<Navigate to="/quiz/defi" replace />} />
          <Route path="/favoris" element={<FavorisScreen />} />
          {/* L'historique des tentatives a libéré /quiz pour l'onglet lui-même ; il vit
              désormais sous le Profil, d'où il est ouvert. */}
          <Route path="/profil/quiz" element={<QuizHistoryScreen />} />

          <Route path="/quiz" element={<QuizScreen />} />
          <Route path="/quiz/defi" element={<QuizDefiScreen />} />
          <Route path="/quiz/:territoryId/:mode" element={<QuizPartieScreen />} />

          {/* L'onglet s'appelait « Jeu » avant d'être renommé : le mot promettait du
              divertissement au-dessus d'un moteur de révision. Les anciennes adresses restent
              en redirection (favori, PWA installée). */}
          <Route path="/jeu" element={<Navigate to="/quiz" replace />} />
          <Route path="/jeu/defi" element={<Navigate to="/quiz/defi" replace />} />
          <Route path="/jeu/:territoryId/:mode" element={<JeuRedirect />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
      {!readonly && <OnboardingHost />}
      </RouteErrorBoundary>
      </fieldset>
    </AppShell>
  );
}
