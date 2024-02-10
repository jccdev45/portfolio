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
          <div className="absolute left-0.5 top-0 col-span-2 mx-auto grid max-h-full grid-rows-2 text-center">
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
          <div className="absolute col-span-8 grid w-2/3 grid-cols-2 grid-rows-2 items-center justify-center">
            {Array(Number(value))
              .fill(0)
              .map((_, idx) => (
                <span key={idx} className="m-0.5 mx-auto scale-125">
                  {suitIcons[suit]}
                </span>
              ))}
          </div>
          <div className="absolute bottom-0 right-0.5 col-span-2 mx-auto grid rotate-180 grid-rows-2 text-center">
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
