import React from "react";
import { cn } from "@/lib/utils";

type WindowSidebarProps = {
  children: React.ReactNode;
  style?: string;
};

export function WindowSidebar({ children, style }: WindowSidebarProps) {
  return (
    <aside
      id="sidebar"
      className={cn(
        `gap-y-2 md:gap-y-8 w-full lg:w-1/3 h-2/5 md:h-full flex flex-col p-2 pb-0 md:p-2 text-center items-center`,
        style
      )}
    >
      {children}
    </aside>
  );
}
