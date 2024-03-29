// global
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
// local
import { getAllPostSlugs, getPostData } from '@libs/posts'

interface PostPageProps {
  content: MDXRemoteSerializeResult
  meta: Record<string, string>
}

export default function PostPage({ content, meta }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <MDXRemote {...content} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPostSlugs(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error('No params found')
  const postData = await getPostData(params.slug as string)
  const content = await serialize(postData.content)

  return {
    props: {
      meta: postData.meta,
      content,
    },
  }
}
