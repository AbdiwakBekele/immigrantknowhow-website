'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { DV_LOTTERY_PAGE_PATH, LIBRARY_PAGE_PATH } from '@/app/lib/site-links'

const resourceLinks = [
  { label: 'Library', href: LIBRARY_PAGE_PATH },
  { label: 'DV Lottery', href: DV_LOTTERY_PAGE_PATH },
  { label: 'Articles', href: '#' },
]

export default function ResourceNavDropdown({
  onLinkClick,
}: {
  onLinkClick?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

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
