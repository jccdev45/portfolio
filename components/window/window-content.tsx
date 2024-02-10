import { ResizablePanel } from "../ui/resizable"

type WindowContentProps = {
  children: React.ReactNode
  className?: string
}

export function WindowContent({ children, className }: WindowContentProps) {
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
