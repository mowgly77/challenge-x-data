import type { StatCard } from "@/app/types/dashboard"
import type { FileItem } from "@/app/types/files"

export const STAT_CARDS: StatCard[] = [
  { label: "Unresolved", value: 60 },
  { label: "Overdue", value: 16, highlighted: true },
  { label: "Open", value: 43 },
  { label: "On hold", value: 64 },
]

export const TREND_STATS = [
  { label: "Resolved", value: "449" },
  { label: "Received", value: "426" },
  { label: "Average first response time", value: "33m" },
  { label: "Average response time", value: "3h 8m" },
  { label: "Resolution within SLA", value: "94%" },
]

export const FILES: FileItem[] = [
  { name: "Tech requirements.pdf", size: "200 KB", dateUploaded: "Jan 4, 2022", lastUpdated: "Jan 4, 2022", uploadedBy: "Olivia Rhye" },
  { name: "Dashboard screenshot.jpg", size: "720 KB", dateUploaded: "Jan 4, 2022", lastUpdated: "Jan 4, 2022", uploadedBy: "Phoenix Baker" },
  { name: "Dashboard prototype recording.mp4", size: "16 MB", dateUploaded: "Jan 2, 2022", lastUpdated: "Jan 2, 2022", uploadedBy: "Lana Steiner" },
  { name: "Dashboard prototype FINAL.fig", size: "4.2 MB", dateUploaded: "Jan 6, 2022", lastUpdated: "Jan 6, 2022", uploadedBy: "Demi Wilkinson" },
  { name: "UX Design Guidelines.docx", size: "400 KB", dateUploaded: "Jan 8, 2022", lastUpdated: "Jan 8, 2022", uploadedBy: "Candice Wu" },
  { name: "Dashboard interaction.framerx", size: "12 MB", dateUploaded: "Jan 6, 2022", lastUpdated: "Jan 6, 2022", uploadedBy: "Natali Craig" },
  { name: "App Inspiration.png", size: "800 KB", dateUploaded: "Jan 4, 2022", lastUpdated: "Jan 4, 2022", uploadedBy: "Drew Cano" },
]
