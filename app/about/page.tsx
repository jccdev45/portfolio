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
            <figcaption className="max-w-full text-xl font-semibold">
              About Me
            </figcaption>
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
              Hey there! I&apos;m a software engineer with around 3-4 years of
              experience, mostly focused on front-end development. I&apos;m
              pretty skilled in HTML, CSS (especially TailwindCSS), JavaScript,
              and React. Lately, I&apos;ve been diving into TypeScript, NextJS,
              and Supabase. I&apos;ve also got some knowledge in other areas of
              development and I can troubleshoot problems using various
              resources.
            </p>
            <p className="">
              Besides my technical chops, I consider myself a laid-back person
              with diverse interests. People usually find me friendly and
              easygoing. I&apos;ve got a strong work ethic and love learning new
              things.
            </p>
            <p className="">
              Most recently, I worked as cook at a high level restaurant in the
              downtown Manhattan and before that, I was a teaching assistant at
              a software engineer bootcamp. I&apos;ve also served in the Army
              and worked as a residential electrician so I&apos;ve definitely
              got a well-rounded background and I&apos;m ready to handle those
              &quot;<i>can you believe this shit</i>&quot; moments. Right now,
              I&apos;m on the lookout for a fresh opportunity to apply my skills
              and experience.
            </p>
            <p className="">
              Outside of web dev, I&apos;m an avid PC gamer (League of Legends
              player for well over a decade so...there&apos;s that), pro
              wrestling fan and occasionally I&apos;ll even pick up my guitar
              and bass and mess around.
            </p>
            <p className="">
              Web development is my passion, and I&apos;m always up for new
              challenges. I&apos;m not afraid to put in the extra effort, so
              I&apos;m confident that I can be a valuable asset to your team.
            </p>
          </ScrollArea>
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
