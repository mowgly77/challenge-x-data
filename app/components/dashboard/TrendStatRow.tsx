interface TrendStatRowProps {
  label: string
  value: string
}

export function TrendStatRow({ label, value }: TrendStatRowProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center border-b border-border px-4 py-4 last:border-b-0">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <span className="text-2xl font-bold text-foreground">{value}</span>
    </div>
  )
}
