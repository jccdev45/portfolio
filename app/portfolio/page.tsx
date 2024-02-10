import { Briefcase } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { WindowWrapper } from "@/components/window/window-wrapper"
import { Portfolio } from "@/app/portfolio/portfolio"

export const metadata = {
  title: "portfolio",
  description: "🆗",
}

export default function PortfolioPage() {
  return (
    <WindowWrapper
      icon={<Briefcase />}
      title="My Work"
      menu={menuItems.default}
      bottomBar
    >
      <Portfolio />
    </WindowWrapper>
  )
}
