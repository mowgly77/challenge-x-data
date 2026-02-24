"use client"

import { motion } from "framer-motion"
import { DashboardSidebar } from "@/app/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/app/components/dashboard/DashboardHeader"
import { StatCardsGrid } from "@/app/components/dashboard/StatCardsGrid"
import { TrendsSection } from "@/app/components/dashboard/TrendsSection"
import { FilesTable } from "@/app/components/dashboard/FilesTable"

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:px-[30px] lg:py-[30px]">
          <motion.div
            className="flex flex-col gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}><StatCardsGrid /></motion.div>
            <motion.div variants={fadeUp}><TrendsSection /></motion.div>
            <motion.div variants={fadeUp}><FilesTable /></motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
