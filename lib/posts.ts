import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type PostMetadata = {
  title?: string
  summary?: string
  image?: string
  author?: string
  publishedAt?: string
  slug?: string
}

export type Post = {
  metadata: PostMetadata
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { data, content } = matter(fileContent)

    return {
      metadata: { ...data, slug },
      content
    }
  } catch (error) {
    throw Error(`Failed to retrieve post at ${slug} endpoint`)
  }
}
