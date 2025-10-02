"use client"

import { useLayoutEffect } from "react"
import { windowIconAtom, windowTitleAtom } from "@/atoms/atoms"
import { useSetAtom } from "jotai"

import type { MenuItemType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Icon, type IconType } from "@/components/icons"
import { WindowBottomBar } from "@/components/window-bottom-bar"
import { WindowContent } from "@/components/window-content"
import { WindowHeader } from "@/components/window-header"
import { WindowMenu } from "@/components/window-menu"

interface WindowWrapperProps {
  bottomBar: boolean
  children: React.ReactNode
  icon: IconType
  menu?: MenuItemType[]
  title: string
  allowMaximize?: boolean
}

export function WindowWrapper({
  bottomBar,
  children,
  icon,
  menu,
  title,
  allowMaximize = true,
}: WindowWrapperProps) {
  const setIcon = useSetAtom(windowIconAtom)
  const setTitle = useSetAtom(windowTitleAtom)

  // Use useLayoutEffect to set the state after rendering
  useLayoutEffect(() => {
    setIcon(<Icon iconName={icon} />)
    setTitle(title)
  }, [setIcon, setTitle, Icon, title])

  return (
    <WindowContent bottomBar allowMaximize={allowMaximize}>
      <WindowHeader allowMaximize={allowMaximize} />
      {menu && <WindowMenu menu={menu} />}
      <div className={cn(`relative size-full`)}>{children}</div>
      {bottomBar && <WindowBottomBar />}
    </WindowContent>
  )
}
