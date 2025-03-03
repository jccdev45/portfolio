import type { LucideIcon } from "lucide-react"

import { SUITS, VALUES } from "@/lib/constants/solitaire"
import type { IconType } from "@/components/icons"

export type Suit = (typeof SUITS)[number]
export type Value = (typeof VALUES)[number]
export type Rank = (keyof typeof VALUES)[number]
export type Offset = Record<number, string>

export type CardInfo = {
  suit: Suit
  value: Value
  rank: Rank
  faceUp: boolean
  offset?: Offset
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export type SortOrder = "ascending" | "descending"

export interface MenuItem {
  title: string
  icon: IconType
}

export interface RecycleItem {
  id: number
  title: string
  ext: string
  size: string
  path: string
  icon: IconType
}

export interface MenuItemType {
  trigger: string
  items: MenuItem[]
}

export interface Project {
  id: number
  title: string
  desc: string
  tech: string[]
  live: string
  repoURL: string
  icon: IconType
  className: string
}

export interface StartMenuItem {
  id: number
  href: string
  icon: IconType
  text: string
}

export interface DesktopIcon {
  id: number
  label: string
  path: string
  icon: {
    name: LucideIcon
    className: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  date: string
}
