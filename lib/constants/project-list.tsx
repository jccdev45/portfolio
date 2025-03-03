import { Bot, Briefcase, ChefHat, PlugZap } from "lucide-react"

import type { Project } from "@/lib/types"

export const PROJECT_LIST: Project[] = [
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
    id: 4,
    title: "Luz Electric",
    desc: "Luz Electric is an electrical contracting company based in the Bronx. This is a new and improved version of their current site, soon to be live in production.",
    tech: ["frontend", "react", "nextjs", "tailwindcss", "shadcn-ui"],
    live: "https://luz-electric-ctrl-systems.vercel.app",
    repoURL: "https://github.com/jccdev45/luz-electric-ctrl-systems",
    icon: (
      <PlugZap
        className="size-full"
        color="rgb(245, 158, 11)"
        fill="rgba(245, 158, 11, 0.5)"
      />
    ),
  },
  {
    id: 0,
    title: "jccbot",
    desc: "A Twitch chatbot with commands for trivia, gambling, displaying random wrestling quotes and more.",
    tech: ["typescript", "bun", "tmi.js"],
    live: "https://twitch.tv/jcc_bot",
    repoURL: "https://github.com/jccdev45/jccbot",
    icon: (
      <Bot
        className="size-full"
        color="rgb(126, 34, 206)"
        fill="rgba(126, 34, 206, 0.5)"
      />
    ),
  },
  // {
  //   id: 6,
  //   title: "Coin Checker",
  //   desc: "Chatterino (v2.5.2) plugin to retrieve the current price of various cryptocurrencies and display them in the chat.",
  //   tech: ["lua", "chatterino"],
  //   live: "https://chatterino.com",
  //   repoURL: "https://github.com/jccdev45/check-fartcoin",
  //   icon: (
  //     <Bitcoin
  //       className="size-full rounded-full bg-gray-200"
  //       color="rgb(239, 142, 26)"
  //       // fill="rgba(206, 256, 256, 1)"
  //     />
  //   ),
  // },
]
