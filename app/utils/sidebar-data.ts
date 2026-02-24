import {
  PieChart,
  Monitor,
  Lightbulb,
  Users,
  User,
  FileText,
  Settings,
  Award,
} from "lucide-react"
import type { NavItem } from "@/app/types/navigation"

export const MAIN_NAV: NavItem[] = [
  { label: "Overview", icon: PieChart, href: "/dashboard", active: true },
  { label: "Tickets", icon: Monitor, href: "#" },
  { label: "Ideas", icon: Lightbulb, href: "#" },
  { label: "Contacts", icon: Users, href: "#" },
  { label: "Agents", icon: User, href: "#" },
  { label: "Articles", icon: FileText, href: "#" },
]

export const BOTTOM_NAV: NavItem[] = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Subscription", icon: Award, href: "#" },
]
