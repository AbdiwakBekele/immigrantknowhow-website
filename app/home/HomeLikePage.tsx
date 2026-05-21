/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import BuildRealLife from '@/app/components/Home/BuildRealLife'
import CountriesWeServe from '@/app/components/Home/CountriesWeServe'
import ProblemVsMember from '@/app/components/Home/ProblemVsMember'
import TurningLonelinessConnection from '@/app/components/Home/TurningLonelinessConnection'
import WelcomeSection from '@/app/components/Home/WelcomeSection'
import WhyImmigrantsTrust from '@/app/components/Home/WhyImmigrantsTrust'
import WhyWeBuiltImmigrantKnowhow from '@/app/components/Home/WhyWeBuiltImmigrantKnowhow'
import HomeHeader from './shared/HomeHeader'
import { faqs, heroChecklist, howItWorks, joinUrl, loginUrl, services, testimonialCards, thriveCards } from './shared/data'
import { CountryPageConfig } from './shared/country-pages'
import CountryHeroSection from './shared/CountryHeroSection'
import {
  CountryCompareSection,
  CountryHighlightsSection,
  FaqSection,
  FinalCtaSection,
  ForumsConnectionSection,
  HowItWorksSection,
  ResourcesConnectionsSection,
  TestimonialsSection,
  WelcomeCommunitySection,
} from './shared/shared-sections'
import { CheckIcon, PrimaryButton, SectionActions, TrustNote } from './shared/ui'

const asset = (path: string) => `/images/home/${path}`

export default function HomeLikePage({ config }: { config: CountryPageConfig }) {
  const isCountryPage = config.heroVariant === 'country'
  const servicesCountryName = config.pageTitle === 'United States' ? 'the United States' : config.pageTitle
  const resourcesLabel = isCountryPage
    ? (config.resourcesLabel ??
        (config.pageTitle === 'United States' ? 'America' : config.pageTitle))
    : null
  const forumsLabel = isCountryPage
    ? (config.forumsLabel ??
        (config.pageTitle === 'United States' ? 'the United States' : config.pageTitle))
    : null
  const servicesSubtitle = isCountryPage
    ? `Practical help, trusted providers, and real support across ${servicesCountryName} communities.`
    : 'Real help. Trusted people. Right when you need them.'

  return (
    <main className="ikh-page">
      <HomeHeader
        joinUrl={joinUrl}
        loginUrl={loginUrl}
        logoSrc={asset('2024/05/ImmigrantsKnowHow-Logo.svg')}
      />

      {isCountryPage ? (
        <CountryHeroSection config={config} joinUrl={joinUrl} />
      ) : (
        <section className="ikh-hero">
          <div className="ikh-shell ikh-hero__inner">
            <div className="ikh-hero__copy">
              <p className="ikh-hero__kicker">
                Built for <span className="secondary">Every</span>
              </p>
              <h1>
                Immigra<span className="ikh-outline ikh-outline--hero">nt</span>
              </h1>
              <p className="ikh-hero__body">{config.heroBody}</p>

              <ul className="ikh-check-list ikh-check-list--hero">
                {heroChecklist.map((item) => (
                  <li key={item.label}>
                    <CheckIcon kind="white" />
                    <span>
                      <strong>{item.label}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="ikh-hero__buttons">
                <PrimaryButton joinUrl={loginUrl} variant="outline">
                  Sign-in
                </PrimaryButton>
                <PrimaryButton joinUrl={joinUrl}>Join Now!</PrimaryButton>
              </div>

              <TrustNote light />
            </div>

            <div className="ikh-hero__media" aria-hidden="true">
              <img src={config.heroImage} alt="" className={`ikh-hero__image ${config.heroImageClassName ?? ''}`} />
            </div>
          </div>
        </section>
      )}

      <HowItWorksSection
        steps={howItWorks}
        joinUrl={joinUrl}
        title={config.howItWorksTitle}
        titlePrefix={config.howItWorksTitlePrefix}
        titleHighlight={config.howItWorksTitleHighlight}
        subtitle={config.howItWorksSubtitle}
      />

      {!isCountryPage ? (
        <section className="ikh-section ikh-thrive">
          <div className="ikh-shell">
            <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
              We Help <span className="secondary">{config.thriveHeadingFocus}</span> Thrive in a New Country
            </h2>

            <div className="ikh-thrive__layout">
              <div className="ikh-thrive__image-wrap">
                <img src={asset('2025/07/We-Help-Immigrants-Thrive-in-a-New-Country-893x1024.webp')} alt="We help immigrants thrive in a new country" className="ikh-thrive__image" />
              </div>

              <div className="ikh-thrive__content">
                <h3>Most newcomers don&apos;t arrive with a guidebook.</h3>
                <p>{config.thriveBody}</p>

                <div className="ikh-feature-grid">
                  {thriveCards.map((item) => (
                    <article className="ikh-mini-feature" key={item.title}>
                      <figure>
                        <img src={item.image} alt="" />
                      </figure>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {!isCountryPage ? <WelcomeSection /> : null}

      {!isCountryPage ? <ProblemVsMember /> : null}

      {isCountryPage ? <WelcomeCommunitySection welcomeImage="/Welcome-to-Immigrant-TabMob.webp" /> : null}

      {isCountryPage ? <CountryCompareSection countryName={config.pageTitle} /> : null}

      <section id="services" className="ikh-section ikh-services">
        <div className="ikh-shell">
          <h2
            className={`ikh-heading ikh-heading--center ${isCountryPage ? 'ikh-heading--services-country' : 'ikh-heading--narrow'}`}
          >
            {isCountryPage ? (
              <>
                Services for <span className="secondary">Immigrants</span> in {servicesCountryName}
              </>
            ) : (
              'Services We Offer'
            )}
          </h2>
          <p className={`ikh-section-copy ${isCountryPage ? 'ikh-section-copy--services-country' : ''}`}>
            {servicesSubtitle}
          </p>

          <div className="ikh-service-grid">
            {services.map((item) => (
              <article className="ikh-service-card" key={item.title}>
                <div className="ikh-service-card__media">
                  <img src={item.image} alt={item.title} />
                  <span className="ikh-service-card__icon" aria-hidden="true">
                    <img src={item.icon} alt="" />
                  </span>
                </div>
                <div className="ikh-service-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <SectionActions joinUrl={joinUrl} />
        </div>
      </section>

      {!isCountryPage ? <CountriesWeServe /> : null}

      {!isCountryPage ? <BuildRealLife /> : null}

      {isCountryPage ? <CountryHighlightsSection countryName={config.pageTitle} /> : null}

      {resourcesLabel ? (
        <ResourcesConnectionsSection joinUrl={joinUrl} resourcesLabel={resourcesLabel} />
      ) : null}

      {forumsLabel ? <ForumsConnectionSection forumsLabel={forumsLabel} /> : null}

      {!isCountryPage ? <TurningLonelinessConnection /> : null}
      {isCountryPage ? <TurningLonelinessConnection /> : null}

      {!isCountryPage ? <WhyWeBuiltImmigrantKnowhow /> : null}

      {!isCountryPage ? <WhyImmigrantsTrust /> : null}

      <TestimonialsSection testimonialCards={testimonialCards} joinUrl={joinUrl} />
      <FaqSection faqs={faqs} />
      <FinalCtaSection image={asset('2025/07/Call-to-action-Image-1.webp')} joinUrl={joinUrl} />

      <footer id="contact" className="ikh-footer">
        <div className="ikh-shell ikh-footer__grid">
          <div className="ikh-footer__brand">
            <img src={asset('2024/05/ImmigrantsKnowHow-Logo.svg')} alt="Immigrants KnowHow" />
            <p>
              Immigrant Knowhow is where real support meets real community. We help immigrants navigate life in a new country through trusted services, expert guidance, and meaningful human connection, starting in the U.S., Canada, Great Britain and Europe.
            </p>
          </div>

          <div>
            <h3>Links</h3>
            <ul className="ikh-footer__links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="https://immigrantknowhow.com/community">Community</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="https://immigrantknowhow.com/blog/">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Promise</h3>
            <p>
              We&apos;re here to make immigration feel less isolating and more empowering. By combining practical tools, real human connection, and community-driven support, we help you take control of your journey, wherever it begins.
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="ikh-footer__contact">
              <li>
                <strong>Immigrant Knowhow</strong>
              </li>
              <li>767 Broadway #1627 Manhattan, NY 10003</li>
              <li>
                <a href="tel:+16464665505">(646) 466 5505</a>
              </li>
              <li>
                <a href="mailto:hi@immigrantknowhow.com">hi@immigrantknowhow.com</a>
              </li>
            </ul>
            <div className="ikh-socials" aria-label="Social links">
              <a href="https://www.facebook.com/immigrantknowhow" aria-label="Facebook">
                f
              </a>
              <a href="https://www.instagram.com/immigrantknowhow/" aria-label="Instagram">
                ig
              </a>
              <a href="https://www.linkedin.com/company/immigrant-knowhow/" aria-label="LinkedIn">
                in
              </a>
              <a href="https://www.youtube.com/@immigrantknowhow" aria-label="YouTube">
                yt
              </a>
            </div>
          </div>
        </div>

        <div className="ikh-shell ikh-footer__bottom">
          <span>© Immigrant Knowhow</span>
          <a href="/terms">Terms</a>
          <a href="/terms">Privacy</a>
        </div>
      </footer>
    </main>
  )
}
