import { cn } from "@/lib/utils";
import React from "react";

type WindowSidebarProps = {
  children: React.ReactNode;
  style?: string;
};

const WindowSidebar = ({ children, style }: WindowSidebarProps) => {
  return (
    <div
      className={cn(
        `grid col-span-4 grid-rows-3 gap-y-8 max-w-[350px] h-full max-h-[80vh] p-2 text-center`,
        style
      )}
    >
      {children}
    </div>
  );
};

export default WindowSidebar;
