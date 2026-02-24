import Image from "next/image"
import { TrendStatRow } from "./TrendStatRow"
import { TrendsLegend } from "./TrendsLegend"
import { TREND_STATS } from "@/app/utils/dashboard-data"

export function TrendsSection() {
  return (
    <div className="rounded-lg border border-border bg-card">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-border px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="text-[19px] font-bold text-foreground">{"Today's trends"}</h2>
          <p className="text-xs text-muted-foreground">as of 25 May 2019, 09:41 PM</p>
        </div>
        <TrendsLegend />
      </div>

      {/* Chart + Stats */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-8">
          <Image
            src="/images/chart-trends.jpg"
            alt="Today's trends chart"
            width={600}
            height={300}
            className="h-auto w-full rounded object-contain"
            priority
          />
        </div>
        <div className="flex shrink-0 flex-col border-t border-border md:w-[200px] md:border-t-0 md:border-l lg:w-[240px]">
          {TREND_STATS.map((s) => (
            <TrendStatRow key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  )
}
