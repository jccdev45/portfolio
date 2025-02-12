import { JSX } from "react"
import type { SliderProps } from "@radix-ui/react-slider"
import { atom } from "jotai"

import { desktopIcons as initialDesktopIcons, toRecycle } from "@/lib/constants"
import { DesktopIcon, RecycleItem, SortOrder } from "@/lib/types"

export const dateAtom = atom<Date | undefined>(new Date())
export const desktopIconsAtom = atom<DesktopIcon[]>(initialDesktopIcons)
export const desktopSortOrderAtom = atom<SortOrder>("ascending")
export const imageDataAtom = atom<string | null>(null)
export const isDrawingAtom = atom<boolean>(false)
export const isMaxAtom = atom(false)
export const isTriggerDownloadAtom = atom<boolean>(false)
export const recycleMenuAtom = atom<RecycleItem[] | null>(toRecycle)
export const screenshotRefAtom = atom<React.RefObject<HTMLDivElement> | null>(
  null
)
export const volumeAtom = atom<SliderProps["defaultValue"]>([50])
export const windowIconAtom = atom<JSX.Element | null>(null)
export const windowTitleAtom = atom<string>("")
