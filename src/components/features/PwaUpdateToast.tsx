import { useRegisterSW } from "virtual:pwa-register/react";
import { RefreshCw, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Bandeau d'état du service worker : « prêt hors ligne » (informatif, se referme seul) et
 * « nouvelle version disponible » (action requise). La mise à jour n'est jamais appliquée
 * automatiquement (`registerType: "prompt"`, `vite.config.ts`) — un rechargement silencieux
 * pourrait interrompre un quiz en cours ; c'est à l'utilisateur de choisir le moment.
 */
export function PwaUpdateToast() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-50 mx-auto flex max-w-md items-center gap-3 rounded-card border-[3px] border-ink bg-card p-4 shadow-card md:bottom-6">
      {needRefresh ? (
        <>
          <RefreshCw className="h-5 w-5 shrink-0 text-primary" />
          <p className="flex-1 text-sm font-bold">Nouvelle version disponible.</p>
          <Button variant="primary" className="px-4 py-2 text-sm" onClick={() => updateServiceWorker(true)}>
            Actualiser
          </Button>
          <button
            onClick={() => setNeedRefresh(false)}
            aria-label="Ignorer"
            className="font-heading text-xs font-bold text-ink/50"
          >
            ✕
          </button>
        </>
      ) : (
        <>
          <WifiOff className="h-5 w-5 shrink-0 text-success" />
          <p className="flex-1 text-sm font-bold">Sankofa est prêt à fonctionner hors ligne.</p>
          <button
            onClick={() => setOfflineReady(false)}
            aria-label="Fermer"
            className="font-heading text-xs font-bold text-ink/50"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
}
