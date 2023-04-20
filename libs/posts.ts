import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getAllPostSlugs = () => {
  return getAllPostsRecursively(postsDirectory).map((file) => {
    const fullPath = path.join(postsDirectory, file)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContent)
    const [year, month, day] = data.date.split('-')
    return {
      params: {
        slug: `${year}-${month}-${day}-${data.slug}`,
      },
    }
  })
}

const getAllPostsRecursively = (dir: string): string[] => {
  const files = fs.readdirSync(dir, 'utf-8')
  const allFiles: string[] = []
  files.forEach((file) => {
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      allFiles.push(...getAllPostsRecursively(`${dir}/${file}`))
    } else if (path.extname(file) === '.mdx') {
      allFiles.push(path.relative(postsDirectory, `${dir}/${file}`))
    }
  })
  return allFiles
}

export const getPostData = async (slug: string) => {
  const year = slug.slice(0, 4)
  const file = slug.slice(5)
  const fullPath = path.join(postsDirectory, year, `${file}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    meta: data,
    content,
  }
}
