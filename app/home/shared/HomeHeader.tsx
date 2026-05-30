'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, type MouseEvent } from 'react'

import { HUB_REGISTER_URL } from '@/app/lib/hub-links'
import {
  scrollToServicesSection,
  hasServicesSectionOnPage,
  SERVICES_SECTION_PATH,
} from '@/app/lib/services-scroll'
import { COMMUNITY_PAGE_PATH, CONTACT_PAGE_PATH } from '@/app/lib/site-links'

import ResourceNavDropdown from './ResourceNavDropdown'
import { ArrowIcon } from './ui'

export default function HomeHeader({
  joinUrl,
  loginUrl,
  logoSrc,
}: {
  joinUrl: string
  loginUrl: string
  logoSrc: string
}) {
  const router = useRouter()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const closeMobileNav = () => setIsMobileNavOpen(false)

  useEffect(() => {
    if (!isMobileNavOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileNav()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileNavOpen])

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMobileNav()
    event.preventDefault()

    if (hasServicesSectionOnPage()) {
      scrollToServicesSection()
      window.history.replaceState(null, '', SERVICES_SECTION_PATH)
      return
    }

    router.push(SERVICES_SECTION_PATH)
  }

  return (
    <header className={`ikh-header ${isMobileNavOpen ? 'ikh-header--menu-open' : ''}`}>
      <div className="ikh-shell ikh-header__inner">
        <Link href="/" className="ikh-logo-link" aria-label="Immigrant Knowhow home" onClick={closeMobileNav}>
          <img src={logoSrc} alt="ImmigrantsKnowHow Logo" className="ikh-logo" />
        </Link>

        <nav className="ikh-nav" aria-label="Primary navigation">
          <Link href={SERVICES_SECTION_PATH} onClick={handleServicesClick}>
            Services
          </Link>
          <ResourceNavDropdown onLinkClick={closeMobileNav} />
          <Link href={COMMUNITY_PAGE_PATH} onClick={closeMobileNav}>
            Community
          </Link>
          <Link href={CONTACT_PAGE_PATH} onClick={closeMobileNav}>
            Contact
          </Link>
        </nav>

        <div className="ikh-header-actions">
          <a href={loginUrl} className="ikh-header-login">
            I am looking for service.
          </a>
          <a href={joinUrl || HUB_REGISTER_URL} className="ikh-header-cta">
            <ArrowIcon />
            <span>I&apos;m offering a Service</span>
          </a>
        </div>

        <button
          className="ikh-menu"
          aria-label="Menu"
          aria-expanded={isMobileNavOpen}
          aria-controls="ikh-mobile-nav"
          type="button"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="ikh-mobile-nav"
        className={`ikh-mobile-nav ${isMobileNavOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileNavOpen}
      >
        <div className="ikh-shell ikh-mobile-nav__inner">
          <Link href={SERVICES_SECTION_PATH} onClick={handleServicesClick}>
            Services
          </Link>
          <ResourceNavDropdown onLinkClick={closeMobileNav} />
          <Link href={COMMUNITY_PAGE_PATH} onClick={closeMobileNav}>
            Community
          </Link>
          <Link href={CONTACT_PAGE_PATH} onClick={closeMobileNav}>
            Contact
          </Link>
          <a href={loginUrl} onClick={closeMobileNav} className="ikh-header-login">
            I am looking for service.
          </a>
          <a href={joinUrl || HUB_REGISTER_URL} onClick={closeMobileNav} className="ikh-header-cta">
            <ArrowIcon />
            <span>I&apos;m offering a Service</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
