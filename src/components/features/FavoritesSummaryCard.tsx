import { NativeBox, NativeH3, NativeParagraph } from "@/native/elements";
import { Link } from "@/native/router";
import { Heart, ChevronRight } from "@/native/icons";
import { Card } from "@/components/ui/Card";
interface FavoritesSummaryCardProps {
    courseCount: number;
}
function favoritesSubtitle(courseCount: number): string {
    if (courseCount === 0)
        return "Aucun favori pour l'instant";
    return `${courseCount} cours mis de côté`;
}
export function FavoritesSummaryCard({ courseCount }: FavoritesSummaryCardProps) {
    return (<Link to="/favoris">
      <Card shadow="sm" className="flex items-center gap-4 p-4">
        <NativeBox className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-accent-rose">
          <Heart className="h-[22px] w-[22px]" fill="currentColor"/>
        </NativeBox>
        <NativeBox className="min-w-0 flex-1">
          <NativeH3 className="font-extrabold">Mes favoris</NativeH3>
          <NativeParagraph className="truncate text-sm font-medium text-ink-faint">
            {favoritesSubtitle(courseCount)}
          </NativeParagraph>
        </NativeBox>
        <ChevronRight className="h-5 w-5 shrink-0 text-ink-faint"/>
      </Card>
    </Link>);
}
