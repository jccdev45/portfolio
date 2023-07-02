"use client";

import React from "react";
import { StickyNote } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import WindowWrapper from "@/components/window/window-wrapper";
import FormatBar from "@/components/format-bar";
import { cn } from "@/lib/utils";
import { menuItems } from "@/lib/constants";

const SNote = <StickyNote />;

const NotepadPage = () => {
  const [note, setNote] = React.useState<string>("");
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  return (
    <WindowWrapper
      title="Notepad"
      icon={SNote}
      menu={menuItems.notepad}
      actionProp={note}
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
          `absolute left-0 h-full max-h-[80%] placeholder:italic placeholder:font-normal placeholder:underline flex-1 p-4 rounded-none shadow-inner resize-none`,
          isBold ? `font-bold` : `font-normal`,
          isItalic ? `italic` : `not-italic`,
          isUnderline ? `underline` : `no-underline`
        )}
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
    </WindowWrapper>
  );
};

export default NotepadPage;
