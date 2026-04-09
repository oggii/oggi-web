import React from 'react'
import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'

const heroes: Record<string, React.FC<any>> = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<{
  type?: string | null; richText?: any; links?: any; media?: any
}> = (props) => {
  const { type } = props || {}
  if (!type || type === 'none') return null
  const HeroToRender = heroes[type]
  if (!HeroToRender) return null
  return <HeroToRender {...props} />
}
