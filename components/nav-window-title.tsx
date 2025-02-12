"use client"

import { usePathname } from "next/navigation"

function formatPathname(path: string): string {
  const segments = path.split("/").filter(Boolean)
  const formattedSegments = segments.map((segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  })
  return formattedSegments.join(" - ")
}

export function NavWindowTitle() {
  const path = usePathname()
  const formattedPathname = formatPathname(path)

  if (formattedPathname.length === 0) return null

  return (
    <div className="border-windows-white border-l-windows-dark border-t-windows-dark bg-windows-white/30 shadow-windows-dark mr-auto w-28 truncate border-2 px-1.5 py-1 shadow-inner md:w-36 lg:w-44">
      {formattedPathname}
    </div>
  )
}
