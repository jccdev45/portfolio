import type { DesktopIcon } from "@/lib/types"

export const DESKTOP_ICONS: DesktopIcon[] = [
  {
    id: 1,
    label: "About",
    path: "/about",
    icon: {
      name: "userCircle2",
      className: "text-windows-black fill-windows-white/50",
    },
  },
  {
    id: 2,
    label: "Projects",
    path: "/projects",
    icon: {
      name: "briefcase",
      className: "text-windows-black fill-amber-900/80",
    },
  },
  {
    id: 8,
    label: "Blog",
    path: "/blog",
    icon: {
      name: "notebookPen",
      className: "fill-amber-100 text-windows-black",
    },
  },
  {
    id: 3,
    label: "Recycle Bin",
    path: "/recycle-bin",
    icon: {
      name: "trash2",
      className: "text-windows-black fill-gray-300",
    },
  },
  {
    id: 4,
    label: "Notepad",
    path: "/notepad",
    icon: {
      name: "notebook",
      className: "text-sky-600 fill-windows-white",
    },
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
    icon: {
      name: "mailPlus",
      className: "text-windows-black fill-windows-white/70",
    },
  },
  {
    id: 7,
    label: "Terminal",
    path: "/terminal",
    icon: {
      name: "terminal",
      className:
        "text-windows-white border-t-windows-blue border-windows-black rounded-sm border-4 border-t-8 bg-stone-700",
    },
  },
  {
    id: 9,
    label: "Resume",
    path: "/resume",
    icon: {
      name: "fileText",
      className: "fill-amber-100",
    },
  },
]
