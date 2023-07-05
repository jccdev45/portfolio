"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Contact } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

export default function ContactPage() {
  const form = useForm<ContactSchemaValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: ContactSchemaValues) {
    console.log(values);
  }

  return (
    <WindowWrapper
      title="Contact"
      icon={<Contact />}
      menu={menuItems.default}
      bottomBar
    >
      <div className="flex flex-col items-start w-full h-full text-sm md:text-base lg:flex-row md:justify-center">
        <WindowSidebar style="h-1/5 md:h-1/6 lg:h-2/3">
          <div className="flex flex-col items-center w-full h-full justify-evenly">
            <span className="w-1/6 mx-auto md:w-1/4 lg:w-2/3">
              <Contact className="w-full h-full" />
            </span>
            <h2 className="max-w-full text-xl font-semibold">Contact Me</h2>

            <RainbowSeparator />
          </div>
        </WindowSidebar>
        <WindowContent style="h-full pt-4">
          <Form {...form}>
            <form
              className="grid w-full md:row-start-2 lg:row-start-1 md:max-w-[500px] row-span-4 md:row-span-2 mx-auto md:space-y-2 col-span-full px-2 md:p-0"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-4 row-span-1">
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
                  <FormItem className="col-span-4 row-span-1">
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
                  <FormItem className="col-span-4 row-span-1">
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
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </WindowContent>
      </div>
    </WindowWrapper>
  );
}
