import { ArrowLeft, FileX2, Save, XCircle } from "lucide-react"

import type { MenuItemType } from "@/lib/types"

export const WINDOW_MENU_ITEMS: {
  [key: string]: MenuItemType[]
} = {
  paint: [
    {
      trigger: "File",
      items: [
        {
          title: "Save",
          icon: <Save />,
        },
        {
          title: "Exit",
          icon: <XCircle />,
        },
      ],
    },
  ],
  notepad: [
    {
      trigger: "File",
      items: [{ title: "Exit", icon: <XCircle /> }],
    },
  ],
  recycleBin: [
    {
      trigger: "File",
      items: [
        {
          title: "Empty",
          icon: <FileX2 />,
        },
        {
          title: "Exit",
          icon: <XCircle />,
        },
      ],
    },
  ],
  default: [
    {
      trigger: "File",
      items: [{ title: "Exit", icon: <XCircle /> }],
    },
  ],
  blog: [
    {
      // trigger: "←",
      trigger: "File",
      items: [
        {
          title: "Back",
          icon: <ArrowLeft />,
        },
        { title: "Exit", icon: <XCircle /> },
      ],
    },
  ],
}
