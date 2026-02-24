interface FormFieldProps {
  label: string
  htmlFor: string
  endAction?: React.ReactNode
  error?: string
  children: React.ReactNode
}

export function FormField({ label, htmlFor, endAction, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </label>
        {endAction}
      </div>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
