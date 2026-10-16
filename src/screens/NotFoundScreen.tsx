import { NativeBox, NativeH1, NativeParagraph } from "@/native/elements";
import { Link } from "@/native/router";
export function NotFoundScreen() {
    return (<NativeBox className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
      <NativeParagraph className="font-heading text-4xl font-extrabold">404</NativeParagraph>
      <NativeH1 className="mt-3 text-xl font-extrabold">Page introuvable</NativeH1>
      <NativeParagraph className="mt-2 font-medium text-ink-muted">Cette adresse ne correspond à aucune page.</NativeParagraph>
      <Link to="/" className="mt-5 inline-block rounded-full border-[3px] border-ink bg-primary px-6 py-3 font-heading font-bold text-white shadow-sm">
        Retour à l’accueil
      </Link>
    </NativeBox>);
}
