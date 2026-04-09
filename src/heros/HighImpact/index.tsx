import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CMSLink } from '@/components/CMSLink'
import { Media } from '@/components/Media'

type Props = { links?: Array<{ link: any }> | null; media?: any; richText?: any }

export const HighImpactHero: React.FC<Props> = ({ links, media, richText }) => {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] text-white">
      <div className="max-w-4xl mx-auto px-6 z-10 relative text-center">
        {richText && (
          <div className="prose prose-invert prose-2xl max-w-none mb-8 prose-headings:font-medium prose-headings:tracking-tight">
            <RichText data={richText} />
          </div>
        )}
        {Array.isArray(links) && links.length > 0 && (
          <div className="flex justify-center gap-4">
            {links.map(({ link }, i) => <CMSLink key={i} {...link} />)}
          </div>
        )}
      </div>
      {media && typeof media === 'object' && (
        <div className="absolute inset-0">
          <Media fill priority imgClassName="object-cover" resource={media} className="h-full" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
    </div>
  )
}
