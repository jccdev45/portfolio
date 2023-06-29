"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { SliderProps } from "@radix-ui/react-slider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Club,
  Contact2,
  Files,
  LayoutPanelLeft,
  Power,
  StickyNote,
  Terminal,
  Ungroup,
  Volume,
  Volume2,
} from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Slider } from "./ui/slider";
import Link from "next/link";
import Clock from "./desktop/Clock";

interface Props {
  defaultValue?: SliderProps["defaultValue"];
}

export function MainNav({ defaultValue }: Props) {
  const path = usePathname();
  const withoutSlashes = path.replace(/\//g, "");

  // Capitalize the first letter
  const capitalized =
    withoutSlashes.charAt(0).toUpperCase() + withoutSlashes.slice(1);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [value, setValue] = useState(defaultValue);

  return (
    <Menubar className="absolute bottom-0 left-0 grid w-screen h-12 grid-cols-12 px-1 border rounded-none bg-windows border-t-windows-white">
      <MenubarMenu>
        <MenubarTrigger className="relative flex items-center col-start-1 col-span-1 justify-between border-2 rounded-none shadow shadow-windows-dark border-b-windows-dark border-r-windows-dark border-t-windows-white border-l-windows-white data-[state=open]:bg-windows-white/70 data-[state=open]:text-windows-black px-1.5 py-1 focus:bg-windows data-[state=open]:shadow-inner data-[state=open]:border-t-windows-dark data-[state=open]:border-l-windows-dark data-[state=open]:border-r-windows-white data-[state=open]:border-b-windows-white active:shadow-windows-dark data-[state=open]:border-dashed data-[state=open]:border-windows-dark">
          <Ungroup /> Start
        </MenubarTrigger>
        <MenubarContent className="relative pl-4 -mb-1 rounded-none bg-windows -z-0">
          <div className="absolute left-0 w-4 h-full bg-windows-blue"></div>
          <MenubarSub>
            <MenubarSubTrigger>
              <LayoutPanelLeft className="mr-2" /> Programs
            </MenubarSubTrigger>
            <MenubarSeparator />
            <MenubarSubContent className="bg-windows">
              <MenubarItem>
                <Contact2 /> Contact
              </MenubarItem>
              <MenubarItem>
                <Link href="/notepad" className="flex items-center">
                  <StickyNote /> Notepad
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/solitaire" className="flex items-center">
                  <Club /> Solitaire
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem className="my-4">
            <Files className="mr-2" /> Documents
            <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Terminal className="mr-2" /> Run{" "}
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Power className="mr-2" /> Shut Down{" "}
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {capitalized.length > 0 && (
        <div className="border mr-auto border-dashed col-auto col-start-2 shadow-inner shadow-windows-dark border-windows-white py-1 px-1.5 w-44 truncate">
          {capitalized}
        </div>
      )}

      <div className="flex items-center justify-between col-span-1 col-end-13 shadow-inner shadow-windows-dark">
        <MenubarMenu>
          <MenubarTrigger className="">
            {/* @ts-ignore */}
            {value > 0 ? <Volume2 /> : <Volume />}
          </MenubarTrigger>
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
          <MenubarTrigger className="">
            <Clock />
          </MenubarTrigger>
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
