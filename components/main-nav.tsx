"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SliderProps } from "@radix-ui/react-slider"
import {
  LayoutPanelLeft,
  Power,
  StickyNote,
  Ungroup,
  Volume,
  Volume2,
} from "lucide-react"

import { startMenuItems } from "@/lib/constants"
import { Calendar } from "@/components/ui/calendar"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Clock from "@/components/desktop/clock"

interface MainNavProps {
  defaultValue?: SliderProps["defaultValue"]
}

export function MainNav({ defaultValue }: MainNavProps) {
  const path = usePathname()
  const withoutSlashes = path.replace(/\//g, "")

  const capitalized =
    withoutSlashes.charAt(0).toUpperCase() + withoutSlashes.slice(1)

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [value, setValue] = useState(defaultValue)

  return (
    <Menubar className="absolute bottom-0 left-0 flex h-12 w-screen justify-between rounded-none border border-t-windows-white bg-windows px-1">
      <div className="flex items-center gap-x-1">
        <MenubarMenu>
          <MenubarTrigger className="relative flex items-center justify-between rounded-none border-2 border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-1.5 py-1 shadow shadow-windows-dark data-[state=open]:border-2 data-[state=open]:border-b-windows-white data-[state=open]:border-l-windows-dark data-[state=open]:border-r-windows-white data-[state=open]:border-t-windows-dark data-[state=open]:bg-windows-white/30 data-[state=open]:text-windows-black data-[state=open]:shadow-inner data-[state=open]:shadow-windows-dark focus:bg-windows active:shadow-windows-dark">
            <Ungroup /> Start
          </MenubarTrigger>
          <MenubarContent className="relative mb-[-0.2rem] rounded-none bg-windows py-0 pl-6 pr-0">
            <div className="absolute left-0 h-full w-6 bg-windows-blue">
              <span className="absolute bottom-8 left-[-1.25rem] -rotate-90 text-sm tracking-widest text-windows-white">
                jccdev
              </span>
            </div>
            <MenubarSub>
              <MenubarSubTrigger className="rounded-none">
                <LayoutPanelLeft className="mr-2" /> Programs
              </MenubarSubTrigger>
              <MenubarSeparator />
              <MenubarSubContent className="rounded-none bg-windows">
                <MenubarItem className="rounded-none">
                  <Link href="/notepad" className="flex items-center">
                    <StickyNote className="mr-2" /> Notepad
                  </Link>
                </MenubarItem>
                {/* <MenubarItem className="rounded-none">
                  <Link href="/solitaire" className="flex items-center">
                    <Club className="mr-2" /> Solitaire
                  </Link>
                </MenubarItem> */}
              </MenubarSubContent>
            </MenubarSub>

            {startMenuItems.map((item) => (
              <MenubarItem key={item.id} className="rounded-none">
                <Link
                  href={item.link.href}
                  className="flex w-full cursor-pointer items-center"
                >
                  {item.link.text}
                </Link>
              </MenubarItem>
            ))}

            <MenubarSeparator />
            <MenubarItem className="rounded-none">
              <Power className="mr-2" /> Shut Down
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {capitalized.length > 0 && (
          <div className="mr-auto w-28 truncate border-2 border-windows-white border-l-windows-dark border-t-windows-dark bg-windows-white/30 px-1.5 py-1 shadow-inner shadow-windows-dark md:w-36 lg:w-44">
            {capitalized}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between shadow-inner shadow-windows-dark">
        <MenubarMenu>
          <TooltipProvider>
            <Tooltip>
              <MenubarTrigger>
                <TooltipTrigger asChild>
                  <span>
                    {/* {value && value.length > 0 ? <Volume2 /> : <Volume />} */}
                    {value && value[0] === 0 ? <Volume /> : <Volume2 />}
                  </span>
                </TooltipTrigger>
              </MenubarTrigger>
              <TooltipContent>
                <div>Volume: {value && value.length > 0 ? value[0] : 0} %</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <MenubarContent>
            <MenubarItem>
              <Slider
                id="volume"
                defaultValue={value}
                max={100}
                step={1}
                className="rounded-none bg-windows [&_[role=slider]]:size-5"
                onValueChange={setValue}
                aria-label="Volume"
              />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <TooltipProvider>
            <Tooltip>
              <MenubarTrigger>
                <TooltipTrigger asChild>
                  <span>
                    <Clock />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </TooltipContent>
              </MenubarTrigger>
            </Tooltip>
          </TooltipProvider>

          <MenubarContent className="mb-0.5 rounded-none bg-windows">
            <MenubarItem className="bg-windows">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-none border bg-windows-white shadow"
              />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  )
}
