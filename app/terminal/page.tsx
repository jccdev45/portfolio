import { Chivo_Mono } from "next/font/google"
import { Terminal } from "lucide-react"

import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { cn } from "@/lib/utils"
import { TerminalWindow } from "@/components/terminal"
import { WindowWrapper } from "@/components/window-wrapper"

const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["400"] })

export const metadata = {
  title: "terminal",
  description: "🆗",
}

export default function TerminalPage() {
  return (
    <WindowWrapper
      title="Terminal"
      icon={<Terminal />}
      bottomBar
      menu={WINDOW_MENU_ITEMS.default}
    >
      <div
        className={cn(
          `bg-windows-black text-windows-white absolute inset-0 p-2 text-sm md:text-base`,
          chivo.className
        )}
      >
        <div className="mb-4">
          <div className="text-lg font-bold">
            <div>********************</div>
            <div>******* iDev *******</div>
            <div>********************</div>
          </div>
          <span className="ml-8 block">
            &copy;copyright by: nobody {new Date().getFullYear()}
          </span>
        </div>
        <TerminalWindow />
      </div>
    </WindowWrapper>
  )
}
