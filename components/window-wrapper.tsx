"use client"

import React from "react"
import Link from "next/link"
import { AppWindow, Laptop2, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

type WindowWrapperProps = {
  bottomBar: boolean
  children: React.ReactNode
  expand?: boolean
  icon: JSX.Element
  menu?: {
    trigger: string
    items: {
      title: string
      icon: JSX.Element
    }[]
  }[]
  title: string
}

export function WindowWrapper({
  bottomBar,
  children,
  expand,
  icon,
  menu,
  title,
}: WindowWrapperProps) {
  const [isMax, setIsMax] = React.useState<boolean | null>(expand || false)

  return (
    <div
      id="window-wrapper"
      className={cn(
        `absolute flex resize-none flex-col justify-evenly border-2 border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows bg-white shadow-inner shadow-windows-dark`,
        isMax
          ? bottomBar
            ? `inset-0 h-[calc(100vh-48px)]`
            : `inset-0`
          : `left-1/2 top-[45%] mx-auto size-5/6 -translate-x-1/2 -translate-y-1/2`
      )}
    >
      <div className="flex flex-col">
        <div className="flex h-8 w-full select-none items-center justify-between bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] px-1.5 py-0.5 text-windows-white md:h-9">
          <div className="flex items-center gap-x-2 text-sm">
            <>{icon}</>
            <p className="font-bold">{title}</p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
              onClick={() => setIsMax(!isMax)}
            >
              <AppWindow />
            </Button>
            <Button
              variant="ghost"
              className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
              asChild
            >
              <Link href="/">
                <X />
              </Link>
            </Button>
          </div>
        </div>

        {menu && (
          <Menubar className="h-8 rounded-none border-0 bg-windows md:h-9">
            {menu.map((menuItem) => (
              <MenubarMenu key={menuItem.trigger}>
                <MenubarTrigger className="data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:border-windows-dark data-[state=open]:bg-windows/70 data-[state=open]:shadow-inner focus:bg-windows/50">
                  {menuItem.trigger}
                </MenubarTrigger>
                <MenubarContent className="-mt-2 ml-1 rounded-none bg-windows">
                  {menuItem.items.map((item) => (
                    <MenubarItem key={item.title}>
                      {item.title === "Exit" ? (
                        <Link
                          href="/"
                          className="flex w-full items-center hover:bg-transparent"
                        >
                          <>{item.icon}</>{" "}
                          <span className="mx-2">{item.title}</span>
                        </Link>
                      ) : (
                        <>
                          {item.icon}
                          <span className="mx-2">{item.title}</span>
                        </>
                      )}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            ))}
          </Menubar>
        )}
      </div>

      <div className={cn(`relative size-full`)}>{children}</div>

      <div
        className={cn(
          `absolute inset-x-0 bottom-0 flex h-6 items-center justify-between gap-x-0.5 bg-windows`,
          !bottomBar && `hidden`
        )}
      >
        <div className="h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:w-1/4"></div>
        <div className="hidden h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:block"></div>
        <div className="flex h-full w-1/2 items-center border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark text-xs md:w-1/4 md:text-sm">
          <Laptop2 className="mx-2" />
          My Computer
        </div>
      </div>
    </div>
  )
}
