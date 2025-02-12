import { Metadata } from "next"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { BlogPostList } from "@/components/blog-post-list"

export const metadata: Metadata = {
  title: "blog",
  description: "one of the blogs of all time",
}

export default function BlogPage() {
  return (
    <>
      <div className="text-center text-balance">
        <h1 className="text-4xl font-bold">blog</h1>
        <p className="mt-4 text-lg">
          Here I will write about new tech I am learning, things that interest
          me, life in general or literally whatever enters my brain that can't
          fit in a tweet.
        </p>
        <p className="mt-4 text-lg">
          Browse the list of posts below and select whichever one your little
          heart desires. If you'd like to discuss something I've written about,{" "}
          <Link
            href="/contact"
            className="text-windows-blue/80 hover:text-windows-blue underline transition-colors duration-200 ease-in-out"
          >
            let's chat
          </Link>
          .
        </p>
      </div>
      <Separator className="my-4" />
      <BlogPostList />
    </>
  )
}
