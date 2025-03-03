import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { WindowWrapper } from "@/components/window-wrapper"

interface BlogProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogProps) {
  return (
    <WindowWrapper
      title="Blog"
      bottomBar
      icon="notebookPen"
      menu={WINDOW_MENU_ITEMS.blog}
    >
      <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col overflow-auto lg:flex-row">
        <div className="container mx-auto w-full p-4">{children}</div>
      </div>
    </WindowWrapper>
  )
}
