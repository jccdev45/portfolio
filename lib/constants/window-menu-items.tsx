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
          icon: "save",
        },
        {
          title: "Exit",
          icon: "xCircle",
        },
      ],
    },
  ],
  notepad: [
    {
      trigger: "File",
      items: [{ title: "Exit", icon: "xCircle" }],
    },
  ],
  recycleBin: [
    {
      trigger: "File",
      items: [
        {
          title: "Empty",
          icon: "fileX2",
        },
        {
          title: "Exit",
          icon: "xCircle",
        },
      ],
    },
  ],
  default: [
    {
      trigger: "File",
      items: [{ title: "Exit", icon: "xCircle" }],
    },
  ],
  blog: [
    {
      // trigger: "←",
      trigger: "File",
      items: [
        {
          title: "Back",
          icon: "arrowLeft",
        },
        { title: "Exit", icon: "xCircle" },
      ],
    },
  ],
}
