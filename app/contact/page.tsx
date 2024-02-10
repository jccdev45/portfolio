import { Contact } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { WindowWrapper } from "@/components/window/window-wrapper"
import { ContactForm } from "@/app/contact/contact-form"

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
