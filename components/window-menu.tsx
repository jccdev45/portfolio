"use client"

import Link from "next/link"

import { MenuItemType } from "@/lib/types"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

interface WindowMenuProps {
  menu: MenuItemType[]
}

export function WindowMenu({ menu }: WindowMenuProps) {
  return (
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
                    {item.icon}
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
  )
}
