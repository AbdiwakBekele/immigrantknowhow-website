'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  homeHashSectionId,
  scrollToHomeSectionWhenReady,
} from '@/app/lib/home-section-scroll'

export default function HomeHashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const scrollIfNeeded = () => {
      const sectionId = homeHashSectionId()
      if (!sectionId) {
        return
      }

      scrollToHomeSectionWhenReady(sectionId)
    }

    scrollIfNeeded()
    window.addEventListener('hashchange', scrollIfNeeded)

    return () => window.removeEventListener('hashchange', scrollIfNeeded)
  }, [pathname])

  return null
}
