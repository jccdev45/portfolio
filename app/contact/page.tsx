import { Contact } from "lucide-react";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

export default function ContactPage() {
  return (
    <WindowWrapper title="Contact" icon={<Contact />} menu={menuItems.default}>
      <div>contact page</div>
    </WindowWrapper>
  );
}
