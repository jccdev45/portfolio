import { HardDrive } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { DownloadHD } from "@/components/download-hd"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "download more hard drive space FREE",
  description: "🆗",
}

export default function HDPage() {
  return (
    <WindowWrapper
      title="Download More Disk Space"
      icon={<HardDrive />}
      menu={menuItems.default}
      bottomBar
    >
      <DownloadHD />
    </WindowWrapper>
  )
}
