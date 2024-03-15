import "./globals.css"

import localFont from "next/font/local"
import Image from "next/image"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import Desktop from "@/components/desktop"
import { MainNav } from "@/components/main-nav"

// const inter = Inter({ subsets: ["latin"] })
const fontLevi = localFont({
  src: "../assets/MS Sans Serif.ttf",
  variable: "--font-levi",
})

export const metadata = {
  // title: "jccdev | 🆒",
  title: {
    template: "%s | jccdev 🆒",
    default: "jccdev 🆒",
  },
  description: "🆗",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `relative min-h-screen bg-gradient-to-br from-sky-400 to-sky-200 font-levi scrollbar scrollbar-track-windows scrollbar-thumb-windows-dark`,
          fontLevi.className
        )}
      >
        <Analytics />

        <Desktop />

        <div className="-z-0 mx-auto grid h-screen w-1/3 place-items-center">
          <Image src="/download.png" alt="" height={200} width={200} priority />
        </div>

        <main className="flex-1">{children}</main>

        <MainNav />

        <Toaster />
      </body>
    </html>
  )
}
