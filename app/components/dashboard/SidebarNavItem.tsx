"use client"

import Link from "next/link"
import type { NavItem } from "@/app/types/navigation"
import { cn } from "@/lib/utils"

export function SidebarNavItem({ item }: { item: NavItem }) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center py-2.5 text-[16px] leading-5 font-normal text-sidebar-foreground transition-colors hover:text-sidebar-primary-foreground",
        "justify-center lg:justify-start lg:gap-6 lg:px-8",
        item.active &&
          "border-l-[3px] border-sidebar-primary bg-sidebar-accent text-sidebar-primary-foreground"
      )}
    >
      <Icon size={16} className="shrink-0" />
      <span className="hidden lg:inline">{item.label}</span>
    </Link>
  )
}
