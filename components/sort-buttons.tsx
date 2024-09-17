"use client"

import { useDesktop } from "@/context/desktop-context"

import { ContextMenuItem } from "@/components/ui/context-menu"

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
