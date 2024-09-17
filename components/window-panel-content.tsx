import { ResizablePanel } from "@/components/ui/resizable"

type WindowPanelContentProps = {
  children: React.ReactNode
  className?: string
}

export function WindowPanelContent({
  children,
  className,
}: WindowPanelContentProps) {
  return (
    <ResizablePanel
      defaultSize={70}
      minSize={50}
      className={className}
      // className={cn(
      //   `grid w-full grid-cols-12 col-span-8 grid-rows-6 p-2 pb-0 space-4`,
      //   style
      // )}
    >
      {children}
    </ResizablePanel>
  )
}
