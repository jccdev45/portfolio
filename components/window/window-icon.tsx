import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  bottomStyle?: string;
  handleClick: () => void;
  icon: React.ReactNode;
  title: string;
  topStyle?: string;
};

export function WindowIcon({
  bottomStyle,
  handleClick,
  icon,
  title,
  topStyle,
}: Props) {
  return (
    <figure
      className={cn(
        `flex flex-col items-center text-center justify-center col-span-1 lg:col-span-3 cursor-pointer p-1 h-full w-full md:w-1/2 lg:w-3/4`,
        topStyle
      )}
      onClick={handleClick}
    >
      <span className="w-1/3 lg:w-1/3">{icon}</span>
      <figcaption
        className={cn(`text-xs md:text-sm truncate w-3/4 mx-auto`, bottomStyle)}
      >
        {title}
      </figcaption>
    </figure>
  );
}
