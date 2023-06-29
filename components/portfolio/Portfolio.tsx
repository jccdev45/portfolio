"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { myProjects } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [project, setProject] = useState<typeof myProjects[0]>(myProjects[0]);

  return (
    <div className="grid w-full h-full grid-cols-12 justify-items-center">
      <div className="grid min-h-full col-span-4 grid-rows-3 p-2 text-center border-r-windows gap-y-8 bg-gradient-to-r from-windows via-windows-white to-windows-white">
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

        <div className="">
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
      </div>

      <div className="grid w-full grid-cols-12 col-span-8 grid-rows-6 p-2 pb-0 shadow-inner space-4 shadow-windows-dark">
        {myProjects.map((proj) => (
          <div
            key={proj.id}
            className={cn(
              `flex flex-col items-center justify-center col-span-3 cursor-pointer w-3/4 mx-auto h-full`,
              proj === project ? `border border-dashed border-windows-dark` : ``
            )}
            onClick={() => {
              proj !== project && setProject(proj);
            }}
          >
            <span className="scale-75">{proj.icon}</span>
            <p
              className={cn(
                `text-sm truncate max-w-full`,
                proj === project ? `bg-windows-blue text-windows-white` : ``
              )}
            >
              {proj.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
