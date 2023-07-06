import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const playSound = (title: string) => {
  const audioElement = new Audio(`/${title}.mp3`);
  audioElement.play();
};
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
