import { StickyNote } from "lucide-react"

import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Notepad } from "@/components/notepad"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "notepad",
  description: "🆗",
}

export default function NotepadPage() {
  return (
    <WindowWrapper
      title="Notepad"
      icon={<StickyNote />}
      menu={WINDOW_MENU_ITEMS.notepad}
      bottomBar
    >
      <Notepad />
    </WindowWrapper>
  )
}
