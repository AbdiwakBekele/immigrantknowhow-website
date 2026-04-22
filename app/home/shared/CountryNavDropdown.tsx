'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function CountryNavDropdown() {
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
        aria-label="Country menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Country
      </button>
      <div className="ikh-nav-dropdown__menu" role="menu" aria-label="Country links">
        <Link href="/united-states" role="menuitem" onClick={() => setIsOpen(false)}>
          United States
        </Link>
        <Link href="/canada-immigrants" role="menuitem" onClick={() => setIsOpen(false)}>
          Canada
        </Link>
        <Link href="/europe" role="menuitem" onClick={() => setIsOpen(false)}>
          Europe
        </Link>
        <Link href="/great-britain" role="menuitem" onClick={() => setIsOpen(false)}>
          Great Britain
        </Link>
      </div>
    </div>
  )
}
