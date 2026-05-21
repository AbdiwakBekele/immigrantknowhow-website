'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const resourceLinks = [
  { label: 'Library', href: 'https://hub.immigrantknowhow.com/register' },
  { label: 'DV Lottery', href: '#' },
  { label: 'Articles', href: '#' },
]

export default function ResourceNavDropdown() {
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

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className={`ikh-nav-dropdown ${isOpen ? 'is-open' : ''}`} ref={rootRef}>
      <button
        className="ikh-nav-dropdown__trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Resources menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Resources
      </button>
      <div className="ikh-nav-dropdown__menu" role="menu" aria-label="Resources links">
        {resourceLinks.map((item) => (
          <Link key={item.label} href={item.href} role="menuitem" onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
