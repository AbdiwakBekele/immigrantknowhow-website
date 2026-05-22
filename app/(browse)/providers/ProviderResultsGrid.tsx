import type { PublicServiceProvider } from "@/app/lib/api/providers";
import { hubProviderProfileUrl } from "@/app/lib/hub-links";
import { providersSearchPath } from "@/app/lib/site-links";

function personName(provider: PublicServiceProvider): string {
  const user = provider.user;
  if (!user) {
    return "";
  }
  return [user.first_name, user.last_name].filter(Boolean).join(" ").trim();
}

function displayTitle(provider: PublicServiceProvider): string {
  return personName(provider) || provider.business_name || provider.display_name;
}

function businessSubtitle(provider: PublicServiceProvider): string | null {
  const business = provider.business_name?.trim();
  const name = personName(provider);
  if (!business || !name) {
    return null;
  }
  return business;
}

function pricingLabel(provider: PublicServiceProvider): string | null {
  if (provider.free_consultation) {
    return "Free consultation";
  }
  if (provider.hourly_rate) {
    return `$${Math.round(provider.hourly_rate)}/hr`;
  }
  if (provider.consultation_fee) {
    return `$${Math.round(provider.consultation_fee)} consult`;
  }
  return null;
}

function ratingLabel(provider: PublicServiceProvider): string {
  if (provider.total_reviews === 0) {
    return "New";
  }
  return provider.average_rating > 0
    ? provider.average_rating.toFixed(1)
    : "New";
}

type ProviderResultsGridProps = {
  providers: PublicServiceProvider[];
  searchParams: {
    service_type?: string;
    location?: string;
    language?: string;
    page?: string;
  };
  currentPage: number;
  lastPage: number;
};

export default function ProviderResultsGrid({
  providers,
  searchParams,
  currentPage,
  lastPage,
}: ProviderResultsGridProps) {
  if (providers.length === 0) {
    return (
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 text-center text-[#374151]">
        <p className="m-0 text-lg font-semibold text-[#111827]">No providers found</p>
        <p className="mt-2 text-sm leading-relaxed">
          Try a different service type, broaden your location, or remove the language filter.
        </p>
      </div>
    );
  }

  const prevHref =
    currentPage > 1
      ? providersSearchPath({ ...searchParams, page: String(currentPage - 1) })
      : null;
  const nextHref =
    currentPage < lastPage
      ? providersSearchPath({ ...searchParams, page: String(currentPage + 1) })
      : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {providers.map((provider) => {
          const title = displayTitle(provider);
          const subtitle = businessSubtitle(provider);
          const avatar = provider.user?.avatar_url;
          const price = pricingLabel(provider);
          const profileHref = hubProviderProfileUrl(provider.slug);

          return (
            <article
              key={provider.slug}
              className="flex h-full flex-col rounded-2xl border border-[#e8ecf4] bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-3">
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatar}
                    alt={title}
                    className="h-14 w-14 flex-shrink-0 rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-sm font-bold text-white">
                    {provider.user?.initials ?? "SP"}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="m-0 truncate text-lg font-bold text-[#111827]">{title}</h2>
                    {provider.background_check_clear ? (
                      <span className="rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#047857]">
                        Verified
                      </span>
                    ) : null}
                    {provider.is_featured ? (
                      <span className="rounded-full bg-[#fef3c7] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#b45309]">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  {subtitle ? (
                    <p className="mt-0.5 truncate text-xs text-[#6b7280]">{subtitle}</p>
                  ) : null}
                  {provider.primary_service_type ? (
                    <p className="mt-1 text-sm font-medium text-[#2563eb]">
                      {provider.primary_service_type}
                    </p>
                  ) : null}
                  <p className="mt-1 text-sm text-[#374151]">
                    <span className="font-semibold text-[#111827]">{ratingLabel(provider)}</span>
                    {provider.total_reviews > 0 ? (
                      <span className="text-[#6b7280]"> ({provider.total_reviews} reviews)</span>
                    ) : (
                      <span className="text-[#6b7280]"> · No reviews yet</span>
                    )}
                  </p>
                </div>
              </div>

              {provider.bio_excerpt || provider.tagline ? (
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#374151]">
                  {provider.tagline || provider.bio_excerpt}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {price ? (
                  <span className="rounded-full bg-[#eff6ff] px-2.5 py-1 text-xs font-semibold text-[#1d4ed8]">
                    {price}
                  </span>
                ) : null}
                {provider.serves_remote ? (
                  <span className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-xs font-medium text-[#374151]">
                    Remote
                  </span>
                ) : null}
                {provider.serves_in_person ? (
                  <span className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-xs font-medium text-[#374151]">
                    In-person
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {provider.service_types_labels.slice(0, 3).map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#e5e7eb] px-2.5 py-1 text-xs text-[#4b5563]"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#eef2f7] pt-4">
                <p className="m-0 truncate text-xs text-[#6b7280]">{provider.location_display}</p>
                <a
                  href={profileHref}
                  className="flex-shrink-0 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8]"
                >
                  View profile →
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {lastPage > 1 ? (
        <nav
          className="mt-8 flex items-center justify-between gap-4 border-t border-[#e8ecf4] pt-6"
          aria-label="Provider results pagination"
        >
          {prevHref ? (
            <a
              href={prevHref}
              className="rounded-lg border border-[#d1d5db] px-4 py-2 text-sm font-semibold text-[#111827] hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              ← Previous
            </a>
          ) : (
            <span />
          )}
          <p className="text-sm text-[#6b7280]">
            Page {currentPage} of {lastPage}
          </p>
          {nextHref ? (
            <a
              href={nextHref}
              className="rounded-lg border border-[#d1d5db] px-4 py-2 text-sm font-semibold text-[#111827] hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              Next →
            </a>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </>
  );
}
