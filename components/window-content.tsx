"use client"

import React from "react"
import { useWindowContext } from "@/context/window-context"

import { cn } from "@/lib/utils"

interface WindowContentProps {
  children: React.ReactNode
  bottomBar: boolean
}

export function WindowContent({ children, bottomBar }: WindowContentProps) {
  const { isMax } = useWindowContext()

  return (
    <div
      id="window-wrapper"
      className={cn(
        "absolute flex resize-none flex-col justify-evenly border-2 border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows bg-white shadow-inner shadow-windows-dark",
        isMax
          ? bottomBar
            ? "inset-0 h-[calc(100vh-48px)]"
            : "inset-0"
          : "left-1/2 top-[45%] mx-auto size-5/6 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      {children}
    </div>
  )
}
