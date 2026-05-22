/* eslint-disable @next/next/no-img-element */
import TurningLonelinessConnection from '@/app/components/Home/TurningLonelinessConnection'
import WhyImmigrantsTrust from '@/app/components/Home/WhyImmigrantsTrust'
import WhyWeBuiltImmigrantKnowhow from '@/app/components/Home/WhyWeBuiltImmigrantKnowhow'
import {
  faqs,
  heroChecklist,
  howItWorks,
  joinUrl,
  services,
  testimonialCards,
  thriveCards,
} from './shared/data'
import { CountryPageConfig } from './shared/country-pages'
import CountryHeroSection from './shared/CountryHeroSection'
import type { PublicServiceType } from '@/app/lib/api/service-types'
import FindServicesSection from './shared/FindServicesSection'
import HelpfulEbooksSection from './shared/HelpfulEbooksSection'
import ImmigrantResourcesSection from './shared/ImmigrantResourcesSection'
import type { PublicCommunityPost, PublicNewsItem } from '@/app/lib/api/community'
import type { PublicLibraryItem } from '@/app/lib/api/library'
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
import HeroSearchPanel from './shared/HeroSearchPanel'
import { CheckIcon, CompassIcon, SectionActions, TrustNote } from './shared/ui'
import { HUB_PROVIDER_REGISTER_URL } from '@/app/lib/hub-links'

const asset = (path: string) => `/images/home/${path}`

type HomeLikePageProps = {
  config: CountryPageConfig
  serviceTypes?: PublicServiceType[]
  ebooks?: PublicLibraryItem[]
  resourceArticles?: PublicNewsItem[]
  resourceVideos?: PublicCommunityPost[]
}

export default function HomeLikePage(props: HomeLikePageProps) {
  const { config } = props
  const allServiceTypes = props.serviceTypes ?? []
  const carouselServiceTypes = allServiceTypes.slice(0, 6)
  const homeEbooks = props.ebooks ?? []
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
                <a href={HUB_PROVIDER_REGISTER_URL} className="ikh-button ikh-button--hero">
                  <CompassIcon />
                  <span>Register As Provider</span>
                </a>
                <a href={joinUrl} className="ikh-button ikh-button--hero">
                  <CompassIcon />
                  <span>Join Now!</span>
                </a>
              </div>

              <TrustNote light />
            </div>

            <div className="ikh-hero__media" aria-hidden="true">
              <img src={config.heroImage} alt="" className={`ikh-hero__image ${config.heroImageClassName ?? ''}`} />
            </div>
          </div>

          <div className="ikh-shell ikh-hero__search-wrap">
            <HeroSearchPanel serviceTypes={allServiceTypes} />
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

      {!isCountryPage ? <FindServicesSection serviceTypes={carouselServiceTypes} /> : null}

      {!isCountryPage ? <HelpfulEbooksSection ebooks={homeEbooks} /> : null}

      {!isCountryPage ? (
        <ImmigrantResourcesSection
          articles={props.resourceArticles ?? []}
          videos={props.resourceVideos ?? []}
        />
      ) : null}

      {isCountryPage ? <WelcomeCommunitySection welcomeImage="/Welcome-to-Immigrant-TabMob.webp" /> : null}

      {isCountryPage ? <CountryCompareSection countryName={config.pageTitle} /> : null}

      {isCountryPage ? (
        <section id="services-we-offer" className="ikh-section ikh-services">
          <div className="ikh-shell">
            <h2 className="ikh-heading ikh-heading--center ikh-heading--services-country">
              Services for <span className="secondary">Immigrants</span> in {servicesCountryName}
            </h2>
            <p className="ikh-section-copy ikh-section-copy--services-country">{servicesSubtitle}</p>

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
      ) : null}

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
    </main>
  )
}
