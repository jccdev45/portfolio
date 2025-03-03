import type { IconType } from "@/components/icons"

export type RecycleBinItem = {
  id: number
  title: string
  ext: string
  size: string
  icon: IconType
  path: string
}

export const RECYCLE_BIN_ITEMS: RecycleBinItem[] = [
  {
    id: 1,
    title: "definitely_not_passwords.txt",
    ext: ".txt",
    size: "14 kb",
    // icon: <StickyNote className="size-full" />,
    icon: "stickyNote",
    path: "/user/notes",
  },
  {
    id: 2,
    title: "creed_take_me_higher.mp3",
    ext: ".mp3",
    size: "4.6 mb",
    // icon: <Music className="size-full" />,
    icon: "music",
    path: "/user/audio",
  },
  {
    id: 3,
    title: "bank_account_number_and_debit_card_pin.txt",
    ext: ".txt",
    size: "8 kb",
    // icon: <StickyNote className="size-full" />,
    icon: "stickyNote",
    path: "/user/notes",
  },
  {
    id: 4,
    title: "how_to_pretend_youre_working.pdf",
    ext: ".pdf",
    size: "1.2 mb",
    // icon: <File className="size-full" />,
    icon: "file",
    path: "/user/documents",
  },
  {
    id: 5,
    title: "embarrassing_haircut_2007.jpg",
    ext: ".jpg",
    size: "3.4 mb",
    // icon: <ImageIcon className="size-full" />,
    icon: "imageIcon",
    path: "/user/pictures",
  },
  {
    id: 6,
    title: "resume_with_exaggerated_skills.doc",
    ext: ".doc",
    size: "25 kb",
    // icon: <File className="size-full" />,
    icon: "file",
    path: "/user/documents",
  },
  {
    id: 7,
    title: "definitely_not_pirated_movie.avi",
    ext: ".avi",
    size: "12.5 mb",
    // icon: <Video className="size-full" />,
    icon: "video",
    path: "/user/videos",
  },
  {
    id: 8,
    title: "love_letter_to_crush.txt",
    ext: ".txt",
    size: "10 kb",
    // icon: <StickyNote className="size-full" />,
    icon: "stickyNote",
    path: "/user/notes",
  },
  {
    id: 9,
    title: "why_i_deserve_a_raise.ppt",
    ext: ".ppt",
    size: "500 kb",
    // icon: <FileSliders className="size-full" />,
    icon: "fileSliders",
    path: "/user/presentations",
  },
  {
    id: 10,
    title: "budget_if_i_won_the_lottery.xls",
    ext: ".xls",
    size: "200 kb",
    // icon: <FileSpreadsheet className="size-full" />,
    icon: "fileSpreadsheet",
    path: "/user/spreadsheets",
  },
]
