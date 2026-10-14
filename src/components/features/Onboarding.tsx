import { useState } from "react";
import { Compass, Library, Swords, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useAppStore } from "@/store/useAppStore";
import { markOnboardingSeen } from "@/lib/onboarding";
import { CATEGORIES } from "@/data/categories";
import { SUBJECT_DEEP_BG } from "@/lib/subjectStyles";

const TABS = [
  { icon: Compass, title: "Home", text: "Swipe les sujets qui t'appellent, ignore le reste." },
  { icon: Library, title: "Biblio", text: "Un catalogue immense à explorer, matière par matière." },
  { icon: Swords, title: "Quiz", text: "Pars à la conquête de l'Afrique, question après question." },
  { icon: User, title: "Profil", text: "Regarde ton niveau et ta série grimper, jour après jour." },
];

interface OnboardingProps {
  /** Appelé à la sortie de l'onboarding, qu'il soit terminé ou passé */
  onClose: () => void;
}

/**
 * Onboarding structuré en 3 écrans statiques (identité, fonctionnement, matières préférées),
 * affiché en plein écran au-dessus de l'app pour un nouvel utilisateur. Remplace l'ancienne
 * visite guidée (coach-mark pointant les éléments réels) : plus simple à maintenir, et ne
 * dépend plus du rendu effectif de chaque écran (pas de `React.lazy` à attendre, pas de
 * repositionnement à chaque image).
 */
export function Onboarding({ onClose }: OnboardingProps) {
  const setPreferredCategories = useAppStore((s) => s.setPreferredCategories);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [saveError, setSaveError] = useState(false);

  function toggle(categoryId: string) {
    setSelected((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    );
  }

  async function finish() {
    setSaveError(false);
    try {
      await setPreferredCategories(selected);
      markOnboardingSeen();
      onClose();
    } catch { setSaveError(true); }
  }

  const isFirst = step === 0;
  const isLast = step === 2;

  return (
    // `overflow-y-auto` est ce qui manquait : un `fixed inset-0` sans lui ne crée aucune zone de
    // défilement, donc tout contenu plus haut que l'écran (les 4 cartes de l'étape « Comment ça
    // marche » sur un petit écran) pousse le pied de page hors champ, bouton « Continuer » compris,
    // sans aucun moyen d'y accéder.
    <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-cream p-5">
      {saveError && <p role="alert" className="mb-3 font-bold text-danger">La sauvegarde a échoué. Réessaie pour conserver ton choix.</p>}
      <div className="flex justify-end">
        <button
          onClick={finish}
          className="font-heading text-xs font-bold text-ink-faint underline underline-offset-2"
        >
          Passer
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-4">
        {step === 0 && (
          <div className="text-center">
            <img
              src="/icon-192.png"
              alt=""
              aria-hidden="true"
              width={72}
              height={72}
              className="mx-auto h-[72px] w-[72px] rounded-2xl border-[3px] border-ink object-cover shadow-card"
            />
            <h1 className="mt-5 font-heading text-3xl font-extrabold">
              Bienvenue sur Sankofa !
            </h1>
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink-muted">
              « Retourner chercher le savoir du passé. » Des royaumes oubliés aux figures qui ont
              changé le continent, en passant par ses 54 pays : l'Afrique que tu n'as jamais eu la
              chance d'apprendre t'attend. On te fait visiter ?
            </p>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="text-center font-heading text-2xl font-extrabold">
              Prêt en 30 secondes
            </h1>
            <div className="mt-6 flex flex-col gap-3">
              {TABS.map(({ icon: Icon, title, text }) => (
                <Card key={title} shadow="sm" className="flex items-center gap-3.5 p-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-extrabold">{title}</h2>
                    <p className="text-sm font-medium text-ink-faint">{text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-center font-heading text-2xl font-extrabold">
              Par quoi tu commences ?
            </h1>
            <p className="mt-2 text-center text-sm font-medium text-ink-faint">
              Choisis une ou plusieurs matières qui te font envie — on t'en proposera plus dès le
              premier jour. Tu pourras changer d'avis à tout moment.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selected.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => toggle(cat.id)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2 rounded-full border-[3px] border-ink px-4 py-2.5 font-heading font-bold shadow-sm transition-transform active:translate-y-[3px] active:shadow-none ${
                      isSelected ? SUBJECT_DEEP_BG[cat.color] : "bg-card"
                    }`}
                  >
                    <span aria-hidden="true">{cat.emoji}</span>
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-1.5 pb-2 pt-4">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full border-[1.5px] border-ink ${
              i === step ? "bg-ink" : "bg-card"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-sm gap-2.5 pb-2">
        {!isFirst && (
          <Button size="md" variant="secondary" onClick={() => setStep(step - 1)}>
            Précédent
          </Button>
        )}
        <Button size="lg" className="flex-1" onClick={isLast ? finish : () => setStep(step + 1)}>
          {isLast ? "C'est parti !" : "Continuer"}
        </Button>
      </div>
    </div>
  );
}
