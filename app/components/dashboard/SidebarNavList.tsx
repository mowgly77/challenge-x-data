"use client"

import type { NavItem } from "@/app/types/navigation"
import { SidebarNavItem } from "./SidebarNavItem"

export function SidebarNavList({ items }: { items: NavItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <SidebarNavItem key={item.label} item={item} />
      ))}
    </div>
  )
}
