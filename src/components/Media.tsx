import Image from 'next/image'
import React from 'react'
import { cn } from '@/utilities/cn'

type MediaProps = {
  resource?: unknown
  src?: { src: string; width: number; height: number }
  fill?: boolean
  priority?: boolean
  className?: string
  imgClassName?: string
}

export const Media: React.FC<MediaProps> = ({
  resource,
  src: staticImage,
  fill,
  priority,
  className,
  imgClassName,
}) => {
  if (!resource && !staticImage) return null

  const media = resource as {
    url?: string
    alt?: string
    width?: number
    height?: number
    caption?: unknown
  } | null

  const url = media?.url || staticImage?.src
  const alt = media?.alt || ''
  const width = media?.width || staticImage?.width || 1200
  const height = media?.height || staticImage?.height || 675

  if (!url) return null

  if (fill) {
    return (
      <div className={cn('relative', className)}>
        <Image
          src={url}
          alt={alt}
          fill
          priority={priority}
          className={cn('object-cover', imgClassName)}
          sizes="100vw"
        />
      </div>
    )
  }

  return (
    <div className={className}>
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn('w-full h-auto', imgClassName)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </div>
  )
}
