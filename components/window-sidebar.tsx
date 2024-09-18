"use client"

import { useMediaQuery } from "usehooks-ts";

import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

type WindowPanelSidebarProps = {
  children: React.ReactNode
  className?: string
}

export function WindowPanelSidebar({
  children,
  className,
}: WindowPanelSidebarProps) {
  const matches = useMediaQuery("(min-width: 850px)")
  const size = !matches ? 30 : 50

  return (
    <ResizablePanel
      defaultSize={size}
      minSize={20}
      className={cn(`h-fit md:h-full`, className)}
    >
      {children}
    </ResizablePanel>
  )
}
