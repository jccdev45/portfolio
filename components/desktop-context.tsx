"use client"

import { createContext, ReactNode, useContext, useState } from "react"

import { desktopIcons as initialDesktopIcons } from "@/lib/constants"

type SortOrder = "ascending" | "descending"

interface DesktopContextType {
  desktopIcons: typeof initialDesktopIcons
  currentSortOrder: SortOrder
  sortAscending: () => void
  sortDescending: () => void
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined)

export const DesktopProvider = ({ children }: { children: ReactNode }) => {
  const [desktopIcons, setDesktopIcons] = useState(initialDesktopIcons)
  const [currentSortOrder, setCurrentSortOrder] =
    useState<SortOrder>("ascending")

  const sortAscending = () => {
    const sortedIcons = [...desktopIcons].sort((a, b) =>
      a.label.localeCompare(b.label)
    )
    setDesktopIcons(sortedIcons)
    setCurrentSortOrder("ascending")
  }

  const sortDescending = () => {
    const sortedIcons = [...desktopIcons].sort((a, b) =>
      b.label.localeCompare(a.label)
    )
    setDesktopIcons(sortedIcons)
    setCurrentSortOrder("descending")
  }

  return (
    <DesktopContext.Provider
      value={{ desktopIcons, sortAscending, currentSortOrder, sortDescending }}
    >
      {children}
    </DesktopContext.Provider>
  )
}

export const useDesktop = () => {
  const context = useContext(DesktopContext)
  if (context === undefined) {
    throw new Error("useDesktop must be used within a DesktopProvider")
  }
  return context
}
