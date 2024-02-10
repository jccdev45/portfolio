import { ReactNode } from "react"

import { Button } from "../ui/button"

type Props = {
  icon: ReactNode
  label?: string
}

function Icon({ icon, label }: Props) {
  return (
    <Button
      variant="ghost"
      className="my-3 flex size-32 flex-col items-center justify-evenly space-y-2"
    >
      {icon}
      <p className="bg-windows-green text-sm text-windows-white">{label}</p>
    </Button>
  )
}

export default Icon
