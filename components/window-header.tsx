import React from "react"
import Link from "next/link"
import { useWindowContext } from "@/context/window-context"
import { AppWindow, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function WindowHeader() {
  const { isMax, setIsMax, icon, title } = useWindowContext()

  return (
    <div className="flex h-8 w-full select-none items-center justify-between bg-gradient-to-r from-windows-blue to-[rgb(0,126,196)] px-1.5 py-0.5 text-windows-white md:h-9">
      <div className="flex items-center gap-x-2 text-sm">
        {icon}
        <p className="font-bold">{title}</p>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
          onClick={() => setIsMax(!isMax)}
        >
          <AppWindow />
        </Button>
        <Button
          variant="ghost"
          className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
          asChild
        >
          <Link href="/">
            <X />
          </Link>
        </Button>
      </div>
    </div>
  )
}
