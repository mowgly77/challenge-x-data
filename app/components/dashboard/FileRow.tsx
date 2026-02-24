import { MoreVertical } from "lucide-react"
import type { FileItem } from "@/app/types/files"
import { FileIcon } from "./FileIcon"

export function FileRow({ file }: { file: FileItem }) {
  return (
    <tr className="border-b border-border last:border-b-0 hover:bg-[#F9FAFB]">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="size-5 shrink-0 rounded border-[#D0D5DD] accent-primary" />
          <FileIcon name={file.name} />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-[#101828]">{file.name}</p>
            <p className="text-sm text-[#667085]">{file.size}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-[#667085]">{file.size}</td>
      <td className="px-4 py-4 text-sm text-[#667085]">{file.dateUploaded}</td>
      <td className="px-4 py-4 text-sm text-[#667085]">{file.lastUpdated}</td>
      <td className="px-4 py-4 text-sm text-[#667085]">{file.uploadedBy}</td>
      <td className="px-2 py-4">
        <button aria-label="More options" className="text-[#98A2B3] hover:text-foreground">
          <MoreVertical size={20} />
        </button>
      </td>
    </tr>
  )
}
