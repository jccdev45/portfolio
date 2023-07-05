"use client";

import { useState, KeyboardEvent } from "react";
import { Chivo_Mono } from "next/font/google";
import { Terminal } from "lucide-react";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { cn } from "@/lib/utils";
import { menuItems } from "@/lib/constants";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["400"] });

export default function TerminalPage() {
  const [lines, setLines] = useState<string[]>([]);

  function handleEnterKey(event: KeyboardEvent<HTMLSpanElement>) {
    if (event.key === "Enter") {
      event.preventDefault();

      const input = event.currentTarget.textContent?.trim() || "";
      event.currentTarget.textContent = "";

      if (input) setLines((prevLines) => [...prevLines, input]);
    }
  }

  return (
    <WindowWrapper
      title="Terminal"
      icon={<Terminal />}
      bottomBar
      menu={menuItems.default}
    >
      <div
        className={cn(
          `w-full h-full absolute bg-windows-black text-windows-white p-2 overflow-hidden`,
          chivo.className
        )}
      >
        <div className="w-full mx-auto mb-4 text-sm md:mx-0 md:text-lg">
          <div className="font-bold">
            <div>**********</div>
            <div>** iDev **</div>
            <div>**********</div>
          </div>
          <span className="block ml-8">
            &copy;copyright by: nobody {new Date().getFullYear()}
          </span>
        </div>
        {lines.map((line, index) => (
          <div key={index} className="mt-1 mb-3 break-all">
            <span className="mr-2">{`C:\\>`}</span>
            <span>{line}</span>
            <div className="my-1">
              <span className="font-bold bg-windows-white/20 p-0.5">
                Illegal command:
              </span>{" "}
              {line}
            </div>
          </div>
        ))}
        <div className="flex">
          <span className="mr-2">{`C:\\>`}</span>
          <span
            contentEditable
            className="flex-1 break-all bg-transparent border-none outline-none appearance-none"
            autoFocus
            onKeyDown={handleEnterKey}
          />
        </div>
      </div>
    </WindowWrapper>
  );
}
