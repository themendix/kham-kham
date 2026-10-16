import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface StatCardProps {
  icon: LucideIcon;
  iconBgClassName: string;
  value: string | number;
  label: string;
}

/** Petite carte statistique du Profil (cours terminés, taux de réussite…) */
export function StatCard({ icon: Icon, iconBgClassName, value, label }: StatCardProps) {
  return (
    <Card shadow="sm" className="p-4">
      <div
        className={`mb-2.5 grid h-10 w-10 place-items-center rounded-full border-[2.5px] border-ink ${iconBgClassName}`}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="text-[28px] font-extrabold leading-none">{value}</div>
      <div className="mt-1 text-[13px] font-semibold text-ink-faint">{label}</div>
    </Card>
  );
}
