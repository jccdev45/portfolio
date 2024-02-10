/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Contact, UserCircle } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowWrapper } from "@/components/window/window-wrapper"

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
          <aside className="min-w-fit p-4 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
            <figure className="flex flex-col items-center">
              <UserCircle className="size-12 md:size-24" />
              <figcaption className="max-w-full text-xl font-semibold">
                About Me
              </figcaption>
            </figure>
            <Link
              href="/contact"
              className="my-4 flex items-center justify-center gap-2 text-windows-blue/80 underline underline-offset-2 hover:text-windows-blue"
            >
              <Contact className="size-5" /> Get in touch
            </Link>
            <RainbowSeparator />
          </aside>

          <section className="mx-auto flex flex-col overflow-scroll p-3 scrollbar scrollbar-track-rounded-none scrollbar-thumb-rounded-none lg:col-span-2 lg:shadow-inner lg:shadow-windows-dark">
            <div className="prose max-w-full px-4">
              <h1 className="">Hey there!</h1>
              <p className="">
                I'm Jordan, a software engineer mostly focused on front-end
                development but fully capable of back-end work. I'm skilled in
                HTML, CSS (especially TailwindCSS), JavaScript, and React.
                Lately, I've been diving into TypeScript, NextJS, Remix, and
                Supabase. I'm self sufficient and capable of troubleshooting
                using any and all available resources.
              </p>
              <h3 className="">Skills</h3>
              <div className="flex flex-col break-words sm:table sm:w-full sm:min-w-full sm:table-auto sm:flex-row">
                <div className="sm:table-cell sm:w-1/3">
                  <div className="p-4">FRONTEND</div>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>NextJS</li>
                    <li>TailwindCSS</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className="sm:table-cell sm:w-1/3">
                  <div className="p-4">BACKEND</div>
                  <ul>
                    <li>Supabase</li>
                    <li>Firebase</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="sm:table-cell sm:w-1/3">
                  <div className="p-4">GENERAL</div>
                  <ul>
                    <li>Git/Github</li>
                    <li>Debugging</li>
                    <li>Accessibility</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div className="sm:table-cell sm:w-1/3">
                  <div className="p-4">INTERPERSONAL</div>
                  <ul>
                    <li>Customer Service</li>
                    <li>Written Communication</li>
                    <li>Public Speaking</li>
                    <li>Stressful Situations</li>
                  </ul>
                </div>
              </div>

              <h3 className="">Experience</h3>
              <p className="">
                Most recently, I worked as a cook at a high-level restaurant in
                downtown Manhattan and before that, I was a teaching assistant
                at a software engineer bootcamp. I've also served in the Army
                and worked as a residential electrician so I've definitely got a
                well-rounded background and I'm ready to handle those "
                <i>can you believe this shit?</i>&nbsp;&nbsp;" moments.
              </p>

              <h3 className="">Interests</h3>
              <p className="">
                Besides my technical chops, I consider myself a laid-back person
                with diverse interests. People usually find me friendly and
                easygoing. I've got a strong work ethic and love learning new
                things. Outside of web dev, I'm an avid PC gamer (League of
                Legends player for well over a decade so...there's that), pro
                wrestling fan and occasionally I'll even pick up my guitar and
                bass and mess around.
              </p>

              <h3 className="">Projects & Achievements</h3>
              <p className="">
                Check out my <a href="/portfolio">portfolio</a> to see some of
                the stuff I've built.
              </p>

              <h3 className="">Contact Me</h3>
              <p className="">
                Web development is my passion, and I'm always up for new
                challenges. I'm not afraid to put in the extra effort, so I'm
                confident that I can be a valuable asset to your team. If you're
                interested in working together, please don't hesitate to{" "}
                <a href="/contact">reach out</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </WindowWrapper>
  )
}
