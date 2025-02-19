import { Briefcase } from "lucide-react"

import { menuItems } from "@/lib/constants"
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
      menu={menuItems.default}
      bottomBar
    >
      <Portfolio />
    </WindowWrapper>
  )
}
