"use client";
import { KeyboardEvent, useState } from "react";

export function TerminalWindow() {
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
    <>
      {lines.map((line, index) => (
        <div key={index} className="mb-3 mt-1 break-all">
          <span className="mr-2">{`C:\\>`}</span>
          <span>{line}</span>
          <div className="my-1">
            <span className="bg-red-500 p-0.5 font-bold">Illegal command:</span>{" "}
            {line}
          </div>
        </div>
      ))}
      <div className="flex">
        <span className="mr-2">{`C:\\>`}</span>
        <span
          contentEditable
          className="flex-1 appearance-none break-all border-none bg-transparent outline-hidden"
          autoFocus
          onKeyDown={handleEnterKey}
        />
      </div>
    </>
  );
}
