import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { BlogPostList } from "@/components/blog-post-list"

export default function BlogPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to my blog!</h1>
        <p className="mt-4 text-lg">
          This is a blog where I will write about new tech I am learning, things
          that interest me or literally whatever enters my brain.
        </p>
        <p className="mt-4 text-lg">
          Browse the list of posts below and select whichever one your little
          heart desires. If you'd like to discuss any of the topics I've written
          about, don't hesitate to{" "}
          <Link
            href="/contact"
            className="text-windows-blue/80 hover:text-windows-blue underline transition-colors duration-200 ease-in-out"
          >
            get in touch
          </Link>
          .
        </p>
      </div>
      <Separator className="my-4" />
      <BlogPostList />
    </>
  )
}
