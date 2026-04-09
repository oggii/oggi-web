import React from 'react'
import { cn } from '@/utilities/cn'
import { Media } from '@/components/Media'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  media?: any
  className?: string
}

export const MediaBlockComponent: React.FC<Props> = ({ media, className }) => {
  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div className={cn('max-w-5xl mx-auto px-6', className)}>
      {media && (
        <Media
          resource={media}
          imgClassName="rounded-2xl border border-white/10"
        />
      )}
      {caption && (
        <div className="mt-4 text-sm text-white/50">
          <RichText data={caption} />
        </div>
      )}
    </div>
  )
}
