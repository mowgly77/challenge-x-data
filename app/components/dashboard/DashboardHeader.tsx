import { Search, Bell } from "lucide-react"
import Image from "next/image"
import { MobileHeader } from "./MobileHeader"

export function DashboardHeader() {
  return (
    <>
      <MobileHeader />
      <header className="hidden h-[72px] items-center justify-between border-b border-border bg-card px-6 md:flex lg:px-8">
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <div className="flex items-center gap-6">
          <button aria-label="Search" className="text-[#C5C7CD] hover:text-foreground">
            <Search size={20} />
          </button>
          <button aria-label="Notifications" className="relative text-[#C5C7CD] hover:text-foreground">
            <Bell size={20} />
            <span className="absolute top-0 -right-0.5 size-2 rounded-full bg-primary" />
          </button>
          <div className="h-[42px] w-px bg-border" />
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-foreground">Jones Ferdinand</span>
            <Image
              src="/images/avatar-jones.jpg"
              alt="Jones Ferdinand"
              width={44}
              height={44}
              className="size-[44px] rounded-full object-cover"
            />
          </div>
        </div>
      </header>
    </>
  )
}
