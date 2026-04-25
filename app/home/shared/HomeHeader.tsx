/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState } from 'react'

import CountryNavDropdown from './CountryNavDropdown'
import ResourceNavDropdown from './ResourceNavDropdown'
import { PrimaryButton } from './ui'

const signInUrl = 'https://hub.immigrantknowhow.com/login'
const becomeMemberUrl = 'https://hub.immigrantknowhow.com/register'

export default function HomeHeader({
  joinUrl,
  logoSrc,
}: {
  joinUrl: string
  logoSrc: string
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const closeMobileNav = () => setIsMobileNavOpen(false)

  return (
    <>
      <header className="ikh-header">
        <div className="ikh-shell ikh-header__inner">
          <Link href="/" className="ikh-logo-link" aria-label="Immigrant Knowhow home" onClick={closeMobileNav}>
            <img src={logoSrc} alt="ImmigrantsKnowHow Logo" className="ikh-logo" />
          </Link>

          <nav className="ikh-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <CountryNavDropdown />
            <ResourceNavDropdown />
            <a href="https://immigrantknowhow.com/community">Community</a>
            <Link href="/contact">Contact</Link>
            <a href={signInUrl}>Sign In</a>
          </nav>

          <PrimaryButton joinUrl={becomeMemberUrl} className="ikh-button--header">
            Become A Member
          </PrimaryButton>
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
          <a href="#services" onClick={closeMobileNav}>
            Services
          </a>
          <CountryNavDropdown />
          <ResourceNavDropdown />
          <a href="https://immigrantknowhow.com/community" onClick={closeMobileNav}>
            Community
          </a>
          <Link href="/contact" onClick={closeMobileNav}>
            Contact
          </Link>
          <a href={signInUrl} onClick={closeMobileNav}>
            Sign In
          </a>
          <PrimaryButton joinUrl={becomeMemberUrl} onClick={closeMobileNav} className="ikh-button--header">
            Become A Member
          </PrimaryButton>
        </div>
      </nav>
    </>
  )
}
