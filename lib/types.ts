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
