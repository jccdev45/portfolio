"use client"

import type { JSX } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import type { BlogPost } from "@/components/blog-post-list"

export function BlogPostListItem({ post }: { post: BlogPost }): JSX.Element {
  const path = usePathname()

  return (
    <li
      className={cn(
        "max-w-40 truncate p-1",
        path.includes(post.slug) && "text-windows-blue bg-windows/70"
      )}
    >
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
