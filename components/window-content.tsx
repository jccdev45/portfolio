"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useWindow } from "@/hooks/useWindow"

interface WindowContentProps {
  children: React.ReactNode
  bottomBar: boolean
}

export function WindowContent({ children, bottomBar }: WindowContentProps) {
  const { isMax } = useWindow()

  return (
    <div
      id="window-wrapper"
      className={cn(
        "border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows shadow-windows-dark absolute flex resize-none flex-col justify-evenly border-2 bg-white shadow-inner",
        isMax
          ? bottomBar
            ? "inset-0 h-[calc(100vh-48px)]"
            : "inset-0"
          : "top-[45%] left-1/2 mx-auto size-5/6 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      {children}
    </div>
  )
}
