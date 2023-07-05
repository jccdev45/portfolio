import Image from "next/image";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import Desktop from "@/components/desktop/Desktop";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jccdev  -  🆒",
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
          `bg-gradient-to-br from-sky-400 to-sky-200 relative pointer-events-auto`,
          inter.className
        )}
      >
        <Desktop />

        <div className="relative grid w-1/3 h-screen mx-auto -z-10 place-items-center">
          <Image src="/download.png" alt="" height={200} width={200} priority />
        </div>

        {children}

        <MainNav />
      </body>
    </html>
  );
}
