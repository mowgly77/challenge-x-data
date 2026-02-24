import { StatCard } from "./StatCard"
import { STAT_CARDS } from "@/app/utils/dashboard-data"

export function StatCardsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
      {STAT_CARDS.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
