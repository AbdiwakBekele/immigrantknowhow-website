'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, type MouseEvent } from 'react'

import { MEMBER_CTA_LABEL } from '@/app/lib/hub-links'
import {
  hasServicesSectionOnPage,
  scrollToServicesSection,
  SERVICES_SECTION_PATH,
} from '@/app/lib/services-scroll'
import {
  COMMUNITY_PAGE_PATH,
  CONTACT_PAGE_PATH,
} from '@/app/lib/site-links'

import ResourceNavDropdown from './ResourceNavDropdown'
import { PrimaryButton } from './ui'

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

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMobileNav()
    event.preventDefault()

    if (hasServicesSectionOnPage()) {
      scrollToServicesSection()
      window.history.replaceState(null, '', '#services')
      return
    }

    router.push(SERVICES_SECTION_PATH)
  }

  return (
    <>
      <header className="ikh-header">
        <div className="ikh-shell ikh-header__inner">
          <Link href="/" className="ikh-logo-link" aria-label="Immigrant Knowhow home" onClick={closeMobileNav}>
            <img src={logoSrc} alt="ImmigrantsKnowHow Logo" className="ikh-logo" />
          </Link>

          <nav className="ikh-nav" aria-label="Primary navigation">
            <Link href={SERVICES_SECTION_PATH} onClick={handleServicesClick}>
              Services
            </Link>
            <ResourceNavDropdown />
            <Link href={COMMUNITY_PAGE_PATH}>Community</Link>
            <Link href={CONTACT_PAGE_PATH}>Contact</Link>
          </nav>

          <div className="ikh-header-actions">
            <a
              href={loginUrl}
              className="ikh-button ikh-button--outline"
            >
              Sign-in
            </a>

            <PrimaryButton joinUrl={joinUrl}>{MEMBER_CTA_LABEL}</PrimaryButton>
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
      </header>

      <nav
        id="ikh-mobile-nav"
        className={`ikh-mobile-nav ${isMobileNavOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
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

          <a
            href={loginUrl}
            onClick={closeMobileNav}
            className="ikh-button ikh-button--outline"
          >
            Login
          </a>

          <PrimaryButton joinUrl={joinUrl} onClick={closeMobileNav}>
            {MEMBER_CTA_LABEL}
          </PrimaryButton>
        </div>
      </nav>
    </>
  )
}
