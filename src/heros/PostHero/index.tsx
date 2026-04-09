import React from 'react'
import Image from 'next/image'
import { formatDateTime } from '@/utilities/formatDateTime'

type Props = {
  post: {
    title: string
    categories?: Array<{ title?: string } | string> | null
    heroImage?: { url?: string; alt?: string } | string | null
    populatedAuthors?: Array<{ name?: string }> | null
    publishedAt?: string | null
  }
}

export const PostHero: React.FC<Props> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const authorNames = populatedAuthors
    ?.map((a) => a.name)
    .filter(Boolean)
    .join(', ')

  return (
    <div className="relative min-h-[60vh] flex items-end">
      <div className="max-w-4xl mx-auto px-6 z-10 relative pb-12 w-full">
        {categories && categories.length > 0 && (
          <div className="uppercase text-xs tracking-widest text-white/60 mb-4">
            {categories.map((cat, i) => {
              const catTitle = typeof cat === 'object' ? cat.title : cat
              return (
                <React.Fragment key={i}>
                  {catTitle}
                  {i < categories.length - 1 && ', '}
                </React.Fragment>
              )
            })}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
          {title}
        </h1>
        <div className="flex gap-8 text-sm text-white/60">
          {authorNames && <span>By {authorNames}</span>}
          {publishedAt && (
            <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
          )}
        </div>
      </div>
      {heroImage && typeof heroImage === 'object' && heroImage.url && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.url}
            alt={heroImage.alt || title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      )}
    </div>
  )
}
