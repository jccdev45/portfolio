import { promises as fs } from "fs"
import path from "path"
import { Suspense } from "react"
import type { JSX } from "react"
import Link from "next/link"
import matter from "gray-matter"

import { BlogPost } from "@/lib/types"

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const articlesDir = path.join(process.cwd(), "articles")
  const filenames = await fs.readdir(articlesDir)

  const posts = await Promise.all(
    filenames
      .filter((name) => name.endsWith(".mdx"))
      .map(async (name) => {
        const filePath = path.join(articlesDir, name)
        const fileContents = await fs.readFile(filePath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug: data.slug,
          title: data.title,
          date: data.date,
        }
      })
  )

  return posts
}

export async function BlogPostList(): Promise<JSX.Element> {
  const posts = await fetchBlogPosts()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogPostListContent posts={posts} />
    </Suspense>
  )
}

interface BlogPostListContentProps {
  posts: BlogPost[]
}

function BlogPostListContent({ posts }: BlogPostListContentProps): JSX.Element {
  return (
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-bold">Posts</h2>
      <ul className="divide-windows flex w-1/2 flex-col divide-y-2">
        {posts.map((post) => (
          <BlogPostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}

interface BlogPostListItemProps {
  post: BlogPost
}

function BlogPostListItem({ post }: BlogPostListItemProps): JSX.Element {
  return (
    <li className="p-2">
      <Link
        href={`/blog/${post.slug}`}
        className="text-windows-blue hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-windows-black text-sm">{post.date}</p>
    </li>
  )
}
