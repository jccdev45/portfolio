"use client"

import { useState } from "react"
import { hireMeVisibleAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"
import { Mail, X } from "lucide-react"

import { cn } from "@/lib/utils"

export default function HireMePopup() {
  const [visible, setVisible] = useAtom(hireMeVisibleAtom)

  if (!visible) return null

  return (
    <div className="fixed right-14 bottom-14 z-50 w-72 select-none">
      <div
        className={cn(
          "border-windows-black shadow-window rounded-sm border bg-[#f5e6c8] px-3 py-2",
          "font-sans text-sm"
        )}
        role="dialog"
        aria-label="hire me popup"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="text-windows-black rounded bg-yellow-300 px-2 py-1 text-xs font-bold">
              hire me
            </div>
            <div className="text-windows-black/70 text-xs">
              i'm available for work
            </div>
          </div>
          <button
            aria-label="dismiss"
            onClick={() => setVisible(false)}
            className="text-windows-black hover:bg-windows/10 -mr-2 inline-flex h-6 w-6 items-center justify-center rounded bg-transparent"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="text-windows-black mt-2 text-sm">
          <p className="mb-2">
            looking for a cool, funny, cool dev for your next hire? you found
            him, pal
          </p>
          <div className="flex items-center gap-2">
            <a
              href="/contact"
              className="bg-windows-blue text-windows-white inline-flex items-center gap-2 rounded px-2 py-1 text-xs"
            >
              <Mail className="size-3" /> contact
            </a>
            <button
              onClick={() => setVisible(false)}
              className="border-windows-black/10 text-windows-black inline-flex items-center gap-2 rounded border bg-white px-2 py-1 text-xs"
            >
              maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
