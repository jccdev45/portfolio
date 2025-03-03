import {
  Briefcase,
  FileText,
  MailPlus,
  NotebookPen,
  Terminal,
  UserCircle2,
} from "lucide-react"

import type { StartMenuItem } from "@/lib/types"

export const START_MENU_ITEMS: StartMenuItem[] = [
  {
    id: 1,
    link: {
      href: "/about",
      text: (
        <>
          <UserCircle2 className="mr-2" /> About
        </>
      ),
    },
  },
  {
    id: 6,
    link: {
      href: "/blog",
      text: (
        <>
          <NotebookPen className="mr-2" /> Blog
        </>
      ),
    },
  },
  {
    id: 2,
    link: {
      href: "/projects",
      text: (
        <>
          <Briefcase className="mr-2" /> Projects
        </>
      ),
    },
  },
  {
    id: 5,
    link: {
      href: "/resume",
      text: (
        <>
          <FileText className="mr-2" /> Resume
        </>
      ),
    },
  },
  {
    id: 3,
    link: {
      href: "/contact",
      text: (
        <>
          <MailPlus className="mr-2" /> Contact
        </>
      ),
    },
  },
  {
    id: 4,
    link: {
      href: "/terminal",
      text: (
        <>
          <Terminal className="mr-2" /> Run
        </>
      ),
    },
  },
]
