import { Club, Diamond, Heart, Spade } from "lucide-react"

import type { Offset } from "@/lib/types"

export const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"] as const

export const VALUES: Record<string, number> = {
  A: 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
} as const

export const OFFSETS: Offset = {
  0: "top-0",
  1: "top-4",
  2: "top-8",
  3: "top-12",
  4: "top-16",
  5: "top-20",
  6: "top-24",
  7: "top-28",
  8: "top-32",
  9: "top-36",
  10: "top-40",
  11: "top-44",
  12: "top-48",
  13: "top-52",
  14: "top-56",
  15: "top-60",
}

export const SUIT_ICONS = {
  HEARTS: <Heart size={12} fill="rgb(239, 68, 68)" className="text-red-500" />,
  CLUBS: <Club size={12} fill="rgb(0, 0, 0)" className="text-black" />,
  DIAMONDS: (
    <Diamond size={12} fill="rgb(239, 68, 68)" className="text-red-500" />
  ),
  SPADES: <Spade size={12} fill="rgb(0, 0, 0)" className="text-black" />,
}
