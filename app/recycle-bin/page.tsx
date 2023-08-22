import { Trash2 } from "lucide-react";

import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";

import { Bin } from "./Bin";

export const metadata = {
  title: "recycle bin",
  description: "🆗",
};

export default function RecycleBinPage() {
  return (
    <WindowWrapper
      title="Recycle Bin"
      icon={<Trash2 />}
      menu={menuItems.recycleBin}
      bottomBar
    >
      <div className="absolute inset-x-0 top-0 flex flex-col p-2 overflow-scroll bottom-6 lg:p-0 lg:flex-row gap-y-2 justify-evenly">
        <Bin />
      </div>
    </WindowWrapper>
  );
}
