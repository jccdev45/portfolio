import React from "react";
import { cn } from "@/lib/utils";
import { suitIcons, values } from "@/lib/constants";
import { CardType } from "@/lib/types";

export function Card({
  faceUp,
  offset,
  handleClick,
  suit,
  table,
  value,
}: CardType) {
  const tableStyle = table ? `absolute left-0 ${offset}` : ``;

  return (
    <div
      onClick={handleClick}
      className={cn(
        tableStyle,
        `w-[100px] h-[131px] cursor-pointer shadow-sm shadow-windows-black text-windows-dark grid grid-cols-12 place-items-center rounded-sm`,
        faceUp
          ? `bg-windows-white`
          : `bg-windows-blue border-solid border-windows-white border-2`
      )}
    >
      {faceUp && (
        <>
          <div className="absolute grid col-span-2 max-h-full grid-rows-2 mx-auto text-center top-0 left-0.5">
            <span
              className={cn(
                suit === `hearts` || suit === `diamonds`
                  ? `text-red-500`
                  : `text-black`
              )}
            >
              {values[value]}
            </span>{" "}
            {suitIcons[suit]}
          </div>
          <div className="absolute grid items-center justify-center w-2/3 grid-cols-2 col-span-8 grid-rows-2">
            {Array(Number(value))
              .fill(0)
              .map((_, idx) => (
                <span key={idx} className="mx-auto scale-125 m-0.5">
                  {suitIcons[suit]}
                </span>
              ))}
          </div>
          <div className="absolute grid col-span-2 grid-rows-2 mx-auto text-center rotate-180 bottom-0 right-0.5">
            <span
              className={cn(
                suit === `hearts` || suit === `diamonds`
                  ? `text-red-500`
                  : `text-black`
              )}
            >
              {values[value]}
            </span>
            {suitIcons[suit]}
          </div>
        </>
      )}
    </div>
  );
}
