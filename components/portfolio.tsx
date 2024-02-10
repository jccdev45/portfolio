"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { myProjects as PROJECTS } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { WindowContent } from "@/components/window-content"
import { WindowIcon } from "@/components/window-icon"
import { WindowSidebar } from "@/components/window-sidebar"

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0])
  const matches = useMediaQuery("(min-width: 850px)")
  const dir = matches ? `horizontal` : `vertical`

  const handleProjectClick = (project: (typeof PROJECTS)[number]) => {
    setSelectedProject(project)
  }

  return (
    <div className="absolute inset-x-0 bottom-6 top-0 gap-y-2 text-xs lg:p-0">
      <ResizablePanelGroup direction={dir}>
        <WindowSidebar className="grid h-full auto-rows-min gap-4 p-4 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
          {renderProjectSummary(selectedProject)}
          {renderProjectTechStack(selectedProject.tech)}
        </WindowSidebar>

        <ResizableHandle withHandle />

        <WindowContent className="h-1/2 md:h-2/5 lg:h-full lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
          {renderProjectIcons()}
        </WindowContent>
      </ResizablePanelGroup>
    </div>
  )

  function renderProjectSummary(project: (typeof PROJECTS)[number]) {
    return (
      <div className="grid w-full grid-rows-3 place-items-center">
        <figure className="grid grid-cols-3 place-items-center gap-4">
          <span className="size-12 md:size-20">{project.icon}</span>
          <figcaption className="col-span-2 w-full truncate text-center text-sm font-semibold uppercase md:text-lg">
            {project.title}
          </figcaption>
        </figure>
        <div className="grid grid-cols-2 place-items-center gap-4">
          <Link
            target="_blank"
            href={project.live}
            className="flex w-fit items-center justify-center text-windows-blue/70 underline underline-offset-2 hover:text-windows-blue"
          >
            <ExternalLink className="" /> {project.title}
          </Link>
          <Link
            target="_blank"
            href={project.repoURL}
            className="flex w-fit items-center justify-center text-windows-blue/70 underline underline-offset-2 hover:text-windows-blue"
          >
            <ExternalLink className="" /> Github
          </Link>
        </div>
        <p className="break-words">{renderProjectDescription(project)}</p>
      </div>
    )
  }

  function renderProjectDescription(project: (typeof PROJECTS)[number]) {
    if (project.id === 1) {
      return (
        <>
          {project.desc}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="text-windows-blue underline"
          >
            shadcn-ui.
          </Link>
        </>
      )
    } else {
      return project.desc
    }
  }

  function renderProjectTechStack(tech: string[]) {
    return (
      <ScrollArea className="w-full">
        <div className="flex h-5 gap-1 md:justify-center lg:h-auto lg:flex-wrap">
          {tech.map((item) => (
            <Badge
              key={item}
              className="truncate break-keep bg-windows-blue md:text-sm"
            >
              {item}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    )
  }

  function renderProjectIcons() {
    return (
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-3 lg:grid-cols-4">
        {PROJECTS.map((proj) => (
          <WindowIcon
            key={proj.id}
            className="col-span-1 mx-auto flex aspect-square size-full flex-col items-center justify-center p-1"
            topStyle={
              proj === selectedProject
                ? `border border-dashed border-windows-dark`
                : ``
            }
            bottomStyle={
              proj === selectedProject
                ? `bg-windows-blue text-windows-white`
                : ``
            }
            handleClick={() => handleProjectClick(proj)}
            icon={proj.icon}
            title={proj.title}
          />
        ))}
      </div>
    )
  }
}
