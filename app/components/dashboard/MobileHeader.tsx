import { Bell } from "lucide-react"
import { LogoIcon } from "@/app/components/icons/LogoIcon"

export function MobileHeader() {
  return (
    <header className="flex h-14 items-center justify-between bg-sidebar px-4 md:hidden">
      <LogoIcon size={32} />
      <button aria-label="Notifications" className="relative text-sidebar-foreground">
        <Bell size={20} />
        <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary" />
      </button>
    </header>
  )
}
