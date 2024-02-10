import { StickyNote } from "lucide-react"

import { menuItems } from "@/lib/constants"
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
      menu={menuItems.notepad}
      bottomBar
    >
      <Notepad />
    </WindowWrapper>
  )
}
