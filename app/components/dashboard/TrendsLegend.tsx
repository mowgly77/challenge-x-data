export function TrendsLegend() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="h-[2px] w-4 rounded bg-primary" />
        <span className="text-xs font-semibold text-muted-foreground">Today</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-[2px] w-4 rounded bg-[#C5C7CD]" />
        <span className="text-xs font-semibold text-muted-foreground">Yesterday</span>
      </div>
    </div>
  )
}
