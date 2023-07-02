import React from "react";
import { cn } from "@/lib/utils";

type WindowSidebarProps = {
  children: React.ReactNode;
  style?: string;
};

export function WindowSidebar({ children, style }: WindowSidebarProps) {
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
}
