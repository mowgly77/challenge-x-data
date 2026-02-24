import { FILES } from "@/app/utils/dashboard-data"
import { FileRow } from "./FileRow"
import { FileRowCompact } from "./FileRowCompact"
import { FilesHeader } from "./FilesHeader"
import { FileRowTablet } from "./FileRowTablet"

export function FilesTable() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <FilesHeader />

      {/* Desktop table (lg+) */}
      <div className="hidden lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#EAECF0]">
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085]">File name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#667085]">File size</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#667085]">Date uploaded</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#667085]">Last updated</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#667085]">Uploaded by</th>
              <th className="w-10" />
            </tr>
          </thead>
          <tbody>
            {FILES.map((f) => <FileRow key={f.name} file={f} />)}
          </tbody>
        </table>
      </div>

      {/* Tablet table (md-lg): File name + File size */}
      <div className="hidden md:block lg:hidden">
        <div className="flex border-b border-[#EAECF0] px-4 py-3">
          <span className="flex-1 text-xs font-medium text-[#667085]">File name</span>
          <span className="text-xs font-medium text-[#667085]">File size</span>
        </div>
        {FILES.map((f) => <FileRowTablet key={f.name} file={f} />)}
      </div>

      {/* Mobile compact list */}
      <div className="md:hidden">
        {FILES.map((f) => <FileRowCompact key={f.name} file={f} />)}
      </div>
    </div>
  )
}
