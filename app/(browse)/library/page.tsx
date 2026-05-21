import type { Metadata } from "next";

import SitePage from "@/app/components/Layout/SitePage";
import { fetchPublicLibraryItems } from "@/app/lib/api/library";

import LibraryBookGrid from "./LibraryBookGrid";

export const metadata: Metadata = {
  title: "Library - Immigrants KnowHow",
  description: "Browse our digital library of ebooks and audiobooks.",
};

export default async function PublicLibraryPage() {
  const items = await fetchPublicLibraryItems();

  return (
    <SitePage wide className="ikh-site-page--library">
      <header className="mb-10 border-b border-[#e8ecf4] pb-7">
        <div className="flex flex-wrap items-end gap-3 md:gap-4">
          <h1 className="m-0 text-4xl font-bold tracking-tight text-[#111827] md:text-5xl">
            Library
          </h1>
          {items.length > 0 ? (
            <span className="mb-1 inline-flex items-center rounded-full bg-[#eff6ff] px-3.5 py-1.5 text-sm font-semibold text-[#1d4ed8]">
              {items.length} {items.length === 1 ? "title" : "titles"}
            </span>
          ) : null}
        </div>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#374151]">
          Browse ebooks and audiobooks. Sign in on the hub when you are ready to read or purchase.
        </p>
      </header>

      <LibraryBookGrid items={items} />
    </SitePage>
  );
}
