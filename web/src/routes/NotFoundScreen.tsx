import { Link } from "react-router-dom";

export function NotFoundScreen() {
  return (
    <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
      <p className="font-heading text-4xl font-extrabold">404</p>
      <h1 className="mt-3 text-xl font-extrabold">Page introuvable</h1>
      <p className="mt-2 font-medium text-ink-muted">Cette adresse ne correspond à aucune page.</p>
      <Link
        to="/"
        className="mt-5 inline-block rounded-full border-[3px] border-ink bg-primary px-6 py-3 font-heading font-bold text-white shadow-sm"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
