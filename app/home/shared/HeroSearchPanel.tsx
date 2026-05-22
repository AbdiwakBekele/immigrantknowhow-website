import type { PublicServiceType } from '@/app/lib/api/service-types'
import { PROVIDERS_PAGE_PATH } from '@/app/lib/site-links'

import { CompassIcon } from './ui'

const SPOKEN_LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'zh', label: 'Chinese (Mandarin)' },
  { value: 'hi', label: 'Hindi' },
  { value: 'ar', label: 'Arabic' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'tl', label: 'Tagalog' },
  { value: 'ru', label: 'Russian' },
]

export default function HeroSearchPanel({
  serviceTypes = [],
}: {
  serviceTypes?: PublicServiceType[]
}) {
  const options = serviceTypes ?? []

  return (
    <form className="ikh-hero-search" action={PROVIDERS_PAGE_PATH} method="get">
      <div className="ikh-hero-search__field">
        <label htmlFor="hero-service-type">Service Type</label>
        <select id="hero-service-type" name="service_type" defaultValue="" required>
          <option value="">Select a service</option>
          {options.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="ikh-hero-search__field">
        <label htmlFor="hero-location">Location</label>
        <input
          id="hero-location"
          name="location"
          type="text"
          placeholder="City, State or Zip Code"
          autoComplete="off"
        />
      </div>

      <div className="ikh-hero-search__field">
        <label htmlFor="hero-language">Spoken Language (Optional)</label>
        <select id="hero-language" name="language" defaultValue="">
          <option value="">Select a language</option>
          {SPOKEN_LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <button className="ikh-hero-search__submit" type="submit">
        <CompassIcon className="ikh-hero-search__icon" />
        <span>Search</span>
      </button>
    </form>
  )
}
