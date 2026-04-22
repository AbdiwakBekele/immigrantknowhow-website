const asset = (path: string) => `/images/home/${path}`

export type CountryPageConfig = {
  pageTitle: string
  heroBody: string
  heroBodyMaxWidth?: string
  heroBodyFontSize?: string
  heroCopyBasis?: string
  heroCopyOffsetX?: string
  howItWorksTitle?: string
  howItWorksTitlePrefix?: string
  howItWorksTitleHighlight?: string
  howItWorksSubtitle?: string
  heroImage: string
  heroBackgroundImage: string
  heroImageClassName?: string
  heroVariant?: 'default' | 'country'
  heroTitleText?: string
  heroTitleLine2Prefix?: string
  heroTitleHighlight?: string
  heroTitleSuffix?: string
  keepHighlightWithPrevious?: boolean
  heroTitleThreeLines?: boolean
  heroSingleCta?: boolean
  heroActionsAlignStart?: boolean
  thriveHeadingFocus: string
  thriveBody: string
  countryIntroPrefix: string
  countryIntroHighlight: string
  countryIntroLead: string
  countryIntroBody: string
  countryIntroChoose: string
  countryIntroImage: string
  builtImage: string
  /** Shown in “Community & Forums in … / across …” on country pages. */
  forumsLabel?: string
  /** Shown in “Resources & Connections in …” and country-specific card lines. */
  resourcesLabel?: string
}

export const HOME_PAGE_CONFIG: CountryPageConfig = {
  pageTitle: 'Home',
  heroVariant: 'default',
  heroBody: 'Find the support you need, or offer the services you have, with a community that understands your journey.',
  heroImage: asset('2025/07/Strongest-Immigrant-Community-961x1024.webp'),
  heroBackgroundImage: asset('2025/07/Immigrant-Community-Bg.webp'),
  thriveHeadingFocus: 'Immigrants',
  thriveBody:
    'Immigrant Knowhow is your digital companion, built to help immigrants connect, share experiences, and get real support as they adjust to life in a new country.',
  countryIntroPrefix: 'Available in These',
  countryIntroHighlight: 'Countries',
  countryIntroLead: 'Tailored services and community support for every region we serve.',
  countryIntroBody:
    "Your journey is different depending on where you land. That's why Immigrant Knowhow offers dedicated spaces for each region, with services, community, and expert support designed for your specific needs.",
  countryIntroChoose: 'Choose your country to begin.',
  countryIntroImage: asset('2025/07/Immigration-services-by-following-Countries-we-serve-image-1-666x1024.webp'),
  builtImage: asset('2025/07/Canada-1-1.webp'),
}

export const UNITED_STATES_PAGE_CONFIG: CountryPageConfig = {
  pageTitle: 'United States',
  heroVariant: 'country',
  howItWorksTitlePrefix: '3 Simple Steps to Start in the ',
  howItWorksTitleHighlight: 'United States',
  howItWorksSubtitle:
    'Practical support and real connections to help you feel at home across the United States.',
  heroTitleText: 'Start Strong and Thrive in the',
  heroTitleHighlight: 'United States',
  heroSingleCta: true,
  heroActionsAlignStart: true,
  heroCopyOffsetX: '-24px',
  heroBody:
    'Connect with trusted services, meet other newcomers, and access expert guidance tailored for immigrants beginning their journey in the United States.',
  heroBodyMaxWidth: '920px',
  heroBodyFontSize: '22px',
  heroImage: '/USA/Build-Your-New-Life-in-the-United-States-1021x1024.webp',
  heroBackgroundImage: asset('2025/07/Immigrant-Community-Bg.webp'),
  heroImageClassName: 'ikh-hero__image--cutout',
  thriveHeadingFocus: 'Immigrants in the U.S.',
  thriveBody:
    'Immigrant Knowhow helps newcomers across the United States access localized support, trusted services, and people who understand the realities of starting over.',
  countryIntroPrefix: 'Available Across the',
  countryIntroHighlight: 'United States',
  countryIntroLead: 'Support designed for immigrants building life in America.',
  countryIntroBody:
    'From major cities to growing communities, find region-aware help, practical tools, and expert guidance tailored to your U.S. immigration and settlement needs.',
  countryIntroChoose: 'Choose your U.S. region to begin.',
  countryIntroImage: asset('2025/07/USA-1.webp'),
  builtImage: asset('2025/07/USA-1.webp'),
  forumsLabel: 'the United States',
  resourcesLabel: 'America',
}

export const CANADA_PAGE_CONFIG: CountryPageConfig = {
  pageTitle: 'Canada',
  heroVariant: 'country',
  howItWorksTitlePrefix: '3 Simple Steps to Start in ',
  howItWorksTitleHighlight: 'Canada',
  howItWorksSubtitle:
    'Practical support and real connections to help you feel at home across Canada.',
  heroTitleText: 'Your New Life in',
  heroTitleHighlight: 'Canada',
  heroTitleSuffix: 'Starts Here.',
  heroSingleCta: true,
  heroActionsAlignStart: true,
  heroCopyOffsetX: '-24px',
  heroBody:
    'Find the help you need, build connections with other newcomers, and access resources designed for immigrants making Canada their new home.',
  heroBodyMaxWidth: '920px',
  heroBodyFontSize: '25px',
  heroCopyBasis: '66%',
  heroImage: '/Canada/Build-Your-New-Life-in-the-Canada.webp',
  heroBackgroundImage: asset('2025/07/Canada-1-1-1024x567.webp'),
  heroImageClassName: 'ikh-hero__image--cutout ikh-hero__image--canada',
  thriveHeadingFocus: 'Immigrants in Canada',
  thriveBody:
    'Access practical Canadian newcomer support built around provinces, communities, and real experiences from immigrants who have already made the transition.',
  countryIntroPrefix: 'Available Across',
  countryIntroHighlight: 'Canada',
  countryIntroLead: 'Immigrant-focused support built for life in Canadian communities.',
  countryIntroBody:
    'Get help tailored to settlement in Canada, including local services, verified resources, and guidance that reflects your province, goals, and stage of journey.',
  countryIntroChoose: 'Choose your Canadian region to begin.',
  countryIntroImage: asset('2025/07/Canada-1-1-1024x567.webp'),
  builtImage: asset('2025/07/Canada-1-1.webp'),
  forumsLabel: 'Canada',
  resourcesLabel: 'Canada',
}

export const EUROPE_PAGE_CONFIG: CountryPageConfig = {
  pageTitle: 'Europe',
  heroVariant: 'country',
  howItWorksTitlePrefix: '3 Simple Steps to Start in ',
  howItWorksTitleHighlight: 'Europe',
  howItWorksSubtitle:
    'Practical support and real connections to help you feel at home across Europe.',
  heroTitleText: 'Start your new',
  heroTitleLine2Prefix: 'Life in',
  heroTitleHighlight: 'Europe',
  heroTitleSuffix: 'With confidence',
  keepHighlightWithPrevious: true,
  heroTitleThreeLines: true,
  heroSingleCta: true,
  heroActionsAlignStart: true,
  heroCopyOffsetX: '-24px',
  heroBody:
    'Discover trusted services, connect with other immigrants, and access expert guidance designed to help newcomers thrive across Europe.',
  heroBodyMaxWidth: '920px',
  heroBodyFontSize: '22px',
  heroCopyBasis: '66%',
  heroImage: '/Europe/Welcome-BG.webp',
  heroBackgroundImage: asset('2025/07/Europe-2-1-1024x576.webp'),
  heroImageClassName: 'ikh-hero__image--cutout',
  thriveHeadingFocus: 'Immigrants in Europe',
  thriveBody:
    'Find practical guidance for different European systems while staying connected to a growing network of immigrants and service providers across the region.',
  countryIntroPrefix: 'Available Across',
  countryIntroHighlight: 'Europe',
  countryIntroLead: 'Country-aware support for immigrants building life in Europe.',
  countryIntroBody:
    'Because every European country has different systems, our platform helps you find tailored support, verified resources, and local connections wherever you land.',
  countryIntroChoose: 'Choose your European country to begin.',
  countryIntroImage: asset('2025/07/Europe-2-1-1024x576.webp'),
  builtImage: asset('2025/07/Europe-2-1-1024x576.webp'),
  forumsLabel: 'Europe',
  resourcesLabel: 'Europe',
}

export const GREAT_BRITAIN_PAGE_CONFIG: CountryPageConfig = {
  pageTitle: 'Great Britain',
  heroVariant: 'country',
  howItWorksTitlePrefix: '3 Simple Steps to Start in ',
  howItWorksTitleHighlight: 'Great Britain',
  howItWorksSubtitle:
    'Practical support and real connections to help you feel at home across Great Britain.',
  heroTitleText: 'Start Strong and Thrive in',
  heroTitleHighlight: 'Great Britain',
  heroSingleCta: true,
  heroActionsAlignStart: true,
  heroBody:
    'Connect with trusted services, meet other newcomers, and access expert guidance tailored for immigrants beginning their journey in Great Britain.',
  heroBodyMaxWidth: '920px',
  heroBodyFontSize: '22px',
  heroCopyOffsetX: '-24px',
  heroImage: '/GreatBritain/Start-New-Life-In-Great-Britain.webp',
  heroBackgroundImage: asset('2025/09/Great-Britain.jpg'),
  heroImageClassName: 'ikh-hero__image--cutout',
  thriveHeadingFocus: 'Immigrants in Great Britain',
  thriveBody:
    'Connect with useful UK-focused resources, immigrant communities, and experienced providers who can help you adjust faster and make confident decisions.',
  countryIntroPrefix: 'Available Across',
  countryIntroHighlight: 'Great Britain',
  countryIntroLead: 'Support tailored for immigrants building life across the UK.',
  countryIntroBody:
    'From practical day-to-day guidance to trusted services, find region-aware help built for your immigration journey in England, Scotland, and Wales.',
  countryIntroChoose: 'Choose your UK region to begin.',
  countryIntroImage: asset('2025/09/Great-Britain.jpg'),
  builtImage: asset('2025/09/Great-Britain.jpg'),
  forumsLabel: 'Great Britain',
  resourcesLabel: 'Great Britain',
}
