import { cn } from "@/lib/utils";
import React from "react";

type WindowContentProps = {
  children: React.ReactNode;
  style?: string;
};

export function WindowContent({ children, style }: WindowContentProps) {
  return (
    <div
      className={cn(
        `grid w-full grid-cols-12 col-span-8 grid-rows-6 p-2 pb-0 space-4`,
        style
      )}
    >
      {children}
    </div>
  );
}
