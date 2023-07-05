"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { WindowSidebar } from "@/components/window/window-sidebar";
import { WindowContent } from "@/components/window/window-content";
import { WindowIcon } from "@/components/window/window-icon";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems, toRecycle } from "@/lib/constants";
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
      <div className="flex flex-col justify-around w-full h-full text-sm md:items-start md:text-base lg:flex-row md:justify-center">
        <WindowSidebar>
          <div className="flex flex-col items-center w-full justify-evenly">
            <span className="w-1/4 mx-auto md:w-1/6 lg:w-1/2">
              <Trash2 className="w-full h-full" />
            </span>
            <h2 className="max-w-full text-xl font-semibold">Recycle Bin</h2>

            <RainbowSeparator />
          </div>

          {/* <div> */}
          <h2 className="flex items-center w-full my-4 text-lg break-all gap-x-2">
            <span className="w-1/12 md:w-1/12 lg:w-1/6">
              {recycleItem ? (
                recycleItem.icon
              ) : (
                <span className="w-24 h-24"></span>
              )}
            </span>
            {recycleItem ? (
              <span className="w-5/6 text-sm md:text-lg lg:text-base">
                {recycleItem.title}
              </span>
            ) : (
              ""
            )}
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
          {/* </div> */}
        </WindowSidebar>

        <WindowContent>
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
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
