import React from 'react'
import { cn } from '@/utilities/cn'
import { Media } from '@/components/Media'

type Props = {
  media?: any
  className?: string
}

export const MediaBlockComponent: React.FC<Props> = ({ media, className }) => {
  return (
    <div className={cn('max-w-5xl mx-auto px-6', className)}>
      {media && <Media resource={media} imgClassName="rounded-2xl border border-white/10" />}
    </div>
  )
}
