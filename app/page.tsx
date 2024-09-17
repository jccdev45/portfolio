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

  return <section className="">{/* hi */}</section>
}
