import TestimonialCarousel from '../TestimonialCarousel'
import { CheckIcon, PrimaryButton, SectionActions, TrustNote } from './ui'

const homeAsset = (path: string) => `/images/home/${path}`

export function ForumsConnectionSection({ forumsLabel }: { forumsLabel: string }) {
  return (
    <section className="ikh-section ikh-connection ikh-connection--forums">
      <div className="ikh-shell">
        <div className="ikh-compare__showcase">
          <div className="ikh-compare__content">
            <h2 className="ikh-connection__forums-title">
              <span className="secondary">Community &amp; Forums</span>
              <br />
              in {forumsLabel}
            </h2>
            <p>
              You don&apos;t have to go through this journey alone. Join discussions with immigrants
              across {forumsLabel} and find the support you need.
            </p>
            <ul className="ikh-forums-list">
              <li>
                <img src={homeAsset('2025/07/engagement-1.png')} alt="" aria-hidden="true" />
                <p>
                  <strong>Ask questions and get real answers</strong> from people who&apos;ve already
                  faced the same challenges.
                </p>
              </li>
              <li>
                <img src={homeAsset('2025/07/tour-guide-2.png')} alt="" aria-hidden="true" />
                <p>
                  <strong>Share your tips and experiences</strong> to help others on their path.
                </p>
              </li>
              <li>
                <img src={homeAsset('2025/07/church.png')} alt="" aria-hidden="true" />
                <p>
                  <strong>Build friendships and support networks</strong> with people who truly
                  understand.
                </p>
              </li>
            </ul>
          </div>

          <div className="ikh-compare__media" aria-hidden="true">
            <img src={homeAsset('2025/07/Tutors-1-1024x683.webp')} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ResourcesConnectionsSection({
  joinUrl,
  resourcesLabel,
}: {
  joinUrl: string
  resourcesLabel: string
}) {
  const resourceCards = [
    {
      title: 'Transportation',
      body: `Get tips from newcomers on using buses, trains, and metro systems across ${resourcesLabel} cities.`,
      icon: homeAsset('2025/07/Public-transportation.png'),
    },
    {
      title: 'Culture & Laws',
      body:
        'Understand workplace expectations, rights, and cultural norms through real community insights.',
      icon: homeAsset('2025/07/New-country-culture.png'),
    },
    {
      title: 'Education',
      body: "Find tutors and connect with families who've already navigated local schools.",
      icon: homeAsset('2025/07/tutoring-2.png'),
    },
    {
      title: 'Services & Finance',
      body: 'Discover trusted providers and hear how others manage everyday finances abroad.',
      icon: homeAsset('2025/07/Financial-management.png'),
    },
    {
      title: 'Health & Wellbeing',
      body: `Learn how immigrants across ${resourcesLabel} handle healthcare and find providers you can trust.`,
      icon: homeAsset('2025/07/Food-and-health.png'),
    },
  ]

  return (
    <section className="ikh-section ikh-real-life">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center">
          Resources &amp; Connections in <span className="secondary">{resourcesLabel}.</span>
        </h2>
        <p className="ikh-section-copy ikh-section-copy--resources">
          Learn from other immigrants, connect with verified providers, and find practical advice for
          life across {resourcesLabel}.
        </p>

        <div className="ikh-resources-grid">
          {resourceCards.map((item) => (
            <article className="ikh-resource-card" key={item.title}>
              <img src={item.icon} alt="" className="ikh-resource-card__icon" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <SectionActions joinUrl={joinUrl} />
      </div>
    </section>
  )
}

type HowItWorksStep = {
  title: string
  body: string
  number: string
  icon: string
}

type TestimonialCard = {
  id: string
  quote: string
  author: string
  location: string
}

type FaqItem = {
  q: string
  a: string
}

export function HowItWorksSection({
  steps,
  joinUrl,
  title,
  titlePrefix,
  titleHighlight,
  subtitle,
}: {
  steps: HowItWorksStep[]
  joinUrl: string
  title?: string
  titlePrefix?: string
  titleHighlight?: string
  subtitle?: string
}) {
  return (
    <section className="ikh-section ikh-how">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center">
          {titlePrefix && titleHighlight ? (
            <>
              {titlePrefix}
              <span className="secondary">{titleHighlight}</span>
            </>
          ) : title ? (
            title
          ) : (
            <>
              How <span className="secondary">Immigrant Knowhow</span> Works
            </>
          )}
        </h2>
        {subtitle ? <p className="ikh-section-copy">{subtitle}</p> : null}

        <div className="ikh-steps">
          {steps.map((item) => (
            <article className="ikh-step" key={item.title}>
              <img src={item.number} alt="" className="ikh-step__number" />
              <div className="ikh-step__content">
                <img src={item.icon} alt="" className="ikh-step__svg" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <SectionActions joinUrl={joinUrl} />
      </div>
    </section>
  )
}

export function WelcomeCommunitySection({
  welcomeImage,
}: {
  welcomeImage: string
}) {
  return (
    <section id="community" className="ikh-section ikh-welcome">
      <div className="ikh-shell ikh-welcome__inner">
        <div className="ikh-welcome__copy">
          <h2 className="ikh-welcome__title">
            <span className="ikh-welcome__kicker">Welcome to</span>
            <span className="secondary">Immigrant KnowHow</span>
          </h2>
          <p>
            Immigrant KnowHow is a global platform that connects immigrants with trusted services,
            step-by-step guidance, and a real community to make settling into a new country simpler
            and less overwhelming.
          </p>
          <p>
            From finding a tutor, or simply connecting with people who share your journey,
            Immigrant KnowHow gives you real support every step of the way.
          </p>
        </div>

        <div className="ikh-welcome__media" aria-hidden="true">
          <img src={welcomeImage} alt="" />
          <div className="ikh-welcome__services">
            <div className="ikh-welcome__service">
              <span className="ikh-welcome__service-icon">
                <img src="/images/home/2025/07/tour-guide-2.png" alt="" />
              </span>
              <span>Tour Guide Services</span>
            </div>
            <div className="ikh-welcome__service">
              <span className="ikh-welcome__service-icon">
                <img src="/images/home/2025/07/pet-care-2.png" alt="" />
              </span>
              <span>Pet Sitter Service</span>
            </div>
            <div className="ikh-welcome__service">
              <span className="ikh-welcome__service-icon">
                <img src="/images/home/2025/07/tutoring-2.png" alt="" />
              </span>
              <span>Tutor Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CountryCompareSection({ countryName }: { countryName: string }) {
  const countryWithArticle = countryName === 'United States' ? 'the United States' : countryName

  return (
    <section className="ikh-section ikh-compare">
      <div className="ikh-shell">
        <div className="ikh-compare__showcase">
          <div className="ikh-compare__media" aria-hidden="true">
            <img src="/USA-1.webp" alt="" />
          </div>
          <div className="ikh-compare__content">
            <h2>
              Starting Your Life in <span className="secondary">{countryName}</span> Made Simpler
            </h2>
            <p>
              Adjusting to life in {countryWithArticle} can feel overwhelming. From figuring out
              healthcare and banking to learning new cultural norms and finding community, every step
              can be confusing when you&apos;re on your own.
            </p>
            <p>
              Immigrant KnowHow gives you clear guidance, trusted resources, and a supportive
              network so you can settle in with confidence. Our goal is to make {countryWithArticle} feel
              familiar, welcoming, and like home as quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LonelinessConnectionSection({ connectRegion }: { connectRegion: string }) {
  return (
    <section className="ikh-section ikh-loneliness-connection">
      <div className="ikh-shell ikh-loneliness-connection__inner">
        <div className="ikh-loneliness-connection__content">
          <h2 className="ikh-loneliness-connection__headline">
            <span className="ikh-loneliness-connection__title-top">
              Turning&nbsp;Loneliness&nbsp;Into
            </span>
            <span className="ikh-loneliness-connection__title-bottom secondary">Connection</span>
          </h2>
          <p>
            No one should have to face life in a new country alone. Starting over can feel
            isolating, but it doesn&apos;t have to.
          </p>
          <p>
            Immigrant KnowHow brings you together with people who understand your journey. Through
            forums, local groups, and shared experiences, we&apos;re creating a space where
            immigrants across {connectRegion} can connect, learn, and grow side by side.
          </p>
          <ul className="ikh-check-list ikh-check-list--light ikh-loneliness-connection__list">
            <li>
              <CheckIcon kind="white" />
              <span>Meet others who share your language, culture, and story</span>
            </li>
            <li>
              <CheckIcon kind="white" />
              <span>Share your journey and be heard by people who get it</span>
            </li>
            <li>
              <CheckIcon kind="white" />
              <span>Ask questions and find clear, practical answers</span>
            </li>
            <li>
              <CheckIcon kind="white" />
              <span>Join local meetups, events, and online groups</span>
            </li>
            <li>
              <CheckIcon kind="white" />
              <span>Create lasting connections and a true sense of belonging</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function CountryHighlightsSection({ countryName }: { countryName: string }) {
  const headingCountry = countryName === 'United States' ? 'America' : countryName

  return (
    <section className="ikh-section ikh-country-highlights">
      <div className="ikh-shell ikh-country-highlights__inner">
        <div className="ikh-country-highlights__media" aria-hidden="true">
          <img src="/Welcome-to-Immigrant-TabMob.webp" alt="" />
        </div>

        <div className="ikh-country-highlights__content ikh-country-highlights__content--mobile-tight">
          <h2>
            Making Life in {headingCountry} <span className="secondary">Easier</span>
          </h2>

          <article className="ikh-country-highlights__card">
            <span className="ikh-country-highlights__icon">
              <img src="/images/home/2025/07/tutoring-2.png" alt="" />
            </span>
            <div>
              <h3>Access Trusted Services</h3>
              <p>
                Find tutors, guides, and sitters who understand life as an immigrant in {headingCountry}.
              </p>
            </div>
          </article>

          <article className="ikh-country-highlights__card">
            <span className="ikh-country-highlights__icon">
              <img src="/images/home/2025/07/tour-guide-2.png" alt="" />
            </span>
            <div>
              <h3>Connect Across Borders</h3>
              <p>Join forums, share advice, and meet newcomers across {headingCountry}.</p>
            </div>
          </article>

          <article className="ikh-country-highlights__card">
            <span className="ikh-country-highlights__icon">
              <img src="/images/home/2025/07/pet-care-2.png" alt="" />
            </span>
            <div>
              <h3>Learn and Grow</h3>
              <p>Get tips and stories from immigrants already settled here.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection({
  testimonialCards,
  joinUrl,
}: {
  testimonialCards: TestimonialCard[]
  joinUrl: string
}) {
  return (
    <section className="ikh-section ikh-testimonials">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center">
          What Our <span className="secondary">Members Say</span>
        </h2>
        <TestimonialCarousel testimonials={testimonialCards} />

        <SectionActions joinUrl={joinUrl} />
      </div>
    </section>
  )
}

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="ikh-section ikh-faq">
      <div className="ikh-shell ikh-faq__shell">
        <h2 className="ikh-heading ikh-heading--center">Frequently Asked Questions</h2>
        <div className="ikh-faq__list">
          {faqs.map((item, index) => (
            <details className="ikh-faq__item" key={item.q} open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCtaSection({
  image,
  joinUrl,
}: {
  image: string
  joinUrl: string
}) {
  return (
    <section className="ikh-section ikh-final-cta">
      <div className="ikh-shell ikh-final-cta__inner">
        <div className="ikh-final-cta__copy">
          <h2>
            Support That
            <br />
            <span className="secondary">Moves</span> With You
          </h2>
          <p>
            Immigrant Knowhow brings together trusted services and real community, so wherever you
            land, you&apos;re never starting from zero. From local help to peer advice, we&apos;re here to
            make life easier, one connection at a time.
          </p>
        </div>

        <div className="ikh-final-cta__media" aria-hidden="true">
          <img src={image} alt="" />
        </div>

        <div className="ikh-final-cta__side">
          <h3>
            Built for Real Connections
          </h3>
          <p>
            Find people who understand your story. Ask questions, offer help, and feel part of
            something bigger.
          </p>
          <PrimaryButton joinUrl={joinUrl}>Become A Member</PrimaryButton>
          <TrustNote light />
        </div>
      </div>
    </section>
  )
}
