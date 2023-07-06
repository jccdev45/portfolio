import { RainbowSeparator } from "@/components/rainbow-separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WindowContent } from "@/components/window/window-content";
import { WindowSidebar } from "@/components/window/window-sidebar";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { menuItems } from "@/lib/constants";
import { Contact, UserCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <WindowWrapper
      title="About"
      icon={<UserCircle />}
      menu={menuItems.default}
      bottomBar
    >
      <div className="absolute inset-x-0 top-0 flex flex-col bottom-6 lg:flex-row">
        <WindowSidebar className="flex flex-col items-center justify-start w-full pt-4 lg:h-full lg:w-1/3 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark gap-y-2 lg:gap-0">
          <figure className="flex flex-col items-center">
            <UserCircle className="w-12 h-12 md:w-24 md:h-24" />
            <figcaption className="text-lg">About Me</figcaption>
          </figure>
          <Link
            href="/contact"
            className="flex items-center my-2 underline text-windows-blue/80 hover:text-windows-blue underline-offset-2"
          >
            <Contact className="w-5 h-5" /> Get in touch
          </Link>
          <RainbowSeparator />
        </WindowSidebar>

        <WindowContent className="flex flex-col w-full h-full p-3 mx-auto overflow-hidden lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
          <ScrollArea className="w-full h-full prose">
            <p className="">
              I am a software engineer with 3-4 years of experience, mainly in
              front-end development. I&apos;m proficient in HTML, CSS (primarily
              TailwindCSS), JavaScript and React. Recently, I&apos;ve begun
              learning TypeScript, NextJS and Supabase. I am also familiar with
              other areas of development and can use various resources to
              troubleshoot problems.
            </p>
            <p className="">
              In addition to my technical skills, I am also a well-rounded,
              laid-back individual with a variety of interests. I would also say
              I&apos; amicable and easy to get along with. I have a strong work
              ethic and am always willing to learn new things.
            </p>
            <p className="">
              In the past, I&apos;ve worked as a teaching assistant for a
              software engineer bootcamp, and I have also served in the Army and
              worked as a residential electrician. I am currently looking for a
              new opportunity to use my skills and experience.
            </p>
            <p className="">
              I am passionate about web development and I am always looking for
              new challenges. I am also a hard worker and I am always willing to
              go the extra mile, so I&apos;m confident that I can be a valuable
              asset to your team.
            </p>
          </ScrollArea>
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
