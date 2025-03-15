import Link from "next/link"

import { resumeData } from "@/lib/constants/resume"
import { WINDOW_MENU_ITEMS } from "@/lib/constants/window-menu-items"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "resume",
}

export default function ResumePage() {
  return (
    <WindowWrapper
      title="Resume"
      icon="fileText"
      bottomBar
      menu={WINDOW_MENU_ITEMS.default}
    >
      <div className="absolute inset-x-0 top-0 bottom-6 overflow-auto p-2">
        <ScrollArea>
          <div className="divide-y-2">
            {/* Contact Info */}
            <header className="flex flex-col justify-between md:flex-row md:items-center">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">
                  {resumeData.contactInfo.name}
                </h1>
                <p>{resumeData.contactInfo.location}</p>
                <Link
                  className="text-windows-blue underline"
                  href="mailto:jccdev45@gmail.com"
                >
                  {resumeData.contactInfo.email}
                </Link>
                <p>Personal Site</p>
                <p>
                  <Link
                    className="text-windows-blue underline"
                    href={resumeData.contactInfo.github}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-windows-blue underline"
                    href={resumeData.contactInfo.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>
              <div className="grid h-full place-items-center p-8">
                <Button asChild variant="windows">
                  <Link href="/resume.txt" download="resume">
                    Download .txt
                  </Link>
                </Button>
              </div>
            </header>
            {/* Summary */}
            <section>
              <h2 className="mt-4 text-xl font-semibold">
                Professional Summary
              </h2>
              <p>{resumeData.summary}</p>
            </section>
            {/* Skills */}
            <section>
              <h2 className="mt-4 text-xl font-semibold">Skills</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {resumeData.skills.map((skill) => (
                  <div key={skill.category} className="mb-2">
                    <h3 className="font-semibold">{skill.category}</h3>
                    <ul className="list-inside list-disc">
                      {skill.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            {/* Projects */}
            <section>
              <h2 className="mt-4 text-xl font-semibold">Projects</h2>
              {resumeData.projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <ul className="list-inside list-disc">
                    {project.desc}
                    {/* {project.description.map((d, index) => (
                      <li key={index}>{d}</li>
                    ))} */}
                  </ul>
                  <p>
                    Technologies: {project.tech.join(", ")}
                    {project.live && (
                      <>
                        <br />
                        <Link
                          href={project.live}
                          target="_blank"
                          className="text-windows-blue underline"
                        >
                          Live Demo
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </section>

            {/* Work History */}
            <section>
              <h2 className="mt-4 text-xl font-semibold">Work History</h2>
              {resumeData.workHistory.map((work) => (
                <div key={work.company} className="mb-4">
                  <h3 className="font-semibold">
                    {work.company} - {work.location}
                  </h3>
                  <p className="font-medium">{work.position}</p>
                  <p className="text-gray-600">{work.date}</p>
                  <ul className="list-inside list-disc">
                    {work.description.map((d, index) => (
                      <li key={index}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <h2 className="mt-4 text-xl font-semibold">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.school} className="mb-4">
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-gray-600">{edu.date}</p>
                </div>
              ))}
            </section>
          </div>
        </ScrollArea>
      </div>
    </WindowWrapper>
  )
}
