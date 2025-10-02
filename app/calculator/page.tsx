import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Calculator } from "@/components/calculator"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "calculator",
  description: "🆗",
}

export default function CalculatorPage() {
  return (
    <WindowWrapper
      title="Calculator"
      icon="calculator"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
      allowMaximize={false}
    >
      <Calculator />
    </WindowWrapper>
  )
}
