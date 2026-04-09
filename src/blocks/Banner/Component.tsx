import React from 'react'
import { cn } from '@/utilities/cn'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  className?: string
  content: any
  style?: 'info' | 'warning' | 'error' | 'success'
}

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full max-w-4xl px-6', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded-lg', {
          'border-white/10 bg-white/5 text-white/80': style === 'info',
          'border-red-500/30 bg-red-500/10 text-red-300': style === 'error',
          'border-green-500/30 bg-green-500/10 text-green-300': style === 'success',
          'border-yellow-500/30 bg-yellow-500/10 text-yellow-300': style === 'warning',
        })}
      >
        <div className="prose prose-invert prose-sm max-w-none">
          <RichText data={content} />
        </div>
      </div>
    </div>
  )
}
