import "./globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import Desktop from "@/components/desktop";
import { DesktopDialog } from "@/components/desktop-dialog";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";
import { DesktopProvider } from "@/context/desktop-context";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const fontLevi = localFont({
  src: "../assets/MS Sans Serif.ttf",
  variable: "--font-levi",
})

export const metadata: Metadata = {
  title: {
    template: "%s | jccdev 🆒",
    default: "jccdev 🆒",
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
          `relative min-h-screen bg-linear-to-br from-sky-400 to-sky-200 font-levi scrollbar scrollbar-track-windows scrollbar-thumb-windows-dark`,
          fontLevi.className
        )}
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
