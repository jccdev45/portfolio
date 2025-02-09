import { desktopIconsAtom, desktopSortOrderAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"

export const useDesktop = () => {
  const [desktopIcons, setDesktopIcons] = useAtom(desktopIconsAtom)
  const [currentSortOrder, setCurrentSortOrder] = useAtom(desktopSortOrderAtom)

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

  return { desktopIcons, currentSortOrder, sortAscending, sortDescending }
}
