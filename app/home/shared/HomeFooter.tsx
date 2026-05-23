/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import {
  COMMUNITY_PAGE_PATH,
  CONTACT_PAGE_PATH,
  SERVICES_SECTION_PATH,
} from "@/app/lib/site-links";

const asset = (path: string) => `/images/home/${path}`;

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: SERVICES_SECTION_PATH },
  { label: "Community", href: COMMUNITY_PAGE_PATH },
  { label: "Contact", href: CONTACT_PAGE_PATH },
  { label: "Blog", href: "https://immigrantknowhow.com/blog/", external: true },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/immigrantknowhow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9v-3h1.5V7.2c0-2.2 1.3-3.7 3.6-3.7H16v3h-1.4c-.8 0-1.1.4-1.1 1.1V8.5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/immigrantknowhow/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/immigrant-knowhow/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8.2 9.5H5.4v11h2.8V9.5Zm-.1-3.6c0 .9-.7 1.6-1.7 1.6S4.7 6.8 4.7 5.9 5.4 4.3 7.1 4.3s1.7.7 1.7 1.6ZM18.5 20.5h-2.8v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8v5.5h-2.8V9.5h2.8v1.5c.4-.7 1.3-1.7 3.1-1.7 2.3 0 4 1.5 4 4.7v6.5Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@immigrantknowhow",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 8.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C14.6 5 12 5 12 5h0s-2.6 0-5.2.3c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S4 9.6 4 11.2v1.5c0 1.6.2 3 .2 3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7.3.3 7.5.3 0 0 2.6 0 5.2-.3.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.4.2-3v-1.5c0-1.6-.2-3-.2-3ZM10 14.8V9.5l5 2.7-5 2.6Z" />
      </svg>
    ),
  },
];

export default function HomeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ikh-footer">
      <div className="ikh-shell">
        <div className="ikh-footer__main">
          <div className="ikh-footer__brand">
            <Link href="/" className="ikh-footer__logo-link" aria-label="Immigrant Knowhow home">
              <img src={asset("2024/05/ImmigrantsKnowHow-Logo.svg")} alt="" className="ikh-footer__logo" />
            </Link>
            <p className="ikh-footer__tagline">
              Real support, trusted guidance, and community for immigrants building life in the U.S., Canada, Great
              Britain, and Europe.
            </p>
            <div className="ikh-footer__socials" aria-label="Social media">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="ikh-footer__social-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="ikh-footer__col" aria-label="Footer navigation">
            <h3 className="ikh-footer__heading">Explore</h3>
            <ul className="ikh-footer__list">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ikh-footer__col">
            <h3 className="ikh-footer__heading">Our promise</h3>
            <p className="ikh-footer__text">
              We make immigration feel less isolating and more empowering — with practical tools, human connection, and
              community-driven support for every step of your journey.
            </p>
          </div>

          <div className="ikh-footer__col">
            <h3 className="ikh-footer__heading">Get in touch</h3>
            <ul className="ikh-footer__list ikh-footer__list--contact">
              <li>
                <span className="ikh-footer__label">Office</span>
                <span>767 Broadway #1627, Manhattan, NY 10003</span>
              </li>
              <li>
                <span className="ikh-footer__label">Phone</span>
                <a href="tel:+16464665505">(646) 466-5505</a>
              </li>
              <li>
                <span className="ikh-footer__label">Email</span>
                <a href="mailto:hi@immigrantknowhow.com">hi@immigrantknowhow.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ikh-footer__bottom">
          <p className="ikh-footer__copyright">© {year} Immigrant Knowhow. All rights reserved.</p>
          <div className="ikh-footer__legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
