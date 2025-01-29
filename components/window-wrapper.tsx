"use client"

import type { JSX } from "react"
import { WindowProvider } from "@/context/window-context"

import { MenuItemType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { WindowBottomBar } from "@/components/window-bottom-bar"
import { WindowContent } from "@/components/window-content"
import { WindowHeader } from "@/components/window-header"
import { WindowMenu } from "@/components/window-menu"

interface WindowWrapperProps {
  bottomBar: boolean
  children: React.ReactNode
  icon: JSX.Element
  menu?: MenuItemType[]
  title: string
}

export function WindowWrapper({
  bottomBar,
  children,
  icon,
  menu,
  title,
}: WindowWrapperProps) {
  return (
    <WindowProvider icon={icon} title={title}>
      <WindowContent bottomBar>
        <WindowHeader />
        {menu && <WindowMenu menu={menu} />}
        <div className={cn(`relative size-full`)}>{children}</div>
        {bottomBar && <WindowBottomBar />}
      </WindowContent>
    </WindowProvider>
  )
}
