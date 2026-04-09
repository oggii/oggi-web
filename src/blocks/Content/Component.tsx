import React from 'react'
import { cn } from '@/utilities/cn'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CMSLink } from '@/components/CMSLink'

type Props = {
  columns?: Array<{
    size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
    richText?: any
    enableLink?: boolean
    link?: any
  }> | null
}

const colSpanClasses: Record<string, string> = {
  full: 'lg:col-span-12',
  half: 'lg:col-span-6',
  oneThird: 'lg:col-span-4',
  twoThirds: 'lg:col-span-8',
}

export const ContentBlock: React.FC<Props> = ({ columns }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-8">
        {columns?.map((col, index) => {
          const { enableLink, link, richText, size } = col

          return (
            <div
              className={cn('col-span-4', colSpanClasses[size || 'full'])}
              key={index}
            >
              {richText && (
                <div className="prose prose-invert max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:text-white/70 prose-p:leading-relaxed">
                  <RichText data={richText} />
                </div>
              )}
              {enableLink && link && <CMSLink {...link} className="mt-4" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
