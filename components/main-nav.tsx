"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SliderProps } from "@radix-ui/react-slider";
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
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Briefcase,
  Club,
  Contact,
  LayoutPanelLeft,
  Power,
  StickyNote,
  Terminal,
  Ungroup,
  Volume,
  Volume2,
} from "lucide-react";
import Clock from "./desktop/Clock";
import { Calendar } from "./ui/calendar";
import { Slider } from "./ui/slider";

interface MainNavProps {
  defaultValue?: SliderProps["defaultValue"];
}

export function MainNav({ defaultValue }: MainNavProps) {
  const path = usePathname();
  const withoutSlashes = path.replace(/\//g, "");

  // Capitalize the first letter
  const capitalized =
    withoutSlashes.charAt(0).toUpperCase() + withoutSlashes.slice(1);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [value, setValue] = useState(defaultValue);

  return (
    <Menubar className="absolute bottom-0 left-0 flex justify-between w-screen h-12 px-1 border rounded-none bg-windows border-t-windows-white">
      <div className="flex items-center justify-start w-1/5 gap-x-2">
        <MenubarMenu>
          <MenubarTrigger className="relative px-1.5 w-2/5 min-w-[80px] max-w-[90px] py-1 flex items-center justify-between border-2 rounded-none shadow shadow-windows-dark border-b-windows-dark border-r-windows-dark border-t-windows-white border-l-windows-white data-[state=open]:bg-windows-white/30 data-[state=open]:text-windows-black focus:bg-windows data-[state=open]:shadow-inner data-[state=open]:shadow-windows-dark data-[state=open]:border-2 data-[state=open]:border-t-windows-dark data-[state=open]:border-l-windows-dark data-[state=open]:border-r-windows-white data-[state=open]:border-b-windows-white active:shadow-windows-dark">
            <Ungroup /> Start
          </MenubarTrigger>
          <MenubarContent className="relative pl-6 py-0 pr-0 -mb-[0.2rem] rounded-none bg-windows">
            <div className="absolute left-0 w-6 h-full bg-windows-blue">
              <span className="absolute tracking-widest -rotate-90 -left-[1.25rem] bottom-8 text-sm text-windows-white">
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
                <MenubarItem className="rounded-none">
                  <Link href="/solitaire" className="flex items-center">
                    <Club className="mr-2" /> Solitaire
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem className="rounded-none">
              <Link
                href="/portfolio"
                className="flex items-center w-full cursor-pointer"
              >
                <Briefcase className="mr-2" /> Portfolio
              </Link>
            </MenubarItem>
            <MenubarItem className="rounded-none">
              <Link
                href="/contact"
                className="flex items-center w-full cursor-pointer"
              >
                <Contact className="mr-2" /> Contact
              </Link>
            </MenubarItem>
            <MenubarItem className="rounded-none">
              <Terminal className="mr-2" /> Run
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="rounded-none">
              <Power className="mr-2" /> Shut Down
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {capitalized.length > 0 && (
          <div className="min-w-[125px] max-w-[175px] border-2 border-t-windows-dark border-l-windows-dark border-b-windows-white border-r-windows-white mr-auto bg-windows-white/30 col-span-2 shadow-inner shadow-windows-dark border-windows-white py-1 px-1.5 w-28 md:w-36 lg:w-44 truncate">
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
                  {/* @ts-ignore */}
                  <span>{value > 0 ? <Volume2 /> : <Volume />}</span>
                </TooltipTrigger>
              </MenubarTrigger>
              <TooltipContent>
                {/* @ts-ignore */}
                <p>Volume: {value ? value * 100 : 0} %</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <MenubarContent>
            <MenubarItem>
              <Slider
                id="volume"
                defaultValue={value}
                max={1}
                step={0.1}
                className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
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

          <MenubarContent>
            <MenubarItem>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md shadow"
              />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
