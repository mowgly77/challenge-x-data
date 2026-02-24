import type { Metadata, Viewport } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Dashboard Kit',
  description: 'Dashboard Kit - Admin Panel UI',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
