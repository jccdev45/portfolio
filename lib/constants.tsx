import {
  Briefcase,
  ChefHat,
  Club,
  Diamond,
  File,
  FileSliders,
  FileSpreadsheet,
  FileX2,
  Github,
  Heart,
  ImageIcon,
  Instagram,
  Linkedin,
  MailPlus,
  Music,
  NotebookPen,
  PlugZap,
  Spade,
  StickyNote,
  Terminal,
  Trash2,
  Twitch,
  Twitter,
  UserCircle2,
  UtensilsCrossed,
  Video,
  XCircle,
} from "lucide-react"
import * as z from "zod"

import { Offset } from "./types"

export const ContactSchema = z.object({
  email: z.string().email({ message: "Must be a valid email" }),
  subject: z
    .string()
    .min(3, { message: "Must be longer than 3 characters" })
    .max(50, { message: "Must be less than 50 characters" }),
  message: z
    .string()
    .min(5, { message: "Must be at least 5 characters" })
    .max(200, { message: "Must be less than 200 characters" }),
})
export type ContactSchemaValues = z.infer<typeof ContactSchema>

export const socials = [
  {
    id: 1,
    icon: <Github className="size-full" fill="rgba(0,0,0,0.3)" />,
    title: "Github",
    link: "https://github.com/jccdev45",
  },
  {
    id: 2,
    icon: (
      <Twitter
        className="size-full"
        color="rgb(0, 159, 234)"
        fill="rgba(0, 159, 234, 0.3)"
      />
    ),
    title: "Twitter",
    link: "https://twitter.com/jccdev",
  },
  {
    id: 3,
    icon: (
      <Linkedin
        className="size-full"
        color="rgb(0,	107, 189)"
        fill="rgba(0,	107, 189, 0.3)"
      />
    ),
    title: "LinkedIn",
    link: "https://linkedin.com/in/jordan-cruz-correa",
  },
  {
    id: 4,
    icon: (
      <Instagram
        className="size-full"
        color="rgb(221, 39, 103)"
        fill="rgba(221, 39, 103, 0.3)"
      />
    ),
    title: "Instagram",
    link: "https://instagram.com/jccdev",
  },
]

export const menuItems = {
  notepad: [
    {
      trigger: "File",
      items: [
        // {
        //   title: "Save",
        //   icon: <Save />,
        // },
        { title: "Exit", icon: <XCircle /> },
      ],
    },
    // {
    //   trigger: "Edit",
    //   items: [
    //     { title: "Copy", icon: <Copy /> },
    //     {
    //       title: "Paste",
    //       tooltip: "",
    //       icon: <ClipboardPaste />,
    //     },
    //   ],
    // },
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
}

export const startMenuItems = [
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

// NOTE: PORTFOLIO
export const myProjects = [
  {
    id: 1,
    title: "Portfolio",
    desc: `You're on it! Inspired by Windows 98, this is a new redesign for my portfolio to showcase my skills, using a whole mess of components from the incredible `,
    tech: ["frontend", "nextjs", "tailwindcss", "shadcn-ui"],
    live: "https://jccdev.vercel.app",
    repoURL: "https://github.com/jccdev45/portfolio-v2",
    icon: (
      <Briefcase
        className="size-full"
        fill="rgba(154,102,29, 0.9)"
        color="black"
      />
    ),
  },
  {
    id: 2,
    title: "Family Recipes",
    desc: "Digital version of a family recipe book. Includes several Supabase services: Authentication, Database and Storage.",
    tech: [
      "fullstack",
      "nextjs",
      "typescript",
      "supabase",
      "tailwindcss",
      "shadcn-ui",
    ],
    live: "https://family-recipes-v2.vercel.app",
    repoURL: "https://github.com/jccdev45/recipes-v2",
    icon: (
      <ChefHat
        className="size-full"
        color="rgb(2, 132, 199)"
        fill="rgba(2, 132, 199, 0.5)"
      />
    ),
  },
  {
    id: 3,
    title: "Health Inspections",
    desc: "Search and view grades & health inspection records of restaurants across NYC. Everything is dirty. (v2 in progress,Typescript / NextJS)",
    tech: ["frontend", "react", "hooks", "react-mapbox-gl", "tailwindcss"],
    live: "https://nyc-health-violations.netlify.app/",
    repoURL: "https://github.com/jccdev45/nyc-restaurant-violations",
    icon: (
      <UtensilsCrossed
        className="size-full"
        color="hsl(0, 0%, 51%)"
        fill="hsla(0, 0%, 51%, 0.5)"
      />
    ),
  },
  {
    id: 4,
    title: "Luz Electric",
    desc: "Luz Electric is a residential, commercial and industrial electrical contracting company based in the Bronx. This is an essentially 1-to-1 redesign of their existing website.",
    tech: ["frontend", "react", "gatsbyjs", "tailwindcss", "react-bootstrap"],
    live: "https://luzcontrolsystems.com/",
    repoURL: "https://github.com/jccdev45/luz-electric",
    icon: (
      <PlugZap
        className="size-full"
        color="rgb(245, 158, 11)"
        fill="rgba(245, 158, 11, 0.5)"
      />
    ),
  },
  {
    id: 5,
    title: "Will Neff",
    desc: "(Unofficial) personal site for content creator extraordinaire Will Neff. He's got great hair.",
    tech: ["frontend", "react", "gatsbyjs", "tailwindcss"],
    live: "https://willneff.netlify.app/",
    repoURL: "https://github.com/jccdev45/willneff",
    icon: (
      <Twitch
        className="size-full"
        color="rgb(126, 34, 206)"
        fill="rgba(126, 34, 206, 0.5)"
      />
    ),
  },
]

// NOTE: DESKTOP
export const desktopIcons = [
  {
    id: 1,
    label: "About",
    path: "/about",
    icon: (
      <UserCircle2
        fill="rgba(256,256,256,0.5)"
        color="black"
        className="block size-12 text-windows-black/70"
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
        className="block size-12 text-windows-black/70"
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
        className="block size-12 text-windows-black/70"
      />
    ),
  },
  {
    id: 4,
    label: "Notepad",
    path: "/notepad",
    icon: (
      <NotebookPen
        fill="white"
        color="rgb(2, 132, 199, 0.9)"
        className="block size-12 text-windows-black/70"
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
        className="block size-12 text-windows-black/70"
      />
    ),
  },
  {
    id: 7,
    label: "Terminal",
    path: "/terminal",
    icon: <Terminal className="block size-12 text-windows-black/70" />,
  },
  // {
  //   id: 8,
  //   label: "Blog",
  //   path: "/blog",
  //   icon: (
  //     <BookUser
  //       fill="white"
  //       color="rgba(104,102,29, 0.9)"
  //       className="block size-12"
  //     />
  //   ),
  // },
]

// NOTE: RECYCLE
export const toRecycle = [
  {
    id: 1,
    title: "definitely_not_passwords.txt",
    ext: ".txt",
    size: "14 kb",
    icon: <StickyNote className="size-full" />,
    path: "/user/notes",
  },
  {
    id: 2,
    title: "creed_take_me_higher.mp3",
    ext: ".mp3",
    size: "4.6 mb",
    icon: <Music className="size-full" />,
    path: "/user/audio",
  },
  {
    id: 3,
    title: "bank_account_number_and_debit_card_pin.txt",
    ext: ".txt",
    size: "8 kb",
    icon: <StickyNote className="size-full" />,
    path: "/user/notes",
  },
  {
    id: 4,
    title: "how_to_pretend_youre_working.pdf",
    ext: ".pdf",
    size: "1.2 mb",
    icon: <File className="size-full" />,
    path: "/user/documents",
  },
  {
    id: 5,
    title: "embarrassing_haircut_2007.jpg",
    ext: ".jpg",
    size: "3.4 mb",
    icon: <ImageIcon className="size-full" />,
    path: "/user/pictures",
  },
  {
    id: 6,
    title: "resume_with_exaggerated_skills.doc",
    ext: ".doc",
    size: "25 kb",
    icon: <File className="size-full" />,
    path: "/user/documents",
  },
  {
    id: 7,
    title: "definitely_not_pirated_movie.avi",
    ext: ".avi",
    size: "12.5 mb",
    icon: <Video className="size-full" />,
    path: "/user/videos",
  },
  {
    id: 8,
    title: "love_letter_to_crush.txt",
    ext: ".txt",
    size: "10 kb",
    icon: <StickyNote className="size-full" />,
    path: "/user/notes",
  },
  {
    id: 9,
    title: "why_i_deserve_a_raise.ppt",
    ext: ".ppt",
    size: "500 kb",
    icon: <FileSliders className="size-full" />,
    path: "/user/presentations",
  },
  {
    id: 10,
    title: "budget_if_i_won_the_lottery.xls",
    ext: ".xls",
    size: "200 kb",
    icon: <FileSpreadsheet className="size-full" />,
    path: "/user/spreadsheets",
  },
]

// NOTE: SOLITAIRE
export const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"] as const

export const VALUES: Record<string, number> = {
  A: 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
} as const

export const offsets: Offset = {
  0: "top-0",
  1: "top-4",
  2: "top-8",
  3: "top-12",
  4: "top-16",
  5: "top-20",
  6: "top-24",
  7: "top-28",
  8: "top-32",
  9: "top-36",
  10: "top-40",
  11: "top-44",
  12: "top-48",
  13: "top-52",
  14: "top-56",
  15: "top-60",
}

export const suitIcons = {
  HEARTS: <Heart size={12} fill="rgb(239, 68, 68)" className="text-red-500" />,
  CLUBS: <Club size={12} fill="rgb(0, 0, 0)" className="text-black" />,
  DIAMONDS: (
    <Diamond size={12} fill="rgb(239, 68, 68)" className="text-red-500" />
  ),
  SPADES: <Spade size={12} fill="rgb(0, 0, 0)" className="text-black" />,
}

export const performanceStatusItems = [
  { id: 1, title: "Memory:", value: "3 Floppy Disks of RAM" },
  { id: 2, title: "System Resources:", value: "42% confused" },
  { id: 3, title: "File System:", value: "Origami-folded" },
  { id: 4, title: "Virtual Memory:", value: "Imaginary" },
  { id: 5, title: "Disk Compression:", value: "Squeezed by hand" },
  { id: 6, title: "PC Cards (PCMCIA):", value: "Tarot-based" },
]
