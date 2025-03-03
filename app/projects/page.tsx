import { Briefcase } from "lucide-react"

import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Portfolio } from "@/components/portfolio"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "portfolio",
  description: "🆗",
}

export default function PortfolioPage() {
  return (
    <WindowWrapper
      icon={<Briefcase />}
      title="Projects"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <Portfolio />
    </WindowWrapper>
  )
}
