import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Notepad } from "@/components/notepad"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "notepad",
  description: "Simple in-browser notepad demo — save and edit notes locally",
}

export default function NotepadPage() {
  return (
    <WindowWrapper
      title="Notepad"
      icon="stickyNote"
      menu={WINDOW_MENU_ITEMS.notepad}
      bottomBar
    >
      <Notepad />
    </WindowWrapper>
  )
}
