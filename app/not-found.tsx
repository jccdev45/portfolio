import { Ban } from "lucide-react"

import { WindowWrapper } from "@/components/window-wrapper"

export default function NotFoundPage() {
  return (
    <WindowWrapper title="Not Found" bottomBar icon={<Ban />}>
      <div className="">Uh oh there was a little oopsie whoopsie</div>
    </WindowWrapper>
  )
}
