"use client"

import { useLayoutEffect } from "react"
import type { JSX } from "react"
import { windowIconAtom, windowTitleAtom } from "@/atoms/atoms"
import { useSetAtom } from "jotai"

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
  const setIcon = useSetAtom(windowIconAtom)
  const setTitle = useSetAtom(windowTitleAtom)

  // Use useLayoutEffect to set the state after rendering
  useLayoutEffect(() => {
    setIcon(icon)
    setTitle(title)
  }, [setIcon, setTitle, icon, title])

  return (
    <WindowContent bottomBar>
      <WindowHeader />
      {menu && <WindowMenu menu={menu} />}
      <div className={cn(`relative size-full`)}>{children}</div>
      {bottomBar && <WindowBottomBar />}
    </WindowContent>
  )
}
