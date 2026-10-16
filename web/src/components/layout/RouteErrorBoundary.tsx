import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";

/** Une route chargée à la demande peut elle-même échouer avant d'afficher son contenu. */
export class RouteErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-6">
        <h1 className="text-xl font-extrabold">La page n’a pas pu être affichée.</h1>
        <p className="mt-2 font-medium text-ink-muted">Vérifie ta connexion et recharge la page pour réessayer.</p>
        <Button className="mt-4" onClick={() => window.location.reload()}>Recharger la page</Button>
        <a className="mt-4 block font-bold underline underline-offset-2" href="/">Retour à l’accueil</a>
      </div>
    );
  }
}
