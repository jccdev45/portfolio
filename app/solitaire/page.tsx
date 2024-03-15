import { Club } from "lucide-react"

import { menuItems } from "@/lib/constants"
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
      icon={<Club />}
      menu={menuItems.default}
      bottomBar
    >
      <Solitaire />
    </WindowWrapper>
  )
}
