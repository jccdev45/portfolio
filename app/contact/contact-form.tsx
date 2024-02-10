"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Contact } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useMediaQuery } from "usehooks-ts"

import { ContactSchema, ContactSchemaValues, socials } from "@/lib/constants"
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
import { WindowContent } from "@/components/window/window-content"
import { WindowSidebar } from "@/components/window/window-sidebar"

const ContactFormLogic = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null || "" },
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    setStatus({
      ...status,
      info: { error: !ok, msg },
      submitted: ok,
      submitting: false,
    })

    if (ok) {
      toast(msg)
      form.reset()
    }
  }

  const form = useForm<ContactSchemaValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  const handleSubmit = (values: ContactSchemaValues) => {
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    fetch("https://formspree.io/f/myyqyjzd", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) =>
        handleServerResponse(
          response.ok,
          "Thank you, your message has been submitted."
        )
      )
      .catch((error) => handleServerResponse(false, error.response.data.error))
  }

  return { status, form, handleSubmit }
}

export function ContactForm() {
  const { status, form, handleSubmit } = ContactFormLogic()
  const matches = useMediaQuery("(min-width: 850px)")
  const dir = matches ? `horizontal` : `vertical`

  return (
    <>
      {status.submitting && (
        <div className="absolute inset-x-0 bottom-6 top-0 z-10 grid place-items-center bg-white/90">
          <div className="m-auto size-32 animate-spin rounded-full border-4 border-solid border-windows-blue border-t-transparent" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-6 top-0 flex flex-col justify-evenly gap-y-2 overflow-scroll p-2 lg:flex-row lg:p-0">
        <ResizablePanelGroup direction={dir}>
          <WindowSidebar className="min-h-fit lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
            <figure className="flex w-full flex-col items-center justify-start md:p-4">
              <Contact className="size-12 md:size-24" />
              <figcaption className="max-w-full text-xl font-semibold">
                Contact Me
              </figcaption>
            </figure>
            <RainbowSeparator />
            <div className="mx-auto grid w-5/6 grid-cols-4 place-items-center gap-2">
              {socials.map((social) => (
                <Link
                  href={social.link}
                  key={social.id}
                  className="flex flex-col items-center p-2 hover:cursor-pointer hover:border hover:border-dashed hover:border-windows-dark hover:bg-windows/50 md:px-4"
                  target="_blank"
                >
                  <span className="size-10">{social.icon}</span>
                  <span className="sr-only">{social.title}</span>
                </Link>
              ))}
            </div>
          </WindowSidebar>

          <ResizableHandle withHandle />

          <WindowContent className="h-2/3 md:h-full lg:w-2/3 lg:shadow-inner lg:shadow-windows-dark">
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
                            className="col-span-3 rounded-none border border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white shadow-inner"
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
                            className="col-span-3 rounded-none border border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white shadow-inner"
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
                            className="col-span-3 rounded-none border border-b-windows-white border-l-windows border-r-windows-white border-t-windows bg-windows-white shadow-inner"
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
          </WindowContent>
        </ResizablePanelGroup>
      </div>
    </>
  )
}
