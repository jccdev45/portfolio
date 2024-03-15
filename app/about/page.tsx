/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import me from "@/assets/me.png"
import { Contact, UserCircle } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowWrapper } from "@/components/window-wrapper"

const data = [
  {
    category: "FRONTEND",
    skills: [
      "React",
      "Javascript",
      "Typescript",
      "NextJS",
      "TailwindCSS",
      "HTML/CSS",
    ],
  },
  {
    category: "BACKEND",
    skills: ["Supabase", "Firebase", "NodeJS", "Express", "PostgreSQL"],
  },
  {
    category: "GENERAL",
    skills: ["Git/Github", "Debugging", "Accessibility", "Project Management"],
  },
  {
    category: "INTERPERSONAL",
    skills: [
      "Customer Service",
      "Written Communication",
      "Public Speaking",
      "Stressful Situations",
    ],
  },
]

export const metadata = {
  title: "about",
  description: "🆗",
}

export default function AboutPage() {
  return (
    <WindowWrapper
      title="About"
      icon={<UserCircle />}
      menu={menuItems.default}
      bottomBar
    >
      <div className="absolute inset-x-0 bottom-6 top-0 flex flex-col overflow-auto lg:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <aside className="flex min-w-fit flex-col items-center space-y-4 p-4 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
            <figure className="flex flex-col items-center">
              <UserCircle className="size-12 md:size-24" />
              <figcaption className="max-w-full text-xl font-semibold">
                About Me
              </figcaption>
            </figure>
            <Link
              href="/contact"
              className="my-4 flex w-fit items-center justify-center gap-2 self-center text-windows-blue/80 underline underline-offset-2 hover:text-windows-blue"
            >
              <Contact className="size-5" /> Get in touch
            </Link>
            <RainbowSeparator />
            <div className="mx-auto h-full w-40">
              <Image
                src={me}
                alt="Some jabrone"
                width={450}
                height={850}
                className="object-cover"
              />
            </div>
          </aside>

          <section className="mx-auto flex flex-col overflow-scroll px-3 py-10 scrollbar scrollbar-track-rounded-none scrollbar-thumb-rounded-none lg:col-span-2 lg:shadow-inner lg:shadow-windows-dark">
            <div className="prose max-w-full px-4">
              <h1 className="text-center lg:text-left">Hey there!</h1>
              <p className="">
                I'm Jordan, a software engineer mostly focused on front-end
                development but fully capable of back-end work. I'm skilled in
                HTML, CSS (especially TailwindCSS), JavaScript, and React.
                Lately, I've been diving into TypeScript, NextJS, Remix, and
                Supabase. I'm self sufficient and capable of troubleshooting
                using any and all available resources.
              </p>

              <h2 className="">Skills</h2>
              <div className="flex flex-col break-words sm:table sm:w-full sm:min-w-full sm:table-auto sm:flex-row">
                {data.map(({ category, skills }) => (
                  <div className="sm:table-cell sm:w-1/3" key={category}>
                    <h3 className="border-b p-4">{category}</h3>
                    <ul>
                      {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="">Experience</h2>
              <p className="">
                Most recently, I worked as a cook at a high-level restaurant in
                downtown Manhattan and before that, I was a teaching assistant
                at a software engineer bootcamp. I've also served in the Army
                and worked as a residential electrician so I've definitely got a
                well-rounded background and I'm ready to handle those "
                <i>can you believe this shit?</i>&nbsp;&nbsp;" moments.
              </p>

              <h2 className="">Interests</h2>
              <p className="">
                Besides my technical chops, I consider myself a laid-back person
                with diverse interests. People usually find me friendly and
                easygoing. I've got a strong work ethic and love learning new
                things. Outside of web dev, I'm an avid PC gamer (League of
                Legends player for well over a decade so...there's that), pro
                wrestling fan and occasionally I'll even pick up my guitar and
                bass and mess around.
              </p>

              <h2 className="">Projects & Achievements</h2>
              <p className="">
                Check out my{" "}
                <a className="text-windows-blue" href="/portfolio">
                  portfolio
                </a>{" "}
                to see some of the stuff I've built.
              </p>

              <h2 className="">Contact Me</h2>
              <p className="">
                Web development is my passion, and I'm always up for new
                challenges so I'm confident that I can be a valuable asset to
                your team. If you're interested in working together, please
                don't hesitate to{" "}
                <a className="text-windows-blue" href="/contact">
                  reach out
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </WindowWrapper>
  )
}
