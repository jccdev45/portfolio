import "./globals.css"

import { Metadata } from "next"
import localFont from "next/font/local"
import { DesktopProvider } from "@/context/desktop-context"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Desktop from "@/components/desktop"
import { DesktopDialog } from "@/components/desktop-dialog"
import { MainNav } from "@/components/main-nav"

const fontLevi = localFont({
  src: "../assets/MS Sans Serif.ttf",
  variable: "--font-levi",
})

export const metadata: Metadata = {
  title: {
    template: "DWCK_FWCK",
    default: "DWCK_FWCK",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `relative min-h-screen font-levi scrollbar scrollbar-track-windows scrollbar-thumb-windows-dark`,
          fontLevi.className
        )}
        style={{
          backgroundColor: "rgba(254,255,55,255)",
        }}
      >
        <Analytics />
        <DesktopProvider>
          <Desktop />
          <DesktopDialog />
        </DesktopProvider>
        <main className="flex-1">{children}</main>
        <MainNav />
        <Toaster />
      </body>
    </html>
  )
}
