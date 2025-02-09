"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { recycleMenuAtom } from "@/atoms/atoms"
import { useSetAtom } from "jotai"

import { MenuItem, MenuItemType } from "@/lib/types"
import { cn } from "@/lib/utils"
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
  const setRecycleItems = useSetAtom(recycleMenuAtom)
  const path = usePathname()

  function isItemDisabled(item: MenuItem) {
    return item.title === "Back" && path === "/blog"
  }

  return (
    <Menubar className="bg-windows h-8 rounded-none border-0 md:h-9">
      {menu.map((menuItem) => (
        <MenubarMenu key={menuItem.trigger}>
          <MenubarTrigger className="data-[state=open]:outline-windows-dark data-[state=open]:bg-windows/70 focus:bg-windows/50 rounded-none data-[state=open]:shadow-inner data-[state=open]:outline data-[state=open]:outline-dashed">
            {menuItem.trigger}
          </MenubarTrigger>
          <MenubarContent className="bg-windows -mt-1 ml-0 rounded-none">
            {menuItem.items.map((item) => (
              <MenubarItem
                key={item.title}
                disabled={isItemDisabled(item)}
                className={cn("hover:bg-windows-blue hover:text-windows-white")}
                onSelect={() => {
                  if (item.title === "Empty") {
                    setRecycleItems([])
                  }
                }}
              >
                {item.title === "Back" && (
                  <Link href="/blog" className="flex w-full items-center">
                    {item.icon}
                    <span className="mx-2">{item.title}</span>
                  </Link>
                )}
                {item.title === "Exit" && (
                  <Link
                    href="/"
                    className="flex w-full items-center hover:bg-transparent"
                  >
                    {item.icon}
                    <span className="mx-2">{item.title}</span>
                  </Link>
                )}
                {item.title !== "Back" && item.title !== "Exit" && (
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
