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
    <div
      className={cn(
        `flex flex-col col-span-1 row-span-1 items-center justify-center cursor-pointer m-auto h-full md:row-span-2 lg:row-span-1 w-3/4 md:w-2/3 lg:h-2/3`,
        topStyle
      )}
      onClick={handleClick}
    >
      <span className="w-8 h-8 md:w-20 md:h-20 lg:w-16 lg:h-16">{icon}</span>
      <p className={cn(`text-sm truncate max-w-full`, bottomStyle)}>{title}</p>
    </div>
  );
}
