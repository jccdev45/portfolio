import { Terminal } from "lucide-react";
import { Chivo_Mono } from "next/font/google";

import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { TerminalWindow } from "./Terminal";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "terminal",
  description: "🆗",
};

export default function TerminalPage() {
  return (
    <WindowWrapper
      title="Terminal"
      icon={<Terminal />}
      bottomBar
      menu={menuItems.default}
    >
      <div
        className={cn(
          `bg-windows-black text-windows-white p-2 absolute inset-0 text-sm md:text-base`,
          chivo.className
        )}
      >
        <div className="mb-4">
          <div className="text-lg font-bold">
            <div>********************</div>
            <div>******* iDev *******</div>
            <div>********************</div>
          </div>
          <span className="block ml-8">
            &copy;copyright by: nobody {new Date().getFullYear()}
          </span>
        </div>
        <TerminalWindow />
      </div>
    </WindowWrapper>
  );
}
