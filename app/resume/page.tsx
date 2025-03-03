import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "resume",
}

export default function ResumePage() {
  return (
    <WindowWrapper title="Resume" icon="fileText" bottomBar>
      <object
        data="/Jordan_Cruz-Correa_Software_Engineer_Resume.pdf"
        width="100%"
        height="100%"
      />
    </WindowWrapper>
  )
}
