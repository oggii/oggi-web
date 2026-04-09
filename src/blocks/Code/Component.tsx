import React from 'react'

type Props = {
  code: string
  language?: string
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language }) => {
  return (
    <div className={['max-w-4xl mx-auto px-6 not-prose', className].filter(Boolean).join(' ')}>
      <div className="relative">
        {language && (
          <div className="absolute top-0 right-0 px-3 py-1 text-xs text-white/40 font-mono">
            {language}
          </div>
        )}
        <pre className="bg-black/60 border border-white/10 rounded-xl p-5 overflow-x-auto text-sm font-mono text-white/80 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
