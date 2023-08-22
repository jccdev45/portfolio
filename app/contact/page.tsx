import { Contact } from "lucide-react";

import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

import { ContactForm } from "./Contact";

export const metadata = {
  title: "contact",
  description: "🆗",
};

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
  );
}
