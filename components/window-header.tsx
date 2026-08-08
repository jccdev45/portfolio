import React from "react"
import Link from "next/link"
import { AppWindow, X } from "lucide-react"

import { useWindow } from "@/hooks/useWindow"
import { Button } from "@/components/ui/button"

interface WindowHeaderProps {
  allowMaximize?: boolean
  // when provided, the close button dismisses in place instead of routing home
  onClose?: () => void
}

const titleBarButton =
  "border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows text-windows-black size-6 rounded-none border p-0.5"

export function WindowHeader({
  allowMaximize = true,
  onClose,
}: WindowHeaderProps) {
  const { isMax, setIsMax, icon, title } = useWindow()

  return (
    <div className="from-windows-blue text-windows-white flex h-8 w-full items-center justify-between bg-linear-to-r to-[rgb(0,126,196)] px-1.5 py-0.5 select-none md:h-9">
      <div className="flex items-center gap-x-2 text-sm">
        {icon}
        <p className="font-bold">{title}</p>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className={titleBarButton}
          onClick={() => setIsMax(!isMax)}
          disabled={!allowMaximize}
        >
          <AppWindow />
        </Button>
        {onClose ? (
          <Button
            variant="ghost"
            className={titleBarButton}
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </Button>
        ) : (
          <Button variant="ghost" className={titleBarButton} asChild>
            <Link href="/" aria-label="Close">
              <X />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
