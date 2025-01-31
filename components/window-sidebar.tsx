"use client"

import { useMediaQuery } from "usehooks-ts";

import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

type WindowPanelSidebarProps = {
  children: React.ReactNode
  className?: string
  size?: number
  minSize?: number
  maxSize?: number
}

export function WindowPanelSidebar({
  children,
  className,
  size,
  minSize = 20,
  maxSize = undefined,
}: WindowPanelSidebarProps) {
  const matches = useMediaQuery("(min-width: 850px)")
  const sizeWithQuery = !matches ? 30 : 50

  return (
    <ResizablePanel
      defaultSize={size ?? sizeWithQuery}
      minSize={minSize}
      maxSize={maxSize}
      className={cn(`h-fit md:h-full`, className)}
    >
      {children}
    </ResizablePanel>
  )
}
