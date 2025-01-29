import { MessageCircleX, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 - Not Found",
}

export default function NotFoundPage() {
  return (
    <main className="absolute inset-0 m-auto flex h-screen items-center justify-center">
      <section
        className="relative w-5/6 border-4 border-b-windows-dark border-l-windows border-r-windows-dark border-t-windows bg-windows shadow-sm shadow-windows-dark md:w-1/2 lg:w-2/5"
        role="alert"
        aria-labelledby="error-title"
      >
        <header className="flex h-8 w-full select-none items-center justify-between bg-linear-to-r from-windows-blue to-[rgb(0,126,196)] px-1 py-0.5 text-windows-white md:h-9">
          <h1 id="error-title" className="text-sm font-bold">
            Error
          </h1>
          <Button
            variant="ghost"
            className="size-6 rounded-none border border-b-windows-dark border-l-windows-white border-r-windows-dark border-t-windows-white bg-windows p-0.5 text-windows-black"
            aria-label="Close and return to homepage"
            asChild
          >
            <Link href="/">
              <X />
            </Link>
          </Button>
        </header>
        <div className="flex flex-col p-4 sm:px-4">
          <div className="mb-4 flex items-center gap-4">
            <MessageCircleX
              className="size-32 fill-destructive stroke-windows-black stroke-1"
              aria-hidden="true"
            />
            <div>
              <h2 className="mb-2 font-bold">404</h2>
              <p>
                It looks like you&apos;ve encountered a broken link or entered a
                URL that doesn&apos;t exist.
              </p>
            </div>
          </div>
          <Button asChild variant="windows" className="mx-auto mb-6">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
