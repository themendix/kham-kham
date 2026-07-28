import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Bookmark, ChevronDown } from "lucide-react";
import type { SwipeCard } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { CARDS } from "@/data/cards";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { getCategory } from "@/data/categories";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LessonBlocks } from "@/components/features/LessonBlocks";

/** Page complète des favoris (cours + cartes), ouverte depuis le résumé du Profil */
export function FavorisScreen() {
  const navigate = useNavigate();
  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
  const toggleFavoriteCard = useAppStore((s) => s.toggleFavoriteCard);

  const favoriteCourses = progress.favoriteCourseIds
    .map((id) => getCourseMetaOrWarn(id, "progress.favoriteCourseIds"))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);
  const favoriteCards = progress.favoriteCardIds
    .map((id) => CARDS.find((c) => c.id === id))
    .filter((c): c is SwipeCard => c !== undefined);
  const hasNoFavorites = favoriteCourses.length === 0 && favoriteCards.length === 0;

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
            Marque des cartes ou des cours d'un cœur pour les retrouver ici.
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

          {favoriteCards.length > 0 && (
            <section>
              <h2 className="mb-2.5 font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
                Cartes favorites
              </h2>
              <Card className="p-4">
                <div className="flex flex-col gap-2.5">
                  {favoriteCards.map((card) => (
                    <FavoriteCardItem key={card.id} card={card} onRemove={() => toggleFavoriteCard(card.id)} />
                  ))}
                </div>
              </Card>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

/** Carte favorite dépliable (même motif que « En savoir plus » du Home), avec bouton de retrait */
function FavoriteCardItem({ card, onRemove }: { card: SwipeCard; onRemove: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t-2 border-ink/10 pt-2.5 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="flex min-w-0 flex-1 items-center gap-2.5 text-left"
        >
          <span className="text-xl">{card.emoji}</span>
          <div className="min-w-0 flex-1">
            <div className="truncate font-bold">{card.title}</div>
            <div className="truncate text-[12px] font-semibold text-ink-faint">{card.teaser}</div>
          </div>
          <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
        <button
          onClick={onRemove}
          aria-label="Retirer des favoris"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink"
        >
          <Bookmark className="h-3.5 w-3.5" fill="currentColor" />
        </button>
      </div>
      {expanded && (
        <div className="mt-2">
          <LessonBlocks blocks={card.blocks} accent={getCategory(card.categoryId)!.color} density="compact" />
        </div>
      )}
    </div>
  );
}
