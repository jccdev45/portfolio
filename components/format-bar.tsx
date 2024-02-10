import { Bold, Italic, Underline } from "lucide-react"

import { cn } from "@/lib/utils"

import { Toggle } from "./ui/toggle"

type Props = {
  setBold: () => void
  isBold: boolean
  setItalic: () => void
  isItalic: boolean
  setUnderline: () => void
  isUnderline: boolean
}

export function FormatBar({
  setBold,
  isBold,
  setItalic,
  isItalic,
  setUnderline,
  isUnderline,
}: Props) {
  return (
    <div className="flex h-9 w-full items-center justify-start space-x-2 border-t-windows-dark bg-windows p-1 md:h-10">
      <Toggle
        onClick={setBold}
        className={cn(
          `h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50`,
          isBold && `bg-windows-dark/50 shadow-inner shadow-windows-black`
        )}
      >
        <Bold />
      </Toggle>
      <Toggle
        onClick={setItalic}
        className={cn(
          `h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50`,
          isItalic && `bg-windows-dark/50 shadow-inner shadow-windows-black`
        )}
      >
        <Italic />
      </Toggle>
      <Toggle
        onClick={setUnderline}
        className={cn(
          `h-7 w-7 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white px-2 py-1 shadow shadow-windows-dark hover:bg-white/50`,
          isUnderline && `bg-windows-dark/50 shadow-inner shadow-windows-black`
        )}
      >
        <Underline />
      </Toggle>
    </div>
  )
}
