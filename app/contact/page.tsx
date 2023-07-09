"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { WindowWrapper } from "@/components/window/window-wrapper";
import { ContactSchema, ContactSchemaValues, menuItems } from "@/lib/constants";
import { WindowContent } from "@/components/window/window-content";
import { WindowSidebar } from "@/components/window/window-sidebar";
import { Textarea } from "@/components/ui/textarea";
import { RainbowSeparator } from "@/components/rainbow-separator";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null || "" },
  });

  const form = useForm<ContactSchemaValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      form.reset();
    } else {
      setStatus({ ...status, info: { error: true, msg: msg } });
    }
  };

  function onSubmit(values: ContactSchemaValues) {
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    fetch("https://formspree.io/f/myyqyjzd", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });

    // console.log(values);
  }

  return (
    <WindowWrapper
      title="Contact"
      icon={<Contact />}
      menu={menuItems.default}
      bottomBar
    >
      {status.submitting && (
        <div className="absolute inset-x-0 top-0 z-10 grid bottom-6 place-items-center bg-white/90">
          <div className="w-32 h-32 m-auto border-4 border-solid rounded-full border-windows-blue border-t-transparent animate-spin" />
        </div>
      )}

      <div className="absolute inset-x-0 top-0 flex flex-col p-2 overflow-scroll bottom-6 lg:p-0 lg:flex-row gap-y-2 justify-evenly">
        <WindowSidebar className="flex flex-col items-center justify-start w-full lg:p-2 md:justify-start gap-y-2 lg:w-1/3 lg:justify-start lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
          {/* <div className="flex flex-col items-center justify-start"> */}
          <span className="">
            <Contact className="w-12 h-12 md:w-24 md:h-24" />
          </span>
          <h2 className="max-w-full text-xl font-semibold">Contact Me</h2>
          <RainbowSeparator />
          {/* </div> */}
        </WindowSidebar>

        <WindowContent className="h-2/3 lg:w-2/3 md:h-full lg:shadow-inner lg:shadow-windows-dark">
          <Form {...form}>
            <form
              className="flex flex-col justify-center w-3/4 h-full mx-auto gap-y-4 lg:w-2/3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border rounded-none border-windows"
                        placeholder="name@domain.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        className="border rounded-none border-windows"
                        placeholder="Hiring"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border rounded-none border-windows"
                        placeholder="Four score and seven years ago..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-1/3 ml-auto"
                disabled={status.submitting}
                onClick={() => {
                  status.submitted &&
                    toast({
                      description: "Your message has been sent.",
                    });
                }}
              >
                Submit
              </Button>
            </form>
          </Form>
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
