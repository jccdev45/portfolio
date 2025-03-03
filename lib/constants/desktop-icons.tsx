import {
  Briefcase,
  FileText,
  MailPlus,
  Notebook,
  NotebookPen,
  Terminal,
  Trash2,
  UserCircle2,
} from "lucide-react"

import type { DesktopIcon } from "@/lib/types"

export const DESKTOP_ICONS: DesktopIcon[] = [
  {
    id: 1,
    label: "About",
    path: "/about",
    icon: {
      name: UserCircle2,
      className: "text-windows-black size-12 fill-windows-white/50", // Using opacity modifier
    },
  },
  {
    id: 2,
    label: "Projects",
    path: "/projects",
    icon: {
      name: Briefcase,
      className: "text-windows-black size-12 fill-amber-900/80",
    },
  },
  {
    id: 8,
    label: "Blog",
    path: "/blog",
    icon: {
      name: NotebookPen,
      className: "size-12 fill-windows-white text-amber-950/90",
    },
  },
  {
    id: 3,
    label: "Recycle Bin",
    path: "/recycle-bin",
    icon: {
      name: Trash2,
      className: "text-windows-black size-12 fill-gray-400",
    },
  },
  {
    id: 4,
    label: "Notepad",
    path: "/notepad",
    icon: {
      name: Notebook,
      className: "text-sky-600 size-12 fill-windows-white",
    },
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
    icon: {
      name: MailPlus,
      className: "text-windows-black size-12 fill-windows-white/70",
    },
  },
  {
    id: 7,
    label: "Terminal",
    path: "/terminal",
    icon: {
      name: Terminal,
      className:
        "text-windows-white border-t-windows-blue border-windows-black size-12 rounded-sm border-4 border-t-8 bg-stone-700",
    },
  },
  {
    id: 9,
    label: "Resume",
    path: "/resume",
    icon: {
      name: FileText,
      className: "size-12 fill-amber-100",
    },
  },
]
