import { Quote } from "lucide-react";
import type { Proverb } from "@/types";
import { Card } from "@/components/ui/Card";

interface ProverbCardProps {
  proverb: Proverb;
}

/** Proverbe africain du jour, stable toute la journée */
export function ProverbCard({ proverb }: ProverbCardProps) {
  return (
    <Card className="p-6 text-center">
      <Quote className="mx-auto h-7 w-7 text-primary" fill="currentColor" />
      <p className="mt-3 font-heading text-lg font-extrabold leading-snug">« {proverb.text} »</p>
      <p className="mt-2.5 text-sm font-bold text-ink-faint">— {proverb.origin}</p>
    </Card>
  );
}
