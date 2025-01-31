import { promises as fs } from "fs"
import path from "path"
import type { JSX } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const slug = (await params).slug
  const { default: Post } = await import(`@/articles/${slug}.mdx`)

  return (
    <div className="size-full">
      <Post />
    </div>
  )
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const articlesDir = path.join(process.cwd(), "articles")
  const filenames = await fs.readdir(articlesDir)
  return filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
    }))
}

export const dynamicParams = false
