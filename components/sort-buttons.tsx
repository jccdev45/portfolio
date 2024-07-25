"use client"

import { ContextMenuItem } from "@/components/ui/context-menu"
import { useDesktop } from "@/components/desktop-context"

export function AscendButton() {
  const { sortAscending, currentSortOrder } = useDesktop()

  return (
    <ContextMenuItem
      onClick={() => sortAscending()}
      disabled={currentSortOrder === "ascending"}
    >
      Ascending
    </ContextMenuItem>
  )
}
export function DescendButton() {
  const { sortDescending, currentSortOrder } = useDesktop()

  return (
    <ContextMenuItem
      onClick={() => sortDescending()}
      disabled={currentSortOrder === "descending"}
    >
      Descending
    </ContextMenuItem>
  )
}
