"use client"

import { useState } from "react"

import { SUITS, VALUES } from "@/lib/constants/solitaire"
import type { CardInfo } from "@/lib/types"

import { Button } from "./ui/button"

type Deck = {
  cards: CardInfo[]
  length: number
}

function generateCards(): CardInfo[] {
  const cards: CardInfo[] = []

  for (const suit in SUITS) {
    for (const value in VALUES) {
      cards.push({
        suit: SUITS[suit],
        value: VALUES[value],
        rank: value,
        faceUp: false,
      })
    }
  }

  return cards
}

function shuffleCards(cards?: CardInfo[]): CardInfo[] {
  const shuffledCards = cards ? [...cards] : generateCards()
  shuffledCards.sort(() => Math.random() - 0.5)

  return shuffledCards
}
const deckShuffled = shuffleCards()

export function Solitaire() {
  const [deck] = useState<Deck>({
    cards: deckShuffled,
    length: deckShuffled.length,
  })
  // const [topCard, setTopCard] = useState<CardInfo | null>(
  //   deckShuffled[0] || null
  // )

  return (
    <section className="bg-windows-solitaire relative grid size-full grid-rows-4 p-4">
      {/* deck + foundation */}
      <div className="flex w-full justify-between border border-red-500">
        <Button className="border-windows-black h-32 w-24 rounded border">
          Left: {deck.length}
        </Button>

        <ul className="grid grid-cols-4 gap-2">
          <li className="border-windows-black h-32 w-24 rounded border"></li>
          <li className="border-windows-black h-32 w-24 rounded border"></li>
          <li className="border-windows-black h-32 w-24 rounded border"></li>
          <li className="border-windows-black h-32 w-24 rounded border"></li>
        </ul>
      </div>

      {/* tableau */}
      <ul className="row-span-full row-start-2 grid w-full grid-cols-7 border border-blue-500">
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
        <li className="border-windows-black col-span-1 h-32 w-24 border"></li>
      </ul>

      <Button
        variant={"destructive"}
        onClick={() => shuffleCards()}
        className="absolute right-8 bottom-12"
        id="resetGame"
        aria-roledescription="Reset solitaire game"
      >
        Reset
      </Button>
    </section>
  )
}
