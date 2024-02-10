"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { FormatBar } from "@/components/format-bar"

// TODO: FIX THIS GROTESQUERIE AT ONCE
export function Notepad() {
  const [note, setNote] = useState("")
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  return (
    <>
      <FormatBar
        setBold={() => setIsBold(!isBold)}
        setItalic={() => setIsItalic(!isItalic)}
        setUnderline={() => setIsUnderline(!isUnderline)}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
      />
      <label htmlFor="notepad" className="sr-only">
        Notepad for writing notes. Placeholder is &quot;Eggs, milk,
        sugar...&quot;. It&apos;s just a visual thing, the notes aren&apos;t
        actually functional. Maybe I can add that in the future but probably
        not, nobody is coming to my portfolio site to take notes. Thanks for
        (screen) reading.
      </label>
      <div className="min-h-full overflow-hidden">
        <Textarea
          id="notepad"
          placeholder="Eggs, milk, sugar..."
          className={cn(
            `absolute h-[95%] flex-grow resize-none rounded-none border-none p-4 placeholder:font-normal placeholder:italic md:top-10 lg:h-[90%]`,
            isBold ? `font-bold` : `font-normal`,
            isItalic ? `italic` : `not-italic`,
            isUnderline ? `underline` : `no-underline`
          )}
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </div>
    </>
  )
}
