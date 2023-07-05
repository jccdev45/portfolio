"use client";

import React from "react";
import Link from "next/link";
import { X, AppWindow, Laptop2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  actionProp?: string;
  bottomBar: boolean;
  children: React.ReactNode;
  expand?: boolean;
  icon: JSX.Element;
  menu?: {
    trigger: string;
    items: {
      action?: ((actionProp: string | undefined) => void) | null;
      title: string;
      icon: JSX.Element;
      tooltip: string;
    }[];
  }[];
  title: string;
};

export function WindowWrapper({
  actionProp,
  bottomBar,
  children,
  expand,
  icon,
  menu,
  title,
}: Props) {
  const [isMax, setIsMax] = React.useState<boolean | null>(expand || false);

  return (
    <>
      <div
        id="window-wrapper"
        className={cn(
          `absolute bg-white border-2 border-t-windows border-l-windows border-r-windows-dark border-b-windows-dark shadow-inner shadow-windows-dark resize-none`,
          isMax
            ? // ? `w-screen max-w-[100vw] top-0 left-0 h-[95vh] max-h-[94vh] lg:max-h-[95vh]`
              `w-screen max-w-[100vw] top-0 left-0 h-[calc(100vh-47px)]`
            : `w-3/4 lg:w-2/3 -translate-x-1/2 -translate-y-[55%] top-1/2 left-1/2 h-5/6`
        )}
      >
        <div className="flex flex-col">
          <div className="select-none flex items-center justify-between w-full py-0.5 bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] text-windows-white handle h-9 px-1.5">
            <div className="flex items-center text-sm gap-x-2">
              <>{icon}</>
              <p className="font-bold">{title}</p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                className="p-0.5 h-6 w-6 rounded-none text-windows-black bg-windows border border-t-windows-white border-l-windows-white border-r-windows-dark border-b-windows-dark"
                onClick={() => setIsMax(!isMax)}
              >
                <AppWindow />
              </Button>
              <Button
                variant="ghost"
                className="p-0.5 h-6 w-6 rounded-none text-windows-black bg-windows border border-t-windows-white border-l-windows-white border-r-windows-dark border-b-windows-dark"
                asChild
              >
                <Link href="/">
                  <X />
                </Link>
              </Button>
            </div>
          </div>

          {menu && (
            <Menubar className="h-8 rounded-none bg-windows">
              {menu.map((menuItem) => (
                <MenubarMenu key={menuItem.trigger}>
                  <MenubarTrigger className="data-[state=open]:shadow-inner data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:bg-windows/70 data-[state=open]:border-windows-dark focus:bg-windows/50">
                    {menuItem.trigger}
                  </MenubarTrigger>
                  <MenubarContent className="ml-1 -mt-2 rounded-none bg-windows">
                    {menuItem.items.map((item) => (
                      <TooltipProvider key={item.title}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <MenubarItem
                              onClick={() =>
                                item.action && item.action(actionProp)
                              }
                            >
                              <>{item.icon}</>{" "}
                              <span className="mx-2">{item.title}</span>
                            </MenubarItem>
                          </TooltipTrigger>
                          <TooltipContent>
                            {item.tooltip ? item.tooltip : null}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
            </Menubar>
          )}
        </div>

        <div
          className="absolute top-[68px] bottom-[24px] w-full"
          id="wrapper-children"
        >
          {children}
        </div>

        <div
          className={cn(
            `absolute bottom-0 left-0 w-full h-6 bg-windows flex gap-x-0.5 items-center`,
            !bottomBar && `hidden`
          )}
        >
          <div className="w-1/3 h-full border lg:w-1/4 border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark"></div>
          <div className="hidden w-1/2 h-full border md:block border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark"></div>
          <div className="flex items-center w-2/3 h-full text-sm truncate border lg:w-1/4 border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark">
            <Laptop2 className="mx-2" />
            My Computer
          </div>
        </div>
      </div>
    </>
  );
}
