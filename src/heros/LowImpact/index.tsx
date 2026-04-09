import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  children?: React.ReactNode
  richText?: any
}

export const LowImpactHero: React.FC<Props> = ({ children, richText }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16">
      {children || (
        richText && (
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:text-white/70">
            <RichText data={richText} />
          </div>
        )
      )}
    </div>
  )
}
