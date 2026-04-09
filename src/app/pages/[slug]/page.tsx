import type { Metadata } from 'next'
import { cache } from 'react'
import { getPayloadClient } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'

export const revalidate = 600

type Args = {
  params: Promise<{ slug: string }>
}

const queryPageBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: { equals: slug },
      _status: { equals: 'published' },
    },
  })
  return result.docs?.[0] || null
})

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const page = await queryPageBySlug(slug)

  if (!page) return { title: 'Page not found' }

  const meta = (page as any).meta

  return {
    title: meta?.title || (page as any).title,
    description: meta?.description || '',
  }
}

export default async function DynamicPage({ params }: Args) {
  const { slug } = await params
  const page = await queryPageBySlug(slug)

  if (!page) notFound()

  const { hero, layout } = page as any

  return (
    <main className="pt-40 min-h-screen pb-24">
      {hero && <RenderHero {...hero} />}
      {layout && <RenderBlocks blocks={layout} />}
    </main>
  )
}
