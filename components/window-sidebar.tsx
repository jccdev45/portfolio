"use client"

import { useMediaQuery } from "usehooks-ts"

import { cn } from "@/lib/utils"
import { ResizablePanel } from "@/components/ui/resizable"

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
      // className={cn(
      //   `grid col-span-4 grid-rows-3 gap-y-8 max-w-[350px] h-full max-h-[80vh] p-2 text-center`,
      //   style
      // )}
    >
      {children}
    </ResizablePanel>
  )
}
