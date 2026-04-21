/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import TestimonialCarousel from './TestimonialCarousel'

const joinUrl = 'https://immigrantknowhow.com/join-now/'

const asset = (path: string) => `/images/home/${path}`

const heroChecklist = [
  {
    label: 'Tour Guides:',
    text: 'Discover your new home with local experts',
  },
  {
    label: 'Pet Sitters:',
    text: 'Book trusted care when you need it',
  },
  {
    label: 'Tutors:',
    text: 'Get academic help in your language',
  },
]

const howItWorks = [
  {
    title: 'Sign Up',
    body: 'Create your account as a member or provider, it only takes a minute to get started.',
    number: asset('2025/09/one.svg'),
    icon: asset('2025/09/how-sign-up.svg'),
  },
  {
    title: 'Access Support',
    body: 'Explore expert content, regional resources, and personalized help based on your country and interests.',
    number: asset('2025/09/two.svg'),
    icon: asset('2025/09/how-access-support.svg'),
  },
  {
    title: 'Join Community',
    body: 'Ask questions, share experiences, and connect with others who understand your journey.',
    number: asset('2025/09/three.svg'),
    icon: asset('2025/09/how-join-community.svg'),
  },
]

const thriveCards = [
  {
    title: 'Public Transportation',
    body: 'Understand routes, passes, and best ways to get around',
    image: asset('2025/07/Public-transportation.png'),
  },
  {
    title: 'Open a Bank Account',
    body: 'Step-by-step guidance to set up and manage your finances',
    image: asset('2025/07/Open-a-bank-account.png'),
  },
  {
    title: "Doctor's Appointment",
    body: 'How to find care, book visits, and use insurance',
    image: asset('2025/07/Doctors-appointment-1.png'),
  },
  {
    title: 'New Country Culture',
    body: 'Understand laws, etiquette, and what to expect socially',
    image: asset('2025/07/New-country-culture.png'),
  },
  {
    title: 'Religion and Relationship',
    body: 'Connect with faith groups and cultural communities',
    image: asset('2025/07/Religion-and-relationship.png'),
  },
  {
    title: 'Food & Health',
    body: 'Shop, cook, and eat well in your new environment',
    image: asset('2025/07/Food-and-health.png'),
  },
  {
    title: 'Financial Management',
    body: 'Learn how to budget, save, and send money home',
    image: asset('2025/07/Financial-management.png'),
  },
  {
    title: 'Entrepreneurship and More',
    body: 'Start a business, get licensed, and grow your future',
    image: asset('2025/07/Entrepreneurship.png'),
  },
]

const welcomeList = [
  'Join region-specific forums',
  'Ask questions and get honest answers',
  'Learn from peers and professionals',
  'Find verified service providers nearby',
]

const problems = [
  'Financial stress with no one to ask',
  'Chronic loneliness in a new place',
  'No access to reliable legal advice',
  'Struggling to feel like you belong',
]

const memberBenefits = [
  'Learn how to manage finances in your new country',
  'Connect with people going through the same journey',
  'Get verified legal and immigration help',
  'Access real community, not just information',
]

const services = [
  {
    title: 'Tutors',
    body: 'Personalized academic support for your children or yourself, from language learning to schoolwork help. Find tutors who speak your language and understand your goals.',
    image: asset('2025/07/Tutors-1-1024x683.webp'),
    icon: asset('2025/07/tutoring-2.png'),
  },
  {
    title: 'Tour Guides',
    body: 'Explore your new city with guides who understand both the culture you come from and the one you are entering. Great for orientation, sightseeing, or settling in.',
    image: asset('2025/07/Tour-Guides-1-1024x683.webp'),
    icon: asset('2025/07/tour-guide-2.png'),
  },
  {
    title: 'Pet Sitters',
    body: 'Need someone you can trust with your pet? Find reliable local sitters, often fellow immigrants, who treat your pet like family.',
    image: asset('2025/07/Dog-Sitters-1-1024x683.webp'),
    icon: asset('2025/07/pet-care-2.png'),
  },
]

const countries = [
  {
    title: 'USA',
    body: 'Find services, ask questions, and connect with others building a new life across the United States.',
    image: asset('2025/07/USA-1.webp'),
    href: 'https://immigrantknowhow.com/united-states/',
  },
  {
    title: 'Canada',
    body: 'Access Canada-specific support and immigrant-led resources for work, school, and community life.',
    image: asset('2025/07/Canada-1-1-1024x567.webp'),
    href: 'https://immigrantknowhow.com/canada-immigrants/',
  },
  {
    title: 'Europe',
    body: 'Join a growing European community with services and insights tailored to your local country and culture.',
    image: asset('2025/07/Europe-2-1-1024x576.webp'),
    href: 'https://immigrantknowhow.com/europe/',
  },
  {
    title: 'Great Britain',
    body: 'Join a growing Great Britain community with services and insights tailored to your local country and culture.',
    image: asset('2025/09/Great-Britain.jpg'),
    href: 'https://immigrantknowhow.com/great-britain/',
  },
]

const realLifeCards = [
  {
    title: 'Community',
    body: 'Join local forums, share experiences, ask questions, and connect with others who truly understand your journey and challenges.',
    image: asset('2025/07/engagement-1.png'),
  },
  {
    title: 'Pet Services',
    body: 'Find reliable pet sitters who respect your culture, lifestyle, and language, ensuring your animals are cared for with love.',
    image: asset('2025/07/pet-care-2.png'),
  },
  {
    title: 'Tour Guide',
    body: 'Book trusted local experts to explore your surroundings, learn hidden gems, and feel at home in your new community.',
    image: asset('2025/07/tour-guide-2.png'),
  },
  {
    title: 'Tutors',
    body: 'Get personalized academic support for you or your children, always available in multiple languages to meet your learning goals.',
    image: asset('2025/07/tutoring-2.png'),
  },
  {
    title: 'Faith & Culture',
    body: 'Stay rooted and connected with local faith groups and cultural communities that celebrate traditions and belonging.',
    image: asset('2025/07/church.png'),
  },
]

const connectionList = [
  'Find people who speak your language, and your experience',
  'Share your story and feel heard',
  'Ask questions, get answers, and offer support',
  'Join local events, forums, and interest groups',
  'Build a sense of belonging from day one',
]

const trustFeatures = [
  'Communicates clearly across cultures and languages',
  'Reduces isolation through real human connection',
  'Offers trusted services like pet sitters, tutors, and tour guides',
]

const testimonials = [
  {
    quote:
      'The staffing agency provided exceptional service, ensuring our hotel had the right personnel at the right time. Their swift response to our staffing needs significantly boosted our operational efficiency. Highly recommended!',
    author: 'Emily Johnson',
    location: 'Elmira, NY',
  },
  {
    quote:
      "We've been consistently impressed by the quality of staff provided by this agency. Their professionalism and reliability have greatly contributed to the smooth running of our hotel.",
    author: 'Lara K',
    location: 'Norfolk, NE.',
  },
  {
    quote:
      'The staffing solutions offered by this agency surpassed our expectations. From front desk to housekeeping, their personnel demonstrated proficiency and a strong work ethic.',
    author: 'Craig, Regina',
    location: 'Canada',
  },
  {
    quote:
      'The guidance we received from Immigrant Knowhow exceeded our expectations. From forums to expert sessions, the team offered solid, caring support and clear next steps.',
    author: 'Dave, Stoke-on-Trent',
    location: 'England',
  },
]

const testimonialCards = Array.from({ length: 3 }, (_, groupIndex) =>
  testimonials.map((item, itemIndex) => ({
    ...item,
    id: `${groupIndex}-${itemIndex}-${item.author}`,
  })),
).flat()

const faqs = [
  {
    q: 'What is Immigrant Knowhow and how does it work?',
    a: "Immigrant Knowhow is a platform that connects immigrants with trusted services, local community support, and expert guidance, customized for your country. You choose your region, explore listings, join forums, and get help from others who've been in your shoes.",
  },
  {
    q: 'Is Immigrant Knowhow free to use?',
    a: 'Yes! You can sign up for free to access community forums, browse services, and ask questions. Some premium content and provider services may include optional fees.',
  },
  {
    q: 'How are service providers verified?',
    a: 'All providers go through an identity verification process and are manually approved by our team before they appear in the public directory.',
  },
  {
    q: 'Is it safe to book services through Immigrant Knowhow?',
    a: 'Yes. Every service provider on our platform goes through identity verification and manual review before being approved. You can view their profiles, read reviews, and only release payment after a service is delivered.',
  },
  {
    q: 'Which countries do you currently serve?',
    a: 'We currently support users in the United States, Canada, Great Britain and Europe, with country-specific services and forums in each.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="ikh-button__icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 7.8 14.2 12l-4.7 4.2" />
    </svg>
  )
}

function CheckIcon({ kind = 'blue' }: { kind?: 'blue' | 'white' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`ikh-list-icon ikh-list-icon--${kind}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="m7.5 12.2 3 3 6-6.4" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="ikh-list-icon ikh-list-icon--danger">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.6 8.6 6.8 6.8M15.4 8.6l-6.8 6.8" />
    </svg>
  )
}

function ShieldIcon({ light = false }: { light?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`ikh-shield ${light ? 'ikh-shield--light' : ''}`}>
      <path d="M12 3.5 19 6v5.3c0 4.7-2.8 7.9-7 9.2-4.2-1.3-7-4.5-7-9.2V6l7-2.5Z" />
      <path d="m8.7 12.1 2.2 2.2 4.7-5" />
    </svg>
  )
}

function PrimaryButton({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'light'
}) {
  return (
    <a href={joinUrl} className={`ikh-button ikh-button--${variant}`}>
      <ArrowIcon />
      <span>{children}</span>
    </a>
  )
}

function TrustNote({ light = false, short = false }: { light?: boolean; short?: boolean }) {
  return (
    <div className={`ikh-trust ${light ? 'ikh-trust--light' : ''}`}>
      <ShieldIcon light={light} />
      <span>
        Trusted by {short ? '' : 'over '}
        <strong>10,000+</strong> immigrants {short ? 'in USA, Canada and Europe.' : 'in the U.S., Canada, and Europe'}
      </span>
    </div>
  )
}

function SectionActions({ light = false }: { light?: boolean }) {
  return (
    <div className="ikh-section-actions">
      <PrimaryButton variant={light ? 'light' : 'primary'}>Become A Member</PrimaryButton>
      <TrustNote light={light} />
    </div>
  )
}

export default function ImmigrantKnowhowHomepage() {
  return (
    <main className="ikh-page">
      <header className="ikh-header">
        <div className="ikh-shell ikh-header__inner">
          <Link href="/" className="ikh-logo-link" aria-label="Immigrant Knowhow home">
            <img
              src={asset('2024/05/ImmigrantsKnowHow-Logo.svg')}
              alt="ImmigrantsKnowHow Logo"
              className="ikh-logo"
            />
          </Link>

          <nav className="ikh-nav" aria-label="Primary navigation">
            <a href="https://immigrantknowhow.com/community">Community</a>
            <a href="#services">Services</a>
            <a href="#countries">Country</a>
            <a href="#contact">Contact</a>
          </nav>

          <PrimaryButton>Become A Member</PrimaryButton>
          <button className="ikh-menu" aria-label="Menu" type="button">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="ikh-hero">
        <div className="ikh-shell ikh-hero__inner">
          <div className="ikh-hero__copy">
            <p className="ikh-hero__kicker">
              Built for <span className="secondary">Every</span>
            </p>
            <h1>
              Immigra<span className="ikh-outline ikh-outline--hero">nt</span>
            </h1>
            <p className="ikh-hero__body">
              Find the support you need, or offer the services you have, with a community that
              understands your journey.
            </p>

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
              <PrimaryButton variant="outline">Register As Provider</PrimaryButton>
              <PrimaryButton>Become A Member</PrimaryButton>
            </div>

            <TrustNote light />
          </div>

          <div className="ikh-hero__media" aria-hidden="true">
            <img
              src={asset('2025/07/Strongest-Immigrant-Community-961x1024.webp')}
              alt=""
              className="ikh-hero__image"
            />
          </div>
        </div>
      </section>

      <section className="ikh-section ikh-how">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center">
            How <span className="secondary">Immigrant Knowhow</span> Works
          </h2>

          <div className="ikh-steps">
            {howItWorks.map((item) => (
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

          <SectionActions />
        </div>
      </section>

      <section className="ikh-section ikh-thrive">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
            We Help <span className="secondary">Immigrants</span> Thrive in a New Country
          </h2>

          <div className="ikh-thrive__layout">
            <div className="ikh-thrive__image-wrap">
              <img
                src={asset('2025/07/We-Help-Immigrants-Thrive-in-a-New-Country-893x1024.webp')}
                alt="We help immigrants thrive in a new country"
                className="ikh-thrive__image"
              />
            </div>

            <div className="ikh-thrive__content">
              <h3>Most newcomers don&apos;t arrive with a guidebook.</h3>
              <p>
                Immigrant Knowhow is your digital companion, built to help immigrants connect,
                share experiences, and get real support as they adjust to life in a new country.
              </p>

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

      <section id="community" className="ikh-section ikh-welcome">
        <div className="ikh-shell ikh-welcome__inner">
          <div className="ikh-welcome__copy">
            <h2>
              <small>
                <span className="secondary">Welcome to</span>
              </small>
              Immigrant Know<span className="ikh-outline">How</span>
            </h2>
            <p>
              Immigrant Knowhow is a global platform built to help immigrants find trusted
              services, expert guidance, and real community as they settle into life in a new
              country.
            </p>
            <p>
              Whether you&apos;re enrolling your kids in school, looking for a tutor, or just hoping
              to connect with someone who understands, you&apos;ll find real support here.
            </p>
            <p>It&apos;s a hub for immigrant experiences, where users can:</p>
            <ul className="ikh-check-list ikh-check-list--hero">
              {welcomeList.map((item) => (
                <li key={item}>
                  <CheckIcon kind="white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              From immigration and health to language, finance, and culture, this is your place to
              connect, grow, and thrive.
            </p>
          </div>

          <div className="ikh-welcome__media" aria-hidden="true">
            <img
              src={asset('2025/07/Welcome-to-Immigrant-KnowHow-3-785x1024.webp')}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="ikh-section ikh-compare">
        <div className="ikh-shell ikh-compare__grid">
          <article className="ikh-compare-card ikh-compare-card--problem">
            <h3>The Problem Without Support</h3>
            <p>New immigrants often face overwhelming challenges, alone.</p>
            <ul>
              {problems.map((item) => (
                <li key={item}>
                  <XIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="ikh-compare-card ikh-compare-card--member">
            <h3>
              With <span className="secondary">Immigrantion KnowHow</span> Member
            </h3>
            <p>Get the support you need, from people who understand.</p>
            <ul>
              {memberBenefits.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <SectionActions />
      </section>

      <section id="services" className="ikh-section ikh-services">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
            Services<span className="secondary"> We Offer</span>
          </h2>
          <p className="ikh-section-copy">Real help. Trusted people. Right when you need them.</p>

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

          <SectionActions />
        </div>
      </section>

      <section id="countries" className="ikh-country-intro">
        <div className="ikh-shell ikh-country-intro__inner">
          <div className="ikh-country-intro__media">
            <img
              src={asset('2025/07/Immigration-services-by-following-Countries-we-serve-image-1-666x1024.webp')}
              alt="Immigration services by countries we serve"
            />
          </div>

          <div className="ikh-country-intro__copy">
            <h2>
              Available in These <span className="secondary">Countries</span>
            </h2>
            <p>Tailored services and community support for every region we serve.</p>
            <p>
              Your journey is different depending on where you land. That&apos;s why Immigrant
              Knowhow offers dedicated spaces for each region, with services, community, and expert
              support designed for your specific needs.
            </p>
            <p className="ikh-country-intro__choose">Choose your country to begin.</p>
          </div>
        </div>
      </section>

      <section className="ikh-countries">
        <div className="ikh-shell">
          <h2 className="ikh-mobile-heading">Choose Your Country To Begin</h2>
          <div className="ikh-country-grid">
            {countries.map((item) => (
              <article className="ikh-country-card" key={item.title}>
                <a href={item.href}>
                  <img src={item.image} alt={item.title} />
                </a>
                <h3>
                  <a href={item.href}>{item.title}</a>
                </h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <SectionActions />
        </div>
      </section>

      <section className="ikh-section ikh-real-life">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center">
            We Help Immigrants Build <span className="secondary">Real Life</span> in a New Country
          </h2>
          <p className="ikh-section-copy">
            From everyday services to meaningful connections, you don&apos;t have to do it alone.
          </p>

          <div className="ikh-real-life__grid">
            {realLifeCards.map((item) => (
              <article className="ikh-real-life-card" key={item.title}>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <SectionActions />
        </div>
      </section>

      <section className="ikh-section ikh-connection">
        <div className="ikh-shell ikh-connection__inner">
          <div className="ikh-connection__copy">
            <h2>
              Turning Loneliness Into <span className="secondary">Connection</span>
            </h2>
            <p>Because no one should have to navigate a new country alone.</p>
            <p>Starting over in a new place can feel isolating, but it doesn&apos;t have to.</p>
            <p>
              Immigrant Knowhow helps you connect with people who understand your story. From
              community forums to local support, we&apos;re building a space where immigrants can
              share, learn, and grow, together.
            </p>
            <div className="ikh-desktop-only">
              <PrimaryButton>Become A Member</PrimaryButton>
            </div>
          </div>

          <div className="ikh-connection__list">
            <p>
              Whether you&apos;re looking for guidance or simply someone to talk to, you&apos;re not alone
              here.
            </p>
            <ul className="ikh-check-list">
              {connectionList.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="ikh-mobile-only">
              <SectionActions />
            </div>
          </div>
        </div>
      </section>

      <section className="ikh-section ikh-built">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center">
            Why We Built <span className="secondary"> Immigrant Knowhow</span>
          </h2>
          <p className="ikh-section-copy ikh-section-copy--wide">
            Because no one should have to start over alone. This platform exists to turn struggle
            into support, and isolation into connection.
          </p>

          <div className="ikh-video">
            <img src={asset('2025/07/Canada-1-1.webp')} alt="Canada community video preview" />
            <span className="ikh-video__play" aria-hidden="true" />
          </div>

          <SectionActions />
        </div>
      </section>

      <section className="ikh-section ikh-trust-section">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center">
            Why Immigrants Trust <span className="secondary"> Immigrant Knowhow</span>
          </h2>

          <div className="ikh-trust-layout">
            <div className="ikh-trust-layout__media">
              <img
                src={asset('2025/07/Some-Reasons-People-like-our-immigation-1-871x1024.webp')}
                alt="Why immigrants trust Immigrant Knowhow"
              />
            </div>
            <div className="ikh-trust-layout__copy">
              <p>
                Immigrant Knowhow gives people more than just resources, it gives them clarity,
                confidence, and community. Whether they&apos;re looking for a trusted service, helpful
                advice, or someone who understands what they&apos;re going through, members know this is
                a platform built for them.
              </p>
              <ul className="ikh-check-list">
                {trustFeatures.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                People trust Immigrant Knowhow because it&apos;s designed with their real-world
                challenges in mind. Everything built here, from forums to services, is shaped by
                feedback from immigrants just like them, in the U.S., Canada, and Europe.
              </p>
            </div>
          </div>

          <SectionActions />
        </div>
      </section>

      <section className="ikh-section ikh-testimonials">
        <div className="ikh-shell">
          <h2 className="ikh-heading ikh-heading--center">
            What Our <span className="secondary">Members Say</span>
          </h2>
          <TestimonialCarousel testimonials={testimonialCards} />

          <SectionActions />
        </div>
      </section>

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
            <img src={asset('2025/07/Call-to-action-Image-1.webp')} alt="" />
          </div>

          <div className="ikh-final-cta__side">
            <h3>
              Built for Real
              <br />
              Connections
            </h3>
            <p>
              Find people who understand your story. Ask questions, offer help, and feel part of
              something bigger.
            </p>
            <PrimaryButton>Become A Member</PrimaryButton>
            <TrustNote light />
          </div>
        </div>
      </section>

      <footer id="contact" className="ikh-footer">
        <div className="ikh-shell ikh-footer__grid">
          <div className="ikh-footer__brand">
            <img src={asset('2024/05/ImmigrantsKnowHow-Logo.svg')} alt="Immigrants KnowHow" />
            <p>
              Immigrant Knowhow is where real support meets real community. We help immigrants
              navigate life in a new country through trusted services, expert guidance, and
              meaningful human connection, starting in the U.S., Canada, Great Britain and Europe.
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
              We&apos;re here to make immigration feel less isolating and more empowering. By
              combining practical tools, real human connection, and community-driven support, we
              help you take control of your journey, wherever it begins.
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
          <a href="https://immigrantknowhow.com/privacy-policy/">Terms</a>
          <a href="https://immigrantknowhow.com/privacy-policy/">Privacy</a>
          <a href="https://www.jeremymcgilvrey.com/">Web Design Company</a>
        </div>
      </footer>
    </main>
  )
}
