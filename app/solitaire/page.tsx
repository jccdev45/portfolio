import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Solitaire } from "@/components/game"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "solitaire",
  description: "🆗",
}

export default function SolitairePage() {
  return (
    <WindowWrapper
      title="Solitaire"
      icon="club"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <Solitaire />
    </WindowWrapper>
  )
}
