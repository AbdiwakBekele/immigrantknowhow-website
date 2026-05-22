'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { HOME_PAGE_PATH, LIBRARY_PAGE_PATH } from '@/app/lib/site-links'

import { IMMIGRANT_RESOURCES_SECTION_ID } from './immigrant-resources-data'

const resourceLinks = [
  { label: 'Library', href: LIBRARY_PAGE_PATH },
  { label: 'Articles', href: `${HOME_PAGE_PATH}#${IMMIGRANT_RESOURCES_SECTION_ID}` },
]

export default function ResourceNavDropdown({
  onLinkClick,
}: {
  onLinkClick?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handleOutsideClick(event: MouseEvent) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
    onLinkClick?.()
  }

  return (
    <div className={`ikh-nav-dropdown ${isOpen ? 'is-open' : ''}`} ref={rootRef}>
      <button
        className="ikh-nav-dropdown__trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Resources menu"
        onClick={(event) => {
          event.stopPropagation()
          setIsOpen((prev) => !prev)
        }}
      >
        Resources
      </button>
      <div className="ikh-nav-dropdown__menu" role="menu" aria-label="Resources links">
        {resourceLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            role="menuitem"
            onClick={handleLinkClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
