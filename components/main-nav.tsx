import Link from "next/link"
import {
  Laptop2,
  LayoutPanelLeft,
  Power,
  StickyNote,
  Ungroup,
  X,
} from "lucide-react"

import { START_MENU_ITEMS } from "@/lib/constants/start-menu-items"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Icon } from "@/components/icons"
import { NavClock } from "@/components/nav-clock"
import { NavWindowTitle } from "@/components/nav-window-title"
import { VolumeSlider } from "@/components/volume-slider"

export function MainNav() {
  return (
    <AlertDialog>
      <Menubar className="border-t-windows-white bg-windows absolute bottom-0 left-0 flex h-12 w-screen justify-between rounded-none border px-1">
        <div className="flex items-center gap-x-1">
          <MenubarMenu>
            <MenubarTrigger className="border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white shadow-windows-dark data-[state=open]:border-b-windows-white data-[state=open]:border-l-windows-dark data-[state=open]:border-r-windows-white data-[state=open]:border-t-windows-dark data-[state=open]:bg-windows-white/30 data-[state=open]:text-windows-black data-[state=open]:shadow-windows-dark focus:bg-windows active:shadow-windows-dark relative flex items-center justify-between rounded-none border-2 px-1.5 py-1 shadow-sm data-[state=open]:border-2 data-[state=open]:shadow-inner">
              <Ungroup /> Start
            </MenubarTrigger>
            <MenubarContent className="bg-windows relative mb-[-0.2rem] rounded-none py-0 pr-0 pl-6">
              <div className="border-windows-white bg-windows-blue absolute left-0 h-full w-6 border-r-2">
                <span className="text-windows-white absolute bottom-8 -left-5 -rotate-90 text-sm tracking-widest">
                  JCCDEV
                </span>
              </div>
              <MenubarSub>
                <MenubarSubTrigger className="hover:bg-windows-blue hover:text-windows-white rounded-none">
                  <LayoutPanelLeft className="mr-2" /> Programs
                </MenubarSubTrigger>
                <MenubarSeparator />
                <MenubarSubContent className="bg-windows rounded-none">
                  <MenubarItem asChild>
                    <Link
                      href="/notepad"
                      className="flex size-full items-center"
                    >
                      <StickyNote className="mr-2" /> Notepad
                    </Link>
                  </MenubarItem>
                  {/* <MenubarItem>
                  <Link href="/solitaire" className="flex items-center">
                    <Club className="mr-2" /> Solitaire
                  </Link>
                </MenubarItem> */}
                  {/* <MenubarItem>
                  <Link href="/paint" className="flex items-center">
                    <Paintbrush className="mr-2" /> Paint
                  </Link>
                </MenubarItem> */}
                </MenubarSubContent>
              </MenubarSub>

              {START_MENU_ITEMS.map(({ id, href, icon, text }) => (
                <MenubarItem key={id} asChild>
                  <Link href={href} className="flex w-full items-center">
                    <Icon iconName={icon} className="mr-2" />
                    {text}
                  </Link>
                </MenubarItem>
              ))}

              <MenubarSeparator />
              <AlertDialogTrigger asChild>
                <MenubarItem>
                  <Power className="mr-2" /> Shut Down
                </MenubarItem>
              </AlertDialogTrigger>
            </MenubarContent>
          </MenubarMenu>

          <AlertDialogContent className="border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white bg-windows rounded-none border-2 p-0.5 shadow-xs">
            <div className="from-windows-blue text-windows-white flex h-8 w-full items-center justify-between bg-linear-to-r to-[rgb(0,126,196)] px-1.5 py-0.5 select-none md:h-9">
              <div className="flex items-center gap-x-2 text-sm">
                <p className="font-bold">Shut Down</p>
              </div>
              <AlertDialogCancel className="border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows text-windows-black hover:bg-windows size-6 rounded-none border p-0.5">
                <X />
              </AlertDialogCancel>
            </div>
            <div className="flex items-start gap-8 p-4">
              <Laptop2 className="size-10" />
              <div className="space-y-8">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-normal">
                    What do you want the computer to do?
                  </AlertDialogTitle>
                  <RadioGroup
                    defaultValue="shutdown"
                    className="text-windows-black"
                  >
                    <span className="flex items-center space-x-2 p-0.5">
                      <RadioGroupItem
                        className="peer border-b-windows-white border-l-windows-black border-r-windows-white border-t-windows-black bg-windows-white"
                        value="shutdown"
                        id="shutdown"
                      />
                      <Label
                        htmlFor="shutdown"
                        className="peer-data-[state=checked]:border-windows-black border-dashed peer-data-[state=checked]:border"
                      >
                        Shutdown
                      </Label>
                    </span>
                    <span className="flex items-center space-x-2 p-0.5">
                      <RadioGroupItem
                        className="peer border-b-windows-white border-l-windows-black border-r-windows-white border-t-windows-black bg-windows-white"
                        value="restart"
                        id="restart"
                      />
                      <Label
                        htmlFor="restart"
                        className="peer-data-[state=checked]:border-windows-black border-dashed peer-data-[state=checked]:border"
                      >
                        Restart
                      </Label>
                    </span>
                  </RadioGroup>
                </AlertDialogHeader>
                <AlertDialogFooter className="justify-center">
                  <AlertDialogAction
                    className="border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white text-windows-black shadow-windows-black active:bg-windows-white/50 active:shadow-windows-dark w-28 cursor-default rounded-none border-t border-r-2 border-b-2 border-l bg-transparent shadow-sm hover:bg-transparent active:border-none active:shadow-inner"
                    asChild
                  >
                    <Link href="/shutdown">OK</Link>
                  </AlertDialogAction>
                  <AlertDialogCancel className="border-b-windows-black border-l-windows-white border-r-windows-black border-t-windows-white active:bg-windows-white/50 active:shadow-windows-dark w-28 rounded-none border-r-2 border-b-2 border-l bg-transparent shadow-sm hover:bg-transparent active:border-none active:shadow-inner">
                    Cancel
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </div>
            </div>
          </AlertDialogContent>

          <NavWindowTitle />
        </div>

        <div className="shadow-windows-dark flex items-center justify-between gap-2 shadow-inner">
          <VolumeSlider />

          <NavClock />
        </div>
      </Menubar>
    </AlertDialog>
  )
}
