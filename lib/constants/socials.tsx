import type { JSX } from "react"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export interface Social {
  id: number
  icon: JSX.Element
  title: string
  link: string
}

export const SOCIAL_MEDIA_LIST: Social[] = [
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
