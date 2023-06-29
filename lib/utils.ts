import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export enum Suit {
  Hearts = "hearts",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Spades = "spades",
}

export interface Card {
  idx: number | string;
  suit: Suit | any;
  value: number;
  faceUp: boolean;
  table?: boolean;
  offset?: string;
  onClick?: () => void;
}
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
