"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { myProjects } from "@/lib/constants";
import Link from "next/link";
import { WindowContent } from "../window/window-content";
import { WindowSidebar } from "../window/window-sidebar";
import { WindowIcon } from "../window/window-icon";
import { RainbowSeparator } from "../rainbow-separator";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function Portfolio() {
  const [project, setProject] = useState<typeof myProjects[0]>(myProjects[0]);

  return (
    <div
      id="portfolio"
      className="flex flex-col w-full h-full text-sm md:text-base lg:flex-row md:justify-center"
    >
      <WindowSidebar>
        <div className="flex flex-col items-center justify-between w-full">
          <div className="w-2/5 mx-auto md:w-1/4 lg:w-1/3">
            <span className="w-16 h-16">{project.icon}</span>
          </div>
          <div className="flex items-start justify-center w-full mx-auto md:flex-col md:w-3/4 md:items-center md:text-lg gap-y-2">
            <Link
              target="_blank"
              href={project.live}
              className="flex items-center w-3/5 underline truncate md:w-full underline-offset-2 hover:text-windows-blue md:justify-center"
            >
              <ExternalLink /> {project.title}
            </Link>
            <Link
              target="_blank"
              href={project.repoURL}
              className="flex items-center w-2/5 underline md:w-full underline-offset-2 hover:text-windows-blue md:justify-center"
            >
              <ExternalLink /> Github
            </Link>
          </div>
        </div>

        <RainbowSeparator />

        <ScrollArea className="w-full">
          <ScrollBar orientation="horizontal" />
          <div className="overflow-auto w-[500px] h-12 mx-auto">
            {project.tech.map((item) => (
              <Badge key={item} className="mx-1">
                {item}
              </Badge>
            ))}
          </div>
        </ScrollArea>
        <p className="text-xs md:text-base">{project.desc}</p>
      </WindowSidebar>

      <WindowContent>
        {myProjects.map((proj) => (
          <WindowIcon
            key={proj.id}
            topStyle={
              proj === project ? `border border-dashed border-windows-dark` : ``
            }
            bottomStyle={
              proj === project ? `bg-windows-blue text-windows-white` : ``
            }
            handleClick={() => {
              proj !== project && setProject(proj);
            }}
            icon={proj.icon}
            title={proj.title}
          />
        ))}
      </WindowContent>
    </div>
  );
}
