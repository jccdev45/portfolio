"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SliderProps } from "@radix-ui/react-slider"
import {
  Laptop2,
  LayoutPanelLeft,
  Power,
  StickyNote,
  Ungroup,
  Volume,
  Volume2,
  X,
} from "lucide-react"

import { startMenuItems } from "@/lib/constants"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Clock from "@/components/clock"

interface MainNavProps {
  defaultValue?: SliderProps["defaultValue"]
}

export function MainNav({ defaultValue }: MainNavProps) {
  const path = usePathname()
  const withoutSlashes = path.replace(/\//g, "")

  const sanitizedPathname = withoutSlashes
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [value, setValue] = useState(defaultValue)

  return (
    <AlertDialog>
      <Menubar className="absolute bottom-0 left-0 flex h-12 w-screen justify-between rounded-none border border-t-windows-white bg-windows px-1">
        <div className="flex items-center gap-x-1">
          <MenubarMenu>
            <MenubarTrigger className="relative flex items-center justify-between rounded-none border-2 border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-1.5 py-1 shadow shadow-windows-dark data-[state=open]:border-2 data-[state=open]:border-b-windows-white data-[state=open]:border-l-windows-dark data-[state=open]:border-r-windows-white data-[state=open]:border-t-windows-dark data-[state=open]:bg-windows-white/30 data-[state=open]:text-windows-black data-[state=open]:shadow-inner data-[state=open]:shadow-windows-dark focus:bg-windows active:shadow-windows-dark">
              <Ungroup /> Start
            </MenubarTrigger>
            <MenubarContent className="relative mb-[-0.2rem] rounded-none bg-windows py-0 pl-6 pr-0">
              <div className="absolute left-0 h-full w-6 border-r-2 border-windows-white bg-windows-blue">
                <span className="absolute -left-5 bottom-8 -rotate-90 text-sm tracking-widest text-windows-white">
                  JCCDEV
                </span>
              </div>
              <MenubarSub>
                <MenubarSubTrigger className="rounded-none hover:bg-windows-blue hover:text-windows-white">
                  <LayoutPanelLeft className="mr-2" /> Programs
                </MenubarSubTrigger>
                <MenubarSeparator />
                <MenubarSubContent className="rounded-none bg-windows">
                  <MenubarItem asChild>
                    <Link
                      href="/notepad"
                      className="flex size-full items-center"
                    >
                      <StickyNote className="mr-2" /> Notepad
                    </Link>
                  </MenubarItem>
                  {/* <MenubarItem>
                  <Link href="/solitaire" className="flex items-center">
                    <Club className="mr-2" /> Solitaire
                  </Link>
                </MenubarItem> */}
                </MenubarSubContent>
              </MenubarSub>

              {startMenuItems.map((item) => (
                <MenubarItem key={item.id} asChild>
                  <Link
                    href={item.link.href}
                    className="flex w-full cursor-pointer items-center"
                  >
                    {item.link.text}
                  </Link>
                </MenubarItem>
              ))}

              <MenubarSeparator />
              <AlertDialogTrigger asChild>
                <MenubarItem>
                  <Power className="mr-2" /> Shut Down
                </MenubarItem>
              </AlertDialogTrigger>
            </MenubarContent>
          </MenubarMenu>

          <AlertDialogContent className="rounded-none border-2 border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-windows p-0.5 shadow-sm">
            <div className="flex h-8 w-full select-none items-center justify-between bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] px-1.5 py-0.5 text-windows-white md:h-9">
              <div className="flex items-center gap-x-2 text-sm">
                <p className="font-bold">Shut Down</p>
              </div>
              <div className="flex items-center gap-1">
                <AlertDialogCancel asChild>
                  <Button
                    variant="ghost"
                    className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
                    asChild
                  >
                    <X />
                  </Button>
                </AlertDialogCancel>
              </div>
            </div>
            <div className="flex items-start gap-8 p-4">
              <Laptop2 className="size-10" />
              <div className="space-y-8">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-normal">
                    What do you want the computer to do?
                  </AlertDialogTitle>
                  <RadioGroup
                    defaultValue="shutdown"
                    className="text-windows-black"
                  >
                    <span className="flex items-center space-x-2 p-0.5">
                      <RadioGroupItem
                        className="peer border-b-windows-white border-l-windows-black border-r-windows-white border-t-windows-black bg-windows-white"
                        value="shutdown"
                        id="shutdown"
                      />
                      <Label
                        htmlFor="shutdown"
                        className="border-dashed peer-data-[state=checked]:border peer-data-[state=checked]:border-windows-black"
                      >
                        Shutdown
                      </Label>
                    </span>
                    <span className="flex items-center space-x-2 p-0.5">
                      <RadioGroupItem
                        className="peer border-b-windows-white border-l-windows-black border-r-windows-white border-t-windows-black bg-windows-white"
                        value="restart"
                        id="restart"
                      />
                      <Label
                        htmlFor="restart"
                        className="border-dashed peer-data-[state=checked]:border peer-data-[state=checked]:border-windows-black"
                      >
                        Restart
                      </Label>
                    </span>
                  </RadioGroup>
                </AlertDialogHeader>
                <AlertDialogFooter className="!justify-center">
                  <AlertDialogAction
                    className="w-28 rounded-none border-b-2 border-l border-r-2 border-t border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-transparent text-windows-black shadow shadow-windows-black hover:bg-transparent active:border-none active:bg-windows-white/50 active:shadow-inner active:shadow-windows-dark"
                    asChild
                  >
                    <Link href="/shutdown">OK</Link>
                  </AlertDialogAction>
                  <AlertDialogCancel className="w-28 rounded-none border-b-2 border-l border-r-2 border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-transparent shadow hover:bg-transparent active:border-none active:bg-windows-white/50 active:shadow-inner active:shadow-windows-dark">
                    Cancel
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </div>
            </div>
          </AlertDialogContent>

          {sanitizedPathname.length > 0 && (
            <div className="mr-auto w-28 truncate border-2 border-windows-white border-l-windows-dark border-t-windows-dark bg-windows-white/30 px-1.5 py-1 shadow-inner shadow-windows-dark md:w-36 lg:w-44">
              {sanitizedPathname}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between shadow-inner shadow-windows-dark">
          <MenubarMenu>
            <TooltipProvider>
              <Tooltip>
                <MenubarTrigger className="rounded-none data-[state=open]:bg-transparent focus:bg-transparent">
                  <TooltipTrigger asChild>
                    <span>
                      {value && value[0] === 0 ? <Volume /> : <Volume2 />}
                    </span>
                  </TooltipTrigger>
                </MenubarTrigger>
                <TooltipContent className="rounded-none bg-windows-dark text-windows-white">
                  <div>
                    Volume: {value && value.length > 0 ? value[0] : 0} %
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <MenubarContent className="bg-windows">
              <MenubarItem className="hover:bg-windows focus:bg-windows">
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
                <MenubarTrigger className="rounded-none data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:border-windows-black data-[state=open]:bg-transparent focus:border focus:border-dashed focus:border-windows-black focus:bg-transparent">
                  <TooltipTrigger asChild>
                    <Clock />
                  </TooltipTrigger>
                  <TooltipContent className="rounded-none bg-windows-dark text-windows-white">
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
    </AlertDialog>
  )
}
