// desktop.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { desktopIconsAtom } from "@/atoms/atoms"
import { useAtomValue } from "jotai"

import { cn } from "@/lib/utils"

export default function Desktop() {
  const desktopIcons = useAtomValue(desktopIconsAtom)
  const pathname = usePathname()

  return (
    <div className="absolute top-2 left-2 flex max-h-[90vh] flex-col flex-wrap items-center justify-start gap-x-2 gap-y-4">
      {desktopIcons.map(({ icon: Icon, id, path, label }) => (
        <Link
          href={path}
          key={id}
          className={cn(
            "flex size-24 flex-col items-center justify-center gap-2",
            pathname === path && "border-windows-black border border-dashed"
          )}
        >
          <Icon.name className={Icon.className} />
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
