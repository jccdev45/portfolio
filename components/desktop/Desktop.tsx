"use client";

import Link from "next/link";
import { desktopIcons } from "@/lib/constants";

export default function Desktop() {
  return (
    <div className="absolute flex flex-col flex-wrap items-center justify-center max-h-[90vh] gap-4 md:gap-8 top-2 left-2">
      {desktopIcons.map((icon) => (
        <Link
          href={icon.path}
          key={icon.id}
          className="flex flex-col items-center justify-center w-20 h-20"
        >
          {icon.icon}
          <span className="text-xs">{icon.label}</span>
        </Link>
      ))}
    </div>
  );
}
