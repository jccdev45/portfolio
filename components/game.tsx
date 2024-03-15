"use client"

import { useState } from "react"

import { SUITS, VALUES } from "@/lib/constants"
import { CardInfo } from "@/lib/types"

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
    <section className="relative grid size-full grid-rows-4 bg-windows-solitaire p-4">
      {/* deck + foundation */}
      <div className="flex w-full justify-between border border-red-500">
        <Button className="h-32 w-24 rounded border border-windows-black">
          Left: {deck.length}
        </Button>

        <ul className="grid grid-cols-4 gap-2">
          <li className="h-32 w-24 rounded border border-windows-black"></li>
          <li className="h-32 w-24 rounded border border-windows-black"></li>
          <li className="h-32 w-24 rounded border border-windows-black"></li>
          <li className="h-32 w-24 rounded border border-windows-black"></li>
        </ul>
      </div>

      {/* tableau */}
      <ul className="row-span-full row-start-2 grid w-full grid-cols-7 border border-blue-500">
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
        <li className="col-span-1 h-32 w-24 border border-windows-black"></li>
      </ul>

      <Button
        variant={"destructive"}
        onClick={() => shuffleCards()}
        className="absolute bottom-12 right-8"
        id="resetGame"
        aria-roledescription="Reset solitaire game"
      >
        Reset
      </Button>
    </section>
  )
}
