import { StickyNote } from "lucide-react";

import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

import { Notepad } from "./Notepad";

export const metadata = {
  title: "notepad",
  description: "🆗",
};

export default function NotepadPage() {
  return (
    <WindowWrapper
      title="Notepad"
      icon={<StickyNote />}
      menu={menuItems.notepad}
      bottomBar
    >
      <Notepad />
    </WindowWrapper>
  );
}
