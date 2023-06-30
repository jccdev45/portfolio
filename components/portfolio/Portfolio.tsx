"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { myProjects } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WindowContent } from "../window/window-content";
import WindowSidebar from "../window/window-sidebar";
import WindowIcon from "../window/window-icon";

const Portfolio = () => {
  const [project, setProject] = useState<typeof myProjects[0]>(myProjects[0]);

  return (
    <div className="grid w-full h-full grid-cols-12">
      <WindowSidebar>
        <div className="flex flex-col items-center justify-evenly">
          <span className="scale-110">{project.icon}</span>
          <Link
            target="_blank"
            href={project.live}
            className="flex items-center text-lg underline hover:text-windows-blue"
          >
            <ExternalLink /> {project.title}
          </Link>
          <Link
            target="_blank"
            href={project.repoURL}
            className="flex items-center underline hover:text-windows-blue"
          >
            <ExternalLink /> Github
          </Link>
        </div>

        <div className="prose">
          <Separator />
          <p>{project.desc}</p>
          <Separator />
        </div>

        <div className="">
          {project.tech.map((item) => (
            <Badge key={item} className="mx-1">
              {item}
            </Badge>
          ))}
        </div>
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
};

export default Portfolio;
