import "./globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";

import Desktop from "@/components/desktop/Desktop";
import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "jccdev | 🆒",
  title: {
    template: "%s | jccdev 🆒",
    default: "jccdev 🆒",
  },
  description: "🆗",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `bg-gradient-to-br from-sky-400 to-sky-200 relative w-screen h-screen`,
          inter.className
        )}
      >
        <Analytics />

        <Desktop />

        <div className="grid w-1/3 h-screen mx-auto -z-0 place-items-center">
          <Image src="/download.png" alt="" height={200} width={200} priority />
        </div>

        {children}

        <MainNav defaultValue={[0]} />
      </body>
    </html>
  );
}
