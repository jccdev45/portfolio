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
    icon: (
      <UserCircle2
        fill="rgba(256,256,256,0.5)"
        color="black"
        className="text-windows-black/70 size-12"
      />
    ),
  },
  {
    id: 2,
    label: "Projects",
    path: "/projects",
    icon: (
      <Briefcase
        fill="rgba(154,102,29, 0.9)"
        color="black"
        className="text-windows-black/70 size-12"
      />
    ),
  },
  {
    id: 8,
    label: "Blog",
    path: "/blog",
    icon: (
      <NotebookPen
        fill="white"
        color="rgba(104,102,29, 0.9)"
        className="block size-12"
      />
    ),
  },
  {
    id: 3,
    label: "Recycle Bin",
    path: "/recycle-bin",
    icon: (
      <Trash2
        fill="rgba(200,200,200)"
        // color="black"
        className="text-windows-black/70 size-12"
      />
    ),
  },
  {
    id: 4,
    label: "Notepad",
    path: "/notepad",
    icon: (
      <Notebook
        fill="white"
        color="rgb(2, 132, 199, 0.9)"
        className="text-windows-black/70 size-12"
      />
    ),
  },
  // {
  //   id: 5,
  //   label: "Solitaire",
  //   path: "/solitaire",
  //   icon: (
  //     <Club
  //       fill="rgba(239, 68, 68, 0.9)"
  //       className="block w-12 h-12 text-windows-black/70"
  //     />
  //   ),
  // },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
    icon: (
      <MailPlus
        fill="rgba(256,256,256,0.7)"
        // color="black"
        className="text-windows-black/70 size-12"
      />
    ),
  },
  {
    id: 7,
    label: "Terminal",
    path: "/terminal",
    icon: (
      <Terminal className="text-windows-white border-t-windows-blue border-windows-black size-12 rounded-sm border-4 border-t-8 bg-stone-700" />
    ),
  },
  {
    id: 9,
    label: "Resume",
    path: "/resume",
    icon: <FileText className="size-12 fill-amber-100" />,
  },
  // {
  //   id: 10,
  //   label: "Paint",
  //   path: "/paint",
  //   icon: <Paintbrush className="size-12 fill-amber-300 stroke-amber-950" />,
  // },
]
