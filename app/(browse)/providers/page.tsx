import type { Metadata } from "next";

import SitePage from "@/app/components/Layout/SitePage";
import { fetchPublicServiceProviders } from "@/app/lib/api/providers";
import { fetchPublicServiceTypes } from "@/app/lib/api/service-types";

import ProviderResultsGrid from "./ProviderResultsGrid";
import ProviderSearchForm from "./ProviderSearchForm";

export const metadata: Metadata = {
  title: "Find Service Providers - Immigrants KnowHow",
  description:
    "Search verified immigration and local service providers by service type, location, and language.",
};

export const dynamic = "force-dynamic";

type ProvidersPageProps = {
  searchParams: Promise<{
    service_type?: string;
    location?: string;
    language?: string;
    search?: string;
    page?: string;
  }>;
};

export default async function ProvidersPage({ searchParams }: ProvidersPageProps) {
  const params = await searchParams;
  const serviceType = params.service_type?.trim() ?? "";
  const location = params.location?.trim() ?? "";
  const language = params.language?.trim() ?? "";
  const search = params.search?.trim() ?? "";
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);

  const hasFilters = Boolean(serviceType || location || language || search);

  const [serviceTypes, results] = await Promise.all([
    fetchPublicServiceTypes(),
    hasFilters
      ? fetchPublicServiceProviders({
          service_type: serviceType || undefined,
          location: location || undefined,
          language: language || undefined,
          search: search || undefined,
          page,
        })
      : Promise.resolve({
          providers: [],
          currentPage: 1,
          lastPage: 1,
          total: 0,
        }),
  ]);

  const selectedServiceLabel = serviceTypes.find((t) => t.value === serviceType)?.label;

  return (
    <SitePage wide className="ikh-site-page--providers">
      <header className="mb-8 border-b border-[#e8ecf4] pb-7">
        <h1 className="m-0 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
          Find service providers
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#374151]">
          Browse trusted providers on Immigrants KnowHow. Use the filters below to match your
          needs—sign in on the hub when you are ready to contact a provider.
        </p>
      </header>

      <ProviderSearchForm
        serviceTypes={serviceTypes}
        initialServiceType={serviceType}
        initialLocation={location}
        initialLanguage={language}
      />

      {hasFilters ? (
        <section className="mt-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="m-0 text-2xl font-bold text-[#111827]">Search results</h2>
              <p className="mt-1 text-sm text-[#6b7280]">
                {results.total} {results.total === 1 ? "provider" : "providers"} found
                {selectedServiceLabel ? ` for ${selectedServiceLabel}` : ""}
                {location ? ` near ${location}` : ""}
              </p>
            </div>
          </div>

          <ProviderResultsGrid
            providers={results.providers}
            searchParams={{
              service_type: serviceType || undefined,
              location: location || undefined,
              language: language || undefined,
              page: page > 1 ? String(page) : undefined,
            }}
            currentPage={results.currentPage}
            lastPage={results.lastPage}
          />
        </section>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed border-[#d1d5db] bg-[#f9fafb] px-5 py-6 text-sm leading-relaxed text-[#4b5563]">
          Select a service type or enter a location to search the provider directory.
        </p>
      )}
    </SitePage>
  );
}
