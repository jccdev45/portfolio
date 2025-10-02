"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Contact, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { SOCIAL_MEDIA_LIST } from "@/lib/constants/socials"
import { ContactSchema, type ContactSchemaValues } from "@/lib/contact-schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { Textarea } from "@/components/ui/textarea"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowPanelContent } from "@/components/window-panel-content"
import { WindowPanelSidebar } from "@/components/window-sidebar"

const ContactFormLogic = () => {
  type Status = {
    submitted: boolean
    submitting: boolean
    info: { error: boolean; msg: string }
  }

  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  })

  const form = useForm<ContactSchemaValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    // use functional update to avoid stale closures
    setStatus((prev) => ({
      ...prev,
      info: { error: !ok, msg },
      submitted: ok,
      submitting: false,
    }))

    if (ok) {
      toast(msg)
      form.reset()
    }
  }

  const handleSubmit = async (values: ContactSchemaValues) => {
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    // use an env var when available so the endpoint isn't hard-coded
    const endpoint =
      process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
      "https://formspree.io/f/myyqyjzd"

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      })

      // try to parse json body for a helpful message, but fall back to status text
      let bodyMessage = ""
      try {
        const data = await res.json().catch(() => null)
        if (data && typeof data === "object") {
          // common shapes: { error: 'msg' } or { message: 'msg' }
          bodyMessage = (data.error ||
            data.message ||
            JSON.stringify(data)) as string
        }
      } catch (e) {
        /* ignore json parse errors */
      }

      if (res.ok) {
        handleServerResponse(
          true,
          bodyMessage || "Thank you, your message has been submitted."
        )
      } else {
        handleServerResponse(
          false,
          bodyMessage || `request failed: ${res.status} ${res.statusText}`
        )
      }
    } catch (err: any) {
      // network or other unexpected error
      handleServerResponse(
        false,
        err?.message ?? "An unexpected error occurred. Please try again later."
      )
    }
  }

  return { status, form, handleSubmit }
}

export function ContactForm() {
  const { status, form, handleSubmit } = ContactFormLogic()
  const matches = useMediaQuery("(min-width: 850px)")
  const isClient = useIsClient()
  const dir = matches ? `horizontal` : `vertical`

  return (
    <>
      {status.submitting && (
        <div className="absolute inset-x-0 top-0 bottom-6 z-10 grid place-items-center bg-white/90">
          <div className="border-windows-blue m-auto size-32 animate-spin rounded-full border-4 border-solid border-t-transparent" />
        </div>
      )}

      <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-evenly gap-y-2 overflow-auto p-2 lg:flex-row lg:p-0">
        {isClient ? (
          <ResizablePanelGroup direction={dir}>
            <WindowPanelSidebar className="lg:border-windows-dark lg:shadow-windows-dark min-h-fit space-y-1 lg:border-r lg:shadow-inner">
              <figure className="flex w-full flex-col items-center justify-start md:p-4">
                <Contact className="size-12 md:size-24" />
                <figcaption className="max-w-full text-xl font-semibold">
                  Contact Me
                </figcaption>
              </figure>
              <RainbowSeparator />
              <div className="mx-auto grid w-5/6 grid-cols-4 place-items-center gap-2">
                {SOCIAL_MEDIA_LIST.map((social) => (
                  <Link
                    href={social.link}
                    key={social.id}
                    className="hover:outline-windows-dark hover:bg-windows/50 flex flex-col items-center p-2 hover:cursor-pointer hover:outline hover:outline-dashed md:px-4"
                    target="_blank"
                  >
                    <span className="size-10">{social.icon}</span>
                    <span className="sr-only">{social.title}</span>
                  </Link>
                ))}
              </div>
            </WindowPanelSidebar>

            <ResizableHandle withHandle />

            <WindowPanelContent className="lg:shadow-windows-dark h-2/3 md:h-full lg:w-2/3 lg:shadow-inner">
              <Form {...form}>
                <form
                  className="grid h-full p-8 md:p-20"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-rows-2 gap-2 md:grid-cols-4">
                          <FormLabel>
                            <span className="underline">E</span>mail:
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white col-span-3 rounded-none border shadow-inner"
                              placeholder="yourname@domain.com"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-rows-2 gap-2 md:grid-cols-4">
                          <FormLabel>
                            <span className="underline">S</span>ubject:
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white col-span-3 rounded-none border shadow-inner"
                              placeholder="Hiring 🤞🏽"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-rows-2 gap-2 md:grid-cols-4">
                          <FormLabel>
                            <span className="underline">M</span>essage:
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white col-span-3 rounded-none border shadow-inner"
                              placeholder="Four score and seven years ago..."
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="ml-auto w-1/3"
                    disabled={status.submitting}
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </WindowPanelContent>
          </ResizablePanelGroup>
        ) : (
          <div className="grid size-full place-items-center">
            <Loader2 className="text-windows-blue size-20 animate-spin" />
          </div>
        )}
      </div>
    </>
  )
}
