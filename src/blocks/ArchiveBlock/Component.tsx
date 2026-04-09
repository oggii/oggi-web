import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayloadClient } from '@/lib/payload'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  id?: string
  categories?: any[] | null
  introContent?: any
  limit?: number | null
  populateBy?: 'collection' | 'selection'
  selectedDocs?: Array<{ value: any }> | null
}

export const ArchiveBlock: React.FC<Props> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3
  let posts: any[] = []

  if (populateBy === 'collection') {
    const payload = await getPayloadClient()

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      posts = selectedDocs
        .map((doc) => (typeof doc.value === 'object' ? doc.value : null))
        .filter(Boolean)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6" id={`block-${id}`}>
      {introContent && (
        <div className="mb-12 max-w-2xl prose prose-invert">
          <RichText data={introContent} />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
          >
            {post.featuredImage?.url && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-white font-medium text-lg mb-2 group-hover:text-white/90">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
