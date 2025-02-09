"use client"

import { useState } from "react"
import { recycleMenuAtom } from "@/atoms/atoms"
import { useAtomValue } from "jotai"
import { Loader2, Trash2 } from "lucide-react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { RecycleItem } from "@/lib/types"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowIcon } from "@/components/window-icon"
import { WindowPanelContent } from "@/components/window-panel-content"
import { WindowPanelSidebar } from "@/components/window-sidebar"

export function Bin() {
  const [selectedRecycleItem, setSelectedRecycleItem] =
    useState<RecycleItem | null>(null)
  const recycleItems = useAtomValue(recycleMenuAtom)
  const isClient = useIsClient()
  const matches = useMediaQuery("(min-width: 850px)")
  const direction = matches ? "horizontal" : "vertical"

  if (!isClient) {
    return (
      <div className="grid size-full place-items-center">
        <Loader2 className="text-windows-blue size-20 animate-spin" />
      </div>
    )
  }

  return (
    <ResizablePanelGroup direction={direction} className="overflow-auto">
      <WindowPanelSidebar className="lg:border-windows-dark lg:shadow-windows-dark lg:border-r lg:shadow-inner">
        <div className="flex flex-row items-center justify-evenly md:p-4 lg:flex-col">
          <Trash2 className="size-16 lg:size-24" />
          <h2 className="max-w-full text-xl font-semibold">Recycle Bin</h2>
        </div>
        <RainbowSeparator />
        <RecycleItemDetails recycleItem={selectedRecycleItem} />
      </WindowPanelSidebar>

      <ResizableHandle withHandle />

      <WindowPanelContent className="scrollbar lg:shadow-windows-dark grid grid-cols-2 place-items-start overflow-scroll p-2 align-baseline md:grid-cols-4 lg:shadow-inner">
        {recycleItems?.map((item) => (
          <WindowIcon
            key={item.id}
            className="col-span-1 mx-auto flex aspect-square size-24 flex-col items-center justify-center p-1 md:size-32"
            icon={item.icon}
            title={item.title}
            topStyle={
              item === selectedRecycleItem
                ? "border border-dashed border-windows-dark"
                : ""
            }
            bottomStyle={
              item === selectedRecycleItem
                ? "bg-windows-blue text-windows-white break-words w-full"
                : "truncate"
            }
            handleClick={() => setSelectedRecycleItem(item)}
          />
        ))}
      </WindowPanelContent>
    </ResizablePanelGroup>
  )
}

interface RecycleItemDetailsProps {
  recycleItem: RecycleItem | null
}

function RecycleItemDetails({ recycleItem }: RecycleItemDetailsProps) {
  return (
    <div className="p-4 text-sm md:text-base">
      <ul className="text-left">
        <li>
          <span className="font-bold whitespace-nowrap">File name: </span>
          {recycleItem?.title || "---"}
        </li>
        <li>
          <span className="font-bold whitespace-nowrap">File type: </span>
          {recycleItem?.ext || "---"}
        </li>
        <li>
          <span className="font-bold whitespace-nowrap">Size: </span>
          {recycleItem?.size || "0 b"}
        </li>
        <li>
          <span className="font-bold whitespace-nowrap">Path: </span>
          {recycleItem?.path || "---"}
        </li>
      </ul>
    </div>
  )
}
