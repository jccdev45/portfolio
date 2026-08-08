"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { readmeDismissedAtom } from "@/atoms/atoms"
import { useAtom } from "jotai"

import { Button } from "@/components/ui/button"
import { WindowWrapper } from "@/components/window-wrapper"

const README_DISMISSED_KEY = "jccdev_readme_dismissed"

export function ReadmeWindow() {
  const [dismissed, setDismissed] = useAtom(readmeDismissedAtom)
  // hold rendering until sessionStorage has been read, so SSR and the first
  // client render agree
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(README_DISMISSED_KEY)) {
      setDismissed(true)
    }
    setChecked(true)
  }, [setDismissed])

  const dismiss = () => {
    sessionStorage.setItem(README_DISMISSED_KEY, "true")
    setDismissed(true)
  }

  if (!checked || dismissed) return null

  return (
    <WindowWrapper
      title="README.TXT"
      icon="fileText"
      bottomBar={false}
      allowMaximize={false}
      onClose={dismiss}
    >
      <div className="text-windows-black flex max-h-[65vh] flex-col gap-3 overflow-y-auto p-4 text-sm leading-relaxed">
        <p>
          Life has taken a wildly unexpected turn this year. In March, we found
          out my dad was sick with pancreatic cancer, and by the end of April he
          was gone. I am now even more of a full-time caregiver for my mom, who
          has severe dementia. Things come at you quick sometimes, and you have
          to be able to grit your teeth and push through.
        </p>
        <p>
          Maybe one day I’ll return to the software engineering field, but for
          now life is on an indefinite pause. I’m still available for chats or
          talks, especially with anyone who has dealt with similar situations.
        </p>
        <p>Thanks for visiting my site, thanks for reading, take care 💖</p>
      </div>
      <div className="flex justify-center gap-2 px-4 pb-4">
        <Button variant="windows" className="w-28" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
        <Button variant="windows" className="w-28" onClick={dismiss}>
          OK
        </Button>
      </div>
    </WindowWrapper>
  )
}
