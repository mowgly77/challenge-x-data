import { FileText, Image as ImageIcon, Video, FileCode } from "lucide-react"

export function getFileIconStyle(name: string) {
  const ext = name.split(".").pop()?.toLowerCase()
  const purple = { bg: "bg-[#F9F5FF]", fg: "text-[#6941C6]" }
  const violet = { bg: "bg-[#F9F5FF]", fg: "text-[#7F56D9]" }
  const muted = { bg: "bg-[#F0F1F7]", fg: "text-muted-foreground" }

  if (ext === "pdf" || ext === "docx") return { icon: FileText, ...purple }
  if (ext === "jpg" || ext === "png") return { icon: ImageIcon, ...violet }
  if (ext === "mp4") return { icon: Video, ...purple }
  if (ext === "fig" || ext === "framerx") return { icon: FileCode, ...violet }
  return { icon: FileCode, ...muted }
}
