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
      <div className="grid w-full min-h-full grid-cols-12">
        <WindowSidebar>
          <div className="flex flex-col items-center justify-evenly">
            <span className="scale-110">
              <Contact className="w-24 h-24" />
            </span>
            <h2 className="max-w-full text-xl font-semibold">Contact Me</h2>
            <div className="grid w-full grid-cols-4">
              <span className="h-0.5 col-span-1 bg-red-400"></span>
              <span className="h-0.5 col-span-1 bg-yellow-400"></span>
              <span className="h-0.5 col-span-1 bg-green-400"></span>
              <span className="h-0.5 col-span-1 bg-blue-400"></span>
            </div>
          </div>
        </WindowSidebar>
        <WindowContent>
          <Form {...form}>
            <form
              className="grid w-3/4 max-w-[500px] row-span-4 mx-auto space-y-2 col-span-full"
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
                    <FormDescription>Your email</FormDescription>
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
                    <FormDescription>Brief reason for contact</FormDescription>
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
                    <FormDescription>
                      Not so brief reason for contact
                    </FormDescription>
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
