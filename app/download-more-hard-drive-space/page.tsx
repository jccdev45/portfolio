import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { DownloadHD } from "@/components/download-hd"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "download more hard drive space FREE",
  description: "Playful demo UI: pretend to download more disk space",
}

export default function HDPage() {
  return (
    <WindowWrapper
      title="Download More Disk Space"
      icon="hardDrive"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <DownloadHD />
    </WindowWrapper>
  )
}
