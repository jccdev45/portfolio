"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-windows border-windows-white border-t-windows-dark border-l-windows-dark shadow-[inset_-1px_-1px_0_0_theme(colors.windows.black),inset_1px_1px_0_0_theme(colors.windows.white)] border-2 p-3",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption:
          "flex justify-center relative items-center bg-windows-blue text-windows-white font-bold p-2",
        caption_label: "text-sm",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-windows border-2 border-windows-white border-t-windows-dark border-l-windows-dark p-0 hover:bg-windows-light active:border-windows-dark active:border-t-windows-white active:border-l-windows-white"
        ),
        nav_button_previous: "absolute left-1 rounded-none",
        nav_button_next: "absolute right-1 rounded-none",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-windows-black w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:bg-windows-blue [&:has(>.day-range-start)]:bg-windows-blue"
            : "[&:has([aria-selected])]:bg-windows-blue"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-windows-black hover:bg-windows-blue/80 hover:text-windows-white active:border-windows-dark active:border-t-windows-white active:border-l-windows-white hover:rounded-none rounded-none"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-windows-blue text-windows-white hover:bg-windows-blue hover:text-windows-white focus:bg-windows-blue focus:text-windows-white focus:rounded-none hover:rounded-none",
        day_today:
          "bg-windows-blue text-windows-white hover:rounded-none focus:rounded-none rounded-none",
        day_outside: "day-outside text-windows-dark opacity-50",
        day_disabled: "text-windows-dark opacity-50",
        day_range_middle: "bg-windows-blue text-windows-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeftIcon className="text-windows-white h-4 w-4" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRightIcon className="text-windows-white h-4 w-4" />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
