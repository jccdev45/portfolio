import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
import { Suspense } from "react";

import { BlogPostListItem } from "@/components/blog-post-list-item";
import { Separator } from "@/components/ui/separator";

import type { JSX } from "react"
// Helper function to fetch blog posts
async function fetchBlogPosts(): Promise<BlogPost[]> {
  const articlesDir = path.join(process.cwd(), "articles")
  const filenames = await fs.readdir(articlesDir)
  return filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
      title: name.replace(/\.mdx$/, "").replace(/-/g, " "),
    }))
}

// BlogPostList component
export async function BlogPostList(): Promise<JSX.Element> {
  const posts = await fetchBlogPosts()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogPostListContent posts={posts} />
    </Suspense>
  )
}

// BlogPostListContent subcomponent
interface BlogPostListContentProps {
  posts: BlogPost[]
}

function BlogPostListContent({ posts }: BlogPostListContentProps): JSX.Element {
  return (
    <aside className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      <Separator />
      <ul>
        {posts.map((post) => (
          <BlogPostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </aside>
  )
}

// BlogPost type
export interface BlogPost {
  slug: string
  title: string
}
