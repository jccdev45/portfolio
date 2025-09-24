import {
  ArrowLeft,
  Bot,
  Briefcase,
  ChefHat,
  Club,
  Contact,
  Diamond,
  File,
  FileSliders,
  FileSpreadsheet,
  FileText,
  FileX2,
  Github,
  HardDrive,
  Heart,
  ImageIcon,
  Instagram,
  Linkedin,
  MailPlus,
  Music,
  Notebook,
  NotebookPen,
  Paintbrush,
  PlugZap,
  Save,
  Spade,
  StickyNote,
  Terminal,
  Trash2,
  Twitter,
  UserCircle2,
  Utensils,
  Video,
  XCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"

const Icons = {
  arrowLeft: ArrowLeft,
  bot: Bot,
  briefcase: Briefcase,
  chefHat: ChefHat,
  club: Club,
  contact: Contact,
  diamond: Diamond,
  file: File,
  fileSliders: FileSliders,
  fileSpreadsheet: FileSpreadsheet,
  fileText: FileText,
  fileX2: FileX2,
  github: Github,
  hardDrive: HardDrive,
  heart: Heart,
  imageIcon: ImageIcon,
  instagram: Instagram,
  linkedin: Linkedin,
  mailPlus: MailPlus,
  music: Music,
  notebook: Notebook,
  notebookPen: NotebookPen,
  paintbrush: Paintbrush,
  plugZap: PlugZap,
  save: Save,
  spade: Spade,
  stickyNote: StickyNote,
  terminal: Terminal,
  trash2: Trash2,
  twitter: Twitter,
  userCircle2: UserCircle2,
  utensils: Utensils,
  video: Video,
  xCircle: XCircle,
}

export type IconType = keyof typeof Icons

export const Icon = ({
  iconName,
  className,
}: {
  iconName: keyof typeof Icons
  className?: string
}) => {
  const DynamicIcon = Icons[iconName]

  return <DynamicIcon className={cn(className)} />
}
