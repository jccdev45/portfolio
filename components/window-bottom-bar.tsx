import { Laptop2 } from "lucide-react"

export function WindowBottomBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-6 items-center justify-between gap-x-0.5 bg-windows">
      <div className="h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:w-1/4"></div>
      <div className="hidden h-full w-1/2 border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark md:block"></div>
      <div className="flex h-full w-1/2 items-center border border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark text-xs md:w-1/4 md:text-sm">
        <Laptop2 className="mx-2" />
        My Computer
      </div>
    </div>
  )
}
