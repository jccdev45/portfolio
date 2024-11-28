"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useDesktop } from "@/context/desktop-context"

import { cn } from "@/lib/utils"

export default function Desktop() {
  const { desktopIcons } = useDesktop()
  const pathname = usePathname()

  return (
    <div className="absolute left-2 top-2 flex max-h-[90vh] flex-col flex-wrap items-center justify-start gap-x-2 gap-y-4">
      {desktopIcons.map(({ icon, id, path, label }) => (
        <Link
          href={path}
          key={id}
          className={cn(
            "flex size-24 flex-col items-center justify-center gap-2",
            pathname === path && "border border-dashed border-windows-black"
          )}
        >
          <span className="">{icon}</span>
          <span
            className={cn(
              "text-sm",
              pathname === path && "bg-windows-blue text-windows-white"
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}
