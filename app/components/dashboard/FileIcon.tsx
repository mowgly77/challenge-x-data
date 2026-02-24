import { getFileIconStyle } from "@/app/utils/file-icon-style"

export function FileIcon({ name }: { name: string }) {
  const style = getFileIconStyle(name)
  const Icon = style.icon

  return (
    <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${style.bg}`}>
      <Icon size={20} className={style.fg} />
    </div>
  )
}
