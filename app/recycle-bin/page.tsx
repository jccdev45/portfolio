import { Trash2 } from "lucide-react"

import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Bin } from "@/components/bin"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "recycle bin",
  description: "🆗",
}

export default function RecycleBinPage() {
  return (
    <WindowWrapper
      title="Recycle Bin"
      icon={<Trash2 />}
      menu={WINDOW_MENU_ITEMS.recycleBin}
      bottomBar
    >
      <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-evenly gap-y-2 overflow-scroll p-2 lg:flex-row lg:p-0">
        <Bin />
      </div>
    </WindowWrapper>
  )
}
