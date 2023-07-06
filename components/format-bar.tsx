import React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { cn } from "@/lib/utils";

type Props = {
  setBold: () => void;
  isBold: boolean;
  setItalic: () => void;
  isItalic: boolean;
  setUnderline: () => void;
  isUnderline: boolean;
};

export function FormatBar({
  setBold,
  isBold,
  setItalic,
  isItalic,
  setUnderline,
  isUnderline,
}: Props) {
  return (
    <div className="flex items-center justify-start w-full p-1 space-x-2 h-9 md:h-10 bg-windows border-t-windows-dark">
      <Toggle
        onClick={setBold}
        className={cn(
          `shadow rounded-none shadow-windows-dark border border-t-windows-white border-l-windows-white border-r-windows-dark border-b-windows-dark w-7 h-7 px-2 py-1 hover:bg-white/50`,
          isBold && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Bold />
      </Toggle>
      <Toggle
        onClick={setItalic}
        className={cn(
          `shadow rounded-none shadow-windows-dark border border-t-windows-white border-l-windows-white border-r-windows-dark border-b-windows-dark w-7 h-7 px-2 py-1 hover:bg-white/50`,
          isItalic && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Italic />
      </Toggle>
      <Toggle
        onClick={setUnderline}
        className={cn(
          `shadow rounded-none shadow-windows-dark border border-t-windows-white border-l-windows-white border-r-windows-dark border-b-windows-dark w-7 h-7 px-2 py-1 hover:bg-white/50`,
          isUnderline && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Underline />
      </Toggle>
    </div>
  );
}
