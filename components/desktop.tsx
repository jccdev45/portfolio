"use client"

import Link from "next/link"

import { useDesktop } from "@/components/desktop-context"

export default function Desktop() {
  const { desktopIcons } = useDesktop()

  return (
    <div className="absolute left-2 top-2 flex max-h-[90vh] flex-col flex-wrap items-center justify-center gap-8">
      {desktopIcons.map((icon) => (
        <Link
          href={icon.path}
          key={icon.id}
          className="flex size-20 flex-col items-center justify-center"
        >
          <span className="p-4">{icon.icon}</span>
          <span className="text-xs">{icon.label}</span>
        </Link>
      ))}
    </div>
  )
}
