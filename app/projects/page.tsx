import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { ProjectList } from "@/components/project-list"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "portfolio",
  description: "🆗",
}

export default function PortfolioPage() {
  return (
    <WindowWrapper
      icon="briefcase"
      title="Projects"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <ProjectList />
    </WindowWrapper>
  )
}
