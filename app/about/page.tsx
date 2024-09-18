import { Contact, UserCircle } from "lucide-react";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import me from "@/assets/me2.jpg";
import { RainbowSeparator } from "@/components/rainbow-separator";
import { WindowWrapper } from "@/components/window-wrapper";
import { menuItems } from "@/lib/constants";

const data = [
  {
    category: "FRONTEND",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "HTML",
      "CSS",
      "Remix",
    ],
  },
  {
    category: "BACKEND",
    skills: ["Supabase", "Firebase", "NodeJS", "Express", "PostgreSQL"],
  },
  {
    category: "TOOLS/PLATFORMS",
    skills: ["Git/GitHub", "VS Code", "Vercel", "Netlify"],
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
            <div className="mx-auto size-full">
              <Image
                src={me}
                alt="Some jabrone"
                width={450}
                height={750}
                className="aspect-square object-cover"
              />
            </div>
          </aside>

          <section className="mx-auto flex flex-col overflow-scroll px-3 py-10 scrollbar scrollbar-track-rounded-none scrollbar-thumb-rounded-none lg:col-span-2 lg:shadow-inner lg:shadow-windows-dark">
            <div className="prose max-w-full px-4">
              <h1 className="text-center lg:text-left">Hello 👋🏽</h1>
              <p className="">
                I'm Jordan, a frontend-focused software engineer with a knack
                for creating responsive, user-friendly web applications. My
                expertise lies in React, TypeScript, and NextJS, complemented by
                proficiency in HTML, CSS, and TailwindCSS for crafting visually
                appealing interfaces. While my heart belongs to the frontend,
                I'm no stranger to backend technologies like Supabase and
                Node.js, making me adaptable to full-stack roles.
              </p>

              <h2 className="">Technical Skills</h2>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4">
                {data.map(({ category, skills }) => (
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
                My path to software engineering has been anything but
                conventional. I've worn many hats - from serving in the Army as
                a Power Generator Equipment Repairer to working as a residential
                electrician, and even as a line cook in a high-pressure
                Manhattan restaurant. Additionally, I was a teaching assistant
                at a software engineering bootcamp, where I honed my skills in
                explaining complex concepts and troubleshooting code. This
                diverse background has equipped me with a unique problem-solving
                perspective and the ability to thrive in fast-paced, challenging
                environments.
              </p>

              <h2 className="">Beyond Code</h2>
              <p className="">
                When I'm not immersed in web development, you can find me gaming
                (some favorites include League of Legends, Baldur's Gate 3 and
                Elden Ring), watching pro wrestling or playing guitar/bass. I'm
                known for my laid-back demeanor, friendly attitude, and having
                an appetite for learning new technologies and skills.
              </p>

              <h2 className="">Projects & Creations</h2>
              <p className="">
                Curious about my work? Check out my{" "}
                <Link className="text-windows-blue" href="/projects">
                  projects
                </Link>{" "}
                which include a family recipe book app and this very Windows
                98-inspired portfolio site.
              </p>

              <h2 className="">Let's Connect!</h2>
              <p className="">
                Want to work together? Or maybe just talk wrestling, video games
                or whatever else? Feel free to{" "}
                <Link className="text-windows-blue" href="/contact">
                  reach out.
                </Link>{" "}
                Thanks for stopping by 💖
              </p>
            </div>
          </section>
        </div>
      </div>
    </WindowWrapper>
  )
}
