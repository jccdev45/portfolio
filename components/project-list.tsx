"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Loader2 } from "lucide-react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { PROJECT_LIST_ITEMS } from "@/lib/constants/project-list-items"
import type { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { Icon } from "@/components/icons"
import { WindowIcon } from "@/components/window-icon"
import { WindowPanelContent } from "@/components/window-panel-content"
import { WindowPanelSidebar } from "@/components/window-sidebar"

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    PROJECT_LIST_ITEMS[0]
  )
  const matches = useMediaQuery("(min-width: 850px)")
  const isClient = useIsClient()
  const direction = matches ? "horizontal" : "vertical"

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className="absolute inset-x-0 top-0 bottom-6 gap-y-2 text-xs lg:p-0">
      {isClient ? (
        <ResizablePanelGroup direction={direction}>
          <WindowPanelSidebar className="lg:border-windows-dark lg:shadow-windows-dark grid h-full auto-rows-min gap-4 p-4 lg:border-r lg:shadow-inner">
            <ProjectSummary project={selectedProject} />
            <ProjectTechStack tech={selectedProject.tech} />
          </WindowPanelSidebar>

          <ResizableHandle withHandle />

          <WindowPanelContent className="lg:shadow-windows-dark h-full lg:w-2/3 lg:shadow-inner">
            <ProjectIcons
              projects={PROJECT_LIST_ITEMS}
              selectedProject={selectedProject}
              onProjectClick={handleProjectClick}
            />
          </WindowPanelContent>
        </ResizablePanelGroup>
      ) : (
        <div className="grid size-full place-items-center">
          <Loader2 className="text-windows-blue size-20 animate-spin" />
        </div>
      )}
    </div>
  )
}

interface ProjectSummaryProps {
  project: Project
}

function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <div className="grid w-full grid-rows-3 place-items-center">
      <figure className="grid grid-cols-3 place-items-center gap-4">
        <Icon
          iconName={project.icon}
          className={cn("size-12 md:size-20", project.className)}
        />
        <figcaption className="col-span-2 w-full truncate text-center text-sm font-semibold uppercase md:text-lg">
          {project.title}
        </figcaption>
      </figure>
      <div className="grid grid-cols-2 place-items-center gap-4">
        <Link
          target="_blank"
          href={project.live}
          className="text-windows-blue/70 hover:text-windows-blue flex w-fit items-center justify-center underline underline-offset-2"
        >
          <ExternalLink className="" /> {project.title}
        </Link>
        <Link
          target="_blank"
          href={project.repoURL}
          className="text-windows-blue/70 hover:text-windows-blue flex w-fit items-center justify-center underline underline-offset-2"
        >
          <ExternalLink className="" /> Github
        </Link>
      </div>
      <p className="text-justify">
        {project.id === 1 ? (
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
        ) : (
          project.desc
        )}
      </p>
    </div>
  )
}

interface ProjectTechStackProps {
  tech: string[]
}

function ProjectTechStack({ tech }: ProjectTechStackProps) {
  return (
    <div className="flex h-5 flex-wrap items-center justify-center gap-1 lg:h-auto">
      {tech.map((item) => (
        <Badge
          key={item}
          className="bg-windows-blue hover:bg-windows-blue truncate break-keep md:text-sm"
        >
          {item}
        </Badge>
      ))}
    </div>
  )
}

interface ProjectIconsProps {
  projects: Project[]
  selectedProject: Project
  onProjectClick: (project: Project) => void
}

function ProjectIcons({
  projects,
  selectedProject,
  onProjectClick,
}: ProjectIconsProps) {
  return (
    <div className="grid grow grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((proj) => (
        <WindowIcon
          key={proj.id}
          className="col-span-1 mx-auto flex aspect-square size-full flex-col items-center justify-center p-1"
          topStyle={
            proj === selectedProject
              ? "border border-dashed border-windows-dark"
              : ""
          }
          bottomStyle={
            proj === selectedProject ? "bg-windows-blue text-windows-white" : ""
          }
          handleClick={() => onProjectClick(proj)}
          title={proj.title}
        >
          <Icon
            iconName={proj.icon}
            className={cn(proj.className, "size-12 md:size-20")}
          />
        </WindowIcon>
      ))}
    </div>
  )
}
