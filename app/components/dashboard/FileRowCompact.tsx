import type { FileItem } from "@/app/types/files"
import { FileIcon } from "./FileIcon"

export function FileRowCompact({ file }: { file: FileItem }) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0">
      <input type="checkbox" className="size-4 shrink-0 rounded border-border accent-primary" />
      <FileIcon name={file.name} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#101828]">{file.name}</p>
        <p className="text-sm text-[#667085]">{file.size}</p>
      </div>
    </div>
  )
}
