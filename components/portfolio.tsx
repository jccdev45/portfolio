"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Loader2 } from "lucide-react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { myProjects as PROJECTS } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { WindowPanelContent } from "@/components/window-panel-content"
import { WindowPanelSidebar } from "@/components/window-sidebar"

export function Portfolio() {
  const [selectedProject] = useState(PROJECTS[0])
  const matches = useMediaQuery("(min-width: 850px)")
  const isClient = useIsClient()
  const dir = matches ? "horizontal" : "vertical"

  return (
    <div className="absolute inset-x-0 bottom-6 top-0 gap-y-2 text-xs lg:p-0">
      {isClient ? (
        <ResizablePanelGroup direction={dir}>
          <WindowPanelSidebar className="grid h-full auto-rows-min gap-4 p-4 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
            {renderProjectSummary(selectedProject)}
            {renderProjectTechStack(selectedProject.tech)}
          </WindowPanelSidebar>

          <ResizableHandle withHandle />

          <WindowPanelContent className="h-1/2 md:h-2/5 lg:h-full lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
            {renderProjectIcons()}
          </WindowPanelContent>
        </ResizablePanelGroup>
      ) : (
        <div className="grid size-full place-items-center">
          <Loader2 className="size-20 animate-spin text-windows-blue" />
        </div>
      )}
    </div>
  )

  function renderProjectSummary(project: (typeof PROJECTS)[number]) {
    return (
      <div className="grid w-full grid-rows-3 place-items-center">
        <iframe
          id="dextswap-aggregator-widget"
          title="DEXTswap Aggregator"
          width="400"
          height="420"
          src="https://www.dextools.io/widget-aggregator/en/swap/solana/BLb3PC1LtxjQZuczcFkTfhndu64VxcbZrVV91PTHpump"
        ></iframe>
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
              className="truncate break-keep bg-windows-blue hover:bg-windows-blue md:text-sm"
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
      <div className="flex justify-center p-4">
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          className="h-[350px] w-full max-w-4xl rounded-lg border shadow-md"
          src="https://www.dextools.io/widget-chart/en/solana/pe-light/D2fivcN4XQ8UQ2bYEdpevrFedAERi6Zw9LmkixDsavuQ?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
        ></iframe>
      </div>
    )
  }
}
