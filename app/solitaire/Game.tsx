"use client";
import React, { useEffect, useState } from "react";

import { Card } from "@/components/solitaire/Card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardType, Suit } from "@/lib/types";

const createDeck = (): CardType[] => {
  const deck: CardType[] = [];

  for (let suit in Suit) {
    for (let value = 1; value <= 13; value++) {
      deck.push({
        idx: value,
        suit: Suit[suit as keyof typeof Suit],
        value,
        faceUp: false,
      });
    }
  }

  return deck;
};
const initialDeck = createDeck();

export function Game() {
  const [deck, setDeck] = useState<CardType[]>(initialDeck);
  const [tableau, setTableau] = useState<Array<CardType[]>>([]);
  const [foundation, setFoundation] = useState<CardType[][]>(
    Array.from({ length: 4 }, () => [])
  );

  useEffect(() => {
    dealCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleDeck = (deck: CardType[]): CardType[] => {
    const shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
  };

  const dealCards = () => {
    const shuffledDeck = shuffleDeck([...deck]);
    const tableauPiles: Array<CardType[]> = [];

    setDeck(shuffledDeck);

    for (let i = 0; i < 7; i++) {
      tableauPiles.push(
        shuffledDeck.splice(0, i + 1).map((card, index, array) => ({
          ...card,
          faceUp: index === array.length - 1,
          offset: `top-${index * 4}`,
        }))
      );
    }

    setTableau(tableauPiles);
    setDeck(shuffledDeck);
  };

  const handleDeckClick = () => {
    // Deal a card from the deck to the waste pile (tableau)
    const topDeckCard = deck[deck.length - 1];

    if (topDeckCard) {
      const newTableau = [...tableau];
      newTableau[0] = [...newTableau[0], { ...topDeckCard, faceUp: true }];
      setTableau(newTableau);
      setDeck((prevDeck) => {
        const updatedDeck: CardType[] = prevDeck.slice(0, prevDeck.length - 1);
        return updatedDeck;
      });
      return deck.slice(0, deck.length - 1);
    } else {
      return deck;
    }
  };

  const handleTableauClick = (pileIndex: number, cardIndex: number) => {
    const selectedPile = tableau[pileIndex];
    const selectedCard = selectedPile[cardIndex];

    if (!selectedCard.faceUp) {
      // Flip face-down card
      const updatedPile = selectedPile.map((card, index) =>
        index === cardIndex ? { ...card, faceUp: true } : card
      );

      const newTableau = [...tableau];
      newTableau[pileIndex] = updatedPile;
      return newTableau;
    } else {
      const selectedCardValue = selectedCard.value;
      let matchingFoundationPileIndex = -1;

      for (let i = 0; i < foundation.length; i++) {
        const foundationPile = foundation[i];
        console.log("Foundation pile:", foundationPile);
        if (
          foundationPile.length > 0 &&
          foundationPile[foundationPile.length - 1].suit ===
            selectedCard.suit &&
          foundationPile[foundationPile.length - 1].value + 1 ===
            selectedCardValue
        ) {
          matchingFoundationPileIndex = i;
          break; // terminate the loop
        }
      }

      if (matchingFoundationPileIndex !== -1) {
        // Move the card to the foundation pile
        const selectedCardMoved = selectedPile.slice(cardIndex);

        const updatedPile = selectedPile.slice(0, cardIndex);

        const newTableau = [...tableau];
        newTableau[pileIndex] = updatedPile;

        return newTableau;
      } else {
        return tableau;
      }
    }
  };

  return (
    <>
      <div className="relative grid h-full max-h-[90vh] grid-cols-9 grid-rows-4 p-3 gap-y-4 bg-windows-solitaire">
        {/* DECK */}
        <div className="col-span-1 row-span-1 cursor-pointer">
          {deck.length > 0 ? (
            <div
              className="w-[100px] h-[131px] grid place-items-center shadow-sm rounded-sm bg-windows-blue border-solid border-windows-white border-2 text-windows-white text-sm"
              onClick={() => {
                const newTableau = handleDeckClick();

                if (newTableau) {
                  setTableau((prevTableau) => [...prevTableau, newTableau]);
                }
              }}
            >
              Left: {deck.length}
            </div>
          ) : (
            <div
              className="w-[100px] h-[131px] shadow-sm rounded-sm border-2 border-dashed border-windows-dark"
              // onClick={handleDeckClick}
            ></div>
          )}
        </div>

        {/* FOUNDATION */}
        <div className="grid grid-cols-4 col-span-4 col-end-10 gap-x-4">
          {foundation.map((pile, pileIndex) => (
            <span
              key={pileIndex}
              className="col-span-1 border max-w-[100px] max-h-[131px] rounded border-windows-black"
            >
              {pile.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  idx={cardIndex}
                  suit={card.suit}
                  value={card.value}
                  faceUp={card.faceUp}
                />
              ))}
            </span>
          ))}
        </div>

        {/* TABLEAU */}
        <div className="grid grid-cols-7 place-items-center col-span-9 row-span-4 row-start-2 gap-2 max-h-[90%]">
          {tableau.length > 0 ? (
            tableau.map((pile, pileIndex) => (
              <div
                key={pileIndex}
                className="relative w-[110px] h-full mx-auto"
              >
                {pile.map((card, cardIndex) => (
                  <Card
                    key={cardIndex}
                    idx={cardIndex}
                    suit={card.suit}
                    value={card.value}
                    faceUp={card.faceUp}
                    offset={card.offset}
                    table={true}
                    handleClick={() => {
                      const newTableau = handleTableauClick(
                        pileIndex,
                        cardIndex
                      );

                      setTableau(newTableau);
                    }}
                  />
                ))}
              </div>
            ))
          ) : (
            <>
              {Array(7)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="w-[100px] h-[131px] mx-auto" />
                ))}
            </>
          )}
        </div>

        <Button className="absolute right-12 bottom-12" onClick={dealCards}>
          Reset
        </Button>
      </div>
    </>
  );
}
