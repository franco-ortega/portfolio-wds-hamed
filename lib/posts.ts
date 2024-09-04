import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export async function getPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    metaData: { ...data, slug },
    content
  }
}
