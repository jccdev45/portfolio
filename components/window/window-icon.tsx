import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  bottomStyle?: string;
  handleClick: () => void;
  icon: React.ReactNode;
  title: string;
  topStyle?: string;
};

const WindowIcon = ({
  bottomStyle,
  handleClick,
  icon,
  title,
  topStyle,
}: Props) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center col-span-3 cursor-pointer w-3/4 mx-auto h-full`,
        topStyle
      )}
      onClick={handleClick}
    >
      <span className="scale-75">{icon}</span>
      <p className={cn(`text-sm truncate max-w-full`, bottomStyle)}>{title}</p>
    </div>
  );
};

export default WindowIcon;
