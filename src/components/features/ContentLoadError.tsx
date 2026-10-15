import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function ContentLoadError({ onRetry }: { onRetry: () => void }) {
  return (
    <div role="alert" className="rounded-card border-[3px] border-ink bg-card p-5">
      <p className="font-bold">Le contenu n’a pas pu être chargé.</p>
      <p className="mt-2 text-sm font-medium text-ink-muted">
        Vérifie ta connexion, puis réessaie. Si le problème persiste, recharge la page.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button onClick={onRetry}>Réessayer</Button>
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Recharger la page
        </Button>
      </div>
      <Link to="/biblio" className="mt-4 inline-block font-bold underline underline-offset-2">
        Retour à la Biblio
      </Link>
    </div>
  );
}
