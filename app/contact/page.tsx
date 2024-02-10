import { Contact } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { ContactForm } from "@/components/contact-form"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "contact",
  description: "🆗",
}

export default function ContactPage() {
  return (
    <WindowWrapper
      title="Contact"
      icon={<Contact />}
      menu={menuItems.default}
      bottomBar
    >
      <ContactForm />
    </WindowWrapper>
  )
}
