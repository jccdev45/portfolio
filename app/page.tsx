"use client"

import { useLayoutEffect } from "react"

const CONSOLE_ART_KEY = "jccdev_console_art_displayed"

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
    `%c Welcome, enjoy your stay ♥`,
    "font-size: 14px; color: #4CAF50; font-weight: bold"
  )
}

export default function Home() {
  useLayoutEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem(CONSOLE_ART_KEY)
    ) {
      logArt()
      sessionStorage.setItem(CONSOLE_ART_KEY, "true")
    }
  }, [])

  return <section className="">{/* hi */}</section>
}
