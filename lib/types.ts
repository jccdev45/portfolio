export enum Suit {
  Hearts = "hearts",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Spades = "spades",
}

export interface Offset {
  [key: number]: string;
}

export interface Value {
  [key: number]: string;
}

export interface CardType {
  idx: number;
  suit: Suit;
  value: number;
  faceUp: boolean;
  table?: boolean;
  offset?: string;
  handleClick?: (event: React.MouseEvent) => void;
}
