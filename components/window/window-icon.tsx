import React from "react"

import { cn } from "@/lib/utils"

type Props = {
  handleClick: () => void
  icon: React.ReactNode
  title: string
  bottomStyle?: string
  className?: string
  topStyle?: string
}

export function WindowIcon({
  bottomStyle,
  className,
  handleClick,
  icon,
  title,
  topStyle,
}: Props) {
  return (
    <figure
      className={cn(`cursor-pointer text-center`, topStyle, className)}
      onClick={handleClick}
    >
      <span className="w-1/3">{icon}</span>
      <figcaption
        className={cn(`mx-auto w-3/4 text-xs md:text-sm`, bottomStyle)}
      >
        {title}
      </figcaption>
    </figure>
  )
}
