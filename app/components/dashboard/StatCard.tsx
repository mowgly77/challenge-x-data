import { cn } from "@/lib/utils"
import type { StatCard as StatCardType } from "@/app/types/dashboard"

interface StatCardProps {
  stat: StatCardType
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-6",
        stat.highlighted && "border-primary"
      )}
    >
      <span className={cn(
        "text-[16px] font-bold leading-5",
        stat.highlighted ? "text-primary" : "text-muted-foreground"
      )}>
        {stat.label}
      </span>
      <span className={cn(
        "text-[40px] font-bold leading-[48px]",
        stat.highlighted ? "text-primary" : "text-foreground"
      )}>
        {stat.value}
      </span>
    </div>
  )
}
