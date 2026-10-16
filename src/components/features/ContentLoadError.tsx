import { router } from "expo-router";
import { NativeBox, NativeParagraph } from "@/native/elements";
import { Link } from "@/native/router";
import { Button } from "@/components/ui/Button";
export function ContentLoadError({ onRetry }: {
    onRetry: () => void;
}) {
    return (<NativeBox role="alert" className="rounded-card border-[3px] border-ink bg-card p-5">
      <NativeParagraph className="font-bold">Le contenu n’a pas pu être chargé.</NativeParagraph>
      <NativeParagraph className="mt-2 text-sm font-medium text-ink-muted">
        Vérifie ta connexion, puis réessaie. Si le problème persiste, recharge la page.
      </NativeParagraph>
      <NativeBox className="mt-4 flex flex-wrap gap-3">
        <Button onClick={onRetry}>Réessayer</Button>
        <Button variant="secondary" onClick={() => router.replace("/biblio")}>
          Recharger la page
        </Button>
      </NativeBox>
      <Link to="/biblio" className="mt-4 inline-block font-bold underline underline-offset-2">
        Retour à la Biblio
      </Link>
    </NativeBox>);
}
