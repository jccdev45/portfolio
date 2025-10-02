import { Laptop2 } from "lucide-react"

export function WindowBottomBar() {
  return (
    <div className="bg-windows absolute inset-x-0 bottom-0 flex h-6 items-center justify-between gap-x-0.5">
      <div className="border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark h-full w-1/2 border md:w-1/4"></div>
      <div className="border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark hidden h-full w-1/2 border md:block"></div>
      <div className="border-b-windows-white border-l-windows-dark border-r-windows-white border-t-windows-dark flex h-full w-fit items-center gap-1 border px-1 text-xs whitespace-nowrap md:w-1/4">
        <Laptop2 className="size-4" />
        My Computer
      </div>
    </div>
  )
}
