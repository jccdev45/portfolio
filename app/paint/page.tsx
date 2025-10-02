import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Win98Paint } from "@/components/paint"
import { WindowWrapper } from "@/components/window-wrapper"

export default function PaintPage() {
  return (
    <WindowWrapper
      title="Paint"
      icon="paintbrush"
      bottomBar={false}
      menu={WINDOW_MENU_ITEMS.paint}
      defaultMax
    >
      <div className="flex h-full w-full flex-col">
        <Win98Paint />
      </div>
    </WindowWrapper>
  )
}
