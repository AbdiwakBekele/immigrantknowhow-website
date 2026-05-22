import type { PublicServiceType } from "@/app/lib/api/service-types";
import { PROVIDERS_PAGE_PATH } from "@/app/lib/site-links";

const SPOKEN_LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "zh", label: "Chinese (Mandarin)" },
  { value: "hi", label: "Hindi" },
  { value: "ar", label: "Arabic" },
  { value: "pt", label: "Portuguese" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "vi", label: "Vietnamese" },
  { value: "tl", label: "Tagalog" },
  { value: "ru", label: "Russian" },
];

type ProviderSearchFormProps = {
  serviceTypes: PublicServiceType[];
  initialServiceType?: string;
  initialLocation?: string;
  initialLanguage?: string;
};

export default function ProviderSearchForm({
  serviceTypes,
  initialServiceType = "",
  initialLocation = "",
  initialLanguage = "",
}: ProviderSearchFormProps) {
  return (
    <form
      className="ikh-provider-search"
      action={PROVIDERS_PAGE_PATH}
      method="get"
    >
      <div className="ikh-provider-search__field">
        <label htmlFor="provider-service-type">Service type</label>
        <select
          id="provider-service-type"
          name="service_type"
          defaultValue={initialServiceType}
        >
          <option value="">Any service</option>
          {serviceTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="ikh-provider-search__field">
        <label htmlFor="provider-location">Location</label>
        <input
          id="provider-location"
          name="location"
          type="text"
          placeholder="City, state, or zip code"
          defaultValue={initialLocation}
          autoComplete="off"
        />
      </div>

      <div className="ikh-provider-search__field">
        <label htmlFor="provider-language">Spoken language (optional)</label>
        <select
          id="provider-language"
          name="language"
          defaultValue={initialLanguage}
        >
          <option value="">Any language</option>
          {SPOKEN_LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <button className="ikh-provider-search__submit" type="submit">
        Search providers
      </button>
    </form>
  );
}
