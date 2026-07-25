import { Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { HomeScreen } from "@/routes/HomeScreen";
import { BiblioScreen } from "@/routes/BiblioScreen";
import { CollectionsScreen } from "@/routes/CollectionsScreen";
import { ProfilScreen } from "@/routes/ProfilScreen";
import { CourseDetailScreen } from "@/routes/CourseDetailScreen";
import { CategoryScreen } from "@/routes/CategoryScreen";
import { DailyChallengeScreen } from "@/routes/DailyChallengeScreen";
import { FavorisScreen } from "@/routes/FavorisScreen";
import { QuizHistoryScreen } from "@/routes/QuizHistoryScreen";

export default function App() {
  return (
    <AppShell>
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
    </AppShell>
  );
}
