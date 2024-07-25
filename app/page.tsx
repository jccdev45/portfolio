"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const logArt = () => {
      console.log(
        `%c
           ♥     ♥   ♥       ♥        ♥
                 ██╗ ██████╗ ██████╗ 
         ♥       ██║██╔════╝██╔════╝   ♥
                 ██║██║  ♥  ██║     
           ♥     ██║██║     ██║      ♥
             ██████║╚██████╗╚██████╗
        ♥     ╚════╝ ╚═════╝ ╚═════╝   ♥
             ♥     ♥       ♥     ♥
        %c
          ♥      ♥     ♥       ♥
            ██████╗ ███████╗██╗   ██╗
        ♥   ██╔══██╗██╔════╝██║ ♥ ██║
            ██║  ██║█████╗  ██║   ██║ ♥
        ♥   ██║  ██║██╔══╝  ██║   ██║
            ██████╔╝███████╗╚██████╔╝
            ╚═════╝ ╚══════╝ ╚═════╝  ♥
          ♥     ♥       ♥        ♥
        `,
        "color: #FF69B4; font-weight: bold;",
        "color: #00CED1; font-weight: bold;"
      )
      console.log(
        `%c Welcome to my portfolio site, enjoy your stay ♥`,
        "font-size: 14px; color: #4CAF50; font-weight: bold"
      )
    }

    return () => logArt()
  }, [])

  return (
    <section className="">
      {/* if you're reading this, please go no further. this codebase is messy as hell. i write better code now (somewhat). maybe one day i'll rewrite/redo the whole project but idk that's a lot. anyway, see ya later. listen to every time i die. */}
      {/* update: i'm slowly diving into fixing and cleaning the code. i linked a screenshot (avoiding the link to reduce the amount of actual visits and also reduce the amount of people who'd be looking at my subpar projects) of the site to someone on twitter asking for examples of customized shadcn-ui sites and it got some likes so it made me realize i never got around to doing janitor work. so...now i'm doing that. you should still listen to every time i die. also listen to like...bilmuri. */}
    </section>
  )
}
