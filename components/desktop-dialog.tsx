import { Fragment } from "react"
import Image from "next/image"
import { Computer } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DialogDesc } from "@/components/dialog-description"
import { AscendButton, DescendButton } from "@/components/sort-buttons"

const PERFORMANCE_STATUS_ITEMS = [
  { id: 1, title: "CPU Usage:", value: "99% (Thinking Hard)" },
  { id: 2, title: "Memory:", value: "98% (Holding On)" },
  { id: 3, title: "Disk Space:", value: "5MB Left (Good Luck)" },
  { id: 4, title: "Graphics:", value: "256 Colors (Barely)" },
  { id: 5, title: "Sound Card:", value: "Beep Boop (Mono)" },
  { id: 6, title: "Internet:", value: "Dial-Up (56k Maybe)" },
  { id: 7, title: "Floppy Drive:", value: "Ready (For Retirement)" },
  { id: 8, title: "CD-ROM:", value: "Spinning (Sometimes)" },
  { id: 9, title: "Mouse:", value: "Ball Stuck (Clean It, Idiot)" },
  { id: 10, title: "Printer:", value: "Out of Paper (Always)" },
]

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
        <ContextMenuContent className="border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-windows text-windows-black border">
          <ContextMenuSub>
            <ContextMenuSubTrigger>Arrange Icons</ContextMenuSubTrigger>
            <ContextMenuSubContent className="bg-windows text-windows-black rounded-none border-none">
              <AscendButton />
              <DescendButton />
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem disabled>Paste</ContextMenuItem>
          <ContextMenuSeparator />
          <DialogTrigger asChild>
            <ContextMenuItem>Properties</ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DialogContent className="border-b-windows-black/80 border-l-windows-white border-r-windows-black/80 border-t-windows-white bg-windows border-2 p-0 sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="from-windows-blue text-windows-white flex h-8 w-full items-center justify-between bg-linear-to-r to-[rgb(0,126,196)] px-1.5 py-0.5 select-none md:h-9">
            System Properties
          </DialogTitle>
          <DialogDesc className="p-2">
            <Tabs
              defaultValue="general"
              className="border-b-windows-black text-windows-black border-2 border-x-0 border-t-0"
            >
              <TabsList className="rounded-none bg-transparent p-0">
                <TabsTrigger
                  className="group/general border-b-windows border-l-windows-white border-r-windows-black border-t-windows-white text-windows-black data-[state=active]:bg-windows rounded-t-lg rounded-b-none border-2 data-[state=active]:-mb-1 data-[state=active]:shadow-none"
                  value="general"
                >
                  <span className="group-data-[state=active]/general:border-windows-black group-data-[state=active]/general:border group-data-[state=active]/general:border-dashed group-data-[state=active]/general:px-1">
                    General
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  className="group/performance border-b-windows border-l-windows-white border-r-windows-black border-t-windows-white text-windows-black data-[state=active]:bg-windows rounded-t-lg rounded-b-none border-2 data-[state=active]:-mb-1 data-[state=active]:shadow-none"
                  value="performance"
                >
                  <span className="group-data-[state=active]/performance:border-windows-black group-data-[state=active]/performance:border group-data-[state=active]/performance:border-dashed group-data-[state=active]/performance:px-1">
                    Performance
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="general"
                className="border-l-windows-white border-r-windows-black border-t-windows-white -mt-1 border-2 border-b-0 px-2 py-4"
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
                    <figcaption>Manufactured by: Gil Bates</figcaption>
                  </figure>
                  <article className="flex flex-col gap-8 px-8 text-left sm:px-0 sm:py-4">
                    <section aria-labelledby="system-info">
                      <h3 id="system-info" className="font-bold">
                        System:
                      </h3>
                      <ul className="ml-6 list-disc">
                        {[
                          "MicroSquishy Doors 98",
                          "Secondhand Edition",
                          "Version 4.10.BLUE A (Beta)",
                        ].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                    <section aria-labelledby="registration-info">
                      <h3 id="registration-info" className="font-bold">
                        Registered to:
                      </h3>
                      <ul className="ml-6 list-disc">
                        {[
                          "Generic User",
                          "Intel 486DX2 (Overclocked to 66MHz)",
                          "16MB RAM (Upgraded from 8MB)",
                          "420MB Hard Drive (90% Full)",
                          "CD-ROM Drive (2x Speed, Sometimes)",
                          "Floppy Disk Drive (Still Kicking)",
                        ].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </article>
                </section>
              </TabsContent>
              <TabsContent
                value="performance"
                className="border-l-windows-white border-r-windows-black border-t-windows-white -mt-1 border-2 border-b-0 px-2 py-4"
              >
                <section
                  className="text-windows-blue flex flex-col gap-4"
                  role="region"
                  aria-label="Performance Information"
                >
                  <article
                    className="border-windows-dark border"
                    aria-labelledby="performance-status"
                  >
                    <h3
                      id="performance-status"
                      className="bg-windows -mt-3 ml-2 w-fit px-1 font-bold"
                    >
                      Performance status
                    </h3>
                    <dl className="grid grid-cols-3 px-4 py-2">
                      {PERFORMANCE_STATUS_ITEMS.map(({ id, title, value }) => (
                        <Fragment key={id}>
                          <dt>{title}</dt>
                          <dd>{value}</dd>
                          <dd></dd>
                        </Fragment>
                      ))}
                    </dl>
                  </article>
                  <article
                    className="border-windows-dark border"
                    aria-labelledby="advanced-settings"
                  >
                    <h3
                      id="advanced-settings"
                      className="bg-windows -mt-3 ml-2 w-fit px-1 font-bold"
                    >
                      Advanced settings
                    </h3>
                    <nav
                      className="grid grid-cols-3 gap-2 p-2"
                      aria-label="Advanced setting options"
                    >
                      {[
                        "File system...",
                        "Graphics...",
                        "Virtual Memory...",
                      ].map((item) => (
                        <Button key={item} variant="windows">
                          {item}
                        </Button>
                      ))}
                    </nav>
                  </article>
                </section>
              </TabsContent>
            </Tabs>
          </DialogDesc>
        </DialogHeader>
        <DialogFooter className="px-4 pb-4">
          <DialogClose asChild>
            <Button variant="windows" className="mx-auto w-fit">
              OK
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
