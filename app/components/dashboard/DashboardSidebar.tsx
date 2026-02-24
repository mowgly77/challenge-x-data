"use client"

import { LogoIcon } from "@/app/components/icons/LogoIcon"
import { SidebarNavList } from "./SidebarNavList"
import { MAIN_NAV, BOTTOM_NAV } from "@/app/utils/sidebar-data"

export function DashboardSidebar() {
  return (
    <aside className="hidden shrink-0 flex-col bg-sidebar md:flex md:w-16 lg:w-[255px]">
      {/* Logo */}
      <div className="flex h-[72px] items-center justify-center lg:justify-start lg:gap-3 lg:px-8">
        <LogoIcon size={32} />
        <span className="hidden text-[19px] font-bold tracking-wide text-sidebar-primary-foreground lg:inline">
          Dashboard Kit
        </span>
      </div>

      <div className="mx-4 border-t border-sidebar-border lg:mx-8" />

      {/* Main nav */}
      <nav className="mt-2 flex flex-1 flex-col">
        <SidebarNavList items={MAIN_NAV} />
        <div className="mt-auto pb-4">
          <div className="mx-4 mb-2 border-t border-sidebar-border lg:mx-8" />
          <SidebarNavList items={BOTTOM_NAV} />
        </div>
      </nav>
    </aside>
  )
}
