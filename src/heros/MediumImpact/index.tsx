import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CMSLink } from '@/components/CMSLink'
import { Media } from '@/components/Media'

type Props = { links?: Array<{ link: any }> | null; media?: any; richText?: any }

export const MediumImpactHero: React.FC<Props> = ({ links, media, richText }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 mb-8">
        {richText && (
          <div className="prose prose-invert prose-xl max-w-none mb-6 prose-headings:font-medium prose-headings:tracking-tight prose-p:text-white/70">
            <RichText data={richText} />
          </div>
        )}
        {Array.isArray(links) && links.length > 0 && (
          <div className="flex gap-4">
            {links.map(({ link }, i) => <CMSLink key={i} {...link} />)}
          </div>
        )}
      </div>
      {media && typeof media === 'object' && (
        <div className="max-w-5xl mx-auto px-6">
          <Media resource={media} imgClassName="rounded-2xl border border-white/10" priority />
        </div>
      )}
    </div>
  )
}
