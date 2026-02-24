import { Upload } from "lucide-react"

export function FilesHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-5 md:px-8">
      <h2 className="text-[19px] font-bold text-foreground">Files uploaded</h2>
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-[#D0D5DD] bg-card px-4 py-2.5 text-sm font-semibold text-[#344054] shadow-xs transition-colors hover:bg-secondary">
          Download all
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90">
          <Upload size={16} />
          Upload
        </button>
      </div>
    </div>
  )
}
