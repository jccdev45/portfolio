import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import "./globals.css";
import { desktopIcons } from "@/lib/constants";

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
          `bg-gradient-to-br from-sky-300 to-sky-600 relative h-screen overflow-hidden`,
          inter.className
        )}
      >
        <div className="absolute flex flex-col items-center gap-8 top-2 left-2 justify-evenly">
          {desktopIcons.map((icon) => (
            <Link
              href={icon.path}
              key={icon.id}
              className="flex flex-col items-center w-30 h-30"
            >
              {icon.icon}
              {icon.label}
            </Link>
          ))}
        </div>
        <div className="relative grid w-1/3 h-screen mx-auto -z-0 place-items-center">
          <Image src="/download.png" alt="" height={200} width={200} priority />
        </div>
        {children}
        <MainNav />
      </body>
    </html>
  );
}
