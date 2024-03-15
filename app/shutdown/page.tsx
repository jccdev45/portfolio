"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Shutdown from "@/assets/shutdown.gif"

export default function ShutdownPage() {
  const router = useRouter()
  const delay = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    const redirectToHome = async () => {
      await delay(3000) // Adjust the delay time as needed (in milliseconds)
      router.push("/")
    }

    redirectToHome()
  }, [router])

  return (
    <div className="absolute inset-0 z-30 h-svh w-svw">
      <Image
        fill
        src={Shutdown}
        alt="Windows 98 shutdown screen"
        className="aspect-square bg-[#a5c6de] object-contain object-center lg:object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto flex w-fit flex-col items-center border bg-windows-white p-4 text-center text-2xl">
        <span>
          Shutting down/restarting...(redirecting back home, don&apos;t worry)
        </span>
      </div>
    </div>
  )
}
