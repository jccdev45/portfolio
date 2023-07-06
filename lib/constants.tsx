import {
  BookOpen,
  Briefcase,
  ChefHat,
  ClipboardPaste,
  Club,
  Copy,
  Diamond,
  FileX2,
  Heart,
  MailPlus,
  Music,
  PlugZap,
  Save,
  Spade,
  StickyNote,
  Terminal,
  Trash2,
  Twitch,
  UserCircle2,
  UtensilsCrossed,
  XCircle,
} from "lucide-react";
import * as z from "zod";

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
});
export type ContactSchemaValues = z.infer<typeof ContactSchema>;

export const playSound = (title: string) => {
  const audioElement = new Audio(`/${title}.mp3`);
  audioElement.play();
};

export const menuItems = {
  notepad: [
    {
      trigger: "File",
      items: [
        {
          action: () => {
            return playSound("save");
          },
          title: "Save",
          tooltip: "Max 10 notes",
          icon: <Save />,
        },
        { action: null, title: "Exit", tooltip: "", icon: <XCircle /> },
      ],
    },
    {
      trigger: "Edit",
      items: [
        { action: null, title: "Copy", tooltip: "", icon: <Copy /> },
        {
          action: null,
          title: "Paste",
          tooltip: "",
          icon: <ClipboardPaste />,
        },
      ],
    },
  ],
  recycleBin: [
    {
      trigger: "File",
      items: [
        {
          action: () => {
            return playSound("empty");
          },
          title: "Empty",
          tooltip: "",
          icon: <FileX2 />,
        },
        {
          action: null,
          title: "Exit",
          tooltip: "",
          icon: <XCircle />,
        },
      ],
    },
  ],
  default: [
    {
      trigger: "File",
      items: [{ action: null, title: "Exit", tooltip: "", icon: <XCircle /> }],
    },
  ],
};

export const myProjects = [
  {
    id: 1,
    title: "Family Recipes",
    desc:
      "Digital version of a family recipe book. Includes several Firebase services: Authentication, Cloud Firestore and Storage for photo upload (v2 in progress, full rewrite to Typescript in NextJS).",
    tech: [
      "fullstack",
      "react",
      "hooks",
      "firebase",
      "firestore",
      "tailwindcss",
    ],
    live: "https://medinarecipes.netlify.app",
    repoURL: "https://github.com/jccdev45/family-recipes",
    demo: "https://www.youtube.com/embed/hRg217nKaPI",
    icon: (
      <ChefHat
        className="w-full h-full"
        color="rgb(2, 132, 199)"
        fill="rgba(2, 132, 199, 0.5)"
      />
    ),
  },
  {
    id: 2,
    title: "NYC Health Inspections",
    desc:
      "Search and view grades & health inspection records of restaurants across NYC. Everything is dirty. Made with create-react-app, using react-mapbox-gl, styled with TailwindCSS and deployed via Netlify (v2 in progress, full rewrite to Typescript in NextJS)",
    tech: ["frontend", "react", "hooks", "react-mapbox-gl", "tailwindcss"],
    live: "https://nyc-health-violations.netlify.app/",
    repoURL: "https://github.com/jccdev45/nyc-restaurant-violations",
    demo: "https://www.youtube.com/embed/VWsU9YeihUM",
    icon: (
      <UtensilsCrossed
        className="w-full h-full"
        color="hsl(0, 0%, 51%)"
        fill="hsla(0, 0%, 51%, 0.5)"
      />
    ),
  },
  {
    id: 3,
    title: "Luz Electric",
    desc:
      "Luz Electric is a residential, commercial and industrial electrical contracting company based in the Bronx. This is an essentially 1-to-1 redesign of their existing website, created with GatsbyJS and styled with react-bootstrap, deployed via Netlify.",
    tech: ["frontend", "react", "gatsbyjs", "tailwindcss"],
    live: "https://luzcontrolsystems.com/",
    repoURL: "https://github.com/jccdev45/luz-electric",
    demo: "https://www.youtube.com/embed/lxjgXCtqgac",
    icon: (
      <PlugZap
        className="w-full h-full"
        color="rgb(245, 158, 11)"
        fill="rgba(245, 158, 11, 0.5)"
      />
    ),
  },
  {
    id: 4,
    title: "Will Neff",
    desc:
      "(Unofficial) personal site for content creator extraordinaire Will Neff. Will primarily streams on Twitch and is part of both G4TV and 100 Thieves. He's got great hair and sick dance moves. This site was created with GatsbyJS and styled with (surprise) TailwindCSS.",
    tech: ["frontend", "react", "gatsbyjs", "tailwindcss"],
    live: "https://willneff.netlify.app/",
    repoURL: "https://github.com/jccdev45/willneff",
    demo: "https://youtu.be/RDVMhI4ZAgs",
    icon: (
      <Twitch
        className="w-full h-full"
        color="rgb(126, 34, 206)"
        fill="rgba(126, 34, 206, 0.5)"
      />
    ),
  },
];

export const desktopIcons = [
  {
    id: 1,
    label: "About",
    path: "/about",
    icon: (
      <UserCircle2
        fill="rgba(256,256,256,0.5)"
        color="black"
        className="block w-12 h-12 text-windows-black/70"
      />
    ),
  },
  {
    id: 2,
    label: "Portfolio",
    path: "/portfolio",
    icon: (
      <Briefcase
        fill="rgba(154,102,29, 0.9)"
        color="black"
        className="block w-12 h-12 text-windows-black/70"
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
        className="block w-12 h-12 text-windows-black/70"
      />
    ),
  },
  {
    id: 4,
    label: "Notepad",
    path: "/notepad",
    icon: (
      <BookOpen
        fill="white"
        color="rgb(2, 132, 199, 0.9)"
        className="block w-12 h-12 text-windows-black/70"
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
        className="block w-12 h-12 text-windows-black/70"
      />
    ),
  },
  {
    id: 7,
    label: "Terminal",
    path: "/terminal",
    icon: <Terminal className="block w-12 h-12 text-windows-black/70" />,
  },
];

export const toRecycle = [
  {
    id: 1,
    title: "passwords.txt",
    ext: ".txt",
    size: "14 kb",
    icon: <StickyNote className="w-full h-full" />,
    path: "/user/notes",
  },
  {
    id: 2,
    title: "creed_take_me_higher.mp3",
    ext: ".mp3",
    size: "4.6 mb",
    icon: <Music className="w-full h-full" />,
    path: "/user/audio",
  },
  {
    id: 3,
    title: "bank_account_number_and_debit_card_pin.txt",
    ext: ".txt",
    size: "8 kb",
    icon: <StickyNote className="w-full h-full" />,
    path: "/user/notes",
  },
];

interface Offset {
  [key: number]: string;
}

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
};

export const suitIcons = {
  hearts: <Heart size={12} fill="rgb(239, 68, 68)" className="text-red-500" />,
  clubs: <Club size={12} fill="rgb(0, 0, 0)" className="text-black" />,
  diamonds: (
    <Diamond size={12} fill="rgb(239, 68, 68)" className="text-red-500" />
  ),
  spades: <Spade size={12} fill="rgb(0, 0, 0)" className="text-black" />,
};

interface Value {
  [key: number]: string;
}

export const values: Value = {
  1: "A",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K",
};
