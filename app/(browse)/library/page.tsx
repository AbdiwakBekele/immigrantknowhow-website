import type { Metadata } from "next";

import SitePage from "@/app/components/Layout/SitePage";
import { fetchPublicLibraryItems } from "@/app/lib/api/library";

import LibraryBookGrid from "./LibraryBookGrid";
import LibrarySearchField from "./LibrarySearchField";

export const metadata: Metadata = {
  title: "Library - Immigrants KnowHow",
  description: "Browse our digital library of ebooks and audiobooks.",
};

export const dynamic = "force-dynamic";

type PublicLibraryPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function PublicLibraryPage({ searchParams }: PublicLibraryPageProps) {
  const params = await searchParams;
  const search = params.search?.trim() ?? "";
  const page = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const result = await fetchPublicLibraryItems({
    search: search || undefined,
    page,
    perPage: 20,
  });

  return (
    <SitePage wide className="ikh-site-page--library">
      <header className="mb-5 border-b border-[#e8ecf4] pb-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-end gap-3 md:gap-4">
            <h1 className="mb-0 mt-2 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
              Library
            </h1>
          </div>
          <LibrarySearchField key={search} initialSearch={search} />
        </div>
      </header>

      <LibraryBookGrid
        items={result.items}
        search={search}
        currentPage={result.currentPage}
        lastPage={result.lastPage}
        perPage={result.perPage}
        total={result.total}
      />
    </SitePage>
  );
}
