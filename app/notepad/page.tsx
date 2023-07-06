"use client";

import React from "react";
import { StickyNote } from "lucide-react";
import { FormatBar } from "@/components/format-bar";
import { Textarea } from "@/components/ui/textarea";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function NotepadPage() {
  const [note, setNote] = React.useState("");
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  return (
    <WindowWrapper
      title="Notepad"
      icon={<StickyNote />}
      menu={menuItems.notepad}
      actionProp={note}
      bottomBar
    >
      <FormatBar
        setBold={() => setIsBold(!isBold)}
        setItalic={() => setIsItalic(!isItalic)}
        setUnderline={() => setIsUnderline(!isUnderline)}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
      />
      <Textarea
        placeholder="Eggs, milk, sugar..."
        className={cn(
          `absolute top-8 bottom-6 md:top-10 placeholder:italic placeholder:font-normal flex-1 p-4 rounded-none shadow-inner resize-none`,
          isBold ? `font-bold` : `font-normal`,
          isItalic ? `italic` : `not-italic`,
          isUnderline ? `underline` : `no-underline`
        )}
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
    </WindowWrapper>
  );
}
