// desktop.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { desktopIconsAtom, recycleMenuAtom } from "@/atoms/atoms"
import { useAtomValue } from "jotai"
import { Trash, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import HireMePopup from "@/components/hire-me-popup"
import { Icon } from "@/components/icons"

export default function Desktop() {
  const desktopIcons = useAtomValue(desktopIconsAtom)
  const recycleItems = useAtomValue(recycleMenuAtom)
  const pathname = usePathname()

  return (
    <div className="absolute top-2 left-2 flex max-h-[90vh] flex-col flex-wrap items-center justify-start gap-x-2 gap-y-4">
      <HireMePopup />
      {desktopIcons.map(({ icon, id, path, label }) => (
        <Link
          href={path}
          key={id}
          className={cn(
            "flex size-24 flex-col items-center justify-center gap-2",
            pathname === path && "border-windows-black border border-dashed"
          )}
        >
          {icon.name === "trash2" && recycleItems?.length ? (
            <div className="relative">
              <div className="absolute top-1 left-[45%] grid w-2/3 -translate-x-[50%] grid-cols-4 gap-x-0.5">
                <div
                  className={cn(
                    "border-windows/50 relative h-3 w-2.5 translate-x-1 -translate-y-0.5 -rotate-[26deg] overflow-hidden rounded-full rounded-b-none border-[1px] bg-gray-100"
                  )}
                />
                <div
                  className={cn(
                    "border-windows/20 relative z-10 h-3 w-3.5 -translate-y-0.5 -rotate-6 overflow-hidden rounded rounded-b-none border-[1px] bg-gray-100"
                  )}
                />
                <div
                  className={cn(
                    "border-windows/50 relative -z-10 h-2 w-2.5 -translate-y-1 rotate-12 overflow-hidden rounded border-[1px] bg-gray-100"
                  )}
                />
                <div
                  className={cn(
                    "border-windows/50 relative h-3 w-3.5 -translate-x-2 -translate-y-0.5 rotate-8 overflow-hidden rounded-full rounded-b-none border-[1px] bg-gray-100"
                  )}
                />
              </div>
              <span className="absolute top-[25%] left-[50%] -translate-x-[50%] text-2xl text-green-500">
                ♻
              </span>
              <Trash className={cn(icon.className, "size-12")} />
            </div>
          ) : icon.name === "trash2" ? (
            <Trash2 className={cn(icon.className, "size-12")} />
          ) : (
            <Icon
              iconName={icon.name}
              className={cn(icon.className, "size-12")}
            />
          )}
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
