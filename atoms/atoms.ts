import { JSX } from "react"
import type { SliderProps } from "@radix-ui/react-slider"
import { atom } from "jotai"

import { desktopIcons as initialDesktopIcons, toRecycle } from "@/lib/constants"
import { DesktopIcon, RecycleItem, SortOrder } from "@/lib/types"

export const recycleMenuAtom = atom<RecycleItem[] | null>(toRecycle)

export const desktopIconsAtom = atom<DesktopIcon[]>(initialDesktopIcons)
export const desktopSortOrderAtom = atom<SortOrder>("ascending")

export const isMaxAtom = atom(false)
export const windowIconAtom = atom<JSX.Element | null>(null)
export const windowTitleAtom = atom<string>("")

export const volumeAtom = atom<SliderProps["defaultValue"]>([50])
export const dateAtom = atom<Date | undefined>(new Date())
