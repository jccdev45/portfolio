import React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  setBold: () => void;
  isBold: boolean;
  setItalic: () => void;
  isItalic: boolean;
  setUnderline: () => void;
  isUnderline: boolean;
};

export default function FormatBar({
  setBold,
  isBold,
  setItalic,
  isItalic,
  setUnderline,
  isUnderline,
}: Props) {
  return (
    <div className="flex items-center justify-start w-full p-1 space-x-2 bg-windows border-t-windows-dark">
      <Button
        variant="ghost"
        onClick={setBold}
        className={cn(
          `shadow shadow-windows-dark px-2 py-1 hover:bg-white/50`,
          isBold && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Bold />
      </Button>
      <Button
        variant="ghost"
        onClick={setItalic}
        className={cn(
          `shadow shadow-windows-dark px-2 py-1 hover:bg-white/50`,
          isItalic && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Italic />
      </Button>
      <Button
        variant="ghost"
        onClick={setUnderline}
        className={cn(
          `shadow shadow-windows-dark px-2 py-1 hover:bg-white/50`,
          isUnderline && `shadow-inner shadow-windows-black bg-windows-dark/50`
        )}
      >
        <Underline />
      </Button>
    </div>
  );
}