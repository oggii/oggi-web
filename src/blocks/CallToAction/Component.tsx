import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { CMSLink } from '@/components/CMSLink'

type Props = {
  links?: Array<{ link: any }> | null
  richText?: any
}

export const CallToActionBlock: React.FC<Props> = ({ links, richText }) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-2xl">
          {richText && (
            <div className="prose prose-invert max-w-none">
              <RichText data={richText} />
            </div>
          )}
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-col gap-4">
            {links.map(({ link }, i) => <CMSLink key={i} {...link} />)}
          </div>
        )}
      </div>
    </div>
  )
}
