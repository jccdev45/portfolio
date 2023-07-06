"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { WindowSidebar } from "@/components/window/window-sidebar";
import { WindowContent } from "@/components/window/window-content";
import { WindowIcon } from "@/components/window/window-icon";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems, toRecycle } from "@/lib/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RainbowSeparator } from "@/components/rainbow-separator";

export default function RecycleBinPage() {
  const [recycleItem, setRecycleItem] = useState<typeof toRecycle[0]>();

  return (
    <WindowWrapper
      title="Recycle Bin"
      icon={<Trash2 />}
      menu={menuItems.recycleBin}
      bottomBar
    >
      <div className="absolute inset-x-0 top-0 flex flex-col p-2 overflow-scroll bottom-6 lg:p-0 lg:flex-row gap-y-2 justify-evenly">
        <WindowSidebar className="flex flex-col justify-center w-full lg:p-2 md:justify-start gap-y-2 lg:w-1/3 lg:justify-evenly lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
          <div className="flex flex-col items-center justify-evenly">
            <Trash2 className="w-16 h-16 md:w-24 md:h-24" />
            <h2 className="max-w-full text-xl font-semibold">Recycle Bin</h2>

            <RainbowSeparator />
          </div>

          <div className="text-sm md:text-base">
            <h2 className="flex items-center max-w-full my-4 break-all gap-x-2">
              <span className="font-bold">File name: </span>
              {recycleItem?.title}
            </h2>

            <ul className="text-left">
              <li className="">
                <span className="font-bold">File type: </span>
                {recycleItem ? recycleItem.ext : `---`}
              </li>
              <li className="">
                <span className="font-bold">Size: </span>
                {recycleItem ? recycleItem.size : `0 b`}
              </li>
              <li className="">
                <span className="font-bold">Path: </span>
                {recycleItem ? recycleItem.path : `---`}
              </li>
            </ul>
          </div>
        </WindowSidebar>

        <WindowContent className="h-1/2 md:h-2/5 lg:h-full lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
          <ScrollArea className="w-full h-full">
            <div className="grid h-full grid-cols-2 p-2 place-items-center lg:grid-cols-12">
              {toRecycle.map((trash) => (
                <WindowIcon
                  key={trash.id}
                  icon={trash.icon}
                  title={trash.title}
                  topStyle={
                    trash === recycleItem
                      ? `border border-dashed border-windows-dark`
                      : ``
                  }
                  bottomStyle={
                    trash === recycleItem
                      ? `bg-windows-blue text-windows-white`
                      : ``
                  }
                  handleClick={() => {
                    trash !== recycleItem && setRecycleItem(trash);
                  }}
                />
              ))}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
