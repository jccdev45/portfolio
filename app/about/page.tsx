/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import { Contact, UserCircle } from "lucide-react"

import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Button } from "@/components/ui/button"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowWrapper } from "@/components/window-wrapper"

const DATA = [
  {
    category: "FRONTEND",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "NextJS",
      "TanStack",
      "TailwindCSS",
      "shadcn-ui",
      "accessibility (a11y)",
    ],
  },
  {
    category: "BACKEND",
    skills: ["Supabase", "Firebase", "NodeJS", "Express", "PostgreSQL", "Bun"],
  },
  {
    category: "TOOLS/PLATFORMS",
    skills: [
      "Git/GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Vitest",
      "Lighthouse",
    ],
  },
  {
    category: "SOFT SKILLS",
    skills: [
      "Problem-solving",
      "Adaptability",
      "Teamwork",
      "Customer Service",
      "Written Communication",
      "Public Speaking",
      "Stress Management",
    ],
  },
]

export const metadata = {
  title: "about",
  description: "jccdev (Software Engineer) — portfolio and contact",
}

export default function AboutPage() {
  return (
    <WindowWrapper
      title="About"
      icon="userCircle2"
      menu={WINDOW_MENU_ITEMS.default}
      bottomBar
    >
      <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col overflow-auto lg:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <aside className="lg:border-windows-dark lg:shadow-windows-dark flex min-w-fit flex-col items-center space-y-4 p-4 lg:border-r lg:shadow-inner">
            <figure className="flex items-center gap-2">
              <UserCircle className="size-12" />
              <figcaption className="max-w-full text-xl font-semibold">
                About Me
              </figcaption>
            </figure>
            <div className="flex w-full flex-col items-center">
              <Link
                href="/contact"
                className="text-windows-blue/80 hover:text-windows-blue my-4 flex w-fit items-center justify-center gap-2 self-center underline underline-offset-2"
              >
                <Contact className="size-5" /> Get in touch
              </Link>
              <Button asChild variant="windows">
                <Link
                  href="/Jordan_Cruz-Correa_Software_Engineer_Resume.pdf"
                  download="Jordan_Cruz_Correa_Software_Engineer_Resume"
                  target="_blank"
                >
                  Download Resume
                </Link>
              </Button>
            </div>
            <RainbowSeparator />
            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-square w-full">
                <Image
                  src="/me2.jpg"
                  alt="Some jabrone named Jordan, looking handsome"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </aside>

          <section className="scrollbar scrollbar-track-rounded-none scrollbar-thumb-rounded-none lg:shadow-windows-dark mx-auto flex flex-col overflow-auto px-3 py-10 lg:col-span-2 lg:shadow-inner">
            <div className="prose max-w-full px-4">
              <h1 className="text-center lg:text-left">Hello 👋🏽</h1>
              <p className="">
                Hi — I’m Jordan, a frontend-focused software engineer who builds
                responsive, user-first web apps with React, TypeScript, and
                Next.js. I specialize in component-driven UIs, performance, and
                accessibility, and I enjoy owning features end-to-end — from API
                design to polished UI. While I lean frontend, I’m comfortable
                full-stack (Supabase, Node.js, PostgreSQL) and shipping
                production systems.
              </p>

              <h2 className="">Technical Skills</h2>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4">
                {DATA.map(({ category, skills }) => (
                  <div key={category} className="">
                    <h3 className="truncate border-b p-2 text-center font-bold">
                      {category}
                    </h3>
                    <ul className="space-y-2 p-4">
                      {skills.map((skill) => (
                        <li key={skill} className="text-sm">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="">Journey & Experience</h2>
              <p className="">
                My path into software engineering has been hands-on and varied —
                from repairing power generators in the Army to electrical work
                and cooking in busy Manhattan kitchens. Each role sharpened my
                troubleshooting, discipline, and ability to stay calm under
                pressure. I also worked as a teaching assistant at a software
                engineering bootcamp, which strengthened my technical
                communication and real-time debugging skills. Those experiences
                inform a pragmatic approach to building reliable, maintainable
                products.
              </p>

              <h2 className="">Beyond Code</h2>
              <p className="">
                Outside of work I play guitar and bass, game (League of Legends,
                Baldur's Gate 3, Elden Ring), and follow pro wrestling. Music is
                a daily habit — currently into bands like{" "}
                <Link
                  className="text-windows-blue font-bold"
                  href="https://www.youtube.com/watch?v=pk4MoWFp2dc"
                  target="_blank"
                >
                  Boundaries
                </Link>
                ,{" "}
                <Link
                  className="text-windows-blue font-bold"
                  href="https://www.youtube.com/watch?v=MA315mvXrCs"
                  target="_blank"
                >
                  Rolo Tomassi
                </Link>{" "}
                and{" "}
                <Link
                  className="text-windows-blue font-bold"
                  href="https://www.youtube.com/watch?v=gLvJiOTnDtk"
                  target="_blank"
                >
                  Strangled
                </Link>
                .
              </p>

              <h2 className="">Projects & Creations</h2>
              <p className="">
                Curious about my work? Check out my{" "}
                <Link className="text-windows-blue font-bold" href="/projects">
                  projects
                </Link>{" "}
                for examples of production-focused work: a NYC health-inspection
                results app, a family recipe book app, and a custom Twitch
                chatbot. Each project emphasizes UI polish, reliable data flows,
                and a focus on user experience. Visit the project pages for
                source and live demos where available.
              </p>

              <h2 className="">Let's Connect!</h2>
              <p className="">
                Interested in collaborating or just want to talk games, music,
                or wrestling?{" "}
                <Link className="text-windows-blue font-bold" href="/contact">
                  Reach out
                </Link>
                . Thanks for stopping by 💖
              </p>
            </div>
          </section>
        </div>
      </div>
    </WindowWrapper>
  )
}
