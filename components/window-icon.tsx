"use client"

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  bottomStyle?: string
  children: ReactNode
  className?: string
  handleClick: () => void
  title: string
  topStyle?: string
}

export function WindowIcon({
  bottomStyle,
  children,
  className,
  handleClick,
  title,
  topStyle,
}: Props) {
  return (
    <figure
      className={cn(`cursor-pointer text-center`, topStyle, className)}
      onClick={handleClick}
    >
      {/* <Icon className="w-1/3" /> */}
      {children}
      <figcaption
        className={cn(`mx-auto w-3/4 text-xs md:text-sm`, bottomStyle)}
      >
        {title}
      </figcaption>
    </figure>
  )
}
