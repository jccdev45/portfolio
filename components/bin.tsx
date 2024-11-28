"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { toRecycle } from "@/lib/constants"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowIcon } from "@/components/window-icon"
import { WindowPanelContent } from "@/components/window-panel-content"
import { WindowPanelSidebar } from "@/components/window-sidebar"

export function Bin() {
  const [recycleItem, setRecycleItem] = useState<(typeof toRecycle)[0]>()
  const isClient = useIsClient()
  const matches = useMediaQuery("(min-width: 850px)")
  const dir = matches ? `horizontal` : `vertical`

  if (!isClient) {
    return (
      <div className="grid size-full place-items-center">
        <Loader2 className="size-20 animate-spin text-windows-blue" />
      </div>
    )
  }

  return (
    <ResizablePanelGroup direction={dir} className="overflow-auto">
      <WindowPanelSidebar className="lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
        <div className="p-4 text-sm md:text-base">
          <ul className="text-left">
            <li className="">
              <span className="whitespace-nowrap font-bold">Image: </span>
              {recycleItem?.ext === ".jpg" || recycleItem?.ext === ".png" ? (
                <img
                  src={recycleItem.path} // Make sure this points to the correct image URL
                  alt={recycleItem.title}
                  className="mt-2 h-56 w-56 border border-windows-dark object-cover"
                />
              ) : (
                "No image available"
              )}
            </li>
          </ul>
        </div>
        <RainbowSeparator />

        <div className="p-4 text-sm md:text-base">
          <ul className="text-left">
            <li className="">
              <span className="whitespace-nowrap font-bold">File name: </span>
              {recycleItem?.title}
            </li>
            <li className="">
              <span className="whitespace-nowrap font-bold">File type: </span>
              {recycleItem ? recycleItem.ext : `---`}
            </li>
            <li className="">
              <span className="whitespace-nowrap font-bold">Size: </span>
              {recycleItem ? recycleItem.size : `0 b`}
            </li>
            <li className="">
              <span className="whitespace-nowrap font-bold">Path: </span>
              {recycleItem ? recycleItem.path : `---`}
            </li>
          </ul>
        </div>
      </WindowPanelSidebar>

      <ResizableHandle withHandle />

      <WindowPanelContent className="grid grid-cols-2 place-items-start overflow-scroll p-2 align-baseline scrollbar md:grid-cols-4 lg:shadow-inner lg:shadow-windows-dark">
        {toRecycle.map((trash) => (
          <WindowIcon
            key={trash.id}
            className="col-span-1 mx-auto flex aspect-square size-24 flex-col items-center justify-center p-1 md:size-32"
            icon={trash.icon}
            title={trash.title}
            topStyle={
              trash === recycleItem
                ? `border border-dashed border-windows-dark`
                : ``
            }
            bottomStyle={
              trash === recycleItem
                ? `bg-windows-blue text-windows-white break-words w-full`
                : `truncate`
            }
            handleClick={() => {
              trash !== recycleItem && setRecycleItem(trash)
            }}
          />
        ))}
      </WindowPanelContent>
    </ResizablePanelGroup>
  )
}
