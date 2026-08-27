import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { getCategory } from "@/data/categories";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

/**
 * Page complète des favoris, ouverte depuis le résumé du Profil.
 *
 * Ne liste que des **cours** : depuis que le fil du Home sert des cours à trier (✓ intéressé),
 * la mise en favori porte toujours sur un cours entier. Elle listait auparavant, à part, les
 * cartes puis les leçons mises de côté depuis le Home.
 */
export function FavorisScreen() {
  const navigate = useNavigate();
  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);

  const favoriteCourses = progress.favoriteCourseIds
    .map((id) => getCourseMetaOrWarn(id, "progress.favoriteCourseIds"))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);
  const hasNoFavorites = favoriteCourses.length === 0;

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      <h1 className="mb-4 text-[26px] font-extrabold">⭐ Mes favoris</h1>

      {hasNoFavorites ? (
        <Card className="p-8 text-center">
          <p className="font-medium text-ink-faint">Aucun favori pour l'instant.</p>
          <p className="mt-1 text-sm text-ink-faint">
            Garde les cours qui t'intéressent depuis le fil du jour ou la Biblio pour les
            retrouver ici.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            <Link to="/">
              <Button variant="secondary">Aller au fil du jour</Button>
            </Link>
            <Link to="/biblio">
              <Button variant="secondary">Découvrir la Biblio</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <div className="flex flex-col gap-6">
          {favoriteCourses.length > 0 && (
            <section>
              <h2 className="mb-2.5 font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
                Cours favoris
              </h2>
              <Card className="p-4">
                <div className="flex flex-col gap-2.5">
                  {favoriteCourses.map((course) => {
                    const category = getCategory(course.categoryId);
                    return (
                      <div
                        key={course.id}
                        className="flex items-center gap-3 border-t-2 border-ink/10 pt-2.5 first:border-t-0 first:pt-0"
                      >
                        <Link to={`/cours/${course.id}`} className="flex min-w-0 flex-1 items-center gap-2.5">
                          <span className="text-xl">{course.emoji}</span>
                          <div className="min-w-0">
                            <div className="truncate font-bold">{course.title}</div>
                            {category && (
                              <div className="text-[12px] font-semibold text-ink-faint">{category.name}</div>
                            )}
                          </div>
                        </Link>
                        <button
                          onClick={() => toggleFavoriteCourse(course.id)}
                          aria-label="Retirer des favoris"
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink"
                        >
                          <Heart className="h-3.5 w-3.5 text-danger" fill="currentColor" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
