import { StickyNote } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { WindowWrapper } from "@/components/window/window-wrapper"
import { Notepad } from "@/app/notepad/notepad"

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
