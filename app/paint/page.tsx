import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Win98Paint } from "@/components/paint"
import { WindowWrapper } from "@/components/window-wrapper"

export default function PaintPage() {
  return (
    <WindowWrapper
      title="Paint"
      icon="paintbrush"
      bottomBar
      menu={WINDOW_MENU_ITEMS.paint}
    >
      <div className="absolute inset-x-0 top-0 bottom-6 size-full overflow-auto">
        <Win98Paint />
      </div>
    </WindowWrapper>
  )
}
