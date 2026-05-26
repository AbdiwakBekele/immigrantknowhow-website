import { HUB_LOGIN_URL, HUB_REGISTER_URL, MEMBER_CTA_LABEL } from '@/app/lib/hub-links'
import { COMMUNITY_PAGE_PATH } from '@/app/lib/site-links'

const asset = (path: string) => `/images/home/${path}`

export const loginUrl = HUB_LOGIN_URL
export const joinUrl = HUB_REGISTER_URL
export const communityUrl = COMMUNITY_PAGE_PATH
export const memberCtaLabel = MEMBER_CTA_LABEL

export const heroChecklist = [
  { label: 'Service Providers:', text: 'Find trusted help near you' },
  { label: 'Resources:', text: 'Learn from articles, posts, videos, and ebooks' },
  { label: 'Community:', text: 'Connect with people who understand your journey' },
]

export const howItWorks = [
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

export const thriveCards = [
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
  { title: 'Food & Health', body: 'Shop, cook, and eat well in your new environment', image: asset('2025/07/Food-and-health.png') },
  { title: 'Financial Management', body: 'Learn how to budget, save, and send money home', image: asset('2025/07/Financial-management.png') },
  { title: 'Entrepreneurship and More', body: 'Start a business, get licensed, and grow your future', image: asset('2025/07/Entrepreneurship.png') },
]

export const services = [
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

export const connectionList = [
  'Find people who speak your language, and your experience',
  'Share your story and feel heard',
  'Ask questions, get answers, and offer support',
  'Join local events, forums, and interest groups',
  'Build a sense of belonging from day one',
]

export const trustFeatures = [
  'Communicates clearly across cultures and languages',
  'Reduces isolation through real human connection',
  'Offers trusted services like pet sitters, tutors, and tour guides',
]

export const testimonials = [
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

export const testimonialCards = testimonials.map((item, index) => ({
  ...item,
  id: `${index}-${item.author}`,
}))

export const faqs = [
  {
    q: 'Is Immigrant Knowhow legal, tax, or financial advice?',
    a: 'No. The platform provides educational information only. Users should consult a qualified lawyer, tax professional, or financial advisor before making decisions.',
  },
  {
    q: 'Do I need an account to contact providers?',
    a: 'Yes. Visitors can browse previews, but provider access and hub features require login.',
  },
  {
    q: 'Can I search by language?',
    a: 'Yes. The homepage search includes spoken language as an optional filter.',
  },
  {
    q: 'What types of services are available?',
    a: 'The hub can include many categories such as legal, tax, housing, education, healthcare, family, business, and local support services.',
  },
]
