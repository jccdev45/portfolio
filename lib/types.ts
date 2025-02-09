import type { JSX } from "react"

import { SUITS, VALUES } from "./constants"

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

export interface MenuItem {
  title: string
  icon: JSX.Element
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
  icon: JSX.Element
}

export interface StartMenuItem {
  id: number
  link: {
    href: string
    text: JSX.Element
  }
}
