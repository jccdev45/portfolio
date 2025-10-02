import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { ContactForm } from "@/components/contact-form"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "contact",
  description: "Contact page — send a message or view ways to connect",
}

export default function ContactPage() {
  return (
    <WindowWrapper
      title="Contact"
      icon="contact"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <ContactForm />
    </WindowWrapper>
  )
}
