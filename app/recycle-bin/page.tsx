"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { WindowSidebar } from "@/components/window/window-sidebar";
import { WindowContent } from "@/components/window/window-content";
import { WindowIcon } from "@/components/window/window-icon";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems, toRecycle } from "@/lib/constants";

export default function RecycleBinPage() {
  const [recycleItem, setRecycleItem] = useState<typeof toRecycle[0]>();

  return (
    <WindowWrapper
      title="Recycle Bin"
      icon={<Trash2 />}
      menu={menuItems.recycleBin}
    >
      <div className="grid w-full min-h-full grid-cols-12">
        <WindowSidebar>
          <div className="flex flex-col items-center justify-evenly">
            <span className="scale-110">
              <Trash2 className="w-24 h-24" />
            </span>
            <h2 className="max-w-full text-xl font-semibold">Recycle Bin</h2>

            <div className="grid w-full grid-cols-4">
              <span className="h-0.5 col-span-1 bg-red-400"></span>
              <span className="h-0.5 col-span-1 bg-yellow-400"></span>
              <span className="h-0.5 col-span-1 bg-green-400"></span>
              <span className="h-0.5 col-span-1 bg-blue-400"></span>
            </div>
          </div>

          <div>
            <h2 className="flex items-center max-w-full my-4 text-xl break-all gap-x-2">
              <span className="scale-110">
                {recycleItem ? (
                  recycleItem.icon
                ) : (
                  <span className="w-24 h-24"></span>
                )}
              </span>
              {recycleItem ? recycleItem.title : ""}
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
