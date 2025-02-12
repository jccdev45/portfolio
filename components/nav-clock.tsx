"use client"

import { useTime } from "react-timer-hook"

import { useLiveDate } from "@/hooks/useTime"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function NavClock() {
  const { minutes, hours, ampm } = useTime({ format: "12-hour" })
  const { date } = useLiveDate()
  const formattedDate = date?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className="data-[state=open]:border-windows-black focus:border-windows-black rounded-none pr-2 select-none focus:border focus:border-dashed focus:bg-transparent data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:bg-transparent"
        >
          <div className="flex items-center gap-0.5">
            <span>
              {hours}
              <span className="animate-pulse">:</span>
              {minutes}
            </span>
            <span className="uppercase">{ampm}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-windows-dark text-windows-white rounded-none">
          <p>{formattedDate}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
