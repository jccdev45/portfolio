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
import { cn } from "@/lib/utils";

type WindowWrapperProps = {
  actionProp?: string;
  bottomBar: boolean;
  children: React.ReactNode;
  expand?: boolean;
  icon: JSX.Element;
  menu?: {
    trigger: string;
    items: {
      action?: null;
      title: string;
      icon: JSX.Element;
      tooltip: string;
    }[];
  }[];
  title: string;
};

export function WindowWrapper({
  bottomBar,
  children,
  expand,
  icon,
  menu,
  title,
}: WindowWrapperProps) {
  const [isMax, setIsMax] = React.useState<boolean | null>(expand || false);

  return (
    <>
      <div
        id="window-wrapper"
        className={cn(
          `absolute bg-white border-2 border-t-windows border-l-windows border-r-windows-dark border-b-windows-dark shadow-inner shadow-windows-dark resize-none flex flex-col justify-evenly`,
          isMax
            ? bottomBar
              ? `h-[calc(100vh-48px)] inset-0`
              : `w-screen h-screen inset-0`
            : `w-5/6 mx-auto -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 h-5/6`
        )}
      >
        <div className="flex flex-col">
          <div className="select-none flex items-center justify-between w-full py-0.5 bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] text-windows-white handle h-8 md:h-9 px-1.5">
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
            <Menubar className="h-8 border-0 rounded-none md:h-9 bg-windows">
              {menu.map((menuItem) => (
                <MenubarMenu key={menuItem.trigger}>
                  <MenubarTrigger className="data-[state=open]:shadow-inner data-[state=open]:border data-[state=open]:border-dashed data-[state=open]:bg-windows/70 data-[state=open]:border-windows-dark focus:bg-windows/50">
                    {menuItem.trigger}
                  </MenubarTrigger>
                  <MenubarContent className="ml-1 -mt-2 rounded-none bg-windows">
                    {menuItem.items.map((item) => (
                      <MenubarItem key={item.title}>
                        {item.title === "Exit" ? (
                          <Link
                            href="/"
                            className="flex items-center w-full hover:bg-transparent"
                          >
                            <>{item.icon}</>{" "}
                            <span className="mx-2">{item.title}</span>
                          </Link>
                        ) : (
                          <>
                            {item.icon}
                            <span className="mx-2">{item.title}</span>
                          </>
                        )}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
            </Menubar>
          )}
        </div>

        <div className={cn(`w-full relative h-full`)}>{children}</div>

        <div
          className={cn(
            `absolute bottom-0 inset-x-0 h-6 bg-windows flex gap-x-0.5 items-center justify-between`,
            !bottomBar && `hidden`
          )}
        >
          <div className="w-1/2 h-full border border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark md:w-1/4"></div>
          <div className="hidden w-1/2 h-full border border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark md:block"></div>
          <div className="flex items-center w-1/2 h-full text-xs border md:text-sm border-r-windows-white border-b-windows-white border-t-windows-dark border-l-windows-dark md:w-1/4">
            <Laptop2 className="mx-2" />
            My Computer
          </div>
        </div>
      </div>
    </>
  );
}
