import type { FileItem } from "@/app/types/files"
import { FileIcon } from "./FileIcon"

export function FileRowTablet({ file }: { file: FileItem }) {
  return (
    <div className="flex items-center border-b border-border px-4 py-3 last:border-b-0 hover:bg-[#F9FAFB]">
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <input type="checkbox" className="size-4 shrink-0 rounded border-[#D0D5DD] accent-primary" />
        <FileIcon name={file.name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#101828]">{file.name}</p>
          <p className="text-sm text-[#667085]">{file.size}</p>
        </div>
      </div>
      <span className="shrink-0 text-sm text-[#667085]">{file.size}</span>
    </div>
  )
}
