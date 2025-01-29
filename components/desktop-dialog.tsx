import { Computer } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

import { DialogDesc } from "@/components/dialog-description";
import { AscendButton, DescendButton } from "@/components/sort-buttons";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { performanceStatusItems } from "@/lib/constants";

export function DesktopDialog() {
  return (
    <Dialog>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="-z-0 mx-auto grid h-screen w-1/3 place-items-center">
            <Image
              src="/download.png"
              alt="Logo for jccdev"
              height={200}
              width={200}
              priority
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="border border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-windows text-windows-black">
          <ContextMenuSub>
            <ContextMenuSubTrigger>Arrange Icons</ContextMenuSubTrigger>
            <ContextMenuSubContent className="rounded-none border-none bg-windows text-windows-black">
              <AscendButton />
              <DescendButton />
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem disabled>Paste</ContextMenuItem>
          <ContextMenuSeparator />
          {/* NOTE: Make functional? */}
          {/* <ContextMenuSub>
            <ContextMenuSubTrigger>New</ContextMenuSubTrigger>
            <ContextMenuSubContent className="rounded-none border-none bg-windows text-windows-black">
              <ContextMenuItem>Folder</ContextMenuItem>
              <ContextMenuItem>Shortcut</ContextMenuItem>
              <ContextMenuSeparator />
            </ContextMenuSubContent>
          </ContextMenuSub> */}
          <DialogTrigger asChild>
            <ContextMenuItem>Properties</ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DialogContent className="border-2 border-b-windows-black/80 border-l-windows-white border-r-windows-black/80 border-t-windows-white bg-windows p-0 sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="flex h-8 w-full select-none items-center justify-between bg-linear-to-r from-windows-blue to-[rgb(0,126,196)] px-1.5 py-0.5 text-windows-white md:h-9">
            System Properties
          </DialogTitle>
          {/* NOTE: Changed to custom DialogDescription component to change from <p> to <div>, removing the errors of invalid nesting where certain elements cannot be a descendant of a <p> */}
          <DialogDesc className="p-2">
            <Tabs
              defaultValue="general"
              className="border-2 border-x-0 border-t-0 border-b-windows-black text-windows-black"
            >
              <TabsList className="rounded-none bg-transparent p-0">
                <TabsTrigger
                  className="group/general rounded-b-none rounded-t-lg border-2 border-b-windows border-l-windows-white border-r-windows-black border-t-windows-white text-windows-black data-[state=active]:-mb-1 data-[state=active]:bg-windows data-[state=active]:shadow-none"
                  value="general"
                >
                  <span className="group-data-[state=active]/general:border group-data-[state=active]/general:border-dashed group-data-[state=active]/general:border-windows-black group-data-[state=active]/general:px-1">
                    General
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  className="group/performance rounded-b-none rounded-t-lg border-2 border-b-windows border-l-windows-white border-r-windows-black border-t-windows-white text-windows-black data-[state=active]:-mb-1 data-[state=active]:bg-windows data-[state=active]:shadow-none"
                  value="performance"
                >
                  <span className="group-data-[state=active]/performance:border group-data-[state=active]/performance:border-dashed group-data-[state=active]/performance:border-windows-black group-data-[state=active]/performance:px-1">
                    Performance
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="general"
                className="-mt-1 border-2 border-b-0 border-l-windows-white border-r-windows-black border-t-windows-white px-2 py-4"
              >
                <section
                  className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-6"
                  role="region"
                  aria-label="General Information"
                >
                  <figure
                    className="grid grid-rows-2 gap-8 text-center"
                    role="figure"
                    aria-label="Computer Icon"
                  >
                    <Computer className="m-auto size-20" />
                    <figcaption>Manufactured/supported by:</figcaption>
                  </figure>
                  <article className="flex flex-col gap-8 px-8 text-left sm:px-0 sm:py-4">
                    <section aria-labelledby="system-info">
                      <h3 id="system-info" className="font-bold">
                        System:
                      </h3>
                      <ul className="ml-6 list-disc">
                        <li>MicroSquishy Doors 98</li>
                        <li>Slightly Used Edition</li>
                        <li>4.10.BLUE A</li>
                      </ul>
                    </section>
                    <section aria-labelledby="registration-info">
                      <h3 id="registration-info" className="font-bold">
                        Registered to:
                      </h3>
                      <ul className="ml-6 list-disc">
                        <li>FauxIntel</li>
                        <li>Aluminum(tm) II Toaster</li>
                        <li>128.0MB of Hopes and Dreams</li>
                        <li className="h-4 list-none"></li>
                        <li>Probably Stolen</li>
                        <li>Capri Sun(r) Cooled</li>
                        <li>2 Hamsters of Processing Power</li>
                      </ul>
                    </section>
                  </article>
                </section>
              </TabsContent>
              <TabsContent
                value="performance"
                className="-mt-1 border-2 border-b-0 border-l-windows-white border-r-windows-black border-t-windows-white px-2 py-4"
              >
                <section
                  className="flex flex-col gap-4 text-windows-blue"
                  role="region"
                  aria-label="Performance Information"
                >
                  <article
                    className="border border-windows-dark"
                    aria-labelledby="performance-status"
                  >
                    <h3
                      id="performance-status"
                      className="-mt-3 ml-2 w-fit bg-windows px-1 font-bold"
                    >
                      Performance status
                    </h3>
                    <dl className="grid grid-cols-3 px-4 py-2">
                      {performanceStatusItems.map((item) => (
                        <Fragment key={item.id}>
                          <dt>{item.title}</dt>
                          <dd>{item.value}</dd>
                          <dd></dd>
                        </Fragment>
                      ))}
                    </dl>
                  </article>
                  <article
                    className="border border-windows-dark"
                    aria-labelledby="advanced-settings"
                  >
                    <h3
                      id="advanced-settings"
                      className="-mt-3 ml-2 w-fit bg-windows px-1 font-bold"
                    >
                      Advanced settings
                    </h3>
                    <nav
                      className="grid grid-cols-3 gap-2 p-2"
                      aria-label="Advanced setting options"
                    >
                      <Button variant="windows">File system...</Button>
                      <Button variant="windows">Graphics...</Button>
                      <Button variant="windows">Virtual Memory...</Button>
                    </nav>
                  </article>
                </section>
              </TabsContent>
            </Tabs>
          </DialogDesc>
        </DialogHeader>
        <DialogFooter className="px-4 pb-4">
          <DialogClose asChild>
            <Button variant="windows">OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
