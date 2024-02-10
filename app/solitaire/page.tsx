import { Club } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { WindowWrapper } from "@/components/window/window-wrapper"

import { Game } from "./game"

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
      <Game />
    </WindowWrapper>
  )
}
