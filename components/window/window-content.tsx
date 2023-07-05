import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";

type WindowContentProps = {
  children: React.ReactNode;
  style?: string;
};

export function WindowContent({ children, style }: WindowContentProps) {
  return (
    <section
      id="content"
      className={cn(
        `w-full md:h-full p-2 pt-0 md:p-2 space-4 grid grid-cols-2 md:grid-rows-4 md:grid-cols-2 lg:grid-cols-4`,
        style
      )}
    >
      {children}
    </section>
  );
}
